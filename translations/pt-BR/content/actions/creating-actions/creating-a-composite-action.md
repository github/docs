---
title: Creating a composite action
intro: 'In this guide, you''ll learn how to build a composite action.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/creating-actions/creating-a-composite-run-steps-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Action development
shortTitle: Composite action
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Introdução

In this guide, you'll learn about the basic components needed to create and use a packaged composite action. Para manter o foco deste guia nos componentes necessários para empacotar a ação, a funcionalidade do código da ação é mínima. A ação imprime "Hello World" e "Goodbye", ou, se você fornecer um nome personalizado, imprimirá "Hello [who-to-greet]" e "Goodbye". A ação também mapeia um número aleatório para a variável de saída `random-number` e executa um script denominado `goodbye.sh`.

Once you complete this project, you should understand how to build your own composite action and test it in a workflow.

{% data reusables.github-actions.context-injection-warning %}

## Pré-requisitos

Antes de começar, você criará um repositório {% data variables.product.product_name %}.

1. Crie um repositório público novo no {% data variables.product.product_location %}. You can choose any repository name, or use the following `hello-world-composite-action` example. É possível adicionar esses arquivos após push do projeto no {% data variables.product.product_name %}. Para obter mais informações, consulte "[Criar um repositório novo](/articles/creating-a-new-repository)".

1. Clone o repositório para seu computador. Para obter mais informações, consulte "[Clonar um repositório](/articles/cloning-a-repository)".

1. No seu terminal, mude os diretórios para seu novo repositório.

  ```shell
  cd hello-world-composite-action
  ```

2. In the `hello-world-composite-action` repository, create a new file called `goodbye.sh`, and add the following example code:

  ```bash
  echo "Goodbye"
  ```

3. No seu terminal, torne `goodbye.sh` executável.

  ```shell
  chmod +x goodbye.sh
  ```

1. No terminal, verifique no seu arquivo `goodbye.sh`.
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

## Criar um arquivo de metadados de ação

1. In the `hello-world-composite-action` repository, create a new file called `action.yml` and add the following example code. For more information about this syntax, see "[`runs` for a composite actions](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)".

    {% raw %}
    **action.yml**
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
        value: ${{ steps.random-number-generator.outputs.random-id }}
    runs:
      using: "composite"
      steps:
        - run: echo Hello ${{ inputs.who-to-greet }}.
          shell: bash
        - id: random-number-generator
          run: echo "::set-output name=random-id::$(echo $RANDOM)"
          shell: bash
        - run: ${{ github.action_path }}/goodbye.sh
          shell: bash
    ```
    {% endraw %}
  Este arquivo define a entrada de `who-to-greet`, mapeia o número aleatório gerado para a variável de saída `random-number` e executa o script `goodbye.sh`. It also tells the runner how to execute the composite action.

  For more information about managing outputs, see "[`outputs` for a composite action](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)".

  Para obter mais informações sobre como usar `github.action_path`, consulte "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

1. No seu terminal, verifique o seu arquivo `action.yml`.

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. No seu terminal, adicione uma tag. Este exemplo usa uma tag denominada `v1`. Para obter mais informações, consulte "[Sobre ações](/actions/creating-actions/about-actions#using-release-management-for-actions)".

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

## Testar sua ação em um fluxo de trabalho

O código de fluxo de trabalho a seguir usa a ação hello world completa que você fez em "[Criando uma ação arquivo de metadados](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file)".

Copy the workflow code into a `.github/workflows/main.yml` file in another repository, but replace `actions/hello-world-composite-action@v1` with the repository and tag you created. Você também pode substituir a entrada `who-to-greet` pelo seu nome.

{% raw %}
**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: actions/checkout@v2
      - id: foo
        uses: actions/hello-world-composite-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number ${{ steps.foo.outputs.random-number }}
        shell: bash
```
{% endraw %}

No seu repositório, clique na aba **Ações** e selecione a última execução do fluxo de trabalho. A saída deve incluir: "Hello Mona the Octocat", o resultado do script "Goodbye" e um número aleatório.
