---
ms.openlocfilehash: f46fcf5de23b55285d402b93bd89b0155e1224e7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108521"
---
{% ifversion pages-custom-workflow %}

Vous pouvez publier votre site lorsque des modifications sont poussées vers une branche spécifique ou vous pouvez écrire un workflow {% data variables.product.prodname_actions %} pour publier votre site. {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}

Si vous n’avez pas besoin de contrôle sur le processus de génération de votre site, nous vous recommandons de publier votre site lorsque des modifications sont poussées vers une branche spécifique. {% data reusables.pages.pages-about-branch-source %}

Si vous souhaitez utiliser un processus de génération autre que Jekyll ou si vous ne souhaitez pas qu’une branche dédiée contienne vos fichiers statiques compilés, nous vous recommandons d’écrire un workflow {% data variables.product.prodname_actions %} pour publier votre site. {% data variables.product.product_name %} fournit des workflows de démarrage pour les scénarios de publication courants qui vous aideront à écrire votre workflow.

{% else %}

Votre site {% data variables.product.prodname_pages %} est publié lorsque des modifications sont poussées vers une branche spécifique. {% data reusables.pages.pages-about-branch-source %}

{% endif %}