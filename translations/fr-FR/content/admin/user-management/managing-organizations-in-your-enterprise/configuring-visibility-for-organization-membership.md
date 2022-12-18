---
title: Configuration de la visibilité de l’appartenance à une organisation
intro: Vous pouvez définir la visibilité de nouveaux membres d’organisation à l’échelle de votre entreprise sur public ou privé. Vous pouvez aussi empêcher les membres de changer leur visibilité par défaut.
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/configuring-visibility-for-organization-membership
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - User account
shortTitle: Set membership visibility
ms.openlocfilehash: e628fab4f8aa77579e0ce89f18a70813274928b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332343'
---
{% ifversion ghes %} Vous pouvez également appliquer votre paramètre par défaut à tous les membres d’organisation actuels de votre instance à l’aide d’un utilitaire en ligne de commande. Par exemple, si vous souhaitez exiger que la visibilité de chaque membre d’organisation soit publique, vous pouvez définir la valeur par défaut sur Publique et l’appliquer à tous les nouveaux membres dans les paramètres d’administration, puis utiliser l’utilitaire en ligne de commande pour appliquer le paramètre de visibilité publique aux membres existants.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
3. Sous « Visibilité de l’appartenance à l’organisation par défaut », utilisez le menu déroulant et cliquez sur **Privée** ou **Publique**.
  ![Menu déroulant avec l’option pour configurer la visibilité de l’appartenance à l’organisation par défaut comme publique ou privée](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. Si vous le souhaitez, pour empêcher les membres de modifier la visibilité de l’appartenance par défaut, sélectionnez **Appliquer aux membres de l’organisation**.
  ![Case à cocher pour appliquer le paramètre par défaut à tous les membres](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png){% ifversion ghes %}
5. Si vous souhaitez appliquer votre nouveau paramètre de visibilité à tous les membres existants, utilisez l’utilitaire en ligne de commande `ghe-org-membership-update`. Pour plus d’informations, consultez « [Utilitaires en ligne de commande](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-membership-update) ».{% endif %}
