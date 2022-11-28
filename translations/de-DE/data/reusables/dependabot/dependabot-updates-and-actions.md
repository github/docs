---
ms.openlocfilehash: af9c381d0012d84051d99d533cd8ceb56842bb4c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109169"
---
{% data variables.product.prodname_actions %} ist {% ifversion ghec or fpt %}nicht {% endif %}erforderlich, um {% data variables.product.prodname_dependabot_version_updates %} und {% data variables.product.prodname_dependabot_security_updates %} in {% data variables.product.product_name %} auszuführen.{% ifversion fpt or ghec %} Durch {% data variables.product.prodname_dependabot %} geöffnete Pull Requests können jedoch Workflows auslösen, die Aktionen ausführen. Weitere Informationen findest du unter [Automatisieren von {% data variables.product.prodname_dependabot %} mit {% data variables.product.prodname_actions %}](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions).{% elsif ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %} Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_dependabot %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).{% endif %}
