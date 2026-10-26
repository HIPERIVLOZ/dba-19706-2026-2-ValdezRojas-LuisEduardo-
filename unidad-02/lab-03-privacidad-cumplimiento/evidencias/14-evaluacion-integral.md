# Actividad 14 - Evaluación integral

En este caso, la empresa tiene 50,000 clientes y varios problemas relacionados con la forma en que utiliza y guarda sus datos.

Se identificaron los siguientes riesgos:

| Problema | Principio afectado | Riesgo | Control propuesto |
|---|---|---|---|
| 1. Todos los analistas pueden consultar la tabla completa | Control de acceso | Consultar datos privados sin necesitarlos | Limitar permisos |
| 2. Analítica puede ver nombres | Minimización | Identificar clientes innecesariamente | Ocultar nombres |
| 3. Analítica puede ver correos | Minimización | Exponer información de contacto | Utilizar datos agrupados |
| 4. Analítica puede consultar RFC | Finalidad | Utilizar datos fiscales sin necesitarlos | Restringir el RFC a facturación |
| 5. Se guardan datos desde hace 12 años | Retención | Conservar información innecesaria | Revisar datos antiguos |
| 6. No existe una política de retención | Retención | No saber cuándo eliminar datos | Crear una política de retención |
| 7. Desarrollo recibe copias completas | Minimización | Compartir información que no necesita | Utilizar bases de prueba reducidas |
| 8. Las pruebas utilizan datos reales | Protección de datos | Exponer información de clientes | Utilizar datos ficticios |
| 9. Marketing utiliza correos para promociones | Finalidad | Usar información para otra finalidad sin comprobar si está permitida | Revisar autorización y aviso de privacidad |
| 10. No se documenta para qué sirve cada dato | Gobierno de datos | Utilizar información sin conocer su finalidad | Crear un inventario de datos |

Estos problemas se podrían reducir utilizando permisos, vistas con información limitada y reglas sobre cuánto tiempo se deben conservar los datos.