# Informe — Laboratorio 1: Bitácoras y auditoría del dato

**Estudiante:** Luis Eduardo Valdez Rojas  
**Unidad:** III

## 1. Despliegue y situación inicial

Se trabajó con PostgreSQL 17.4 instalado en Windows. Se utilizó principalmente VS Code y también pgAdmin 4. Al principio, `log_statement` estaba en `none` y el registro de conexiones y desconexiones estaba desactivado. Por eso no había información suficiente para identificar quién había cambiado un dato anteriormente.

## 2. Configuración aplicada

Se mantuvo `logging_collector` activado y se configuraron `log_connections=on`, `log_disconnections=on` y el prefijo `%m [%p] user=%u db=%d app=%a client=%h `. Primero se usó `log_statement=ddl` y después `mod`. Los cambios de `ALTER SYSTEM` se aplicaron con `pg_reload_conf()`, sin reiniciar el servidor en esas actividades.

## 3. Eventos observados

Se encontraron conexiones exitosas de `app_ventas` y accesos rechazados por contraseña incorrecta o usuario inexistente. También quedaron registrados `GRANT`, `REVOKE`, `ALTER TABLE`, modificaciones `UPDATE` y errores de permisos. Por ejemplo, `soporte_ana` no pudo ejecutar `DELETE FROM clientes` y el intento de eliminar ese rol falló por dependencias.

## 4. Auditoría del dato

Se creó `auditoria.cambios_clientes` con datos del momento, usuario, aplicación, IP, operación y valores anteriores y nuevos en JSONB. La función usa `SECURITY DEFINER` para registrar los cambios con los permisos de su propietario, mientras `session_user` permite conservar el usuario que inició la sesión. El evento 1 muestra que `app_ventas` cambió el RFC del cliente 3 de `GAMA780912XYZ` a `GAMA780912ZZZ` el 08/11/2026 a las 17:28:07.

## 5. Limitaciones

Con `log_statement=mod` no quedaron registradas las lecturas `SELECT`. Además, una modificación de varias filas puede aparecer como una sola sentencia en la bitácora, pero generar varios registros en la tabla de auditoría. Se comprobó también que el administrador pudo desactivar el disparador, modificar un RFC y activarlo nuevamente sin generar un evento de auditoría para ese cambio.

## 6. Riesgos de la bitácora

Las sentencias pueden contener contraseñas o información sensible. Por eso se retiró la contraseña temporal al exportar el log. También existe el riesgo de pérdida o de acceso no autorizado a estos archivos. Se generó un SHA-256 para poder comprobar si la copia exportada cambia.

## 7. Cronología y conclusión

La cronología se encuentra en `evidencias/15-cronologia.md`, con eventos obtenidos del log y de la tabla de auditoría. Con la configuración aplicada sí se puede identificar el usuario de sesión, el momento y los valores antes y después de un cambio auditado. Sin embargo, no es posible reconstruir de forma completa un cambio anterior a la activación de la auditoría.

## Preguntas de reflexión

1. No se puede recuperar retroactivamente una evidencia que nunca se registró.
2. Conviene que PostgreSQL gestione su bitácora para conservar el registro independientemente de la terminal usada.
3. El prefijo indica quién, cuándo y desde dónde se generó una línea; el nivel indica qué sentencias se registran.
4. La sentencia indica la operación solicitada, mientras la auditoría por fila conserva los datos anteriores y nuevos.
5. `pg_stat_activity` muestra sesiones en ese momento; la bitácora conserva eventos de sesiones que ya terminaron.
6. En esta práctica no se configuró un mecanismo independiente para auditar al administrador. Su capacidad de desactivar el disparador es una limitación.
