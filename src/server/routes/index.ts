import * as express from 'express';

import chirpsRouter from './chirpsRouter';

const router = express.Router();

router.use("/chirps", chirpsRouter);

export default router;

