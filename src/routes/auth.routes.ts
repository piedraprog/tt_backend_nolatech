import { Router } from 'express';
import { login, refreshToken, register } from '../controllers/auth.controller';
import { validateJWT } from '../middlewares/jwt-validation.middleware';
import { PermissionEnum } from '../database/schemas/permission.schema';
import { accessValidation } from '../middlewares/access.middleware';

const AuthRoutes = Router();

AuthRoutes.post('/login', login)
AuthRoutes.post('/register', register)
AuthRoutes.post('/refresh', refreshToken)

AuthRoutes.get('/prueba', validateJWT, accessValidation(PermissionEnum.READ), (_req, res) => {
    res.send('prueba')
})

export default AuthRoutes