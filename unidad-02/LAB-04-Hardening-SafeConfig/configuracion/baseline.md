# Actividad 17 — Checklist de hardening

| # | Control | Verificado | Evidencia |
|---|---|---|---|
| 1 | Puerto documentado | Sí | `01-inspeccion.sql` |
| 2 | Interfaces de escucha justificadas | No | Se encontró `*` |
| 3 | `pg_hba.conf` revisado | Sí | `01-inspeccion.sql` |
| 4 | Redes autorizadas restringidas | Pendiente | No se modificaron reglas |
| 5 | Autenticación segura | Sí | `scram-sha-256` |
| 6 | Superusuarios identificados | Sí | `02-roles.sql` |
| 7 | Cuentas de aplicación separadas | Pendiente | Sin confirmar |
| 8 | Privilegios mínimos | Pendiente | Sin confirmar |
| 9 | Extensiones revisadas | Sí | `03-configuracion.sql` |
| 10 | TLS verificado | Sí | `ssl = off` |
| 11 | Configuración protegida | Pendiente | Sin confirmar |
| 12 | Directorio de datos protegido | Pendiente | Sin confirmar |
| 13 | Firewall documentado | Pendiente | Sin confirmar |
| 14 | Actualizaciones documentadas | Pendiente | Sin confirmar |
| 15 | Configuración registrada | Sí | `01-inspeccion.sql` |

# Actividad 19 — Línea base de seguridad

## Red

- **Interfaces:** permitir únicamente las que se necesiten.
- **Puerto:** utilizar el 5432.
- **Firewall:** permitir conexiones solo de equipos autorizados.
- **Redes:** restringir el acceso a redes necesarias.

## Autenticación

- **Método:** utilizar `scram-sha-256`.
- **Credenciales:** usar contraseñas seguras y no compartirlas.
- **Administradores:** utilizar cuentas administrativas solamente cuando sea necesario.

## Autorización

- **Roles:** crear roles según las funciones de cada usuario.
- **Privilegios:** dar únicamente los permisos necesarios.
- **Aplicaciones:** utilizar cuentas distintas a las administrativas.

## Configuración

- **Parámetros:** revisar `listen_addresses` y los límites de conexión.
- **Extensiones:** mantener solamente las necesarias.
- **Conexiones:** establecer límites adecuados para el servidor.

## Sistema operativo

- **Propietario:** los archivos deben pertenecer a la cuenta correspondiente.
- **Permisos:** evitar que cualquier usuario pueda modificarlos.
- **Directorio de datos:** permitir acceso solamente a usuarios autorizados.

## Cifrado

- **TLS:** utilizarlo para proteger conexiones cuando sea necesario.
- **Credenciales:** evitar guardar contraseñas sin protección.
- **Información sensible:** proteger los datos importantes.

## Mantenimiento

- **Actualización:** mantener PostgreSQL actualizado.
- **Revisión periódica:** revisar configuraciones y permisos.
- **Documentación:** registrar los cambios realizados.