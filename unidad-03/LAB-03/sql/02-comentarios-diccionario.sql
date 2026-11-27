
COMMENT ON TABLE public.clientes IS
'Clientes de Comercializadora Norte. Propietario: Gerencia Comercial. Custodio: DBA. Clasificación: confidencial (contiene datos personales).';



COMMENT ON COLUMN public.clientes.id IS
'Identificador interno del cliente. Generado automáticamente por el sistema.';

COMMENT ON COLUMN public.clientes.nombre IS
'Nombre completo del cliente. Dato personal identificador directo.';

COMMENT ON COLUMN public.clientes.correo IS
'Correo de contacto del cliente. Dato personal. Uso: notificaciones y comunicación.';

COMMENT ON COLUMN public.clientes.telefono IS
'Número telefónico de contacto. Dato personal. Uso: comunicación con el cliente.';

COMMENT ON COLUMN public.clientes.rfc IS
'RFC del cliente. Dato personal. Uso: facturación. Cambios auditados en auditoria.cambios_clientes.';

COMMENT ON COLUMN public.clientes.edad IS
'Edad del cliente en años cumplidos. Dato personal. Uso: análisis estadístico agregado.';

COMMENT ON COLUMN public.clientes.ciudad IS
'Ciudad de residencia o ubicación registrada del cliente. Dato personal de contexto.';

COMMENT ON COLUMN public.clientes.codigo_postal IS
'Código postal asociado al domicilio del cliente. Dato personal de ubicación.';

COMMENT ON COLUMN public.clientes.fecha_alta IS
'Fecha en que el cliente fue registrado en el sistema. Uso: control de altas y antigüedad.';

COMMENT ON COLUMN public.clientes.segmento IS
'Clasificación comercial del cliente. Uso: organización y análisis de clientes.';



SELECT
    c.ordinal_position AS pos,
    c.column_name AS columna,
    c.data_type AS tipo,
    c.character_maximum_length AS longitud,
    c.is_nullable AS acepta_nulos,
    c.column_default AS valor_por_defecto,
    col_description(
        'public.clientes'::regclass,
        c.ordinal_position
    ) AS descripcion
FROM information_schema.columns c
WHERE c.table_schema = 'public'
  AND c.table_name = 'clientes'
ORDER BY c.ordinal_position;

