# POL-02 - Política de respaldo

## Objetivo

Evitar la pérdida de información importante cuando ocurra una falla del servidor, eliminación accidental, daño de archivos o algún otro problema.

## Alcance

Aplica a las bases de datos PostgreSQL y MongoDB, incluyendo tablas, colecciones, configuraciones importantes, registros de auditoría y archivos de bitácora.

## Regla

Las bases de datos de producción deberán respaldarse diariamente. Los registros de auditoría y configuraciones importantes deberán incluirse en los respaldos correspondientes.

Los respaldos deberán almacenarse en una ubicación diferente al servidor original y mantenerse protegidos contra accesos no autorizados. El DBA deberá comprobar periódicamente que los archivos se encuentren disponibles y que puedan utilizarse para una restauración.

## Responsable

- **Decide:** propietario de los datos y responsable de TI.
- **Ejecuta:** DBA.
- **Verifica:** Auditoría Interna o personal autorizado distinto de quien realizó el respaldo.

## Excepciones

Si un respaldo no puede realizarse por mantenimiento o alguna falla, el DBA deberá informar al responsable de TI y registrar el motivo. La excepción deberá ser autorizada y contar con una fecha para recuperar la programación normal.

## Evidencia

- Registro de ejecución de respaldos.
- Bitácoras de PostgreSQL y MongoDB.
- Reportes de verificación de respaldos.

Actualmente, este laboratorio documenta el criterio, pero no implementa un sistema automático de respaldos.

## Revisión

La política se revisará cada seis meses o después de una falla importante relacionada con la recuperación de información.

**Nota:** El procedimiento técnico para realizar los respaldos se definirá en la Unidad V.