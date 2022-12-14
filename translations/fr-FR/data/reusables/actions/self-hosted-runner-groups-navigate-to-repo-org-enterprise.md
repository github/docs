---
ms.openlocfilehash: 31301d6de4160cc4a94b864a72232dd32cefd1cb
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 08/30/2022
ms.locfileid: "145086239"
---
{% ifversion fpt %}
1. Accédez à la page principale du référentiel ou de l’organisation où se trouvent vos groupes d’exécuteurs auto-hébergés.
2. Cliquez sur {% octicon "gear" aria-label="The Settings gear" %} **Paramètres**.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %} {% elsif ghec or ghes or ghae %}
1. Accédez à l’emplacement de vos groupes d’exécuteurs auto-hébergés :
   * **Dans une organisation** : accédez à la page principale et cliquez sur {% octicon "gear" aria-label="The Settings gear" %} **Paramètres**.
   * **Si vous utilisez un groupe au niveau de l’entreprise** :

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Accédez aux paramètres « Groupes d’exécuteurs » :
   * **Dans une organisation** :

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **Si vous utilisez un groupe au niveau de l’entreprise** :

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %} {% endif %}
