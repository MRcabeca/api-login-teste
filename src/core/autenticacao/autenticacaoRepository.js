const { postgresSql } = require('../../../config'),
    { Client } = require('pg'),
    db = require('../../helpers/db');

module.exports= {
    cadastrar,
    alterar,
    buscar,
    selecionar,
    login
}

const procedures ={
    cadastrar:'SELECT * FROM seguranca.cadastrarUsuario($1,$2)',
    alterar: 'SELECT * FROM seguranca.alterarUsuario($1,$2,$3)',
    buscar: 'SELECT * FROM seguranca.buscarUsuario($1)',
    selecionar: 'SELECT * FROM seguranca.selecionarUsuario($1,$2,$3,$4)',
    login: 'SELECT * FROM seguranca.loginUsuario($1,$2)'
}

async function cadastrar(params){
    const cliente = new Client({
        ...postgresSql
    });

    await cliente.connect();
    
    let retorno = await cliente
        .query({text:procedures.cadastrar,values:db.paramSort(params)})
        .then(res => {;return res.rows})
        .catch(e => {return e.stack});

    await cliente.end();
    
    return retorno;
}

async function alterar(params){
    const cliente = new Client({
        ...postgresSql
    });

    await cliente.connect();
    
    let retorno = await cliente
        .query({text:procedures.alterar,values:db.paramSort(params)})
        .then(res => {;return res.rows})
        .catch(e => {return e.stack});

    await cliente.end();
    
    return retorno;
}

async function buscar(params){
    const cliente = new Client({
        ...postgresSql
    });

    await cliente.connect();
    
    let retorno = await cliente
        .query({text:procedures.buscar,values:db.paramSort(params)})
        .then(res => {;return res.rows})
        .catch(e => {return e.stack});

    await cliente.end();
    
    return retorno;
}

async function selecionar(params){
    const cliente = new Client({
        ...postgresSql
    });

    await cliente.connect();
    
    let retorno = await cliente
        .query({text:procedures.selecionar,values:db.paramSort(params)})
        .then(res => {;return res.rows})
        .catch(e => {return e.stack});

    await cliente.end();
    
    return retorno;
}

async function login(params){
    const cliente = new Client({
        ...postgresSql
    });

    await cliente.connect();
    
    let retorno = await cliente
        .query({text:procedures.login,values:db.paramSort(params)})
        .then(res => {;return res.rows})
        .catch(e => {return e.stack});

    await cliente.end();
    
    return retorno;
}
