---
title: Visualizar o tempo de execução do trabalho
intro: 'Você pode visualizar o tempo de execução de um trabalho, incluindo os minutos faturáveis que um trabalho acumulou.'
redirect_from:
  - /actions/managing-workflow-runs/viewing-job-execution-time
versions:
  fpt: '*'
  ghec: '*'
shortTitle: View job execution time
ms.openlocfilehash: 8293c36519dd727942d7cec0e1c1a2fa430ce112
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145096103'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Os minutos de execução de um trabalho faturável são exibidos para trabalhos executados em repositórios privados que usam executores hospedados em {% data variables.product.prodname_dotcom %} e são arredondados para o próximo minuto. Não há minutos faturáveis ao usar {% data variables.product.prodname_actions %} nos repositórios públicos ou para trabalhos executados em executores auto-hospedados.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. No resumo do trabalho, você pode ver o tempo de execução do trabalho. Para ver os detalhes sobre o tempo de execução do trabalho faturável, clique no tempo abaixo do **Tempo faturável**.
   ![Link com informações sobre o tempo faturável e a execução](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}
   
   **Observação:** o tempo faturável exibido não inclui multiplicadores de minutos. Para ver o uso total do {% data variables.product.prodname_actions %}, incluindo multiplicadores de minutos, confira "[Exibindo seu uso do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage)".
   
   {% endnote %}
