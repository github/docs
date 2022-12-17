---
title: Secrets du référentiel Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: Utilisez l’API REST pour gérer les secrets des dépôts auxquels l’utilisateur a accès dans un codespace.
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f38e196db7ab0601a28612cf13c363f18181342a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192728'
---
## À propos des secrets de dépôt {% data variables.product.prodname_codespaces %}

Vous pouvez créer, lister et supprimer des secrets (comme les jetons d’accès pour les services cloud) pour les dépôts auxquels l’utilisateur a accès. Ces secrets sont mis à la disposition de l’espace de code au moment de l’exécution. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour vos espaces de code](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) ».
