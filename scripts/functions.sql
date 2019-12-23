
CREATE OR REPLACE FUNCTION cadastrarUsuario(
    pLogin VARCHAR(100), 
    pSenha   VARCHAR(100)
)
RETURNS VOID as 
$$
BEGIN

END

$$LANGUAGE plpgsql
 ---------------------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION alterarUsuario(
    pId INTEGER,
    pLogin VARCHAR(100), 
    pSenha   VARCHAR(100),
    ativo BOOLEAN
)
RETURNS VOID as 
$$
BEGIN

END

$$LANGUAGE plpgsql
 ---------------------------------------------------------------------------------------------
DROP FUNCTION IF EXISTS seguranca.selecionarUsuario;
CREATE FUNCTION seguranca.selecionarUsuario(
    pLogin VARCHAR(100),
    pAtivo BOOLEAN,
    pPagina INTEGER,
    pQuantidade INTEGER
)
RETURNS TABLE(
    totalRegistros INTEGER,
    registros JSON
) as
$$
DECLARE totalRegistros INTEGER;
    registros JSON;
    
BEGIN

    registros:=(
        SELECT json_agg(r) 
            FROM (
                SELECT  MD5(u.id::TEXT) as "id",
                        u.login,
                        u.ativo
                FROM seguranca.usuario u
                WHERE (pLogin IS NULL OR u.login ILIKE '%' || unaccent(pLogin) || '%') AND
                    (pAtivo IS NULL OR u.ativo = pAtivo)
                ORDER BY u.ativo DESC,u.login ASC
                LIMIT pQuantidade OFFSET (pPagina - 1) * pQuantidade
            )r
    );

    totalRegistros:=(
        SELECT COUNT(u.id)
            FROM seguranca.usuario u
            WHERE (pLogin IS NULL OR u.login ILIKE '%' || unaccent(pLogin) || '%') AND
                (pAtivo IS NULL OR u.ativo = pAtivo)
    );

    RETURN QUERY(
        SELECT totalRegistros,
                registros
    );

END;
$$
LANGUAGE plpgsql
 ---------------------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION buscarUsuario(
    pId INTEGER
)
RETURNS VOID as 
$$
BEGIN

END

$$LANGUAGE plpgsql
 ---------------------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION loginUsuario(
    pLogin VARCHAR(100), 
    pSenha   VARCHAR(100)
)
RETURNS VOID as 
$$
BEGIN

END

$$LANGUAGE plpgsql