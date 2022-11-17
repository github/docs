---
title: Устранение неполадок с поисковыми запросами
intro: 'При обнаружении непредвиденных результатов во время поиска в {% data variables.product.product_name %} можно устранить неполадки, проверив распространенные проблемы и ограничения.'
redirect_from:
  - /articles/troubleshooting-search-queries
  - /github/searching-for-information-on-github/troubleshooting-search-queries
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/troubleshooting-search-queries
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Troubleshoot search queries
ms.openlocfilehash: 2c90d144401974ebc44f4b80a1509593fe987329
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118936'
---
## Возможные истечения времени ожидания

Выполнение некоторых запросов требует больших вычислительных ресурсов для нашей поисковой инфраструктуры. Чтобы обеспечить быстрый поиск для всех пользователей, мы ограничиваем продолжительность выполнения каждого отдельного запроса. В редких случаях, когда запрос превышает лимит времени, поиск возвращает все совпадения, которые были найдены до истечения времени ожидания, и информирует вас о том, что время ожидания истекло.

Превышение времени ожидания не обязательно означает, что результаты поиска будут неполными. Это просто означает, что запрос был прекращен до того, как он выполнил поиск по всем возможным данным.

## Ограничения на длину запроса

Существуют некоторые ограничения на длину запросов при поиске по {% data variables.product.product_name %}:

* Запросы длиннее 256 символов не поддерживаются
* Невозможно создать запрос, используя более пяти операторов `AND`, `OR` или `NOT`

Определенные типы поиска, такие как поиск по коду, могут иметь дополнительные ограничения. Дополнительные сведения см. в документации по этим типам поиска.

## Дополнительные материалы

- [Сведения о поиске в GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)
