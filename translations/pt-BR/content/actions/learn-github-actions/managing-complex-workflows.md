---
title: Gerenciar fluxos de trabalhos complexos
shortTitle: Gerenciar fluxos de trabalhos complexos
intro: 'Este aba mostra como usar os recursos avançados de {% data variables.product.prodname_actions %}, com gestão de segredos, trabalhos dependentes, armazenamento em cache, criação de matrizes e etiquetas.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Visão Geral

Este artigo descreve alguns dos recursos avançados de {% data variables.product.prodname_actions %} que ajudam você a trabalhar criar fluxos de trabalho mais complexos.

### Armazenar segredos

Se os seus fluxos de trabalho usarem dados confidenciais, como senhas ou certificados, você pode salvá-los em {% data variables.product.prodname_dotcom %} como _segredos_ e usá-los nos seus fluxos de trabalho como variáveis de ambiente. Isto significa que você poderá criar e compartilhar fluxos de trabalho sem ter de incorporar valores sensíveis diretamente no fluxo de trabalho de YAML.

Esta ação de exemplo demonstra como fazer referência a um segredo existente como uma variável de ambiente e enviá-lo como um parâmetro para um comando de exemplo.

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

Para obter mais informações, consulte "[Criar e armazenar segredos encriptados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

### Criar trabalhos dependentes

Por padrão, os trabalhos do seu fluxo de trabalho são executadas em paralelo e ao mesmo tempo. Portanto, se você tem um trabalho que só deve ser executado após a conclusão de outro trabalho, você pode usar a palavra-chave `needs` para criar esta dependência. Se um dos trabalhos falhar, todos os trabalhos dependentes serão suprimidos. No entanto, se você precisa que os trabalhos continuem, você pode definir isso usando a declaração condicional [`se`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif).

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

Para obter mais informações, consulte [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds).

### Usar uma matriz de criação

Você pode usar uma matriz de criação se quiser que seu fluxo de trabalho execute testes em várias combinações de sistemas operacionais, plataformas e linguagens. A matriz de criação é criada usando a palavra-chave `estratégia`, que recebe as opções de compilação como um array. Por exemplo, essa matriz de criação irá executar o trabalho várias vezes, usando diferentes versões do Node.js:

{% raw %}
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [6, 8, 10]
    steps:
      - uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node }}
```
{% endraw %}

Para obter mais informações, consulte [`>jobs.<job_id>.strategy.matrix`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix).

### Memorizar dependências

Executores hospedados em {% data variables.product.prodname_dotcom %} são iniciados como ambientes novos para cada trabalho. Portanto, se os seus trabalhos reutilizam dependências regularmente, você pode considerar fazer armazenamento em cache desses arquivos para ajudar a melhorar o desempenho. Após a criação do armazenamento em cache, ele fica disponível para todos os fluxos de trabalho no mesmo repositório.

Este exemplo demonstra como armazenar em cache o diretório `~/.npm`:

{% raw %}
```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: actions/cache@v2
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
```
{% endraw %}

Para obter mais informações, consulte "[Memorizando dependências para acelerar fluxos de trabalho](/actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows)".

### Usar bancos de dados e contêineres de serviço

Se sua tarefa exigir um banco de dados ou serviço de cache, você poderá usar a palavra-chave [`serviços`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idservices) para criar um contêiner efêmero para hospedar o serviço; o contêiner resultante ficará disponível em todas as etapas do trabalho e será removido quando o trabalho for concluído. Este exemplo demonstra como um trabalho pode usar `serviços` para criar um contêiner `postgres` e, em seguida, usar o `nó` para conectar-se ao serviço.

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
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

Para obter mais informações, consulte "[Usar bancos de dados e contêineres de serviço](/actions/configuring-and-managing-workflows/using-databases-and-service-containers)".

### Usar etiquetas para encaminhar fluxos de trabalho

Esse recurso ajuda você a atribuir tarefas a um executor auto-hospedado específico. Se você quiser ter certeza de que um determinado tipo de executor irá processar seu trabalho, você pode usar etiquetas para controlar os locais onde os trabalhos são executados. Você pode atribuir etiquetas a um corredor auto-hospedado e, em seguida, consultá-las no fluxo de trabalho de YAML, garantindo que o trabalho seja encaminhado de uma forma previsível.

Este exemplo mostra como um fluxo de trabalho pode usar etiquetas para especificar o executor obrigatório:

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

Para obter mais informações, consulte  ["Usar etiquetas com executores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)".

### Próximas etapas

Para continuar aprendendo sobre {% data variables.product.prodname_actions %}, consulte "[Compartilhar fluxos de trabalho com a sua organização](/actions/learn-github-actions/sharing-workflows-with-your-organization)".
