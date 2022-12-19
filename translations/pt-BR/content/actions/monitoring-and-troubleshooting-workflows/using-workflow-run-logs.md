---
title: Usando logs de execução de fluxo de trabalho
intro: 'Você pode visualizar, pesquisar e fazer download dos logs para cada trabalho em uma execução de fluxo de trabalho.'
redirect_from:
  - /actions/managing-workflow-runs/using-workflow-run-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ef8d0a7f1708b8c23705a04496b3d78737aec450
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147521519'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Na página de execução de fluxo de trabalho, você pode verificar se a execução está em andamento ou foi concluída. Você deve estar conectado a uma conta {% data variables.product.prodname_dotcom %} para visualizar as informações da execução do seu fluxo de trabalho, incluindo os repositórios públicos. Para obter mais informações, confira "[Permissões de acesso no GitHub](/articles/access-permissions-on-github)".

Se a execução estiver concluída, será possível ver se o resultado teve êxito, se houve falha, se foi cancelado ou se ficou neutro. Em caso de falha, você poderá exibir e pesquisar os logs de criação para diagnosticar a falha e executar o fluxo de trabalho novamente. Você também pode visualizar os minutos da execução do trabalho faturável ou fazer o download dos registros e criar artefatos.

O {% data variables.product.prodname_actions %} usa a API de Verificação para mostrar os status, resultados e logs de um fluxo de trabalho. O {% data variables.product.prodname_dotcom %} cria um novo conjunto de verificações para cada execução de fluxo de trabalho. O conjunto de verificações contêm uma execução de verificação para cada trabalho no fluxo de trabalho, e cada trabalho inclui etapas. As ações do {% data variables.product.prodname_actions %} são executadas como etapas no fluxo de trabalho. Para obter mais informações sobre a API de Verificações, confira "[Verificações](/rest/reference/checks)".

{% data reusables.actions.invalid-workflow-files %}

## Exibir logs para diagnosticar falhas

Se houver falha na execução do fluxo de trabalho, você poderá ver qual etapa causou a falha e revisar os logs de criação da etapa com falha para resolver os problemas. Também é possível ver a duração da execução de cada etapa. Além disso, você pode copiar um permalink para determinada linha no arquivo de log a fim de compartilhar com a sua equipe. {% data reusables.repositories.permissions-statement-read %}

Além das etapas configuradas no arquivo do fluxo de trabalho, {% data variables.product.prodname_dotcom %} acrescenta duas etapas adicionais a cada trabalho para configurar e concluir a execução do trabalho. Estas etapas estão registradas na execução do fluxo de trabalho com os nomes "Configurar trabalho" e "Concluir trabalho".

Para trabalhos executados em executores hospedados no {% data variables.product.prodname_dotcom %}, "Configurar trabalho" registra os detalhes da imagem do executor e inclui um link para a lista de ferramentas pré-instaladas que estavam presentes na máquina do executor.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %} {% data reusables.repositories.view-failed-job-results %} {% data reusables.repositories.view-specific-line %}

## Pesquisar logs

É possível pesquisar os logs de criação em determinadas etapas. Na pesquisa dos logs, somente as etapas expandidas são incluídas nos resultados. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. No canto superior direito da saída do log, na caixa de pesquisa **Pesquisar logs**, digite uma consulta de pesquisa.
![Caixa de pesquisa de logs](/assets/images/help/repository/search-log-box-updated-2.png)

## Fazer download dos registros

Você pode fazer o download dos arquivos de registro da execução do seu fluxo de trabalho. Você também pode fazer o download dos artefatos de um fluxo de trabalho. Para obter mais informações, confira "[Como persistir dados de fluxo de trabalho usando artefatos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)". {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. No canto superior direito, clique em {% octicon "gear" aria-label="The gear icon" %} e selecione **Baixar arquivo de log**.
  
  ![Menu suspenso Download logs (Baixar logs)](/assets/images/help/repository/download-logs-drop-down-updated-2.png)
  

  {% ifversion re-run-jobs %}

  {% note %}

  **Observação**: quando você baixa o arquivo de log de um fluxo de trabalho que foi parcialmente executado novamente, o arquivo só inclui os trabalhos que foram executados de novo. Para obter um conjunto completo de registro para trabalhos foram executados de um fluxo de trabalho, você deverá fazer o download dos arquivos de registro para as tentativas de execução anteriores que executaram os outros trabalhos.

  {% endnote %}

  {% endif %}

## Excluir registros

Você pode excluir arquivos de registro da execução do seu fluxo de trabalho. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. No canto superior direito, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
    
    ![Ícone horizontal do kebab](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)
    
2. Para excluir os arquivos de log, clique no botão **Excluir todos os logs** e revise o prompt de confirmação. 
  
  ![Excluir todos os registros](/assets/images/help/repository/delete-all-logs-updated-2.png)
  
Após a exclusão dos logs, o botão **Excluir todos os logs** é removido para indicar que nenhum arquivo de log permanece na execução de fluxo de trabalho.

## Visualizar registros com {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-learn-more %}

Para ver o log de um trabalho específico, use o subcomando `run view`. Substitua `run-id` pela ID da execução para a qual deseja ver os logs. {% data variables.product.prodname_cli %} retorna um menu interativo para você escolher um trabalho a partir da execução. Se você não especificar `run-id`, a {% data variables.product.prodname_cli %} retornará um menu interativo para você escolher uma execução recente e outro menu interativo para você escolher um trabalho da execução.

```shell
gh run view <em>run-id</em> --log
```

Use também o sinalizador `--job` para especificar uma ID de trabalho. Substitua `job-id` pela ID do trabalho para o qual você deseja ver os logs.

```shell
gh run view --job <em>job-id</em> --log
```

Use `grep` para pesquisa no log. Por exemplo, este comando retornará todas as entradas do log que contêm a palavra `error`.

```shell
gh run view --job <em>job-id</em> --log | grep error
```

Para filtrar os logs para ver todas as etapas com falha, use `--log-failed` em vez de `--log`.

```shell
gh run view --job <em>job-id</em> --log-failed
```
