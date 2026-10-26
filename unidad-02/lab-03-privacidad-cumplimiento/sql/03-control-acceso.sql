-- 03-control-acceso

CREATE ROLE analista NOLOGIN;

CREATE VIEW public.v_analitica_clientes AS
SELECT
    ciudad,
    CASE
        WHEN edad < 18 THEN 'Menor de 18'
        WHEN edad BETWEEN 18 AND 29 THEN '18-29'
        WHEN edad BETWEEN 30 AND 44 THEN '30-44'
        WHEN edad BETWEEN 45 AND 59 THEN '45-59'
        ELSE '60 o más'
    END AS rango_edad
FROM public.clientes;

GRANT USAGE ON SCHEMA public TO analista;

GRANT SELECT
ON public.v_analitica_clientes
TO analista;

SELECT
    grantee,
    table_name,
    privilege_type
FROM information_schema.role_table_grants
WHERE grantee = 'analista';

SELECT *
FROM public.v_analitica_clientes;

SELECT
    has_table_privilege('analista',
        'public.v_analitica_clientes', 'SELECT')
        AS acceso_vista,
    has_table_privilege('analista',
        'public.clientes', 'SELECT')
        AS acceso_clientes;
