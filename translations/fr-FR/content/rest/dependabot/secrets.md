---
title: Dependabot secrets
shortTitle: Secrets
intro: 'Avec l’API de secrets {% data variables.product.prodname_dependabot %}, vous pouvez gérer et contrôler les secrets {% data variables.product.prodname_dependabot %} pour une organisation ou un dépôt.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 0cabee9ace44e75d8fcd2ce81aa9d7583b39e59d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882286'
---
## À propos de l’API {% data variables.product.prodname_dependabot %} secrets

L’API {% data variables.product.prodname_dependabot %} secrets vous permet de créer, mettre à jour, supprimer et récupérer des informations sur les secrets chiffrés. {% data reusables.actions.about-secrets %} Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot) ».

{% data reusables.actions.actions-authentication %} Les {% data variables.product.prodname_github_apps %} doivent avoir l’autorisation `dependabot_secrets` pour utiliser cette API. Les utilisateurs authentifiés doivent avoir un accès collaborateur sur un dépôt pour créer, mettre à jour ou lire des secrets.
