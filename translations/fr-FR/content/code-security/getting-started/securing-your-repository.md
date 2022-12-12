---
title: Sécurisation de votre dépôt
intro: 'Vous pouvez utiliser un certain nombre de fonctionnalités {% data variables.product.prodname_dotcom %} pour sécuriser votre référentiel.'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your repository
ms.openlocfilehash: adab3ab8944ebd4945d30d7e886d91f0a31ca545
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161182'
---
## Introduction
Ce guide vous montre comment configurer des fonctionnalités de sécurité pour un dépôt. Vous devez être administrateur de dépôt ou propriétaire d’organisation pour configurer les paramètres de sécurité d’un dépôt.

Vos besoins en matière de sécurité étant propres à votre dépôt, il ne vous est peut-être pas nécessaire d’activer chaque fonctionnalité pour celui-ci. Pour plus d’informations, consultez « [Fonctionnalités de sécurité de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features) ».

{% data reusables.advanced-security.security-feature-availability %}

## Gestion de l’accès à votre dépôt

La première étape de la sécurisation d’un dépôt consiste à configurer qui peut voir et modifier votre code. Pour plus d’informations, consultez « [Gestion des paramètres des dépôts](/github/administering-a-repository/managing-repository-settings) ».

Dans la page principale de votre dépôt, cliquez sur **{% octicon "gear" aria-label="The Settings gear" %}Paramètres**, puis faites défiler jusqu’à la « Zone de danger ».

- Pour changer qui peut voir votre dépôt, cliquez sur **Changer la visibilité**. Pour plus d’informations, consultez « [Définition de la visibilité des dépôts](/github/administering-a-repository/setting-repository-visibility) ».{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
- Pour changer qui peut accéder à votre dépôt et ajuster les autorisations, cliquez sur **Gérer l’accès**. Pour plus d’informations, consultez « [Gestion des équipes et des personnes ayant accès à votre dépôt](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository) ».{% endif %}

## Définition d’une stratégie de sécurité

1. Dans la page principale de votre dépôt, cliquez sur **{% octicon "shield" aria-label="The shield symbol" %} Sécurité**.
2. Cliquez sur **Stratégie de sécurité**.
3. Cliquez sur **Démarrer la configuration**.
4. Ajoutez des informations sur les versions prises en charge de votre projet et sur la façon de signaler les vulnérabilités.

Pour plus d’informations, consultez « [Ajout d’une stratégie de sécurité à votre dépôt](/code-security/getting-started/adding-a-security-policy-to-your-repository) ».

## Gestion du graphe de dépendances

{% ifversion fpt or ghec %} Le graphe de dépendances est généré automatiquement pour tous les dépôts publics, et vous pouvez choisir de l’activer pour les dépôts privés. Il interprète les fichiers manifeste et de verrouillage dans un dépôt pour identifier les dépendances.

1. Dans la page principale de votre dépôt, cliquez sur **{% octicon "gear" aria-label="The Settings gear" %} Paramètres**.
2. Cliquez sur **Sécurité et analyse**.
3. En regard du graphe de dépendances, cliquez sur **Activer** ou **Désactiver**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Pour plus d’informations, consultez « [Exploration des dépendances d’un dépôt](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository) ».

## Gestion des {% data variables.product.prodname_dependabot_alerts %}

Les {% data variables.product.prodname_dependabot_alerts %} sont générées quand {% data variables.product.prodname_dotcom %} identifie, dans le graphe de dépendances, une dépendance avec une vulnérabilité. {% ifversion fpt or ghec %}Vous pouvez activer les {% data variables.product.prodname_dependabot_alerts %} pour n’importe quel dépôt.{% endif %}

{% ifversion fpt or ghec %}
1. Cliquez sur votre photo de profil, puis sur **Paramètres**.
2. Cliquez sur **Sécurité et analyse**.
3. Cliquez sur **Activer tout** en regard de {% data variables.product.prodname_dependabot_alerts %}.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% ifversion fpt or ghec %} » et « [Gestion des paramètres de sécurité et d’analyse pour votre compte personnel](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account){% endif %} ».

## Gestion de la révision des dépendances

La révision des dépendances vous permet de visualiser les modifications de dépendance dans les demandes de tirage (pull request) avant qu’elles ne soient fusionnées dans vos dépôts. Pour plus d’informations, consultez « [À propos de la révision des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review) ».

La révision des dépendances est une fonctionnalité de {% data variables.product.prodname_GH_advanced_security %}. {% ifversion fpt or ghec %}La révision des dépendances est déjà activée pour tous les dépôts publics. {% ifversion fpt %}Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} avec {% data variables.product.prodname_advanced_security %} peuvent également activer la révision des dépendances pour les dépôts privés et internes. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec or ghes or ghae %}Pour activer la révision des dépendances pour un dépôt{% ifversion ghec %} privé ou interne{% endif %}, vérifiez que le graphe de dépendances est activé et activez {% data variables.product.prodname_GH_advanced_security %}. 

1. Dans la page principale de votre dépôt, cliquez sur **{% octicon "gear" aria-label="The Settings gear" %} Paramètres**.
2. Cliquez sur **Sécurité et analyse**.
3. {% ifversion ghec %}Si le graphe de dépendances n’est pas déjà activé, cliquez sur **Activer**.{% elsif ghes or ghae %}Vérifiez que le graphe de dépendances est configuré pour votre entreprise.{% endif %}
4. Si {% data variables.product.prodname_GH_advanced_security %} n’est pas déjà activé, cliquez sur **Activer**.

{% endif %}

{% ifversion fpt or ghec or ghes %}

## Gestion des {% data variables.product.prodname_dependabot_security_updates %}

Pour tout dépôt qui utilise des {% data variables.product.prodname_dependabot_alerts %}, vous pouvez activer les {% data variables.product.prodname_dependabot_security_updates %} afin de déclencher des demandes de tirage avec des mises à jour de sécurité quand des vulnérabilités sont détectées.

1. Dans la page principale de votre dépôt, cliquez sur **{% octicon "gear" aria-label="The Settings gear" %} Paramètres**.
2. Cliquez sur **Sécurité et analyse**.
3. En regard de {% data variables.product.prodname_dependabot_security_updates %}, cliquez sur **Activer**.

Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates) » et « [Configuration des {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates) ».

## Gestion des {% data variables.product.prodname_dependabot_version_updates %}

Vous pouvez autoriser {% data variables.product.prodname_dependabot %} à déclencher automatiquement des demandes de tirage afin de maintenir vos dépendances à jour. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates) ».

{% ifversion dependabot-settings-update-37 %}
1. Dans la page principale de votre dépôt, cliquez sur **{% octicon "gear" aria-label="The Settings gear" %} Paramètres**.
2. Cliquez sur **Sécurité et analyse**.
3. À côté de {% data variables.product.prodname_dependabot_version_updates %}, cliquez sur **Activer** pour créer un fichier config *dependabot.yml*.
4. Spécifiez les dépendances à mettre à jour et valider le fichier dans le référentiel. Pour plus d’informations, consultez « [Configuration des mises à jour de version Dependabot](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates) ».

{% else %} Pour activer {% data variables.product.prodname_dependabot_version_updates %}, vous devez créer un fichier config *dependabot.yml*. Pour plus d’informations, consultez « [Configuration des mises à jour de version {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates) ».
{% endif %}

{% endif %}

## Configuration de l’{% data variables.product.prodname_code_scanning %}

Vous pouvez configurer l’{% data variables.product.prodname_code_scanning %} pour identifier automatiquement les vulnérabilités et les erreurs dans le code stocké dans votre dépôt en utilisant un {% data variables.code-scanning.codeql_workflow %} ou un outil tiers. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} pour un dépôt](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) ».

L’{% data variables.product.prodname_code_scanning_capc %} est disponible {% ifversion fpt or ghec %}pour tous les dépôts publics et pour les dépôts privés appartenant à des organisations qui font partie d’une entreprise dotée d’une licence pour {% else %}pour les dépôts appartenant à une organisation si votre entreprise utilise {% endif %}{% data variables.product.prodname_GH_advanced_security %}.

## Configuration de l’{% data variables.product.prodname_secret_scanning %}

L’{% data variables.product.prodname_secret_scanning_caps %} est {% ifversion fpt or ghec %}activée pour tous les dépôts publics et est disponible pour les dépôts privés appartenant à des organisations qui font partie d’une entreprise dotée d’une licence pour {% else %}disponible pour les dépôts appartenant à une organisation si votre entreprise utilise {% endif %}{% data variables.product.prodname_GH_advanced_security %}. {% ifversion fpt %}Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#configuring-secret-scanning).{% else %}L’{% data variables.product.prodname_secret_scanning_caps %} est peut-être déjà activée pour votre dépôt, en fonction des paramètres de votre organisation.

1. Dans la page principale de votre dépôt, cliquez sur **{% octicon "gear" aria-label="The Settings gear" %} Paramètres**.
2. Cliquez sur **Sécurité et analyse**.
3. Si {% data variables.product.prodname_GH_advanced_security %} n’est pas déjà activé, cliquez sur **Activer**.
4. En regard de {% data variables.product.prodname_secret_scanning_caps %}, cliquez sur **Activer**. {% endif %}

## Étapes suivantes
Vous pouvez afficher et gérer les alertes à partir des fonctionnalités de sécurité pour résoudre les dépendances et les vulnérabilités dans votre code. Pour plus d’informations, consultez {% ifversion fpt or ghes or ghec %} « [Consultation et mise à jour des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) »,{% endif %} {% ifversion fpt or ghec or ghes %} »[Gestion des demandes de tirage pour les mises à jour des dépendances](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates) », {% endif %}« [Gestion de l’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) » et « [Gestion des alertes de l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning) ».

{% ifversion fpt or ghec %}Si vous avez une vulnérabilité de sécurité, vous pouvez créer un avis de sécurité pour discuter et résoudre en privé la vulnérabilité. Pour plus d’informations, consultez « [À propos des avis de sécurité de dépôt](/code-security/security-advisories/about-github-security-advisories) » et « [Création d’un avis de sécurité](/code-security/security-advisories/creating-a-security-advisory) ».
{% endif %}
