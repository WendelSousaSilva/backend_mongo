'use strict'
require('../models/user');

const mongoose = require('mongoose');
const User = mongoose.model('User');
const projection = '_id name email creationDate'

/* Exibe a Lista de Usuários */

exports.getAllUser = async() => {
    return await User.find({status: true})
};

/* Cria um Usuário */

exports.createUser = async(data) => {
    let user = new User(data);
    return await user.save();
}

/* Atualiza um Usuário */

exports.updateUser = async(id, data) => {
    console.log(data);
    /*
    let userUpdated = await User.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            email: data.email,
            password: data.password,
            status: data.status
        }
    })*/

    return await User.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            email: data.email,
            password: data.password,
            status: data.status
        }
    })
}

/* Deleta um Usuário do banco */

exports.deleteUser = async(id, data) => {
    return await User.findOneAndDelete({_id: id});
}

/* Altera o Status do Usuário */

exports.deleteLogicUser = async(id, data) => {
    console.log(data);
   
    return await User.findByIdAndUpdate(id, {
        $set: {
           
            status: false
        }
    })
}