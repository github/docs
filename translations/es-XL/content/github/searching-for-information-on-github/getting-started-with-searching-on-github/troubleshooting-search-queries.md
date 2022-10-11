---
title: Solucionar problemas de consultas de búsqueda
intro: 'Si encuentras resultados inesperados cuando buscas en {% data variables.product.product_name %}, puedes solucionar los problemas revisando los problemas comunes y las limitaciones.'
redirect_from:
  - /articles/troubleshooting-search-queries
  - /github/searching-for-information-on-github/troubleshooting-search-queries
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---
### Interrupciones potenciales

Algunas consultas son costosas desde el punto de vista informático para que las ejecute nuestra infraestructura de búsqueda. Para que la búsqueda siga siendo rápida para todos, limitamos la cantidad de tiempo que se puede ejecutar una consulta individual. En pocas situaciones, cuando una consulta supera el límite de tiempo, la búsqueda devuelve todas las coincidencias que se encontraron antes de que se acabara el tiempo y te informa que se acabó el tiempo.

Llegar a una interrupción no necesariamente significa que los resultados de búsqueda estén incompletos. Solo significa que la consulta se interrumpió antes de que se buscara en todos los datos posibles.

### Limitaciones sobre la longitud de la consulta

Existen algunos límites en la longitud de las consultas cuando se busca en {% data variables.product.product_name %}:

* No se admiten consultas que superen los 256 caracteres
* No puede elaborar una consulta que utilice más de cinco operadores `AND`, `OR` o `NOT`

Los tipos de búsqueda específicos, como la búsqueda de código, pueden tener más limitaciones. Revisa la documentación de estos tipos de búsqueda para obtener más información.

### Leer más

- "[Acerca de buscar en GitHub](/articles/about-searching-on-github)"
