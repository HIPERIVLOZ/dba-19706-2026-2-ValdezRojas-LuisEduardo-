# Actividad 5 — Accesos en la bitácora de mongod

Se realizaron dos intentos de autenticación fallidos: uno con una contraseña incorrecta para `app_ventas` y otro utilizando un usuario que no existe.

Después se consultó la bitácora de MongoDB para identificar los errores registrados y compararlos con un acceso exitoso.

## Resultados

| Usuario | Conexión | Resultado | Error |
|---|---|---|---|
| app_ventas | conn43 | 18 | Contraseña incorrecta |
| usuario_inexistente | conn45 | 11 | Usuario no encontrado |
| app_ventas | conn41 | 0 | Autenticación exitosa |

## Preguntas

**1. ¿Qué diferencia existe entre los errores de autenticación encontrados?**

En el primer caso, el usuario `app_ventas` existe, pero la contraseña proporcionada fue incorrecta. En el segundo, MongoDB no encontró al usuario `usuario_inexistente`.

**2. ¿Qué información permite identificar el origen de los intentos?**

La bitácora muestra la fecha, la dirección IP y el puerto del cliente, el usuario y la aplicación utilizada. Esto permite conocer desde dónde se intentó establecer la conexión.

**3. ¿Qué diferencia existe entre un acceso fallido y uno exitoso?**

En los accesos fallidos aparece el motivo del error y un código de resultado distinto de cero. En el acceso exitoso aparece `Successfully authenticated` y el resultado es `0`.