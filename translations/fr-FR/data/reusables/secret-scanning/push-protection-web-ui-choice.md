---
ms.openlocfilehash: 7bb1603715c255f08ac0bfbe7ff2cdbfe99a3134
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108497"
---
Quand vous utilisez l’interface utilisateur web pour tenter de commiter un secret pris en charge vers un dépôt ou une organisation avec l’analyse des secrets activée comme protection des poussées, {% data variables.product.prodname_dotcom %} bloque le commit. 

Vous verrez une bannière en haut de la page avec des informations sur l’emplacement du secret, et le secret sera également souligné dans le fichier afin que vous puissiez le trouver facilement.

{% ifversion push-protection-custom-link-orgs %}

  ![Capture d’écran montrant le commit bloqué dans l’interface utilisateur web en raison de la protection des poussées de l’analyse des secrets](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner-with-link.png)

{% else %}

  ![Capture d’écran montrant le commit bloqué dans l’interface utilisateur web en raison de la protection des poussées de l’analyse des secrets](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner.png)
  
{% endif %}
