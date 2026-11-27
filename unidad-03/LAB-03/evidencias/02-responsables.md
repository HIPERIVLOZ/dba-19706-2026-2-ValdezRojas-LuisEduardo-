# 02 - Responsables de los datos

## Objetivo

En esta actividad se identificaron las personas o áreas que deberían encargarse de los diferentes conjuntos de datos de la empresa. La idea es dejar claro quién toma las decisiones, quién administra la información y quién puede utilizarla.

## Matriz de responsables

| Conjunto de datos | Propietario | Custodio | Usuarios autorizados | Quién aprueba accesos | Quién aprueba correcciones |
|---|---|---|---|---|---|
| `comercial.public.clientes` (PostgreSQL) | Gerencia Comercial | DBA | Aplicación de ventas y soporte | Gerencia Comercial | Gerencia Comercial |
| `auditoria.cambios_clientes` (PostgreSQL) | Auditoría Interna | DBA | Personal de auditoría autorizado | Auditoría Interna | Auditoría Interna |
| Bitácora de PostgreSQL | Seguridad TI / Auditoría Interna | DBA | Personal autorizado de auditoría | Seguridad TI | No aplica |
| `comercial.clientes` (MongoDB) | Gerencia Comercial | DBA de MongoDB | Aplicación de ventas y soporte | Gerencia Comercial | Gerencia Comercial |
| `comercial.system.profile` (MongoDB) | Auditoría Interna | DBA de MongoDB | Personal autorizado de auditoría | Auditoría Interna | No aplica |

*Nota: Los responsables indicados representan una propuesta de organización para el escenario del laboratorio.*

## Diferencia entre propietario, custodio y usuario

El propietario es quien decide qué se puede hacer con la información. Por ejemplo, Gerencia Comercial puede decidir cuándo se debe corregir el RFC de un cliente.

El custodio es quien se encarga de administrar técnicamente la base de datos. En este caso sería el DBA, quien controla los permisos, revisa las bitácoras y mantiene protegida la información.

Por último, los usuarios son quienes utilizan los datos para realizar sus actividades, como puede ser una aplicación de ventas o el personal de soporte.

## Preguntas de la actividad

**1. ¿Por qué el propietario de `auditoria.cambios_clientes` no debería ser el mismo que opera `clientes`?**

Porque se busca tener cierta separación de responsabilidades. Si la misma persona administra los datos y también controla su auditoría, podría modificar información y alterar sus propios registros sin que otra área lo revise. Por eso es mejor que Auditoría Interna sea responsable de los registros de cambios y que el DBA se encargue de mantenerlos funcionando.

**2. ¿Quién debería poder leer las bitácoras y la vista `dba.bitacora`?**

Solamente el personal autorizado, principalmente el DBA y el área de Auditoría Interna. No sería buena idea permitir que cualquier usuario las consulte, porque pueden contener información sensible, consultas ejecutadas y hasta datos que no deberían estar disponibles para todos.

**3. ¿Qué ocurre con la responsabilidad sobre un dato cuando nadie la tiene asignada?**

Cuando nadie es responsable, los problemas pueden quedarse sin resolver porque no existe una persona o área que tome las decisiones. Por ejemplo, si se encuentra un RFC incorrecto, el DBA puede detectarlo, pero no tendría autoridad para decidir cuál es el RFC correcto. Esto puede provocar que los errores permanezcan en la base de datos o que alguien realice cambios sin autorización.

## Conclusión

Con esta actividad quedó más claro que administrar una base de datos no significa que el DBA tenga que tomar todas las decisiones sobre la información. Cada área debe tener responsabilidades definidas para evitar cambios incorrectos, accesos innecesarios y problemas al momento de revisar los datos.