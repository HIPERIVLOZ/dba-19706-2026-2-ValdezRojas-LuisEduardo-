# Informe — LAB-04 Hardening

## Actividad 18 — Caso integral

| # | Problema | Riesgo | Control propuesto |
|---|---|---|---|
| 1 | Aceptar conexiones desde cualquier IPv4 | Pueden intentar acceder equipos desconocidos | Limitar las direcciones permitidas. |
| 2 | Aplicación con usuario administrador | La aplicación podría modificar información importante | Usar una cuenta con permisos limitados. |
| 3 | Escuchar en todas las interfaces | El servidor queda más expuesto | Utilizar solo las interfaces necesarias. |
| 4 | Firewall abierto a cualquier origen | Cualquier equipo puede intentar conectarse | Permitir únicamente redes autorizadas. |
| 5 | `pg_hba.conf` permite `0.0.0.0/0` | Acepta intentos de conexión desde cualquier IPv4 | Restringir las direcciones. |
| 6 | Permitir cualquier usuario | Se exponen cuentas que no deberían conectarse | Autorizar usuarios específicos. |
| 7 | Permitir cualquier base de datos | Se pueden intentar conexiones a bases innecesarias | Limitar las bases permitidas. |
| 8 | Privilegios administrativos innecesarios | Una cuenta comprometida podría causar más daño | Aplicar mínimo privilegio. |
| 9 | Demasiadas conexiones posibles desde la red | Aumentan los intentos de acceso | Reducir la exposición de red. |
| 10 | Depender solamente de contraseñas fuertes | Se descuidan otras medidas de seguridad | Combinar distintos controles. |

### ¿Es suficiente tener contraseñas fuertes?

No, porque las contraseñas solamente ayudan a comprobar la identidad de un usuario. También debemos controlar sus permisos, las redes que pueden conectarse, la configuración de PostgreSQL y la seguridad del sistema operativo. Además, es importante monitorear las conexiones para identificar posibles problemas.

---

## Preguntas del informe

### 1. ¿Cuál era la principal superficie de ataque?

La principal superficie de ataque era la configuración de red, ya que PostgreSQL tenía `listen_addresses = '*'`, lo que permite escuchar en todas las interfaces disponibles.

### 2. ¿Qué configuración representaba el mayor riesgo?

Considero que `listen_addresses = '*'` era uno de los principales riesgos, porque permite escuchar en más interfaces de las que podríamos necesitar. Además, encontramos que SSL estaba desactivado.

### 3. ¿Qué cambio produjo la mayor reducción de exposición?

No aplicamos cambios directamente al servidor. Sin embargo, considero que limitar `listen_addresses` a las interfaces necesarias sería una de las mejoras más importantes para reducir la exposición.

### 4. ¿Qué diferencia existe entre firewall y `pg_hba.conf`?

El firewall controla las conexiones de red que pueden llegar al servidor, mientras que `pg_hba.conf` establece qué usuarios, bases de datos y direcciones pueden autenticarse en PostgreSQL.

### 5. ¿Qué diferencia existe entre autenticación y autorización?

La autenticación comprueba quién es el usuario, por ejemplo, mediante su contraseña. La autorización determina qué acciones puede realizar dentro de la base de datos.

### 6. ¿Por qué una cuenta de aplicación no debe ser `SUPERUSER`?

Porque tendría permisos demasiado elevados. Si alguien consigue acceder a esa cuenta, podría modificar o eliminar información que la aplicación normalmente no necesita controlar.

### 7. ¿Por qué cambiar el puerto de PostgreSQL no constituye hardening suficiente?

Porque cambiar el puerto no evita que alguien encuentre el servidor. También necesitamos proteger las conexiones, los usuarios, las contraseñas y los permisos.

### 8. ¿Por qué `listen_addresses='*'` puede ser innecesario?

Porque no siempre necesitamos que PostgreSQL escuche en todas las interfaces. Si solamente trabajamos de manera local, podemos limitarlo a `localhost`.

### 9. ¿Qué papel tiene el sistema operativo en la seguridad de PostgreSQL?

El sistema operativo protege los archivos, las carpetas y los procesos del servidor. Aunque PostgreSQL tenga permisos configurados, también debemos evitar que otros usuarios del equipo accedan a archivos importantes.

### 10. ¿Qué controles deberían revisarse periódicamente?

Los usuarios y sus permisos, las reglas de `pg_hba.conf`, las conexiones permitidas, el firewall, TLS, las extensiones, las actualizaciones y los permisos de los archivos.

---

## Reflexión individual

### ¿Qué cambiarías primero si recibieras la responsabilidad de asegurar un servidor PostgreSQL que ya se encuentra funcionando en producción?

Primero revisaría las conexiones permitidas y las cuentas que tienen privilegios administrativos, porque considero que son dos de los puntos que pueden representar más riesgo.

Antes de modificar algo, comprobaría qué aplicaciones y usuarios necesitan conectarse para no interrumpir el funcionamiento del servidor. Después limitaría las conexiones innecesarias y revisaría los métodos de autenticación y los permisos de cada cuenta.

Haría esto primero porque, aunque es importante mejorar la seguridad, también debemos cuidar que el servidor siga disponible y que las aplicaciones puedan continuar trabajando normalmente.