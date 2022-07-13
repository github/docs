---
title: Reutilizando fluxos de trabalho
shortTitle: Reutilizando fluxos de trabalho
intro: Aprenda a evitar a duplicação ao criar um fluxo de trabalho reutilizando os fluxos de trabalho existentes.
redirect_from:
  - /actions/learn-github-actions/reusing-workflows
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.4'
  ghae: issue-4757
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.reusable-workflows-ghes-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão Geral

Em vez de copiar e colar de um fluxo de trabalho para outro, você pode tornar os fluxos de trabalho reutilizáveis. Você e qualquer pessoa com acesso ao fluxo de trabalho reutilizável pode chamar o fluxo de trabalho reutilizável a partir de outro fluxo de trabalho.

A reutilização dosfluxos de trabalho evita duplicação. Isso torna os fluxos de trabalho mais fáceis de manter e permite que você crie novos fluxos de trabalho mais rapidamente, desenvolvendo sobre o trabalho dos outros, assim como você faz com ações. A reutilização do fluxo de trabalho também promove práticas recomendadas, ajudando você a usar os fluxos de trabalho bem projetados, Já foram testados e sua eficiência é comprovada. Sua organização pode criar uma biblioteca de fluxos de trabalho reutilizáveis que pode ser mantida centralmente.

O diagrama abaixo mostra três trabalhos de criação à esquerda do diagrama. Depois que cada um desses trabalhos é concluído com sucesso, executa-se uma tarefa dependente denominada "Implantação". Esse trabalho chama um fluxo de trabalho reutilizável que contém três trabalhos: "Treinamento", "Revisão" e "Produção". A tarefa de implantação "Produção" só é executada após a tarefa de "Treinamento" ter sido concluída com sucesso. O uso um fluxo de trabalho reutilizável para executar trabalhos de implantação permite que você execute esses trabalhos para cada compilação sem duplicar o código nos fluxos de trabalho.

![Diagrama de um fluxo de trabalho reutilizável para implantação](/assets/images/help/images/reusable-workflows-ci-cd.png)

Um fluxo de trabalho que usa outro fluxo de trabalho é referido como um fluxo de trabalho "de chamada". O fluxo de trabalho reutilizável é um fluxo de trabalho "chamado". Um fluxo de trabalho de chamada pode usar vários fluxos de trabalho chamados. Cada fluxo de trabalho chamado é referenciado em uma única linha. O resultado é que o arquivo de fluxo de trabalho de chamadas pode conter apenas algumas linhas de YAML mas pode executar um grande número de tarefas quando for executado. Quando um fluxo de trabalho é reutilizado, todo o fluxo de trabalho chamado é usado, como se fosse parte do fluxo de trabalho de chamada.

Se você reutilizar um fluxo de trabalho de um repositório diferente, todas as ações no fluxo de trabalho chamado são como se fizessem parte do fluxo de trabalho de chamada. Por exemplo, se o fluxo de trabalho chamado usar `ações/checkout`, a ação verifica o conteúdo do repositório que hospeda o fluxo de trabalho de chamada, não o fluxo de trabalho chamado.

Quando um fluxo de trabalho reutilizável é acionado por um fluxo de trabalho de chamadas, o contexto `github` está sempre associado ao fluxo de trabalho de chamada. O fluxo de trabalho chamado tem acesso automaticamente a `github.token` e `secrets.GITHUB_TOKEN`. Para obter mais informações sobre o contexto do github ``, consulte "[Contexto e sintaxe de expressão para o GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

Você pode visualizar os fluxos de trabalho referenciados nos seus fluxos de trabalho de {% data variables.product.prodname_actions %} como dependências no gráfico de dependências do repositório que contém seus fluxos de trabalho. Para obter mais informações, consulte “[Sobre o gráfico de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”.

### Fluxos de trabalho e fluxos de trabalho iniciais reutilizáveis

Os fluxos de trabalho iniciais permitem que todos em sua organização que têm permissão para criar fluxos de trabalho o façam de forma mais rápida e facilmente. Quando as pessoas criam um novo fluxo de trabalho, eles podem escolher um fluxo de trabalho inicial e uma parte ou todo o trabalho de escrita do fluxo de trabalho será feito para essas pessoas. Dentro de um fluxo de trabalho inicial, você também pode fazer referência a fluxos de trabalho reutilizáveis para facilitar a utilização de código de fluxo de trabalho gerenciado centralmente. Se você usar uma tag ou nome de branch ao fazer referência ao fluxo de trabalho reutilizável, você poderá garantir que todos que reutilizarem esse fluxo de trabalho sempre usarão o mesmo código YAML. No entanto, se você fizer referência a um fluxo de trabalho reutilizável por uma tag ou branch, certifique-se de que você poderá confiar nessa versão do fluxo de trabalho. Para obter mais informações, consulte "[Fortalecimento da segurança para {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows)".

Para obter mais informações, consulte "[Criando fluxos de trabalho iniciais para a sua organização](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)".

## Acesso a fluxos de trabalho reutilizáveis

Um fluxo de trabalho reutilizável pode ser usado por outro fluxo de trabalho se {% ifversion ghes or ghec or ghae %}qualquer{% else %}ou{% endif %} dos pontos a seguir for verdadeiro:

* Ambos os fluxos de trabalho estão no mesmo repositório.
* O fluxo de trabalho chamado é armazenado em um repositório público{% ifversion actions-workflow-policy %}, e sua {% ifversion ghec %}empresa{% else %}organização{% endif %} permite que você use fluxos de trabalho públicos reutilizáveis{% endif %}.{% ifversion ghes or ghec or ghae %}
* O fluxo de trabalho chamado é armazenado em um repositório interno e as configurações para esse repositório permitem que ele seja acessado. Para obter mais informações, consulte {% ifversion internal-actions %}"[Compartilhando ações e fluxos de trabalho com a sua empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise){% else %}"[Gerenciando configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository){% endif %}.{% endif %}

## Usando executores

{% ifversion fpt or ghes or ghec %}

### Usar executores hospedados no GitHub

A atribuição de executores hospedados em {% data variables.product.prodname_dotcom %} é sempre avaliada usando apenas o contexto do chamador. A cobrança para executores hospedados em {% data variables.product.prodname_dotcom %} está sempre associada ao chamador. O fluxo de trabalho de chamadas não pode usar executores hospedados em {% data variables.product.prodname_dotcom %} a partir do repositório chamado. Para obter mais informações, consulte "[Sobre executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".

### Usando executores auto-hospedados

{% endif %}

Fluxos de trabalho chamados que são propriedade do mesmo usuário ou organização{% ifversion ghes or ghec or ghae %} ou empresa{% endif %}, uma vez que o fluxo de trabalho de chamadas pode acessar runners auto-hospedados no contexto do invocador. Isso significa que um fluxo de trabalho chamado pode acessar executores auto-hospedados que estão:
* No repositório de chamada
* Na organização{% ifversion ghes or ghec or ghae %} ou empresa {% endif %}do repositório de chamadas, desde que o executor tenha sido disponibilizado para o repositório de chamada

## Limitações

* Os fluxos de trabalho reutilizáveis não podem chamar outros fluxos de trabalho reutilizáveis.
* Os fluxos de trabalho armazenados dentro de um repositório privado só podem ser usados por fluxos de trabalho dentro do mesmo repositório.
* Qualquer variável de ambiente definida em um contexto `env` definido no nível do fluxo de trabalho no fluxo de trabalho da chamada não é propagada para o fluxo de trabalho chamado. Para obter mais informações sobre o contexto `env`, consulte "[Contexto e sintaxe de expressão para o GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)".
* A propriedade `estratégia` não é compatível com nenhum trabalho que chame um fluxo de trabalho reutilizável.

## Criar um fluxo de trabalho reutilizável

Os fluxos de trabalho reutilizáveis são arquivos formatados com YAML, muito semelhantes a qualquer outro arquivo de fluxo de trabalho. Como em outros arquivos de fluxo de trabalho, você localiza os fluxos de trabalho reutilizáveis no diretório `.github/workflows` de um repositório. Os subdiretórios do diretóriio `fluxos de trabalho` não são compatíveis.

Para que um fluxo de trabalho seja reutilizável, os valores de `on` devem incluir `workflow_call`:

```yaml
on:
  workflow_call:
```

### Usando entradas e segredos em um fluxo de trabalho reutilizável

Você pode definir entradas e segredos, que podem ser passados do fluxo de trabalho de de chamada e, em seguida, usados no fluxo de trabalho chamado. Há três etapas para usar uma entrada ou um segredo em um fluxo de trabalho reutilizável.

1. No fluxo de trabalho reutilizável, use as palavras-chave `entradas` e `segredos` para definir entradas ou segredos que serão passados de um fluxo de trabalho chamado.
   {% raw %}
   ```yaml
   on:
     workflow_call:
       inputs:
         username:
           required: true
           type: string
       secrets:
         envPAT:
           required: true
   ```
   {% endraw %}
   Para obter detalhes da sintaxe para definir as entradas e segredos, consulte [`on.workflow_call.inputs`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) e [`on.workflow_call.secrets`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets).
   {% ifversion actions-inherit-secrets-reusable-workflows %}
1. No fluxo de trabalho reutilizável, faça referência à entrada ou segredo que você definiu na chave `on` chave na etapa anterior. Se os segredos são herdados usando `secrets: inherit`, você pode referenciá-los mesmo que eles não estejam definidos na chave `on`.
   {%- else %}
1. No fluxo de trabalho reutilizável, faça referência à entrada ou segredo que você definiu na chave `on` chave na etapa anterior.
   {%- endif %}

   {% raw %}
   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       environment: production
       steps:
         - uses: ./.github/workflows/my-action
           with:
             username: ${{ inputs.username }}
             token: ${{ secrets.envPAT }}
   ```
   {% endraw %}
   No exemplo acima, `envPAT` é um segredo de ambiente que foi adicionado ao ambiente de `produção`. Por conseguinte, este ambiente é mencionado no trabalho.

   {% note %}

   **Observação**: Os segredos do ambiente são strings criptografadas armazenadas em um ambiente que você definiu para um repositório. Os segredos de ambiente só estão disponíveis para trabalhos de fluxo de trabalho que fazem referência ao ambiente apropriado. Para obter mais informações, consulte "[Usando ambientes para implantação](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".

   {% endnote %}

1. Passe a entrada ou o segredo do fluxo de trabalho da chamada.

{% indented_data_reference reusables.actions.pass-inputs-to-reusable-workflows spaces=3 %}

### Exemplo de fluxo de trabalho reutilizável

Este arquivo de workflow reutilizável chamado `workflow-B.yml` (faremos referência a ele mais adiante no [exemplo do fluxo de trabalho de chamada](#example-caller-workflow)) tem uma entrada e um segredo do fluxo de trabalho de chamadas e os usa em uma ação.

{% raw %}
```yaml{:copy}
name: Reusable workflow example

on:
  workflow_call:
    inputs:
      username:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  example_job:
    name: Pass input and secrets to my-action
    runs-on: ubuntu-latest
    steps:
      - uses: ./.github/workflows/my-action
        with:
          username: ${{ inputs.username }}
          token: ${{ secrets.token }}
```
{% endraw %}

## Chamando um fluxo de trabalho reutilizável

Você chama um fluxo de trabalho reutilizável usando a chave `usa`. Ao contrário de quando você usa ações em um fluxo de trabalho, você chama os fluxos de trabalho reutilizáveis diretamente em um trabalho, e não de dentro de etapas de trabalho.

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

Você faz referência aos arquivos reutilizáveis do fluxo de trabalho usando {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}uma das seguintes sintaxes:{% else %}a sintaxe:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

Você pode chamar vários fluxos de trabalho, fazendo referência a cada um em um trabalho separado.

{% data reusables.actions.uses-keyword-example %}

### Passando entradas e segredos para um fluxo de trabalho reutilizável

{% data reusables.actions.pass-inputs-to-reusable-workflows%}

### Palavras-chave compatíveis com trabalhos que chamam um fluxo de trabalho reutilizável

Ao chamar um fluxo de trabalho reutilizável, você só poderá usar as palavras-chave a seguir no trabalho que contém a chamada:

* [`jobs.<job_id>.name`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id)
 {% ifversion actions-inherit-secrets-reusable-workflows %}* [`jobs.<job_id>.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit){% endif %}
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)
* [`jobs.<job_id>.concurrency`](/actions/reference/workflow-syntax-for-github-actions#concurrency)

   {% note %}

   **Observação:**

   * Se `jobs.<job_id>.permissions` não for especificado no trabalho de chamadas, o fluxo de trabalho chamado terá as permissões padrão para o `GITHUB_TOKEN`. Para obter mais informações, consulte "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".
   * As permissões de `GITHUB_TOKEN` passadas do fluxo de trabalho de de cahamada só podem ser rebaixadas (não elevadas) pelo fluxo de trabalho chamado.

   {% endnote %}

### Exemplo de fluxo de trabalho de chamada

Este arquivo de fluxo de trabalho chama dois arquivos de fluxo de trabalho. O segundo destes, `workflow-B.yml` (mostrado no exemplo [exemplo do fluxo de trabalho reutilizável](#example-reusable-workflow)), fica depois de uma entrada (`nome de usuário`) e um segredo (`token`).

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
    uses: octo-org/example-repo/.github/workflows/workflow-B.yml@main
    with:
      username: mona
    secrets:
      token: ${{ secrets.TOKEN }}
```
{% endraw %}

## Usando saídas de um fluxo de trabalho reutilizável

Um fluxo de trabalho reutilizável pode gerar dados que você deseja usar no fluxo de trabalho da chamada. Para usar essas saídas, você deve especificá-las como saídas do fluxo de trabalho reutilizável.

O seguinte fluxo de trabalho reutilizável tem um único trabalho que contém duas etapas. Em cada uma dessas etapas, definimos uma única palavra como a saída: "olá" e "mundo". Na seção `saídas` do trabalho, nós mapeamos esses saídas de etapa para o trabalho chamada: `ouput1` e `ouput2`. Em seguida, na seção `on.workflow_call.outputs`, definimos duas saídas para o próprio fluxo de trabalho, uma chamada `firstword` que mapeamos com `output1`, e uma chamada `secondword` que mapeamos com `output2`.

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
      - id: step1
        run: echo "::set-output name=firstword::hello"
      - id: step2
        run: echo "::set-output name=secondword::world"
```
{% endraw %}

Agora podemos usar as saídas no fluxo de trabalho da chamada, da mesma forma que você usaria as saídas de um trabalho dentro do mesmo fluxo de trabalho. Fazemos referência às saídas usando os nomes definidos no nível do fluxo de trabalho no fluxo de trabalho reutilizável: `firstword` e `secondword`. Neste fluxo de trabalho, `job1` chama o fluxo de trabalho reutilizável e `job2` imprime as saídas do fluxo de trabalho reutilizável ("hello world") para a saída padrão no registro do fluxo de trabalho.

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

Para obter mais informações sobre o uso de saídas de trabalho, consulte "[Sintaxe do Fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)".

## Monitorando quais fluxos de trabalho estão sendo utilizados

Você pode usar a API REST de {% data variables.product.prodname_dotcom %} para monitorar como os fluxos de trabalho reutilizáveis são usados. A ação do log de auditoria `prepared_workflow_job` é acionada quando um trabalho de fluxo de trabalho é iniciado. Incluído nos dados registrados:
* `repo` - a organização/repositório onde o trabalho do fluxo de trabalho está localizado. Para um trabalho que chama outro fluxo de trabalho, este é a organização/repositório do fluxo de trabalho chamador.
* `@timestamp` - a data e a hora em que o trabalho foi iniciado, no formato epoch do Unix.
* `job_name` - o nome do trabalho executado.
* `job_workflow_ref` - o arquivo de fluxo de trabalho usado, no formato `{owner}/{repo}/{path}/{filename}@{ref}`. Para um trabalho que chama outro fluxo de trabalho, isso identifica o fluxo de trabalho chamado.

Para obter informações sobre o uso da API REST para consultar o log de auditoria para uma organização, consulte "[Organizações](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

{% note %}

**Observação**: Os dados de auditoria para `prepared_workflow_job` só podem ser vistos usando a API REST. Eles não são visíveis na interface web de {% data variables.product.prodname_dotcom %} ou incluídos nos dados de auditoria exportados pelo JSON/CSV.

{% endnote %}

{% ifversion partial-reruns-with-reusable %}

## Re-executar fluxos de trabalho e trabalhos com fluxos de trabalho reutilizáveis

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

## Próximas etapas

Para continuar aprendendo sobre {% data variables.product.prodname_actions %}, consulte "[Eventos que desencadeiam fluxos de trabalho](/actions/learn-github-actions/events-that-trigger-workflows)".

{% ifversion restrict-groups-to-workflows %}Você pode padronizar implantações criando um grupo de executores auto-hospedados que só pode executar um fluxo de trabalho específico reutilizável. Para obter mais informações, consulte "[Gerenciando acesso a executores auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."{% endif %}
