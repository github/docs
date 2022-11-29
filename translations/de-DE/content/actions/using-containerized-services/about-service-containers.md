---
title: Informationen zu Service-Containern
intro: 'Du kannst Service-Container verwenden, um Datenbanken, Webdienste, Speicher-Caches und andere Tools mit deinem Workflow zu verbinden.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-service-containers
  - /actions/configuring-and-managing-workflows/about-service-containers
  - /actions/guides/about-service-containers
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Containers
  - Docker
ms.openlocfilehash: 67bfb403bb18f7364e000170ce71f9387d4ada69
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145107156'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Service-Containern

Service-Container sind Docker-Container, die Dir eine einfache und portable Möglichkeit bieten, Dienste zu hosten, um Deine Anwendung in einem Workflow zu testen oder zu betreiben. Beispielsweise muss Dein Workflow möglicherweise Integrationstests ausführen, die Zugriff auf eine Datenbank und einen Speicher-Cache erfordern.

Du kannst Service-Container für jeden Job in einem Workflow konfigurieren. Für jeden Service, der im Workflow konfiguriert ist, erstellt {% data variables.product.prodname_dotcom %} einen neuen Docker-Container und löscht den Service Container, wenn der Auftrag abgeschlossen ist. Steps (Schritte) in einem Job können mit allen Service-Containern kommunizieren, die Teil des gleichen Jobs sind. Du kannst jedoch keine Service-Container innerhalb einer zusammengesetzten Aktion erstellen und verwenden. 

{% data reusables.actions.docker-container-os-support %}

## Mit Service-Containern kommunizieren

Du kannst Jobs in einem Workflow so konfigurieren, dass sie direkt auf einer Runner-Maschine oder in einem Docker-Container laufen. Die Kommunikation zwischen einem Job und seinen Service-Containern ist unterscherschiedlich, je nachdem, ob ein Job direkt auf der Runner-Maschine oder in einem Container läuft.

### Jobs in einem Container ausführen

Wenn Du Jobs in einem Container ausführst, verbindet {% data variables.product.prodname_dotcom %} die Service-Container mit dem Job über die benutzerdefinierten Bridge-Netzwerke von Docker. Weitere Informationen findest du in der Docker-Dokumentation unter [Verwenden von Brückennetzwerken](https://docs.docker.com/network/bridge/).

Jobs und der Services in einem Container laufen zu lassen, vereinfacht den Netzwerkzugriff. Du kannst auf einen Service-Container mittels des Labels (Bezeichnung) zugreifen, den Du im Workflow konfigurierst. Der Hostname des Service-Containers wird automatisch dem Labelnamen zugeordnet. Wenn du z. B. einen Service-Container mit der Bezeichnung `redis` erstellst, ist auch der Hostname des Service-Containers `redis`.

Du brauchst für Service-Container keine Ports zu konfigurieren. Standardmäßig machen alle Container, die Teil desselben Docker-Netzwerks sind, alle Ports füreinander verfügbar, und außerhalb des Docker-Netzwerks werden keine Ports verfügbar gemacht.

### Jobs auf der Runner-Maschine ausführen

Wenn du Aufträge direkt auf dem Runnercomputer ausführst, kannst du mit `localhost:<port>` oder `127.0.0.1:<port>` auf Service-Container zugreifen. {% data variables.product.prodname_dotcom %} konfiguriert das Container-Netzwerk, um die Kommunikation vom Service-Container zum Docker-Host zu ermöglichen.

Wenn ein Job direkt auf einer Runner-Maschine läuft, macht der im Docker-Container laufende Dienst seine Ports nicht standardmäßig dem Job auf dem Runner verfügbar. Du musst Ports auf dem Service-Container dem Docker Host zuordnen. Weitere Informationen findest du unter [Zuordnen von Docker-Host- und Service-Container-Ports](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports).

## Service-Container erstellen

Du kannst das Schlüsselwort `services` verwenden, um Service-Container zu erstellen, die Teil eines Jobs in deinem Workflow sind. Weitere Informationen findest du unter [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

In diesem Beispiel wird ein Dienst namens `redis` in einem Auftrag namens `container-job` erstellt. Der Docker-Host ist in diesem Beispiel der `node:16-bullseye`-Container.

{% raw %}
```yaml{:copy}
name: Redis container example
on: push

jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:16-bullseye

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
```
{% endraw %}

## Ports von Docker-Host und Service-Container zuordnen

Wenn Dein Job in einem Docker-Container läuft, brauchst Du keine Ports auf dem Host oder dem Service-Container zuzuordnen. Wenn Dein Job direkt auf der Runner-Maschine läuft, musst Du alle benötigten Service-Container-Ports zu Ports der Host-Runner-Maschine zuordnen.

Du kannst Service-Container-Ports mit Hilfe des Schlüsseworts `ports` dem Docker-Host zuordnen. Weitere Informationen findest du unter [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

| Wert von `ports` |    BESCHREIBUNG |
|------------------|--------------|
| `8080:80` |   Ordnet TCP-Port 80 im Container dem Port 8080 auf dem Docker-Host zu. |
| `8080:80/udp` |   Ordnet UDP-Port 80 im Container dem Port 8080 auf dem Docker-Host zu. |
| `8080/udp`    | Ordnet einen zufällig gewählten UDP-Port im Container dem UDP-Port 8080 auf dem Docker-Host zu. |

Wenn du Ports mit dem Schlüsselwort `ports` zuordnest, veröffentlicht {% data variables.product.prodname_dotcom %} die Ports des Containers mit dem Befehl `--publish` auf dem Docker-Host. Weitere Informationen findest du in der Docker-Dokumentation unter [Docker-Containernetzwerke](https://docs.docker.com/config/containers/container-networking/).

Wenn Du den Port des Docker-Hosts angibst, aber nicht den des Containers, dann wird der Container-Port zufällig einem freien Port zugewiesen. {% data variables.product.prodname_dotcom %} setzt den zugewiesenen Container-Port im Kontext des Service-Containers. Wenn du beispielsweise den Port 5432 für den Docker-Host konfiguriert hast, kannst Du für einen Service-Container `redis` mit dem Kontext `job.services.redis.ports[5432]` auf den entsprechenden Port des Containers zugreifen. Weitere Informationen findest du unter [Kontexte](/actions/learn-github-actions/contexts#job-context).

### Beispiel zur Zuordnung von Redis-Ports

Dieses Beispiel ordnet den Port 6379 des Service-Containers `redis` dem Port 6379 des Docker-Hosts zu.

{% raw %}
```yaml{:copy}
name: Redis Service Example
on: push

jobs:
  # Label of the container job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        #
        ports:
          # Opens tcp port 6379 on the host and service container
          - 6379:6379
```
{% endraw %}

## Weiterführende Themen

- [Erstellen von Redis-Service-Containern](/actions/automating-your-workflow-with-github-actions/creating-redis-service-containers)
- [Erstellen von PostgreSQL-Service-Containern](/actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers)
