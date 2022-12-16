---
ms.openlocfilehash: 48dc95869bae901bf79df320e83b65979dedfd65
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147763747"
---
{% ifversion fpt %}
1. Accédez à la page principale de l’organisation dans laquelle votre exécuteur auto-hébergé est inscrit.
2. Cliquez sur {% octicon "gear" aria-label="The Settings gear" %} **Paramètres**.
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. Accédez à l’emplacement auquel votre exécuteur est inscrit :
   * **Dans une organisation** : accédez à la page principale et cliquez sur {% octicon "gear" aria-label="The Settings gear" %} **Paramètres**.
   * **Si vous utilisez un exécuteur au niveau de l’entreprise** :

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. Accédez aux paramètres {% data variables.product.prodname_actions %} :
   * **Dans une organisation** : 

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * **Si vous utilisez un exécuteur au niveau de l’entreprise** : 

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {% endif %}
