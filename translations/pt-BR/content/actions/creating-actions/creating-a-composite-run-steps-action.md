---
title: Criando uma ação de etapas de execução compostas
intro: 'Neste guia, você aprenderá a construir uma ação de etapas de execução compostas.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

Neste guia, você aprenderá os componentes básicos necessários para criar e usar uma ação de etapas de execução compostas empacotada. Para manter o foco deste guia nos componentes necessários para empacotar a ação, a funcionalidade do código da ação é mínima. A ação imprime "Hello World" e "Goodbye", ou, se você fornecer um nome personalizado, imprimirá "Hello [who-to-greet]" e "Goodbye". A ação também mapeia um número aleatório para a variável de saída `random-number` e executa um script denominado `goodbye.sh`.

Ao terminar esse projeto, você saberá como criar sua própria ação de etapas de execução compostas e poderá testá-la em um fluxo de trabalho.

### Pré-requisitos

Antes de começar, você criará um repositório {% data variables.product.product_name %}.

1. Crie um repositório público novo no {% data variables.product.product_location %}. Você pode escolher qualquer nome de repositório, ou usar o exemplo `hello-world-composite-run-steps-action`. É possível adicionar esses arquivos após push do projeto no {% data variables.product.product_name %}. Para obter mais informações, consulte "[Criar um repositório novo](/articles/creating-a-new-repository)".

1. Clone o repositório para seu computador. Para obter mais informações, consulte "[Clonar um repositório](/articles/cloning-a-repository)".

1. No seu terminal, mude os diretórios para seu novo repositório.

  ```shell
  cd hello-world-composite-run-steps-action
  ```

2. No repositório `hello-world-composite-run-steps-action`, crie um novo arquivo denominado `goodbye.sh` e adicione o código de exemplo a seguir:

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

### Criar um arquivo de metadados de ação

1. No repositório `hello-world-composite-run-steps-action` , crie um novo arquivo chamado `action.yml` e adicione o código de exemplo a seguir. Para obter mais informações sobre essa sintaxe, consulte "[`executa` para uma etapa de execução composta](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-run-steps-actions)".

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
  Este arquivo define a entrada de `who-to-greet`, mapeia o número aleatório gerado para a variável de saída `random-number` e executa o script `goodbye.sh`. Também diz ao runner como executar a ação de etapas compostas de execução.

  Para obter mais informações sobre o gerenciamento de saídas, consulte "[`saídas` para as etapas e execução compostas](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-run-steps-actions)".

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

### Testar sua ação em um fluxo de trabalho

O código de fluxo de trabalho a seguir usa a ação hello world completa que você fez em "[Criando uma ação arquivo de metadados](/actions/creating-actions/creating-a-composite-run-steps-action#creating-an-action-metadata-file)".

Copie o código do fluxo de trabalho em um arquivo `.github/workflows/main.yml` em outro repositório, mas substitua `actions/hello-world-composite-run-steps-action@v1` pelo repositório e a tag que você criou. Você também pode substituir a entrada `who-to-greet` pelo seu nome.

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
      uses: actions/hello-world-composite-run-steps-action@v1
      with:
        who-to-greet: 'Mona the Octocat'
    - run: echo random-number ${{ steps.foo.outputs.random-number }} 
      shell: bash
```
{% endraw %}

No seu repositório, clique na aba **Ações** e selecione a última execução do fluxo de trabalho. A saída deve incluir: "Hello Mona the Octocat", o resultado do script "Goodbye" e um número aleatório.
