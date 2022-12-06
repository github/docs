---
title: PostgreSQL-Service-Container erstellen
shortTitle: PostgreSQL service containers
intro: 'Du kannst einen PostgreSQL-Service-Container zur Verwendung in Deinem Workflow erstellen. Dieser Leitfaden zeigt Beispiele für die Erstellung eines PostgreSQL-Dienstes für Jobs, die in Containern oder direkt auf der Runner-Maschine laufen.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers
  - /actions/configuring-and-managing-workflows/creating-postgresql-service-containers
  - /actions/guides/creating-postgresql-service-containers
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Containers
  - Docker
ms.openlocfilehash: 9d5ad3e32e5df22101b61aa7ba134e7fe69333e5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107152'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Dieser Leitfaden enthält Workflowbeispiele, in denen ein Dienstcontainer unter Verwendung des Docker Hub-Images `postgres` konfiguriert wird. Der Workflow führt ein Skript aus, das eine Verbindung mit dem PostgreSQL-Dienst herstellt, eine Tabelle erstellt und diese Tabelle dann mit Daten auffüllt. Um zu testen, ob der Workflow die PostgreSQL-Tabelle erstellt und mit Daten auffüllt, gibt das Skript die Daten aus der Tabelle in der Konsole aus.

{% data reusables.actions.docker-container-os-support %}

## Voraussetzungen

{% data reusables.actions.service-container-prereqs %}

Es kann Dir auch helfen, YAML, die Syntax für {% data variables.product.prodname_actions %} und PostgreSQL grundlegende zu verstehen. Weitere Informationen finden Sie unter

- [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [PostgreSQL-Tutorial](https://www.postgresqltutorial.com/) in der PostgreSQL-Dokumentation

## Jobs in Containern ausführen

{% data reusables.actions.container-jobs-intro %}

{% data reusables.actions.copy-workflow-file %}

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
        uses: {% data reusables.actions.action-checkout %}

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
          # The hostname used to communicate with the PostgreSQL service container
          POSTGRES_HOST: postgres
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```

### Runner-Job konfigurieren

{% data reusables.actions.service-container-host %}

{% data reusables.actions.postgres-label-description %}

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

### „Steps“ (Schritte) konfigurieren

{% data reusables.actions.service-template-steps %}

```yaml{:copy}
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: {% data reusables.actions.action-checkout %}

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
      # The hostname used to communicate with the PostgreSQL service container
      POSTGRES_HOST: postgres
      # The default PostgreSQL port
      POSTGRES_PORT: 5432
```

{% data reusables.actions.postgres-environment-variables %}

Der Hostname des PostgreSQL-Diensts ist die Bezeichnung, die du in deinem Workflow konfiguriert hast (in diesem Fall: `postgres`). Da Docker-Container im gleichen benutzerdefinierten Bridge-Netzwerk standardmäßig alle Ports öffnen, kannst Du auf den Service-Container durch den standardmäßigen PostgreSQL-Port 5432 zugreifen.

## Jobs direkt auf der Runner-Maschine ausführen

Wenn Du einen Job direkt auf der Runner-Maschine ausführst, musst Du die Ports des Service-Containers den Ports des Docker-Hosts zuordnen. Du kannst vom Docker-Host aus auf Dienstcontainer zugreifen, indem du `localhost` und die Portnummer des Docker-Hosts verwendest.

{% data reusables.actions.copy-workflow-file %}

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
        uses: {% data reusables.actions.action-checkout %}

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
          # The hostname used to communicate with the PostgreSQL service container
          POSTGRES_HOST: localhost
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```

### Runner-Job konfigurieren

{% data reusables.actions.service-container-host-runner %}

{% data reusables.actions.postgres-label-description %}

Der Workflow ordnet Port 5432 des PostgreSQL-Service-Containers dem Docker-Host zu. Weitere Informationen zum Schlüsselwort `ports` findest du unter [Informationen zu Dienstcontainern](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports).

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

### „Steps“ (Schritte) konfigurieren

{% data reusables.actions.service-template-steps %}

```yaml{:copy}
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: {% data reusables.actions.action-checkout %}

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
      # The hostname used to communicate with the PostgreSQL service container
      POSTGRES_HOST: localhost
      # The default PostgreSQL port
      POSTGRES_PORT: 5432
```

{% data reusables.actions.postgres-environment-variables %}

{% data reusables.actions.service-container-localhost %}

## Den PostgreSQL-Service-Container testen

Du kannst deinen Workflow mithilfe des folgenden Skripts testen, das eine Verbindung mit dem PostgreSQL-Dienst herstellt und eine neue Tabelle mit einigen Platzhalterdaten hinzufügt. Anschließend gibt das Skript die in der PostgreSQL-Tabelle gespeicherten Werte im Terminal aus. Für das Skript kann eine beliebige Sprache verwendet werden. In diesem Beispiel werden jedoch Node.js und das npm-Modul `pg` genutzt. Weitere Informationen findest du unter dem [npm-Modul „pg“](https://www.npmjs.com/package/pg).

Du kannst *client.js* anpassen, um alle PostgreSQL-Vorgänge einzuschließen, die für deinen Workflow erforderlich sind. In diesem Beispiel stellt das Skript eine Verbindung mit dem PostgreSQL-Dienst her, fügt der Datenbank `postgres` eine Tabelle hinzu, fügt einige Platzhalterdaten ein, und ruft anschließend die Daten ab.

{% data reusables.actions.service-container-add-script %}

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

Das Skript erstellt eine neue Verbindung mit dem PostgreSQL-Dienst und verwendet die Umgebungsvariablen `POSTGRES_HOST` und `POSTGRES_PORT`, um die IP-Adresse und den Port des PostgreSQL-Diensts anzugeben. Wenn `host` und `port` nicht definiert sind, werden der Standardhost `localhost` und der Standardport 5432 verwendet.

Das Skript erstellt eine Tabelle und füllt sie mit Platzhalterdaten auf. Um zu testen, ob die Datenbank `postgres` die Daten enthält, gibt das Skript den Inhalt der Tabelle im Konsolenprotokoll aus.

Wenn du diesen Workflow ausführst, sollte im Schritt „Connect to PostgreSQL“ (Verbindung mit PostgreSQL herstellen) die folgende Ausgabe angezeigt werden, die bestätigt, dass die Erstellung der PostgreSQL-Tabelle und das Hinzufügen von Daten erfolgreich waren:

```
null [ { id: 1,
    firstname: 'Mona the',
    lastname: 'Octocat',
    age: 9,
    address:
     '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States',
    email: 'octocat@github.com' } ]
```
