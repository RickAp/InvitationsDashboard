import mongoose from "mongoose";

const invitationSchema = new mongoose.Schema({
    invitedName: {
        type: String,
        required: true,
    },
    entryDate: {
        type: Date,
        required: true
    },
    expirationDate: {
        type: Date,
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