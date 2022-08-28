---
title: Acerca de las direcciones de IP de GitHub
intro: '{% data variables.product.product_name %} proporciona aplicaciones desde varios rangos de dirección IP, que están disponibles usando la API.'
redirect_from:
  - /articles/what-ip-addresses-does-github-use-that-i-should-whitelist/
  - /categories/73/articles/
  - /categories/administration/
  - /articles/github-s-ip-addresses/
  - /articles/about-github-s-ip-addresses
  - /articles/about-githubs-ip-addresses
  - /github/authenticating-to-github/about-githubs-ip-addresses
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-githubs-ip-addresses
versions:
  fpt: '*'
topics:
  - Identity
  - Access management
shortTitle: Direcciones IP de GitHub
---

Puedes recuperar una lista de direcciones IP de {% data variables.product.prodname_dotcom %} desde el punto de conexión de API [meta](https://api.github.com/meta). Para obtener más información, consulta la sección "[Meta](/rest/reference/meta)".

{% note %}

**Nota:** La lista de direcciones IP de {% data variables.product.prodname_dotcom %} que devuelve la API de Meta no pretende ser una lista exhaustiva. Por ejemplo, puede que no se listen las direcciones IP para algunos servicios de {% data variables.product.prodname_dotcom %}, tales como LFS o {% data variables.product.prodname_registry %}.

{% endnote %}

Estos rangos están en [notación CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). Puedes usar una herramienta de conversión en línea como esta  [Calculadora Supernet CIDR / VLSM](http://www.subnet-calculator.com/cidr.php) para convertir de una notación CIDR a rangos de dirección IP.

Hacemos cambios a nuestras direcciones IP de vez en cuando. No te recomendamos hacer una lista blanca por dirección de IP, sin embargo, si utilizas estos rangos de IP te exhortamos enfáticamente a monitorear nuestra API con frecuencia.

Para que las aplicaciones funcionen, debes habilitar los puertos TCP 22, 80, 443 y 9418 mediante nuestros rangos de IP para `github.com`.

## Leer más

- "[Solucionar problemas de conectividad ](/articles/troubleshooting-connectivity-problems)"
