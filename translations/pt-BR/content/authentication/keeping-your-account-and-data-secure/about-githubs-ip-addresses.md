---
title: Sobre os endereços IP do GitHub
intro: 'O {% data variables.product.product_name %} atende a aplicativos de vários intervalos de endereços IP, que são disponibilizados usando a API.'
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
shortTitle: Endereços IP do GitHub
---

Você pode recuperar uma lista de endereços IP do {% data variables.product.prodname_dotcom %} no ponto de extremidade da API [meta](https://api.github.com/meta). Para obter mais informações, consulte "[Meta](/rest/reference/meta)".

{% note %}

**Observação:** A lista de endereços de IP de {% data variables.product.prodname_dotcom %} retornados pela Meta API não pretende ser uma lista taxativa. Por exemplo, endereços IP para alguns serviços de {% data variables.product.prodname_dotcom %} não podem ser listados, como LFS ou {% data variables.product.prodname_registry %}.

{% endnote %}

Esses intervalos estão na [notação CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). É possível usar uma ferramenta de conversão online, como essa [Calculadora Supernet CIDR/VLSM](http://www.subnet-calculator.com/cidr.php), para fazer a conversão de notação CIDR em intervalos de endereços IP.

Nós alteramos nossos endereços IP de vez em quando. Não recomendamos permitir por endereço IP. No entanto, se você usar esses intervalos de IP, é altamente recomendável o monitoramento regular da nossa API.

Para que os aplicativos funcionem, você deve permitir portas TCP 22, 80, 443 e 9418 por meio de nossos intervalos IP para `github.com`.

## Leia mais

- "[Solucionar problemas de conectividade](/articles/troubleshooting-connectivity-problems)"
