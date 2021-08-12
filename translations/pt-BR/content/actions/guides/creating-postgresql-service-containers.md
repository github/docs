---
title: Criar contêineres de serviço PostgreSQL
shortTitle: Contêineres de serviço do PostgreSQL
intro: Você pode criar um contêiner de serviço PostgreSQL para usar no seu fluxo de trabalho. Este guia mostra exemplos para criar um serviço PostgreSQL para trabalhos executados em contêineres ou diretamente na máquina executora.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers
  - /actions/configuring-and-managing-workflows/creating-postgresql-service-containers
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Containers
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introdução

Este guia mostra exemplos de fluxo de trabalho que configuram um contêiner de serviço usando a imagem `postgres` do Docker Hub. O fluxo de trabalho executa um script que se conecta ao serviço do PostgreSQL, cria uma tabela e, em seguida, preenche-a com dados. Para testar se o fluxo de trabalho cria e preenche a tabela do PostgreSQL, o script imprime os dados da tabela para o console.

{% data reusables.github-actions.docker-container-os-support %}

### Pré-requisitos

{% data reusables.github-actions.service-container-prereqs %}

Também pode ser útil ter um entendimento básico de YAML, a sintaxe para {% data variables.product.prodname_actions %} e PostgreSQL. Para obter mais informações, consulte:

- "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[Tutorial do PostgreSQL](https://www.postgresqltutorial.com/)" na documentação do PostgreSQL

### Executar trabalhos em contêineres

{% data reusables.github-actions.container-jobs-intro %}

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml{:copy}
name: PostgreSQL service example
on: push

jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:10.18-jessie

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      postgres:
        # Docker Hub image
        image: postgres
        # Provide the password for postgres
        env:
          POSTGRES_PASSWORD: postgres
        # Set health checks to wait until postgres has started
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      # Downloads a copy of the code in your repository before running CI tests
      - name: Check out repository code
        uses: actions/checkout@v2

      # Performs a clean installation of all dependencies in the `package.json` file
      # For more information, see https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Runs a script that creates a PostgreSQL table, populates
        # the table with data, and then retrieves the data.
        run: node client.js
        # Environment variables used by the `client.js` script to create a new PostgreSQL table.
        env:
          # O nome do host usado para comunicar-se com o contêiner de serviço do PostgreSQL
          POSTGRES_HOST: postgres
          # A porta-padrão do PostgreSQL
          POSTGRES_PORT: 5432
```
{% endraw %}

#### Configurar o trabalho executor

{% data reusables.github-actions.service-container-host %}

{% data reusables.github-actions.postgres-label-description %}

```yaml{:copy}
trabalhos:
  # Etiqueta do trabalho do contêiner
  container-job:
    # Os contêineres devem ser executados em sistemas operacionais baseados no Linux
    runs-on: ubuntu-latest
    # Imagem do Docker Hub em que o `container-job` é executado
    contêiner: node:10.18-jessie

    # Contêineres de serviço a serem executados com `container-job`
    serviços:
      # Etiqueta usada para acessar o contêiner de serviço
      postgres:
        # Imagem do Docker Hub
        imagem: postgres
        # Fornece a senha para o postgres
        env:
          POSTGRES_PASSWORD: postgres
        # Define as verificações gerais até a inicialização do postgres
        opções: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
```

#### Configurar as etapas

{% data reusables.github-actions.service-template-steps %}

```yaml{:copy}
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: actions/checkout@v2

  # Performs a clean installation of all dependencies in the `package.json` file
  # For more information, see https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to PostgreSQL
    # Runs a script that creates a PostgreSQL table, populates
    # the table with data, and then retrieves the data.
    run: node client.js
    # Environment variable used by the `client.js` script to create
    # a new PostgreSQL client.
    env:
      # O nome do host usado para comunicar-se com o contêiner de serviço do PostgreSQL
      POSTGRES_HOST: postgres
      # A porta-padrão do PostgreSQL
      POSTGRES_PORT: 5432
```

{% data reusables.github-actions.postgres-environment-variables %}

O nome do host do serviço do PostgreSQL é a etiqueta que você configurou no seu fluxo de trabalho, nesse caso, `postgres`. Uma vez que os contêineres do Docker na mesma rede da ponte definida pelo usuário abrem todas as portas por padrão, você poderá acessar o contêiner de serviço na porta-padrão 5432 do PostgreSQL.

### Executar trabalhos diretamente na máquina executora

Ao executar um trabalho diretamente na máquina executora, você deverá mapear as portas no contêiner de serviço com as portas no host do Docker. Você pode acessar os contêineres de serviço do host do Docker usando `localhost` e o número da porta do host do Docker.

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml{:copy}
name: PostgreSQL Service Example
on: push

jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      postgres:
        # Docker Hub image
        image: postgres
        # Provide the password for postgres
        env:
          POSTGRES_PASSWORD: postgres
        # Set health checks to wait until postgres has started
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps tcp port 5432 on service container to the host
          - 5432:5432

    steps:
      # Downloads a copy of the code in your repository before running CI tests
      - name: Check out repository code
        uses: actions/checkout@v2

      # Performs a clean installation of all dependencies in the `package.json` file
      # For more information, see https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Runs a script that creates a PostgreSQL table, populates
        # the table with data, and then retrieves the data
        run: node client.js
        # Environment variables used by the `client.js` script to create
        # a new PostgreSQL table.
        env:
          # O nome do host usado para comunicar-se com o contêiner de serviço PostgreSQL
          POSTGRES_HOST: localhost
          # A porta-padrão do PostgreSQL
          POSTGRES_PORT: 5432
```
{% endraw %}

#### Configurar o trabalho executor

{% data reusables.github-actions.service-container-host-runner %}

{% data reusables.github-actions.postgres-label-description %}

O fluxo de trabalho mapeia a porta 5432 no contêiner de serviço do PostgreSQL com o host do Docker. Para obter mais informações sobre a palavra-chave `portas`, consulte "[Sobre contêineres de serviço](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)".

```yaml{:copy}
trabalhos:
  # Etiqueta do trabalho executor
  runner-job:
    # Você deve usar um ambiente do Linux ao usar os contêineres de serviço ou trabalhos do contêiner
    runs-on: ubuntu-latest

    # Contêineres de serviços a serem executados com `runner-job`
    serviços:
      # Etiqueta usada para acessar o contêiner de serviço
      postgres:
        # Imagem do Docker Hub
        image: postgres
        # Fornece a senha para postgres
        env:
          POSTGRES_PASSWORD: postgres
        # Define verificações gerais até a inicialização do postgres
        opções: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        portas:
          # Mapeia a porta port 5432 tcp no contêiner de serviço com o host
          - 5432:5432
```

#### Configurar as etapas

{% data reusables.github-actions.service-template-steps %}

```yaml{:copy}
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: actions/checkout@v2

  # Performs a clean installation of all dependencies in the `package.json` file
  # For more information, see https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to PostgreSQL
    # Runs a script that creates a PostgreSQL table, populates
    # the table with data, and then retrieves the data
    run: node client.js
    # Environment variables used by the `client.js` script to create
    # a new PostgreSQL table.
    env:
      # O nome do host usado para comunicar-se com o contêiner de serviço do PostgreSQL
      POSTGRES_HOST: localhost
      # A porta-padrão do PostgreSQL
      POSTGRES_PORT: 5432
```

{% data reusables.github-actions.postgres-environment-variables %}

{% data reusables.github-actions.service-container-localhost %}

### Testar o contêiner de serviço do PostgreSQL

Você pode testar o seu fluxo de trabalho usando o seguinte script, que se conecta ao serviço do PostgreSQL e adiciona uma nova tabela com alguns dados de espaço reservado. Em seguida, o script imprime os valores armazenados na tabela do PostgreSQL no terminal. O seu script pode usar qualquer linguagem que você desejar, mas este exemplo usa Node.js e o módulo npm `pg`. Para obter mais informações, consulte [módulo npm pg](https://www.npmjs.com/package/pg).

Você pode modificar o *client.js* para incluir qualquer operação do PostgreSQL exigida pelo seu fluxo de trabalho. Neste exemplo, o script conecta-se ao serviço do PostgreSQL, adiciona uma tabela ao banco de dados `postgres`, insere alguns dados de espaço reservado e recupera os dados.

{% data reusables.github-actions.service-container-add-script %}

```javascript{:copy}
const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    porta: process.env.POSTGRES_PORT,
    usuário: 'postgres',
    senha: 'postgres',
    banco de dados: 'postgres'
});

pgclient.connect();

const table = 'CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))'
const text = 'INSERT INTO student(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) RETURNING *'
const values = ['Mona the', 'Octocat', 9, '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States', 'octocat@github.com']

pgclient.query(table, (err, res) => {
    if (err) throw err
});

pgclient.query(text, values, (err, res) => {
    if (err) throw err
});

pgclient.query('SELECT * FROM student', (err, res) => {
    if (err) throw err
    console.log(err, res.rows) // Print the data in student table
    pgclient.end()
});
```

O script cria uma nova conexão com o serviço PostgreSQL e usa as variáveis de ambiente `POSTGRES_HOST` e `POSTGRES_PORT` para especificar o endereço e porta do serviço do PostgreSQL. Se o `host` e a `porta` não forem definidos, o host-padrão será `localhost` e a porta-padrão será 5432.

O script cria uma tabela e preenche com dados de espaço reservado. Para testar se o banco de dados `postgres` contém os dados, o script imprime o conteúdo da tabela no registro do console.

Ao executar este fluxo de trabalho, você verá a seguinte saída na etapa "Conectar ao PostgreSQL", que confirma que você criou com sucesso a tabela do PostgreSQL e adicionou dados:

```
null [ { id: 1,
    primeiro nome: 'Mona the',
    último nome: 'Octocat',
    idade: 9,
    endereço:
     '88 Colin P Kelly Jr St, São Francisco, CA 94107, Estados Unidos',
    e-mail: 'octocat@github.com' } ]
```
