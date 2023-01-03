---
title: Просмотр пакетов
intro: 'Вы можете просмотреть сведения о пакетах, опубликованных в репозитории, и сузить результаты по организации или пользователю.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
  - /packages/manage-packages/viewing-packages
permissions: You must have at least read permissions to view a package.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4fe01f80ec64f8029b1b2bce1d776da4eddfbd75
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192844'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Сведения о представлениях пакетов

Возможность просмотра пакета зависит от нескольких факторов. По умолчанию можно просмотреть все собственные опубликованные пакеты.

{% ifversion packages-registries-v2 %} Пакеты с областью репозитория наследуют свои разрешения и видимость от репозитория, которому принадлежит пакет. Некоторые реестры поддерживают **только** пакеты с областью действия репозитория. Список этих реестров см. в разделе [Сведения о разрешениях для {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages).

Другие реестры предлагают возможность детализированных разрешений и параметров видимости, которые можно настроить для каждого пакета, принадлежащего личной учетной записи пользователя или организации. Вы можете использовать детализированные разрешения или подключить пакет к репозиторию и наследовать разрешения репозитория. Дополнительные сведения см. в [разделах Подключение репозитория к пакету](/packages/learn-github-packages/connecting-a-repository-to-a-package) и [Настройка управления доступом и видимости пакета](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).

{% else %}

Пакеты наследуют свои разрешения и видимость от репозитория, в котором они размещены. Дополнительные сведения см. в разделе [Сведения о разрешениях для {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages).

{% endif %}

{% data reusables.package_registry.package-page-info %}

## Просмотр пакетов репозитория

Можно найти и просмотреть пакет, расположенный в определенном репозитории.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## Просмотр пакетов организации

Можно найти и просмотреть пакет, расположенный в репозиториях организации, к которой вы принадлежите.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Под названием организации щелкните {% octicon "package" aria-label="The package icon" %} **Пакеты**.
{% data reusables.package_registry.navigate-to-packages %}

## Просмотр собственных пакетов

Можно найти и просмотреть любой собственный пакет, опубликованный во всех организациях и репозиториях. 

{% data reusables.profile.access_profile %}
2. В верхней части страницы профиля в главной области навигации щелкните **Пакеты**.
  ![Вкладка "Проект"](/assets/images/help/package-registry/user-packages-tab.png) {% data reusables.package_registry.navigate-to-packages %}

## Дополнительные материалы

- [Поиск пакетов](/search-github/searching-on-github/searching-for-packages)
