---
title: Запросы
miniTocMaxHeadingLevel: 3
redirect_from:
  - /v4/query
  - /v4/reference/query
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: d5c31e8e00788d2e75f27b0bb161249f01fcfb1d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109045'
---
## Сведения о запросах

Каждая схема GraphQL имеет корневой тип как для запросов, так и для изменений. [Тип запроса](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) определяет операции GraphQL, которые извлекают данные с сервера.

Дополнительные сведения см. в разделе [Сведения о запросах](/graphql/guides/forming-calls-with-graphql#about-queries).

{% note %}

**Примечание**. Для запросов {% data variables.product.prodname_github_app %} от [пользователя к серверу](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) следует использовать отдельные запросы для проблем и запросов на вытягивание. Например, используйте фильтры `is:issue` или `is:pull-request` и их эквиваленты. Использование соединения `search` для возврата сочетания проблем и запросов на вытягивание в одном запросе приведет к пустому набору узлов.

{% endnote %}

<!-- Content after this section is automatically generated -->
