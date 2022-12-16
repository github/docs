---
title: À propos des hooks de pré-réception
intro: 'Les *hooks de pré-réception* sont des scripts qui s’exécutent sur l’appliance {% data variables.product.prodname_ghe_server %} dont vous pouvez vous servir pour implémenter des contrôles de qualité.'
redirect_from:
  - /enterprise/admin/developer-workflow/about-pre-receive-hooks
  - /enterprise/admin/policies/about-pre-receive-hooks
  - /admin/policies/about-pre-receive-hooks
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
ms.openlocfilehash: a62d5391f9733c4a79ea8ba5d5f8f0d821d47d5c
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145102854'
---
Quand une poussée (push) est effectuée, chaque script s’exécute dans un environnement isolé et peut effectuer des vérifications sur le contenu de la poussée. Les scripts déclenchent l’acceptation de la poussée si l’état de sortie est 0 ou son rejet si l’état de sortie n’est pas zéro.

## Scénarios d’usage
Utilisez des hooks de pré-réception pour répondre aux règles métier, appliquer la conformité réglementaire et prévenir certaines erreurs courantes.

Exemples de la façon dont vous pouvez utiliser des hooks de pré-réception :

- Exiger que les messages de commit suivent un modèle ou un format spécifique, par exemple qu’ils incluent un numéro de ticket valide ou respectent une certaine longueur
- Verrouiller une branche ou un dépôt en rejetant toutes les poussées
- Empêcher l’ajout de données sensibles au dépôt en bloquant des mots clés, des modèles ou des types de fichiers
- Empêcher l’auteur d’une demande de tirage (pull request) de fusionner ses propres modifications

## Impact sur les performances et les workflows
L’impact sur les développeurs et leurs workflows peut être important et doit être considéré avec attention. Les hooks de pré-réception basés sur des besoins métier et implémentés de manière réfléchie sont ceux qui offrent le plus d’avantages à l’organisation dans son ensemble.

Les hooks de pré-réception peuvent avoir des effets inattendus sur les performances de {% data variables.product.product_location %} et doivent être implémentés et vérifiés attentivement.
