import { z } from "zod";

export const createInvitationSchema = z.object({
    invitedName: z.string({
        required_error: "invitedName is required"
    }),
    entryDate: z.string({
        required_error: "entryDate is required"
    }).datetime(),
    expirationDate: z.string({
        required_error: "expirationDate is required"
    }).datetime(),
});