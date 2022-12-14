---
title: Affichage de la durée d’exécution des travaux
intro: 'Vous pouvez voir le temps d’exécution d’un travail, notamment les minutes facturables accumulées par un travail.'
redirect_from:
  - /actions/managing-workflow-runs/viewing-job-execution-time
versions:
  fpt: '*'
  ghec: '*'
shortTitle: View job execution time
ms.openlocfilehash: 8293c36519dd727942d7cec0e1c1a2fa430ce112
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107205'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Les minutes d’exécution de travaux facturables sont affichées uniquement pour les travaux exécutés sur des dépôts privés qui utilisent des exécuteurs hébergés par {% data variables.product.prodname_dotcom %} et sont arrondies à la minute suivante. Il n’y a pas de minutes facturables lors de l’utilisation de {% data variables.product.prodname_actions %} dans les dépôts publics ou pour les travaux exécutés sur des exécuteurs auto-hébergés.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Sous le résumé du travail, vous pouvez afficher la durée d’exécution du travail. Pour afficher des détails sur la durée d’exécution de travaux facturable, cliquez sur la durée sous **Durée à facturer**.
   ![Lien des détails sur l’exécution et la durée à facturer](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}
   
   **Remarque :** La durée à facturer indiquée n’inclut aucun multiplicateur de minute. Pour afficher votre utilisation totale de {% data variables.product.prodname_actions %}, y compris les multiplicateurs de minute, consultez « [Affichage de votre utilisation de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage) ».
   
   {% endnote %}
