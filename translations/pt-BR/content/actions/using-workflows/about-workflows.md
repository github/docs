---
title: Sobre fluxos de trabalho
shortTitle: About workflows
intro: 'Obtenha uma visão geral de alto nível de fluxos de trabalho do {% data variables.product.prodname_actions %}, incluindo gatilhos, sintaxe e recursos avançados.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/learn-github-actions/managing-complex-workflows
  - /actions/using-workflows/advanced-workflow-features
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cb0b834604d49432d34cec48b0c9f27e37161804
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180508'
---
## Sobre fluxos de trabalho

{% data reusables.actions.about-workflows-long %}

## Noções básicas do fluxo de trabalho

Um fluxo de trabalho precisa conter os seguintes componentes básicos:

1. Um ou mais _eventos_ que acionarão o fluxo de trabalho.
1. Um ou mais _trabalhos_, cada um deles será executado em um computador _executor_ e executará uma série de uma ou mais _etapas_.
1. Cada etapa pode executar um script que você define ou executa uma ação, que é uma extensão reutilizável que pode simplificar seu fluxo de trabalho.

Para obter mais informações sobre esses componentes básicos, confira "[Noções básicas sobre o GitHub Actions](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions)".

![Visão geral do fluxo de trabalho](/assets/images/help/images/overview-actions-simple.png)

## Acionando um fluxo de trabalho

{% data reusables.actions.about-triggers %}

Para obter mais informações, confira "[Como acionar um fluxo de trabalho](/actions/using-workflows/triggering-a-workflow)" e para obter uma lista completa de eventos, confira "[Eventos que acionam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows)".

## Sintaxe de fluxo de trabalho

O fluxo de trabalho é definido usando YAML. Para obter a referência completa da sintaxe de YAML para a criação de fluxos de trabalho, confira "[Sintaxe de fluxo de trabalho para ações do GitHub](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)".


{% data reusables.actions.workflow-basic-example-and-explanation %}

Para obter mais informações sobre como gerenciar execuções de fluxo de trabalho, como executar novamente, cancelar ou excluir uma execução de fluxo de trabalho, confira "[Gerenciar execuções de fluxo de trabalho](/actions/managing-workflow-runs)".

## Usando fluxos de trabalho iniciais

{% data reusables.actions.workflow-template-overview %}

Para obter mais informações sobre como usar e criar fluxos de trabalho iniciais, confira "[Usar fluxos de trabalho iniciais](/actions/using-workflows/using-starter-workflows)" e "[Criar fluxos de trabalho iniciais para sua organização](/actions/using-workflows/creating-starter-workflows-for-your-organization)".

## Recursos avançados de fluxo de trabalho

Esta seção descreve brevemente alguns dos recursos avançados de {% data variables.product.prodname_actions %} que ajudam a criar fluxos de trabalho mais complexos.

### Armazenar segredos

Se os fluxos de trabalho usarem dados confidenciais, como senhas ou certificados, salve-os no {% data variables.product.prodname_dotcom %} como _segredos_ e use-os nos seus fluxos de trabalho como variáveis de ambiente. Isso significa que você poderá criar e compartilhar fluxos de trabalho sem precisar incorporar valores confidenciais diretamente na origem YAML do fluxo de trabalho.

Este trabalho de exemplo demonstra como fazer referência a um segredo existente como uma variável de ambiente e enviá-lo como um parâmetro para um comando de exemplo.

{% raw %}
```yaml
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Retrieve secret
        env:
          super_secret: ${{ secrets.SUPERSECRET }}
        run: |
          example-command "$super_secret"
```
{% endraw %}

Para obter mais informações, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

### Criar trabalhos dependentes

Por padrão, os trabalhos do seu fluxo de trabalho são executadas em paralelo e ao mesmo tempo. Se você tiver um trabalho que só precise ser executado após a conclusão de outro, use a palavra-chave `needs` para criar essa dependência. Se um dos trabalhos falhar, todos os trabalhos dependentes serão ignorados. No entanto, se você precisar que os trabalhos continuem, defina isso usando a instrução condicional `if`.

Neste exemplo, os trabalhos `setup`, `build` e `test` são executados em série, com `build` e `test` dependendo da conclusão bem-sucedida do trabalho anterior:

```yaml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh
```

Para obter mais informações, confira "[Como definir trabalhos de pré-requisito](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs)".

### Usar uma matriz

{% data reusables.actions.jobs.about-matrix-strategy %} A matriz é criada usando a palavra-chave `strategy`, que recebe as opções de construção como uma matriz. Por exemplo, essa matriz executará o trabalho várias vezes, usando diferentes versões de Node.js:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [12, 14, 16]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
```

Para obter mais informações, confira "[Como usar uma matriz para seus trabalhos](/actions/using-jobs/using-a-matrix-for-your-jobs)".

{% ifversion actions-caching %}
### Memorizar dependências

Se os seus trabalhos reutilizam dependências regularmente, considere armazenar em cache esses arquivos para ajudar a melhorar o desempenho. Após a criação do armazenamento em cache, ele fica disponível para todos os fluxos de trabalho no mesmo repositório.

Este exemplo demonstra como armazenar o diretório ` ~/.npm` em cache:

```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
```

Para obter mais informações, confira "[Como armazenar dependências em cache para acelerar os fluxos de trabalho](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".
{% endif %}

### Usar bancos de dados e contêineres de serviço

Se o trabalho exigir um banco de dados ou um serviço de cache, use a palavra-chave [`services`](/actions/using-jobs/running-jobs-in-a-container) para criar um contêiner efêmero para hospedar o serviço. O contêiner resultante ficará disponível para todas as etapas desse trabalho e será removido quando o trabalho for concluído. Este exemplo demonstra como um trabalho pode usar `services` para criar um contêiner `postgres` e usar `node` para se conectar ao serviço.

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie
    services:
      postgres:
        image: postgres
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

Para obter mais informações, confira "[Usar serviços em contêiner](/actions/using-containerized-services)".

### Usar etiquetas para encaminhar fluxos de trabalho

Se você quiser ter certeza de que um determinado tipo de executor irá processar seu trabalho, você pode usar etiquetas para controlar os locais onde os trabalhos são executados. Você pode atribuir rótulos a um executor auto-hospedado, além do rótulo padrão de `self-hosted`. Em seguida, você pode consultar essas etiquetas no seu fluxo de trabalho YAML, garantindo que o trabalho seja encaminhado de forma previsível. Os executores hospedados em {% ifversion not ghae %} {% data variables.product.prodname_dotcom %} têm etiquetas pré-definidas atribuídas.{% endif %}

Este exemplo mostra como um fluxo de trabalho pode usar etiquetas para especificar o executor obrigatório:

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

Um fluxo de trabalho só será executado em um executor que tenha todos os rótulos na matriz `runs-on`. O trabalho irá preferencialmente para um executor auto-hospedado inativo com as etiquetas especificadas. {% ifversion fpt or ghec %}Se não houver nenhum disponível e houver um corredor hospedado em {% data variables.product.prodname_dotcom %} com os rótulos especificados, o trabalho irá para um executor hospedado em {% data variables.product.prodname_dotcom %}.{% endif %}

Para saber mais sobre os rótulos de executores auto-hospedados, confira ["Como usar rótulos com executores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)".

{% ifversion fpt or ghec %} Para saber mais sobre os rótulos de executores hospedados no {% data variables.product.prodname_dotcom %}, confira ["Executores e recursos de hardware com suporte"](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Reutilizar fluxos de trabalho
{% data reusables.actions.reusable-workflows %} {% endif %}

### Usar ambientes

Você pode configurar ambientes com regras e segredos de proteção para controlar a execução de trabalhos em um fluxo de trabalho. Cada trabalho em um fluxo de trabalho pode fazer referência a um único ambiente. Todas as regras de proteção configuradas para o ambiente têm de ser aprovadas antes que um trabalho de referência ao ambiente seja enviado a um executor. Para obter mais informações, confira "[Como usar ambientes para implantação](/actions/deployment/using-environments-for-deployment)".
