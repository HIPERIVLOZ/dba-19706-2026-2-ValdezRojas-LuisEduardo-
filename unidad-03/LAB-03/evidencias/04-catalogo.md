# 04. Catálogo mínimo de datos

El catálogo reúne los principales conjuntos de datos utilizados por Comercializadora Norte, considerando PostgreSQL y MongoDB. Se identifica dónde se encuentran, quién es responsable de ellos y para qué se utilizan.

| ID | Conjunto de datos | Motor | Ubicación | Propietario | Custodio | Clasificación | Datos personales | Finalidad | Conservación | Diccionario |
|---|---|---|---|---|---|---|---|---|---|---|
| CAT-01 | Clientes | PostgreSQL 16 | Local / comercial / public.clientes | Gerencia Comercial | DBA | Confidencial | Sí | Registro y consulta de clientes | Según POL-03 | diccionario-clientes.csv |
| CAT-02 | Auditoría de clientes | PostgreSQL 16 | Local / comercial / auditoria.cambios_clientes | Auditoría Interna | DBA | Confidencial | Sí | Registrar modificaciones realizadas sobre clientes | Según POL-03 | Estructura de la tabla de auditoría |
| CAT-03 | Registro de cambios | PostgreSQL 16 | Local / comercial / gobierno.solicitudes_cambio | Comité de cambios | DBA | Interna | No directamente | Registrar y autorizar cambios en producción | Según POL-03 | Estructura de solicitudes_cambio |
| CAT-04 | Clientes (tienda) | MongoDB 7 | 127.0.0.1 / comercial / clientes | Gerencia Comercial | DBA | Confidencial | Sí | Almacenar información de clientes de la tienda | Según POL-03 | Estructura de documentos |
| CAT-05 | Perfilado | MongoDB 7 | 127.0.0.1 / comercial / system.profile | Auditoría Interna | DBA | Confidencial | Puede contenerlos | Revisar operaciones realizadas en MongoDB | Según POL-03 | Estructura de system.profile |

## Observaciones

- `public.clientes` contiene información personal como nombres, correos, teléfonos y RFC.
- `auditoria.cambios_clientes` conserva información anterior y posterior a las modificaciones, por lo que también requiere protección.
- `gobierno.solicitudes_cambio` permite identificar quién solicita y quién aprueba los cambios.
- La colección `comercial.clientes` contiene información de clientes almacenada en MongoDB.
- `system.profile` permite revisar operaciones realizadas en MongoDB, pero puede contener información relacionada con los datos consultados.

El propietario del dato es quien decide sobre su uso y corrección, mientras que el DBA se encarga de su administración y protección.

Los periodos de conservación se relacionan con la política POL-03 y el documento `05-conservacion.md`.