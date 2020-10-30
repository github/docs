---
title: Gerenciar a execução de fluxos de trabalho
intro: 'Você pode visualizar o status e os resultados de cada etapa no seu fluxo de trabalho, cancelar um fluxo de trabalho pendente, visualizar os minutos de execução do trabalho faturável, depurar e reexecutar o fluxo de trabalho com falha, pesquisar e fazer o download de registros e de artefatos.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/viewing-your-repository-s-workflows
  - /articles/viewing-your-repositorys-workflows
  - /articles/managing-a-workflow-run
  - /github/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/automating-your-workflow-with-github-actions/managing-a-workflow-run
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre o gerenciamento de fluxos de trabalho

Na página de execução de fluxo de trabalho, você pode verificar se a execução está em andamento ou foi concluída. Se a execução estiver em andamento, será possível cancelá-la. Você deve estar conectado a uma conta {% data variables.product.prodname_dotcom %} para visualizar as informações da execução do seu fluxo de trabalho, incluindo os repositórios públicos. Para obter mais informações, consulte "[Permissões de acesso no GitHub](/articles/access-permissions-on-github)".

Se a execução estiver concluída, será possível ver se o resultado teve êxito, se houve falha, se foi cancelado ou se ficou neutro. Em caso de falha, você poderá exibir e pesquisar os logs de criação para diagnosticar a falha e executar o fluxo de trabalho novamente. Você também pode visualizar os minutos da execução do trabalho faturável ou fazer o download dos registros e criar artefatos.

 ![Imagem de execução do fluxo de trabalho anotado](/assets/images/help/repository/annotated-workflow.png)

O {% data variables.product.prodname_actions %} usa a API de Verificação para mostrar os status, resultados e logs de um fluxo de trabalho. O {% data variables.product.prodname_dotcom %} cria um novo conjunto de verificações para cada execução de fluxo de trabalho. O conjunto de verificações contêm uma execução de verificação para cada trabalho no fluxo de trabalho, e cada trabalho inclui etapas. As ações do {% data variables.product.prodname_actions %} são executadas como etapas no fluxo de trabalho. Para obter mais informações sobre a API de verificações, consulte "[Verificações](/v3/checks/)".

{% data reusables.github-actions.invalid-workflow-files %}

### Exibir o histórico do fluxo de trabalho

Você pode exibir todos os trabalhos em uma execução de fluxo de trabalho e todas as etapas de um trabalho. Para obter mais informações, consulte "[Conceitos básicos para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions#job)". {% data reusables.repositories.permissions-statement-read %}

Além das etapas configuradas no arquivo de fluxo de trabalho, cada trabalho também inclui tarefas adicionais para iniciar e concluir a execução do trabalho. Essas etapas estão registradas na execução do fluxo de trabalho como "Configurar trabalho" e "Concluir trabalho".

Para trabalhos executados em executores hospedados no {% data variables.product.prodname_dotcom %}, "Configurar trabalho" registra os detalhes do ambiente virtual do executor e inclui um link para a lista de ferramentas pré-instaladas que estavam presentes na máquina do executor.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
6. Para executar o fluxo de trabalho novamente em caso de falha, use o menu suspenso **Re-run checks** (Executar verificações novamente) no canto superior direito e selecione **Re-run all checks** (Executar todas as verificações novamente). ![Menu suspenso Re-run checks (Executar verificações novamente)](/assets/images/help/repository/rerun-checks-drop-down.png)

### Cancelar a execução do fluxo de trabalho

Ao cancelar a execução de um fluxo de trabalho, o {% data variables.product.prodname_dotcom %} cancela todos os trabalhos e as etapas que integram esse fluxo de trabalho. {% data reusables.repositories.permissions-statement-write %}

Ao cancelar a execução do fluxo de trabalho, você poderá estar executando outro software que utiliza recursos relacionados à execução do fluxo de trabalho. Para ajudar você a liberar recursos relacionados à execução do fluxo de trabalho, pode ser útil entender as etapas que {% data variables.product.prodname_dotcom %} realiza para cancelar a execução de um fluxo de trabalho. Para obter mais informações, consulte "[Etapas que o {% data variables.product.prodname_dotcom %} realiza para cancelar uma execução do fluxo de trabalho](#steps-github-takes-to-cancel-a-workflow-run)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. No canto superior direito do fluxo de trabalho, clique em **Cancel check suite** (Cancelar conjunto de verificações). ![Botão Cancel check suite (Cancelar conjunto de verificações)](/assets/images/help/repository/cancel-check-suite.png)
1. Após clicar em **Cancelar o conjunto de verificações**.

#### Etapas que o {% data variables.product.prodname_dotcom %} realiza para cancelar uma execução de fluxo de trabalho

1. Para cancelar a execução do fluxo de trabalho, o servidor avalia novamente as condições `if` para todas as tarefas em execução atualmente. Se a condição for avaliada como `verdadeira`, o trabalho não será cancelado. Por exemplo, a condição `if: always()` seria avaliada como verdadeira e o trabalho continuaria a ser executado. Quando não há nenhuma condição, isso é equivalente à condição `if: success()`, que só é executado se a etapa anterior foi concluída com sucesso.
2. Para trabalhos que devem ser cancelados, o servidor envia uma mensagem de cancelamento para todas as máquinas dos executores com trabalhos que precisam ser cancelados.
3. Para os trabalhos que continuam a ser executados, o servidor avalia as condições `if` para as etapas não concluídas. Se a condição for avaliada como `verdadeiro`, a etapa continuará sendo executada.
4. Para etapas que precisam ser canceladas, a máquina do executor envia `SIGINT/Ctrl-C` para o processo de entrada da etapa (`nó` para ação javascript, `docker` para ação de contêiner e `bash/cmd/pwd` quando estiver usando `execução` em uma etapa). Se o processo não sair em 7500 ms, o executor enviará `SIGTERM/Ctrl-Break` para o processo. Em seguida, espere 2500 ms para que o processo saia. Se o processo ainda estiver em execução, o corredor finalizará abruptamente a árvore do processo.
5. Após o tempo-limite de cancelamento de 5 minutos, o servidor irá forçar o encerramento de todos os trabalhos e etapas que não terminarem de ser executadas ou não concluírem o processo de cancelamento.

### Eliminar execução de um fluxo de trabalho

Você pode excluir uma execução do fluxo de trabalho que foi concluída ou que tem mais de 2 semanas. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. Para excluir a execução de um fluxo de trabalho, use o menu suspenso {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir execução de fluxo de trabalho**.

    ![Eliminar execução de um fluxo de trabalho](/assets/images/help/settings/workflow-delete-run.png)
1. Revise a solicitação de confirmação e clique em **Sim, excluir permanentemente esta execução do fluxo de trabalho**.

    ![Excluir uma confirmação de execução de fluxo de trabalho](/assets/images/help/settings/workflow-delete-run-confirmation.png)

{% if currentVersion == "free-pro-team@latest" %}

### Visualizar os minutos de execução do trabalho faturável

Você pode visualizar o tempo de execução de um trabalho, incluindo os minutos faturáveis que um trabalho acumulou.

Os minutos de execução de um trabalho faturável são exibidos para trabalhos executados em repositórios privados que usam executores hospedados em {% data variables.product.prodname_dotcom %}. Não há minutos faturáveis ao usar {% data variables.product.prodname_actions %} nos repositórios públicos ou para trabalhos executados em executores auto-hospedados.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. No resumo do trabalho, clique em **Informações sobre tempo faturável e execução**. ![Link com informações sobre o tempo faturável e execução](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **Observação:**O tempo faturável exibido não inclui arredondamentos ou multiplicadores de minutos. Para visualizar o uso total de {% data variables.product.prodname_actions %}, incluindo arredondamento e multiplicadores de minutos, consulte "[Visualizando o seu uso {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage)".

   {% endnote %}

{% endif %}

### Exibir logs para diagnosticar falhas

Se houver falha na execução do fluxo de trabalho, você poderá ver qual etapa causou a falha e revisar os logs de criação da etapa com falha para resolver os problemas. Também é possível ver a duração da execução de cada etapa. Além disso, você pode copiar um permalink para determinada linha no arquivo de log a fim de compartilhar com a sua equipe. {% data reusables.repositories.permissions-statement-read %}

O {% data variables.product.product_name %} armazena registros de criação e artefatos completos por 90 dias.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
6. Para expandir o log de uma etapa com falha, clique na etapa. ![Nome da etapa com falha](/assets/images/help/repository/failed-check-step.png)
7. Para obter um link para uma linha específica nos logs, clique no número da linha da etapa. Você pode copiar o link da barra de endereços do navegador da web. ![Botão para copiar link](/assets/images/help/repository/copy-link-button.png)

### Pesquisar logs

É possível pesquisar os logs de criação em determinadas etapas. Na pesquisa dos logs, somente as etapas expandidas são incluídas nos resultados. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
6. Para expandir cada etapa que você pretende incluir na pesquisa, clique na etapa.![Nome da etapa](/assets/images/help/repository/failed-check-step.png)
7. No canto superior direito da saída do log, na caixa **Search logs** (Pesquisar logs), digite um termo de consulta. ![Caixa de pesquisa de logs](/assets/images/help/repository/search-log-box.png)

### Fazer download dos registros

Você pode fazer o download dos arquivos de registro da execução do seu fluxo de trabalho. Você também pode fazer o download dos artefatos de um fluxo de trabalho. Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)". {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
5. Para baixar os logs, use o menu suspenso **Download logs** (Baixar logs) e selecione os logs que você pretende baixar. ![Menu suspenso Download logs (Baixar logs)](/assets/images/help/repository/download-logs-drop-down.png)

### Excluir registros

Você pode excluir arquivos de registro da execução do seu fluxo de trabalho. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
5. Para excluir os arquivos de registro, clique no botão **Excluir todos os registros** e revise a instrução de confirmação. ![Delete all logs](/assets/images/help/repository/delete-all-logs.png)Após excluir os registros, o botão **Excluir todos os registros** será removido para indicar que não restaram arquivos de registro na execução do fluxo de trabalho.

### Habilitar log de depuração

Se os logs do fluxo de trabalho não fornecerem detalhes suficientes para diagnosticar o motivo pelo qual um fluxo de trabalho, um trabalho ou uma etapa não está funcionando como esperado, habilite o log de depuração adicional.

Esses registros adicionais são habilitados pela definição dos segredos no repositório que contém o fluxo de trabalho. Portanto, aplicam-se os mesmos requisitos de permissão:

- {% data reusables.github-actions.permissions-statement-secrets-organization %}
- {% data reusables.github-actions.permissions-statement-secrets-repository %}
- {% data reusables.github-actions.permissions-statement-secrets-api %}

Para obter mais informações sobre segredos de configuração, consulte "[Criar e usar segredos criptografados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

#### Habilitar log de diagnóstico do runner

O log de diagnóstico do executor fornece arquivos de log adicionais que contêm informações sobre como um executor está executando um trabalho. Dois arquivos de log extras foram adicionados ao arquivo de log:

* O log de processo do runner, que inclui informações sobre a coordenação e a configuração de runners para executar trabalhos.
* O log de processo do worker, que registra em log a execução de um trabalho.

1. Para habilitar o log de diagnóstico do runner, defina a seguinte chave secreta no repositório que contém o fluxo de trabalho: `ACTIONS_RUNNER_DEBUG` como `true`.

1. Para baixar os logs de diagnóstico do runner, baixe o arquivo de log da execução de fluxo de trabalho. Os logs de diagnóstico do runner ficam na pasta `runner-diagnostic-logs`. Para obter mais informações sobre o download de logs, consulte "[Fazer download de registros](#downloading-logs)".

#### Habilitar log de depuração da etapa

O log de depuração da etapa aumenta o detalhamento dos logs de um trabalho durante e depois da execução dele.

1. Para habilitar o log de diagnóstico da etapa, defina a seguinte chave secreta no repositório que contém o fluxo de trabalho: `ACTIONS_STEP_DEBUG` como `true`.

1. Após a configuração da chave secreta, mais eventos de depuração são exibidos nos logs da etapa. Para obter mais informações, consulte ["Exibir logs para diagnosticar falhas"](#viewing-logs-to-diagnose-failures).


### Leia mais

- [Sobre o {% data variables.product.prodname_actions %}](/articles/about-github-actions)
- [Configurar fluxo de trabalho](/articles/configuring-a-workflow)
- [Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)
- [Eventos que acionam fluxos de trabalho](/articles/events-that-trigger-workflows)
- "[Ambientes virtuais para executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)"
