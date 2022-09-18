---
title: Pesquisar pacotes
intro: 'Você pode procurar pacotes no {% data variables.product.product_name %} e limitar os resultados usando qualificadores de pesquisa.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095522'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Sobre a procura de pacotes

É possível procurar pacotes globalmente em todos os {% data variables.product.product_name %} ou pesquisar pacotes dentro de uma determinada organização. Para obter mais informações, confira "[Sobre a pesquisa no {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

{% ifversion ghes %} Só é possível pesquisar pacotes no {% data variables.product.product_name %}, não no {% data variables.product.prodname_dotcom_the_website %}, mesmo que o {% data variables.product.prodname_github_connect %} esteja habilitado.
{% endif %}

{% data reusables.search.syntax_tips %}

## Procurar pacotes do usuário ou da organização

Para encontrar os pacotes pertencentes a determinado usuário ou organização, use o qualificador `user` ou `org`.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [ **`user:codertocat`**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) corresponde aos pacotes pertencentes a @codertocat
| <code>org:<em>ORGNAME</em></code> | [ **`org:github`**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) corresponde aos pacotes pertencentes à organização {% data variables.product.prodname_dotcom %}

## Filtrar por visibilidade do pacote

Para filtrar sua pesquisa pelo tipo de pacote ser público ou privado, use o qualificador `is`.

| Qualificador  | Exemplo |
| ------------- | -------------
| `is:public`| [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) corresponde aos pacotes públicos que contêm a palavra "angular"
| `is:private`| [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) corresponde aos pacotes privados que contêm a palavra "php"
