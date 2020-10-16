---
title: Informationen zu Service-Containern
intro: 'Du kannst Service-Container verwenden, um Datenbanken, Webdienste, Speicher-Caches und andere Tools mit Deinem Workflow zu verbinden.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-service-containers
  - /actions/configuring-and-managing-workflows/about-service-containers
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Informationen zu Service-Containern

Service-Container sind Docker-Container, die Dir eine einfache und portable Möglichkeit bieten, Dienste zu hosten, um Deine Anwendung in einem Workflow zu testen oder zu betreiben. Beispielsweise muss Dein Workflow möglicherweise Integrationstests ausführen, die Zugriff auf eine Datenbank und einen Speicher-Cache erfordern.

Du kannst Service-Container für jeden Job in einem Workflow konfigurieren. Für jeden Service, der im Workflow konfiguriert ist, erstellt {% data variables.product.prodname_dotcom %} einen neuen Docker-Container und löscht den Service Container, wenn der Auftrag abgeschlossen ist. Steps (Schritte) in einem Job können mit allen Service-Containern kommunizieren, die Teil des gleichen Jobs sind.

{% data reusables.github-actions.docker-container-os-support %}

### Mit Service-Containern kommunizieren

Du kannst Jobs in einem Workflow so konfigurieren, dass sie direkt auf einer Runner-Maschine oder in einem Docker-Container laufen. Die Kommunikation zwischen einem Job und seinen Service-Containern ist unterscherschiedlich, je nachdem, ob ein Job direkt auf der Runner-Maschine oder in einem Container läuft.

#### Jobs in einem Container ausführen

Wenn Du Jobs in einem Container ausführst, verbindet {% data variables.product.prodname_dotcom %} die Service-Container mit dem Job über die benutzerdefinierten Bridge-Netzwerke von Docker. Weitere Informationen findest Du unter "[Bridge-Netzwerke verwenden](https://docs.docker.com/network/bridge/)" in der Docker-Dokumentation.

Jobs und der Services in einem Container laufen zu lassen, vereinfacht den Netzwerkzugriff. Du kannst auf einen Service-Container mittels des Labels (Bezeichnung) zugreifen, den Du im Workflow konfigurierst. Der Hostname des Service-Containers wird automatisch dem Labelnamen zugeordnet. Wenn Du z.B. einen Service-Container mit der Bezeichnung `Redis` erstellst, ist auch der Hostname des Service-Containers `Redis`.

Du brauchst für Service-Container keine Ports zu konfigurieren. Standardmäßig machen alle Container, die Teil desselben Docker-Netzwerks sind, alle Ports füreinander verfügbar, und außerhalb des Docker-Netzwerks werden keine Ports verfügbar gemacht.

#### Jobs auf der Runner-Maschine ausführen

Wenn Du Jobs direkt auf der Runner-Maschine ausführst, kannst Du auf Service-Container mit `localhost:<port>` oder `127.0.0.1:<port>` zugreifen. {% data variables.product.prodname_dotcom %} konfiguriert das Container-Netzwerk, um die Kommunikation vom Service-Container zum Docker-Host zu ermöglichen.

Wenn ein Job direkt auf einer Runner-Maschine läuft, macht der im Docker-Container laufende Dienst seine Ports nicht standardmäßig dem Job auf dem Runner verfügbar. Du musst Ports auf dem Service-Container dem Docker Host zuordnen. Weitere Informationen findest Du unter "[Ports auf Docker-Host und Service-Container zuordnen](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)."

### Service-Container erstellen

Du kannst das Schlüsselwort `Services` verwenden, um Service-Container zu erstellen, die Teil eines Jobs in Deinem Workflow sind. Weitere Informationen findest Du unter [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

Dieses Beispiel erstellt einen Dienst namens `redis` in einem Job namens `container-job`. Der Docker-Host in diesem Beispiel ist der Container `node:10.18-jessie`.

{% raw %}
```yaml
name: Redis container example
on: push

jobs:
  # Label des Container-Jobs
  container-job:
    # Container müssen in Linux-basierten Betriebssystemen laufen
    runs-on: ubuntu-latest
    # Docker-Hub-Image in dem `container-job` laeuft
    container: node:10.18-jessie

    # Service-Container, mit denen `container-job` laeuft
    services:
      # Label zum Zugriff auf den Service--Container
      redis:
        # Docker-Hub-Image
        image: redis
```
{% endraw %}

### Ports von Docker-Host und Service-Container zuordnen

Wenn Dein Job in einem Docker-Container läuft, brauchst Du keine Ports auf dem Host oder dem Service-Container zuzuordnen. Wenn Dein Job direkt auf der Runner-Maschine läuft, musst Du alle benötigten Service-Container-Ports zu Ports der Host-Runner-Maschine zuordnen.

Du kannst Service-Container-Ports mit Hilfe des Schlüsseworts `ports` dem Docker-Host zuordnen. Weitere Informationen findest Du unter [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

| Wert von `ports` | Beschreibung                                                                                    |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `8080:80`        | Ordnet TCP-Port 80 im Container dem Port 8080 auf dem Docker-Host zu.                           |
| `8080:80/udp`    | Ordnet UDP-Port 80 im Container dem Port 8080 auf dem Docker-Host zu.                           |
| `8080/udp`       | Ordnet einen zufällig gewählten UDP-Port im Container dem UDP-Port 8080 auf dem Docker-Host zu. |

Wenn Du Ports mittels `ports` zuordnest, publiziert {% data variables.product.prodname_dotcom %} die Ports des Containers auf dem Docker-Host mit dem Befehl `--publish`. Weitere Informationen findest Du unter "[Vernetzung von Docker-Containern](https://docs.docker.com/config/containers/container-networking/)" in der Docker Dokumentation.

Wenn Du den Port des Docker-Hosts angibst, aber nicht den des Containers, dann wird der Container-Port zufällig einem freien Port zugewiesen. {% data variables.product.prodname_dotcom %} setzt den zugewiesenen Container-Port im Kontext des Service-Containers. Wenn Du beispielsweise den Port 5432 für den Docker-Host konfiguriert hast, kannst Du für einen Service Container `redis` mit dem Kontext  code>job.services.redis.ports[5432]</code> auf den entsprechenden Port des Containers zugreifen. Weitere Informationen findest Du unter "[Kontext- und Ausdrucks-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#job-context)."

#### Beispiel zur Zuordnung von Redis-Ports

Dieses Beispiel ordnet den Port 6379 des Service-Containers `redis` dem Port 6379 des Docker-Hosts zu.

{% raw %}
```yaml
name: Redis Service Example
on: push

jobs:
  # Label des Container-Jobs
  runner-job:
    # Fuer Service-Containers oder Container-Jobs musst Du eine Linux-Umgebung benutzen
    runs-on: ubuntu-latest

    # Service-Container, die mit `runner-job` laufen sollen
    services:
      # Label zum Zugriff auf den Service-Container
      redis:
        # Docker-Hub-Image
        image: redis
        #
        ports:
          # Oeffnet TCP-Port 6379 auf dem Host und Service-Container
          - 6379:6379
```
{% endraw %}

### Weiterführende Informationen

- "[Redis-Service-Container erstellen](/actions/automating-your-workflow-with-github-actions/creating-redis-service-containers)"
- "[PostgreSQL-Service-Container erstellen](/actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers)"
