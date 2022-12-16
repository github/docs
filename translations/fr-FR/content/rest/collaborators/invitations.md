---
title: Invitations à un dépôt
allowTitleToDifferFromFilename: true
shortTitle: Invitations
intro: L’API Invitations à un dépôt vous permet d’afficher et de gérer les invitations à collaborer sur un dépôt.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 8096f49ce586f3f56a686b99a688a6894653d9b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065793'
---
## À propos de l’API Invitations à un dépôt

L’API Invitations à un dépôt vous permet d’afficher et de gérer les invitations à collaborer sur un dépôt. Les utilisateurs invités (ou des services externes pour le compte d’utilisateurs invités) peuvent choisir d’accepter ou de refuser les invitations.

Pour ajouter un utilisateur en tant que collaborateur, utilisez plutôt l’API Collaborateurs. Pour plus d’informations, consultez « [Ajouter un collaborateur de dépôt](/rest/collaborators/collaborators#add-a-repository-collaborator) ».

Notez que l’[étendue OAuth](/developers/apps/scopes-for-oauth-apps) `repo:invite` accorde un accès ciblé aux invitations **sans** accorder également l’accès au code du référentiel, tandis que l’étendue `repo` accorde une autorisation au code ainsi qu’aux invitations.
