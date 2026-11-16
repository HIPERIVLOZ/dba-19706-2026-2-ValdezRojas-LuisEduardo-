# LAB-02 — Trazabilidad en MongoDB Community

## Introducción

En este laboratorio se trabajó con MongoDB Community para conocer los mecanismos disponibles para registrar operaciones, identificar usuarios y conservar evidencias.

Se utilizó una base de datos llamada `comercial`, con una colección `clientes` y un usuario llamado `app_ventas`, que inicialmente tenía el rol `readWrite`.

Durante las actividades se realizaron consultas, actualizaciones, eliminaciones, intentos de autenticación y cambios temporales de privilegios.

## Entorno utilizado

- Sistema operativo: Windows.
- MongoDB Community Server 7.0.48.
- MongoDB Shell (mongosh) 2.14.2.
- Base de datos: `comercial`.
- Colección: `clientes`.
- Usuarios: `admin` y `app_ventas`.

## Actividades realizadas

1. **Edición y limitaciones:** se comprobó que MongoDB Community no cuenta con la auditoría nativa de MongoDB Enterprise.
2. **Incidente sin perfilador:** se modificó un RFC y se comprobó que no había evidencia suficiente para identificar directamente la operación.
3. **Perfilador completo:** se activó el nivel 2 y se registraron consultas, actualizaciones y eliminaciones.
4. **Filtro del perfilador:** se configuró el registro de operaciones `insert`, `update` y `remove`.
5. **Accesos:** se generaron intentos de autenticación fallidos y se revisaron los eventos de la bitácora.
6. **Correlación:** se relacionaron cambios de configuración con la conexión del usuario administrador.
7. **Privilegios:** se compararon dos instantáneas antes y después de agregar temporalmente el rol `dbAdmin`.
8. **Conservación:** se exportaron registros, se calcularon hashes SHA-256 y se comprobó el comportamiento después de reiniciar MongoDB.
9. **Comparación:** se compararon las posibilidades de trazabilidad de PostgreSQL, MongoDB Community y MongoDB Enterprise/Atlas.
10. **Respuesta a Dirección:** se analizaron las evidencias disponibles para responder preguntas sobre modificaciones de datos y privilegios.

## Resultados principales

El perfilador permitió identificar operaciones sobre la colección `clientes`, incluyendo el usuario, la aplicación, el momento y los datos utilizados en las consultas.

La bitácora permitió identificar intentos de autenticación y relacionar cambios de configuración con conexiones específicas.

Sin embargo, también se encontraron limitaciones. El perfilador no conserva automáticamente el valor anterior de los documentos y no se encontró evidencia directa de la asignación temporal de un rol administrativo mediante las búsquedas realizadas.

Para complementar esta limitación, se utilizaron instantáneas de privilegios.

## Evidencias

Los archivos de la carpeta `evidencias` contienen los resultados de cada actividad, los registros exportados y sus hashes SHA-256.

El archivo `scripts/comandos-mongosh.js` reúne los principales comandos utilizados durante la práctica.

## Conclusión

MongoDB Community ofrece herramientas útiles para investigar operaciones y accesos, pero no permite obtener toda la información que podría necesitarse en una auditoría.

Por eso es importante configurar correctamente los registros y conservar las evidencias antes de que se pierdan.