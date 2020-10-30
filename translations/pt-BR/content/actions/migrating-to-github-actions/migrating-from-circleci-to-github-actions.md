---
title: Migrar do CircleCI para o GitHub Actions
intro: 'O GitHub Actions e o CircleCI compartilham várias semelhanças em termos de configuração, o que torna a migração para o GitHub Actions relativamente fácil.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

O CircleCI e {% data variables.product.prodname_actions %} permitem criar fluxos de trabalho que criam, testam, publicam, lançam e implementam código automaticamente. O CircleCI e o {% data variables.product.prodname_actions %} compartilham algumas semelhanças em termos de configuração do fluxo de trabalho:

- Os arquivos de configuração do fluxo de trabalho são gravados no YAML e armazenados no repositório.
- Os fluxos de trabalho incluem um ou mais trabalhos.
- Os trabalhos incluem uma ou mais etapas ou comandos individuais.
- É possível reutilizar e compartilhar novamente etapas ou tarefas com a comunidade.

Para obter mais informações, consulte "[Conceitos básicos para {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

### Principais diferenças

Ao fazer a migração do CircleCI, considere as seguintes diferenças:

- O paralelismo do teste automático do CircleCI agrupa automaticamente os testes de acordo com regras especificadas pelo usuário ou com informações históricas de temporização. Esta funcionalidade não foi criada em {% data variables.product.prodname_actions %}.
- As ações que são executadas em contêineres Docker são sensíveis a problemas de permissões, uma vez que os contêineres têm um mapeamento diferente de usuários. Você pode evitar muitos desses problemas se não usar a instrução `USUÁRIO` no seu *arquivo Docker*. Para obter mais informações sobre o sistema de arquivos Docker, consulte "[Ambientes virtuais para executores hospedados em {% data variables.product.product_name %}](/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem)".

### Migrar fluxos de trabalhos e trabalhos

O CircleCI define os `fluxos de trabalho` no arquivo *config.yml*, o que permite configurar mais de um fluxo de trabalho. O {% data variables.product.product_name %} exige um arquivo de fluxo de trabalho por fluxo de trabalho e, consequentemente, não exige que você declare os `fluxos de trabalho`. Será necessário criar um novo arquivo de fluxo de trabalho para cada fluxo de trabalho configurado em *config.yml*.

Tanto o CircleCI quanto o {% data variables.product.prodname_actions %} configuram `trabalhos` no arquivo de configuração usando uma sintaxe similar. Se você configurar qualquer dependência entre trabalhos usando `requires` em seu fluxo de trabalho CircleCI, você poderá usar a sintaxe equivalente {% data variables.product.prodname_actions %} `needs`. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

### Migrar orbes para ações

Tanto o CircleCI quanto o {% data variables.product.prodname_actions %} fornecem um mecanismo para reutilizar e compartilhar tarefas em um fluxo de trabalho. O CircleCI usa um conceito chamado orbs, escrito em YAML, para fornecer tarefas que as pessoas podem reutilizar em um fluxo de trabalho. O {% data variables.product.prodname_actions %} tem componentes potentes, reutilizáveis e flexíveis denominados ações, que você cria com arquivos JavaScript ou imagens Docker. Você pode criar ações gravando códigos personalizados que interajam com o seu repositório da maneira que você quiser, inclusive fazendo integrações com as APIs do {% data variables.product.product_name %} e qualquer API de terceiros disponível publicamente. Por exemplo, as ações podem publicar módulos npm, enviar alertas SMS quando problemas urgentes forem criados ou implantar códigos prontos para produção. Para obter mais informações, consulte "[Criar ações](/actions/creating-actions)".

O CircleCI pode reutilizar partes dos fluxos de trabalho com âncoras e aliases YAML. O {% data variables.product.prodname_actions %} suporta a necessidade mais comum de reutilização usando matrizes de criação. Para obter mais informações sobre matrizes de criação, consulte "[Configurando um fluxo de trabalho](/actions/configuring-and-managing-workflows/configuring-a-workflow#configuring-a-build-matrix)".

### Usar imagens do Docker


Tanto o CircleCI quanto o {% data variables.product.prodname_actions %} suportam executar etapas dentro de uma imagem do Docker.

O CircleCI fornece um conjunto de imagens pré-construídas com dependências comuns. Estas imagens têm o `USUÁRIO` definido como `circleci`, o que faz com que as permissões entrem em conflito com {% data variables.product.prodname_actions %}.

Recomendamos que você se afaste das imagens pré-criadas do CircleCI, ao migrar para {% data variables.product.prodname_actions %}. Em muitos casos, você pode usar ações para instalar as dependências adicionais de que você precisa.

Para obter mais informações sobre o sistema de arquivos Docker, consulte "[Ambientes virtuais para executores hospedados em {% data variables.product.product_name %}](/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem)".

Para obter mais informações sobre ferramentas e pacotes disponíveis em ambientes virtuais hospedados em {% data variables.product.prodname_dotcom %}, consulte "[Software instalado em executores hospedados no GitHub](/actions/reference/software-installed-on-github-hosted-runners)".

### Usar variáveis e segredos

O CircleCI e o {% data variables.product.prodname_actions %} suportam configurações das variáveis de ambiente no arquivo de configuração e criação de segredos usando o CircleCI ou a interface de usuário do {% data variables.product.product_name %}.

Para obter mais informações, consulte "[Usar variáveis de ambiente](/actions/configuring-and-managing-workflows/using-environment-variables)" e "[Criar e usar segredos encriptados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

### Armazenar em cache

O CircleCI e o {% data variables.product.prodname_actions %} fornecem um método para armazenar arquivos de cache no arquivo de configuração manualmente.

Abaixo, há um exemplo da sintaxe para cada sistema.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- restore_cache:
    keys:
      - v1-npm-deps-{{ checksum "package-lock.json" }}
      - v1-npm-deps-
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- nome: Módulos do nó da cache
  usa: actions/cache@v2
  com:
    caminho: ~/.npm
    key: v1-npm-deps-${{ hashFiles('**/package-lock.json') }}
    restore-keys: v1-npm-deps-
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, consulte "[Memorizando dependências para acelerar fluxos de trabalho](/actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows)".

{% data variables.product.prodname_actions %} não tem o equivalente ao Docker Layer Caching (DLC) do CircleCI.

### Dados persistentes entre trabalhos

Tanto a CircleCI quanto a {% data variables.product.prodname_actions %} fornecem mecanismos para persistir dados entre trabalhos.

Abaixo está um exemplo no CircleCI e na sintaxe de configuração do {% data variables.product.prodname_actions %}.

<table>
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- persist_to_workspace:
    root: workspace
    paths:
      - math-homework.txt

...

- attach_workspace:
    at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- name: Upload math result for job 1
  uses: actions/upload-artifact@v2
  with:
    name: homework
    path: math-homework.txt

...

- name: Download math result for job 1
  uses: actions/download-artifact@v2
  with:
    name: homework
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, consulte "[Dados persistentes do fluxo de trabalho que usam artefatos](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)".

### Usar bancos de dados e contêineres de serviço

Ambos os sistemas permitem que você inclua contêineres adicionais para bases de dados, memorização ou outras dependências.

No CircleCI, a primeira imagem listada no *config.yaml* é a imagem principal usada para executar comandos. O {% data variables.product.prodname_actions %} usa seções explícitas: usa o`contêiner` para o contêiner primário e lista contêineres adicionais em `serviços`.

Abaixo está um exemplo no CircleCI e na sintaxe de configuração do {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

trabalhos:

  ruby-26:
    docker:
      - image: circleci/ruby:2.6.3-node-browsers-legacy
        ambiente:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - imagem: postgres:10.1-alpine
        ambiente:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby26
          POSTGRES_PASSWORD: ""

    working_directory: ~/administrate

    steps:
      - checkout

      # Agrupar a instalação de dependências
      - run: bundle install --path vendor/bundle

      # Aguardar DB
      - executar: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Configurar o ambiente
      - run: cp .sample.env .env

      # Configurar o banco de dados
      - run: bundle exec rake db:setup

      # Executar os testes
      - run: bundle exec rake


fluxos de trabalho:
  version: 2
  criar:
    trabalhos:
      - ruby-26
...

- attach_workspace:
    at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
nome: Contêineres

em: [push]

trabalhos:
  construir:

    runs-on: ubuntu-latest
    contêiner: circleci/ruby:2.6.3-node-browsers-legacy

    env:
      PGHOST: postgres
      PGUSER: administrate
      RAILS_ENV: test

    serviços:
      postgres:
        imagem: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        portas:
        - 5432:5432
        # Adicionar uma verificação geral
        opções: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    etapas:
    # Este arquivo Docker altera as configurações de USUÁRIO para circleci em vez de usar o usuário-padrão. Portanto, precisamos atualizar as permissões do arquivo para esta imagem funcionar no Actions.
    # Veja https://docs.github.com/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem
    - name: Configurar permissões do sistema de arquivos
      run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
    - uses: actions/checkout@v2
    - name: Instalar dependências
      run: bundle install --path vendor/bundle
    - name: Configuração do ambiente de instalação
      run: cp .sample.env .env
    - name: Configurar banco de dados
      run: bundle exec rake db:setup
    - name: Executar testes
      run: bundle exec rake
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, consulte "[Sobre contêineres de serviço](/actions/configuring-and-managing-workflows/about-service-containers)".

### Exemplo completo

Abaixo, há um exemplo concreto. O lado esquerdo mostra o CircleCI *config.yml* atual para o repositório [thoughtbot/administrador](https://github.com/thoughtbot/administrate). O lado direito mostra o equivalente {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
versão: 2.1

comandos:
  shared_steps:
    etapas:
      - checkout

      # Restaurar dependências memorizadas
      - restore_cache:
          nome: Restore bundle cache
          chave: administrate-{{ checksum "Gemfile.lock" }}

      # Agrupar instalação de dependências
      - executar: bundle install --path vendor/bundle

      # Memorizar dependências
      - save_cache:
          nome: Armazenar agrupamento da cache
          chave: administrate-{{ checksum "Gemfile.lock" }}
          caminho:
            - vendor/bundle

      # Aguardar DB
      - executar: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Configurar o ambiente
      - executar: cp .sample.env .env

      # Configurar o ambiente
      - executar: bundle exec rake db:setup

      # Executar os testes
      - executar: bundle exec rake

default_job: &default_job
  working_directory: ~/administrate
  etapas:
    - shared_steps
    # Executar os testes com múltiplas versões do Rails
    - executar: bundle exec appraisal install
    - executar: bundle exec appraisal rake

trabalhos:
  ruby-25:
    <<: *default_job
    docker:
      - image: circleci/ruby:2.5.0-node-browsers
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""

  ruby-26:
    <<: *default_job
    docker:
      - image: circleci/ruby:2.6.3-node-browsers-legacy
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby26
          POSTGRES_PASSWORD: ""


fluxos de trabalho:
  versão: 2
  multiple-rubies:
    trabalhos:
      - ruby-26
      - ruby-25
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
nome: Contêineres

em: [push]

trabalhos:
  criar:

    estratégia:
      matriz:
        ruby: [2.5, 2.6.3]

    runs-on: ubuntu-latest

    env:
      PGHOST: localhost
      PGUSER: administrate
      RAILS_ENV: test

    serviços:
      postgres:
        imagem: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        portas:
        - 5432:5432
        # Adicionar verificação geral
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    etapas:
    - usa: actions/checkout@v2
    - nome: Configurar Ruby
      usa: eregon/use-ruby-action@master
      com:
        ruby-version: ${{ matrix.ruby }}
    - nome: Memorizar dependências
      usa: actions/cache@v2
      com:
        caminho: vendor/bundle
        chave: administrate-${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}
    - nome: Instalar títulos do postgres
      executar : sudo apt-get install libpq-dev
    - nome: Install dependencies
      executar : bundle install --path vendor/bundle
    - Nome: Definir configuração do ambiente
      executar: cp .sample.env .env
    - nome: Configurar banco de dados
      executar: bundle exec rake db:setup
    - nome: Executar testes
      executar: bundle exec rake
    - nome: Install appraisal
      executar: bundle exec appraisal install
    - Nome: Run appraisal
      executar: bundle exec appraisal rake
```
{% endraw %}
</td>
</tr>
</table>
