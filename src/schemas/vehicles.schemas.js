/**
 * @openapi
 * components:
 *   schemas:
 *     vehicles:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         tipo:
 *           type: string
 *           example: "carro"
 *         modelo:
 *           type: string
 *           example: "2024 HR-V"
 *         color:
 *           type: string
 *           example: "Gray"
 *         esNuevo:
 *           type: boolean
 *           example: false
 *         img:
 *           type: string
 *           example: "URL o ruta de la imagen"
 *         kilometraje:
 *           type: int
 *           example: 15000
 *         cilindraje:
 *           type: int
 *           example: 150
 *         numVelocidades:
 *           type: int
 *           example: 4
 *         precio:
 *           type: int
 *           example: 234000
 *         fechaRegistro:
 *           type: string
 *           example: 01/01/2023
 *     createVehicles:
 *       type: object
 *       properties:
 *         tipo:
 *           type: string
 *           example: "carro"
 *         modelo:
 *           type: string
 *           example: "2024 HR-V"
 *         color:
 *           type: string
 *           example: "Gray"
 *         esNuevo:
 *           type: boolean
 *           example: false
 *         img:
 *           type: string
 *           example: "URL o ruta de la imagen"
 *         kilometraje:
 *           type: int
 *           example: 15000
 *         cilindraje:
 *           type: int
 *           example: 150
 *         numVelocidades:
 *           type: int
 *           example: 4
 *         precio:
 *           type: int
 *           example: 234000
 *         fechaRegistro:
 *           type: string
 *           example: 01/01/2023
 *     updateVehicles:
 *       type: object
 *       properties:
 *         color:
 *           type: string
 *           example: "Gray"
 *         esNuevo:
 *           type: boolean
 *           example: false
 *         img:
 *           type: string
 *           example: "URL o ruta de la imagen"
 *         kilometraje:
 *           type: int
 *           example: 15000
 *         cilindraje:
 *           type: int
 *           example: 150
 *         numVelocidades:
 *           type: int
 *           example: 4
 *         precio:
 *           type: int
 *           example: 234000
 *         fechaRegistro:
 *           type: string
 *           example: 01/01/2023
 *     deleteVehicles:
 *       type: object
 *       properties:
 *         message: 
 *           type: string
 *           example: Elemento eliminado correctamente
 */
