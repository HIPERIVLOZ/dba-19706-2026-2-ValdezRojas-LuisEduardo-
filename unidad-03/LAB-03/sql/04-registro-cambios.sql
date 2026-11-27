```sql
SELECT num,
       substr(linea, 1, 23) AS momento,
       substring(linea from 'user=([^ ]*)') AS usuario,
       substring(linea from 'statement: (.*)$') AS sentencia
FROM dba.bitacora
WHERE linea ~ 'statement: (CREATE|ALTER|DROP|GRANT|REVOKE)'
ORDER BY num;
```