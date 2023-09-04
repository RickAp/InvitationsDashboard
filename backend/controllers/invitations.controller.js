import Invitation from "../models/invitation.model.js";

export const getInvitations = async (req, res) => {
    const invitations = await Invitation.find({
        user: req.user.id
    }).populate('user');
    res.json(invitations);
};

export const getInvitation = async (req, res) => {
    const invitation = await Invitation.findById(req.params.id).populate('user');

    if (!invitation) return res.status(404).json({ message: "Invitation not found" });
    res.json(invitation);
};

export const createInvitation = async (req, res) => {
    const { invitedName, entryDate, expirationDate } = req.body;
    const newInvitation = new Invitation({
        invitedName,
        entryDate,
        expirationDate,
        user: req.user.id
    });
    const newSavedInvitation = await newInvitation.save();
    res.json(newSavedInvitation);
};

export const deleteInvitation = async (req, res) => {
    const invitation = await Invitation.findByIdAndDelete(req.params.id);

    if (!invitation) return res.status(404).json({ message: "Invitation not found" });
    return res.sendStatus(204);
};

export const updateInvitation = async (req, res) => {
    const invitation = await Invitation.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });

    if (!invitation) return res.status(404).json({ message: "Invitation not found" });
    res.json(invitation);
};