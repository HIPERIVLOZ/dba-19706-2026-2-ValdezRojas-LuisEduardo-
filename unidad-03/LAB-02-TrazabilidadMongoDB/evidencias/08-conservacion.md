# Actividad 8 — Conservación: exportar antes de perder

## Procedimiento

En esta actividad se exportaron los registros del perfilador y de la bitácora de MongoDB para conservarlos como evidencia.

Se guardaron los archivos `system-profile.json`, `bitacora-mongod.log` y `mongod-completo.log`. Después se calcularon sus hashes SHA-256 y se almacenaron en `hashes.sha256`.

Una vez conservados los archivos, se reinició el servicio de MongoDB y se consultó nuevamente el estado del perfilador, la cantidad de registros en `system.profile` y los eventos disponibles mediante `getLog`.

## Resultados obtenidos

Después del reinicio se obtuvieron los siguientes resultados:

| Comprobación | Resultado |
|---|---|
| Nivel del perfilador | 0 (desactivado) |
| Documentos en system.profile | 2 |
| Eventos disponibles en getLog | 130 |

Esto permitió comprobar que la configuración temporal del perfilador no permaneció activa después del reinicio, pero los documentos almacenados en `system.profile` sí se conservaron.

También se verificó la existencia de los archivos exportados:

| Archivo | Tamaño |
|---|---|
| system-profile.json | 2,530 bytes |
| bitacora-mongod.log | 377,232 bytes |
| mongod-completo.log | 727,616 bytes |
| hashes.sha256 | 261 bytes |

Los tres hashes SHA-256 calculados coincidieron con los valores guardados en `hashes.sha256`, por lo que no se detectaron cambios en los archivos entre ambas comprobaciones.

## Preguntas

### 1. Menciona tres formas en que la evidencia del perfilador o de la bitácora puede perderse sin que nadie la borre deliberadamente.

La evidencia puede perderse cuando se reinicia el servidor y se vacían los registros temporales de `getLog`, cuando `system.profile` alcanza su límite y reemplaza registros antiguos, o cuando el perfilador se encuentra desactivado y deja de registrar nuevas operaciones.

### 2. ¿Por qué el tamaño de 1 MB de `system.profile` es un problema de conservación y no solo de espacio?

Porque `system.profile` es una colección circular que puede reemplazar los registros más antiguos cuando alcanza su límite. Esto significa que se podría perder información importante para investigar algún incidente.

### 3. ¿Por qué `getLog` sirve para interpretar pero no para conservar?

Porque permite consultar los eventos recientes que MongoDB mantiene en memoria, pero estos pueden perderse después de un reinicio o ser reemplazados por nuevos eventos. Por eso es importante exportar los registros y conservar la bitácora en un archivo.