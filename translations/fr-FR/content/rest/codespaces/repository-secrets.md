---
title: Secrets du référentiel Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: 'L’API de secrets du dépôt Codespaces permet à un utilisateur de créer, de lister et de supprimer des secrets (comme des jetons d’accès pour les services cloud) pour les dépôts auxquels l’utilisateur a accès dans un codespace.'
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 95b3dfaafef598bf05f55d697716eb1036093697
ms.sourcegitcommit: 9490533fcb7b7d5c16f8fea082a06ee66dd5db8f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148165600'
---
## À propos de l’API de secrets du référentiel Codespaces

L’API de secrets du référentiel Codespaces permet à un utilisateur de créer, de répertorier et de supprimer des secrets (comme des jetons d’accès pour les services cloud) pour les référentiels auxquels l’utilisateur a accès. Ces secrets sont mis à la disposition de l’espace de code au moment de l’exécution. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour vos espaces de code](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) ».
