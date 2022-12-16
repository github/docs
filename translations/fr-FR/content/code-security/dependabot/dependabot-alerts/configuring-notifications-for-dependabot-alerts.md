---
title: Configuration de notifications pour les alertes Dependabot
shortTitle: Configure notifications
intro: 'Optimisez la façon dont vous recevez les notifications concernant les {% data variables.product.prodname_dependabot_alerts %}.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Notifications
  - Vulnerabilities
  - Dependencies
  - Repositories
ms.openlocfilehash: 570a41570821b61aa68d625c92e6e9384e893f1a
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/05/2022
ms.locfileid: '148134891'
---
## À propos des notifications pour les {% data variables.product.prodname_dependabot_alerts %}.

Quand {% data variables.product.prodname_dependabot %} détecte des dépendances vulnérables{% ifversion GH-advisory-db-supports-malware %} ou programmes malveillants{% endif %} dans vos dépôts, nous générons une alerte {% data variables.product.prodname_dependabot %} et l’affichons sous l’onglet Sécurité du dépôt. {% data variables.product.product_name %} informe les chargés de maintenance des dépôts affectés sur la nouvelle alerte en fonction de leurs préférences de notification.{% ifversion fpt or ghec %} {% data variables.product.prodname_dependabot %} est activé par défaut sur tous les dépôts publics. En ce qui concerne les {% data variables.product.prodname_dependabot_alerts %}, par défaut, vous recevez les {% data variables.product.prodname_dependabot_alerts %} par e-mail, regroupées par vulnérabilité.
{% endif %} 

{% ifversion fpt or ghec %}Si vous êtes propriétaire d’une organisation, vous pouvez activer ou désactiver les {% data variables.product.prodname_dependabot_alerts %} pour tous les dépôts au sein de votre organisation en un seul clic. Vous pouvez également définir si les {% data variables.product.prodname_dependabot_alerts %} seront activées ou désactivées pour les référentiels nouvellement créés. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added) ».
{% endif %}

{% ifversion ghes or ghae %} Par défaut, si le propriétaire de votre entreprise a configuré un e-mail pour les notifications sur votre entreprise, vous recevez les {% data variables.product.prodname_dependabot_alerts %} par e-mail.

Les propriétaires d’entreprise peuvent également activer les {% data variables.product.prodname_dependabot_alerts %} sans notifications. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_dependabot %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ».
{% endif %}

## Configuration des notifications pour les {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghes or ghec %} Quand une nouvelle alerte {% data variables.product.prodname_dependabot %} est détectée, {% data variables.product.product_name %} avertit tous les utilisateurs ayant accès aux {% data variables.product.prodname_dependabot_alerts %} pour le dépôt en fonction de leurs préférences de notification. Vous recevez des alertes si vous consultez le dépôt, avez activé les notifications pour les alertes de sécurité ou pour toute activité sur le dépôt et n’ignorez pas le dépôt. Pour plus d’informations, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository) ».
{% endif %}

Vous pouvez configurer les paramètres de notification pour vous-même ou votre organisation à partir de la liste déroulante Gérer les notifications {% octicon "bell" aria-label="The notifications bell" %} affichée en haut de chaque page. Pour plus d’informations, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings) ».

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

{% ifversion update-notification-settings-22 %} ![Capture d’écran des options {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/dependabot/dependabot-notification-frequency.png){% endif %}{% ifversion ghes > 3.7 or ghae > 3.7 %} ![Capture d’écran des options {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/enterprises/dependabot-alerts-options-no-UI.png){% endif %}{% ifversion ghes < 3.8 or ghae < 3.8 %} ![Capture d’écran des options {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/notifications-v2/dependabot-alerts-options.png){% endif %}


{% note %}

**Remarque :** Vous pouvez filtrer vos notifications sur {% data variables.product.company_short %} pour afficher les {% data variables.product.prodname_dependabot_alerts %}. Pour plus d’informations, consultez « [Gestion des notifications à partir de votre boîte de réception](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters) ».

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} Pour plus d’informations, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications) ».

## Comment réduire le bruit des notifications pour {% data variables.product.prodname_dependabot_alerts %}

Si vous vous inquiétez de recevoir trop de notifications pour les {% data variables.product.prodname_dependabot_alerts %}, nous vous recommandons d’opter pour la synthèse hebdomadaire des e-mails ou de désactiver les notifications tout en gardant les {% data variables.product.prodname_dependabot_alerts %} activées. Vous pouvez toujours accéder à vos {% data variables.product.prodname_dependabot_alerts %} sous l’onglet Sécurité de votre dépôt. Pour plus d’informations, consultez « [Affichage et mise à jour des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) ».

## Pour aller plus loin

- « [configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications) »
- « [Gestion des notifications à partir de votre boîte de réception](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries) »
