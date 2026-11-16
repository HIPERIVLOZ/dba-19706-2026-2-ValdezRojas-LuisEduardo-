# Actividad 3 — Perfilador de MongoDB

Se activó el perfilador en nivel 2 y se realizaron tres operaciones sobre la colección `clientes`: una consulta, una actualización y una eliminación.

## Resultados

| Operación | Usuario | Cliente | Aplicación | Momento (UTC) | Qué hizo | Documentos afectados |
|---|---|---|---|---|---|---|
| query | app_ventas@comercial | 127.0.0.1 | app-ventas-web | 2026-11-16 01:33:26.845 | Consultó clientes de Culiacán | 3 devueltos |
| update | app_ventas@comercial | 127.0.0.1 | app-ventas-web | 2026-11-16 01:33:26.849 | Cambió el RFC del cliente 3 a GAMA780912XYZ | 1 modificado |
| remove | app_ventas@comercial | 127.0.0.1 | app-ventas-web | 2026-11-16 01:33:26.852 | Eliminó al cliente 2 | 1 eliminado |

## Preguntas

**1. ¿Se puede saber cuál era el RFC antes del cambio?**

No. El perfilador muestra el nuevo valor que se asignó, pero no guarda el valor anterior del RFC.

**2. ¿Se puede saber qué datos tenía el documento eliminado?**

No. Se puede identificar el documento eliminado mediante su `_id`, pero no se muestra todo su contenido anterior.

**3. ¿Qué ventaja y qué riesgo tiene registrar también las consultas?**

La ventaja es que podemos saber qué información se consultó, quién lo hizo y cuándo. El riesgo es que se generan más registros, se consume más espacio y podrían quedar guardados datos sensibles dentro de las consultas.

**4. ¿Por qué el campo `user` incluye `@comercial`?**

Porque indica tanto el nombre del usuario como la base de datos donde está registrado. En este caso, `app_ventas` pertenece a `comercial`.