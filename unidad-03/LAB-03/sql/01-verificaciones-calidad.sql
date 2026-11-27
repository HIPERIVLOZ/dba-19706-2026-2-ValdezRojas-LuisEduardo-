
SELECT lower(correo) AS correo_normalizado,
       count(*) AS registros,
       string_agg(id::text, ', ') AS ids
FROM public.clientes
GROUP BY lower(correo)
HAVING count(*) > 1;

SELECT id, nombre, rfc
FROM public.clientes
WHERE rfc IS NULL
   OR rfc !~ '^[A-ZÑ&]{3,4}[0-9]{6}[A-Z0-9]{3}$';

SELECT id, nombre, correo
FROM public.clientes
WHERE correo !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$';

SELECT id, nombre, edad
FROM public.clientes
WHERE edad IS NOT NULL
  AND (edad < 18 OR edad > 120);

SELECT count(*) AS total,
       count(*) FILTER (WHERE telefono IS NULL) AS sin_telefono,
       count(*) FILTER (WHERE rfc IS NULL) AS sin_rfc
FROM public.clientes;
