---
title: Проверка кода
intro: 'API {% data variables.product.prodname_code_scanning %} позволяет получать и обновлять оповещения {% data variables.product.prodname_code_scanning %} из репозитория.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/code-scanning
ms.openlocfilehash: 29e04fddb96212e716f2f54b1b62e99fcff1e4da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061397'
---
{% data reusables.code-scanning.beta %}

## Сведения об API проверки кода

API {% data variables.product.prodname_code_scanning %} позволяет получать и обновлять оповещения {% data variables.product.prodname_code_scanning %} из репозитория. Для создания автоматических отчетов для оповещений {% data variables.product.prodname_code_scanning %} о результатах проверки кода в организации или отправки результатов анализа, созданных с помощью автономных средств {% data variables.product.prodname_code_scanning %}, можно использовать конечные точки. Дополнительные сведения см. в разделе [Поиск уязвимостей системы безопасности и ошибок в коде](/github/finding-security-vulnerabilities-and-errors-in-your-code).

### Пользовательский тип носителя для {% data variables.product.prodname_code_scanning %}

Для REST API {% data variables.product.prodname_code_scanning %} поддерживается только один пользовательский тип носителя. 

    application/sarif+json

Этот тип носителя можно использовать с запросами `GET`, отправляемыми в конечную точку `/analyses/{analysis_id}`. Дополнительные сведения об этой операции см. в разделе [Получение анализа {% data variables.product.prodname_code_scanning %} для репозитория](#get-a-code-scanning-analysis-for-a-repository). При использовании этого типа мультимедиа с данной операцией ответ включает подмножество фактических данных, отправленных для указанного анализа, а не сводку анализа, возвращаемою при использовании типа мультимедиа по умолчанию. Ответ также содержит дополнительные данные, например свойства `github/alertNumber` и `github/alertUrl`. Для данных применяется формат [SARIF версии 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

Дополнительные сведения см. в разделе [Типы носителей](/rest/overview/media-types).
