---
ms.openlocfilehash: d36caae48a389b9b84d9659277996834ec58f3ba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147683697"
---
1. Sous « {% data variables.product.prodname_secret_scanning_caps %} », sous « Protection des poussées », cliquez sur **Activer tout**.
   ![Capture d’écran montrant comment activer la protection des poussées pour {% data variables.product.prodname_secret_scanning %} dans une organisation](/assets/images/help/organizations/secret-scanning-enable-push-protection.png)
1. Cliquez éventuellement sur « Activer automatiquement pour les dépôts privés ajoutés à {% data variables.product.prodname_secret_scanning %} ».{% ifversion push-protection-custom-link-orgs %}
1. Pour éventuellement inclure un lien personnalisé dans le message que les membres voient quand ils tentent d’envoyer (push) un secret, sélectionnez **Ajouter un lien de ressource dans l’interface CLI et l’interface utilisateur web quand un commit est bloqué**, puis tapez une URL et cliquez sur **Enregistrer le lien**.
   {% ifversion push-protection-custom-link-orgs-beta %}{% indented_data_reference reusables.advanced-security.custom-link-beta spaces=3 %}{% endif %}

   ![Capture d’écran montrant la case à cocher et le champ de texte permettant d’activer un lien personnalisé](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}