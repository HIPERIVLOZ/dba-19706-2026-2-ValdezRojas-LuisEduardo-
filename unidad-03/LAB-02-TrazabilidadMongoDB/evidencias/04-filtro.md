# Actividad 4 — Reducir el volumen con un filtro

## Procedimiento

Primero se desactivó el perfilador y se eliminaron los registros anteriores de `system.profile`, después de haberlos exportado como evidencia.

Luego se configuró el perfilador en nivel 1, utilizando un filtro para registrar solamente las operaciones de inserción, actualización y eliminación.

```javascript
db.setProfilingLevel(0)

db.system.profile.drop()

db.setProfilingLevel(1, {
  filter: { op: { $in: ["insert", "update", "remove"] } }
})

db.getProfilingStatus()
```

## Resultados obtenidos

Al consultar la configuración del perfilador, se obtuvo `was: 1`, lo que confirmó que estaba activado con el filtro correspondiente.

Después se realizó una consulta al cliente con `_id: 1` y una actualización de su número de teléfono a `6670000000`.

Al revisar `system.profile`, solamente apareció la operación `update`. La consulta `find` no quedó registrada porque no estaba incluida en el filtro.

El registro obtenido fue:

```javascript
{
  op: 'update',
  ns: 'comercial.clientes',
  command: {
    q: { _id: 1 },
    u: { '$set': { telefono: '6670000000' } }
  },
  ts: ISODate('2026-11-16T02:09:17.220Z'),
  appName: 'app-ventas-web',
  user: 'app_ventas@comercial'
}
```

## Preguntas

### 1. ¿Qué perdiste de evidencia al aplicar el filtro? ¿Qué ganaste?

Se perdió la información sobre las consultas realizadas, ya que el filtro solamente registra operaciones que modifican los datos. Sin embargo, se consiguió reducir la cantidad de registros almacenados, evitando guardar información que no era necesaria para esta práctica.

### 2. ¿Qué filtro usarías si solo interesaran operaciones sobre la colección `clientes`?

Utilizaría un filtro que solamente registre las operaciones realizadas sobre la colección `comercial.clientes`.

```javascript
{ ns: "comercial.clientes" }
```

De esta manera, el perfilador se enfocaría únicamente en esa colección, sin registrar operaciones de otras colecciones.