import {Router, Request, Response} from 'express';
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

router.put('/', validateUser, updateUserController);

router.delete('/', deleteUserController);

export default router;