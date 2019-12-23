const ctrl = require('./autenticacaoController');

const routes = [
    {
        url: '/api/usuario',
        routes: [
            { method: 'post', controller: ctrl.cadastrar },
            { method: 'get', controller: ctrl.selecionar }
        ]
    },
    {
        url: '/api/usuario/:id',
        routes: [
            { method: 'put', controller: ctrl.alterar },
            { method: 'get', controller: ctrl.buscar },
        ]
    },
    {
        url: '/api/login',
        routes: [
            { method: 'post', controller: ctrl.login }
        ]
    },
    {
        url: '/api/refazerLogin',
        routes: [
            { method: 'post', controller: ctrl.refazerLogin }
        ]
    }
];

module.exports = routes;