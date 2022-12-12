---
title: Gestion de vos paramètres de thème
intro: 'Vous pouvez gérer l’apparence de {% data variables.product.product_name %} en définissant une préférence de thème qui suit vos paramètres système, ou qui utilise toujours un mode clair ou un mode sombre.'
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Manage theme settings
ms.openlocfilehash: 3f7d35978d3a80f7fb63cce1d054afd15b579f13
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108384'
---
Pour plus de choix et de flexibilité dans votre utilisation de {% data variables.product.product_name %}, vous pouvez configurer les paramètres de thème afin de changer l’apparence de {% data variables.product.product_name %}. Vous pouvez choisir parmi des thèmes clairs ou sombres, ou configurer {% data variables.product.product_name %} de façon à suivre vos paramètres système.

Vous souhaiterez peut-être utiliser un thème sombre pour réduire la consommation d’alimentation sur certains appareils, pour réduire la contrainte oculaire dans des conditions de faible lumière, ou car vous préférez l’apparence du thème.

Si vous n’avez pas une bonne vue, vous préférerez peut-être un thème à contraste élevé, avec un contraste plus élevé entre les éléments de premier plan et d’arrière-plan.{% ifversion fpt or ghae or ghec %} Si vous souffrez de daltonisme, vous pouvez bénéficier de nos thèmes clairs et foncés adaptés aux daltoniens.

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. Sous « Mode du thème », sélectionnez le menu déroulant, puis cliquez sur une préférence de thème.

   ![Menu déroulant sous « Mode du thème » pour la sélection de la préférence de thème](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. Cliquez sur le thème que vous souhaitez utiliser.
    - Si vous avez choisi un thème unique, cliquez sur un thème.

      {%- ifversion ghes = 3.5 %} {% note %}

      **Remarque** : Le thème à contraste élevé clair n’était pas disponible dans {% data variables.product.product_name %} 3.5.0, 3.5.1, 3.5.2 et 3.5.3. Le thème est disponible dans la version 3.5.4 et ultérieure. Pour plus d’informations sur les mises à niveau, contactez votre administrateur de site.

      Pour plus d’informations sur la détermination de la version de {% data variables.product.product_name %} que vous utilisez, consultez « [À propos des versions de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server) ».
      {% endnote %} {%- endif %}

      ![Cases d’option pour le choix d’un thème unique](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png)
    - Si vous avez choisi de suivre vos paramètres système, cliquez sur un thème de jour et un thème de nuit.

      ![Boutons pour choisir un thème à synchroniser avec le paramètre système](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png) {% ifversion fpt or ghec %}
    - Si vous souhaitez choisir un thème actuellement en version bêta publique, vous devez d’abord l’activer avec la préversion des fonctionnalités. Pour plus d’informations, consultez « [Exploration des versions d’accès anticipé avec préversion des fonctionnalités](/get-started/using-github/exploring-early-access-releases-with-feature-preview) ».{% endif %}

{% ifversion command-palette %}

{% note %}

**Remarque :** Vous pouvez également modifier vos paramètres de thème avec la palette de commandes. Pour plus d’informations, consultez « [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette) ».

{% endnote %}

{% endif %}

## Pour aller plus loin

- « [Définition d’un thème pour {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop) »
