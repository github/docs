---
ms.openlocfilehash: 53ead6c394e757a67d36fde9c73c74eec7e963bc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089059"
---
1. Gib die Details für ihr neues benutzerdefiniertes Muster ein:
   1. Du musst zumindest den Namen für dein Muster und einen regulären Ausdruck für das Format deines geheimen Musters angeben.
   1. Du kannst auf **Weitere Optionen {% octicon "chevron-down" aria-label="down" %}** klicken, um andere umgebende Inhalte oder zusätzliche Übereinstimmungsanforderungen für das geheime Format bereitzustellen.
   1. Gib eine Beispieltestzeichenfolge an, um sicherzustellen, dass deine Konfiguration den erwarteten Mustern entspricht.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5499 %} ![ Erstellen eines benutzerdefinierten {% data variables.product.prodname_secret_scanning %}-Musterformulars](/assets/images/help/repository/secret-scanning-create-custom-pattern.png) {% else %} ![Erstellen eines benutzerdefinierten {% data variables.product.prodname_secret_scanning %}-Musterformulars](/assets/images/enterprise/3.2/repository/secret-scanning-create-custom-pattern.png) {% endif %}
