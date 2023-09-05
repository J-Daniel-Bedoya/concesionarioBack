
/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         email:
 *           type: string
 *           example: josedaniel37@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     register:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: josedaniel37@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: Bearer
 *       bearerFormat: JWT
 */