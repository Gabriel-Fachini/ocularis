import { Router } from 'express'
import { getProducts } from '@controllers/products/getProducts'
import { registerNewUser } from '@controllers/users/register'
import { loginUser } from '@controllers/users/login'

export const router = Router()

router.get('/healthcheck', (_req, res) => {
  res.status(200).send({ message: 'Hello World!' })
})

/* Rotas cliente */
// Rotas GET
router.get('/products', getProducts)
router.get('/getUser')

// Rotas POST
router.post('/register', registerNewUser)
router.post('/login', loginUser)
router.post('/buy')

/* Rotas admin */
router.get('/admin/products')
router.get('/admin/products/:slug')
router.post('/admin/products')
