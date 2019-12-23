const express = require('express'),
    app = express(),
    helmet = require('helmet'),
    config =  require('./config'),
    bodyParser = require('body-parser');


(async function(){
    try{
        app.use(helmet());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json({ limit: '50mb' }));

        require('./src/api/routes/ping')(app);
        require('./src/api/routes/set')(app,`${__dirname}/src/core`);


        app.listen(config.port, function () {
            console.log(`Api de login Rodando na porta ${config.port}`);
        });
    }
    catch(erro){
        console.log(erro);
    }
})();