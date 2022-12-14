---
title: Sécurisation de votre organisation
intro: 'Vous pouvez utiliser un certain nombre de fonctionnalités {% data variables.product.prodname_dotcom %} pour sécuriser votre organisation.'
permissions: Organization owners can configure organization security settings.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your organization
ms.openlocfilehash: 7a3565884793e6d10a6d9c5ddd08286b3601c415
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106388'
---
## Introduction
Ce guide vous montre comment configurer des fonctionnalités de sécurité pour une organisation. Les besoins de sécurité de votre organisation sont uniques et vous n’avez peut-être pas besoin d’activer chaque fonctionnalité de sécurité. Pour plus d’informations, consultez « [Fonctionnalités de sécurité de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features) ».

{% data reusables.advanced-security.security-feature-availability %}

## Gestion de l’accès à votre organisation

Vous pouvez utiliser des rôles pour contrôler les actions que les personnes peuvent entreprendre dans votre organisation. {% ifversion security-managers %}Par exemple, vous pouvez attribuer le rôle de gestionnaire de sécurité à une équipe pour lui donner la possibilité de gérer les paramètres de sécurité au sein de votre organisation ainsi que l’accès en lecture à tous les référentiels.{% endif %} Pour plus d’informations, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) ».

{% ifversion fpt or ghes or ghec %}

## Création d’une stratégie de sécurité par défaut

Vous pouvez créer une stratégie de sécurité par défaut qui s’affiche dans tous les dépôts publics de votre organisation dépourvus de stratégie de sécurité. Pour plus d’informations, consultez « [Création d’un fichier d’intégrité de la communauté par défaut](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) ».

{% endif %}

## Gestion des {% data variables.product.prodname_dependabot_alerts %} et du graphe de dépendances

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} détecte les vulnérabilités dans les dépôts publics et affiche le graphe de dépendances. Vous pouvez activer ou désactiver les {% data variables.product.prodname_dependabot_alerts %} pour tous les dépôts publics appartenant à votre organisation. Vous pouvez activer ou désactiver les {% data variables.product.prodname_dependabot_alerts %} et le graphe de dépendances pour tous les dépôts privés appartenant à votre organisation.

1. Cliquez sur votre photo de profil, puis sur **Organisations**.
2. Cliquez sur **Paramètres** en regard de votre organisation.
3. Cliquez sur **Sécurité et analyse**.
4. Cliquez sur **Activer tout** ou **Désactiver tout** en regard de la fonctionnalité que vous souhaitez gérer.
5. Si vous le souhaitez, sélectionnez **Activer automatiquement pour les nouveaux dépôts**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) », « [Exploration des dépendances d’un dépôt](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository) » et « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».

## Gestion de la révision des dépendances

La révision des dépendances est une fonctionnalité {% data variables.product.prodname_advanced_security %} qui vous permet de visualiser les modifications de dépendance dans les demandes de tirage (pull request) avant qu’elles ne soient fusionnées dans vos dépôts. Pour plus d’informations, consultez « [À propos de la révision des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review) ».

{% ifversion fpt or ghec %}La révision des dépendances est déjà activée pour tous les dépôts publics. {% ifversion fpt %}Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} avec {% data variables.product.prodname_advanced_security %} peuvent également activer la révision des dépendances pour les dépôts privés et internes. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec %}Pour les dépôts privés et internes appartenant à une organisation, vous pouvez activer la révision des dépendances en activant le graphe de dépendances et en activant {% data variables.product.prodname_advanced_security %} (voir ci-dessous). {% elsif ghes or ghae %}La révision des dépendances est disponible quand le graphe de dépendances est activé pour {% data variables.location.product_location %} et que vous activez {% data variables.product.prodname_advanced_security %} pour l’organisation (voir ci-dessous).{% endif %}

{% ifversion fpt or ghec or ghes %}
## Gestion des {% data variables.product.prodname_dependabot_security_updates %}

Pour tout dépôt qui utilise des {% data variables.product.prodname_dependabot_alerts %}, vous pouvez activer les {% data variables.product.prodname_dependabot_security_updates %} afin de déclencher des demandes de tirage avec des mises à jour de sécurité quand des vulnérabilités sont détectées. Vous pouvez également activer ou désactiver les {% data variables.product.prodname_dependabot_security_updates %} pour tous les dépôts au sein de votre organisation.

1. Cliquez sur votre photo de profil, puis sur **Organisations**.
2. Cliquez sur **Paramètres** en regard de votre organisation.
3. Cliquez sur **Sécurité et analyse**.
4. Cliquez sur **Activer tout** ou **Désactiver tout** en regard de {% data variables.product.prodname_dependabot_security_updates %}.
5. Si vous le souhaitez, sélectionnez **Activer automatiquement pour les nouveaux dépôts**. 

Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates) » et « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».

## Gestion des {% data variables.product.prodname_dependabot_version_updates %}

Vous pouvez autoriser {% data variables.product.prodname_dependabot %} à déclencher automatiquement des demandes de tirage afin de maintenir vos dépendances à jour. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates) ».

Pour activer les {% data variables.product.prodname_dependabot_version_updates %}, vous devez créer un fichier de configuration *dependabot.yml*. Pour plus d’informations, consultez « [Configuration des mises à jour de version {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates) ».

{% endif %}

{% ifversion ghes or ghae or ghec %}
## Gestion de {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes or ghec %} Si votre {% ifversion ghec %}organisation appartient à une entreprise qui{% else %}entreprise{% endif %} possède une licence {% data variables.product.prodname_advanced_security %}, vous pouvez activer ou désactiver les fonctionnalités {% data variables.product.prodname_advanced_security %}.
{% elsif ghae %} Vous pouvez activer ou désactiver les fonctionnalités {% data variables.product.prodname_advanced_security %}.
{% endif %}

1. Cliquez sur votre photo de profil, puis sur **Organisations**.
2. Cliquez sur **Paramètres** en regard de votre organisation.
3. Cliquez sur **Sécurité et analyse**.
4. Cliquez sur **Activer tout** ou **Désactiver tout** en regard de {% data variables.product.prodname_GH_advanced_security %}.
5. Si vous le souhaitez, sélectionnez **Activer automatiquement pour les nouveaux dépôts privés**. 

Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security) » et « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
{% endif %}
## Configuration de l’{% data variables.product.prodname_secret_scanning %}

L’{% data variables.product.prodname_secret_scanning_caps %} est une fonctionnalité {% data variables.product.prodname_advanced_security %} qui vérifie si les dépôts contiennent des secrets stockés de manière non sécurisée.

{% ifversion fpt or ghec %}L’{% data variables.product.prodname_secret_scanning_caps %} est déjà activée pour tous les dépôts publics. Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} avec {% data variables.product.prodname_advanced_security %} peuvent également activer l’{% data variables.product.prodname_secret_scanning %} pour les dépôts privés et internes.{% endif %} {% ifversion fpt %}Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#configuring-secret-scanning). {% endif %}

{% ifversion ghes or ghae %}L’{% data variables.product.prodname_secret_scanning_caps %} est disponible si votre entreprise utilise {% data variables.product.prodname_advanced_security %}.{% endif %}

{% ifversion not fpt %} Vous pouvez activer ou désactiver l’{% data variables.product.prodname_secret_scanning %} pour tous les dépôts au sein de votre organisation pour lesquels {% data variables.product.prodname_advanced_security %} est activé.

1. Cliquez sur votre photo de profil, puis sur **Organisations**.
2. Cliquez sur **Paramètres** en regard de votre organisation.
3. Cliquez sur **Sécurité et analyse**.
4. Cliquez sur **Activer tout** ou **Désactiver tout** en regard d’{% data variables.product.prodname_secret_scanning_caps %} (Dépôts {% data variables.product.prodname_GH_advanced_security %} uniquement).
5. Si vous le souhaitez, sélectionnez **Activer automatiquement pour les dépôts privés ajoutés à {% data variables.product.prodname_advanced_security %}** . 

Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
{% endif %}

## Configuration de l’{% data variables.product.prodname_code_scanning %}

L’{% data variables.product.prodname_code_scanning_capc %} est une fonctionnalité {% data variables.product.prodname_advanced_security %} qui vérifie si le code contient des vulnérabilités et des erreurs de sécurité.

{% ifversion fpt or ghec %}L’{% data variables.product.prodname_code_scanning_capc %} est disponible pour tous les dépôts publics. Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} avec {% data variables.product.prodname_advanced_security %} peuvent également utiliser l’{% data variables.product.prodname_code_scanning %} pour les dépôts privés et internes.{% else %}L’{% data variables.product.prodname_code_scanning_capc %} est disponible si votre entreprise utilise {% data variables.product.prodname_advanced_security %}.{% endif %}

L’{% data variables.product.prodname_code_scanning_capc %} est configurée au niveau du dépôt. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} pour un dépôt](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) ».

## Étapes suivantes
Vous pouvez afficher et gérer les alertes à partir des fonctionnalités de sécurité pour résoudre les dépendances et les vulnérabilités dans votre code. Pour plus d’informations, consultez {% ifversion fpt or ghes or ghec %} « [Consultation et mise à jour des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) »,{% endif %} {% ifversion fpt or ghec or ghes %} »[Gestion des demandes de tirage pour les mises à jour des dépendances](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates) », {% endif %}« [Gestion de l’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) » et « [Gestion des alertes de l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning) ».

{% ifversion fpt or ghec %}Si vous avez une vulnérabilité de sécurité, vous pouvez créer un avis de sécurité pour discuter et résoudre en privé la vulnérabilité. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories) » et « [Création d’un avis de sécurité](/code-security/security-advisories/creating-a-security-advisory) ».
{% endif %}

{% ifversion ghes or ghec or ghae %}Vous{% elsif fpt %}Organisations qui utilisez {% data variables.product.prodname_ghe_cloud %}{% endif %} pouvez afficher, filtrer et trier des alertes de sécurité pour des référentiels détenus par {% ifversion ghes or ghec or ghae %}votre{% elsif fpt %}their{% endif %} organisation en ce qui concerne la sécurité. Pour plus d’informations, consultez{% ifversion ghes or ghec or ghae %} « [À propos de la vue d’ensemble de la sécurité](/code-security/security-overview/about-the-security-overview) ».{% elsif fpt %} « [À propos de la vue d’ensemble de la sécurité](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview) » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% endif %}

{% ifversion ghec %}
## Pour aller plus loin

« [Accès aux rapports de conformité pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization) » {% endif %}
