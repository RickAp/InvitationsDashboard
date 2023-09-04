import { Router } from "express";
import { authValidation } from "../middlewares/validateToken.js";
import { 
    getInvitations, 
    getInvitation, 
    createInvitation, 
    deleteInvitation, 
    updateInvitation 
} from "../controllers/invitations.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createInvitationSchema } from "../schemas/invitations.schema.js";

const router = Router();

router.get("/invitations", authValidation, getInvitations);
router.get("/invitations/:id", authValidation, getInvitation);
router.post("/invitations", authValidation, validateSchema(createInvitationSchema), createInvitation);
router.delete("/invitations/:id", authValidation, deleteInvitation);
router.put("/invitations/:id", authValidation, updateInvitation);

export default router;

