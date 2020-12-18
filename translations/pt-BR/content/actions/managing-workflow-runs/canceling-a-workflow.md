---
title: Cancelar um fluxo de trabalho
intro: 'Você pode cancelar a execução de um fluxo de trabalho em andamento. Ao cancelar a execução de um fluxo de trabalho, o {% data variables.product.prodname_dotcom %} cancela todos os trabalhos e as etapas que integram esse fluxo de trabalho.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

### Cancelar a execução do fluxo de trabalho

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. Na lista de execuções do fluxo de trabalho, clique no nome da execução em estado `queued` ou `em progresso` que você deseja cancelar. ![Nome da execução do fluxo de trabalho](/assets/images/help/repository/in-progress-run.png)
1. No canto superior direito do fluxo de trabalho, clique em **Cancelar fluxo de trabalho**.
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
 ![Botão Cancel check suite (Cancelar conjunto de verificações)](/assets/images/help/repository/cancel-check-suite-updated.png)
{% else %}
 ![Botão Cancel check suite (Cancelar conjunto de verificações)](/assets/images/help/repository/cancel-check-suite.png)
{% endif %}

### Etapas que o {% data variables.product.prodname_dotcom %} realiza para cancelar uma execução de fluxo de trabalho

Ao cancelar a execução do fluxo de trabalho, você poderá estar executando outro software que utiliza recursos relacionados à execução do fluxo de trabalho. Para ajudar você a liberar recursos relacionados à execução do fluxo de trabalho, pode ser útil entender as etapas que {% data variables.product.prodname_dotcom %} realiza para cancelar a execução de um fluxo de trabalho.

1. Para cancelar a execução do fluxo de trabalho, o servidor avalia novamente as condições `if` para todas as tarefas em execução atualmente. Se a condição for avaliada como `verdadeira`, o trabalho não será cancelado. Por exemplo, a condição `if: always()` seria avaliada como verdadeira e o trabalho continuaria a ser executado. Quando não há nenhuma condição, isso é equivalente à condição `if: success()`, que só é executado se a etapa anterior foi concluída com sucesso.
2. Para trabalhos que devem ser cancelados, o servidor envia uma mensagem de cancelamento para todas as máquinas dos executores com trabalhos que precisam ser cancelados.
3. Para os trabalhos que continuam a ser executados, o servidor avalia as condições `if` para as etapas não concluídas. Se a condição for avaliada como `verdadeiro`, a etapa continuará sendo executada.
4. Para etapas que precisam ser canceladas, a máquina do executor envia `SIGINT/Ctrl-C` para o processo de entrada da etapa (`nó` para ação javascript, `docker` para ação de contêiner e `bash/cmd/pwd` quando estiver usando `execução` em uma etapa). Se o processo não sair em 7500 ms, o executor enviará `SIGTERM/Ctrl-Break` para o processo. Em seguida, espere 2500 ms para que o processo saia. Se o processo ainda estiver em execução, o corredor finalizará abruptamente a árvore do processo.
5. Após o tempo-limite de cancelamento de 5 minutos, o servidor irá forçar o encerramento de todos os trabalhos e etapas que não terminarem de ser executadas ou não concluírem o processo de cancelamento.
