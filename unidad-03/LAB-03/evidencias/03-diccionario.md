# 03. Diccionario de datos operativo

El diccionario describe la información almacenada en `public.clientes`, indicando para qué se utiliza cada columna, cómo se clasifica y qué controles se aplican.

| Columna | Clasificación | Finalidad | Control aplicado | ¿Cambios auditados? | Regla de calidad |
|---|---|---|---|---|---|
| id | Identificador interno | Identificar a cada cliente | Llave primaria | Sí | No debe repetirse |
| nombre | Dato personal | Identificar al cliente | Acceso restringido | Sí | No debe estar vacío |
| correo | Dato personal | Contactar al cliente | Validación de formato | Sí | Debe tener formato de correo y evitar duplicados |
| telefono | Dato personal | Contactar al cliente | Acceso restringido | Sí | Debe tener una longitud y formato válidos |
| rfc | Dato personal | Facturación | Vista enmascarada para soporte | Sí | Debe cumplir el formato establecido |
| edad | Dato personal | Analítica de clientes | Uso para analítica agregada | Sí | Debe estar entre 18 y 120 |
| ciudad | Dato personal indirecto | Identificar ubicación del cliente | Acceso restringido | Sí | No debe estar vacía |
| codigo_postal | Dato personal indirecto | Identificar zona de residencia | Acceso restringido | Sí | Debe contener cinco dígitos |
| fecha_alta | Dato operativo | Registrar el ingreso del cliente | Control de fechas | Sí | No debe ser una fecha futura |
| segmento | Dato de clasificación | Agrupar clientes | Acceso según función | Sí | Debe utilizar valores permitidos |
| canal_alta | Dato operativo | Identificar el medio de registro | Acceso según función | Pendiente de comprobar | Debe corresponder a un canal permitido |

## Observaciones

Los datos personales deben utilizarse únicamente para las actividades autorizadas. El RFC, correo y teléfono requieren especial cuidado porque permiten identificar o contactar directamente a los clientes.

La tabla de auditoría permite revisar modificaciones realizadas sobre los registros. La vista enmascarada ayuda a limitar la exposición de información sensible durante las consultas de soporte.

La columna `canal_alta` se agregó durante la Actividad 7 mediante la solicitud CAM-2026-014.

## Preguntas

**1. ¿Qué ventaja tiene guardar el significado en COMMENT en lugar de solo en un documento aparte?**

Permite consultar la descripción directamente desde PostgreSQL y mantener el significado de las columnas junto con su estructura, evitando depender únicamente de documentos externos.

**2. ¿Quedaron registrados los COMMENT en la bitácora? ¿Con qué nivel de log_statement?**

Se encontraron referencias a comentarios dentro de la bitácora, incluyendo el comentario de `canal_alta`. El nivel de registro utilizado durante el periodo debe revisarse en E1 y en la configuración histórica, ya que el valor actual no demuestra por sí solo toda la configuración anterior.

**3. ¿Qué información del diccionario debe mantenerse fuera del motor? ¿Por qué?**

La clasificación de los datos, sus responsables, las reglas de calidad y las políticas deben mantenerse también en documentos externos. Así pueden consultarse sin depender de la base de datos y utilizarse durante una auditoría.