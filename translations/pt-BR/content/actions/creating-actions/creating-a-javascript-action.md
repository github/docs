---
title: Criando uma ação de JavaScript
shortTitle: Create a JavaScript action
intro: 'Neste guia, você aprenderá como criar uma ação JavaScript usando o conjunto de ferramentas de ações.'
redirect_from:
  - /articles/creating-a-javascript-action
  - /github/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/building-actions/creating-a-javascript-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - JavaScript
ms.openlocfilehash: 60fd562df55756afd081c395d9cffee89c2c04d6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192742'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Neste guia, você aprenderá os componentes básicos necessários para criar e usar uma ação JavaScript empacotada. Para manter o foco deste guia nos componentes necessários para empacotar a ação, a funcionalidade do código da ação é mínima. A ação imprime "Olá, mundo" nos registros ou "Olá, [who-to-greet]", se você fornecer um nome personalizado.

Este guia usa o módulo Node.js do kit de ferramentas {% data variables.product.prodname_actions %} para acelerar o desenvolvimento. Para obter mais informações, confira o repositório [actions/toolkit](https://github.com/actions/toolkit).

Ao terminar esse projeto, você entenderá como criar sua própria ação JavaScript e poderá testá-la em um fluxo de trabalho.

{% data reusables.actions.pure-javascript %}

{% data reusables.actions.context-injection-warning %}

## Pré-requisitos

Antes de começar, você deverá fazer o download do Node.js e criar um repositório público em {% data variables.product.prodname_dotcom %}.

1. Baixe e instale Node.js {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}16.x{% else %}12.x{% endif %}, que inclui npm.

  {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} https://nodejs.org/en/download/{% else %} https://nodejs.org/en/download/releases/{% endif %}

1. Crie um repositório público no {% data variables.location.product_location %} e chame-o de "hello-world-javascript-action". Para obter mais informações, confira "[Criar um repositório](/articles/creating-a-new-repository)".

1. Clone o repositório para seu computador. Para obter mais informações, confira "[Como clonar um repositório](/articles/cloning-a-repository)".

1. No seu terminal, mude os diretórios para seu novo repositório.

  ```shell{:copy}
  cd hello-world-javascript-action
  ```

1. No terminal, inicialize o diretório com o npm para gerar um arquivo `package.json`.

  ```shell{:copy}
  npm init -y
  ```

## Criar um arquivo de metadados de ação

Crie um arquivo chamado `action.yml` no diretório `hello-world-javascript-action` com o código de exemplo a seguir. Para obter mais informações, confira "[Sintaxe de metadados do {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions)".

```yaml{:copy}
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
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
```

Esse arquivo define a entrada `who-to-greet` e a saída `time`. O arquivo também diz ao executor da ação como começar a executar essa ação JavaScript.

## Adicionar pacotes do kit de ferramenta de ações

O conjunto de ferramentas de ações é uma coleção de pacotes Node.js que permite a rápida criação de ações JavaScript com mais consistência.

O pacote [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) do kit de ferramentas fornece uma interface para os comandos de fluxo de trabalho, variáveis de entrada e saída, status de saída e mensagens de depuração.

O kit de ferramentas também oferece um pacote [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github) que retorna um cliente REST do Octokit autenticado e o acesso aos contextos do GitHub Actions.

O kit de ferramentas oferece mais do que os pacotes `core` e `github`. Para obter mais informações, confira o repositório [actions/toolkit](https://github.com/actions/toolkit).

No terminal, instale os pacotes `core` e `github` do kit de ferramentas de ações.

```shell{:copy}
npm install @actions/core
npm install @actions/github
```

Agora você verá um diretório `node_modules` com os módulos que acabou de instalar e um arquivo `package-lock.json` com as dependências do módulo instaladas e as versões de cada módulo instalado.

## Gravar um código de ação

Essa ação usa o kit de ferramentas para obter a variável de entrada `who-to-greet` obrigatória no arquivo de metadados da ação e imprime "Olá, [quem deve ser saudado]" em uma mensagem de depuração no log. Na sequência, o script obtém a hora atual e a configura como uma variável de saída que pode ser usada pelas ações executadas posteriormente em um trabalho.

O GitHub Actions fornece informações de contexto sobre o evento webhook, Git refs, fluxo de trabalho, ação e a pessoa que acionou o fluxo de trabalho. Para acessar as informações de contexto, use o pacote `github`. A ação que você vai escrever imprimirá a carga do evento webhook no log.

Adicione um novo arquivo chamado `index.js` com o código a seguir.

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
```
{% endraw %}

Se um erro for gerado no exemplo `index.js` acima, `core.setFailed(error.message);` usa o pacote [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) do kit de ferramentas de ações para registrar uma mensagem em log e definir um código de saída com falha. Para obter mais informações, confira "[Como configurar códigos de saída para ações](/actions/creating-actions/setting-exit-codes-for-actions)".

## Criar README

Para que as pessoas saibam como usar sua ação, você pode criar um arquivo README. Um arquivo README é útil quando você planeja compartilhar publicamente sua ação, mas também é uma ótima maneira de lembrá-lo ou sua equipe sobre como usar a ação.

No diretório `hello-world-javascript-action`, crie um arquivo `README.md` que especifica as seguintes informações:

- Uma descrição detalhada do que a ação faz.
- Argumentos de entrada e saída obrigatórios.
- Argumentos de entrada e saída opcionais.
- Segredos usados pela ação.
- Variáveis de ambiente que a ação usa.
- Um exemplo de como usar sua ação em um fluxo de trabalho.

````markdown{:copy}
# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
```
````

## Fazer commit, tag e push da sua ação para o GitHub

O {% data variables.product.product_name %} baixa cada ação executada em um fluxo de trabalho durante o runtime e os executa como um pacote completo de código para usar comandos de fluxo de trabalho como `run` para interagir com o computador do executor. Isso significa que você deve incluir quaisquer dependências de pacotes necessárias para executar o código JavaScript. Você precisará fazer check-in dos pacotes `core` e `github` do kit de ferramentas no repositório da ação.

No terminal, faça commit dos arquivos `action.yml`, `index.js`, `node_modules`, `package.json`, `package-lock.json` e `README.md`. Se você adicionou um arquivo `.gitignore` que lista `node_modules`, remova essa linha para fazer commit do diretório `node_modules`.

Adicionar uma tag da versão para versões da sua ação é considerada uma prática recomendada. Para obter mais informações sobre o controle de versão da ação, confira "[Sobre as ações](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)".

```shell{:copy}
git add action.yml index.js node_modules/* package.json package-lock.json README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

Fazer check-in do diretório `node_modules` pode causar problemas. Como alternativa, você pode usar uma ferramenta chamada [`@vercel/ncc`](https://github.com/vercel/ncc) para compilar seu código e os módulos em um só arquivo usado para distribuição.

1. Instale `vercel/ncc` executando este comando no terminal.
  `npm i -g @vercel/ncc`

1. Compile o arquivo `index.js`.
  `ncc build index.js --license licenses.txt`

  Você verá um novo arquivo `dist/index.js` com o código e os módulos compilados.
  Você também verá um arquivo `dist/licenses.txt` complementar contendo todas as licenças do `node_modules` que você está usando.

1. Altere a palavra-chave `main` no arquivo `action.yml` para usar o novo arquivo `dist/index.js`.
 `main: 'dist/index.js'`

1. Se você já tiver feito check-in do diretório `node_modules`, remova-o.
  `rm -rf node_modules/*`

1. No terminal, faça commit das atualizações para os arquivos `action.yml`, `dist/index.js` e `node_modules`.
```shell{:copy}
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

## Testar sua ação em um fluxo de trabalho

Agora você está pronto para testar sua ação em um fluxo de trabalho. Quando uma ação está em um repositório privado, ela só pode ser usada em fluxos de trabalho no mesmo repositório. As ações públicas podem ser usadas por fluxos de trabalho em qualquer repositório.

{% data reusables.actions.enterprise-marketplace-actions %}

### Exemplo usando uma ação pública

Este exemplo demonstra como sua nova ação pública pode ser executada dentro de um repositório externo.

Copie o YAML a seguir em um novo arquivo em `.github/workflows/main.yml` e atualize a linha `uses: octocat/hello-world-javascript-action@v1.1` com seu nome de usuário e o nome do repositório público criado acima. Você também pode substituir a entrada `who-to-greet` pelo seu nome.

{% raw %}
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: octocat/hello-world-javascript-action@v1.1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

Quando esse fluxo de trabalho for disparado, o executor baixará a ação `hello-world-javascript-action` do repositório público e a executará.

### Exemplo usando uma ação privada

Copie o código de fluxo de trabalho em um arquivo `.github/workflows/main.yml` no repositório da ação. Você também pode substituir a entrada `who-to-greet` pelo seu nome.

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
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}{% endraw %}"
```

No repositório, clique na guia **Ações** e selecione a execução mais recente do fluxo de trabalho. Em **Trabalhos** ou no grafo de visualização, clique em **Um trabalho para dizer olá**. Você verá "Olá, Mona, o Octocat" ou o nome usado para a entrada `who-to-greet` e o carimbo de data/hora impresso no log.

![Uma captura de tela de sua ação em um fluxo de trabalho](/assets/images/help/repository/javascript-action-workflow-run-updated-2.png)

## Repositórios de modelos para criar ações javaScript

{% data variables.product.prodname_dotcom %} fornece repositórios de modelo para criar ações JavaScript e TypeScript. Você pode usar esses modelos para começar rapidamente a criar uma nova ação que inclui testes, lint e outras práticas recomendadas.

* [`javascript-action` repositório de modelo](https://github.com/actions/javascript-action)
* [`typescript-action` repositório de modelo](https://github.com/actions/typescript-action)
