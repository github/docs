---
title: Публикация пакета
intro: 'Пакет можно опубликовать в {% data variables.product.prodname_registry %}, чтобы другие пользователи могли его скачивать и применять для своих целей.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
  - /packages/publishing-and-managing-packages/publishing-a-package
permissions: Anyone with write permissions for a repository can publish a package to that repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: c6bd2aa72340bc2817b7d9c1bf88003ff6428550
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099319'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Сведения об опубликованных пакетах

Можно помочь людям понять и использовать пакет, предоставив описание и другие сведения, такие как инструкции по установке и использованию, на странице пакета. {% data variables.product.product_name %} предоставляет метаданные для каждой версии, такие как дата публикации, активность скачивания и последние версии. Пример страницы пакета см. в разделе [@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1).

{% data reusables.package_registry.public-or-private-packages %} Репозиторий можно подключить к нескольким пакетам. Чтобы избежать путаницы, убедитесь, что README и описание четко предоставляют сведения о каждом пакете.

{% ifversion fpt or ghec %} Если новая версия пакета устраняет уязвимость безопасности, следует опубликовать рекомендации по безопасности в репозитории. {% data variables.product.prodname_dotcom %} проверяет каждую опубликованную рекомендацию по безопасности и может использовать ее для отправки {% data variables.product.prodname_dependabot_alerts %} в затронутые репозитории. Дополнительную информацию см. в разделе [Сведения о рекомендациях по безопасности на GitHub](/github/managing-security-vulnerabilities/about-github-security-advisories).
{% endif %}

## Публикация пакета

{% данных reusables.package_registry.packages-classic-pat-only %}

Можно опубликовать пакет в {% data variables.product.prodname_registry %} с помощью любого {% ifversion fpt or ghae or ghec %}поддерживаемого клиента пакета{% else %}типа пакета, включенного для экземпляра{% endif %}, следуя тем же общим рекомендациям.

1. Создайте или используйте существующие данные {% variables.product.pat_v1 %} с соответствующими областями для задачи, которую вы хотите выполнить. Дополнительные сведения см. в разделе [Сведения о разрешениях для {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages).
2. Выполните проверку подлинности в {% данных variables.product.prodname_registry %} с помощью {% данных variables.product.pat_v1 %} и инструкции для клиента пакета.
3. Опубликуйте пакет, используя инструкции для клиента пакета.

Инструкции, относящиеся к клиенту пакета, см. в разделе [Работа с реестром GitHub Packages](/packages/working-with-a-github-packages-registry).

После публикации пакет можно просмотреть здесь: {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в статье "[Просмотр пакетов](/packages/learn-github-packages/viewing-packages)".
