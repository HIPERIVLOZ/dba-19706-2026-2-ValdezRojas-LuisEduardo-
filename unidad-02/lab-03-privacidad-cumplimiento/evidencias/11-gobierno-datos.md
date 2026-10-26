# Actividad 11 - Gobierno de datos

En esta actividad se organiza quién puede utilizar cada dato de los clientes, para qué lo necesita y qué se debería hacer cuando ya no sea necesario guardarlo.

| Dato | Finalidad | Responsable | Usuarios autorizados | Protección | Retención | Acción al finalizar |
|---|---|---|---|---|---|---|
| nombre | Identificar al cliente | Atención al cliente | Soporte y facturación | Permisos de acceso | Mientras se necesite | Eliminar |
| correo | Contactar al cliente | Atención al cliente | Soporte | Acceso limitado | Mientras se necesite | Eliminar |
| telefono | Comunicarse con el cliente | Atención al cliente | Soporte | Acceso limitado | Mientras se necesite | Eliminar |
| rfc | Realizar facturas | Facturación | Facturación | Acceso restringido | Según obligaciones fiscales | Eliminar cuando corresponda |
| edad | Realizar estadísticas | Analítica | Analistas autorizados | Datos agrupados | Mientras se utilice | Anonimizar |
| ciudad | Estadísticas por ubicación | Analítica | Analistas autorizados | Datos agrupados | Mientras se utilice | Anonimizar |
| codigo_postal | Análisis por zona | Analítica | Analistas autorizados | Acceso limitado | Mientras se necesite | Eliminar o anonimizar |

La idea es que cada área tenga acceso solamente a los datos que necesita. Por ejemplo, soporte no necesita consultar el RFC y analítica puede trabajar con estadísticas sin conocer los nombres de los clientes.