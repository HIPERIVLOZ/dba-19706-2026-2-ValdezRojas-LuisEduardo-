# Actividad 10 — Responder a Dirección

### 1. ¿Quién cambió el RFC de María García en la Actividad 2? ¿Y en la Actividad 3?

**Actividad 2:** No hay evidencia con esta edición que permita atribuir el cambio directamente a un usuario, porque el perfilador estaba desactivado y la bitácora no registró la modificación del RFC.

**Actividad 3:** El perfilador identificó al usuario `app_ventas@comercial` como responsable de la operación `update` sobre el documento de María García.

### 2. ¿Cuándo y desde qué aplicación?

En la Actividad 2 no se obtuvo un registro de la operación que permita confirmar su momento exacto y la aplicación responsable.

En la Actividad 3, el cambio se registró el **15 de noviembre de 2026 a las 18:33:26**, hora local, desde la aplicación `app-ventas-web`, con conexión desde `127.0.0.1`.

### 3. ¿Qué valor tenía antes?

El RFC original utilizado al preparar los datos era `GAMA780912GHI`.

Después, en la Actividad 2, se modificó a `GAMA780912XXX` y en la Actividad 3 se actualizó a `GAMA780912XYZ`.

Sin embargo, el perfilador no registra automáticamente el valor anterior. Por eso, aunque conocemos los valores utilizados durante la práctica, no se puede demostrar el historial completo del dato utilizando únicamente los registros de auditoría disponibles en MongoDB Community.

### 4. ¿Cambió alguien los privilegios de `app_ventas`?

Sí. Las instantáneas tomadas durante la Actividad 7 muestran que el usuario `app_ventas` pasó de tener solamente el rol `readWrite` a tener también el rol `dbAdmin`.

Las instantáneas fueron tomadas por `admin`, pero eso no demuestra por sí solo quién otorgó el permiso ni el momento exacto en que ocurrió.

No hay evidencia directa del cambio de privilegios en el perfilador o la bitácora mediante las búsquedas realizadas.

Por último, se ejecutó la revocación del rol `dbAdmin` para regresar a la configuración anterior.