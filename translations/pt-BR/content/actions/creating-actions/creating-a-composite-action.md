---
title: Criar uma ação composta
shortTitle: Create a composite action
intro: 'Neste guia, você aprenderá a criar uma ação composta.'
redirect_from:
  - /actions/creating-actions/creating-a-composite-run-steps-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
ms.openlocfilehash: 5c7d332d2b3626a5628e85b09c35ffa6a0ca5f33
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192036'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Neste guia, você aprenderá os componentes básicos necessários para criar e usar uma ação composta empacotada. Para manter o foco deste guia nos componentes necessários para empacotar a ação, a funcionalidade do código da ação é mínima. A ação imprime "Hello World" e "Goodbye", ou, se você fornecer um nome personalizado, imprimirá "Hello [who-to-greet]" e "Goodbye". A ação também mapeia um número aleatório para a variável de saída `random-number` e executa um script chamado `goodbye.sh`.

Ao concluir este projeto, você entenderá como criar a sua própria ação composta e testá-la em um fluxo de trabalho.

{% data reusables.actions.context-injection-warning %}

## Pré-requisitos

Antes de começar, você criará um repositório em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.

1. Crie um repositório público novo no {% data variables.location.product_location %}. Você pode escolher qualquer nome de repositório ou usar o exemplo de `hello-world-composite-action` a seguir. É possível adicionar esses arquivos após push do projeto no {% data variables.product.product_name %}. Para obter mais informações, confira "[Criar um repositório](/articles/creating-a-new-repository)".

1. Clone o repositório para seu computador. Para obter mais informações, confira "[Como clonar um repositório](/articles/cloning-a-repository)".

1. No seu terminal, mude os diretórios para seu novo repositório.

  ```shell
  cd hello-world-composite-action
  ```

2. No repositório `hello-world-composite-action`, crie um arquivo chamado `goodbye.sh` e adicione o seguinte código de exemplo:

  ```bash
  echo "Goodbye"
  ```

3. No terminal, torne `goodbye.sh` executável.

  ```shell
  chmod +x goodbye.sh
  ```

1. Ainda no terminal, faça check-in do arquivo `goodbye.sh`.
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

## Criar um arquivo de metadados de ação

1. No repositório `hello-world-composite-action`, crie um arquivo chamado `action.yml` e adicione o código de exemplo a seguir. Para obter mais informações sobre essa sintaxe, confira "[`runs` para uma ação composta](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)".

    {% raw %}  **action.yml**
    ```yaml
    name: 'Hello World'
    description: 'Greet someone'
    inputs:
      who-to-greet:  # id of input
        description: 'Who to greet'
        required: true
        default: 'World'
    outputs:
      random-number:
        description: "Random number"
        value: ${{ steps.random-number-generator.outputs.random-number }}
    runs:
      using: "composite"
      steps:
        - run: echo Hello ${{ inputs.who-to-greet }}.
          shell: bash
        - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
          run: echo "random-number=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
          run: echo "::set-output name=random-number::$(echo $RANDOM)"
{%- endif %}{% raw %}
          shell: bash
        - run: echo "${{ github.action_path }}" >> $GITHUB_PATH
          shell: bash
        - run: goodbye.sh
          shell: bash
    ```
    {% endraw %} Esse arquivo define a entrada de `who-to-greet`, mapeia o número gerado aleatoriamente para a variável de saída `random-number`, adiciona o caminho da ação ao caminho do sistema executor (para localizar o script `goodbye.sh` durante a execução) e executa o script `goodbye.sh`.

  Para obter mais informações sobre como gerenciar saídas, confira "[`outputs` para uma ação composta](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)".

  Para obter mais informações sobre como usar `github.action_path`, confira "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

1. No terminal, faça check-in do arquivo `action.yml`.

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. No seu terminal, adicione uma tag. Este exemplo usa uma tag chamada `v1`. Para obter mais informações, confira "[Sobre as ações](/actions/creating-actions/about-actions#using-release-management-for-actions)".

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

## Testar sua ação em um fluxo de trabalho

O código de fluxo de trabalho a seguir usa a ação olá, mundo concluída criada em "[Como criar um arquivo de metadados de ação](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file)".

Copie o código de fluxo de trabalho em um arquivo `.github/workflows/main.yml` em outro repositório, mas substitua `actions/hello-world-composite-action@v1` pelo repositório e pela tag que você criou. Você também pode substituir a entrada `who-to-greet` pelo seu nome.

**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - id: foo
        uses: actions/hello-world-composite-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number {% raw %}${{ steps.foo.outputs.random-number }}{% endraw %}
        shell: bash
```

No repositório, clique na guia **Ações** e selecione a execução mais recente do fluxo de trabalho. A saída deve incluir: "Hello Mona the Octocat", o resultado do script "Goodbye" e um número aleatório.
