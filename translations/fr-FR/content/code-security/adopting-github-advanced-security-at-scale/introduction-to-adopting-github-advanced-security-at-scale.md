---
title: Introduction à l’adoption de GitHub Advanced Security à grande échelle
intro: 'Vous pouvez adopter {% data variables.product.prodname_GH_advanced_security %} à grande échelle dans votre entreprise en suivant les bonnes pratiques du secteur et GitHub.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: Introduction
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/overview-of-github-advanced-security-deployment
  - /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 2
ms.openlocfilehash: f42a461b3c53565725d6909680fa8e6a202c0439
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108724'
---
## À propos de ces articles

{% data variables.product.prodname_GH_advanced_security %} (GHAS) permet aux équipes de générer un code plus sécurisé et de façon plus rapide à l’aide d’outils intégrés tels que l’analyse de secrets et l’analyse de code à l’aide de CodeQL. Pour comprendre les fonctionnalités de sécurité disponibles via {% data variables.product.prodname_GH_advanced_security %}, consultez « [À propos de GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security) ».

GHAS est une suite d’outils qui demande une participation active des développeurs au sein de votre entreprise. Pour bénéficier du meilleur retour sur investissement, vous devez apprendre à utiliser, appliquer et maintenir GHAS.


Nous avons créé une approche de déploiement de GHAS par phases qui s’appuie sur les bonnes pratiques du secteur et de GitHub. Nous avons aidé de nombreux clients à mener à bien le déploiement de {% data variables.product.prodname_GH_advanced_security %} et nous nous attendons à ce que la plupart des clients souhaitent suivre ces phases, mais vous devrez peut-être modifier cette approche afin de répondre aux besoins de votre entreprise. 

L’activation de GHAS dans une grande organisation peut être divisée en six phases principales.

1. [**Aligner sur votre stratégie de déploiement et vos objectifs**](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals) : réfléchissez à ce à quoi le succès ressemblera, et alignez-vous sur la façon dont GHAS sera implémenté dans votre entreprise. Cette phase peut ne prendre que quelques jours ou une semaine, mais elle pose une base solide pour le reste du déploiement.
  
2. [**Préparation à l’activation à grande échelle**](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale) : préparez les développeurs, collectez des données sur vos dépôts et vérifiez que vous êtes prêt pour la phase suivante.
  
3. [**Programmes pilotes**](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs) : si vous le souhaitez, pilotez un déploiement initial pour quelques projets et équipes à fort impact. Cela permettra à un groupe initial au sein de l’entreprise de se familiariser avec GHAS avant de procéder à un déploiement dans le reste de l’entreprise. 
  
4. [**Créer une documentation interne**](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation) : créez et communiquez une documentation interne pour les consommateurs de GHAS. Si vous ne fournissez pas une documentation adéquate aux développeurs, aux ingénieurs de sécurité et à d’autres personnes qui utiliseront GHAS, la valeur sera perdue dans le déploiement.
  
5. [**Déployer et mettre à l’échelle l’{% data variables.product.prodname_code_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning) : tirez parti des API disponibles, déployez automatiquement l’{% data variables.product.prodname_code_scanning %} par équipe et par langage au sein de votre entreprise, à l’aide des données de dépôts collectées précédemment.
  
6. [**Déployer et mettre à l’échelle l’{% data variables.product.prodname_secret_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning) : déployez l’{% data variables.product.prodname_secret_scanning %}, qui implique moins de configuration et est donc plus simple à adopter que l’{% data variables.product.prodname_code_scanning %}. Néanmoins, il est essentiel d’avoir une stratégie de gestion des résultats nouveaux et anciens.

## {% data variables.contact.github_support %} et {% data variables.product.prodname_professional_services_team %}

Si vous rencontrez des problèmes ou si vous avez des questions pendant votre implémentation, vous pouvez rechercher des solutions dans notre documentation ou contacter {% data variables.contact.github_support %}. Pour plus d’informations, consultez « [À propos du support GitHub](/support/learning-about-github-support/about-github-support) ».

Si vous préférez bénéficier d’une assistance tout au long du processus de déploiement, {% data variables.product.prodname_professional_services %} peut coopérer avec vous pour un déploiement et une implémentation réussis de {% data variables.product.prodname_GH_advanced_security %}. Nous proposons diverses options d’aide et de support. Nous avons également des formations et des bootcamps à vous proposer pour aider votre entreprise à optimiser la valeur de {% data variables.product.prodname_GH_advanced_security %}.

Entretenez-vous avec votre représentant commercial pour plus d’informations sur les différentes options proposées par Professional Services. Pour plus d’informations, contactez l’{% data variables.contact.contact_enterprise_sales %}.

{% note %}

Pour accéder au premier article de cette série, consultez « [Phase 1 : Aligner sur votre stratégie de déploiement et vos objectifs](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals) ».

{% endnote %}
