---
title: PostgreSQL-Service-Container erstellen
shortTitle: PostgreSQL service containers
intro: 'Du kannst einen PostgreSQL-Service-Container zur Verwendung in Deinem Workflow erstellen. Dieser Leitfaden zeigt Beispiele für die Erstellung eines PostgreSQL-Dienstes für Jobs, die in Containern oder direkt auf der Runner-Maschine laufen.'
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

### Einführung

Diese Anleitung zeigt Dir Workflow-Beispiele, die einen Service-Container mit dem `postgres`-Bild vom Docker-Hub konfigurieren. The workflow runs a script that connects to the PostgreSQL service, creates a table, and then populates it with data. To test that the workflow creates and populates the PostgreSQL table, the script prints the data from the table to the console.

{% data reusables.github-actions.docker-container-os-support %}

### Vorrausetzungen

{% data reusables.github-actions.service-container-prereqs %}

Es kann Dir auch helfen, YAML, die Syntax für {% data variables.product.prodname_actions %} und PostgreSQL grundlegende zu verstehen. Weitere Informationen findest Du unter:

- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[PostgreSQL-Tutorial](https://www.postgresqltutorial.com/)" in der PostgreSQL-Dokumentation

### Jobs in Containern ausführen

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
          # Der Name des Hosts fuer die Kommunikation mit dem PostgreSQL-Servicecontainer
          POSTGRES_HOST: postgres
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```
{% endraw %}

#### Runner-Job konfigurieren

{% data reusables.github-actions.service-container-host %}

{% data reusables.github-actions.postgres-label-description %}

```yaml{:copy}
jobs:
  # Label des Container-Jobs
  container-job:
    # Container muessen in Linux-basierten Betriebssystemen laufen
    runs-on: ubuntu-latest
    # Docker-Hub-Image, das `container-job` in
    container: node:10.18-jessie ausfuehrt

    # Service-Container, die mit `container-job` laufen sollen
    services:
      # Label fuer den Zugriff auf den Service-Container
      postgres:
        # Docker-Hub-Image
        image: postgres
        # Passwort fuer postgres bereitstellen
        env:
          POSTGRES_PASSWORD: postgres
        # Health checks so einstellen, dass sie warten, bis Postgres gestarted ist
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
```

#### „Steps“ (Schritte) konfigurieren

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
          # Der Name des Hosts fuer die Kommunikation mit dem PostgreSQL-Servicecontainer
          POSTGRES_HOST: postgres
          # Der standardmaessige PostgreSQL-Port
          POSTGRES_PORT: 5432
```

{% data reusables.github-actions.postgres-environment-variables %}

Der Hostname des PostgreSQL-Dienstes ist der Label, den Du in Deinem Workflow konfiguriert hast, in diesem Fall `postgres`. Da Docker-Container im gleichen benutzerdefinierten Bridge-Netzwerk standardmäßig alle Ports öffnen, kannst Du auf den Service-Container durch den standardmäßigen PostgreSQL-Port 5432 zugreifen.

### Jobs direkt auf der Runner-Maschine ausführen

Wenn Du einen Job direkt auf der Runner-Maschine ausführst, musst Du die Ports des Service-Containers den Ports des Docker-Hosts zuordnen. Du kannst über den Docker-Host auf den Service-Container zugreifen, indem Du `localhost` und die Port-Nummer des Docker-Hosts verwendest.

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
          # Der Hostname fuer die Kommunikation mit dem PostgreSQL-Service-Container
          POSTGRES_HOST: localhost
          # Standardmaessiger PostgreSQL-Port
          POSTGRES_PORT: 5432
```
{% endraw %}

#### Runner-Job konfigurieren

{% data reusables.github-actions.service-container-host-runner %}

{% data reusables.github-actions.postgres-label-description %}

Der Workflow ordnet Port 5432 des PostgreSQL-Service-Containers dem Docker-Host zu. Weitere Informationen über das Schlüsselwort `ports` findest Du unter "[Informationen über Service-Container](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)."

```yaml{:copy}
jobs:
  # Label des Runner-Jobs
  runner-job:
    # Du musst fuer Service-Containers oder Container-Jobs eine Linux-Umgebung verwenden
    runs-on: ubuntu-latest

    # Service-Containers zum Betrieb mit `runner-job`
    services:
      # Label fier den Zugriff auf den Service-Container
      postgres:
        # Docker-Hub-Image
        image: postgres
        # Das Passwort fuer Postgres bereitstellen
        env:
          POSTGRES_PASSWORD: postgres
        # Health-Checks einstellen, dass sie warten, bis Postgres gestarted ist
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Ordnet TCP-Port 5432 des Service-Containers dem Host zu
          - 5432:5432
```

#### „Steps“ (Schritte) konfigurieren

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
      # Der Hostname zur Kommunikation with the PostgreSQL-Service-Container
      POSTGRES_HOST: localhost
      # Der standardmaessige PostgreSQL-Port
      POSTGRES_PORT: 5432
```

{% data reusables.github-actions.postgres-environment-variables %}

{% data reusables.github-actions.service-container-localhost %}

### Den PostgreSQL-Service-Container testen

You can test your workflow using the following script, which connects to the PostgreSQL service and adds a new table with some placeholder data. The script then prints the values stored in the PostgreSQL table to the terminal. Dein Skript kann jede beliebige Sprache verwenden, aber in diesem Beispiel wird Node.js mit dem npm-Modul `pg` genutzt. Weitere Informationen findest Du unter [npm-Modul pg](https://www.npmjs.com/package/pg).

Du kannst *client.js* anpassen, um alle PostgreSQL-Vorgänge einzuschließen, die für Deinen Workflow erforderlich sind. In this example, the script connects to the PostgreSQL service, adds a table to the `postgres` database, inserts some placeholder data, and then retrieves the data.

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

The script creates a new connection to the PostgreSQL service, and uses the `POSTGRES_HOST` and `POSTGRES_PORT` environment variables to specify the PostgreSQL service IP address and port. Wenn `host` Und `port` nicht definiert sind, ist der Standard-Host `localhost` und der Standard-Port 5432.

Das Skript erstellt eine Tabelle und füllt sie mit Platzhalterdaten auf. To test that the `postgres` database contains the data, the script prints the contents of the table to the console log.

When you run this workflow, you should see the following output in the "Connect to PostgreSQL" step, which confirms that you successfully created the PostgreSQL table and added data:

```
null [ { id: 1,
    firstname: 'Mona the',
    lastname: 'Octocat',
    age: 9,
    address:
     '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States',
    email: 'octocat@github.com' } ]
```
