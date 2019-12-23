const fs = require('fs'),
    resolve = require('path').resolve,
    Settings = require('../../../config');


module.exports = async(app,src) =>{
    let arquivos = await encontrarRotas(src);

    //le os arquivos de rotas e seta cada rota
    arquivos.forEach((arquivo) =>{
        let rotas = require(arquivo);
        rotas.forEach((rota) =>{
            rota.routes.forEach((x) =>{
                app[x.method](rota.url,handler(x.controller))
            })
        })
    })
}


//função para encontra os caminhos de arquivos de cada funcionalidade
function encontrarRotas(caminho,arquivos = []){
    //caminho absoluto
    caminho = resolve(caminho);
    //Lendo os arquivos do diretorio
    let dir = fs.readdirSync(caminho);
    for(var i in dir){
        //se for uma pasta, encontra os arquivos da pasta também
        if (fs.statSync(`${caminho}/${dir[i]}`).isDirectory()) {
            encontrarRotas(`${caminho}/${dir[i]}`,arquivos);
            continue;
        }

        //Array com todos os caminho encontrados com Route no nome
        if(`${caminho}/${dir[i]}`.match(/Route.js$/))
            arquivos.push(`${caminho}/${dir[i]}`);
    }
    //devolve o resultado
    return arquivos
}

//middleware para tratamento de erros e centralização das requisações
function handler(controller){
    return async(req,res,next) =>{
        try{
            //função
            await controller(req,res);
        }
        catch(erro){
            //tratamento para varios erros no escopo
            if (erro.statusCode == 400 && !erro.messages)
                erro.message ? erro.messages = { snack: erro.message } : null;

            //resposta de erros gerais
            // res.erro(erro.messages || Settings.standardErrorMessage, erro.content || null, erro.statusCode || 500);
            res.status(erro.statusCode || 500).json({message:erro.message || Settings.standardErrorMessage})
        }
    }

}