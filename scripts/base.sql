CREATE SCHEMA seguranca;

CREATE TABLE seguranca.usuario(
    id SERIAL PRIMARY KEY IDENTITY(1,1),
    login VARCHAR(100) CONSTRAINT usuario_login_unique UNIQUE, 
    senha   VARCHAR(100),
    ativo   BOOLEAN DEFAULT true
);
