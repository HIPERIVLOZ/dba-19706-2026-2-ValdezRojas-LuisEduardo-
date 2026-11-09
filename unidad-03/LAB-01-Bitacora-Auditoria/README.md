# Laboratorio 1 — Bitácoras y auditoría del dato en PostgreSQL

**Materia:** Gestión de Seguridad y Desempeño de Bases de Datos  
**Unidad:** III  
**Estudiante:** Luis Eduardo Valdez Rojas

## Introducción

En este laboratorio se revisó cómo PostgreSQL registra conexiones, errores y cambios. También se creó una tabla de auditoría para conservar los valores anteriores y nuevos de los clientes cuando se modifican.

## Entorno de trabajo

Se utilizó PostgreSQL 17.4 instalado de forma nativa en Windows, con VS Code como editor principal, PowerShell para ejecutar `psql` y pgAdmin 4 para las consultas de administración. La base de práctica fue `comercial`.

## Archivos

- `sql/`: seis scripts de configuración, permisos y auditoría que se trabajaron durante la práctica.
- `evidencias/`: quince archivos Markdown con resultados e interpretaciones, además de la bitácora exportada y su SHA-256.
- `informe.md`: explicación general de lo realizado y sus limitaciones.

## Actividades realizadas

En la Parte A se configuró la bitácora y se revisaron conexiones, cambios de permisos, modificaciones y errores. En la Parte B se creó la auditoría mediante un disparador y se comprobaron sus registros. Al final se exportó la bitácora y se reconstruyó la cronología. La Parte C de `pgaudit` no se realizó porque es opcional.

## Referencia

[Guía del Laboratorio 1](https://academy.ficlabs.com.mx/materias/dba/unidad-03/laboratorios/laboratorio-1-bitacoras-y-auditoria-del-dato-postgresql/)
