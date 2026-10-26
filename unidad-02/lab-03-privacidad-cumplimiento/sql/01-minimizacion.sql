-- Laboratorio_03_Privacidad, cumplimiento y gobierno de los datos
-- Luis_Eduardo_Valdez_Rojas#4-1
-- 01-minimizacion

CREATE TABLE public.clientes_soporte (
    id BIGINT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    correo VARCHAR(150) NOT NULL,
    telefono VARCHAR(20)
);



INSERT INTO public.clientes_soporte (
    id,
    nombre,
    correo,
    telefono
)
SELECT
    id,
    nombre,
    correo,
    telefono
FROM public.clientes;

SELECT *
FROM public.clientes_soporte;

SELECT COUNT(*) AS total_clientes
FROM public.clientes_soporte;