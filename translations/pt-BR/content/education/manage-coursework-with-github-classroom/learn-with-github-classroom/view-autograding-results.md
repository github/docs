---
title: Visualizar resultados da avaliação automática
intro: Você pode ver os resultados da avaliação automática dentro do repositório para sua atividade.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
  - /education/manage-coursework-with-github-classroom/view-autograding-results
ms.openlocfilehash: ea4de9b0122e39f5ecb4d960d4f0ee8c94ba2ee5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095686'
---
## Sobre a avaliação automática

Seu professor pode configurar testes que verificam automaticamente seu trabalho quando você faz push para um repositório de atividades em {% data variables.product.product_location %}.

Se você é um aluno e seu instrutor configurou a avaliação automática para sua atribuição em {% data variables.product.prodname_classroom %}, você encontrará os resultados dos testes de avaliação automática no repositório da atividade. Se todos os testes tiverem êxito para um commit, você verá um sinal verde. Se qualquer teste falhar em um commit, você verá um X vermelho. Você pode ver os registros detalhados clicando na marca verde ou X vermelho.

## Visualizar resultados de avaliação automática para um repositório de atividade

{% data variables.product.prodname_classroom %} usa {% data variables.product.prodname_actions %} para executar testes de avaliação automática. Para obter mais informações sobre como ver os logs para um teste de avaliação automática, confira "[Como usar os logs de execução de fluxo de trabalho](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".

A guia **Ações** mostra o histórico completo das execuções de teste.

![Guia "Ações" com "Todos os fluxos de trabalho" selecionado](/assets/images/help/classroom/autograding-actions-tab.png)

Você pode clicar em uma execução de teste específico para revisar o resultado do registro, como erros de compilação e falhas de teste.

![Os logs dos resultados do teste do "Fluxo de trabalho de avaliação automática do {% data variables.product.prodname_classroom %}" no {% data variables.product.prodname_actions %} ](/assets/images/help/classroom/autograding-actions-logs.png)

## Leitura adicional

- "[Sobre as verificações de status](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
