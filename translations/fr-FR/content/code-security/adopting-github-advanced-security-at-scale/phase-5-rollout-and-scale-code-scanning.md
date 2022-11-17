---
title: "Phase 5\_: Déployer et mettre à l’échelle l’analyse du code"
intro: 'Vous pouvez tirer parti des API disponibles pour déployer l’{% data variables.product.prodname_code_scanning %} par programmation par équipe et par langage dans votre entreprise à l’aide des données de dépôt que vous avez collectées précédemment.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 5. Rollout code scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: abbcdf4c1e4a231a568e8d8cd488877ebdf2fd9f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108485'
---
{% note %}

Cet article fait partie d’une série sur l’adoption de {% data variables.product.prodname_GH_advanced_security %} à grande échelle. Pour accéder à l’article précédent de cette série, consultez « [Phase 4 : Créer une documentation interne](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation) ».

{% endnote %}

### Activation de l’analyse du code

À l’aide des données compilées lors de la [Phase 2](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale), vous pouvez commencer à activer GHAS, puis l’{% data variables.product.prodname_code_scanning %} sur vos dépôts, un langage à la fois. Le processus pas à pas pour activer GHAS doit ressembler à ceci :

1. Activez GHAS sur le dépôt. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) ».
1. Créez une demande de tirage sur la branche par défaut du dépôt avec un fichier `codeql-analysis.yml` contenant un exemple d’exécution de CodeQL pour ce langage. Pour plus d’informations, consultez « [Création d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) ».
1. Créez un problème dans le dépôt pour expliquer pourquoi une demande de tirage a été déclenchée. Le problème que vous créez peut contenir un lien vers la communication précédente envoyée à tous les utilisateurs, mais peut également expliquer les modifications introduites par la demande de tirage, les étapes suivantes que l’équipe doit effectuer, les responsabilités de l’équipe et la façon dont l’équipe doit utiliser l’{% data variables.product.prodname_code_scanning %}. Pour plus d’informations, consultez « [Création d’un problème](/issues/tracking-your-work-with-issues/creating-an-issue) ».

Il existe un outil disponible publiquement, nommé [outil ghas-enablement](https://github.com/NickLiffen/ghas-enablement), qui effectue les deux premières étapes. Vous pouvez réexécuter l’outil ghas-enablement dans des lots par langage là où il est logique de le faire. Par exemple, JavaScript, TypeScript, Python et Go ont probablement un processus de génération similaire, et pourraient donc utiliser un fichier d’analyse CodeQL similaire. L’outil ghas-enablement peut également être utilisé pour des langages tels que Java, C et C++, mais en raison de la nature variée dont ces langages créent et compilent, vous devrez peut-être créer des fichiers d’analyse CodeQL plus ciblés.

{% note %}

**Remarque :** Si vous envisagez d’utiliser {% data variables.product.prodname_actions %} pour contrôler les données d’{% data variables.product.prodname_code_scanning %} et que vous n’utilisez pas l’[outil ghas-enablement](https://github.com/NickLiffen/ghas-enablement), gardez à l’esprit qu’il n’existe aucun accès API au répertoire `.github/workflow`. Cela signifie que vous ne pouvez pas créer de script sans client Git sous-jacent à l’automatisation. La solution de contournement consiste à tirer parti d’un script bash sur un ordinateur ou un conteneur qui a un client Git. Le client Git peut pousser et extraire des fichiers dans le répertoire `.github/workflows` où se trouve le fichier `codeql-analysis.yml`.

{% endnote %}

Il est important de ne pas simplement pousser le fichier `codeql-analysis.yml` vers la branche par défaut du dépôt. L’utilisation d’une demande de tirage implique qu’il est de la responsabilité de l’équipe de développement de passer en revue et de fusionner, ce qui permet à l’équipe de développement d’en apprendre davantage sur l’{% data variables.product.prodname_code_scanning %} et d’impliquer l’équipe dans le processus. 

Vous devez capturer les URL des demandes de tirage créées par automatisation, vérifier l’activité chaque semaine et voir celles qui sont fermées. Après quelques semaines, il peut être utile de créer un autre problème ou d’envoyer des e-mails internes si la demande de tirage reste non fusionnée.

### Création d’experts techniques

Vous pouvez ensuite passer à l’étape suivante de l’activation, qui consiste à créer des experts techniques internes (ou SME) et à organiser des réunions d’entreprise. L’ouverture de demandes de tirage et de problèmes dans les dépôts permettra probablement de traiter un large pourcentage de votre adoption, mais pas les cas d’usage ponctuels où un processus de génération, un framework ou une bibliothèque spécifique a besoin de l’activation d’indicateurs de fonctionnalités spécifiques. Une approche plus personnalisée et pratique est nécessaire pour encourager une adoption élevée, en particulier pour Java, C et C++.

Il est judicieux de tenir des réunions régulières sur des sujets spécifiques, afin d’éduquer et de discuter du déploiement avec un groupe plus important. Cela est beaucoup plus efficace du point de vue de la gestion du temps pour une entreprise ayant des milliers de dépôts, par rapport à la collaboration avec une équipe à la fois. Les équipes peuvent venir aux sessions qui les concernent. Voici quelques exemples de sessions possibles :

- {% data variables.product.prodname_code_scanning_capc %} dans un conteneur
- {% data variables.product.prodname_code_scanning_capc %} et struts Java
- {% data variables.product.prodname_code_scanning_capc %} et JSP

Vous pouvez utiliser les données que vous avez collectées sur la distribution des différents langages parmi les dépôts pour créer des réunions ciblées.

{% note %}

Pour accéder à l’article suivant de cette série, consultez « [Phase 6 : Déployer et mettre à l’échelle l’analyse des secrets](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning) ».

{% endnote %}
