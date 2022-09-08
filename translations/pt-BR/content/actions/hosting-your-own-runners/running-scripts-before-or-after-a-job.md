---
title: Como executar scripts antes ou depois de um trabalho
intro: 'Os scripts podem ser executado automaticamente em um executor autohospedado, diretamente antes ou depois de um trabalho.'
versions:
  feature: job-hooks-for-runners
type: tutorial
miniTocMaxHeadingLevel: 3
shortTitle: Run a script before or after a job
ms.openlocfilehash: 11b2f63cd70c5276f0626a6016593553d1bedd0c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067647'
---
{% note %}

**Observação**: atualmente, esse recurso está em versão beta e sujeito a alterações.

{% endnote %}

## Sobre os scripts pré e pós-trabalho

Você pode executar scripts automaticamente em um executor auto-hospedado, antes da execução de um trabalho ou após a conclusão da execução dele. Use esses scripts para dar suporte aos requisitos do trabalho, como a criação ou a destruição de um ambiente de executor ou a limpeza de diretórios. Use também esses scripts para acompanhar a telemetria de como os executores são usados.

Os scripts personalizados são disparados automaticamente quando uma variável de ambiente específica é definida no executor: a variável de ambiente precisa conter o caminho absoluto para o script. Para obter mais informações, confira "[Como disparar os scripts](#triggering-the-scripts)" abaixo.

Há suporte para as seguintes linguagens de script:

- **Bash**: usa `bash` e pode usar `sh` como alternativa. É executado com a execução de `-e {pathtofile}`.
- **PowerShell**: usa `pwsh` e pode usar `powershell` como alternativa. É executado com a execução de `-command \". '{pathtofile}'\"`.

## Como escrever os scripts

Seus scripts personalizados podem usar os seguintes recursos:

- **Variáveis de ambiente**: os scripts têm acesso às variáveis de ambiente padrão. O conteúdo completo do evento de webhook pode ser encontrado em `GITHUB_EVENT_PATH`. Para obter mais informações, confira "[Variáveis de ambiente](/actions/learn-github-actions/environment-variables#default-environment-variables)".
- **Comandos de fluxo de trabalho**: os scripts podem usar comandos de fluxo de trabalho. Para obter mais informações, confira ["Comandos de fluxo de trabalho do {% data variables.product.prodname_actions %}"](/actions/using-workflows/workflow-commands-for-github-actions), com exceção de `save-state` e `set-output`, que não são compatíveis nesses scripts. Os scripts também podem usar arquivos de ambiente. Para obter mais informações, confira [Arquivos de ambiente](/actions/using-workflows/workflow-commands-for-github-actions#environment-files).

{% note %}

**Observação**: evite usar os scripts para gerar informações confidenciais para o console, pois qualquer pessoa com acesso de leitura no repositório poderá ver a saída nos logs da interface do usuário.

{% endnote %}

### Como tratar os códigos de saída

Para scripts de pré-trabalho, o código de saída `0` indica que o script foi concluído com sucesso e o trabalho continuará sendo executado. Se houver outro código de saída, o trabalho não será executado e será marcado como com falha. Para ver os resultados dos scripts de pré-trabalho, verifique se há entradas `Set up runner` nos logs. Para obter mais informações sobre como verificar os logs, confira "[Como ver os logs para diagnosticar falhas](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".

Não há suporte para a configuração [`continue-on-error`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) para uso por esses scripts.

## Como disparar os scripts

Os scripts personalizados precisam estar localizados no executor, mas não precisam ser armazenados no diretório do aplicativo `actions-runner`. Os scripts são executados no contexto de segurança da conta de serviço que executa o serviço de executor.

{% note %}

**Observação**: os scripts disparados são processados de maneira síncrona, ou seja, bloquearão a execução do trabalho enquanto estiverem em execução.

{% endnote %}

Os scripts são executados automaticamente quando o executor tem as seguintes variáveis de ambiente que contêm um caminho absoluto para o script:
- `ACTIONS_RUNNER_HOOK_JOB_STARTED`: o script definido nessa variável de ambiente é disparado quando um trabalho é atribuído a um executor, mas antes do trabalho começar a ser executado.
- `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`: o script definido nessa variável de ambiente é disparado após o processamento do trabalho.

Para definir essas variáveis de ambiente, você pode adicioná-las ao sistema operacional ou adicioná-las a um arquivo chamado `.env` no diretório do aplicativo do executor auto-hospedado. Por exemplo, a seguinte entrada `.env` fará com que o executor execute automaticamente um script chamado `cleanup_script.sh` antes da execução de cada trabalho:

```bash
ACTIONS_RUNNER_HOOK_JOB_STARTED=/cleanup_script.sh
```

## Solução de problemas


### Sem configuração de tempo limite

Atualmente, não há nenhuma configuração de tempo limite disponível para os scripts executados por `ACTIONS_RUNNER_HOOK_JOB_STARTED` ou `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`. Como resultado, você pode considerar a adição de tratamento do tempo limite ao script.

### Como examinar o log de execução do fluxo de trabalho

Para confirmar se os scripts estão em execução, você pode revisar os logs desse trabalho. Os scripts serão listados em etapas separadas para `Set up runner` ou `Complete runner`, dependendo do variável de ambiente que dispara o script. Para obter mais informações sobre como verificar os logs, confira "[Como ver os logs para diagnosticar falhas](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".
