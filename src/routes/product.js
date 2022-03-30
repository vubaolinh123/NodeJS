import { Router } from 'express';
import { create, remove, getOne, list, update } from '../controllers/product';
import { userById } from '../controllers/user';
import { isAdmin, isAuth, requiredSigin } from '../middlewares/checkAuth';
const router = Router()

router.get("/products", list)
router.post("/products/:userId", requiredSigin, isAuth, isAdmin, create)
router.get("/products/:id", getOne)
router.delete("/products/:id", remove)
router.put("/products/:id", update)


router.param('userId', userById)

export default router;