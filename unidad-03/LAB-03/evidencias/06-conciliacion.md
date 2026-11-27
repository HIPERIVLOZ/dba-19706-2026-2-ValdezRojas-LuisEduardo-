# 06. Conciliación de cambios

Se revisaron los registros de la tabla `auditoria.cambios_clientes` y la bitácora de PostgreSQL para identificar las modificaciones realizadas en la base de datos comercial.

## Cambios encontrados en la auditoría

| Fecha | Operación | Registro | Descripción |
|---|---|---:|---|
| 08/11/2026 | UPDATE | 3 | Modificación del RFC realizada por app_ventas. |
| 08/11/2026 | INSERT | 6 | Inserción de Pedro Ruiz. |
| 08/11/2026 | DELETE | 6 | Eliminación del registro de Pedro Ruiz. |
| 08/11/2026 | UPDATE | 1 | Asignación del segmento regular. |
| 08/11/2026 | UPDATE | 2 | Asignación del segmento regular. |
| 08/11/2026 | UPDATE | 4 | Asignación del segmento regular. |
| 08/11/2026 | UPDATE | 5 | Asignación del segmento regular. |
| 08/11/2026 | UPDATE | 3 | Asignación del segmento regular. |
| 26/11/2026 | INSERT | 7 | Inserción de un registro con datos de prueba. |
| 26/11/2026 | INSERT | 8 | Inserción de un registro con datos incompletos e inválidos. |

## Cambios administrativos

En la bitácora de PostgreSQL también se identificaron los siguientes eventos:

- Creación del esquema `gobierno`.
- Revocación de permisos públicos sobre el esquema.
- Creación de la tabla `gobierno.solicitudes_cambio`.
- Modificación de `public.clientes` para agregar la columna `canal_alta`.

El cambio de la columna se relaciona con la solicitud CAM-2026-014. El folio también aparece en el registro de