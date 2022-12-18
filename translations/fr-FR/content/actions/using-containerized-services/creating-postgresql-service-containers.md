---
title: Création de conteneurs de service PostgreSQL
shortTitle: PostgreSQL service containers
intro: Vous pouvez créer un conteneur de service PostgreSQL à utiliser dans votre workflow. Ce guide montre des exemples de création d’un service PostgreSQL pour des travaux qui s’exécutent dans des conteneurs ou directement sur la machine d’exécuteur.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107153'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide présente des exemples de workflow qui configurent un conteneur de service à l’aide de l’image Docker Hub `postgres`. Le workflow exécute un script qui se connecte au service PostgreSQL, crée une table, puis la remplit avec des données. Pour tester que le workflow crée et remplit la table PostgreSQL, le script affiche les données de la table sur la console.

{% data reusables.actions.docker-container-os-support %}

## Prérequis

{% data reusables.actions.service-container-prereqs %}

Vous pouvez également trouver utile de disposer d’une connaissance élémentaire de YAML, de la syntaxe de {% data variables.product.prodname_actions %} et de PostgreSQL. Pour plus d'informations, consultez les pages suivantes :

- « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) »
- « [Tutoriel sur PostgreSQL](https://www.postgresqltutorial.com/) » dans la documentation PostgreSQL

## Exécution de travaux dans des conteneurs

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

### Configuration du travail de l’exécuteur

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

### Configuration des étapes

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

Le nom d’hôte du service PostgreSQL est l’étiquette que vous avez configurée dans votre workflow ; dans le cas présent, `postgres`. Étant donné que les conteneurs Docker se trouvant sur le même réseau de pont défini par l’utilisateur ouvrent tous les ports par défaut, vous pourrez accéder au conteneur de service sur le port PostgreSQL par défaut 5432.

## Exécution de travaux directement sur la machine de l’exécuteur

Lorsque vous exécutez un travail directement sur la machine de l’exécuteur, vous devez mapper les ports du conteneur de service aux ports sur l’hôte Docker. Vous pouvez accéder aux conteneurs de service à partir de l’hôte Docker à l’aide de `localhost` et du numéro de port de l’hôte Docker.

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

### Configuration du travail de l’exécuteur

{% data reusables.actions.service-container-host-runner %}

{% data reusables.actions.postgres-label-description %}

Le workflow mappe le port 5432 sur le conteneur de service PostgreSQL à l’hôte Docker. Pour plus d’informations sur le mot clé `ports`, consultez « [À propos des conteneurs de service](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports) ».

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

### Configuration des étapes

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

## Test du conteneur de service PostgreSQL

Vous pouvez tester votre workflow à l’aide du script suivant, qui se connecte au service PostgreSQL et ajoute une nouvelle table avec des données d’espace réservé. Le script affiche ensuite les valeurs stockées dans la table PostgreSQL dans le terminal. Votre script peut utiliser n’importe quel langage souhaité, mais cet exemple utilise Node.js et le module npm `pg`. Pour plus d’informations, consultez le [module npm pg](https://www.npmjs.com/package/pg).

Vous pouvez modifier *client.js* pour inclure toutes les opérations PostgreSQL nécessaires à votre workflow. Dans cet exemple, le script se connecte au service PostgreSQL, ajoute une table à la base de données `postgres`, insère des données d’espace réservé, puis récupère les données.

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

Le script crée une connexion au service PostgreSQL et utilise les variables d’environnement `POSTGRES_HOST` et `POSTGRES_PORT` pour spécifier l’adresse P et le port du service PostgreSQL. Si `host` et `port` ne sont pas définis, l’hôte par défaut est `localhost` et le port par défaut est 5432.

Le script crée une table et la remplit avec des données d’espace réservé. Pour tester que la base de données `postgres` contient les données, le script imprime le contenu de la table dans le journal de la console.

Lorsque vous exécutez ce workflow, vous devez voir la sortie suivante dans l’étape « Se connecter à PostgreSQL », ce qui confirme que vous avez correctement créé la table PostgreSQL et ajouté des données :

```
null [ { id: 1,
    firstname: 'Mona the',
    lastname: 'Octocat',
    age: 9,
    address:
     '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States',
    email: 'octocat@github.com' } ]
```
