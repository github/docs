---
title: Création de conteneurs de service Redis
shortTitle: Redis service containers
intro: Vous pouvez utiliser les conteneurs de services pour créer un client Redis dans votre workflow. Ce guide présente des exemples de création d’un service Redis pour les travaux qui s’exécutent dans des conteneurs ou directement sur la machine de l’exécuteur.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-redis-service-containers
  - /actions/configuring-and-managing-workflows/creating-redis-service-containers
  - /actions/guides/creating-redis-service-containers
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Containers
  - Docker
ms.openlocfilehash: c3b686d9d3aa8f3ae8710e63627eac6bca33d26d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107154'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide présente des exemples de workflow qui configurent un conteneur de service à l’aide de l’image Docker Hub `redis`. Le workflow exécute un script pour créer un client Redis et renseigner le client avec des données. Pour tester que le workflow crée et renseigne le client Redis, le script affiche les données du client dans la console.

{% data reusables.actions.docker-container-os-support %}

## Prérequis

{% data reusables.actions.service-container-prereqs %}

Vous pouvez également trouver utile de disposer d’une connaissance élémentaire de YAML, de la syntaxe de {% data variables.product.prodname_actions %} et de Redis. Pour plus d'informations, consultez les pages suivantes :

- « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) »
- « [Bien démarrer avec Redis](https://redislabs.com/get-started-with-redis/) » dans la documentation Redis

## Exécution de travaux dans des conteneurs

{% data reusables.actions.container-jobs-intro %}

{% data reusables.actions.copy-workflow-file %}

```yaml{:copy}
name: Redis container example
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
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
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

      - name: Connect to Redis
        # Runs a script that creates a Redis client, populates
        # the client with data, and retrieves data
        run: node client.js
        # Environment variable used by the `client.js` script to create a new Redis client.
        env:
          # The hostname used to communicate with the Redis service container
          REDIS_HOST: redis
          # The default Redis port
          REDIS_PORT: 6379
```

### Configuration du travail de conteneur

{% data reusables.actions.service-container-host %}

{% data reusables.actions.redis-label-description %}

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
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
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

  - name: Connect to Redis
    # Runs a script that creates a Redis client, populates
    # the client with data, and retrieves data
    run: node client.js
    # Environment variable used by the `client.js` script to create a new Redis client.
    env:
      # The hostname used to communicate with the Redis service container
      REDIS_HOST: redis
      # The default Redis port
      REDIS_PORT: 6379
```

{% data reusables.actions.redis-environment-variables %}

Le nom d’hôte du service Redis est l’étiquette que vous avez configurée dans votre workflow ; dans le cas présent, `redis`. Étant donné que les conteneurs Docker se trouvant sur le même réseau de pont défini par l’utilisateur ouvrent tous les ports par défaut, vous pourrez accéder au conteneur de service sur le port Redis par défaut 6379.

## Exécution de travaux directement sur la machine de l’exécuteur

Lorsque vous exécutez un travail directement sur la machine de l’exécuteur, vous devez mapper les ports du conteneur de service aux ports sur l’hôte Docker. Vous pouvez accéder aux conteneurs de service à partir de l’hôte Docker à l’aide de `localhost` et du numéro de port de l’hôte Docker.

{% data reusables.actions.copy-workflow-file %}

```yaml{:copy}
name: Redis runner example
on: push

jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps port 6379 on service container to the host
          - 6379:6379

    steps:
      # Downloads a copy of the code in your repository before running CI tests
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies in the `package.json` file
      # For more information, see https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # Runs a script that creates a Redis client, populates
        # the client with data, and retrieves data
        run: node client.js
        # Environment variable used by the `client.js` script to create
        # a new Redis client.
        env:
          # The hostname used to communicate with the Redis service container
          REDIS_HOST: localhost
          # The default Redis port
          REDIS_PORT: 6379
```

### Configuration du travail de l’exécuteur

{% data reusables.actions.service-container-host-runner %}

{% data reusables.actions.redis-label-description %}

Le workflow mappe le port 6379 sur le conteneur de service Redis à l’hôte Docker. Pour plus d’informations sur le mot clé `ports`, consultez « [À propos des conteneurs de service](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports) ».

```yaml{:copy}
jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps port 6379 on service container to the host
          - 6379:6379
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

  - name: Connect to Redis
    # Runs a script that creates a Redis client, populates
    # the client with data, and retrieves data
    run: node client.js
    # Environment variable used by the `client.js` script to create
    # a new Redis client.
    env:
      # The hostname used to communicate with the Redis service container
      REDIS_HOST: localhost
      # The default Redis port
      REDIS_PORT: 6379
```

{% data reusables.actions.redis-environment-variables %}

{% data reusables.actions.service-container-localhost %}

## Test du conteneur de service Redis

Vous pouvez tester votre workflow à l’aide du script suivant, qui crée un client Redis et renseigne le client avec des données d’espace réservé. Le script affiche ensuite les valeurs stockées dans le client Redis dans le terminal. Votre script peut utiliser n’importe quel langage souhaité, mais cet exemple utilise Node.js et le module npm `redis`. Pour plus d’informations, consultez le [module npm Redis](https://www.npmjs.com/package/redis).

Vous pouvez modifier *client.js* pour inclure toutes les opérations Redis nécessaires à votre workflow. Dans cet exemple, le script crée l’instance de client Redis, ajoute des données d’espace réservé, puis récupère les données.

{% data reusables.actions.service-container-add-script %}

```javascript{:copy}
const redis = require("redis");

// Creates a new Redis client
// If REDIS_HOST is not set, the default host is localhost
// If REDIS_PORT is not set, the default port is 6379
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT  
});

redisClient.on("error", function(err) {
    console.log("Error " + err);
});

// Sets the key "octocat" to a value of "Mona the octocat"
redisClient.set("octocat", "Mona the Octocat", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Cat and Octopus"
redisClient.hset("species", "octocat", "Cat and Octopus", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Dinosaur and Octopus"
redisClient.hset("species", "dinotocat", "Dinosaur and Octopus", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Cat and Robot"
redisClient.hset(["species", "robotocat", "Cat and Robot"], redis.print);
// Gets all fields in "species" key

redisClient.hkeys("species", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    redisClient.quit();
});
```

Le script crée un client Redis à l’aide de la méthode `createClient`, qui accepte un paramètre `host` et `port`. Le script utilise les variables d’environnement `REDIS_HOST` et `REDIS_PORT` pour définir l’adresse IP et le port du client. Si `host` et `port` ne sont pas définis, l’hôte par défaut est `localhost` et le port par défaut est 6379.

Le script utilise les méthodes `set` et `hset` pour remplir la base de données avec des clés, des champs et des valeurs. Pour confirmer que le client Redis contient les données, le script imprime le contenu de la base de données dans le journal de la console.

Lorsque vous exécutez ce workflow, vous devez voir la sortie suivante dans l’étape « Se connecter à Redis », confirmant que vous avez créé le client Redis et ajouté des données :

```
Reply: OK
Reply: 1
Reply: 1
Reply: 1  
3 replies:
    0: octocat
    1: dinotocat
    2: robotocat
```
