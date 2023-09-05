const db = require("../utils/database")
const {Suyers, Srice, Ssers, Sehicles, Sales} = require("../models")
const initModels = require("../models/initmodels.models")

initModels()

const users = [
    {
        email: "empleado@sincoayf.com",
        password: "1234"
    },       
]

const buyers = [
    {
       nombreCompleto: "Alberto Constructor",
       documento: "CC",
       numeroDocumento: "1023456789"
    },   
]

const vehicles = [
    {
       tipo: "carro",
       modelo: "2024 HR-V",
       color: "gray",
       esNuevo: true,
       kilometraje:0,
       precio:150000000,
       img:"https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/HR-V/Non-VLP/Global/MY24-HR-V-non-VLP-nav-2x.png?source=https%3a%2f%2fes.automobiles.honda.com%2f-%2fmedia%2fHonda-Automobiles%2fVehicles%2f2024%2fHR-V%2fNon-VLP%2fGlobal%2fMY24-HR-V-non-VLP-nav-2x.png&statusCode=301"
    },   
    {
       tipo: "moto",
       modelo: "CB 125F 2024",
       color: "red",
       esNuevo: true,
       kilometraje:0,
       precio:7000000,
       cilindraje:354,
       numVelocidades: 4,
       img:"https://a5i4f6g5.stackpathcdn.com/images/cms/CB190R_Red.png"
    },    
]

const sales = [
    {
       tipo: "carro",
       modelo: "2024 HR-V",
       color: "gray",
       esNuevo: true,
       kilometraje:0,
       precio:150000000,
       img:"https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/HR-V/Non-VLP/Global/MY24-HR-V-non-VLP-nav-2x.png?source=https%3a%2f%2fes.automobiles.honda.com%2f-%2fmedia%2fHonda-Automobiles%2fVehicles%2f2024%2fHR-V%2fNon-VLP%2fGlobal%2fMY24-HR-V-non-VLP-nav-2x.png&statusCode=301"
    },   
    {
       tipo: "moto",
       modelo: "CB 125F 2024",
       color: "red",
       esNuevo: true,
       kilometraje:0,
       precio:7000000,
       cilindraje:354,
       numVelocidades: 4,
       img:"https://a5i4f6g5.stackpathcdn.com/images/cms/CB190R_Red.png"
    },    
]



db.sync({force:true})
    .them(()=>{
        console.log("sincronizado")

    })
