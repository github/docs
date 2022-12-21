---
title: Activation de Dependabot pour votre entreprise
intro: 'Vous pouvez aussi autoriser les utilisateurs de {% data variables.location.product_location %} à rechercher et corriger les vulnérabilités dans leurs dépendances de code en activant {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} et {% data variables.product.prodname_dependabot_updates %}{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Dependabot
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account
  - /admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise
permissions: 'Enterprise owners can enable {% data variables.product.prodname_dependabot %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
ms.openlocfilehash: 2a7df1dbbe0f8d905bbd1378592dedbec4f43a19
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106724'
---
## À propos de {% data variables.product.prodname_dependabot %} pour {% data variables.product.product_name %}

{% data variables.product.prodname_dependabot %} permet aux utilisateurs de {% data variables.location.product_location %} de rechercher et corriger les vulnérabilités dans leurs dépendances.{% ifversion ghes %} Vous pouvez activer les {% data variables.product.prodname_dependabot_alerts %} pour notifier les utilisateurs à propos des dépendances vulnérables ainsi que les {% data variables.product.prodname_dependabot_updates %} pour corriger les vulnérabilités et tenir à jour les dépendances avec la dernière version.

### À propos des {% data variables.product.prodname_dependabot_alerts %}
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Avec {% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dotcom %} identifie les dépendances vulnérables dans les dépôts et crée des alertes sur {% data variables.location.product_location %}, en utilisant les données de {% data variables.product.prodname_advisory_database %} et du service de graphe des dépendances.

{% data reusables.repositories.tracks-vulnerabilities %}

Une fois que vous avez activé les {% data variables.product.prodname_dependabot_alerts %} pour votre entreprise, les données de vulnérabilité sont synchronisées entre {% data variables.product.prodname_advisory_database %} et votre instance une fois par heure. Seuls les avis examinés par {% data variables.product.company_short %} sont synchronisés. {% data reusables.security-advisory.link-browsing-advisory-db %} 

Vous pouvez aussi choisir de synchroniser manuellement les données de vulnérabilité à n’importe quel moment. Pour plus d’informations, consultez « [Consultation des données de vulnérabilité de votre entreprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise) ».

{% note %}

**Remarque :** Quand vous activez les {% data variables.product.prodname_dependabot_alerts %}, aucun code ni aucune information sur le code de {% data variables.location.product_location %} ne sont chargés sur {% data variables.product.prodname_dotcom_the_website %}. 

{% endnote %}

Quand {% data variables.location.product_location %} reçoit des informations sur une vulnérabilité, elle identifie les dépôts de {% data variables.location.product_location %} qui utilisent la version affectée de la dépendance et génère des {% data variables.product.prodname_dependabot_alerts %}. Vous pouvez choisir de notifier automatiquement les utilisateurs à propos des nouvelles {% data variables.product.prodname_dependabot_alerts %}. 

Dans le cas des dépôts où les {% data variables.product.prodname_dependabot_alerts %} sont activées, l’analyse est déclenchée pour tout envoi (push) vers la branche par défaut qui contient un fichier manifeste ou un fichier de verrouillage. De plus, quand un nouvel enregistrement de vulnérabilité est ajouté à {% data variables.location.product_location %}, {% data variables.product.product_name %} analyse tous les dépôts existants de {% data variables.location.product_location %} et génère des alertes les dépôts vulnérables. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) ».

{% ifversion ghes %}
### À propos des {% data variables.product.prodname_dependabot_updates %}

{% data reusables.dependabot.beta-security-and-version-updates %}

Après avoir activé les {% data variables.product.prodname_dependabot_alerts %}, vous pouvez choisir d’activer les {% data variables.product.prodname_dependabot_updates %}. Quand les {% data variables.product.prodname_dependabot_updates %} sont activés pour {% data variables.location.product_location %}, les utilisateurs peuvent configurer des dépôts de telle sorte que leurs dépendances soient automatiquement mises à jour et maintenues en sécurité. 

{% note %} 

**Remarque :** Les {% data variables.product.prodname_dependabot_updates %} sur {% data variables.product.product_name %} ont besoin de {% data variables.product.prodname_actions %} avec des exécuteurs auto-hébergés.

{% endnote %}

Par défaut, les exécuteurs {% data variables.product.prodname_actions %} utilisés par {% data variables.product.prodname_dependabot %} ont besoin d’accéder à Internet pour télécharger des packages mis à jour à partir de gestionnaires de packages en amont. Pour {% data variables.product.prodname_dependabot_updates %} alimenté par {% data variables.product.prodname_github_connect %}, l’accès Internet fournit à vos exécuteurs un jeton qui permet d’accéder aux dépendances et aux avis hébergés sur {% data variables.product.prodname_dotcom_the_website %}.

Avec les {% data variables.product.prodname_dependabot_updates %}, {% data variables.product.company_short %} crée automatiquement des demandes de tirage (pull request) pour mettre à jour les dépendances de deux façons.

- **{% data variables.product.prodname_dependabot_version_updates %}**  : Les utilisateurs ajoutent un fichier de configuration {% data variables.product.prodname_dependabot %} au dépôt pour permettre à {% data variables.product.prodname_dependabot %} de créer des demandes de tirage quand une nouvelle version d’une dépendance suivie est publiée. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates) ».
- **{% data variables.product.prodname_dependabot_security_updates %}**  : Les utilisateurs activent un paramètre de dépôt pour permettre à {% data variables.product.prodname_dependabot %} de créer des demandes de tirage quand {% data variables.product.prodname_dotcom %} détecte une vulnérabilité dans l’une des dépendances du graphe de dépendances du dépôt. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies) » et « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates) ».
{% endif %}

## Activation des {% data variables.product.prodname_dependabot_alerts %}

Avant de pouvoir activer les {% data variables.product.prodname_dependabot_alerts %} :
- Vous devez activer {% data variables.product.prodname_github_connect %}. Pour plus d’informations, consultez « [Gestion de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect) ».{% ifversion ghes %}
- Vous devez activer le graphe de dépendances. Pour plus d’informations, consultez « [Activation du graphe de dépendances pour votre entreprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise) ».{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %} {%- ifversion dependabot-updates-github-connect %}
1. Sous « {% data variables.product.prodname_dependabot %} », à droite de « Les utilisateurs peuvent recevoir des alertes de vulnérabilité pour les dépendances de code open source », sélectionnez le menu déroulant, puis cliquez sur **Activé sans notifications**. Si vous le souhaitez, vous pouvez activer les alertes avec des notifications en cliquant sur **Activé avec notifications**.

   ![Capture d’écran du menu déroulant permettant d’activer la recherche de vulnérabilités dans les dépôts](/assets/images/enterprise/site-admin-settings/dependabot-alerts-dropdown.png)

{%- else %}
1. Sous « Les dépôts peuvent être analysés pour rechercher les vulnérabilités », sélectionnez le menu déroulant, puis cliquez sur **Activé sans notifications**. Si vous le souhaitez, vous pouvez activer les alertes avec des notifications en cliquant sur **Activé avec notifications**.
   ![Menu déroulant permettant d’activer l’analyse des dépôts pour rechercher les vulnérabilités](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png) {%- endif %} {% tip %}

   **Conseil** : Nous vous recommandons de configurer les {% data variables.product.prodname_dependabot_alerts %} sans notifications pour les premiers jours afin d’éviter d’être surchargé d’e-mails. Après quelques jours, activez les notifications pour recevoir normalement les {% data variables.product.prodname_dependabot_alerts %}.

   {% endtip %}

{% ifversion dependabot-updates-github-connect %}
## Activation des {% data variables.product.prodname_dependabot_updates %}

Après avoir activé les {% data variables.product.prodname_dependabot_alerts %} pour votre entreprise, vous pouvez activer les {% data variables.product.prodname_dependabot_updates %}.

{% ifversion ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %} Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server) ».

Les {% data variables.product.prodname_dependabot_updates %} ne sont pas prises en charge sur {% data variables.product.product_name %} si votre entreprise utilise le clustering.
{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Sous « Sécurité », sélectionnez **{% data variables.product.prodname_dependabot_security_updates %}** .

   ![Capture d’écran de la case à cocher permettant d’activer ou de désactiver les {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/management-console/enable-dependabot-updates.png)

{% data reusables.enterprise_management_console.save-settings %}
1. Cliquez sur **Accéder à votre instance**.
1. Configurez des exécuteurs auto-hébergés dédiés de façon à créer les demandes de tirage destinées à mettre à jour les dépendances. C’est obligatoire parce que les workflows utilisent une étiquette d’exécuteur spécifique. Pour plus d’informations, consultez « [Gestion des exécuteurs auto-hébergés pour les {% data variables.product.prodname_dependabot_updates %} dans votre entreprise](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates) ».
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. Sous « {% data variables.product.prodname_dependabot %} », à droite de « Les utilisateurs peuvent facilement effectuer une mise à niveau vers des dépendances de code open source non vulnérables », cliquez sur **Activer**.

   ![Capture d’écran du menu déroulant permettant d’activer la mise à jour des dépendances vulnérables](/assets/images/enterprise/site-admin-settings/dependabot-updates-button.png)

{% endif %} {% ifversion ghes %}

Quand vous activez {% data variables.product.prodname_dependabot_alerts %}, envisagez également de configurer {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_dependabot_security_updates %}. Cette fonctionnalité permet aux développeurs de corriger les vulnérabilités dans leurs dépendances. Pour plus d’informations, consultez « [Gestion des exécuteurs auto-hébergés pour les {% data variables.product.prodname_dependabot_updates %} dans votre entreprise](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates) ».

Si vous avez besoin d’une sécurité renforcée, nous vous recommandons de configurer {% data variables.product.prodname_dependabot %} pour utiliser des registres privés. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour {% data variables.product.prodname_dependabot %}](/code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot) ».

{% endif %}
