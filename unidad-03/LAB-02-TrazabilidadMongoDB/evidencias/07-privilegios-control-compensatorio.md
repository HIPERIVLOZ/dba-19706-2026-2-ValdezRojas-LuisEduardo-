# Actividad 7 — Cambios de privilegios

## Procedimiento

Se guardaron dos instantáneas de los privilegios del usuario `app_ventas` en la colección `auditoria.instantaneas_privilegios`.

La primera se tomó antes de modificar sus permisos. Después, se agregó temporalmente el rol `dbAdmin` y se guardó una segunda instantánea para comparar los resultados.

Finalmente, se ejecutó la revocación del rol temporal y se restauró el perfilador al nivel 1 con el filtro utilizado anteriormente.

## Resultados obtenidos

| Instantánea | Fecha y hora (UTC) | Roles de app_ventas |
|---|---|---|
| Inicial | 2026-11-16 02:35:51 | readWrite |
| Posterior | 2026-11-16 02:36:10 | readWrite, dbAdmin |

Las dos instantáneas fueron tomadas por el usuario `admin`, autenticado en la base de datos `admin`.

Al comparar los registros, se identificó que `app_ventas` recibió temporalmente el rol `dbAdmin`, además del permiso `readWrite` que ya tenía.

## Comprobación de los registros

Se revisó la bitácora de MongoDB para buscar eventos relacionados con la asignación de roles mediante `grantRoles`.

La búsqueda devolvió `0` coincidencias, por lo que no se encontró un registro de esa operación mediante el criterio utilizado.

Sin embargo, las dos instantáneas de privilegios permitieron comprobar que el usuario `app_ventas` pasó de tener únicamente el rol `readWrite` a tener también el rol `dbAdmin`.

Esto muestra la utilidad de conservar instantáneas de los privilegios, ya que permiten identificar cambios aunque no se encuentre evidencia directa de ellos en la bitácora.

## Conclusión

Las instantáneas permitieron comparar los privilegios antes y después de una modificación. De esta manera, se pudo comprobar que se agregó un rol administrativo al usuario `app_ventas`.

También se ejecutó la revocación del permiso temporal para regresar a la configuración anterior.