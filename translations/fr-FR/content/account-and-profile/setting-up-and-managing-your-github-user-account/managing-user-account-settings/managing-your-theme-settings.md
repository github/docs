---
title: Gestion de vos paramètres de thème
intro: You can manage how {% data variables.product.product_name %} looks to you by setting a theme preference that either follows your system settings or always uses a light or dark mode.
versions:
  fpt: '*'
  ghae: '*'
  ghes: '>=3.2'
  ghec: '*'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Manage theme settings
ms.openlocfilehash: 238af803ead331a9323e9457024a85dff05fc5d4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086155"
---
Pour plus de choix et de flexibilité dans votre utilisation de {% data variables.product.product_name %}, vous pouvez configurer les paramètres de thème afin de changer l’apparence de {% data variables.product.product_name %}. Vous pouvez choisir parmi des thèmes clairs ou sombres, ou configurer {% data variables.product.product_name %} de façon à suivre vos paramètres système.

Vous souhaiterez peut-être utiliser un thème sombre pour réduire la consommation d’alimentation sur certains appareils, pour réduire la contrainte oculaire dans des conditions de faible lumière, ou car vous préférez l’apparence du thème.

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}Si vous n’avez pas une bonne vision, vous préférerez peut-être un thème à contraste élevé, avec un contraste plus élevé entre les éléments de premier plan et d’arrière-plan.{% endif %}{% ifversion fpt or ghae or ghec %} Si vous souffrez de daltonisme, vous pourrez tirer parti de nos thèmes clairs et sombres adaptés aux daltoniens.

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. Sous « Mode du thème », sélectionnez le menu déroulant, puis cliquez sur une préférence de thème.

   ![Menu déroulant sous « Mode du thème » pour la sélection de la préférence de thème](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. Cliquez sur le thème que vous souhaitez utiliser.
    - Si vous avez choisi un thème unique, cliquez sur un thème.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Cases d’option pour le choix d’un thème unique](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Cases d’option pour le choix d’un thème unique](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - Si vous avez choisi de suivre vos paramètres système, cliquez sur un thème de jour et un thème de nuit.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Boutons pour le choix d’un thème à synchroniser avec le paramètre système](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![Boutons pour le choix d’un thème à synchroniser avec le paramètre système](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %} {% ifversion fpt or ghec %}
    - Si vous souhaitez choisir un thème actuellement en version bêta publique, vous devez d’abord l’activer avec la préversion des fonctionnalités. Pour plus d’informations, consultez « [Exploration des versions d’accès anticipé avec préversion des fonctionnalités](/get-started/using-github/exploring-early-access-releases-with-feature-preview) ».{% endif %}

{% if command-palette %}

{% note %}

**Remarque :** Vous pouvez également modifier vos paramètres de thème avec la palette de commandes. Pour plus d’informations, consultez « [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette) ».

{% endnote %}

{% endif %}

## <a name="further-reading"></a>Pour aller plus loin

- « [Définition d’un thème pour {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop) »
