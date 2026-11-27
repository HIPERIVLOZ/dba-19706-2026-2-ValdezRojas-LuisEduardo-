# POL-06 - Política de cambios en producción

## Objetivo

Evitar que se realicen modificaciones no autorizadas en las bases de datos que se encuentran funcionando para los usuarios.

## Alcance

Aplica a cualquier modificación realizada en el ambiente de producción de PostgreSQL y MongoDB, incluyendo cambios en tablas, colecciones, estructuras, permisos, funciones, disparadores y configuraciones.

Se considera producción al ambiente donde se encuentra funcionando el sistema utilizado por los usuarios finales.

## Regla

Todo cambio en producción deberá contar con una solicitud que incluya su descripción, responsable, motivo y autorización correspondiente.

Antes de ejecutarlo, el DBA deberá revisar que el cambio esté aprobado y que se encuentre dentro de la ventana de mantenimiento establecida. Después de realizarlo, deberá comprobar que funcionó correctamente y comparar la operación con los registros de la bitácora.

Los cambios que no tengan una solicitud aprobada deberán reportarse como posibles hallazgos para su revisión.

## Responsable

- **Decide:** Comité de cambios y propietario de los datos.
- **Solicita:** área responsable del sistema.
- **Ejecuta:** DBA.
- **Verifica:** Auditoría Interna.

## Excepciones

Cuando ocurra una falla crítica que requiera una modificación inmediata, el responsable de TI podrá autorizar un cambio de emergencia. La solicitud deberá documentarse y revisarse después de recuperar el servicio.

## Evidencia

- Tabla `gobierno.solicitudes_cambio`.
- Archivo `evidencias/E1-configuracion-registro.txt`.
- Archivo `evidencias/E5-bitacora-postgresql.log`.
- Resultado de conciliación de cambios en `evidencias/06-conciliacion.md`.

## Revisión

Esta política se revisará cada seis meses y después de cualquier incidente relacionado con modificaciones no autorizadas.

Los cambios de producción deberán revisarse mensualmente para comprobar que coincidan con las solicitudes aprobadas.