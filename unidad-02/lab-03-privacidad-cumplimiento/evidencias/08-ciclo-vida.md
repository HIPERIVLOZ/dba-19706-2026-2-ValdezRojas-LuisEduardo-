# Actividad 8 - Derecho de cancelación y ciclo de vida

## Situación

Un cliente solicita que su información personal sea eliminada y el área responsable autoriza la solicitud.

Antes de eliminar cualquier registro, es necesario revisar si sus datos se encuentran almacenados en otras partes del sistema.

## Análisis de las posibles copias

| Ubicación | ¿Qué debemos revisar? |
|---|---|
| Tablas relacionadas | Comprobar si existen otras tablas con información del cliente. |
| Respaldos | Revisar si los datos se encuentran en copias de seguridad. |
| Réplicas | Verificar si existen otras bases de datos con la misma información. |
| Auditoría | Revisar los registros que puedan contener información personal. |
| Analítica | Comprobar si se realizaron copias para generar estadísticas. |
| Exportaciones | Identificar archivos descargados con información del cliente. |
| Sistemas externos | Revisar si los datos fueron compartidos con otros sistemas. |

## Mapa del ciclo de vida de los datos

```text
                  clientes
                     |
       +-------------+-------------+
       |             |             |
 clientes_soporte  Respaldos      Réplicas
       |             |             |
       +-------------+-------------+
                     |
              Otros destinos
                     |
          +----------+----------+
          |          |          |
       Reportes  Exportaciones  Sistemas
                              externos
```


## Pregunta

### ¿Por qué eliminar un registro de una tabla no necesariamente significa que toda la información relacionada con esa persona haya desaparecido de la organización?

Porque los datos pueden encontrarse en respaldos, reportes, archivos exportados, tablas relacionadas y sistemas externos.

Aunque se elimine el registro de la tabla principal, esas otras copias podrían seguir conservando información del cliente.

Por eso, antes de realizar una eliminación, la organización debe identificar dónde se encuentran los datos, comprobar qué información puede eliminarse y determinar si existe alguna obligación que justifique conservarla durante cierto tiempo.

## Conclusión

La cancelación de datos no consiste únicamente en ejecutar un DELETE. Es necesario revisar todo el ciclo de vida de la información y coordinarse con las áreas responsables para evitar que permanezcan copias innecesarias.

En esta actividad no se ejecutó ninguna eliminación, ya que primero se realizó el análisis solicitado.