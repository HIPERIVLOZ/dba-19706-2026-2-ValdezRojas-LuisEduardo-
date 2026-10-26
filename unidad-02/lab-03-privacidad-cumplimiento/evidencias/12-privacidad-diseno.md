# Actividad 12 - Privacidad por diseño

## 1. ¿Qué problemas identificas?

El problema es que se quieren guardar muchos datos sin saber si realmente se van a utilizar. Esto puede poner en riesgo la información de los clientes y hacer más difícil protegerla.

## 2. ¿Qué principio de privacidad se está ignorando?

El principio de minimización, porque se están solicitando más datos de los necesarios.

## 3. ¿Qué preguntas realizarías antes de aprobar el diseño?

- ¿Para qué se necesita cada dato?
- ¿Todos son necesarios para registrar al cliente?
- ¿Quién podrá consultar esa información?
- ¿Durante cuánto tiempo se guardará?

## 4. ¿Qué datos eliminarías?

Para un registro básico quitaría salario, ocupación, estado civil y fecha de nacimiento, porque no parecen necesarios para identificar y contactar al cliente.

## 5. ¿Qué datos requerirían una justificación adicional?

El RFC, la dirección, el código postal y la edad. Estos datos podrían ser útiles para facturación, entregas o estadísticas, pero primero habría que justificar su uso.

## 6. ¿Cómo aplicarías privacidad por defecto?

Haría que la aplicación solamente solicite nombre y correo al registrarse. El teléfono podría ser opcional y los demás datos se pedirían después, únicamente cuando fueran necesarios.
También limitaría los permisos para que no cualquier empleado pueda consultar toda la información.