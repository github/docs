---
title: Redis-Service-Container erstellen
shortTitle: Redis service containers
intro: 'Du kannst Service-Container verwenden, um einen Redis-Client in Deinem Workflow zu erstellen. Dieser Leitfaden zeigt Beispiele für die Erstellung eines Redis-Dienstes für Jobs, die in Containern oder direkt auf der Runner-Maschine ausgeführt werden.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107155'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Dieser Leitfaden enthält Workflowbeispiele, in denen ein Dienstcontainer unter Verwendung des Docker Hub-Images `redis` konfiguriert wird. Der Workflow führt ein Skript aus, um einen Redis-Client zu erstellen und den Client mit Daten zu füllen. Um zu testen, ob der Workflow den Redis-Client erstellt und mit Daten füllt, gibt das Skript die Daten des Clients auf der Konsole aus.

{% data reusables.actions.docker-container-os-support %}

## Voraussetzungen

{% data reusables.actions.service-container-prereqs %}

Es kannst Dir helfen, wenn Du ein grundlegendes Verständnis von YAML, der Syntax für {% data variables.product.prodname_actions %} und Redis hast. Weitere Informationen finden Sie unter

- [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [Erste Schritte mit Redis](https://redislabs.com/get-started-with-redis/) in der Redis-Dokumentation

## Jobs in Containern ausführen

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

### Den Container-Job konfigurieren

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

Der Hostname des Redis-Diensts ist die Bezeichnung, die du in deinem Workflow konfiguriert hast (in diesem Fall: `redis`). Da Docker-Container im selben benutzerdefinierten Bridge-Netzwerk standardmäßig alle Ports öffnen, kannst Du auf den Service-Container über den Standard-Redis-Port 6379 zugreifen.

## Jobs direkt auf der Runner-Maschine ausführen

Wenn Du einen Job direkt auf der Runner-Maschine ausführst, musst Du die Ports des Service-Containers den Ports des Docker-Hosts zuordnen. Du kannst vom Docker-Host aus auf Dienstcontainer zugreifen, indem du `localhost` und die Portnummer des Docker-Hosts verwendest.

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

### Runner-Job konfigurieren

{% data reusables.actions.service-container-host-runner %}

{% data reusables.actions.redis-label-description %}

Der Workflow ordnet Port 6379 des Redis-Service-Containers dem Docker-Host zu. Weitere Informationen zum Schlüsselwort `ports` findest du unter [Informationen zu Dienstcontainern](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports).

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

## Redis-Sercive-Container testen

Du kannst Deinen Workflow mit dem folgenden Skript testen, das einen Redis-Client erstellt und den Client mit Platzhalter-Daten füllt. Das Skript gibt dann die im Redis-Client gespeicherten Werte auf dem Terminal aus. Für das Skript kann eine beliebige Sprache verwendet werden. In diesem Beispiel werden jedoch Node.js und das npm-Modul `redis` genutzt. Weitere Informationen findest du unter dem [npm-Modul „redis“](https://www.npmjs.com/package/redis).

Du kannst *client.js* anpassen, um alle Redis-Vorgänge einzuschließen, die für deinen Workflow erforderlich sind. In diesem Beispiel erstellt das Skript die Redis-Client-Instanz, fügt Platzhalter-Daten hinzu und ruft dann die Daten ab.

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

Das Skript erstellt einen neuen Redis-Client mithilfe der Methode `createClient`. Diese Methode akzeptiert einen Parameter vom Typ `host` und einen Parameter vom Typ `port`. Im Skript werden die Umgebungsvariablen `REDIS_HOST` und `REDIS_PORT` verwendet, um die IP-Adresse und den Port des Clients festzulegen. Wenn `host` und `port` nicht definiert sind, werden der Standardhost `localhost` und der Standardport 6379 verwendet.

Im Skript werden die Methoden `set` und `hset` verwendet, um die Datenbank mit einigen Schlüsseln, Feldern und Werten aufzufüllen. Um zu bestätigen, dass der Redis-Client die Daten enthält, gibt das Skript den Inhalt der Datenbank in das Konsolen-Log aus.

Wenn Du diesen Workflow ausführst, solltest Du im Schritt „Mit Redis verbinden“ die folgende Ausgabe sehen, welche zeigt, dass Du den Redis-Client erstellt und Daten hinzugefügt hast:

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
