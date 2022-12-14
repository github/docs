---
ms.openlocfilehash: faf2e19d40e921c1a3d1b6cff91aaf3e4dd2b97b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145102314"
---
{% ifversion ghes < 3.2 %}

### <a name="about-minimum-requirements-for--data-variablesproductprodname_ghe_server--30-and-later"></a>À propos des exigences minimales pour {% data variables.product.prodname_ghe_server %} 3.0 et versions ultérieures

Avant de passer à {% data variables.product.prodname_ghe_server %} 3.0 ou versions ultérieures, passez en revue les ressources matérielles que vous avez provisionnées pour votre instance. {% data variables.product.prodname_ghe_server %} 3.0 introduit de nouvelles fonctionnalités comme {% data variables.product.prodname_actions %} et {% data variables.product.prodname_registry %}, et nécessite plus de ressources que les versions 2.22 et antérieures. Pour plus d’informations, consultez les [Notes de publication de {% data variables.product.prodname_ghe_server %} 3.0](/enterprise-server@3.0/admin/release-notes).

Les nouvelles exigences de {% data variables.product.prodname_ghe_server %} 3.0 et versions ultérieures s’affichent **en gras** dans le tableau suivant.

| Licences utilisateur | Processeurs virtuels | Mémoire | Stockage associé | Stockage racine |
| :- | -: | -: | -: | -: |
| Essai, démo ou 10 utilisateurs légers | **4**<br/>_À partir de 2_ | **32 Go**<br/>_À partir de 16 Go_ | **150 Go**<br/>_À partir de 100 Go_ | 200 Go |
| 10 à 3 000  | **8**<br/>_À partir de 4_ | **48 Go**<br/>_À partir de 32 Go_ | **300 Go**<br/>_À partir de 250 Go_ | 200 Go |
| 3 000 à 5 000 | **12**<br/>_À partir de 8_ | 64 Go | 500 Go | 200 Go |
| 5 000 à 8 000 | **16**<br/>_À partir de 12_ | 96 Go | 750 Go | 200 Go |
| 8 000 à 10 000+ | **20**<br/>_À partir de 16_ | **160 Go**<br/>_À partir de 128 Go_ | 1 000 Go | 200 Go |

{% ifversion ghes %}

Pour plus d’informations sur les exigences matérielles de {% data variables.product.prodname_actions %}, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations) ».

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
