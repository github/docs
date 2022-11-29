---
title: Configuration d’alertes Dependabot
intro: 'Activez la génération d’{% data variables.product.prodname_dependabot_alerts %} quand une nouvelle dépendance vulnérable {% ifversion GH-advisory-db-supports-malware %}ou un nouveau programme malveillant {% endif %}est trouvé dans l’un de vos dépôts.'
shortTitle: Configure Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 7844380c395b1ab0c43ba01fa151bf403c6a0349
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146455516'
---
## À propos des {% data variables.product.prodname_dependabot_alerts %} pour les dépendances vulnérables{% ifversion GH-advisory-db-supports-malware %} et programmes malveillants{% endif %}

{% data reusables.repositories.a-vulnerability-is %} 

{% data variables.product.prodname_dependabot %} analyse le code lorsqu’un nouvel avis est ajouté à la {% data variables.product.prodname_advisory_database %} ou que le graphique de dépendance d’un dépôt change. Lorsque des dépendances vulnérables{% ifversion GH-advisory-db-supports-malware %} ou des programmes malveillants{% endif %} sont détectés, des {% data variables.product.prodname_dependabot_alerts %} sont générées. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) ».

Avant de pouvoir activer ou désactiver les {% data variables.product.prodname_dependabot_alerts %} pour :
* Votre compte personnel
* Votre dépôt
* votre organisation

## Gestion des {% data variables.product.prodname_dependabot_alerts %} pour votre compte personnel

{% ifversion fpt or ghec %}

Vous pouvez activer ou désactiver les {% data variables.product.prodname_dependabot_alerts %} pour tous les dépôts appartenant à votre compte personnel.

### Activation ou désactivation des {% data variables.product.prodname_dependabot_alerts %} pour des dépôts existants

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Sous « Sécurité et analyse du code », à droite de {% data variables.product.prodname_dependabot_alerts %}, cliquez sur **Désactiver tout** ou **Activer tout**.
 ![Capture d’écran de « Configurer les fonctionnalités de sécurité et d’analyse » avec les boutons « Activer tout » ou « Désactiver tout » en évidence](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png)
4. Si vous le souhaitez, activez les {% data variables.product.prodname_dependabot_alerts %} par défaut pour les nouveaux dépôts que vous créez.
  ![Capture d’écran de « Activer les alertes Dependabot » avec la case à cocher « Activer par défaut pour les nouveau dépôts privés » en évidence](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png)
5. Cliquez sur **Désactiver les {% data variables.product.prodname_dependabot_alerts %}** ou **Activer les {% data variables.product.prodname_dependabot_alerts %}** afin de désactiver ou d’activer les {% data variables.product.prodname_dependabot_alerts %} pour tous les dépôts que vous possédez.
  ![Capture d’écran de « Activer les alertes Dependabot » avec le bouton « Activer les alertes Dependabot » en évidence](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png)

Lorsque vous activez les {% data variables.product.prodname_dependabot_alerts %} pour des dépôts existants, les résultats s’affichent sur GitHub en quelques minutes.

### Activation ou désactivation des {% data variables.product.prodname_dependabot_alerts %} pour les nouveaux dépôts

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Sous « Sécurité et analyse du code », à droite de {% data variables.product.prodname_dependabot_alerts %}, activez ou désactivez les {% data variables.product.prodname_dependabot_alerts %} par défaut pour les nouveaux dépôts que vous créez.
  ![Capture d’écran de « Configurer la sécurité et l’analyse » avec l’option « Activer pour tous les nouveaux dépôts privés » en évidence](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png)

{% else %} Les {% data variables.product.prodname_dependabot_alerts %} pour vos dépôts peuvent être activées ou désactivées par le propriétaire de votre entreprise. Pour plus d’informations, consultez « [Activation de Dependabot pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ».

{% endif %}

## Gestion des {% data variables.product.prodname_dependabot_alerts %} pour votre dépôt

{% ifversion fpt or ghec %}Vous pouvez gérer les {% data variables.product.prodname_dependabot_alerts %} pour votre dépôt public, privé ou interne.

Par défaut, nous informons les personnes disposant d’autorisations d’administrateur dans les dépôts affectés sur les nouvelles {% data variables.product.prodname_dependabot_alerts %}. {% data variables.product.product_name %} ne révèle jamais publiquement les dépendances non sécurisées pour un dépôt. Vous pouvez également rendre les {% data variables.product.prodname_dependabot_alerts %} visibles par d’autres personnes ou équipes travaillant sur des dépôts dont vous êtes propriétaire ou sur lesquels vous disposez d’autorisations d’administrateur.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Activation ou désactivation des {% data variables.product.prodname_dependabot_alerts %} pour un dépôt

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Sous « Sécurité et analyse du code », à droite des {% data variables.product.prodname_dependabot_alerts %}, cliquez sur **Activer** pour activer les alertes ou sur **Désactiver** pour les désactiver. 
  ![Capture d’écran de la section « Sécurité et analyse du code » avec le bouton pour activer {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png) {% endif %}{% ifversion ghes or ghae %}

Les {% data variables.product.prodname_dependabot_alerts %} pour votre dépôt peuvent être activées ou désactivées par le propriétaire de votre entreprise. Pour plus d’informations, consultez « [Activation de Dependabot pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ».
{% endif %}

## Gestion des {% data variables.product.prodname_dependabot_alerts %} pour votre organisation
{% ifversion fpt or ghec %}Vous pouvez activer ou désactiver les {% data variables.product.prodname_dependabot_alerts %} pour tous les dépôts publics appartenant à votre organisation. Vos modifications affectent tous les dépôts.

### Activation ou désactivation des {% data variables.product.prodname_dependabot_alerts %} pour tous les dépôts existants

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
2. Sous « Sécurité et analyse du code », à droite de {% data variables.product.prodname_dependabot_alerts %}, cliquez sur **Désactiver tout** ou **Activer tout**. 
   {% ifversion fpt or ghec %} ![Capture d’écran de « Configurer les fonctionnalités de sécurité et d’analyse » avec le bouton « Activer tout » ou « Désactiver tout » en évidence pour les alertes Dependabot](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png) {% endif %} {% ifversion ghae %} ![bouton « Activer tout » ou « Désactiver tout » pour « Configurer les fonctionnalités de sécurité et d’analyse »](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. Si vous le souhaitez, activez les {% data variables.product.prodname_dependabot_alerts %} par défaut pour les nouveaux dépôts dans votre organisation.
   {% ifversion fpt or ghec %} ![Capture d’écran du bouton « Activer par défaut » pour les nouveaux dépôts](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. Cliquez sur **Désactiver les {% data variables.product.prodname_dependabot_alerts %}** ou **Activer les {% data variables.product.prodname_dependabot_alerts %}** afin de désactiver ou d’activer les {% data variables.product.prodname_dependabot_alerts %} pour tous les dépôts dans votre organisation.
   {% ifversion fpt or ghec %} ![Capture d’écran du modal « Activer les alertes Dependabot » avec le bouton permettant de désactiver ou d’activer la fonctionnalité en évidence](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png) {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %} Les {% data variables.product.prodname_dependabot_alerts %} pour votre organisation peut être activées ou désactivées par votre propriétaire d’entreprise. Pour plus d’informations, consultez « [À propos de Dependabot pour GitHub Enterprise Server](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ».
   {% endif %}
