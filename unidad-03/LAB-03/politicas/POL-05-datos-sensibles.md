# POL-05 - Política de uso de datos sensibles

## Objetivo

Proteger la información personal de los clientes y evitar que sea consultada, compartida o utilizada por personas que no tengan autorización.

## Alcance

Aplica a los datos personales almacenados en PostgreSQL y MongoDB, incluyendo nombres, correos, teléfonos, RFC, información de ubicación y registros de auditoría que puedan contener estos datos.

## Regla

El acceso a información sensible deberá estar relacionado con una actividad laboral autorizada y contar con la aprobación del propietario de los datos.

Los usuarios que solamente necesiten información de contacto deberán utilizar vistas o mecanismos que oculten los datos que no sean necesarios para su trabajo. Las consultas y modificaciones sobre información sensible deberán quedar registradas cuando los mecanismos de auditoría disponibles lo permitan.

No se deberán compartir archivos de bitácoras o exportaciones que contengan datos personales completos o contraseñas sin realizar una revisión previa.

## Responsable

- **Decide:** propietario de los datos.
- **Ejecuta:** DBA.
- **Supervisa:** Seguridad TI y Auditoría Interna.

## Excepciones

Cuando una investigación requiera consultar información sensible completa, el acceso deberá ser autorizado por el propietario de los datos y quedar registrado. Una emergencia podrá ser atendida por Seguridad TI, con revisión posterior.

## Evidencia

- Diccionario de datos de `clientes`.
- `evidencias/diccionario-clientes.csv`.
- Archivo `evidencias/E2-privilegios.txt`.
- Archivo `evidencias/E4-muestra-auditoria.txt`.
- Archivo `evidencias/E5-bitacora-postgresql.log`, después de revisar y ocultar secretos.

## Revisión

Esta política se revisará cada tres meses o cuando se agreguen nuevas columnas que almacenen información personal.