-- Actividades 1-4
-- Luis Eduardo Valdez Rojas#4-1

-- Consultar la versión de PostgreSQL
SELECT version();

-- Consultar el puerto

-- Consultar las interfaces de escucha
SHOW listen_addresses;

-- Consultar SSL
SHOW ssl;

-- Consultar el mecanismo de contraseñas
SHOW password_encryption;

-- Consultar las conexiones activas
SELECT
    pid,
    usename,
    datname,
    client_addr,
    client_port,
    application_name
FROM pg_stat_activity;

-- Archivos de configuración
SHOW config_file;

SHOW hba_file;

SHOW ident_file;

-- Directorios y registros
SHOW data_directory;

SHOW log_directory;

SHOW log_connections;

SHOW log_disconnections;

-- reglas de acceso

SHOW listen_addresses;

SELECT
    type,
    database,
    user_name,
    address,
    auth_method
FROM pg_hba_file_rules;

