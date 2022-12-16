---
title: Установка пакета
intro: 'Вы можете установить пакет из {% data variables.product.prodname_registry %} и использовать его в качестве зависимости в собственном проекте.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
  - /packages/publishing-and-managing-packages/installing-a-package
  - /packages/manage-packages/installing-a-package
permissions: You can install any package that you have permission to view.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: a9e472f2bd995e3af92f37db587be4101cd03443
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099236'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Сведения об установке пакетов

Вы можете выполнить поиск по {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} для поиска пакетов в {% данных variables.product.prodname_registry %}, которые можно установить в собственном проекте. Дополнительные сведения см. в разделе [Поиск пакетов в {% data variables.product.prodname_registry %}](/search-github/searching-on-github/searching-for-packages).

После того как нужный пакет будет найден, можно прочитать его описание, а также инструкции по установке и использованию на странице пакета.

## Установка пакета

Можно установить пакет из {% data variables.product.prodname_registry %} с помощью любого {% ifversion fpt or ghae or ghec %}поддерживаемого клиента пакета{% else %}типа пакета, включенного для экземпляра{% endif %}, следуя тем же общим рекомендациям.

1. Выполните проверку подлинности в {% data variables.product.prodname_registry %}, используя инструкции для клиента пакета. Дополнительные сведения см. в разделе [Проверка подлинности в GitHub Packages](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages).
2. Установите пакет, используя инструкции для клиента пакета.

Инструкции, относящиеся к клиенту пакета, см. в разделе [Работа с реестром {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry).
