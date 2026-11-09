CREATE SCHEMA dba;

REVOKE ALL ON SCHEMA dba FROM PUBLIC;

CREATE VIEW dba.bitacora AS
SELECT t.n AS num, t.linea
FROM regexp_split_to_table(pg_read_file(pg_current_logfile()), E'\n')
     WITH ORDINALITY AS t(linea, n)
WHERE t.linea <> '';

--prueba

SELECT num, linea FROM dba.bitacora ORDER BY num DESC LIMIT 10;

SELECT linea FROM dba.bitacora WHERE linea ILIKE '%update%';

SELECT linea FROM dba.bitacora WHERE linea ~ '(FATAL|ERROR)';