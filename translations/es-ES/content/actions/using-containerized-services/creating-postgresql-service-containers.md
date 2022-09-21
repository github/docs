---
title: Crear contenedores de servicios PostgreSQL
shortTitle: PostgreSQL service containers
intro: 'Puedes crear un contenedor de servicios PostgreSQL para usar en tu flujo de trabajo. En esta guía se muestran ejemplos de cómo crear un servicio PostgreSQL para trabajos que se ejecutan en contenedores o, directamente, en la máquina del ejecutor.'
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121114'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En esta guía se muestran ejemplos de flujo de trabajo que configuran un contenedor de servicios mediante la imagen `postgres` de Docker Hub. El flujo de trabajo ejecuta un script que se conecta con el servicio de PostgreSQL, crea una tabla y luego la llena de datos. Para probar que el flujo de trabajo crea y puebla la tabla de PostgreSQL, el script imprimie los datos de esta en la consola.

{% data reusables.actions.docker-container-os-support %}

## Prerrequisitos

{% data reusables.actions.service-container-prereqs %}

También puede ser útil tener un conocimiento básico de YAML, la sintaxis para las {% data variables.product.prodname_actions %}, y de PostgreSQL. Para más información, consulte:

- "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[Tutorial de PostgreSQL](https://www.postgresqltutorial.com/)" en la documentación de PostgreSQL

## Ejecutar trabajos en contenedores

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

### Configurar el trabajo del ejecutor

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

### Configurar los pasos

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

El nombre de host del servicio PostgreSQL es la etiqueta que configuró en su flujo de trabajo, en este caso, `postgres`. Dado que los contenedores de Docker de la misma red de puentes definida por el usuario abren todos los puertos por defecto, podrás acceder al contenedor de servicios en el puerto 5432 PostgreSQL predeterminado.

## Ejecutar trabajos directamente en la máquina del ejecutor

Cuando ejecutes un trabajo directamente en la máquina del ejecutor, deberás asignar los puertos del contenedor de servicios a los puertos del host de Docker. Puede acceder a los contenedores de servicios desde el host de Docker mediante `localhost` y el número de puerto del host de Docker.

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

### Configurar el trabajo del ejecutor

{% data reusables.actions.service-container-host-runner %}

{% data reusables.actions.postgres-label-description %}

El flujo de trabajo asigna el puerto 5432 del contenedor de servicios PostgreSQL al host de Docker. Para obtener más información sobre la palabra clave `ports`, consulte "[Acerca de los contenedores de servicios](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)".

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

### Configurar los pasos

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

## Probar el contenedor de servicios de PostgreSQL

Puedes probar tu flujo de trabajo utilizando el siguiente script, el cual se conecta con el servicio de PostgreSQL y agrega una tabla nueva con algunos datos de marcador de posición. Entonces, el script imprime los valores almacenados en la tabla de PostgreSQL en la terminal. Su script puede usar el lenguaje que quiera, pero en este ejemplo se usa Node.js y el módulo npm `pg`. Para obtener más información, consulte el [módulo npm pg](https://www.npmjs.com/package/pg).

Puede modificar *client.js* para incluir las operaciones de PostgreSQL necesarias para el flujo de trabajo. En este ejemplo, el script se conecta al servicio PostgreSQL, agrega la tabla a la base de datos de `postgres`, inserta algunos datos de marcador de posición y recupera los datos.

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

El script crea una nueva conexión con el servicio PostgreSQL y usa las variables de entorno `POSTGRES_HOST` y `POSTGRES_PORT` para especificar la dirección IP y el puerto del servicio PostgreSQL. Si `host` y `port` no están definidos, el host predeterminado es `localhost` y el puerto predeterminado es 5432.

El script crea una tabla y la rellena con datos de marcador de posición. Para probar que la base de datos de `postgres` contiene los datos, el script imprime el contenido de la tabla en el registro de la consola.

Cuando ejecutas este flujo de trabajo, debes ver la siguiente salida en el paso de "Connect to PostgreSQL", la cual te confirma que creaste exitosamente la tabla de PostgreSQL y agregaste los datos:

```
null [ { id: 1,
    firstname: 'Mona the',
    lastname: 'Octocat',
    age: 9,
    address:
     '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States',
    email: 'octocat@github.com' } ]
```
