
SELECT
    extname,
    extversion
FROM pg_extension
ORDER BY extname;

SHOW max_connections;

SHOW superuser_reserved_connections;

SHOW statement_timeout;

SHOW idle_in_transaction_session_timeout;

SHOW ssl;

SHOW ssl_min_protocol_version;

SELECT
    a.pid,
    a.usename,
    a.client_addr,
    s.ssl,
    s.version,
    s.cipher
FROM pg_stat_ssl s
JOIN pg_stat_activity a ON s.pid = a.pid
WHERE s.pid = pg_backend_pid();
