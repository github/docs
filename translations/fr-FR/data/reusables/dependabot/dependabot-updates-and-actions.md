---
ms.openlocfilehash: af9c381d0012d84051d99d533cd8ceb56842bb4c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108525"
---
{% data variables.product.prodname_actions %} n’est {% ifversion ghec or fpt %}pas {% endif %}indispensable à l’exécution des {% data variables.product.prodname_dependabot_version_updates %} et des {% data variables.product.prodname_dependabot_security_updates %} sur {% data variables.product.product_name %}.{% ifversion fpt or ghec %} Toutefois, les demandes de tirage ouvertes par {% data variables.product.prodname_dependabot %} peuvent déclencher des workflows qui exécutent des actions. Pour plus d’informations, consultez « [Automatisation de {% data variables.product.prodname_dependabot %} avec {% data variables.product.prodname_actions %}](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions) ».{% elsif ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %} Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_dependabot %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ».{% endif %}
