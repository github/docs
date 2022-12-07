---
title: Gitignore
intro: 'API Gitignore извлекает шаблоны `.gitignore`, которые можно использовать для пропуска файлов и каталогов.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/gitignore
ms.openlocfilehash: e830b0f00d60f3eb121fa2a99a910b073780700e
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181271'
---
## Сведения об API Gitignore

При создании нового репозитория в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} с помощью API можно указать [шаблон .gitignore](/github/getting-started-with-github/ignoring-files) , который будет применяться к репозиторию после создания. API шаблонов .gitignore перечисляет и извлекает шаблоны из репозитория {% data variables.product.product_name %} [.gitignore](https://github.com/github/gitignore).

### Пользовательские типы мультимедиа для gitignore

Этот пользовательский тип мультимедиа можно использовать при получении шаблона gitignore.

    application/vnd.github.raw

Дополнительные сведения см. в разделе [Типы носителей](/rest/overview/media-types).
