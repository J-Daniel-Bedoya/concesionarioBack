const { UsersServices } = require("../services");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.createUser(newUser);
    res.status(201).json(result);
    
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Incomplete info",
    });
  }
};

const  userLogin = async (req, res, next) => {
  try {
    const { id } = req.params
    const users = await UsersServices.getUser(id);
    res.json(users);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

module.exports = {
  userRegister,
  userLogin,
};