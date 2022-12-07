---
title: "Phase 1\_: Aligner sur votre stratégie de déploiement et vos objectifs"
intro: 'Avant d’activer l’{% data variables.product.prodname_code_scanning %} et l’{% data variables.product.prodname_secret_scanning %}, planifiez le déploiement de GHAS dans votre entreprise.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 1. Align on strategy
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b2677cf11c300ad657f9bd6b8862fb1f292c2fb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108717'
---
{% note %}

Cet article fait partie d’une série sur l’adoption de {% data variables.product.prodname_GH_advanced_security %} à grande échelle. Pour accéder à l’introduction à cette série, consultez « [Introduction à l’adoption de {% data variables.product.prodname_GH_advanced_security %} à grande échelle](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale) ».

{% endnote %}

### Définir des objectifs clairs pour le déploiement au sein de votre entreprise

Pour créer une base pour la direction du déploiement de votre entreprise, décrivez les objectifs de GHAS au sein de votre entreprise et communiquez ces objectifs à votre équipe. Vos objectifs peuvent être simples ou complexes, tant que votre équipe est alignée. Si vous avez besoin d’aide pour fixer vos objectifs, {% data variables.product.prodname_professional_services %} peut fournir des suggestions basées sur notre expérience avec votre entreprise et d’autres clients.

Voici quelques exemples schématiques de ce à quoi vos objectifs de déploiement de GHAS pourraient ressembler :

  - **Réduction du nombre de vulnérabilités :** il peut s’agir d’un objectif général ou la conséquence d’une vulnérabilité importante dont votre entreprise a été victime dernièrement et qui, selon vous, aurait pu être évitée par un outil comme GHAS.
  - **Identification des dépôts à haut risque :** certaines entreprises peuvent simplement souhaiter cibler les dépôts qui présentent le plus de risques, leur permettant ainsi de réduire les risques en corrigeant les vulnérabilités.
  -  **Augmentation du taux de correction :** pour prévenir l’accumulation de la dette de sécurité, vous souhaiterez peut-être inciter les développeurs à adopter les découvertes et veiller à ce que ces vulnérabilités soient corrigées en temps voulu,.  
  - **Respect des exigences de conformité** : par exemple, un grand nombre d’entreprises du secteur de la santé utilisent GHAS pour empêcher l’exposition des informations personnelles de santé.
  - **Prévention des fuites de secrets** : de nombreuses entreprises souhaitent empêcher la fuite d’informations critiques, telles que les clés logicielles ou les données financières.

### Mener votre déploiement avec vos groupes de sécurité et de développement

Les entreprises qui impliquent à la fois leurs équipes de sécurité et de développement dans leurs déploiements GHAS ont tendance à être plus efficaces que celles qui n’impliquent que leur groupe de sécurité et attendent la fin du pilote pour inclure les équipes de développement. 

GHAS a une approche de la sécurité logicielle qui est axée sur le développeur en s’intégrant parfaitement dans le workflow du développeur. Le fait d’avoir une représentation clé de votre groupe de développement au début du processus réduit le risque lié au déploiement et encourage l’adhésion de l’organisation.

Impliquer les groupes de développement plus tôt, idéalement à partir du moment de l’achat, aide les entreprises à utiliser GHAS pour résoudre les problèmes de sécurité plus tôt dans le processus de développement. Lorsque les deux groupes travaillent ensemble, ils atteignent l’alignement tôt dans le processus, suppriment les silos, bâtissent et renforcent leurs relations de travail, et assument davantage de responsabilités dans le cadre du déploiement. 


### Se familiariser avec GHAS

Pour définir des attentes réalistes pour le déploiement, veillez à ce que toutes les parties prenantes comprennent les faits clés suivants concernant le fonctionnement de GHAS.

#### 1. GHAS est une suite d’outils de sécurité qui nécessitent d’intervenir pour protéger le code

GHAS est une suite d’outils qui prend toute sa valeur quand elle est configurée, gérée et utilisée dans des workflows quotidiens et en association avec d’autres outils. 

#### 2. GHAS nécessite un paramétrage initial

Une fois que GHAS est configuré sur vos dépôts, vous devez le configurer de façon à ce qu’il réponde aux besoins de votre entreprise. L’analyse du code, en particulier, nécessite une personnalisation supplémentaire, comme l’évaluation des résultats initiaux et l’ajustement des analyses ultérieures. De nombreux clients constatent que les analyses initiales retournent des résultats limités ou non pertinents jusqu’à ce que l’analyse du code soit ajustée en fonction du modèle de menace de l’application.

#### 3. Les outils GHAS sont les plus efficaces lorsqu’ils sont utilisés ensemble et intégrés à votre programme de sécurité des applications

GHAS est plus efficace quand tous les outils sont utilisés ensemble. L’efficacité de votre programme de sécurité des applications est encore améliorée en intégrant GHAS à d’autres outils et activités, tels que des tests de pénétration et des analyses dynamiques. Nous vous recommandons de toujours utiliser plusieurs couches de protection.

#### 4. Des requêtes {% data variables.product.prodname_codeql %} personnalisées sont utilisées par certaines entreprises pour personnaliser et cibler les résultats de l’analyse 

L’analyse du code repose sur {% data variables.product.prodname_codeql %}, le moteur d’analyse de code le plus puissant au monde. Pour bon nombre de nos clients, le jeu de requêtes de base et les requêtes supplémentaires disponibles auprès de la communauté sont plus que suffisants. Toutefois, d’autres entreprises peuvent nécessiter des requêtes {% data variables.product.prodname_codeql %} personnalisées afin de cibler différents résultats ou réduire les faux positifs.

Si votre entreprise s’intéresse aux requêtes {% data variables.product.prodname_codeql %} personnalisées, nous vous recommandons tout d’abord de mener à bien le déploiement et l’implémentation de GHAS. Ensuite, lorsque votre entreprise est prête, {% data variables.product.prodname_professional_services %} peut vous aider à parcourir vos besoins et vérifier que votre entreprise a besoin de requêtes personnalisées.  

#### 5. {% data variables.product.prodname_codeql %} analyse l’ensemble du codebase, et pas seulement les modifications apportées dans une demande de tirage (pull request)

Quand l’analyse du code est exécutée à partir d’une demande de tirage, l’analyse porte sur le codebase complet et pas seulement sur les modifications apportées à la demande de tirage. L’analyse de tout le codebase est une étape importante pour vérifier que la modification a été examinée par rapport à toutes les interactions dans le codebase.

{% note %}

Pour accéder à l’article suivant de cette série, consultez « [Phase 2 : Préparation à l’activation à grande échelle](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale) ».

{% endnote %}
