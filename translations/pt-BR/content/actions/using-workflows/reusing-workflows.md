---
title: Reutilizar fluxos de trabalho
shortTitle: Reuse workflows
intro: Aprenda a evitar a duplicação ao criar um fluxo de trabalho reutilizando os fluxos de trabalho existentes.
redirect_from:
  - /actions/learn-github-actions/reusing-workflows
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: 2053b2bfd653a1f6633ab5d568e5b2fdb75d7335
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191923'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.reusable-workflows-enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral

Em vez de copiar e colar de um fluxo de trabalho para outro, você pode tornar os fluxos de trabalho reutilizáveis. Você e qualquer pessoa com acesso ao fluxo de trabalho reutilizável pode chamar o fluxo de trabalho reutilizável a partir de outro fluxo de trabalho.

A reutilização dosfluxos de trabalho evita duplicação. Isso torna os fluxos de trabalho mais fáceis de manter e permite que você crie novos fluxos de trabalho mais rapidamente, desenvolvendo sobre o trabalho dos outros, assim como você faz com ações. A reutilização do fluxo de trabalho também promove práticas recomendadas, ajudando você a usar os fluxos de trabalho bem projetados, já testados e com a eficiência comprovada. Sua organização pode criar uma biblioteca de fluxos de trabalho reutilizáveis que pode ser mantida centralmente.

O diagrama abaixo mostra uma execução de fluxo de trabalho em andamento que usa um fluxo de trabalho reutilizável.

* Depois que cada um dos três trabalhos de build à esquerda do diagrama for concluído com êxito, um trabalho dependente chamado "Implantar" será executado.
* O trabalho "Implantar" chama um fluxo de trabalho reutilizável que contém três trabalhos: "Treinamento", "Revisão" e "Produção".
* A tarefa de implantação "Produção" só é executada após a tarefa de "Treinamento" ter sido concluída com sucesso.
* Quando um trabalho é direcionado a um ambiente, a execução do fluxo de trabalho exibe uma barra de progresso que mostra o número de etapas no trabalho. No diagrama abaixo, o trabalho "Produção" contém 8 etapas, com a etapa 6 sendo processada no momento.
* O uso um fluxo de trabalho reutilizável para executar trabalhos de implantação permite que você execute esses trabalhos para cada compilação sem duplicar o código nos fluxos de trabalho.

![Diagrama de um fluxo de trabalho reutilizável para implantação](/assets/images/help/images/reusable-workflows-ci-cd.png)

Um fluxo de trabalho que usa outro fluxo de trabalho é referido como um fluxo de trabalho "de chamada". O fluxo de trabalho reutilizável é um fluxo de trabalho "chamado". Um fluxo de trabalho de chamada pode usar vários fluxos de trabalho chamados. Cada fluxo de trabalho chamado é referenciado em uma única linha. O resultado é que o arquivo de fluxo de trabalho de chamadas pode conter apenas algumas linhas de YAML mas pode executar um grande número de tarefas quando for executado. Quando um fluxo de trabalho é reutilizado, todo o fluxo de trabalho chamado é usado, como se fosse parte do fluxo de trabalho de chamada.

Se você reutilizar um fluxo de trabalho de um repositório diferente, todas as ações no fluxo de trabalho chamado são como se fizessem parte do fluxo de trabalho de chamada. Por exemplo, se o fluxo de trabalho chamado usar `actions/checkout`, a ação fará check-out do conteúdo do repositório que hospeda o fluxo de trabalho do chamador, não o fluxo de trabalho chamado.

Quando um fluxo de trabalho reutilizável é disparado por um fluxo de trabalho do chamador, o contexto `github` é sempre associado ao fluxo de trabalho do chamador. O fluxo de trabalho chamado recebe automaticamente o acesso a `github.token` e a `secrets.GITHUB_TOKEN`. Para obter mais informações sobre o contexto `github`, confira "[Sintaxe de contexto e de expressão do GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

Você pode visualizar os fluxos de trabalho referenciados nos seus fluxos de trabalho de {% data variables.product.prodname_actions %} como dependências no gráfico de dependências do repositório que contém seus fluxos de trabalho. Para obter mais informações, confira “[Sobre o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”.

### Fluxos de trabalho e fluxos de trabalho iniciais reutilizáveis

Os fluxos de trabalho iniciais permitem que todos na sua organização que tenham permissão para criar fluxos de trabalho façam isso com mais rapidez e facilidade. Quando as pessoas criam um novo fluxo de trabalho, eles podem escolher um fluxo de trabalho inicial e uma parte ou todo o trabalho de escrita do fluxo de trabalho será feito para essas pessoas. Dentro de um fluxo de trabalho inicial, você também pode fazer referência a fluxos de trabalho reutilizáveis para facilitar a utilização de código de fluxo de trabalho gerenciado centralmente. Se você usar uma confirmação SHA ao fazer referência ao fluxo de trabalho reutilizável, você poderá garantir que todos que reutilizarem esse fluxo de trabalho sempre usarão o mesmo código YAML. No entanto, se você fizer referência a um fluxo de trabalho reutilizável por uma tag ou branch, certifique-se de que você poderá confiar nessa versão do fluxo de trabalho. Para obter mais informações, confira "[Proteção de segurança do {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows)".

Para obter mais informações, confira "[Como criar fluxos de trabalho iniciais para sua organização](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)".

## Acesso a fluxos de trabalho reutilizáveis

Um fluxo de trabalho reutilizável pode ser usado por outro fluxo de trabalho se {% ifversion ghes or ghec or ghae %}qualquer{% else %}ou{% endif %} dos pontos a seguir for verdadeiro:

* Ambos os fluxos de trabalho estão no mesmo repositório.
* O fluxo de trabalho chamado é armazenado em um repositório público do {% ifversion actions-workflow-policy %}, e a sua {% ifversion ghec %}empresa{% else %}organização{% endif %} permite que você use fluxos de trabalho reutilizáveis públicos{% endif %}.{% ifversion ghes or ghec or ghae %}
* O fluxo de trabalho chamado é armazenado em um repositório interno e as configurações para esse repositório permitem que ele seja acessado. Para obter mais informações, confira {% ifversion internal-actions %}"[Como compartilhar ações e fluxos de trabalho com a sua empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise){% else %}"[Como gerenciar as configurações do {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository){% endif %}".{% endif %}

## Usando executores

{% ifversion fpt or ghes or ghec %}

### Usar executores hospedados no GitHub

A atribuição de executores hospedados em {% data variables.product.prodname_dotcom %} é sempre avaliada usando apenas o contexto do chamador. A cobrança para executores hospedados em {% data variables.product.prodname_dotcom %} está sempre associada ao chamador. O fluxo de trabalho de chamadas não pode usar executores hospedados em {% data variables.product.prodname_dotcom %} a partir do repositório chamado. Para obter mais informações, confira "[Sobre os executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".

### Usando executores auto-hospedados

{% endif %}

Fluxos de trabalho chamados que são propriedade do mesmo usuário ou organização{% ifversion ghes or ghec or ghae %} ou empresa{% endif %}, uma vez que o fluxo de trabalho de chamadas pode acessar runners auto-hospedados no contexto do invocador. Isso significa que um fluxo de trabalho chamado pode acessar executores auto-hospedados que estão:
* No repositório de chamada
* Na organização{% ifversion ghes or ghec or ghae %} ou empresa {% endif %}do repositório de chamadas, desde que o executor tenha sido disponibilizado para o repositório de chamada

## Limitações

{% ifversion nested-reusable-workflow %}
* Você pode conectar até quatro níveis de fluxos de trabalho. Para obter mais informações, confira "[Aninhar fluxos de trabalho reutilizáveis](#nesting-reusable-workflows)".
{% else %}
* Os fluxos de trabalho reutilizáveis não podem chamar outros fluxos de trabalho reutilizáveis.
{% endif %}
* Os fluxos de trabalho armazenados dentro de um repositório privado só podem ser usados por fluxos de trabalho dentro do mesmo repositório.
* As variáveis de ambiente definidas em um contexto `env` definido no nível do fluxo de trabalho do chamador não são propagadas para o fluxo de trabalho chamado. Para obter mais informações sobre o contexto `env`, confira "[Sintaxe de contexto e expressão para o GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)".{% ifversion actions-reusable-workflow-matrix %}{% else %}
* Não há suporte para a propriedade `strategy` em nenhum trabalho que chame um fluxo de trabalho reutilizável.{% endif %}

## Criar um fluxo de trabalho reutilizável

Os fluxos de trabalho reutilizáveis são arquivos formatados com YAML, muito semelhantes a qualquer outro arquivo de fluxo de trabalho. Assim como acontece com outros arquivos de fluxo de trabalho, você localiza fluxos de trabalho reutilizáveis no diretório `.github/workflows` de um repositório. Não há suporte para subdiretórios do diretório `workflows`.

Para que um fluxo de trabalho seja reutilizável, os valores de `on` precisam incluir `workflow_call`:

```yaml
on:
  workflow_call:
```

### Usando entradas e segredos em um fluxo de trabalho reutilizável

Você pode definir entradas e segredos, que podem ser passados do fluxo de trabalho de de chamada e, em seguida, usados no fluxo de trabalho chamado. Há três etapas para usar uma entrada ou um segredo em um fluxo de trabalho reutilizável.

1. No fluxo de trabalho reutilizável, use as palavras-chave `inputs` e `secrets` para definir entradas ou segredos que serão transmitidos de um fluxo de trabalho do chamador.
   {% raw %}
   ```yaml
   on:
     workflow_call:
       inputs:
         config-path:
           required: true
           type: string
       secrets:
         envPAT:
           required: true
   ```
   {% endraw %} Para obter detalhes da sintaxe usada para definir entradas e segredos, confira [`on.workflow_call.inputs`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) e [`on.workflow_call.secrets`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets).
   {% ifversion actions-inherit-secrets-reusable-workflows %}
1. No fluxo de trabalho reutilizável, faça referência à entrada ou ao segredo que você definiu na chave `on` na etapa anterior.

   {% note %}

   **Observação**: se os segredos forem herdados usando `secrets: inherit` no fluxo de trabalho de chamada, você poderá referenciá-los mesmo que não estejam explicitamente definidos na chave `on`. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit)".

   {% endnote %} {%- else %}
1. No fluxo de trabalho reutilizável, faça referência à entrada ou ao segredo que você definiu na chave `on` na etapa anterior.
   {%- endif %}

   {% raw %}
   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       environment: production
       steps:
       - uses: actions/labeler@v4
         with:
           repo-token: ${{ secrets.envPAT }}
           configuration-path: ${{ inputs.config-path }}
   ```
   {% endraw %} No exemplo acima, `envPAT` está um segredo de ambiente que foi adicionado ao ambiente `production`. Por conseguinte, este ambiente é mencionado no trabalho.

   {% note %}

   **Observação**: os segredos de ambiente são cadeias de caracteres criptografadas armazenadas em um ambiente que você definiu para um repositório. Os segredos de ambiente só estão disponíveis para trabalhos de fluxo de trabalho que fazem referência ao ambiente apropriado. Para obter mais informações, confira "[Como usar ambientes para implantação](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".

   {% endnote %}

1. Passe a entrada ou o segredo do fluxo de trabalho da chamada.

{% indented_data_reference reusables.actions.pass-inputs-to-reusable-workflows spaces=3 %}

### Exemplo de fluxo de trabalho reutilizável

Esse arquivo de fluxo de trabalho reutilizável chamado `workflow-B.yml` (vamos nos referir a ele mais adiante no [exemplo de fluxo de trabalho do chamador](#example-caller-workflow)) usa uma cadeia de caracteres de entrada e um segredo do fluxo de trabalho do chamador e os usa em uma ação.

{% raw %}
```yaml{:copy}
name: Reusable workflow example

on:
  workflow_call:
    inputs:
      config-path:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v4
      with:
        repo-token: ${{ secrets.token }}
        configuration-path: ${{ inputs.config-path }}
```
{% endraw %}

## Chamando um fluxo de trabalho reutilizável

Um fluxo de trabalho reutilizável é chamado por meio da palavra-chave `uses`. Ao contrário de quando você usa ações em um fluxo de trabalho, você chama os fluxos de trabalho reutilizáveis diretamente em um trabalho, e não de dentro de etapas de trabalho.

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

Referencie os arquivos do fluxo de trabalho reutilizável usando {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}uma das seguintes sintaxes:{% else %}a sintaxe:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

Você pode chamar vários fluxos de trabalho, fazendo referência a cada um em um trabalho separado.

{% data reusables.actions.uses-keyword-example %}

### Passando entradas e segredos para um fluxo de trabalho reutilizável

{% data reusables.actions.pass-inputs-to-reusable-workflows%}

{% ifversion actions-reusable-workflow-matrix %}
### Como usar uma estratégia de matriz com um fluxo de trabalho reutilizável

Trabalhos que usam a estratégia de matriz podem chamar um fluxo de trabalho reutilizável.

Uma estratégia de matriz permite que você use variáveis em uma única definição de trabalho para criar automaticamente várias execuções de trabalho baseadas nas combinações das variáveis. Por exemplo, você pode usar uma estratégia de matriz a fim de passar entradas diferentes para um fluxo de trabalho reutilizável. Para obter mais informações sobre matrizes, confira "[Usando uma matriz em seus trabalhos](/actions/using-jobs/using-a-matrix-for-your-jobs)".

Este trabalho de exemplo abaixo chama um fluxo de trabalho reutilizável e faz referência ao contexto de matriz definindo a variável `target` com os valores `[dev, stage, prod]`. Ele executará três trabalhos, um para cada valor na variável.

{% raw %}
```yaml{:copy}
jobs:
  ReuseableMatrixJobForDeployment:
    strategy:
      matrix:
        target: [dev, stage, prod]
    uses: octocat/octo-repo/.github/workflows/deployment.yml@main
    with:
      target: ${{ matrix.target }}
```
{% endraw %} {% endif %}

### Palavras-chave compatíveis com trabalhos que chamam um fluxo de trabalho reutilizável

Ao chamar um fluxo de trabalho reutilizável, você só poderá usar as palavras-chave a seguir no trabalho que contém a chamada:

* [`jobs.<job_id>.name`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id) {%- ifversion actions-inherit-secrets-reusable-workflows %}
* [`jobs.<job_id>.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit) {%- endif %} {%- ifversion actions-reusable-workflow-matrix %}
* [`jobs.<job_id>.strategy`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategy) {%- endif %}
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)
* [`jobs.<job_id>.concurrency`](/actions/reference/workflow-syntax-for-github-actions#concurrency)

   {% note %}

   **Observação**:

   * Se `jobs.<job_id>.permissions` não for especificado no trabalho de chamada, o fluxo de trabalho chamado terá as permissões padrão para o `GITHUB_TOKEN`. Para obter mais informações, confira "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".
   * As permissões `GITHUB_TOKEN` transmitidas do fluxo de trabalho do chamador só podem ser rebaixadas (não elevadas) pelo fluxo de trabalho chamado.

   {% endnote %}

### Exemplo de fluxo de trabalho de chamada

Este arquivo de fluxo de trabalho chama dois arquivos de fluxo de trabalho. O segundo deles, `workflow-B.yml` (mostrado no [exemplo de fluxo de trabalho reutilizável](#example-reusable-workflow)), recebe uma entrada (`config-path`) e um segredo (`token`).

{% raw %}
```yaml{:copy}
name: Call a reusable workflow

on:
  pull_request:
    branches:
      - main

jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/workflow-A.yml@v1

  call-workflow-passing-data:
    permissions:
      contents: read
      pull-requests: write
    uses: octo-org/example-repo/.github/workflows/workflow-B.yml@main
    with:
      config-path: .github/labeler.yml
    secrets:
      token: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% ifversion nested-reusable-workflow %}
## Como aninhar fluxos de trabalho reutilizáveis

Você pode conectar um máximo de quatro níveis de fluxos de trabalho - ou seja, o fluxo de trabalho do chamador de nível superior e até três níveis de fluxos de trabalho reutilizáveis. Por exemplo: _caller-workflow.yml_ → _called-workflow-1.yml_ → _called-workflow-2.yml_ → _called-workflow-3.yml_. Loops na árvore de fluxo de trabalho não são permitidos.

De dentro de um fluxo de trabalho reutilizável, você pode chamar outro fluxo de trabalho reutilizável.

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:

jobs:
  call-another-reusable:
    uses: octo-org/example-repo/.github/workflows/another-reusable.yml@v1
```
{% endraw %}

### Como passar segredos para fluxos de trabalho aninhados

Você pode usar `jobs.<job_id>.secrets` em um fluxo de trabalho de chamada para passar segredos nomeados para um fluxo de trabalho chamado diretamente. Como alternativa, você pode usar `jobs.<job_id>.secrets.inherit` para passar todos os segredos do fluxo de trabalho que efetuou a chamada para um fluxo de trabalho chamado diretamente. Para obter mais informações, confira a seção "[Como passar entradas e segredos para um fluxo de trabalho reutilizável](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow)" acima, e o artigo de referência "[Sintaxe de fluxo de trabalho para o GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit)". Os segredos são passados apenas para o fluxo de trabalho chamado diretamente, portanto, na cadeia de fluxo de trabalho A > B > C, o fluxo de trabalho C só receberá segredos de A se tiverem sido passados de A para B e, em seguida, de B para C.

No exemplo a seguir, o fluxo de trabalho A passa todos os segredos dele para o fluxo de trabalho B, usando a palavra-chave `inherit`, mas o fluxo de trabalho B passa apenas um segredo para o fluxo de trabalho C. Qualquer um dos outros segredos passados para o fluxo de trabalho B não está disponível para o fluxo de trabalho C.

{% raw %}
```yaml
jobs:
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit # pass all secrets
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
    secrets:
      envPAT: ${{ secrets.envPAT }} # pass just this secret
```
{% endraw %}

### Acesso e permissões

Um fluxo de trabalho que contém fluxos de trabalho aninhados reutilizáveis falhará se qualquer um dos fluxos de trabalho aninhados estiver inacessível ao fluxo de trabalho inicial do chamador. Para obter mais informações, confira "[Acesso a fluxos de trabalho reutilizáveis](/actions/using-workflows/reusing-workflows#access-to-reusable-workflows)".

As permissões `GITHUB_TOKEN` só podem ser as mesmas ou mais restritivas nos fluxos de trabalho aninhados. Por exemplo, na cadeia de fluxo de trabalho A > B > C, se o fluxo de trabalho A tiver permissão do token `package: read`, B e C não poderão ter a permissão `package: write`. Para obter mais informações, confira "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)".

Para obter informações sobre como usar a API para determinar quais arquivos de fluxo de trabalho estavam envolvidos em uma execução de fluxo de trabalho específica, confira "[Como monitorar quais fluxos de trabalho estão sendo usados](#monitoring-which-workflows-are-being-used)".
{% endif %}

## Usando saídas de um fluxo de trabalho reutilizável

Um fluxo de trabalho reutilizável pode gerar dados que você deseja usar no fluxo de trabalho da chamada. Para usar essas saídas, você deve especificá-las como saídas do fluxo de trabalho reutilizável.{% ifversion actions-reusable-workflow-matrix %}

Se um fluxo de trabalho reutilizável que define uma saída for executado com uma estratégia de matriz, a saída será aquela definida pelo último fluxo de trabalho reutilizável bem-sucedido da matriz que realmente definir um valor.
Isso significa que se o último fluxo de trabalho reutilizável bem-sucedido definir uma cadeia de caracteres vazia para sua saída e a segunda última conclusão bem-sucedida do fluxo de trabalho reutilizável definir um valor real para sua saída, a saída conterá o valor do segundo último fluxo de trabalho reutilizável.{% endif %}

O seguinte fluxo de trabalho reutilizável tem um único trabalho que contém duas etapas. Em cada uma dessas etapas, definimos uma única palavra como a saída: "olá" e "mundo". Na seção `outputs` do trabalho, mapeamos essas saídas de etapa para saídas de trabalho chamadas: `output1` e `output2`. Na seção `on.workflow_call.outputs`, definimos duas saídas para o fluxo de trabalho em si, uma chamada `firstword`, que mapeamos para `output1`, e outra chamada `secondword`, que mapeamos para `output2`.

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=firstword::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "secondword=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=secondword::world"
{%- endif %}{% raw %}
```
{% endraw %}

Agora podemos usar as saídas no fluxo de trabalho da chamada, da mesma forma que você usaria as saídas de um trabalho dentro do mesmo fluxo de trabalho. Referenciamos as saídas usando os nomes definidos no nível do fluxo de trabalho no fluxo de trabalho reutilizável: `firstword` e `secondword`. Nesse fluxo de trabalho, `job1` chama o fluxo de trabalho reutilizável e `job2` imprime as saídas do fluxo de trabalho reutilizável ("olá, mundo") para a saída padrão no log do fluxo de trabalho.

{% raw %}
```yaml{:copy}
name: Call a reusable workflow and use its outputs

on:
  workflow_dispatch:

jobs:
  job1:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@v1

  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{ needs.job1.outputs.firstword }} ${{ needs.job1.outputs.secondword }}
```
{% endraw %}

Para obter mais informações sobre como usar saídas de trabalho, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)".

## Monitorando quais fluxos de trabalho estão sendo utilizados

Você pode usar a API REST de {% data variables.product.prodname_dotcom %} para monitorar como os fluxos de trabalho reutilizáveis são usados. A ação `prepared_workflow_job` do log de auditoria é disparada quando um trabalho de fluxo de trabalho é iniciado. Incluído nos dados registrados:
* `repo` – A organização/o repositório em que o trabalho de fluxo de trabalho está localizado. Para um trabalho que chama outro fluxo de trabalho, este é a organização/repositório do fluxo de trabalho chamador.
* `@timestamp` – A data e a hora em que o trabalho foi iniciado, no formato de época do UNIX.
* `job_name` – O nome do trabalho que foi executado.
{% ifversion nested-reusable-workflow %}
* `calling_workflow_refs` – uma matriz de caminhos de arquivo para todos os fluxos de trabalho de chamador envolvidos neste trabalho de fluxo de trabalho. Os itens na matriz estão na ordem inversa em que foram chamados. Por exemplo, em uma cadeia de fluxos de trabalho A > B > C, ao exibir os logs de um trabalho no fluxo de trabalho C, a matriz seria `["octo-org/octo-repo/.github/workflows/B.yml", "octo-org/octo-repo/.github/workflows/A.yml"]`.
* `calling_workflow_shas` – uma matriz de SHAs para todos os fluxos de trabalho de chamador envolvidos neste trabalho de fluxo de trabalho. A matriz contém o mesmo número de itens, na mesma ordem, que a matriz `calling_workflow_refs`. {% endif %}
* `job_workflow_ref` – O arquivo de fluxo de trabalho que foi usado, no formato `{owner}/{repo}/{path}/{filename}@{ref}`. Para um trabalho que chama outro fluxo de trabalho, isso identifica o fluxo de trabalho chamado.

Para obter informações sobre como usar a API REST para consultar o log de auditoria de uma organização, confira "[Organizações](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

{% note %}

**Observação**: os dados de auditoria de `prepared_workflow_job` só podem ser vistos por meio da API REST. Eles não são visíveis na interface web de {% data variables.product.prodname_dotcom %} ou incluídos nos dados de auditoria exportados pelo JSON/CSV.

{% endnote %}

{% ifversion partial-reruns-with-reusable %}

## Executar novamente fluxos de trabalho e trabalhos com fluxos de trabalho reutilizáveis

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

## Próximas etapas

Para continuar aprendendo mais sobre o {% data variables.product.prodname_actions %}, confira "[Eventos que disparam fluxos de trabalho](/actions/learn-github-actions/events-that-trigger-workflows)".

{% ifversion restrict-groups-to-workflows %}Você pode padronizar implantações criando um grupo de executores auto-hospedados que só pode executar um fluxo de trabalho específico reutilizável. Para obter mais informações, confira "[Como gerenciar o acesso a executores auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".{% endif %}
