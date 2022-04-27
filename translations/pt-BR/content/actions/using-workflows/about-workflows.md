---
title: Sobre fluxos de trabalho
shortTitle: Sobre fluxos de trabalho
intro: 'Obtenha uma visão geral de alto nível dos fluxos de trabalho de {% data variables.product.prodname_actions %}, incluindo gatilhos, sintaxe e funcionalidades avançadas.'
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
---

## Sobre fluxos de trabalho

{% data reusables.actions.about-workflows-long %}

## Noções básicas do fluxo de trabalho

Um fluxo de trabalho deve conter os seguintes componentes básicos:

1. Um ou mais _eventos_ que acionarão o fluxo de trabalho.
1. Um ou mais _trabalhos_, cada uma das quais será executado em uma máquina de _executor_ e executará uma série de uma ou mais _etapas_.
1. Cada etapa pode executar um script que você define ou executa uma ação, que é uma extensão reutilizável que pode simplificar seu fluxo de trabalho.

For more information on these basic components, see "[Understanding GitHub Actions](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions)."

![Visão geral do fluxo de trabalho](/assets/images/help/images/overview-actions-simple.png)

## Acionando um fluxo de trabalho

{% data reusables.actions.about-triggers %}

Para obter mais informações, consulte "[Acionando um workflow](/actions/using-workflows/triggering-a-workflow)" e para obter uma lista completa de eventos, consulte "[Eventos que acionam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows)".

## Sintaxe de fluxo de trabalho

O fluxo de trabalho é definido usando YAML. Para a referência completa da sintaxe do YAML para autorizar fluxos de trabalho, consulte "[Sintaxe no fluxo de trabalho para o GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)".


{% data reusables.actions.workflow-basic-example-and-explanation %}

Para mais ao gerenciar execuções do fluxo de trabalho, como re-executar, cancelar ou excluir a execução de um fluxo de trabalho, consulte "[Gerenciando execuções do fluxo de trabalho](/actions/managing-workflow-runs)".

## Usando fluxos de trabalho iniciais

{% data reusables.actions.workflow-template-overview %}

Para obter mais informações sobre como usar e criar fluxos de trabalho iniciais, consulte "[Usando um fluxo de trabalho inicial](/actions/using-workflows/using-starter-workflows)" e "[Criando fluxos de trabalho iniciais para a sua organização](/actions/using-workflows/creating-starter-workflows-for-your-organization)".

## Recursos avançados de fluxo de trabalho

Esta seção descreve brevemente algumas das funcionalidades avançadas de {% data variables.product.prodname_actions %} que ajudam você a criar fluxos de trabalho mais complexos.

### Armazenar segredos

Se os seus fluxos de trabalho usarem dados confidenciais, como senhas ou certificados, você pode salvá-los em {% data variables.product.prodname_dotcom %} como _segredos_ e usá-los nos seus fluxos de trabalho como variáveis de ambiente. Isso significa que você poderá criar e compartilhar fluxos de trabalho sem ter que incorporar valores sensíveis diretamente na fonte do YAML do fluxo de trabalho.

O exemplo desse trabalho demonstra como fazer referência a um segredo existente como uma variável de ambiente e enviá-lo como um parâmetro para um comando de exemplo.

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

Para obter mais informações, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

### Criar trabalhos dependentes

Por padrão, os trabalhos do seu fluxo de trabalho são executadas em paralelo e ao mesmo tempo. Se você tem um trabalho que só deve ser executado após a conclusão de outro trabalho, você pode usar a palavra-chave `needs` para criar esta dependência. Se um dos trabalhos falhar, todos os trabalhos dependentes serão suprimidos. No entanto, se você precisa que os trabalhos continuem, você pode definir isso usando a declaração condicional `se`.

Neste exemplo, os trabalhos de `configuração`, `criação` e `teste` executados em série, com `criação` e `teste` sendo dependentes da conclusão bem-sucedida do trabalho que os precede:

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

Para obter mais informações, consulte[Definindo trabalhos de pré-requisito](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs)".

### Using a matrix

{% data reusables.actions.jobs.about-matrix-strategy %} The matrix is created using the `strategy` keyword, which receives the build options as an array. For example, this matrix will run the job multiple times, using different versions of Node.js:

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

For more information, see "[Using a matrix for your jobs](/actions/using-jobs/using-a-matrix-for-your-jobs)."

{% ifversion fpt or ghec %}
### Memorizar dependências

Executores hospedados em {% data variables.product.prodname_dotcom %} são iniciados como ambientes novos para cada trabalho. Portanto, se os seus trabalhos reutilizam dependências regularmente, você pode considerar fazer armazenamento em cache desses arquivos para ajudar a melhorar o desempenho. Após a criação do armazenamento em cache, ele fica disponível para todos os fluxos de trabalho no mesmo repositório.

Este exemplo demonstra como armazenar em cache o diretório `~/.npm`:

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

Para obter mais informações, consulte "[Memorizar dependências para acelerar fluxos de trabalho](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".
{% endif %}

### Usar bancos de dados e contêineres de serviço

Se sua tarefa exigir um banco de dados ou serviço de cache, você poderá usar a palavra-chave [`serviços`](/actions/using-jobs/running-jobs-in-a-container) para criar um contêiner efêmero para hospedar o serviço; o contêiner resultante ficará disponível em todas as etapas do trabalho e será removido quando o trabalho for concluído. Este exemplo demonstra como um trabalho pode usar `serviços` para criar um contêiner `postgres` e, em seguida, usar o `nó` para conectar-se ao serviço.

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

Para obter mais informações, consulte "[Usando serviços dentro de contêineres](/actions/using-containerized-services)".

### Usar etiquetas para encaminhar fluxos de trabalho

Se você quiser ter certeza de que um determinado tipo de executor irá processar seu trabalho, você pode usar etiquetas para controlar os locais onde os trabalhos são executados. Você pode atribuir etiquetas a um executor auto-hospedado, além de sua etiqueta padrão de `auto-hospedado`. Em seguida, você pode consultar essas etiquetas no seu fluxo de trabalho YAML, garantindo que o trabalho seja encaminhado de forma previsível. Os executores hospedados em {% ifversion not ghae %} {% data variables.product.prodname_dotcom %} têm etiquetas pré-definidas atribuídas.{% endif %}

Este exemplo mostra como um fluxo de trabalho pode usar etiquetas para especificar o executor obrigatório:

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

Um fluxo de trabalho só é executado em um executor que possui todas as etiquetas na matriz `runs-on`. O trabalho irá preferencialmente para um executor auto-hospedado inativo com as etiquetas especificadas. {% ifversion fpt or ghec %}Se não houver nada disponível e um executor hospedado em {% data variables.product.prodname_dotcom %} com os etiquetas especificadas estiver presente, o trabalho irá a um executor hospedado em {% data variables.product.prodname_dotcom %}.{% endif %}

Para aprender mais sobre etiquetas de executores auto-hospedados, consulte "["Usando etiquetas com executores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)".

{% ifversion fpt or ghec %}
Para saber mais sobre as etiquetas do executor hospedado em {% data variables.product.prodname_dotcom %}, consulte "["Executores e recursos de hardware compatíveis"](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)."
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Reutilizando fluxos de trabalho
{% data reusables.actions.reusable-workflows %}
{% endif %}

### Usar ambientes

Você pode configurar ambientes com regras de proteção e segredos para controlar a execução de trabalhos no fluxo de trabalho. Cada trabalho em um fluxo de trabalho pode fazer referência a um único ambiente. Todas as regras de proteção configuradas para o ambiente têm de ser aprovadas antes que um trabalho de referência ao ambiente seja enviado a um executor. Para obter mais informações, consulte "[Usando ambientes para implantação](/actions/deployment/using-environments-for-deployment)".
