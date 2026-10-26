# Actividad 1 - Inventario y finalidad de los datos


## Objetivo
Identificar los datos que almacena la empresa Comercializadora Norte y analizar para qué se utiliza cada uno, quién debería tener acceso y durante cuánto tiempo es necesario conservarlo.


## Inventario de datos
| Campo | ¿Es dato personal? | Finalidad | ¿Es necesario? | Nivel de acceso | Retención |
|---|---|---|---|---|---|
| id | Sí, identificador indirecto | Identificar al cliente | Sí | Personal autorizado | Mientras exista la relación con el cliente |
| nombre | Sí | Atención y facturación | Sí | Soporte y facturación | Mientras sea necesario para estas actividades |
| correo | Sí | Contactar al cliente | Sí | Soporte | Mientras sea necesario para la comunicación |
| telefono | Sí | Contacto y seguimiento | Sí, cuando se utilice este medio | Soporte | Mientras sea necesario para el contacto |
| rfc | Sí | Facturación | Sí, para fines fiscales | Facturación | Según las obligaciones fiscales aplicables |
| edad | Sí | Estadísticas | Solo si se justifica su uso | Analítica con acceso limitado | Mientras se necesite para el análisis |
| ciudad | Sí | Estadísticas por ubicación | Sí, para análisis regional | Analítica con acceso limitado | Mientras sea necesaria para las estadísticas |
| codigo_postal | Sí | Ubicación y análisis regional | Solo si se justifica | Personal autorizado | Mientras sea necesario para su finalidad |
| fecha_alta | Sí, vinculada al cliente | Registro y seguimiento | Sí | Administración autorizada | Según la relación y obligaciones aplicables |


## Justificación de las decisiones
- **id:** permite distinguir a cada cliente y relacionar su información sin depender únicamente de su nombre.
- **nombre:** es necesario para identificar y atender correctamente al cliente, además de utilizarse en facturación.
- **correo:** sirve para comunicarse con el cliente y dar seguimiento a solicitudes.
- **telefono:** proporciona otro medio de contacto, aunque no debería utilizarse si no existe una necesidad.
- **rfc:** es necesario para procesos fiscales, pero no para que soporte atienda consultas generales.
- **edad:** puede utilizarse para estadísticas, pero no es indispensable para atención al cliente.
- **ciudad:** permite conocer la distribución de los clientes sin mostrar su identidad individual.
- **codigo_postal:** puede servir para análisis regional, pero debe evitarse recopilarlo si no se necesita.
- **fecha_alta:** ayuda a conocer desde cuándo existe el registro y facilita el seguimiento administrativo.


## Análisis
No todos los departamentos necesitan consultar los mismos datos. Por ejemplo, soporte necesita información de contacto, mientras que facturación requiere datos fiscales. El área de analítica puede trabajar con estadísticas sin consultar nombres, correos o RFC.
Los periodos de retención propuestos dependen de la finalidad de cada dato. La organización tendría que definirlos con mayor precisión después de revisar sus necesidades y obligaciones.


## Conclusión
Realizar un inventario permite conocer qué información se almacena y evitar que todos los usuarios tengan acceso a datos que no necesitan. También ayuda a justificar su conservación y establecer mejores controles de privacidad.