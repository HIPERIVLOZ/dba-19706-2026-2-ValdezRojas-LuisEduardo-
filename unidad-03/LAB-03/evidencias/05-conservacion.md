# 05 - Criterio de conservación de bitácoras

## Objetivo

En esta actividad se establecieron tiempos de conservación para los diferentes registros de PostgreSQL y MongoDB. La intención es evitar que la información importante de auditoría se pierda demasiado pronto y que pueda consultarse cuando sea necesario investigar algún problema.

Los periodos establecidos son propuestas para el escenario del laboratorio. No representan plazos legales definitivos, ya que estos tendrían que confirmarse con el área jurídica.

## Tabla de conservación

| Registro | Ubicación actual | Riesgo de pérdida observado | Sensibilidad | Periodo propuesto | Justificación | Dónde se conserva | Quién puede leerlo | Acción al vencer |
|---|---|---|---|---|---|---|---|---|
| Accesos de PostgreSQL | Archivo del colector (`pg_current_logfile()`) | Rotación del archivo o reinstalación del servidor | Media | 90 días | Permite revisar conexiones y desconexiones recientes. | Almacenamiento interno protegido | DBA y Auditoría Interna | Eliminar después de verificar su fecha y respaldo. |
| Cambios de privilegios y estructura | Archivo del colector | Rotación, eliminación accidental o pérdida del servidor | Alta | 1 año | Estos cambios pueden afectar directamente la seguridad de la base de datos. | Repositorio interno de auditoría protegido | DBA y Auditoría Interna | Archivar y eliminar al vencer el plazo autorizado. |
| Modificaciones de datos (`log_statement = 'mod'`) | Archivo del colector | Rotación y exposición de información personal | Alta | 1 año | Ayuda a investigar modificaciones realizadas sobre los registros. | Almacenamiento interno cifrado y restringido | DBA y Auditoría Interna | Revisar si existe una investigación pendiente antes de eliminar. |
| `auditoria.cambios_clientes` | Tabla en `comercial` | Eliminación de registros, fallos del servidor o cambios no autorizados | Alta, contiene datos personales | 1 año | Permite conocer quién modificó un cliente y cuándo ocurrió. | Base de datos y respaldo protegido | Auditoría Interna y DBA autorizado | Evaluar anonimización o eliminación según la autorización correspondiente. |
| Bitácora de `mongod` | `systemLog.path` o salida estándar | Rotación, reinicio o eliminación del archivo | Media | 90 días | Permite revisar errores, conexiones y eventos del servidor. | Almacenamiento interno protegido | DBA MongoDB y Auditoría Interna | Archivar y eliminar cuando termine el periodo. |
| `system.profile` | Colección `system.profile` | Se sobrescribe automáticamente por su capacidad limitada | Alta, puede contener consultas y datos sensibles | 7 días mediante exportaciones | Permite revisar operaciones realizadas y detectar comportamientos anormales. | Exportaciones protegidas fuera de MongoDB | DBA MongoDB y Auditoría Interna | Eliminar las exportaciones al vencer el periodo, si no existe una investigación pendiente. |
| Instantáneas de privilegios (MongoDB) | `auditoria.instantaneas_privilegios` | Eliminación de documentos o pérdida de la base | Alta | 1 año | Permite comparar los permisos existentes y detectar cambios inesperados. | Base de datos y respaldo protegido | DBA MongoDB y Auditoría Interna | Archivar y eliminar después de la revisión correspondiente. |

## Reglas generales de conservación

1. Las bitácoras deben almacenarse en ubicaciones protegidas y con acceso limitado.
2. Los registros exportados deben contar con un hash SHA-256 para comprobar que no fueron modificados.
3. Antes de eliminar información, se debe comprobar que no exista una investigación o revisión pendiente.
4. Los datos personales deben conservarse únicamente durante el tiempo necesario para cumplir su finalidad.
5. Cuando exista una obligación legal de conservación, el plazo deberá confirmarse con el área jurídica.
6. Las exportaciones deben revisarse para evitar que incluyan contraseñas u otros secretos.

## Preguntas de la actividad

**1. ¿Por qué la bitácora de cambios de privilegios merece más tiempo de conservación que la de consultas rutinarias?**

Porque los cambios de privilegios pueden afectar directamente la seguridad de la base de datos. Por ejemplo, si alguien otorga permisos a un usuario que no debería tenerlos, es importante poder revisar ese cambio incluso después de varios meses. En cambio, las consultas rutinarias normalmente tienen menor importancia para una investigación.

**2. ¿Qué control de integridad aplicarás a las bitácoras exportadas?**

Se utilizará un hash SHA-256 para comprobar que los archivos exportados no hayan sido modificados. Si el hash calculado posteriormente no coincide con el original, significa que el archivo pudo haber cambiado.

**3. ¿Qué diferencia hay entre conservar una bitácora y respaldar una base de datos?**

Conservar una bitácora significa guardar los registros de las actividades que ocurrieron en el servidor, como conexiones, consultas y modificaciones. Respaldar una base de datos significa guardar una copia de su información y estructura para poder recuperarla si ocurre algún problema.

## Conclusión

La conservación de bitácoras es importante porque no basta con registrar los acontecimientos, también es necesario mantener esa información disponible durante un tiempo razonable. En este caso se propusieron diferentes periodos dependiendo de la importancia y sensibilidad de cada registro.

También se debe tener cuidado con los datos personales que pueden aparecer en las bitácoras, por lo que no deberían conservarse indefinidamente ni estar disponibles para cualquier usuario.