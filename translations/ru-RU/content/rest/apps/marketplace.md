---
title: GitHub Marketplace
allowTitleToDifferFromFilename: true
shortTitle: Marketplace
intro: ''
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: acbdb60fc93898dd7c56c21f60e12fb9dbadb31d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136325'
---
## Сведения об API {% data variables.product.prodname_marketplace %}

Дополнительные сведения о {% data variables.product.prodname_marketplace %} см. в разделе [GitHub Marketplace](/marketplace/).

API {% data variables.product.prodname_marketplace %} позволяет узнать, какие клиенты используют тот или иной тарифный план, просмотреть покупки клиента и узнать, есть ли в учетной записи активная подписка.

### Тестирование с использованием суррогатных конечных точек

Этот API включает конечные точки, позволяющие [тестировать {% data variables.product.prodname_github_app %}](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/) с использованием **суррогатных данных**. Cуррогатные данные — это жестко закодированные, выдуманные данные, которые не изменяются в зависимости от фактических подписок.

Для тестирования с использованием суррогатных данных используйте суррогатную конечную точку вместо ее рабочего аналога. Это позволяет проверить работоспособность логики API перед получением списка {% data variables.product.prodname_github_apps %} в {% data variables.product.prodname_marketplace %}.

Перед развертыванием {% data variables.product.prodname_github_app %} обязательно замените суррогатные конечные точки на рабочие.
