const User = require('../model/User');
const validator = require('validator');
class UserController {
  static async loginView(req, res) {
    res.render('login', {title: 'Express', serverBaseUrl: process.env.SERVER_BASE_URL});
  }

  static async listView(req, res) {

  }

  static async login(req, res) {
    let bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');

    // Verifica se todos os campos foram enviados
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({success: false, message: 'Todos os campos são obrigatórios!'});
    }

    let email = req.body.email;
    let password = req.body.password;
    let users = await User.getByEmail(email);

    if (users.length === 0) {
      return res.status(401).json({message: 'Usuário ou senha inválidos!'});
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({success: false, message: 'Email inválido!'});
    }

    let user = users[0];

    try {
      let match = await bcrypt.compare(password, user.password);
      if (match) {
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign({userId: user.id}, secret, {expiresIn: '1h'});

        return res.status(200).json({success: true, token: token});
      } else {
        return res.status(401).json({success: false, message: 'Usuário ou senha inválidos!'});
      }
    } catch (error) {
      return res.status(500).json({success: false, message: 'Erro ao autenticar usuário!'});
    }
  }


  static async create(req, res) {
    let bcrypt = require('bcryptjs');
    let salt = await bcrypt.genSalt(10);

    // Verifica se todos os campos foram enviados
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({success: false, message: 'Todos os campos são obrigatórios!'});
    }


    let name = req.body.name;
    let email = req.body.email;
    let password = await bcrypt.hash(req.body.password, salt);

    if (!validator.isEmail(email)) {
      return res.status(400).json({success: false, message: 'Email inválido!'});
    }

    let user = await User.getByEmail(email);

    if (user.length > 0) {
      return res.status(400).json({success: false, message: 'Email já cadastrado!'});
    }

    user = {
      name: name,
      email: email,
      password: password
    };


    try {
      let result = await User.create(user);
      return res.status(201).json({success: true, message: 'Usuário criado com sucesso!'});
    } catch (error) {
      return res.status(500).json({success: false, message: 'Erro ao criar usuário!'});
    }
  }


}

module.exports = UserController;