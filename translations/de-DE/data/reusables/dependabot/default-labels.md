---
ms.openlocfilehash: 3b05d1b75c37f24e9ae4ce03618910c572f259d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145133518"
---
Standardmäßig löst {% data variables.product.prodname_dependabot %} alle Pull Requests mit der Bezeichnung `dependencies` aus. Wenn mehrere Paket-Manager definiert sind, enthält {% data variables.product.prodname_dependabot %} eine zusätzliche Bezeichnung für jeden Pull Request. Dies gibt an, welche Sprache oder welches Ökosystem die Pull Request aktualisiert, z. B. `java` für Gradle-Updates und `submodules` für Git-Untermodul-Updates. {% data variables.product.prodname_dependabot %} erstellt diese Standardbezeichnungen automatisch, sofern in Ihrem Repository erforderlich.
