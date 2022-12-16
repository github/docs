---
title: Ressources matérielles recommandées pour l’exécution de CodeQL
shortTitle: Hardware resources for CodeQL
intro: 'Spécifications recommandées (RAM, cœurs de processeur et disque) pour l’exécution de l’analyse {% data variables.product.prodname_codeql %} sur des machines auto-hébergées, en fonction de la taille de votre codebase.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Integration
  - CI
ms.openlocfilehash: 9f180e28a3207ef64a516a1e6cd6a8bbcf17ea53
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105453'
---
Vous pouvez configurer {% data variables.product.prodname_codeql %} sur {% data variables.product.prodname_actions %} ou sur un système CI externe. {% data variables.product.prodname_codeql %} est entièrement compatible avec les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} sur {% data variables.product.prodname_actions %}.

Si vous utilisez un système CI externe ou des exécuteurs auto-hébergés sur {% data variables.product.prodname_actions %} pour les dépôts privés, vous êtes responsable de la configuration de votre propre matériel. La configuration matérielle optimale pour l’exécution de {% data variables.product.prodname_codeql %} peut varier en fonction de la taille et de la complexité de votre codebase, des langages de programmation et des systèmes de génération utilisés ainsi que de la configuration de votre workflow CI.

Le tableau ci-dessous indique les spécifications matérielles recommandées pour l’exécution de l’analyse {% data variables.product.prodname_codeql %}, en fonction de la taille de votre codebase. Utilisez-les comme point de départ pour déterminer votre choix de matériel ou de machine virtuelle. Une machine avec des ressources plus importantes peut améliorer les performances d’analyse, mais elle peut également être plus coûteuse à maintenir.

| Taille du codebase | Mémoire vive (RAM) | UC |
|--------|--------|--------|
| Petite (moins de 100 000 lignes de code) | 8 Go ou plus | 2 cœurs |
| Moyenne (100 000 à 1 million de lignes de code) | 16 Go ou plus | 4 ou 8 cœurs |
| Grande (plus de 1 million de lignes de code) | 64 Go ou plus | 8 cœurs |

Pour toutes les tailles de codebase, nous vous recommandons d’utiliser un disque SSD avec 14 Go ou plus d’espace disque. Il doit y avoir suffisamment d’espace disque pour extraire et générer votre code ainsi que de l’espace supplémentaire pour les données produites par {% data variables.product.prodname_codeql %}.
