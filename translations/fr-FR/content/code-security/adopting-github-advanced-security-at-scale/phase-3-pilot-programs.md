---
title: "Phase 3\_: Programmes pilotes"
intro: 'Il peut être judicieux de commencer avec quelques projets et équipes à impact élevé, avec lesquels piloter un déploiement initial. Cela permettra à un groupe initial au sein de l’entreprise de se familiariser avec GHAS, d’apprendre à activer et à configurer GHAS et de créer une base solide sur GHAS avant de procéder à un déploiement dans le reste de l’entreprise.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 3. Pilot programs
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d56427173580558a192d0709ae700cbd497e2935
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108489'
---
{% note %}

Cet article fait partie d’une série sur l’adoption de {% data variables.product.prodname_GH_advanced_security %} à grande échelle. Pour accéder à l’article précédent de cette série, consultez « [Phase 2 : Préparation à l’activation à grande échelle](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale) ».

{% endnote %}

## À propos des programmes pilotes

Nous vous recommandons d’identifier quelques projets ou équipes à impact élevé convenant à un déploiement pilote de GHAS. Cela permet à un groupe initial au sein de l’entreprise de se familiariser avec GHAS, et de créer une base solide pour GHAS avant de procéder à son déploiement dans le reste de l’entreprise.

Les étapes de cette phase vous aideront à activer GHAS dans votre entreprise, à commencer à utiliser ses fonctionnalités et à analyser les résultats. Si vous utilisez {% data variables.product.prodname_professional_services %}, vous pouvez bénéficier d’une assistance supplémentaire via ce processus avec des sessions d’intégration, des ateliers GHAS et la résolution des problèmes, selon les besoins.

Avant de lancer vos projets pilotes, nous vous recommandons de planifier des réunions pour vos équipes, par exemple une réunion initiale, une analyse à mi-chemin et une session de clôture à la fin du pilote. Ces réunions vous aideront à apporter tous les ajustements nécessaires et à vous assurer que vos équipes sont préparées et en mesure de mener à bien le pilote.

{% ifversion ghes %}

Si vous n’avez pas déjà activé GHAS pour votre instance {% data variables.product.prodname_ghe_server %}, consultez « [Activation de GitHub Advanced Security pour votre entreprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise) ».

{% endif %}

Vous devez activer GHAS pour chaque projet pilote en activant la fonctionnalité GHAS pour chaque dépôt ou pour tous les dépôts au sein des organisations prenant part au pilote. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) » ou « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».

## Pilotage de l’{% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

Pour activer l’{% data variables.product.prodname_code_scanning %} dans votre instance {% data variables.product.prodname_ghe_server %}, consultez « [Configuration de l’analyse du code pour votre appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance) ».

{% elsif ghae %}

Pour activer l’{% data variables.product.prodname_code_scanning %} à l’aide de {% data variables.product.prodname_actions %}, vous devez rendre des exécuteurs disponibles pour exécuter des workflows dans {% data variables.product.prodname_ghe_managed %}. Consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae) ».

{% endif %}

Vous pouvez exécuter l’analyse du code sur un dépôt en créant un workflow {% data variables.product.prodname_actions %} pour exécuter l’[action CodeQL](https://github.com/github/codeql-action/). {% ifversion ghec %}Par défaut, l’{% data variables.product.prodname_code_scanning_capc %} utilise des [exécuteurs hébergés par GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners), mais si vous envisagez d’héberger votre propre exécuteur avec vos propres spécifications matérielles, vous pouvez personnaliser cela. Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners) ».{% endif %}

Pour plus d’informations sur {% data variables.product.prodname_actions %}, consultez :
  - « [Découvrir GitHub Actions](/actions/learn-github-actions) »
  - « [Comprendre GitHub Actions](/actions/learn-github-actions/understanding-github-actions) »
  - « [Événements déclencheurs de workflows](/actions/learn-github-actions/events-that-trigger-workflows) »
  - « [Aide-mémoire de modèle de filtre](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet) »

Nous vous recommandons d’activer l’{% data variables.product.prodname_code_scanning %} dépôt par dépôt dans le cadre de votre programme pilote. Pour plus d’informations, consultez « [Configuration de l’analyse du code pour un dépôt](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository) ».

Si vous souhaitez activer l’analyse du code pour un grand nombre de dépôts, vous pouvez scripter le processus.

Pour voir un exemple de script qui ouvre des demandes de tirage (pull requests) en vue d’ajouter un workflow {% data variables.product.prodname_actions %} à plusieurs dépôts, consultez le dépôt [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) pour obtenir un exemple utilisant PowerShell, ou [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) pour les équipes qui n’ont pas PowerShell et qui souhaitent utiliser NodeJS.

Quand vous exécutez des analyses de code initiales, vous pouvez constater qu’aucun résultat n’est trouvé ou qu’un nombre de résultats retournés est inhabituel. Vous pouvez ajuster ce qui sera marqué dans les futures analyses. Pour plus d’informations, consultez « [Configuration de l’analyse du code](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning) ».

Si votre entreprise souhaite utiliser d’autres outils d’analyse de code tiers avec l’analyse du code GitHub, vous pouvez utiliser des actions pour exécuter ces outils dans GitHub. Vous pouvez aussi charger les résultats générés par des outils tiers sous forme de fichiers SARIF à des fins d’analyse du code. Pour plus d’informations, consultez « [Intégration à l’analyse du code](/code-security/code-scanning/integrating-with-code-scanning) ».

## Pilotage de l’{% data variables.product.prodname_secret_scanning %}

GitHub analyse les types de secrets connus dans les dépôts pour éviter une utilisation frauduleuse des secrets commités accidentellement.

{% ifversion ghes %}

Pour activer l’analyse des secrets pour votre instance {% data variables.product.prodname_ghe_server %} , consultez « [Configuration de l’analyse des secrets pour votre appliance](/admin/advanced-security/configuring-secret-scanning-for-your-appliance) ».

{% endif %}

Vous devez activer l’analyse des secrets pour chaque projet pilote en activant la fonctionnalité pour chaque dépôt ou pour tous les dépôts au sein des organisations prenant part au projet. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) » ou « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».

Si vous avez rassemblé des modèles personnalisés propres à votre entreprise, en particulier des modèles liés aux projets pilotant l’{% data variables.product.prodname_secret_scanning %}, vous pouvez les configurer. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning) ».

Pour savoir comment consulter et fermer les alertes pour les secrets archivés dans votre dépôt, consultez « [Gestion des alertes de l’analyse des secrets](/code-security/secret-scanning/managing-alerts-from-secret-scanning) ».

{% note %}

Pour accéder à l’article suivant de cette série, consultez « [Phase 4 : Créer une documentation interne](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation) ».

{% endnote %}
