---
ms.openlocfilehash: c006e6c46461dc27643f39f4750489d513734010
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882995"
---
Wenn du einen Haupt-Branch löschst, nachdem sein Pull Request zusammengeführt wurde, wird {% data variables.product.prodname_dotcom %} auf offene Pull Requests für das gleiche Repository prüfen, die den gelöschten Branch als ihren Basis-Branch angeben. {% data variables.product.prodname_dotcom %} aktualisiert solche Pull Requests automatisch, indem es deren Basis-Branch auf den Basis-Branch des zusammengeführten Pull Requests ändert.
