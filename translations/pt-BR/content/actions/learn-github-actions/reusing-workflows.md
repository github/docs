---
title: Reutilizando fluxos de trabalho
shortTitle: Reutilizando fluxos de trabalho
intro: Aprenda a evitar a duplicação ao criar um fluxo de trabalho reutilizando os fluxos de trabalho existentes.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghae: issue-4757
  ghec: '*'
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% note %}

**Observação:** Os fluxos de trabalho reutilizáveis estão atualmente na versão beta e sujeitos a alterações.

{% endnote %}

## Visão Geral

Em vez de copiar e colar de um fluxo de trabalho para outro, você pode tornar os fluxos de trabalho reutilizáveis. Você e qualquer pessoa com acesso ao fluxo de trabalho reutilizável pode chamar o fluxo de trabalho reutilizável a partir de outro fluxo de trabalho.

A reutilização dosfluxos de trabalho evita duplicação. Isso torna os fluxos de trabalho mais fáceis de manter e permite que você crie novos fluxos de trabalho mais rapidamente, desenvolvendo sobre o trabalho dos outros, assim como você faz com ações. A reutilização do fluxo de trabalho também promove práticas recomendadas, ajudando você a usar os fluxos de trabalho bem projetados, Já foram testados e sua eficiência é comprovada. Sua organização pode criar uma biblioteca de fluxos de trabalho reutilizáveis que pode ser mantida centralmente.

Um fluxo de trabalho que usa outro fluxo de trabalho é referido como um fluxo de trabalho "de chamada". O fluxo de trabalho reutilizável é um fluxo de trabalho "chamado". Um fluxo de trabalho de chamada pode usar vários fluxos de trabalho chamados. Cada fluxo de trabalho chamado é referenciado em uma única linha. O resultado é que o arquivo de fluxo de trabalho de chamadas pode conter apenas algumas linhas de YAML mas pode executar um grande número de tarefas quando for executado. Quando um fluxo de trabalho é reutilizado, todo o fluxo de trabalho chamado é usado, como se fosse parte do fluxo de trabalho de chamada.

Se você reutilizar um fluxo de trabalho de um repositório diferente, todas as ações no fluxo de trabalho chamado são como se fizessem parte do fluxo de trabalho de chamada. Por exemplo, se o fluxo de trabalho chamado usar `ações/checkout`, a ação verifica o conteúdo do repositório que hospeda o fluxo de trabalho de chamada, não o fluxo de trabalho chamado.

Quando um fluxo de trabalho reutilizável é acionado por um fluxo de trabalho de chamadas, o contexto `github` está sempre associado ao fluxo de trabalho de chamada. O fluxo de trabalho chamado tem acesso automaticamente a `github.token` e `secrets.GITHUB_TOKEN`. Para obter mais informações sobre o contexto do github ``, consulte "[Contexto e sintaxe de expressão para o GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

## Acesso a fluxos de trabalho reutilizáveis

Um fluxo de trabalho reutilizável pode ser usado por outro fluxo de trabalho se qualquer uma das seguintes opções for verdadeira:

* Ambos os fluxos de trabalho estão no mesmo repositório.
* O fluxo de trabalho chamado é armazenado em um repositório público.
* O fluxo de trabalho chamado é armazenado em um repositório interno e as configurações para esse repositório permitem que ele seja acessado. Para obter mais informações, consulte "[Gerenciar configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)".

## Limitações

* Os fluxos de trabalho reutilizáveis não podem chamar outros fluxos de trabalho reutilizáveis.
* Os fluxos de trabalho armazenados dentro de um repositório privado só podem ser usados por fluxos de trabalho dentro do mesmo repositório.
* Qualquer variável de ambiente definida em um contexto `env` definido no nível do fluxo de trabalho no fluxo de trabalho da chamada não é propagada para o fluxo de trabalho chamado. Para obter mais informações sobre o contexto `env`, consulte "[Contexto e sintaxe de expressão para o GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)".

As seguintes limitações serão removidas quando o fluxo de trabalho reutilizar os movimentos do beta:
* Não é possível definir a concorrência de um fluxo de trabalho chamado a partir do fluxo de trabalho de chamada. Para obter mais informações sobre `trabalhos.<job_id>.concurrency`, consulte "[Sintaxe de fluxo de trabalho para o GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idconcurrency)".
* As saídas geradas por um fluxo de trabalho chamado não podem ser acessadas pelo fluxo de trabalho de chamada.

## Criar um fluxo de trabalho reutilizável

Os fluxos de trabalho reutilizáveis são arquivos formatados com YAML, muito semelhantes a qualquer outro arquivo de fluxo de trabalho. Como em outros arquivos de fluxo de trabalho, você localiza os fluxos de trabalho reutilizáveis no diretório `.github/workflows` de um repositório. Os subdiretórios do diretóriio `fluxos de trabalho` não são compatíveis.

Para que um fluxo de trabalho seja reutilizável, os valores de `on` devem incluir `workflow_call`:

```yaml
on: 
  workflow_call:
```

Você pode definir entradas e segredos, que podem ser passados do fluxo de trabalho de de chamada e, em seguida, usados no fluxo de trabalho chamado. O exemplo a seguir de um fluxo de trabalho reutilizável define duas entradas (denominadas de "anel" e "ambiente") e um segredo (denominado "token"):

```yaml
on:
  workflow_call:
    inputs:
      ring:
        description: 'Identifier for the target deployment ring'
        default: 'ring-0'
        required: false
        type: string
      environment:
        required: false
        type: string
    secrets:
      token:
        required: false
```

Para obter informações sobre a sintaxe e definir entradas e segredos, consulte [on.workflow_call.inputs](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) e [on.workflow_call.secrets](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets).

### Exemplo de fluxo de trabalho reutilizável

Este arquivo de fluxo de trabalho reutilizável denominado `workflow-B. ml` (vamos mencioná-lo mais adiante) recebe uma string de entrada e um segredo do fluxo de trabalho de chamada e os usa em uma ação.

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
      - uses: ./.github/actions/my-action@v1
        with:
          username: ${{ inputs.username }}
          token: ${{ secrets.token }}      
```
{% endraw %}

## Chamando um fluxo de trabalho reutilizável

Você chama um fluxo de trabalho reutilizável usando a chave `usa`. Ao contrário de quando você usa ações em um fluxo de trabalho, você chama os fluxos de trabalho reutilizáveis diretamente em um trabalho, e não de dentro de etapas de trabalho.

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

Você faz referência a arquivos reutilizáveis do fluxo de trabalho usando a sintaxe:

`{owner}/{repo}/{path}/{filename}@{ref}`

Você pode chamar vários fluxos de trabalho, fazendo referência a cada um em um trabalho separado.

{% data reusables.actions.uses-keyword-example %}

### Passando entradas e segredos para um fluxo de trabalho reutilizável

Use a palavra-chave `com` em uma tarefa para passar entradas nomeadas para o fluxo de trabalho chamado. Use a palavra-chave `segredos` para passar segredos nomeados. As entradas e segredos que você passou devem ser definidos no fluxo de trabalho chamado. Para as entradas, o tipo de dado do valor de entrada deve corresponder ao tipo especificado para essa entrada no fluxo de trabalho chamado (booleano, número ou string).

{% raw %}
```yaml
with:
  username: mona
secrets:
  token: ${{ secrets.TOKEN }}
```
{% endraw %}

### Palavras-chave compatíveis com trabalhos que chamam um fluxo de trabalho reutilizável

Ao chamar um fluxo de trabalho reutilizável, você só poderá usar as palavras-chave a seguir no trabalho que contém a chamada:

* [`jobs.<job_id>.name`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id)
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)

   {% note %}

   **Observação:**

   * Se `jobs.<job_id>.permissions` não for especificado no trabalho de chamadas, o fluxo de trabalho chamado terá as permissões padrão para o `GITHUB_TOKEN`. Para obter mais informações, consulte "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".
   * As permissões de `GITHUB_TOKEN` passadas do fluxo de trabalho de de cahamada só podem ser rebaixadas (não elevadas) pelo fluxo de trabalho chamado.

   {% endnote %}

### Exemplo de fluxo de trabalho de chamada

Este arquivo de fluxo de trabalho chama dois arquivos de fluxo de trabalho. O segundo deles: `workflow-B.yml` (exibido acima) passa uma entrada, `nome de usuário` e um segredo, `token`.

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

## Próximas etapas

Para continuar aprendendo sobre {% data variables.product.prodname_actions %}, consulte "[Eventos que desencadeiam fluxos de trabalho](/actions/learn-github-actions/events-that-trigger-workflows)".
