---
title: Variáveis de ambiente
intro: '{% data variables.product.prodname_dotcom %} define as variáveis do ambiente para cada execução do fluxo de trabalho {% data variables.product.prodname_actions %}. Você também pode definir variáveis de ambiente personalizadas no seu arquivo do fluxo de trabalho.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre as variáveis de ambiente

Você pode usar variáveis de ambiente para armazenar informações que você deseja referenciar no seu fluxo de trabalho. Você faz referência a variáveis de ambiente em uma etapa do fluxo de trabalho ou uma ação, e as variáveis são interpoladas na máquina do executor que executa seu fluxo de trabalho. Os comandos que são executados em ações ou etapas do fluxo de trabalho podem criar, ler e modificar variáveis de ambiente.

Você pode definir as suas próprias variáveis de ambiente personalizadas, você pode usar as variáveis de ambiente padrão que {% data variables.product.prodname_dotcom %} define automaticamente, e você também pode usar qualquer outra variável de ambiente que seja definida no ambiente de trabalho no executor. As variáveis de ambiente diferenciam entre maiúsculas e minúsculas.

Para definir uma variável de ambiente personalizada, você deverá defini-la no arquivo do fluxo de trabalho. O escopo de uma variável de ambiente personalizada está limitado ao elemento em que ele está definido. Você pode definir variáveis de ambiente cujos escopos são definidos para:

* Todo o fluxo de trabalho, usando [`env`](/actions/using-workflows/workflow-syntax-for-github-actions#env) no nível superior do arquivo de fluxo de trabalho.
* O conteúdo de um trabalho dentro de um fluxo de trabalho, usando [`jobs.<job_id>.env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv).
* Uma etapa específica em um trabalho, usando [`jobs.<job_id>.steps[*].env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv).

{% raw %}
```yaml
name: Greeting on variable day

on:
  workflow_dispatch

env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

O exemplo acima mostra três variáveis de ambiente personalizadas sendo usadas em um comando de `eco`: `$DAY_OF_WEEK`, `$Greeting` e  `$First_Name`. Os valores e os escopos para essas variáveis de ambiente são definidos no fluxo de trabalho, no trabalho e na etapa respectivamente.

Porque interpolação de variável de ambiente é feita depois que um trabalho do fluxo de trabalho é enviado para a máquina de um executor, você deve usar a sintaxe apropriada para o shell que é usado no executor. Neste exemplo, o fluxo de trabalho especifica `ubuntu-latest`. Por padrão, os executores do Linux usam o shell de bash. Portanto, você deve usar a sintaxe `$NAME`. Se o fluxo de trabalho especificou um executor do Windows, você usaria a sintaxe do PowerShell, `$env:NAME`. Para obter mais informações sobre shells, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsshell)".

{% note %}

**Observação**: Você pode listar todo o conjunto de variáveis de ambiente que estão disponíveis para uma etapa de fluxo de trabalho usando <span style="white-space: nowrap;">`run: env`</span> em uma etapa e depois examinando a saída para a etapa.

{% endnote %}

## Usando contextos para acessar valores da variável de ambiente

Além das variáveis de ambiente, {% data variables.product.prodname_actions %} também permite que você defina e leia valores que usam contextos. As variáveis e os contextos do ambiente são destinados a serem usados em diferentes pontos do fluxo de trabalho.

As variáveis de ambiente são sempre interpoladas no executor de máquina virtual. No entanto, as partes de um fluxo de trabalho são processadas por {% data variables.product.prodname_actions %} e não são enviadas para o executor. Não é possível usar variáveis de ambiente nessas partes de um arquivo de fluxo de trabalho. Em vez disso, pode-se utilizar contextos. Por exemplo, uma condicional `se`, que determina se um trabalho ou etapa é enviado para o executor, sempre será processada por {% data variables.product.prodname_actions %}. Você pode usar um contexto na afirmação de uma condicional `se` para acessar o valor de uma variável de ambiente.

{% raw %}
```yaml
env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Monday' }}
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

Nessa modificação do primeiro exemplo, introduzimos uma condicional `se`. A etapa do fluxo de trabalho agora só é executada se `DAYS_OF_WEEK` estiver definido como "Segunda-feira". Nós acessamos este valor a partir da afirmação condicional `se` usando o contexto [`env`](/actions/learn-github-actions/contexts#env-context).

{% note %}

**Observação**: De modo geral, os contextos são indicados usando o sinal de dólar e chaves, como {% raw %}`${{ context.property }}`{% endraw %}. Em uma condicional `se`, os {% raw %}`${{` e `}}`{% endraw %} são opcionais, mas se você usá-los, eles deverão incluir toda a instrução de comparação, conforme mostrado acima.

{% endnote %}

Você usará comumente o contexto `env` ou `github` para acessar os valores das variáveis de ambiente em partes do fluxo de trabalho que são processadas antes que os trabalhos sejam enviadas para os executores.


| Contexto | Caso de uso                                                                                        | Exemplo                                                                                   |
| -------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `env`    | Variáveis de ambiente personalizado de referência definidas no fluxo de trabalho.                  | <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span>   |
| `github` | Informações de referência sobre a execução do fluxo de trabalho e o evento que acionou a execução. | <span style="white-space: nowrap;">{% raw %}`${{ github.repository }}`{% endraw %}</span> |



Há muitos outros contextos que você pode usar para uma série de finalidades nos seus fluxos de trabalho. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts)". Para obter mais informações sobre onde você pode usar contextos específicos dentro de um fluxo de trabalho, consulte "[Disponibilidade de Contexto](/actions/learn-github-actions/contexts#context-availability)".

### Outros tipos de variáveis

Na maioria dos lugares em um fluxo de trabalho, os únicos tipos de variáveis que você pode usar são variáveis de ambiente, como `$MY_VARIABLE`, ou a propriedade de contexto equivalente como, por exemplo, <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span>. Exceções:

* Entradas para os eventos `workflow_call` e `workflow_despatch` que permitem que você passe valores para um fluxo de trabalho. Para obter mais informações, consulte [`on.workflow_call.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputs) e [`on.workflow_dispatch.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_dispatchinputs).
* Saídas de trabalhos, que permitem passar valores entre trabalhos em um fluxo de trabalho. Para obter mais informações, consulte [`trabalhos.<job_id>.outputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs).
* As variáveis em uma expressão de formato, que permite que você substitua partes de uma string. Para obter mais informações, consulte [`formato`](/actions/learn-github-actions/expressions#format).

## Convenções de nomenclatura para variáveis de ambiente

Ao definir uma variável de ambiente personalizada, você não pode usar nenhum dos nomes das variáveis de ambiente padrão. Para obter uma lista completa destas, consulte "[variáveis de ambiente padrão](#default-environment-variables)" abaixo. Se você tentar substituir o valor de uma dessas variáveis de ambiente padrão, a atribuição será ignorada.

Qualquer variável de ambiente nova que você definir e apontar para um local no sistema de arquivos deve ter um sufixo `_PATH`. As variáveis de ambiente padrão `HOME`, `GITHUB_ENV` e `GITHUB_WORKSPACE` são exceções a essa convenção.

## Variáveis padrão de ambiente

As variáveis de ambiente padrão que os conjuntos de {% data variables.product.prodname_dotcom %} estão disponíveis para cada etapa de um fluxo de trabalho.

É altamente recomendável que as ações usem as variáveis do ambiente para acessar o sistema do arquivo em vez de usar os caminhos do arquivo com codificação rígida. {% data variables.product.prodname_dotcom %} define as variáveis de ambiente para ações a serem usadas em todos os ambientes executores.

| Variável de ambiente       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CI`                       | Definido sempre como `verdadeiro`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `GITHUB_ACTION`            | O nome da ação atualmente em execução ou o [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) de uma etapa. Por exemplo, para uma ação, `__repo-owner_name-of-action-repo`.<br><br>{% data variables.product.prodname_dotcom %} remove caracteres especiais e usa o nome `__executar` quando a etapa atual executa um script sem um `id`. Se você usar o mesmo script ou ação mais de uma vez no mesmo trabalho, o nome incluirá um sufixo que consiste do número de sequência precedido por um sublinhado. Por exemplo, o primeiro script que você executar terá o nome `__run` e o segundo script será denominado `__run_2`. Da mesma forma, a segunda invocação de `actions/checkout` será `actionscheckout2`. |
| `GITHUB_ACTION_PATH`       | O caminho onde uma ação está localizada. Esta propriedade só é compatível com ações compostas. Você pode usar este caminho para acessar arquivos localizados no mesmo repositório da ação. Por exemplo, `/home/runner/work/_actions/repo-owner/name-of-action-repo/v1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `GITHUB_ACTION_REPOSITORY` | Para uma etpa que executa uma ação, este é o nome do proprietário e do repositório da ação. Por exemplo, `actions/checkout`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `GITHUB_ACTIONS`           | Definido sempre como `verdadeiro` quando {% data variables.product.prodname_actions %} estiver executando o fluxo de trabalho. Você pode usar esta variável para diferenciar quando os testes estão sendo executados localmente ou por {% data variables.product.prodname_actions %}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `GITHUB_ACTOR`             | Nome da pessoa ou aplicativo que iniciou o fluxo de trabalho. Por exemplo, `octocat`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `GITHUB_API_URL`           | Retorna a URL da API. Por exemplo: `{% data variables.product.api_url_code %}`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `GITHUB_BASE_REF`          | O nome do ref da base ou o branch de destino do pull request na execução de um fluxo de trabalho. Isso só é definido quando o evento que aciona a execução de um fluxo de trabalho é `pull_request` ou `pull_request_target`. Por exemplo, `principal`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `GITHUB_ENV`               | Caminho no executor para o arquivo que define variáveis de ambiente dos comandos do fluxo de trabalho. Este arquivo é único para a etapa atual e alterações para cada etapa de um trabalho. Por exemplo, `/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a`. Para obter mais informações, consulte "[Comandos do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable)".                                                                                                                                                                                                                                     |
| `GITHUB_EVENT_NAME`        | Nome do evento que acionou a execução do fluxo de trabalho. Por exemplo, `workflow_despatch`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `GITHUB_EVENT_PATH`        | O caminho para o arquivo no executor que contém a carga completa do webhook do evento. Por exemplo, `/github/workflow/event.json`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `GITHUB_GRAPHQL_URL`       | Retorna a URL API do GraphQL. Por exemplo: `{% data variables.product.graphql_url_code %}`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `GITHUB_HEAD_REF`          | A ref principal ou o branch da fonte do pull request na execução de um fluxo de trabalho. Esta propriedade só é definida quando o evento que aciona a execução de um fluxo de trabalho for `pull_request` ou `pull_request_target`. Por exemplo, `feature-branch-1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `GITHUB_JOB`               | O [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) do trabalho atual. Por exemplo, `greeting_job`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `GITHUB_PATH`              | O caminho no executor para o arquivo que define as variáveis do sistema `PATH` a partir de comandos do fluxo de trabalho. Este arquivo é único para a etapa atual e alterações para cada etapa de um trabalho.  Por exemplo, `/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5`. Para obter mais informações, consulte "[Comandos do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path)."                                                                                                                                                                                                                           |
| `GITHUB_REF`               | {% data reusables.actions.ref-description %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5338 %}
| `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} For example, `feature-branch-1`.| | `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} | | `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %}
{%- endif %}
| `GITHUB_REPOSITORY` | O nome do proprietário e do repositório. Por exemplo, `octocat/Hello-World`. | | `GITHUB_REPOSITORY_OWNER` | O nome do proprietário do repositório. Por exemplo, `octocat`. | | `GITHUB_RETENTION_DAYS` | O número de dias que os registros da execução do fluxo de trabalho e os artefatos são mantidos. Por exemplo, `90`. | | `GITHUB_RUN_ATTEMPT` | Um número único para cada tentativa da execução de um fluxo de trabalho particular em um repositório. Este número começa em 1 para a primeira tentativa de execução do fluxo de trabalho e aumenta a cada nova execução. Por exemplo, `3`. | | `GITHUB_RUN_ID` | {% data reusables.actions.run_id_description %} Por exemplo, `1658821493`. | | `GITHUB_RUN_NUMBER` | {% data reusables.actions.run_number_description %} Por exemplo, `3`. | | `GITHUB_SERVER_URL`| A URL do servidor de {% data variables.product.product_name %} server. Por exemplo: `https://{% data variables.product.product_url %}`. | `GITHUB_SHA` | O SHA do commit que acionou o fluxo de trabalho. O valor do commit deste SHA depende do evento que acionou o fluxo de trabalho. Para obter mais informações, consulte [Eventos que acionam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows). Por exemplo, `ffac537e6cbbf934b08745a378932722df287a53`. |
{%- ifversion actions-job-summaries %}
| `GITHUB_STEP_SUMMARY` | O caminho no executor para o arquivo que contém resumos de trabalho dos comandos de fluxo de trabalho. Este arquivo é único para a etapa atual e alterações para cada etapa de um trabalho. Por exemplo, `/home/rob/runner/_layout/_work/_temp/_runner_file_commands/step_summary_1cb22d7f-5663-41a8-9ffc-13472605c76c`. Para obter mais informações, consulte "[Comandos do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary)." |
{%- endif %}
| `GITHUB_WORKFLOW` | O nome do fluxo de trabalho. Por exemplo, `My test workflow`. Se o fluxo de trabalho não determinar um `nome`, o valor desta variável será o caminho completo do arquivo do fluxo de trabalho no repositório. | | `GITHUB_WORKSPACE` | O diretório de trabalho padrão no executor para as etapas e para a localidade padrão do seu repositório ao usar a ação [`checkout`](https://github.com/actions/checkout). Por exemplo, `/home/runner/work/my-repo-name/my-repo-name`. |
{%- ifversion actions-runner-arch-envvars %}
| `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %}
{%- endif %}
| `RUNNER_NAME` | {% data reusables.actions.runner-name-description %} Por exemplo, `Hosted Agent` | | `RUNNER_OS` | {% data reusables.actions.runner-os-description %} Por exemplo, `Windows` | | `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %} Por exemplo, `D:\a\_temp` |
{% ifversion not ghae %}| `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %} For example, `C:\hostedtoolcache\windows` |{% endif %}

{% note %}

**Observação:**

* Se você precisar usar o URL de uma execução do fluxo de trabalho em um trabalho, você poderá combinar estas variáveis de ambiente: `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`
* A maioria das variáveis de ambiente padrão tem uma propriedade de contexto correspondente e igualmente nomeada. Por exemplo, o valor da variável ambiente `GITHUB_REF` pode ser lido durante o processamento do fluxo de trabalho usando a propriedade do contexto {% raw %}`${{ github.ref }}`{% endraw %}.

{% endnote %}

## Detectando o sistema operacional

Você pode escrever um único arquivo de fluxo de trabalho que pode ser usado para sistemas operacionais diferentes usando a variável de ambiente padrão `RUNNER_OS` e a propriedade de contexto correspondente <span style="white-space: nowrap;">{% raw %}`${{ runner.os }}`{% endraw %}</span>. Por exemplo, o seguinte fluxo de trabalho poderia ser executado com sucesso se você alterasse o sistema operacional de `macos-latest` para `windows-latest` sem precisar alterar a sintaxe das variáveis de ambiente, que difere dependendo do shell que está sendo usado pelo executor.

{% raw %}
```yaml
jobs:
  if-Windows-else:
    runs-on: macos-latest
    steps:
      - name: condition 1
        if: runner.os == 'Windows'
        run: echo "The operating system on the runner is $env:RUNNER_OS."
      - name: condition 2
        if: runner.os != 'Windows'
        run: echo "The operating system on the runner is not Windows, it's $RUNNER_OS."
```
{% endraw %}

Neste exemplo, as duas afirmações `se` verificam a propriedade `os` do contexto `executor` para determinar o sistema operacional do executor. As condicionais `se` são processadas por {% data variables.product.prodname_actions %}, e apenas as etapas onde a verificação resolve como `verdadeiro` são enviadas para o executor. Aqui, uma das verificações será sempre `verdadeira` e a outra `falsa`. Portanto, apenas uma dessas etapas será enviada para o executor. Assim que o trabalho for enviado para o executor, a etapa será executada e a variável de ambiente no comando `echo` será interpolada usando a sintaxe apropriada (`$env:NAME` para o PowerShell no Windows e `$NAME` para o bash e sh no Linux e MacOS). Neste exemplo, a instrução `runs-on: macos-latest` significa que a segunda etapa será executada.

## Passando valores entre etapas e trabalhos em um fluxo de trabalho

 Se você gerar um valor em uma etapa de um trabalho, você poderá usar o valor em etapas subsequentes do mesmo trabalho, atribuindo o valor para uma variável de ambiente existente ou nova e, em seguida, gravando-o no arquivo de ambiente `GITHUB_ENV`. O arquivo de ambiente pode ser usado diretamente por uma ação ou de um comando shell no arquivo do fluxo de trabalho usando a palavra-chave `executar`. Para obter mais informações, consulte "[Comandos do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)".

 Se você deseja passar um valor de uma etapa de um trabalho em um fluxo de trabalho para uma etapa de outro trabalho no fluxo de trabalho, você poderá definir o valor como uma saída de trabalho. Em seguida, você poderá fazer referência a saída desse trabalho a partir de uma etapa em outro trabalho. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)". 
 
