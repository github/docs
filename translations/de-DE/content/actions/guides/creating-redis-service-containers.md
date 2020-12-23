---
title: Redis-Service-Container erstellen
shortTitle: Redis service containers
intro: Du kannst Service-Container verwenden, um einen Redis-Client in Deinem Workflow zu erstellen. Dieser Leitfaden zeigt Beispiele für die Erstellung eines Redis-Dienstes für Jobs, die in Containern oder direkt auf der Runner-Maschine ausgeführt werden.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-redis-service-containers
  - /actions/configuring-and-managing-workflows/creating-redis-service-containers
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Einführung

Diese Anleitung zeigt Dir Workflow-Beispiele, die einen Service-Container mit dem Docker-Hub-`redis`-Image konfigurieren. Der Workflow führt ein Skript aus, um einen Redis-Client zu erstellen und den Client mit Daten zu füllen. Um zu testen, ob der Workflow den Redis-Client erstellt und mit Daten füllt, gibt das Skript die Daten des Clients auf der Konsole aus.

{% data reusables.github-actions.docker-container-os-support %}

### Vorrausetzungen

{% data reusables.github-actions.service-container-prereqs %}

Es kannst Dir helfen, wenn Du ein grundlegendes Verständnis von YAML, der Syntax für {% data variables.product.prodname_actions %} und Redis hast. Weitere Informationen findest Du unter:

- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- „[Erste Schritte mit Redis](https://redislabs.com/get-started-with-redis/)“ in der Redis-Dokumentation

### Jobs in Containern ausführen

{% data reusables.github-actions.container-jobs-intro %}

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml
name: Redis container example
on: push

jobs:
  # Label des Container-Jobs
  container-job:
    # Container muessen in Linux-basierten Betriebssystemen laufen
    runs-on: ubuntu-latest
    # Docker-Hub-Image, in dem der `container-job` laeuft
    container: node:10.18-jessie

    # Service-Container, die mit dem `container-job` laufen
    services:
      # Label zum Zugriff auf den Service-Container
      redis:
        # Docker-Hub-Image
        image: redis
        # Health-Checks so einstellen, dass sie warten, bis redis gestarted ist
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      # Laedt eine Kopie des Codes in Dein Repository herunter, bevor CI tests gestartet werden
      - name: Check out repository code
        uses: actions/checkout@v2

      # Fuehrt eine saubere Installation aller abhaengigkeiten in der Datei `package.json` aus
      # Weitere Informationen findest Du unter https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # fuehrt ein Skript aus, das einen Redis-Cient erzeugt,
        # Den Client mit Daten fuellt, und Daten abruft
        run: node client.js
        # Umgebungsvariable, mittels der das Skript `client.js` einen neuen Redis-Client erzeugt.
        env:
          # Der Hostname fuer die Kommunikation mit dem Redis-Service-Container
          REDIS_HOST: redis
          # Standarmaessiger Redis-Port
          REDIS_PORT: 6379
```
{% endraw %}

#### Den Container-Job konfigurieren

{% data reusables.github-actions.service-container-host %}

{% data reusables.github-actions.redis-label-description %}

```yaml
jobs:
  # Label des Container-Jobs
  container-job:
    # Container muessen in Linux-basierten Betriebssystemen laufen
    runs-on: ubuntu-latest
    # Docker-Hub-Image, in dem der `container-job` laeuft
    container: node:10.18-jessie

    # Service-Container, die mit dem `container-job` laufen
    services:
      # Label zum Zugriff auf den Service-Container
      redis:
        # Docker-Hub-Image
        image: redis
        # Health-Checks so einstellen, dass sie warten, bis redis gestarted ist
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
```

#### „Steps“ (Schritte) konfigurieren

{% data reusables.github-actions.service-template-steps %}

```yaml
steps:
  # Laedt eine Kopie des Codes in Dein Repository herunter, bevor CI tests gestartet werden
  - name: Check out repository code
    uses: actions/checkout@v2

  # Fuehrt eine saubere Installation aller abhaengigkeiten in der Datei `package.json` aus
  # Weitere Informationen findest Du unter https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to Redis
    # Fuehrt ein Skript aus, das einen Redis-Cient erzeugt,
    # den Client mit Daten fuellt, und Daten abruft
    run: node client.js
    # Umgebungsvariable, mittels der das Skript `client.js` einen neuen Redis-Client erzeugt.
    env:
      # Der Hostname fuer die Kommunikation mit dem Redis-Service-Container
      REDIS_HOST: redis
      # Standarmaessiger Redis-Port
      REDIS_PORT: 6379
```

{% data reusables.github-actions.redis-environment-variables %}

Der Hostname des Redis-Dienstes ist das Label, das Du in Deinem Workflow konfiguriert hast, in diesem Fall `redis`. Da Docker-Container im selben benutzerdefinierten Bridge-Netzwerk standardmäßig alle Ports öffnen, kannst Du auf den Service-Container über den Standard-Redis-Port 6379 zugreifen.

### Jobs direkt auf der Runner-Maschine ausführen

Wenn Du einen Job direkt auf der Runner-Maschine ausführst, musst Du die Ports des Service-Containers den Ports des Docker-Hosts zuordnen. Du kannst über den Docker-Host auf den Service-Container zugreifen, indem Du `localhost` und die Port-Nummer des Docker-Hosts verwendest.

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml
name: Redis runner example
on: push

jobs:
  # Label des Runner-Jobs
  runner-job:
    # Du brauchst eine Linux-Umgebung fuer Service-Container oder Container-Jobs
    runs-on: ubuntu-latest

    # Service-Container, die mit dem `runner-job` laufen
    services:
      # Label zum Zugriff auf den Service-Container
      redis:
        # Docker-Hub-Image
        image: redis
        # Health-Checks so einstellen, dass sie warten, bis redis gestarted ist
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Ordnet Port 6379 des Service-Containers dem Host zu
          - 6379:6379

    steps:
      # Laedt eine Kopie des Codes in Dein Repository herunter, bevor CI tests gestartet werden
      - name: Check out repository code
        uses: actions/checkout@v2

      # Fuehrt eine saubere Installation aller abhaengigkeiten in der Datei `package.json` aus
      # Weitere Informationen findest Du unter https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # Fuehrt ein Skript aus, das einen Redis-Cient erzeugt,
        # den Client mit Daten fuellt, und Daten abruft
        run: node client.js
        # Umgebungsvariable, mittels der das Skript `client.js` 
        # einen neuen Redis-Client erzeugt.
        env:
          # Der Hostname fuer die Kommunikation mit dem Redis-Service-Container
          REDIS_HOST: localhost
          # Standarmaessiger Redis-Port
          REDIS_PORT: 6379
```
{% endraw %}

#### Runner-Job konfigurieren

{% data reusables.github-actions.service-container-host-runner %}

{% data reusables.github-actions.redis-label-description %}

Der Workflow ordnet Port 6379 des Redis-Service-Containers dem Docker-Host zu. Weitere Informationen über das Schlüsselwort `ports` findest Du unter "[Informationen über Service-Container](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)."

```yaml
jobs:
  # Label des Runner-Jobs
  runner-job:
    # Fuer Service-Containers oder Container-Jobs brauchst Du eine Linux-Umgebung
    runs-on: ubuntu-latest

    # Service-Container, die mit dem `runner-job` laufen
    services:
      # Label zum Zugriff auf den Service-Container
      redis:
        # Docker-Hub-Image
        image: redis
        # Health-Checks so einstellen, dass sie warten, bis redis gestarted ist
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Ordnet Port 6379 des Service-Containers dem Host zu
          - 6379:6379
```

#### „Steps“ (Schritte) konfigurieren

{% data reusables.github-actions.service-template-steps %}

```yaml
steps:
  # Laedt eine Kopie des Codes in Dein Repository herunter, bevor CI tests gestartet werden
  - name: Check out repository code
    uses: actions/checkout@v2

  # Fuehrt eine saubere Installation aller abhaengigkeiten in der Datei `package.json` durch
  # Weitere Informationen findest Du unter https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to Redis
    # Fuehrt ein Skript aus, das einen Redis-Cient erzeugt,
    # den Client mit Daten fuellt, und Daten abruft
    run: node client.js
    # Umgebungsvariable, mittels der das Skript `client.js`
    # einen neuen Redis-Client erzeugt.
    env:
      # Der Hostname fuer die Kommunikation mit dem Redis-Service-Container
      REDIS_HOST: localhost
      # Standarmaessiger Redis-Port
      REDIS_PORT: 6379
```

{% data reusables.github-actions.redis-environment-variables %}

{% data reusables.github-actions.service-container-localhost %}

### Redis-Sercive-Container testen

Du kannst Deinen Workflow mit dem folgenden Skript testen, das einen Redis-Client erstellt und den Client mit Platzhalter-Daten füllt. Das Skript gibt dann die im Redis-Client gespeicherten Werte auf dem Terminal aus. Dein Skript kann jede beliebige Sprache verwenden, aber dieses Beispiel verwendet Node.js und das `redis`-npm-Modul. Weitere Informationen findest Du unter [npm-Redis-Modul](https://www.npmjs.com/package/redis).

Du kannst *client.js* anpassen, um alle Redis-Operationen abzudecken, die Dein Workflow braucht. In diesem Beispiel erstellt das Skript die Redis-Client-Instanz, fügt Platzhalter-Daten hinzu und ruft dann die Daten ab.

{% data reusables.github-actions.service-container-add-script %}

```javascript
const redis = require("redis");

// Erzeugt einen neuen Redis-Client
// Falls REDIS_HOST nicht definiert ist, ist der Host standarmaessig localhost
// Falls REDIS_PORT nicht definiert ist, ist der Standard-Port 6379
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT  
});

redisClient.on("error", function(err) {
    console.log("Error " + err);
});

// Setzt den Schluessel "octocat" auf den Wert "Mona the octocat"
redisClient.set("octocat", "Mona the Octocat", redis.print);
// Setzt einen Schluessel auf "octocat", Feld auf "species", und "value" auf "Cat and Octopus"
redisClient.hset("species", "octocat", "Cat and Octopus", redis.print);
// Setzt einen Schluessel auf "octocat", Feld auf "species", und "value" auf "Dinosaur and Octopus"
redisClient.hset("species", "dinotocat", "Dinosaur and Octopus", redis.print);
// Setzt einen Schluessel auf "octocat", Feld auf "species", und "value" auf "Cat and Robot"
redisClient.hset(["species", "robotocat", "Cat and Robot"], redis.print);
// Holt alle Felder vom Schluessel "species"

redisClient.hkeys("species", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    redisClient.quit();
});
```

Das Skript erstellt einen neuen Redis-Client mit der Methode `createClient`, welche die Parameter `host` und `port` akzeptiert. Das Skript verwendet die Umgebungsvariablen `REDIS_HOST` und `REDIS_PORT`, um die IP-Adresse und den Port des Clients festzulegen. Wenn `host` und `port` nicht definiert sind, ist der Standard-Host `localhost` und der Standard-Port 6379.

Das Skript verwendet die Methoden `set` und `hset`, um die Datenbank mit einigen Schlüsseln, Feldern und Werten zu füllen. Um zu bestätigen, dass der Redis-Client die Daten enthält, gibt das Skript den Inhalt der Datenbank in das Konsolen-Log aus.

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
