---
title: Gitignore
intro: 'Используйте REST API для получения `.gitignore` шаблонов, которые можно использовать для пропуска файлов и каталогов.'
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
ms.openlocfilehash: a3d6d35014a0c6bc46102fa7abfa11659fff6fbf
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193044'
---
## О gitignore

При создании нового репозитория в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} с помощью API можно указать [шаблон .gitignore](/github/getting-started-with-github/ignoring-files) для применения к репозиторию при его создании. С помощью REST API можно получить шаблоны .gitignore из [репозитория gitignore](https://github.com/github/gitignore) {% data variables.product.product_name %}.

При получении шаблона gitignore можно использовать `application/vnd.github.raw` пользовательский тип носителя. Дополнительные сведения см. в разделе [Типы носителей](/rest/overview/media-types).
