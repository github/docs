---
title: Groupes d’exécuteurs auto-hébergés
intro: L’API Groupes d’exécuteurs auto-hébergés vous permet de gérer des groupes d’exécuteurs auto-hébergés.
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ca08d05414764250a11dc94bac763f5aa56060be
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147064369'
---
## À propos de l’API Groupes d’exécuteurs auto-hébergés

L’API Groupes d’exécuteurs auto-hébergés vous permet de gérer des groupes d’exécuteurs auto-hébergés. Pour plus d’informations, consultez « [Gestion de l’accès aux exécuteurs auto-hébergés en utilisant des groupes](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups) ».

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} doivent avoir l’autorisation `administration` pour des dépôts, ou l’autorisation `organization_self_hosted_runners` pour des organisations. Les utilisateurs authentifiés doivent disposer d’un accès administrateur aux dépôts ou aux organisations, ou à l’étendue `manage_runners:enterprise` pour que les entreprises puissent utiliser cette API.
