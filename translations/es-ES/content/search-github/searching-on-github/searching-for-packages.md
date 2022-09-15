---
title: Buscar paquetes
intro: 'Puedes buscar paquetes en {% data variables.product.product_name %} y acotar los resultados utilizando los calificadores de búsqueda.'
product: '{% data reusables.gated-features.packages %}'
permissions: Anyone can search for packages they have access to.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-for-packages
  - /github/searching-for-information-on-github/searching-on-github/searching-for-packages
ms.openlocfilehash: de7a348b20f18315c58ab13b2e19f0b162b9b792
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118897'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Acerca de la búsqueda de paquetes

Puedes buscar paquetes globalmente a través de todo {% data variables.product.product_name %}, o buscarlos dentro de una organización en particular. Para más información, vea "[Acerca de la investigación en {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

{% ifversion ghes %} Solo puedes buscar paquetes sobre {% data variables.product.product_name %}, no de {% data variables.product.prodname_dotcom_the_website %}, aunque {% data variables.product.prodname_github_connect %} esté habilitado.
{% endif %}

{% data reusables.search.syntax_tips %}

## Buscar dentro de los paquetes de una organización o usuario

Para buscar paquetes propiedad de un usuario u organización determinados, use el calificador `user` o `org`.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [ **`user:codertocat`**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) coincide con los paquetes propiedad de @codertocat
| <code>org:<em>ORGNAME</em></code> | [ **`org:github`**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) coincide con los paquetes propiedad de la organización de {% data variables.product.prodname_dotcom %}

## Filtrar por visibilidad del paquete

Para filtrar la búsqueda en función de si el paquete es público o privado, use el calificador `is`.

| Calificador:  | Ejemplo |
| ------------- | -------------
| `is:public`| [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) coincide con los paquetes públicos que contienen la palabra "angular"
| `is:private`| [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) coincide con los paquetes privados que contienen la palabra "php"
