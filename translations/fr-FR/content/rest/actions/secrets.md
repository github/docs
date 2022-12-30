---
title: Secrets GitHub Actions
allowTitleToDifferFromFilename: true
shortTitle: Secrets
intro: 'L’API de secrets {% data variables.product.prodname_actions %} vous permet de créer, de mettre à jour, de supprimer et de récupérer des informations sur les secrets chiffrés qui peuvent être utilisés dans les workflows {% data variables.product.prodname_actions %}.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: bd72024abd61feb6b69e3efb09d1ddc2b8f27a23
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061984'
---
## À propos de l’API Secrets

L’API de secrets {% data variables.product.prodname_actions %} vous permet de créer, de mettre à jour, de supprimer et de récupérer des informations sur les secrets chiffrés qui peuvent être utilisés dans les workflows {% data variables.product.prodname_actions %}. {% data reusables.actions.about-secrets %} Pour plus d’informations, consultez « [Création et utilisation de secrets chiffrés](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} doit avoir l’autorisation `secrets` d’utiliser cette API. Les utilisateurs authentifiés doivent avoir un accès collaborateur sur un dépôt pour créer, mettre à jour ou lire des secrets.
