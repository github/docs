---
title: Suche nach Paketen
intro: 'Du kannst auf {% data variables.product.product_name %} nach Paketen suchen und die Suchresultate mit Qualifizierern einschränken.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106043'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Über die Suche nach Paketen

Du kannst global über das gesamte {% data variables.product.product_name %} nach Paketen suchen, oder nur innerhalb einer bestimmten Organisation. Weitere Informationen findest du unter [Informationen zur Suche auf {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

{% ifversion ghes %} Du kannst nur nach Paketen in {% data variables.product.product_name %} suchen, nicht auf {% data variables.product.prodname_dotcom_the_website %}, selbst wenn {% data variables.product.prodname_github_connect %} aktiviert ist.
{% endif %}

{% data reusables.search.syntax_tips %}

## Suche in den Paketen eines Benutzers oder einer Organisation

Um Pakete zu finden, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, verwende den Qualifizierer `user` oder `org`.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [ **`user:codertocat`**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) sucht nach Paketen im Besitz von @codertocat.
| <code>org:<em>ORGNAME</em></code> | [ **`org:github`**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) sucht nach Paketen im Besitz der {% data variables.product.prodname_dotcom %} Organisation.

## Pakete nach Sichtbarkeit filtern

Um deine Suche nach öffentlichen oder privaten Paketen zu filtern, verwende den Qualifizierer `is`.

| Qualifizierer  | Beispiel |
| ------------- | -------------
| `is:public`| [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) sucht nach öffentlichen Paketen, die das Wort „angular“ enthalten.
| `is:private`| [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) sucht nach privaten Paketen, die das Wort „php“ enthalten.
