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
type: 'tutorial'
topics:
  - 'Contêineres'
  - 'Docker'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

Este guia mostra exemplos de fluxo de trabalho que configuram um contêiner de serviço usando a imagem `postgres` do Docker Hub. O fluxo de trabalho executa um script para criar um cliente PostgreSQL e preencher os dados do cliente. Para testar se o fluxo de trabalho cria e preenche o cliente PostgreSQL, o script imprime os dados do cliente no console.

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
nome: exemplo de serviço PostgreSQL
em: push

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
        # Fornece a senha para postgres
        env:
          POSTGRES_PASSWORD: postgres
        # Define verificações gerais até a inicialização do postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    etapas:
      # Faz o download de uma cópia do código no seu repositório antes de executar testes de CI
      - nome: Verifica o código do repositório
        usa: actions/checkout@v2

      # Realiza uma instalação limpa de todas as dependências no arquivo `package.json`
      # Para obter mais informações, consulte https://docs.npmjs.com/cli/ci.html
      - nome: Instalar dependências
        executar: npm ci

      - nome: Conectar-se ao PostgreSQL
        # Executa um script que cria um cliente PostgreSQL client, preenche
        # os dados do cliente e recupera dados
        executar: node client.js
        # Variável de ambiente usada pelo script `client.js` para criar um novo PostgreSQL client.
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
etapas:
  # Faz o download de uma cópia do código no seu repositório antes de executar testes de CI
  - nome: Verifica o código do repositório
    usa: actions/checkout@v2

  # Executa uma instalação limpa de todas as dependências no arquivo `package.json`
  # Para obter mais informações, consulte https://docs.npmjs.com/cli/ci.html
  - Nome: Instalar dependências
    executar: npm ci

  - nome: Conectar-se ao PostgreSQL
    # Executa um script que cria um cliente PostgreSQL client, preenche
    # os dados do cliente e recupera dados
    executar: node client.js
    # Variável do ambiente usada pelo script `client.js` script para criar
    # um novo cliente PostgreSQL.
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
nome: Exemplo de serviço do PostgreSQL
em: push

trabalhos:
  # Etiqueta do trabalho executor
  runner-job:
    # Você deve usar um ambiente do Linux ao usar os contêineres de serviço ou os trabalhos do contêiner
    runs-on: ubuntu-latest

    # Os serviços dos contêineres a serem executados com `runner-job`
    serviços:
      # Etiqueta usada para acessar o contêiner de serviço
      postgres:
        # Imagem do Docker Hub
        imagem: postgres
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

    etapas:
      # Faz o download de uma cópia do código no seu repositório antes de executar um teste de CI
      - nome: Verifica o código do repositório
        usa: actions/checkout@v2

      # Realiza uma instalação limpa de todas as dependências no arquivo `package.json`
      # Para obter mais informações, consulte https://docs.npmjs.com/cli/ci.html
      - nome: Instalar dependências
        executar: npm ci

      - nome: Conectar-se ao PostgreSQL
        # Executa um script que cria um cliente PostgreSQL, preenche
        # os dados do cliente e recupera dados
        executar: node client.js
        # Variável de ambiente usada pelo script `client.js` para criar
        # um novo cliente PostgreSQL.
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
etapas:
  # Faz o download de uma cópia do código no seu repositório antes de executar testes de CI
  - nome: Verifica o código do repositório
    usa: actions/checkout@v2

  # Executa uma instalação limpa de todas as dependências no arquivo `package.json`
  # Para obter mais informações, consulte https://docs.npmjs.com/cli/ci.html
  - Nome: Instalar dependências
    executar: npm ci

  - nome: Conectar-se ao PostgreSQL
    # Executa um script que cria um cliente PostgreSQL client, preenche
    # os dados do cliente e recupera dados
    executar: node client.js
    # Variável do ambiente usada pelo script `client.js` script para criar
    # um novo cliente PostgreSQL.
    env:
      # O nome do host usado para comunicar-se com o contêiner de serviço do PostgreSQL
      POSTGRES_HOST: localhost
      # A porta-padrão do PostgreSQL
      POSTGRES_PORT: 5432
```

{% data reusables.github-actions.postgres-environment-variables %}

{% data reusables.github-actions.service-container-localhost %}

### Testar o contêiner de serviço do PostgreSQL

Você pode testar o seu fluxo de trabalho usando o script a seguir, que cria um cliente PostgreSQL e adiciona uma tabela com alguns dados com espaços reservados. Em seguida, o script imprime no terminal os valores armazenados no cliente PostgreSQL. O seu script pode usar qualquer linguagem que você desejar, mas este exemplo usa Node.js e o módulo npm `pg`. Para obter mais informações, consulte [módulo npm pg](https://www.npmjs.com/package/pg).

Você pode modificar o *client.js* para incluir qualquer operação do PostgreSQL exigida pelo seu fluxo de trabalho. Neste exemplo, o script cria a instância do cliente PostgreSQL, cria uma tabela, adiciona dados de espaços reservados e, em seguida, recupera os dados.

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

O script cria um novo `Client` PostgreSQL, que aceita um `host` e o parâmetro da `porta`. O script usa as variáveis de ambiente `POSTGRES_HOST` e `POSTGRES_PORT` para definir o endereço IP e a porta do cliente. Se o `host` e a `porta` não forem definidos, o host-padrão será `localhost` e a porta-padrão será 5432.

O script cria uma tabela e preenche com dados de espaço reservado. Para testar se o banco de dados do PostgreSQL contém os dados, o script imprime o conteúdo da tabela no registro do console.

Ao executar este fluxo de trabalho, você deve ver a saída a seguir na etapa "Conectar-se ao PostgreSQL", que confirma que você criou o cliente PostgreSQL e adicionou dados:

```
null [ { id: 1,
    primeiro nome: 'Mona the',
    último nome: 'Octocat',
    idade: 9,
    endereço:
     '88 Colin P Kelly Jr St, São Francisco, CA 94107, Estados Unidos',
    e-mail: 'octocat@github.com' } ]
```
