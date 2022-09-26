---
title: Visualizar el tiempo de ejecución de un job
intro: 'Puedes ver el tiempo de ejecución de un job, incluyendo los minutos facturables que este job ha acumulado.'
redirect_from:
  - /actions/managing-workflow-runs/viewing-job-execution-time
versions:
  fpt: '*'
  ghec: '*'
shortTitle: View job execution time
ms.openlocfilehash: 8293c36519dd727942d7cec0e1c1a2fa430ce112
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121218'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Los minutos de ejecución facturables para un job solo se muestran en aquellos jobs que se ejecutan en repositorios privados que utilizan ejecutores hospedados en {% data variables.product.prodname_dotcom %} y se redondean al siguiente minuto. No hay minutos facturables cuando se utiliza {% data variables.product.prodname_actions %} en repositorios públicos o para trabajos que se ejecutan en ejecutores auto-hospedados.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Debajo del resumen del job, puedes ver el tiempo de ejecución del mismo. Para ver los detalles sobre el tiempo facturable de la ejecución de trabajos, haga clic en el tiempo en **Tiempo facturable**.
   ![Vínculo para los detalles de tiempo facturable y de ejecución](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}
   
   **Nota:** El tiempo facturable que se muestra no incluye ningún multiplicador de minutos. Para ver el uso total de {% data variables.product.prodname_actions %}, incluidos los multiplicadores de minutos, vea "[Visualización del uso de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage)".
   
   {% endnote %}
