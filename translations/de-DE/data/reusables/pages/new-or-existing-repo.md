---
ms.openlocfilehash: 33f427d38193ad14c5df35ebab14bd08208c08e0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109513"
---
Du kannst entweder ein Repository erstellen oder ein vorhandenes Repository für deine Website auswählen.

Wenn du eine {% data variables.product.prodname_pages %}-Website für ein Repository erstellen möchtest, wobei nicht alle Dateien im Repository mit der Website verknüpft sind, kannst du eine Veröffentlichungsquelle für deine Website konfigurieren. Du kannst z. B. einen dedizierten Branch und Ordner für deine Websitequelldateien {% ifversion pages-custom-workflow %} einrichten oder einen benutzerdefinierten {% data variables.product.prodname_actions %}-Workflow verwenden, um deine Websitequelldateien zu erstellen und zu bereitzustellen. {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}{% else %}files.{% endif %}

{% ifversion fpt or ghec %}Wenn das Konto, dem das Repository angehört, {% data variables.product.prodname_free_user %} oder {% data variables.product.prodname_free_team %} für Organisationen verwendet, muss das Repository öffentlich sein.{% endif %}

 Wenn du eine Website in einem vorhandenen Repository erstellen möchtest, fahre mit dem Abschnitt [Erstellen deiner Website](#creating-your-site) fort.