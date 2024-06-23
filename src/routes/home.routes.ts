import { Router, Request, Response } from 'express';

// New Router instance
const router = Router();

// Home routes
router.get('/', (req: Request, res: Response) => {
    res.send('Server made with node JS, Typescript and Express');
});

export default router;