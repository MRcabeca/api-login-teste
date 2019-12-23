const repository = require('./autenticacaoRepository'),
    scope = require('./autenticacaoScope');


module.exports ={
    cadastrar,
    alterar,
    buscar,
    selecionar,
    login,
    refazerLogin
}

async function cadastrar(req,res){

    res.status(201);
}

async function alterar(req,res){
    res.status(200);
}

async function buscar(req,res){

    let retorno = 'retorno';
    res.status(200).json({contente:retorno});
}

async function selecionar(req,res){
    const usuario = {
        login: req.query.login || null,
        ativo: req.query.ativo || null,
        pagina: req.query.pagina || 1,
        quantidade: req.query.quantidade ||10
    }

    let retorno = await repository.selecionar(usuario);

    res.status(200).json({content:retorno});
}

async function login(req,res){
    res.status(200);
}

async function refazerLogin(req,res){
    res.status(200);
}