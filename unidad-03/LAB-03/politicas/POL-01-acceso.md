# POL-01 - Política de acceso

## Objetivo

Evitar que personas sin autorización puedan consultar, modificar o eliminar información de las bases de datos.

## Alcance

Aplica a PostgreSQL, MongoDB y sus respectivos ambientes de desarrollo, pruebas y producción. Incluye tablas, colecciones, vistas, bitácoras y registros de auditoría.

## Regla

Todo acceso debe ser solicitado por el responsable del área correspondiente y aprobado por el propietario de los datos. El DBA será responsable de asignar los permisos aprobados, procurando que cada usuario tenga únicamente los necesarios para realizar su trabajo.

Los permisos deberán revisarse cada tres meses y también cuando una persona cambie de puesto o deje de trabajar en la organización.

## Responsable

- **Decide:** propietario de los datos y responsable del área.
- **Ejecuta:** DBA.
- **Supervisa:** Auditoría Interna.

## Excepciones

En caso de una emergencia que requiera acceso inmediato, el responsable de Seguridad TI podrá autorizar temporalmente los permisos. La autorización deberá documentarse y revisarse posteriormente.

## Evidencia

- Archivo `evidencias/E2-privilegios.txt`.
- Bitácora de PostgreSQL en `evidencias/E5-bitacora-postgresql.log`.
- Registro de solicitudes de acceso aprobadas, que deberá mantenerse como evidencia organizacional.

## Revisión

Esta política se revisará cada tres meses o cuando existan cambios importantes en los usuarios, sistemas o responsabilidades.