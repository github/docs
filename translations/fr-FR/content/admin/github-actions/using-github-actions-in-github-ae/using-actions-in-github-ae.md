---
title: Utilisation d’actions dans GitHub AE
intro: '{% data variables.product.prodname_ghe_managed %} comprend la plupart des actions créées par {% data variables.product.prodname_dotcom %}.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/using-actions-in-github-ae
shortTitle: Use actions
ms.openlocfilehash: a8439a08f73667b7d048b31e2c9eb3968ba2e957
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106781'
---
Les workflows {% data variables.product.prodname_actions %} peuvent utiliser des _actions_, qui sont des tâches individuelles que vous pouvez combiner pour créer des travaux et personnaliser vos workflows. Vous pouvez soit créer vos propres actions, soit utiliser et personnaliser celles qui sont partagées par la communauté {% data variables.product.prodname_dotcom %}.

## Action groupées officielles dans {% data variables.product.prodname_ghe_managed %}

La plupart des actions officielles créées par {% data variables.product.prodname_dotcom %} sont automatiquement groupées avec {% data variables.product.prodname_ghe_managed %} et sont capturées à un instant T depuis {% data variables.product.prodname_marketplace %}. Quand votre instance {% data variables.product.prodname_ghe_managed %} est mise à jour, les actions officielles groupées sont également mises à jour.

Parmi les actions officielles groupées figurent `actions/checkout`, `actions/upload-artifact`, `actions/download-artifact`, `actions/labeler` et diverses actions `actions/setup-`. Pour savoir quelles actions officielles sont incluses, accédez aux organisations suivantes dans votre instance : 
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

Les fichiers de chaque action sont conservés dans un dépôt dans les organisations `actions` et `github`. Chaque dépôt d’actions comprend les étiquettes, les branches et les SHA de commit nécessaires dont peuvent se servir vos workflows pour référencer une action.
