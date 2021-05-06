---
title: Creating PostgreSQL service containers
shortTitle: PostgreSQL service containers
intro: You can create a PostgreSQL service container to use in your workflow. This guide shows examples of creating a PostgreSQL service for jobs that run in containers or directly on the runner machine.
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

### Introduction

This guide shows you workflow examples that configure a service container using the Docker Hub `postgres` image. The workflow runs a script to create a PostgreSQL client and populate the client with data. To test that the workflow creates and populates the PostgreSQL client, the script prints the client's data to the console.

{% data reusables.github-actions.docker-container-os-support %}

### Требования

{% data reusables.github-actions.service-container-prereqs %}

You may also find it helpful to have a basic understanding of YAML, the syntax for {% data variables.product.prodname_actions %}, and PostgreSQL. Дополнительные сведения см. в:

- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[PostgreSQL tutorial](https://www.postgresqltutorial.com/)" in the PostgreSQL documentation

### Running jobs in containers

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
        # Runs a script that creates a PostgreSQL client, populates
        # the client with data, and retrieves data
        run: node client.js
        # Environment variable used by the `client.js` script to create a new PostgreSQL client.
        env:
          # The hostname used to communicate with the PostgreSQL service container
          POSTGRES_HOST: postgres
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```
{% endraw %}

#### Configuring the runner job

{% data reusables.github-actions.service-container-host %}

{% data reusables.github-actions.postgres-label-description %}

```yaml{:copy}
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
```

#### Configuring the steps

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
    # Runs a script that creates a PostgreSQL client, populates
    # the client with data, and retrieves data
    run: node client.js
    # Environment variable used by the `client.js` script to create
    # a new PostgreSQL client.
    env:
      # The hostname used to communicate with the PostgreSQL service container
      POSTGRES_HOST: postgres
      # The default PostgreSQL port
      POSTGRES_PORT: 5432
```

{% data reusables.github-actions.postgres-environment-variables %}

The hostname of the PostgreSQL service is the label you configured in your workflow, in this case, `postgres`. Because Docker containers on the same user-defined bridge network open all ports by default, you'll be able to access the service container on the default PostgreSQL port 5432.

### Running jobs directly on the runner machine

When you run a job directly on the runner machine, you'll need to map the ports on the service container to ports on the Docker host. You can access service containers from the Docker host using `localhost` and the Docker host port number.

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
        # Runs a script that creates a PostgreSQL client, populates
        # the client with data, and retrieves data
        run: node client.js
        # Environment variable used by the `client.js` script to create
        # a new PostgreSQL client.
        env:
          # The hostname used to communicate with the PostgreSQL service container
          POSTGRES_HOST: localhost
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```
{% endraw %}

#### Configuring the runner job

{% data reusables.github-actions.service-container-host-runner %}

{% data reusables.github-actions.postgres-label-description %}

The workflow maps port 5432 on the PostgreSQL service container to the Docker host. For more information about the `ports` keyword, see "[About service containers](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)."

```yaml{:copy}
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
```

#### Configuring the steps

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
    # Runs a script that creates a PostgreSQL client, populates
    # the client with data, and retrieves data
    run: node client.js
    # Environment variable used by the `client.js` script to create
    # a new PostgreSQL client.
    env:
      # The hostname used to communicate with the PostgreSQL service container
      POSTGRES_HOST: localhost
      # The default PostgreSQL port
      POSTGRES_PORT: 5432
```

{% data reusables.github-actions.postgres-environment-variables %}

{% data reusables.github-actions.service-container-localhost %}

### Testing the PostgreSQL service container

You can test your workflow using the following script, which creates a PostgreSQL client and adds a new table with some placeholder data. The script then prints the values stored in the PostgreSQL client to the terminal. Your script can use any language you'd like, but this example uses Node.js and the `pg` npm module. For more information, see the [npm pg module](https://www.npmjs.com/package/pg).

You can modify *client.js* to include any PostgreSQL operations needed by your workflow. In this example, the script creates the PostgreSQL client instance, creates a table, adds placeholder data, then retrieves the data.

{% data reusables.github-actions.service-container-add-script %}

```javascript{:copy}
const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
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

The script creates a new PostgreSQL `Client`, which accepts a `host` and `port` parameter. The script uses the `POSTGRES_HOST` and `POSTGRES_PORT` environment variables to set the client's IP address and port. If `host` and `port` are not defined, the default host is `localhost` and the default port is 5432.

The script creates a table and populates it with placeholder data. To test that the PostgreSQL database contains the data, the script prints the contents of the table to the console log.

When you run this workflow, you should see the following output in the "Connect to PostgreSQL" step confirming you created the PostgreSQL client and added data:

```
null [ { id: 1,
    firstname: 'Mona the',
    lastname: 'Octocat',
    age: 9,
    address:
     '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States',
    email: 'octocat@github.com' } ]
```
