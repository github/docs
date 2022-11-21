---
ms.openlocfilehash: 00bdf100d02b27ce76aff35582cb4a1f5a2469a3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145105083"
---
1. Konfiguriere ein Azure-Veröffentlichungsprofil, und erstelle ein `AZURE_WEBAPP_PUBLISH_PROFILE`-Geheimnis.

   Generiere Anmeldeinformationen für deine Azure-Bereitstellung mithilfe eines Veröffentlichungsprofils. Weitere Informationen findest du unter [Generieren von Anmeldeinformationen für die Bereitstellung](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials) in der Azure-Dokumentation.

   Erstelle in deinem {% data variables.product.prodname_dotcom %}-Repository ein Geheimnis namens `AZURE_WEBAPP_PUBLISH_PROFILE`, das den Inhalt des Veröffentlichungsprofils enthält. Weitere Informationen zum Erstellen von Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).
