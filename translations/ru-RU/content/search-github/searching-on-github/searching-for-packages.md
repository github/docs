---
title: Поиск пакетов
intro: 'Вы можете искать пакеты в {% data variables.product.product_name %} и фильтровать результаты с помощью квалификаторов поиска.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118896'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Сведения о поиске пакетов

Вы можете искать пакеты на глобальном уровне в рамках всего {% data variables.product.product_name %} либо в пределах определенной организации. Дополнительные сведения см. в разделе [Поиск в {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

{% ifversion ghes %} Вы можете искать пакеты только в {% data variables.product.product_name %}, но не на {% data variables.product.prodname_dotcom_the_website %}, даже если включен {% data variables.product.prodname_github_connect %}.
{% endif %}

{% data reusables.search.syntax_tips %}

## Поиск в пакетах пользователя или организации

Чтобы найти пакеты, принадлежащие определенному пользователю или определенной организации, используйте квалификатор `user` или `org`.

| Квалификатор        | Пример
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [ **`user:codertocat`**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) соответствует пакетам, принадлежащим @codertocat.
| <code>org:<em>ORGNAME</em></code> | [ **`org:github`**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) соответствует пакетам, принадлежащим организации {% data variables.product.prodname_dotcom %}.

## Фильтрация по видимости пакета

Чтобы отфильтровать поиск по тому, является ли пакет общедоступным или частным, используйте квалификатор `is`.

| Квалификатор  | Пример |
| ------------- | -------------
| `is:public`| [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) соответствует общедоступным пакетам, содержащим слово "angular".
| `is:private`| [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) соответствует частным пакетам, содержащим слово "php".
