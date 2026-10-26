# Actividad 15 - Arquitectura de datos protegidos

La propuesta consiste en separar la información dependiendo del área que la utiliza, para evitar que todos los empleados puedan consultar los mismos datos.

## Propuesta de arquitectura

```
                    BASE DE DATOS
                          |
           +--------------+--------------+
           |              |              |
        Operacion      Analitica       Auditoria
           |              |              |
       Datos para     Estadisticas    Registro de
       atencion y     sin nombres     actividades
       facturacion
```

## Controles de protección

| Control | ¿Cómo se aplicaría? |
|---|---|
| Acceso | Crear roles para que cada área consulte solamente lo necesario. |
| Minimización | Guardar y mostrar únicamente los datos que se necesitan. |
| Información sensible | Restringir datos como el RFC y protegerlos con permisos. |
| Retención | Establecer cuánto tiempo se conservará cada dato. |
| Trazabilidad | Registrar quién consulta o modifica información. |
| Eliminación | Borrar o anonimizar los datos cuando corresponda. |
| Atención de solicitudes | Tener un procedimiento para consultar, corregir o cancelar datos de los clientes. |

Con esta separación, el personal de analítica podría consultar estadísticas sin acceder directamente a los datos personales, mientras que soporte y facturación tendrían acceso únicamente a la información que utilizan.