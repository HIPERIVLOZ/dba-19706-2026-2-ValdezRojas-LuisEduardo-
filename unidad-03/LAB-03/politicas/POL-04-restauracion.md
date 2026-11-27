# POL-04 - Política de restauración

## Objetivo

Evitar restauraciones incorrectas que provoquen pérdida de información, interrupciones del servicio o modificaciones no autorizadas.

## Alcance

Aplica a las bases de datos PostgreSQL y MongoDB, principalmente en el ambiente de producción, aunque también contempla pruebas de restauración en desarrollo y pruebas.

## Regla

Toda restauración deberá contar con una solicitud que explique el motivo, la base de datos afectada y el punto al que se desea regresar.

La restauración deberá ser autorizada por el propietario de los datos y ejecutada por el DBA. Antes de realizarla, se deberá verificar que exista un respaldo disponible y que la restauración no afecte información que deba conservarse.

Después del proceso, el DBA deberá comprobar que la información se encuentre disponible y registrar el resultado de la operación.

## Responsable

- **Decide:** propietario de los datos y responsable de TI.
- **Ejecuta:** DBA.
- **Verifica:** Auditoría Interna o personal autorizado.

## Excepciones

En una situación crítica donde sea necesario recuperar el servicio rápidamente, el responsable de TI podrá autorizar una restauración de emergencia. La decisión deberá documentarse y revisarse posteriormente.

## Evidencia

- Solicitud de restauración aprobada.
- Identificación del respaldo utilizado.
- Registro de ejecución y resultado.
- Evidencia de las verificaciones posteriores.

Actualmente, este laboratorio establece las reglas de restauración, pero no realiza una restauración real.

## Revisión

La política se revisará cada seis meses y después de cualquier restauración importante.

**Nota:** El procedimiento técnico para realizar las restauraciones se definirá en la Unidad V.