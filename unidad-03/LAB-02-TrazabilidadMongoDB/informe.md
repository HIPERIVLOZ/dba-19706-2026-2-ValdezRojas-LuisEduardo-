# Informe — LAB-02: Trazabilidad en MongoDB Community

## Introducción

En este laboratorio se trabajó con MongoDB Community para conocer cómo se pueden registrar operaciones y accesos dentro de una base de datos.

El objetivo fue identificar qué información se puede obtener utilizando el perfilador y la bitácora de MongoDB, así como reconocer las limitaciones que existen al utilizar la edición Community.

Para las pruebas se utilizó la base de datos `comercial`, principalmente la colección `clientes`.

## Desarrollo

### Registro de operaciones

Al principio se comprobó que el perfilador estaba desactivado. Después se realizó una modificación al RFC de un cliente y se revisaron los registros disponibles.

No se encontró evidencia directa de esa actualización en el perfilador.

Posteriormente, se activó el perfilador en nivel 2 y se realizaron tres operaciones: una consulta, una actualización y una eliminación.

En esta ocasión sí se encontraron registros que permitieron identificar al usuario `app_ventas`, la aplicación `app-ventas-web`, la colección utilizada y el momento de las operaciones.

También se configuró un filtro para registrar solamente inserciones, actualizaciones y eliminaciones, evitando almacenar las consultas de lectura.

### Registro de accesos

Se realizaron dos intentos fallidos de autenticación: uno con una contraseña incorrecta y otro utilizando un usuario inexistente.

La bitácora mostró los errores correspondientes, así como información sobre el usuario, la conexión y la aplicación utilizada.

También se encontraron eventos relacionados con cambios en la configuración del perfilador. Al comparar los identificadores de conexión, se pudo relacionar estos cambios con el usuario `admin`.

### Cambios de privilegios

Se guardaron dos instantáneas de los privilegios del usuario `app_ventas`.

La primera mostró que tenía únicamente el rol `readWrite`. En la segunda apareció también el rol `dbAdmin`, que se agregó temporalmente durante la práctica.

No se encontraron coincidencias al buscar directamente la operación `grantRoles` en la bitácora. Sin embargo, las instantáneas permitieron comprobar que los privilegios habían cambiado.

Al finalizar, se ejecutó la revocación del rol temporal.

### Conservación de evidencias

Se exportaron los registros del perfilador y de la bitácora, además de conservar una copia del archivo de registro del servidor.

También se calcularon hashes SHA-256 para comprobar la integridad de los archivos.

Después de reiniciar MongoDB, se obtuvieron estos resultados:

| Comprobación | Resultado |
|---|---|
| Nivel del perfilador | 0 |
| Documentos en system.profile | 2 |
| Eventos disponibles en getLog | 130 |

Los hashes calculados coincidieron con los valores almacenados en `hashes.sha256`.

## Limitaciones encontradas

Durante las actividades se identificaron algunas limitaciones de MongoDB Community.

El perfilador permite conocer las operaciones realizadas, pero no conserva automáticamente los valores anteriores de los documentos.

Además, no se encontró un registro directo de la asignación de privilegios mediante las búsquedas realizadas, por lo que fue necesario utilizar instantáneas para comparar los permisos.

También se comprobó que la configuración temporal del perfilador no permaneció activa después del reinicio del servidor.

## Conclusión

Este laboratorio permitió comprender cómo funcionan el perfilador y la bitácora de MongoDB Community.

Se logró identificar operaciones, accesos y cambios de configuración, además de conservar evidencias mediante archivos y hashes SHA-256.

Sin embargo, también se observó que estas herramientas tienen limitaciones y no siempre permiten reconstruir completamente lo ocurrido.

Por eso es importante conservar los registros y utilizar mecanismos complementarios cuando se necesita llevar un seguimiento más detallado de los cambios realizados en una base de datos.