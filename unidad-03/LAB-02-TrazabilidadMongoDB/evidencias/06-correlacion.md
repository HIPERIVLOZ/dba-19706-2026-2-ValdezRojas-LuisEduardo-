# Actividad 6 — Correlación de cambios de configuración

## Procedimiento

Se consultó la bitácora de MongoDB para encontrar los eventos relacionados con los cambios de configuración del perfilador.

Se encontraron tres eventos con el mensaje `Profiler settings changed`, todos asociados a la conexión `conn16`.

Después se buscó el evento de autenticación exitosa de esa misma conexión para identificar al usuario que realizó los cambios.

## Resultados obtenidos

| Hora | Cambio realizado | Conexión |
|---|---|---|
| 18:32:00 | Nivel 0 a nivel 2 | conn16 |
| 19:06:25 | Nivel 2 a nivel 0 | conn16 |
| 19:06:25 | Nivel 0 a nivel 1 con filtro | conn16 |

Al consultar la autenticación de `conn16`, se obtuvo:

- **Usuario:** `admin`
- **Base de autenticación:** `admin`
- **Cliente:** `127.0.0.1:64566`
- **Fecha de autenticación:** 15 de noviembre de 2026, a las 18:08:08

## Conclusión

Se pudo relacionar el cambio de configuración del perfilador con el usuario `admin` mediante el identificador de conexión `conn16`.

Esto demuestra que la bitácora permite identificar qué usuario autenticado realizó un cambio de configuración, aunque para hacerlo fue necesario relacionar diferentes eventos.