---
ms.openlocfilehash: c1f0ddf259431616bbada45e736385bb45ba3d75
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147763908"
---
{% ifversion fpt %}
1. Accédez à la page principale du dépôt ou de l’organisation où se trouvent vos groupes d’exécuteurs.
2. Cliquez sur {% octicon "gear" aria-label="The Settings gear" %} **Paramètres**.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %} {% elsif ghec or ghes or ghae %}
1. Accédez à l’emplacement de vos groupes d’exécuteurs :
   * **Dans une organisation** : accédez à la page principale et cliquez sur {% octicon "gear" aria-label="The Settings gear" %} **Paramètres**.
   * **Si vous utilisez un groupe au niveau de l’entreprise** :

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Accédez aux paramètres « Groupes d’exécuteurs » :
   * **Dans une organisation** :

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **Si vous utilisez un groupe au niveau de l’entreprise** :

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %} {% endif %}
