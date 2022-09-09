---
title: Criando uma ação de contêiner do Docker
intro: 'Este guia apresenta as etapas mínimas exigidas para criar uma ação de contêiner Docker. '
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - Docker
shortTitle: Docker container action
ms.openlocfilehash: f22b361f25f406dfdb1233f4d9ce62f2b6b919dc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518781'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Neste guia, você aprenderá os componentes básicos necessários para criar e usar uma ação do contêiner Docker empacotado. Para manter o foco deste guia nos componentes necessários para empacotar a ação, a funcionalidade do código da ação é mínima. A ação imprime "Olá, mundo" nos registros ou "Olá, [who-to-greet]", se você fornecer um nome personalizado.

Ao terminar esse projeto, você entenderá como criar sua própria ação de contêiner Docker e poderá testá-la em um fluxo de trabalho.

{% data reusables.actions.self-hosted-runner-reqs-docker %}

{% data reusables.actions.context-injection-warning %}

## Pré-requisitos

Pode ser útil ter um entendimento básico das variáveis do ambiente {% data variables.product.prodname_actions %} e do sistema de arquivo do contêiner Docker:

- "[Como usar variáveis de ambiente](/actions/automating-your-workflow-with-github-actions/using-environment-variables)" {% ifversion ghae %}
- "[Sistema de arquivos do contêiner do Docker](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)".
{% else %} 
- "[Sobre executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)" {% endif %}

Antes de começar, você deverá criar um repositório de {% data variables.product.prodname_dotcom %}.

1. Crie um repositório novo no {% data variables.product.product_location %}. Você pode escolher qualquer nome para o repositório ou usar "hello-world-docker-action", como nesse exemplo. Para obter mais informações, confira "[Criar um repositório](/articles/creating-a-new-repository)".

1. Clone o repositório para seu computador. Para obter mais informações, confira "[Como clonar um repositório](/articles/cloning-a-repository)".

1. No seu terminal, mude os diretórios para seu novo repositório.

  ```shell{:copy}
  cd hello-world-docker-action
  ```

## Criar um arquivo Docker

No diretório `hello-world-docker-action`, crie um arquivo `Dockerfile`. Verifique se o seu nome de arquivo está em maiúsculas corretamente (use um `D` maiúsculo, mas não um `f` maiúsculo) se estiver tendo problemas. Para obter mais informações, confira "[Suporte do Dockerfile para o {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions)".

**Dockerfile**
```Dockerfile{:copy}
# Container image that runs your code
FROM alpine:3.10

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

## Criar um arquivo de metadados de ação

Crie um arquivo `action.yml` no diretório `hello-world-docker-action` que você criou acima. Para obter mais informações, confira "[Sintaxe de metadados do {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions)".

{% raw %} **action.yml**
```yaml{:copy}
# action.yml
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet:  # id of input
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # id of output
    description: 'The time we greeted you'
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.who-to-greet }}
```
{% endraw %}

Esses metadados definem uma entrada `who-to-greet` e um parâmetro de saída `time`. Para transmitir entradas para o contêiner do Docker, você deve declarar a entrada usando `inputs` e transmitir a entrada na palavra-chave `args`. Tudo o que você inclui em `args` é transmitido para o contêiner, mas para ter uma melhor capacidade de descoberta para os usuários da sua ação, recomendamos o uso de entradas.

O {% data variables.product.prodname_dotcom %} criará uma imagem com base no `Dockerfile` e executará comandos em um novo contêiner usando essa imagem.

## Gravar um código de ação

Você pode escolher qualquer imagem Docker de base e, portanto, qualquer linguagem para sua ação. O exemplo de script de shell a seguir usa a variável de entrada `who-to-greet` para imprimir "Olá, [quem deve ser saudado]" no arquivo de log.

Na sequência, o script obtém a hora atual e a configura como uma variável de saída que pode ser usada pelas ações executadas posteriormente em um trabalho. Para que o {% data variables.product.prodname_dotcom %} reconheça variáveis de saída, você precisa usar um comando de fluxo de trabalho em uma sintaxe específica: `echo "::set-output name=<output name>::<value>"`. Para obter mais informações, confira "[Comandos do fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter)".

1. Crie um arquivo `entrypoint.sh` no diretório `hello-world-docker-action`.

1. Adicione o código a seguir ao arquivo `entrypoint.sh`.

  **entrypoint.sh**
  ```shell{:copy}
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
  echo "::set-output name=time::$time"
  ```
  Se `entrypoint.sh` for executado sem erros, o status da ação será definido como `success`. Você também pode definir explicitamente códigos de saída no código de ação para fornecer o status de uma ação. Para obter mais informações, confira "[Como configurar códigos de saída para ações](/actions/creating-actions/setting-exit-codes-for-actions)".

1. Torne seu arquivo `entrypoint.sh` executável executando o comando a seguir no sistema.

  ```shell{:copy}
  $ chmod +x entrypoint.sh
  ```

## Criar README

Para que as pessoas saibam como usar sua ação, você pode criar um arquivo README. Um arquivo README é útil quando você planeja compartilhar publicamente sua ação, mas também é uma ótima maneira de lembrá-lo ou sua equipe sobre como usar a ação.

No diretório `hello-world-docker-action`, crie um arquivo `README.md` que especifica as seguintes informações:

- Uma descrição detalhada do que a ação faz.
- Argumentos de entrada e saída obrigatórios.
- Argumentos de entrada e saída opcionais.
- Segredos usados pela ação.
- Variáveis de ambiente que a ação usa.
- Um exemplo de como usar sua ação em um fluxo de trabalho.

**LEIAME.md**
```markdown{:copy}
# Hello world docker action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-docker-action@v1
with:
  who-to-greet: 'Mona the Octocat'
```

## Faça commit, tag e push da sua ação para {% data variables.product.product_name %}

No terminal, faça commit dos arquivos `action.yml`, `entrypoint.sh`, `Dockerfile` e `README.md`.

Adicionar uma tag da versão para versões da sua ação é considerada uma prática recomendada. Para obter mais informações sobre o controle de versão da ação, confira "[Sobre as ações](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)".

```shell{:copy}
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

## Testar sua ação em um fluxo de trabalho

Agora você está pronto para testar sua ação em um fluxo de trabalho. Quando uma ação está em um repositório privado, ela só pode ser usada em fluxos de trabalho no mesmo repositório. As ações públicas podem ser usadas por fluxos de trabalho em qualquer repositório.

{% data reusables.actions.enterprise-marketplace-actions %}

### Exemplo usando uma ação pública

O código de fluxo de trabalho a seguir usa a ação _hello world_ concluída no repositório público [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action). Copie o código de exemplo de fluxo de trabalho a seguir em um arquivo `.github/workflows/main.yml`, mas substitua o `actions/hello-world-docker-action` pelo nome do repositório e da ação. Você também pode substituir a entrada `who-to-greet` pelo seu nome. {% ifversion fpt or ghec %}As ações públicas podem ser usadas mesmo se não forem publicadas em {% data variables.product.prodname_marketplace %}. Para obter mais informações, confira "[Como publicar uma ação](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)". {% endif %}

{% raw %} **.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: actions/hello-world-docker-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

### Exemplo usando uma ação privada

Copie o código de exemplo de fluxo de trabalho a seguir para um arquivo `.github/workflows/main.yml` no repositório da ação. Você também pode substituir a entrada `who-to-greet` pelo seu nome. {% ifversion fpt or ghec %}Esta ação privada não pode ser publicada em {% data variables.product.prodname_marketplace %}, e só pode ser usada neste repositório.{% endif %}

**.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}"{% endraw %}
```

No repositório, clique na guia **Ações** e selecione a execução mais recente do fluxo de trabalho. Em **Trabalhos** ou no grafo de visualização, clique em **Um trabalho para dizer olá**. Você verá "Olá, Mona, o Octocat" ou o nome usado para a entrada `who-to-greet` e o carimbo de data/hora impresso no log.

![Uma captura de tela de sua ação em um fluxo de trabalho](/assets/images/help/repository/docker-action-workflow-run-updated.png)

