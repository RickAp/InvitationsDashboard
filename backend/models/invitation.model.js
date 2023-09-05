import mongoose from "mongoose";

const invitationSchema = new mongoose.Schema({
    invitedName: {
        type: String,
        required: true,
    },
    entryDate: {
        type: String,
        required: true
    },
    expirationDate: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("Invitation", invitationSchema);