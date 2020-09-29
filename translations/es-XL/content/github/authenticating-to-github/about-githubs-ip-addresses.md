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
versions:
  free-pro-team: '*'
---

Puedes recuperar una lista de direcciones IP de {% data variables.product.prodname_dotcom %} desde el punto de conexión de API [meta](https://api.github.com/meta). Para obtener más información, consulta la sección "[Meta](/v3/meta/)".

Estos rangos están en [notación CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). Puedes usar una herramienta de conversión en línea como esta  [Calculadora Supernet CIDR / VLSM](http://www.subnet-calculator.com/cidr.php) para convertir de una notación CIDR a rangos de dirección IP.

De vez en cuando hacemos cambios en nuestras direcciones IP, y mantendremos esta API actualizada. No te recomendamos hacer una lista blanca por dirección de IP, sin embargo, si utilizas estos rangos de IP te exhortamos enfáticamente a monitorear nuestra API con frecuencia.

Para que las aplicaciones funcionen, debes habilitar los puertos TCP 22, 80, 443 y 9418 mediante nuestros rangos de IP para `github.com`.

### Leer más

- "[Solucionar problemas de conectividad ](/articles/troubleshooting-connectivity-problems)"
