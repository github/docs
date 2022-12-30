---
ms.openlocfilehash: 8e533fd0a00968e8a7d9e05db91c69e8c6a2a47b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147763771"
---
{% ifversion fpt %}
1. Accédez à la page principale de l’organisation ou du dépôt dans laquelle votre groupe d’exécuteurs auto-hébergés est inscrit.
2. Cliquez sur {% octicon "gear" aria-label="The Settings gear" %} **Paramètres**.
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. Accédez à l’emplacement auquel votre exécuteur est inscrit :
   * **Dans une organisation ou un dépôt** : accédez à la page principale et cliquez sur {% octicon "gear" aria-label="The Settings gear" %} **Paramètres**.
   * **Si vous utilisez un exécuteur au niveau de l’entreprise** :

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Accédez aux paramètres {% data variables.product.prodname_actions %} :
   * **Dans une organisation ou un dépôt** :

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %} {%- ifversion ghec or ghae or ghes %}
   * **Si vous utilisez un exécuteur au niveau de l’entreprise** :

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {%- endif %} {% endif %}
