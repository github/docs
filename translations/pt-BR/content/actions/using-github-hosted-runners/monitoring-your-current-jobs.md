---
title: Monitorando seus trabalhos atuais
intro: 'Monitore como os executores hospedados em {% data variables.product.prodname_dotcom %} processam trabalhos na sua organização ou empresa e identifique quaisquer restrições relacionadas.'
versions:
  feature: github-runner-dashboard
shortTitle: Monitoring your current jobs
ms.openlocfilehash: 86f1551e1908106126516b489c436922b15ce60d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145096064'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visualização de trabalhos ativos na sua organização ou empresa

Você pode obter uma lista de todos os trabalhos atualmente em execução em executores hospedados em {% data variables.product.prodname_dotcom %} na sua organização ou empresa.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. Revise a seção "Trabalhos Ativos", que contém uma lista com todos os trabalhos em execução atualmente nos executores hospedados em {% data variables.product.prodname_dotcom %}.

  ![Captura de tela da lista de trabalhos ativos](/assets/images/help/settings/actions-runner-active-jobs.png)

## Visualizando tarefas em fila na sua organização ou empresa

Os executores hospedados em {% data variables.product.prodname_dotcom %} permitem que você execute trabalhos simultâneos, e o número máximo de trabalhos simultâneos irá variar de acordo com o seu plano. Se você atingir o número máximo de trabalhos simultâneos, tdos os novos trabalhos começarão a entrar na fila. Para saber mais sobre o número de trabalhos simultâneos disponíveis para seu plano, confira "[Limites de uso, cobrança e administração](/actions/learn-github-actions/usage-limits-billing-and-administration)".

O procedimento seguinte demonstra como verificar o número máximo de trabalhos simultâneos que pode ser executado.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. Revise a seção "Uso de todos os trabalhos", que lista o número de trabalhos ativos e o número máximo de trabalhos que você pode executar. Neste exemplo, os trabalhos `9` estão ficando sem o número máximo de `180`.
  ![Captura de tela do número máximo de trabalhos para uma conta](/assets/images/help/settings/github-hosted-runners-max-jobs.png)
