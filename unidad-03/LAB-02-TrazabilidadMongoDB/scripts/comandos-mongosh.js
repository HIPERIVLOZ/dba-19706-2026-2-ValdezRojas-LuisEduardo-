
 // LAB-02 — Trazabilidad en MongoDB Community
 // Comandos utilizados durante el laboratorio
 // Ejecutados desde mongosh, con permisos de administrador
 // Las operaciones de app_ventas se ejecutaron en sesiones separadas.

 // Actividad 1 — Edición y configuración
 db.version();
 db.adminCommand({ buildInfo: 1 }).modules;
 db.serverCmdLineOpts().parsed;

 // Actividad 2 — Comprobación sin perfilador
 db.getProfilingStatus();
 db.system.profile.countDocuments();

 // Actividad 3 — Perfilador completo
 db.setProfilingLevel(2);
 db.getProfilingStatus();

 // Operaciones realizadas con app_ventas
 db.clientes.find(
   { ciudad: "Culiacán" },
   { nombre: 1, ciudad: 1 }
 ).toArray();

 db.clientes.updateOne(
   { _id: 3 },
   { $set: { rfc: "GAMA780912XYZ" } }
 );

 db.clientes.deleteOne({ _id: 2 });

 // Consultar registros del perfilador
 db.system.profile.find().toArray();

 // Actividad 4 — Filtro del perfilador
 db.setProfilingLevel(0);
 db.system.profile.drop();

 db.setProfilingLevel(1, {
   filter: {
     op: { $in: ["insert", "update", "remove"] }
   }
 });

 db.getProfilingStatus();

 // Consulta y actualización de prueba
 db.clientes.find({ _id: 1 }).toArray();

 db.clientes.updateOne(
   { _id: 1 },
   { $set: { telefono: "6670000000" } }
 );

 // Actividades 5 y 6 — Bitácora y correlación
 function bitacora() {
   return db.adminCommand({ getLog: "global" })
     .log.map(linea => JSON.parse(linea));
 }

 bitacora().filter(
   e => e.c === "ACCESS" &&
        e.msg === "Failed to authenticate"
 );

 bitacora().filter(
   e => e.msg === "Successfully authenticated" &&
        e.attr.user === "app_ventas"
 );

 bitacora().filter(
   e => e.msg === "Profiler settings changed"
 );

 bitacora().filter(
   e => e.ctx === "conn16" &&
        e.msg === "Successfully authenticated"
 );

 // Actividad 7 — Instantáneas de privilegios
 db.getSiblingDB("auditoria")
   .instantaneas_privilegios.insertOne({
     momento: new Date(),
     tomada_por: db.runCommand({
       connectionStatus: 1
     }).authInfo.authenticatedUsers,
     usuarios: db.getUsers().users.map(u => ({
       user: u.user,
       db: u.db,
       roles: u.roles
     }))
   });

 db.setProfilingLevel(2);

 db.grantRolesToUser("app_ventas", [
   { role: "dbAdmin", db: "comercial" }
 ]);

 db.system.profile.countDocuments({
   "command.grantRolesToUser": { $exists: true }
 });

 bitacora().filter(
   e => JSON.stringify(e).includes("grantRoles")
 ).length;

 // Segunda instantánea: mismo comando de inserción anterior.

 db.getSiblingDB("auditoria")
   .instantaneas_privilegios
   .find({}, { _id: 0 })
   .sort({ momento: 1 });

 db.revokeRolesFromUser("app_ventas", [
   { role: "dbAdmin", db: "comercial" }
 ]);

 db.setProfilingLevel(1, {
   filter: {
     op: { $in: ["insert", "update", "remove"] }
   }
 });

 // Actividad 8 — Comprobaciones tras el reinicio
 db.getProfilingStatus();
 db.system.profile.countDocuments();
 db.adminCommand({ getLog: "global" }).log.length;

 // LAB-02 — Trazabilidad en MongoDB Community
 // Comandos utilizados durante el laboratorio
 // Ejecutados desde mongosh, con permisos de administrador
 // Las operaciones de app_ventas se ejecutaron en sesiones separadas.

 // Actividad 1 — Edición y configuración
 db.version();
 db.adminCommand({ buildInfo: 1 }).modules;
 db.serverCmdLineOpts().parsed;

 // Actividad 2 — Comprobación sin perfilador
 db.getProfilingStatus();
 db.system.profile.countDocuments();

 // Actividad 3 — Perfilador completo
 db.setProfilingLevel(2);
 db.getProfilingStatus();

 // Operaciones realizadas con app_ventas
 db.clientes.find(
   { ciudad: "Culiacán" },
   { nombre: 1, ciudad: 1 }
 ).toArray();

 db.clientes.updateOne(
   { _id: 3 },
   { $set: { rfc: "GAMA780912XYZ" } }
 );

 db.clientes.deleteOne({ _id: 2 });

 // Consultar registros del perfilador
 db.system.profile.find().toArray();

 // Actividad 4 — Filtro del perfilador
 db.setProfilingLevel(0);
 db.system.profile.drop();

 db.setProfilingLevel(1, {
   filter: {
     op: { $in: ["insert", "update", "remove"] }
   }
 });

 db.getProfilingStatus();

 // Consulta y actualización de prueba
 db.clientes.find({ _id: 1 }).toArray();

 db.clientes.updateOne(
   { _id: 1 },
   { $set: { telefono: "6670000000" } }
 );

 // Actividades 5 y 6 — Bitácora y correlación
 function bitacora() {
   return db.adminCommand({ getLog: "global" })
     .log.map(linea => JSON.parse(linea));
 }

 bitacora().filter(
   e => e.c === "ACCESS" &&
        e.msg === "Failed to authenticate"
 );

 bitacora().filter(
   e => e.msg === "Successfully authenticated" &&
        e.attr.user === "app_ventas"
 );

 bitacora().filter(
   e => e.msg === "Profiler settings changed"
 );

 bitacora().filter(
   e => e.ctx === "conn16" &&
        e.msg === "Successfully authenticated"
 );

 // Actividad 7 — Instantáneas de privilegios
 db.getSiblingDB("auditoria")
   .instantaneas_privilegios.insertOne({
     momento: new Date(),
     tomada_por: db.runCommand({
       connectionStatus: 1
     }).authInfo.authenticatedUsers,
     usuarios: db.getUsers().users.map(u => ({
       user: u.user,
       db: u.db,
       roles: u.roles
     }))
   });

 db.setProfilingLevel(2);

 db.grantRolesToUser("app_ventas", [
   { role: "dbAdmin", db: "comercial" }
 ]);

 db.system.profile.countDocuments({
   "command.grantRolesToUser": { $exists: true }
 });

 bitacora().filter(
   e => JSON.stringify(e).includes("grantRoles")
 ).length;

 // Segunda instantánea: mismo comando de inserción anterior.

 db.getSiblingDB("auditoria")
   .instantaneas_privilegios
   .find({}, { _id: 0 })
   .sort({ momento: 1 });

 db.revokeRolesFromUser("app_ventas", [
   { role: "dbAdmin", db: "comercial" }
 ]);

 db.setProfilingLevel(1, {
   filter: {
     op: { $in: ["insert", "update", "remove"] }
   }
 });

 // Actividad 8 — Comprobaciones tras el reinicio
 db.getProfilingStatus();
 db.system.profile.countDocuments();
 db.adminCommand({ getLog: "global" }).log.length;

 // LAB-02 — Trazabilidad en MongoDB Community
 // Comandos utilizados durante el laboratorio
 // Ejecutados desde mongosh, con permisos de administrador
 // Las operaciones de app_ventas se ejecutaron en sesiones separadas.

 // Actividad 1 — Edición y configuración
 db.version();
 db.adminCommand({ buildInfo: 1 }).modules;
 db.serverCmdLineOpts().parsed;

 // Actividad 2 — Comprobación sin perfilador
 db.getProfilingStatus();
 db.system.profile.countDocuments();

 // Actividad 3 — Perfilador completo
 db.setProfilingLevel(2);
 db.getProfilingStatus();

 // Operaciones realizadas con app_ventas
 db.clientes.find(
   { ciudad: "Culiacán" },
   { nombre: 1, ciudad: 1 }
 ).toArray();

 db.clientes.updateOne(
   { _id: 3 },
   { $set: { rfc: "GAMA780912XYZ" } }
 );

 db.clientes.deleteOne({ _id: 2 });

 // Consultar registros del perfilador
 db.system.profile.find().toArray();

 // Actividad 4 — Filtro del perfilador
 db.setProfilingLevel(0);
 db.system.profile.drop();

 db.setProfilingLevel(1, {
   filter: {
     op: { $in: ["insert", "update", "remove"] }
   }
 });

 db.getProfilingStatus();

 // Consulta y actualización de prueba
 db.clientes.find({ _id: 1 }).toArray();

 db.clientes.updateOne(
   { _id: 1 },
   { $set: { telefono: "6670000000" } }
 );

 // Actividades 5 y 6 — Bitácora y correlación
 function bitacora() {
   return db.adminCommand({ getLog: "global" })
     .log.map(linea => JSON.parse(linea));
 }

 bitacora().filter(
   e => e.c === "ACCESS" &&
        e.msg === "Failed to authenticate"
 );

 bitacora().filter(
   e => e.msg === "Successfully authenticated" &&
        e.attr.user === "app_ventas"
 );

 bitacora().filter(
   e => e.msg === "Profiler settings changed"
 );

 bitacora().filter(
   e => e.ctx === "conn16" &&
        e.msg === "Successfully authenticated"
 );

 // Actividad 7 — Instantáneas de privilegios
 db.getSiblingDB("auditoria")
   .instantaneas_privilegios.insertOne({
     momento: new Date(),
     tomada_por: db.runCommand({
       connectionStatus: 1
     }).authInfo.authenticatedUsers,
     usuarios: db.getUsers().users.map(u => ({
       user: u.user,
       db: u.db,
       roles: u.roles
     }))
   });

 db.setProfilingLevel(2);

 db.grantRolesToUser("app_ventas", [
   { role: "dbAdmin", db: "comercial" }
 ]);

 db.system.profile.countDocuments({
   "command.grantRolesToUser": { $exists: true }
 });

 bitacora().filter(
   e => JSON.stringify(e).includes("grantRoles")
 ).length;

 // Segunda instantánea: mismo comando de inserción anterior.

 db.getSiblingDB("auditoria")
   .instantaneas_privilegios
   .find({}, { _id: 0 })
   .sort({ momento: 1 });

 db.revokeRolesFromUser("app_ventas", [
   { role: "dbAdmin", db: "comercial" }
 ]);

 db.setProfilingLevel(1, {
   filter: {
     op: { $in: ["insert", "update", "remove"] }
   }
 });

 // Actividad 8 — Comprobaciones tras el reinicio
 db.getProfilingStatus();
 db.system.profile.countDocuments();
 db.adminCommand({ getLog: "global" }).log.length;
