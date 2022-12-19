---
title: "Phase 4\_: Créer une documentation interne"
intro: 'Vous allez créer une documentation interne, puis la communiquer aux consommateurs de {% data variables.product.prodname_GH_advanced_security %}.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 4. Create internal documentation
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: caf35f06c3f836ea7532b7c5e9dfb419ba8c325b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108488'
---
{% note %}

Cet article fait partie d’une série sur l’adoption de {% data variables.product.prodname_GH_advanced_security %} à grande échelle. Pour accéder à l’article précédent de cette série, consultez « [Phase 3 : Programmes pilotes](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs) ».

{% endnote %}

Avant d’activer {% data variables.product.prodname_GH_advanced_security %}, vous devez créer une documentation interne qui définit les processus à suivre pour les équipes. Tout le monde doit savoir ce qu’il faut faire en cas de réception d’une alerte de sécurité, même si le processus demande simplement à l’équipe d’appliquer son meilleur jugement. La documentation empêchera également les développeurs de se retrouver bloqués lorsqu’ils ont des questions. Vous devez placer la documentation sur GHAS avec la documentation existante axée sur le développement, par exemple sur votre portail de développement ou votre base de connaissances personnalisée.

Si vous avez exécuté des programmes pilotes, utilisez les expériences et les commentaires des équipes impliquées dans ces pilotes pour influencer votre documentation. Ceci est particulièrement utile si vous avez rencontré des problèmes propres à votre entreprise, que d’autres équipes seront également susceptibles de rencontrer.

Si vous ignorez la création d’une documentation interne, votre déploiement n’avancera pas au rythme prévu. La création d’une documentation interne peut ralentir le déploiement initial d’une semaine ou deux, mais ce délai sera compensé lorsque les développeurs pourront répondre à leurs propres questions au lieu de devoir se tourner vers votre équipe.

L’éducation est probablement la partie la plus cruciale du déploiement, car elle enseigne aux développeurs ce qu’il faut faire dans différentes situations. Vous devez veiller à ce que les développeurs aient les moyens de maintenir la sécurité de leur dépôt, et que l’équipe de sécurité soit autorisée à vérifier à la fois ce que les développeurs font et que ce qu’ils font est dans le meilleur intérêt de la sécurité. En plus de la documentation interne, l’éducation peut prendre la forme de sessions en ligne, Q&R, etc.

{% note %}

Pour accéder à l’article suivant de cette série, consultez « [Phase 5 : Déployer et mettre à l’échelle l’analyse du code](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning) ».

{% endnote %}
