---
title: Cancelar um fluxo de trabalho
intro: 'Você pode cancelar a execução de um fluxo de trabalho em andamento. Ao cancelar a execução de um fluxo de trabalho, o {% data variables.product.prodname_dotcom %} cancela todos os trabalhos e as etapas que integram esse fluxo de trabalho.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: f8bf0d06f5e0e37cb120b22a3bd6da39b51b78a9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083664'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

## Cancelar a execução do fluxo de trabalho

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %}
1. Na lista de execuções do fluxo de trabalho, clique no nome da execução `queued` ou `in progress` que deseja cancelar.
![Nome da execução de fluxo de trabalho](/assets/images/help/repository/in-progress-run.png)
1. No canto superior direito do fluxo de trabalho, clique em **Cancelar fluxo de trabalho**.
![Botão Cancelar conjunto de verificações](/assets/images/help/repository/cancel-check-suite-updated.png)

## Etapas que o {% data variables.product.prodname_dotcom %} realiza para cancelar uma execução de fluxo de trabalho

Ao cancelar a execução do fluxo de trabalho, você poderá estar executando outro software que utiliza recursos relacionados à execução do fluxo de trabalho. Para ajudar você a liberar recursos relacionados à execução do fluxo de trabalho, pode ser útil entender as etapas que {% data variables.product.prodname_dotcom %} realiza para cancelar a execução de um fluxo de trabalho.

1. Para cancelar a execução de fluxo de trabalho, o servidor avalia novamente as condições `if` para todas as tarefas em execução atualmente. Se a condição for avaliada como `true`, o trabalho não será cancelado. Por exemplo, a condição `if: always()` será avaliada como true e o trabalho continuará sendo executado. Quando não há nenhuma condição, isso é equivalente à condição `if: success()`, que só é executada se a etapa anterior foi concluída com sucesso.
2. Para trabalhos que devem ser cancelados, o servidor envia uma mensagem de cancelamento para todas as máquinas dos executores com trabalhos que precisam ser cancelados.
3. Para os trabalhos que continuam sendo executados, o servidor avalia as condições `if` para as etapas não concluídas. Se a condição for avaliada como `true`, a etapa continuará sendo executada.
4. Para etapas que precisam ser canceladas, o computador do executor envia `SIGINT/Ctrl-C` para o processo de entrada da etapa (`node` para a ação do JavaScript, `docker` para a ação de contêiner e `bash/cmd/pwd` quando `run` é usado em uma etapa). Se o processo não for encerrado em até 7.500 ms, o executor enviará `SIGTERM/Ctrl-Break` ao processo e aguardará 2.500 ms para que o processo seja encerrado. Se o processo ainda estiver em execução, o corredor finalizará abruptamente a árvore do processo.
5. Após o tempo-limite de cancelamento de 5 minutos, o servidor irá forçar o encerramento de todos os trabalhos e etapas que não terminarem de ser executadas ou não concluírem o processo de cancelamento.
