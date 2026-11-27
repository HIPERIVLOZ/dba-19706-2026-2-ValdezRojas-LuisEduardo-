# POL-03 - Política de retención

## Objetivo

Evitar que la información y las bitácoras se conserven por tiempo indefinido o se eliminen antes de que puedan utilizarse para una revisión.

## Alcance

Aplica a los datos personales almacenados en PostgreSQL y MongoDB, así como a las bitácoras, registros de auditoría, instantáneas de privilegios y archivos exportados.

## Regla

Cada conjunto de datos deberá contar con un periodo de conservación definido según su finalidad, sensibilidad e importancia para la organización.

Las bitácoras de accesos se conservarán durante 90 días, mientras que los cambios de privilegios, estructura y datos se conservarán durante un año, de acuerdo con la propuesta de la Actividad 5.

Al vencer el periodo, la información deberá revisarse antes de eliminarse. Si existe una investigación pendiente o una obligación de conservación, se deberá suspender temporalmente su eliminación.

## Responsable

- **Decide:** propietario de los datos.
- **Ejecuta:** DBA.
- **Supervisa:** Auditoría Interna y, cuando corresponda, el área jurídica.

## Excepciones

Se permitirá ampliar el periodo de conservación cuando exista una investigación, revisión de auditoría u obligación legal. La autorización deberá quedar documentada.

## Evidencia

- `evidencias/05-conservacion.md`.
- Archivos de bitácora de PostgreSQL y MongoDB.
- Hashes SHA-256 de las exportaciones.
- Registro de eliminaciones o depuraciones autorizadas.

## Revisión

La política se revisará cada seis meses y cuando cambien las necesidades de conservación o las obligaciones aplicables.