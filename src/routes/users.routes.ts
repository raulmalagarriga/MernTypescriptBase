import { Router } from 'express';
import {
    getUsersController,
    getUserByIdController,
    createUserController,
    updateUserController,
    deleteUserController
} from '../controllers/users.controllers';
import { validateUser } from '../utils/validations/users.validations';
const router = Router();

// ROUTES
router.get('/', getUsersController);

router.get('/:id', getUserByIdController);

router.post('/', validateUser, createUserController);

router.put('/:id', validateUser, updateUserController);

router.delete('/:id', deleteUserController);

export default router;