---
title: Executando scripts antes ou depois de um trabalho
intro: 'Os scripts podem executar automaticamente em um executor auto-hospedado, diretamente antes ou depois de um trabalho.'
versions:
  feature: job-hooks-for-runners
type: tutorial
miniTocMaxHeadingLevel: 3
shortTitle: Executar um script antes ou depois de um trabalho
---

{% note %}

**Observação**: Este recurso está atualmente na versão beta e está sujeito a alterações.

{% endnote %}

## Sobre scripts de pré-trabalho e pós-trabalho

Você pode executar scripts automaticamente em um executor auto-hospedado, antes de um trabalho ser executado, ou depois que um trabalho terminar de ser executado. Você pode usar esses scripts para apoiar os requisitos do trabalho, como construir ou derrubar um ambiente de executor ou limpar diretórios. Você também pode usar esses scripts para rastrear a telemetria de como seus executores são usados.

Os scripts personalizados são automaticamente acionados quando uma variável de ambiente específica é definida no executor; a variável de ambiente deve conter o caminho absoluto para o script. Para obter mais informações, consulte[Acionando os scripts](#triggering-the-scripts)" abaixo.

As linguagens de script a seguir são compatíveis:

- **Bash**: Usa `bash` e pode retornar para `sh`. É executado, executando `-e {pathtofile}`.
- **PowerShell**: Usa `pwsh` e pode retornar para `powershell`. Executa `-command \". '{pathtofile}'\"`.

## Escrevendo os scripts

Seus scripts personalizados podem usar as seguintes funcionalidades:

- **Variáveis de ambiente**: Os scripts têm acesso às variáveis de ambiente padrão. A carga completa do evento de webhook pode ser encontrada em `GITHUB_EVENT_PATH`. Para obter mais informações, consulte "[Variáveis de ambiente](/actions/learn-github-actions/environment-variables#default-environment-variables)".
- **Comandos do fluxo de trabalho**: Os scripts podem usar comandos de fluxo de trabalho. Para obter mais informações, consulte ["Comandos do fluxo de trabalho para {% data variables.product.prodname_actions %}"](/actions/using-workflows/workflow-commands-for-github-actions), com exceção de `save-state` e `set-output`, que não são compatíveis com esses scripts. Os scripts também podem usar arquivos de ambiente. Para obter mais informações, consulte [Arquivos de ambiente](/actions/using-workflows/workflow-commands-for-github-actions#environment-files).

{% note %}

**Observação**: Evite usar os seus scripts para gerar informações confidenciais para o console, como qualquer pessoa com acesso de leitura ao repositório pode ser capaz de ver a saída nos logs da interface do usuário.

{% endnote %}

### Gerenciando códigos de saída

Para scripts de pré-trabalho, o código de saída `0` indica que o script foi concluído com sucesso, e o trabalho então continuará sendo executado. Se houver qualquer outro código de saída, o trabalho não será executado e será marcado como falha. Para ver os resultados do seus scripts de pré-trabalho, verifique os logs para as entradas de `Configurar executor`. Para obter mais informações sobre a verificação dos logs, consulte "[Visualizando os logs para diagnosticar as falhas](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".

A configuração [`continue-on-error`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) não é compatível com o uso desses scripts.

## Acionando os scripts

Os scripts personalizados devem estar localizados no executor, mas não devem ser armazenados no diretório do aplicativo `actions-runner`. Os scripts são executados no contexto de segurança da conta de serviço que está executando o serviço do executor.

{% note %}

**Observação**: Os scripts acionados são processados de forma síncrona para que bloqueem a execução do trabalho enquanto estão sendo executados.

{% endnote %}

Os scripts são executados automaticamente quando o executor tem as seguintes variáveis de ambiente, que contêm um caminho absoluto para o script:
- `ACTIONS_RUNNER_HOOK_JOB_STARTED`: O script definido nesta variável de ambiente é acionado quando um trabalho foi atribuído a um executor, mas antes do trabalho começar a ser executado.
- `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`: O script definido nesta variável de ambiente é acionado após a conclusão do processamento do trabalho.

Para definir essas variáveis de ambiente, você pode adicioná-las ao sistema operacional, ou adicioná-las a um arquivo denominado `.env` dentro do diretório do aplicativo do executor auto-hospedado. Por exemplo, a entrada `.env` a seguir fará com que o executor execute automaticamente um script denominado `cleanup_script.sh` antes da execução de cada trabalho:

```bash
ACTIONS_RUNNER_HOOK_JOB_STARTED=/cleanup_script.sh
```

## Solução de Problemas


### Sem configuração de tempo limite

Não há configuração de tempo-limite disponível para scripts executados por `ACTIONS_RUNNER_HOOK_JOB_STARTED` ou `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`. Como resultado, você pode considerar adicionar tempo limite de manipulação ao seu script.

### Revisando o log de execução do fluxo de trabalho

Para confirmar se seus scripts estão sendo executados, você pode revisar os logs para esse trabalho. Os scripts serão listados em etapas separadas para `Configurar executor` ou `Concluir executor`, dependendo de qual variável de ambiente esteja acionando o script. Para obter mais informações sobre a verificação dos logs, consulte "[Visualizando os logs para diagnosticar as falhas](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".
