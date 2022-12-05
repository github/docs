---
title: Gitignore
intro: 'Die Gitignore-API ruft `.gitignore`-Vorlagen ab, mit denen Dateien und Verzeichnisse ignoriert werden können.'
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
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181268'
---
## Informationen zur Gitignore-API

Wenn du ein neues Repository in {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} über die API erstellst, kannst du eine [GITIGNORE-Vorlage](/github/getting-started-with-github/ignoring-files) festlegen, die beim Erstellen auf das Repository angewendet werden soll. Die API für GITIGNORE-Vorlagen listet Vorlagen aus dem [.gitignore-Repository](https://github.com/github/gitignore) auf {% data variables.product.product_name %} auf und ruft diese ab.

### Benutzerdefinierte Medientypen für GITIGNORE-Vorlagen

Du kannst diesen benutzerdefinierten Medientyp beim Abrufen einer GITIGNORE-Vorlage verwenden.

    application/vnd.github.raw

Weitere Informationen findest du unter [Medientypen](/rest/overview/media-types).
