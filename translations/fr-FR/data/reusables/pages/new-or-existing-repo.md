---
ms.openlocfilehash: 33f427d38193ad14c5df35ebab14bd08208c08e0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108613"
---
Vous pouvez créer un dépôt ou choisir un dépôt existant pour votre site.

Si vous souhaitez créer un site {% data variables.product.prodname_pages %} pour un dépôt où les fichiers du dépôt ne sont tous pas liés au site, vous pouvez configurer une source de publication pour votre site. Par exemple, vous pouvez avoir une branche et un dossier dédiés pour conserver les fichiers sources de votre site{% ifversion pages-custom-workflow %}, ou vous pouvez utiliser un workflow {% data variables.product.prodname_actions %} personnalisé pour générer et déployer les fichiers sources de votre site. {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}{% else %}.{% endif %}

{% ifversion fpt or ghec %}Si le compte propriétaire du dépôt utilise {% data variables.product.prodname_free_user %} ou {% data variables.product.prodname_free_team %} pour les organisations, le dépôt doit être public.{% endif %}

 Si vous souhaitez créer un site dans un dépôt existant, passez à la section « [Création de votre site](#creating-your-site) ».