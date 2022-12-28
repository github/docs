---
title: Recherche de packages
intro: 'Vous pouvez rechercher des packages sur {% data variables.product.product_name %} et affiner les résultats à l’aide de qualificateurs de recherche.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106042'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## À propos de la recherche de packages

Vous pouvez rechercher des packages de manière globale dans l’ensemble de {% data variables.product.product_name %} ou dans une organisation spécifique. Pour plus d’informations, consultez « [À propos de la recherche sur {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github) ».

{% ifversion ghes %} Vous pouvez uniquement rechercher des packages sur {% data variables.product.product_name %}, et non sur {% data variables.product.prodname_dotcom_the_website %}, même si {% data variables.product.prodname_github_connect %} est activé.
{% endif %}

{% data reusables.search.syntax_tips %}

## Recherche dans les packages d’un utilisateur ou d’une organisation

Pour rechercher des packages appartenant à un utilisateur ou à une organisation spécifique, utilisez le qualificateur `user` ou `org`.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [ **`user:codertocat`**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) permet de rechercher les packages appartenant à @codertocat
| <code>org:<em>ORGNAME</em></code> | [ **`org:github`**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) permet de rechercher les packages appartenant à l’organisation {% data variables.product.prodname_dotcom %}

## Filtrage par visibilité du package

Pour filtrer votre recherche selon qu’un package est public ou privé, utilisez le qualificateur `is`.

| Qualificateur  | Exemple |
| ------------- | -------------
| `is:public`| [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) permet de rechercher les packages publics qui contiennent le mot « angular »
| `is:private`| [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) permet de rechercher les packages privés qui contiennent le mot « php »
