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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131746'
---
## Informationen zur {% data variables.product.prodname_marketplace %}-API

Weitere Informationen zu {% data variables.product.prodname_marketplace %} findest du unter [GitHub Marketplace](/marketplace/).

Mit der {% data variables.product.prodname_marketplace %}-API siehst du die Preispläne und Käufe der Kunden sowie aktive Abonnements für Konten.

### Testen mit Stubendpunkten

Diese API enthält Endpunkte, mit denen du [deine {% data variables.product.prodname_github_app %}](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/) mit **Stubdaten** testen kannst. Stubdaten sind hartcodierte Dummydaten, die sich nicht basierend auf tatsächlichen Abonnements ändern.

Verwende zum Testen mit Stubdaten einen Stubendpunkt anstelle des Produktionsendpunkts. Auf diese Weise kannst du testen, ob die API-Logik funktioniert, bevor du {% data variables.product.prodname_github_apps %} auf dem {% data variables.product.prodname_marketplace %} anbietest.

Ersetze die Stubendpunkte durch Produktionsendpunkte, bevor du die {% data variables.product.prodname_github_app %} bereitstellst.
