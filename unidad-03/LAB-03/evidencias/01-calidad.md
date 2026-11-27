# 01 - Verificaciones de calidad

## Objetivo

En esta actividad se realizaron algunas pruebas sobre la tabla `public.clientes` para revisar si la información almacenada cumple con ciertas reglas básicas de calidad. Se buscaron correos duplicados, RFC incorrectos, correos inválidos, edades fuera de rango y datos faltantes.

## Resultados obtenidos

Durante las pruebas se encontraron los siguientes problemas:

| ID | Registro | Problema encontrado |
|---|---|---|
| C1 | Clientes 1 y 7 | El correo `ana.lopez@example.test` aparece dos veces. |
| C2 | Cliente 7 | El RFC `LOAA850315AB` no cumple con el formato esperado. |
| C3 | Cliente 8 | El RFC está vacío. |
| C4 | Cliente 8 | El correo `sin-correo` no tiene un formato válido. |
| C5 | Cliente 8 | La edad tiene un valor negativo (-3). |

También se realizó una revisión general de los datos y se obtuvieron estos resultados:

- Registros encontrados: 7.
- Registros sin teléfono: 0.
- Registros sin RFC: 1.

## Reglas de calidad utilizadas

- **Unicidad:** un cliente no debería tener el mismo correo que otro.
- **Validez:** los correos y RFC deben cumplir con un formato adecuado.
- **Integridad:** los campos importantes deben contener información.
- **Consistencia:** la edad debe encontrarse dentro de un rango razonable, en este caso de 18 a 120 años.

## Acciones propuestas

1. Revisar si los clientes con correos duplicados realmente corresponden a la misma persona.
2. Solicitar la corrección del RFC de Ana Lopez.
3. Solicitar el RFC correcto de Jorge Díaz.
4. Corregir el correo electrónico de Jorge Díaz.
5. Revisar la edad de Jorge Díaz antes de modificarla.

No se realizaron correcciones directamente en la base de datos, ya que primero sería necesario confirmar la información correcta con los responsables de los datos.

## Conclusión

Las pruebas permitieron encontrar varios problemas en la información almacenada en `clientes`. Aunque la mayoría de los registros tienen teléfono, todavía existen datos que necesitan revisión, principalmente correos duplicados, RFC incorrectos y valores que no cumplen con las reglas establecidas.

Esta actividad nos ayuda a identificar errores antes de que puedan afectar otras consultas o procesos de la base de datos.