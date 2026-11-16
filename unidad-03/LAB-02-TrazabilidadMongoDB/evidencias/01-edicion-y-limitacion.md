# Actividad 1 — Edición y limitaciones de MongoDB

### 1. ¿Qué edición de MongoDB estás usando? ¿Qué evidencia lo demuestra?

Se está utilizando MongoDB 7.0.48 Community Edition. Esto se comprobó mediante el comando `buildInfo`, ya que el apartado `modules` devolvió un arreglo vacío `[]`. Esto indica que no se cuenta con las funciones de Enterprise.

### 2. ¿A dónde escribe tu servidor su bitácora? ¿Cómo lo sabes?

El servidor guarda su bitácora en la siguiente ruta:

`C:\Program Files\MongoDB\Server\7.0\log\mongod.log`

Esto se comprobó mediante el comando `db.serverCmdLineOpts().parsed`, que mostró la ubicación del archivo en el apartado `systemLog.path`.

### 3. ¿Qué cuatro categorías de eventos registraría la auditoría nativa?

La auditoría nativa puede registrar cambios de esquema (DDL), eventos de conjuntos de réplicas y clústeres fragmentados, autenticación y autorización, y operaciones CRUD, siempre que se habilite la configuración correspondiente.

### 4. ¿Qué tendría que evaluar una organización antes de licenciar Enterprise o migrar a Atlas solo para obtener auditoría?

Tendría que revisar si realmente necesita registrar esos eventos, cuánto costaría utilizar Enterprise o Atlas y qué beneficios tendría para la seguridad de sus datos. También debería considerar el almacenamiento de las bitácoras, su administración y si las herramientas de Community son suficientes para sus necesidades.