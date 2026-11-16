# Actividad 9 — Comparar los tres escenarios

En esta actividad se comparan los mecanismos de trazabilidad de PostgreSQL, MongoDB Community y MongoDB Enterprise/Atlas.

## Tabla comparativa

| Evento auditable | PostgreSQL (bitácora + disparador) | MongoDB Community (perfilador + bitácora) | MongoDB Enterprise/Atlas (auditoría nativa) |
|---|---|---|---|
| Acceso exitoso | Sí, registrado en bitácora | Sí, registrado en bitácora | Sí, documentado, no practicado |
| Acceso fallido | Sí, registrado en bitácora | Sí, registrado en bitácora | Sí, documentado, no practicado |
| Cambio de privilegios | Parcial, mediante registros DDL | Parcial, mediante instantáneas; sin evento directo | Sí, documentado, no practicado |
| Cambio de estructura | Sí, mediante bitácora DDL | Parcial, según los eventos registrados | Sí, documentado, no practicado |
| Modificación de datos | Sí, mediante disparador | Sí, mediante el perfilador activo | Sí, documentado, no practicado |
| Valor anterior del dato | Sí, mediante disparador | No, el perfilador no conserva automáticamente el valor anterior | No, la auditoría nativa no garantiza conservar el valor anterior |
| Lectura de datos sensibles | Parcial, según la configuración del registro | Parcial, mediante el perfilador cuando está activo | Sí, documentado, no practicado, con configuración de auditoría CRUD |
| Cambio de configuración del registro | Parcial, según la configuración de bitácora | Sí, mediante `Profiler settings changed` | Parcial, depende del tipo de cambio y la configuración |

## Conclusión

PostgreSQL permitió registrar modificaciones de datos mediante disparadores, mientras que MongoDB Community permitió identificar operaciones, usuarios y conexiones utilizando el perfilador y la bitácora.

Sin embargo, MongoDB Community tiene limitaciones importantes, principalmente para identificar cambios de privilegios y conservar los valores anteriores de los documentos.

MongoDB Enterprise y Atlas ofrecen auditoría nativa, aunque sus funciones se revisaron mediante la documentación y no se probaron directamente en este laboratorio.