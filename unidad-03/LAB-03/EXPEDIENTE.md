# Expediente de auditoría interna — Base comercial

## 1. Alcance

Este expediente reúne las actividades de auditoría y gobierno de datos realizadas sobre la base de datos `comercial`.

Se revisaron dos motores:

- PostgreSQL: utilizado para almacenar los clientes, registrar modificaciones y administrar las solicitudes de cambio.
- MongoDB 7: utilizado para almacenar información de clientes y revisar las operaciones mediante el perfilador.

El ambiente utilizado fue local. El periodo de revisión comprende los registros disponibles del 8 al 26 de noviembre de 2026.

El expediente fue elaborado como parte del LAB-03 de la Unidad III.

## 2. Configuración de auditoría (A3)

En PostgreSQL se utilizaron los siguientes mecanismos:

- Bitácora del servidor para registrar actividades y sentencias.
- Vista `dba.bitacora` para consultar los registros.
- Tabla `auditoria.cambios_clientes` para conservar modificaciones realizadas sobre los datos.
- Disparador de auditoría asociado a la tabla de clientes.

En MongoDB se utilizaron:

- Bitácora de `mongod`.
- Perfilador mediante `system.profile`.
- Registro de operaciones realizadas por los usuarios.

Las evidencias correspondientes se encuentran en:

- `evidencias/E1-configuracion-registro.txt`
- `evidencias/E3-disparadores.txt`
- `evidencias/E6-mongodb/`

## 3. Bitácora interpretada (A3, A5)

Durante la revisión se identificaron diferentes operaciones sobre la información de clientes.

### Evento 1. Modificación del RFC de María García

- Fecha: 08/11/2026, 17:28:07.
- Usuario: `app_ventas`.
- Aplicación: `app-ventas-web`.
- Dirección: `127.0.0.1`.
- Operación: UPDATE.
- Registro afectado: ID 3.

Se observó que el RFC anterior era `GAMA780912XYZ` y fue sustituido por `GAMA780912ZZZ`.

Este evento es importante porque se modificó un dato personal utilizado para facturación. La auditoría permite identificar quién realizó el cambio y cuáles eran los valores anteriores y posteriores.

No se cuenta en los registros revisados con una solicitud de autorización que permita relacionar este cambio con un folio.

### Evento 2. Inserción y eliminación de un cliente

- Fecha: 08/11/2026, 17:30:50.
- Usuario: `postgres`.
- Aplicación: `pgAdmin 4`.
- Operaciones: INSERT y DELETE.
- Registro afectado: ID 6.

Se registró primero la inserción de Pedro Ruiz y posteriormente su eliminación.

Ambas operaciones aparecen en la auditoría con la misma fecha y hora. Esto demuestra que el mecanismo permitió conservar tanto la creación como la eliminación del registro.

### Evento 3. Modificación de segmentos de clientes

- Fecha: 08/11/2026, 17:36:30.
- Usuario: `postgres`.
- Aplicación: `pgAdmin 4`.
- Operación: UPDATE.
- Registros afectados: IDs 1, 2, 3, 4 y 5.

Se observó que los clientes recibieron el segmento `regular`, sustituyendo el valor anterior que era nulo.

La auditoría conserva los valores anteriores y posteriores, permitiendo identificar qué información fue modificada.

### Evento 4. Inserción de registros de prueba

- Fecha: 26/11/2026, 21:52:15.
- Usuario: `postgres`.
- Aplicación: `pgAdmin 4`.
- Operación: INSERT.
- Registros afectados: IDs 7 y 8.

Se registraron dos nuevos clientes utilizados para comprobar la calidad de los datos.

El registro 7 presenta un RFC incompleto y un correo escrito con mayúsculas. El registro 8 contiene un RFC nulo, correo con formato incorrecto, edad negativa y teléfono incompleto.

Estos registros permiten comprobar que la auditoría conserva las operaciones realizadas incluso cuando los datos presentan problemas de calidad.

### Evento 5. Cambio de estructura autorizado

El 26/11/2026 se creó el esquema `gobierno`, se establecieron restricciones de permisos y se creó la tabla `gobierno.solicitudes_cambio`.

Posteriormente se registró el folio CAM-2026-014, relacionado con la incorporación de la columna `canal_alta` a `public.clientes`.

El cambio se relaciona con la solicitud aprobada por el Comité de cambios y quedó documentado mediante el comentario de la nueva columna.

La evidencia se encuentra en la bitácora y en el registro de solicitudes.

## 4. Elementos de gobierno (A1, A2)

Se documentaron los responsables de los conjuntos de datos, diferenciando entre propietario, custodio y usuarios autorizados.

El catálogo mínimo contempla cinco conjuntos de datos:

1. `public.clientes`
2. `auditoria.cambios_clientes`
3. `gobierno.solicitudes_cambio`
4. `comercial.clientes` de MongoDB.
5. `comercial.system.profile` de MongoDB.

El diccionario de datos describe las columnas de `public.clientes`, incluyendo su significado, clasificación, finalidad y reglas de calidad.

Documentos relacionados:

- `evidencias/02-responsables.md`
- `evidencias/03-diccionario.md`
- `evidencias/04-catalogo.md`
- `evidencias/diccionario-clientes.csv`

## 5. Conservación (A3)

Se establecieron criterios de conservación para las bitácoras de PostgreSQL, los registros de auditoría y los elementos de MongoDB.

Se consideraron los riesgos de pérdida por rotación de archivos, eliminación de registros y sobrescritura del perfilador.

También se propuso conservar copias de las evidencias exportadas y verificar su integridad mediante hashes SHA-256.

El detalle de los criterios se encuentra en `evidencias/05-conservacion.md`.

## 6. Políticas (A4)

Se elaboraron seis políticas prácticas para regular el uso y la administración de los datos:

- POL-01: Acceso.
- POL-02: Respaldo.
- POL-03: Retención.
- POL-04: Restauración.
- POL-05: Datos sensibles.
- POL-06: Cambios en producción.

Estas políticas establecen responsabilidades, reglas, excepciones y evidencias para comprobar su cumplimiento.

Se encuentran en la carpeta `politicas/`.

## 7. Conciliación de cambios (A5)

Se revisaron los registros de `auditoria.cambios_clientes` y la bitácora de PostgreSQL.

Se identificaron cambios relacionados con los clientes y modificaciones administrativas realizadas sobre la base de datos.

El folio CAM-2026-014 permitió relacionar la solicitud de cambio con la incorporación de `canal_alta`.

También se identificaron operaciones administrativas sin un folio visible en los registros consultados, por lo que no fue posible comprobar su autorización mediante la información disponible.

Una limitación encontrada fue que algunas sentencias aparecen divididas en varias líneas y no todas pudieron recuperarse mediante la consulta obligatoria de la guía.

La conciliación completa se encuentra en `evidencias/06-conciliacion.md`.

## 8. Hallazgos

| ID | Hallazgo | Fuente | Severidad | Impacto | Recomendación | Decisión requerida de |
|---|---|---|---|---|---|---|
| H1 | RFC modificado sin solicitud de autorización identificada | Auditoría, evento 1 | Alta | Puede afectar la información utilizada para facturación | Revisar y confirmar el RFC correcto | Gerencia Comercial |
| H2 | Registro con datos incompletos e inválidos | Auditoría, evento 4 | Media | Puede afectar la calidad de la información | Revisar los datos antes de utilizarlos | Gerencia Comercial |
| H3 | Cambios administrativos sin folio identificado | Bitácora PostgreSQL | Media | Dificulta comprobar la autorización de los cambios | Relacionar cada cambio con una solicitud | Comité de cambios |
| H4 | Algunas sentencias no pudieron recuperarse completas | `dba.bitacora` | Media | Limita la conciliación de operaciones | Revisar la configuración y conservación de bitácoras | DBA |

Los hallazgos se documentan sin modificar los registros originales de auditoría.

## 9. Limitaciones conocidas y riesgos aceptados (A6)

Durante las actividades se identificaron algunas limitaciones:

- MongoDB Community no cuenta con la auditoría nativa disponible en su edición Enterprise.
- El perfilador `system.profile` permite revisar determinadas operaciones, pero no sustituye una auditoría completa.
- La bitácora de PostgreSQL puede perder información por rotación o por periodos en los que no se registraban determinadas sentencias.
- Un administrador con suficientes privilegios puede modificar o desactivar los mecanismos de auditoría.
- La conservación de información personal debe mantenerse de acuerdo con las políticas de retención y las decisiones de los responsables.

Estos riesgos deben ser revisados y aceptados formalmente por los responsables de los datos y el área correspondiente de seguridad.

## 10. Índice de evidencias

| Evidencia | Archivo | Descripción |
|---|---|---|
| E1 | `E1-configuracion-registro.txt` | Configuración de registro de PostgreSQL |
| E2 | `E2-privilegios.txt` | Privilegios sobre las tablas |
| E3 | `E3-disparadores.txt` | Disparadores de auditoría |
| E4 | `E4-muestra-auditoria.txt` | Muestra de operaciones registradas |
| E5 | `E5-bitacora-postgresql.log` | Bitácora exportada de PostgreSQL |
| E5 | `E5-bitacora-postgresql.sha256` | Hash de integridad de la bitácora |
| E6 | `E6-mongodb/` | Evidencias de MongoDB |

También forman parte del expediente los documentos de calidad, responsables, diccionario, catálogo, conservación, conciliación y las seis políticas prácticas.