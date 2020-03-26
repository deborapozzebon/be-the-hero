const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {
    const body = request.body;

    console.log(body);
    
    return response.json({
        evento: 'Semana OmnitStack 11.0',
        aluno: 'Débora Pozzebon 2'
    }) 
})

module.exports = routes;
