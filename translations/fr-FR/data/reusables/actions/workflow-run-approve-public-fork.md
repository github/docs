---
ms.openlocfilehash: 59e70683dad451b603d2d34286976bfaa8d1d9c8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881057"
---
Tout le monde peut dupliquer (fork) un dépôt public, puis envoyer une demande de tirage (pull request) qui propose des changements à apporter aux workflows {% data variables.product.prodname_actions %} de ce dépôt. Bien que les workflows issus de duplications n’aient pas accès aux données sensibles comme les secrets, ils peuvent embêter les chargés de maintenance s’ils sont modifiés à des fins abusives.

Pour éviter cela, les workflows sur les demandes de tirage dans les dépôts publics de certains contributeurs extérieurs ne s’exécutent pas automatiquement et ont d’abord besoin d’être approuvés. Par défaut, tout nouveau contributeur nécessite une approbation pour exécuter des workflows.

{% note %}

**Remarque :** Les workflows déclenchés par des événements `pull_request_target` sont exécutés dans le contexte de la branche de base. Étant donné que la branche de base est considérée comme approuvée, les workflows déclenchés par ces événements s’exécutent toujours, quels que soient les paramètres d’approbation.

{% endnote %}
