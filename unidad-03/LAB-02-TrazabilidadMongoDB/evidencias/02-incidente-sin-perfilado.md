# Actividad 2 — El incidente sin perfilado

Se realizó una modificación al RFC del cliente con `_id: 3`, utilizando el usuario `app_ventas` y la aplicación `app-ventas-web`.

Después se revisaron los registros de MongoDB para comprobar qué información había quedado guardada.

### Resultados

- La colección `system.profile` mostró **0 registros**.
- La búsqueda del RFC `GAMA780912XXX` en la bitácora devolvió **0 coincidencias**.
- Se encontraron **16 eventos** relacionados con `app-ventas-web`, principalmente de las categorías `NETWORK` y `ACCESS`.

### Conclusión

Se pudo comprobar que MongoDB registra información sobre las conexiones y autenticaciones, pero no encontramos un registro que muestre directamente la modificación del RFC.

Esto significa que, sin el perfilador activado, no contamos con información suficiente para identificar el cambio exacto realizado al documento. Aunque sabemos que la aplicación se conectó al servidor, no podemos demostrar únicamente con estas bitácoras qué dato modificó.