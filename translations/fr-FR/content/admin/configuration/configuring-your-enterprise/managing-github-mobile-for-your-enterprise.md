---
title: Gestion de GitHub Mobile pour votre entreprise
intro: 'Vous pouvez déterminer si les utilisateurs peuvent utiliser {% data variables.product.prodname_mobile %} pour se connecter à {% data variables.product.product_location %}.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_mobile %} for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Mobile
redirect_from:
  - /admin/configuration/configuring-your-enterprise/managing-github-for-mobile-for-your-enterprise
  - /admin/configuration/managing-github-for-mobile-for-your-enterprise
shortTitle: Manage GitHub Mobile
ms.openlocfilehash: f46673c16611a7f1ced6d0476c6ad3d79807f6d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062266'
---
## À propos de {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} permet aux personnes de trier, de collaborer et de gérer le travail sur {% data variables.product.product_location %} à partir d’un appareil mobile après s’être correctement authentifiées. {% data reusables.mobile.about-mobile %} Pour plus d’informations, consultez « [{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile) ».

Vous pouvez permettre à des personnes ou leur refuser d’utiliser {% data variables.product.prodname_mobile %} pour s’authentifier auprès de {% data variables.product.product_location %} et d’accéder aux données de votre instance. Par défaut, {% data variables.product.prodname_mobile %} {% ifversion ghes > 3.3 %} est activé pour les personnes qui utilisent {% data variables.product.product_location %}.{% else %} n’est pas activé pour les personnes qui utilisent {% data variables.product.product_location %}. Pour autoriser les connexions à votre instance avec {% data variables.product.prodname_mobile %}, vous devez activer la fonctionnalité pour votre instance.{% endif %}

{% ifversion ghes < 3.6 %} {% note %}

**Remarque :** Si vous procédez à une mise à niveau vers {% data variables.product.prodname_ghe_server %} 3.4.0 ou une version ultérieure et que vous n’avez pas auparavant désactivé ou activé {% data variables.product.prodname_mobile %}, {% data variables.product.prodname_mobile %} est activé par défaut. Si vous avez auparavant désactivé ou activé {% data variables.product.prodname_mobile %} pour votre instance, votre préférence est maintenue à l’issue de la mise à niveau. Pour plus d’informations sur la mise à niveau de votre instance, consultez « [Mise à niveau de {% data variables.product.product_name %}](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server) ».

{% endnote %} {% endif %}

## Activation ou désactivation de {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}
1. Dans la barre latérale de gauche, cliquez sur **Mobile**.
  ![« Mobile » dans la barre latérale de gauche pour la console de gestion {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/click-mobile.png)
1. Sous « GitHub Mobile », sélectionnez ou désélectionnez **Activer les applications mobiles GitHub**.
  ![Case à cocher « Activer les applications mobiles GitHub » dans la console de gestion {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png) {% data reusables.enterprise_management_console.save-settings %}
