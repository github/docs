---
title: Gitignore
intro: 'Verwende die REST-API, um Vorlagen vom Typ `.gitignore` abzurufen, die zum Ignorieren von Dateien und Verzeichnissen verwendet werden können.'
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
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193041'
---
## Informationen zu gitignore

Wenn du ein neues Repository in {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} über die API erstellst, kannst du eine [GITIGNORE-Vorlage](/github/getting-started-with-github/ignoring-files) festlegen, die beim Erstellen auf das Repository angewendet werden soll. Du kannst die REST-API zum Abrufen von GITIGNORE-Vorlagen aus dem [.gitignore-Repository](https://github.com/github/gitignore) auf {% data variables.product.product_name %} verwenden.

Du kannst den benutzerdefinierten Medientyp `application/vnd.github.raw` beim Abrufen einer GITIGNORE-Vorlage verwenden. Weitere Informationen findest du unter [Medientypen](/rest/overview/media-types).
