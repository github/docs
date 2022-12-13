---
title: Informationen zu Workflows
shortTitle: About workflows
intro: 'Hier finden Sie eine allgemeine Übersicht über {% data variables.product.prodname_actions %}-Workflows. Dabei wird unter anderem auf Trigger, die Syntax und erweiterte Features eingegangen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/learn-github-actions/managing-complex-workflows
  - /actions/using-workflows/advanced-workflow-features
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cb0b834604d49432d34cec48b0c9f27e37161804
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '146180511'
---
## Informationen zu Workflows

{% data reusables.actions.about-workflows-long %}

## Grundlagen des Workflows

Ein Workflow muss die folgenden grundlegenden Komponenten enthalten:

1. Ein oder mehrere _Ereignisse_, die den Workflow auslösen
1. Ein oder mehrere _Aufträge_, die jeweils auf einem _Runnercomputer_ ausgeführt werden, und eine Reihe von _Schritten_ ausführen.
1. Jeder Schritt kann entweder ein Skript ausführen, das du definierst, oder eine Aktion. Mit dieser wiederverwendbaren Erweiterung kannst du deinen Workflow vereinfachen.

Weitere Informationen zu diesen grundlegenden Komponenten findest du unter [Grundlegendes zu GitHub Actions](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions).

![Übersicht über Workflow](/assets/images/help/images/overview-actions-simple.png)

## Auslösen eines Workflows

{% data reusables.actions.about-triggers %}

Weitere Informationen findest du unter [Auslösen eines Workflows](/actions/using-workflows/triggering-a-workflow). Eine vollständige Liste der Ereignisse findest du unter [Ereignisse zum Auslösen von Workflows](/actions/using-workflows/events-that-trigger-workflows).

## Syntax für Workflows

Ein Workflow wird mithilfe von YAML definiert. Eine vollständige Referenz der YAML-Syntax für die Erstellung von Workflows findest du unter [Workflowsyntax für GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows).


{% data reusables.actions.workflow-basic-example-and-explanation %}

Weitere Informationen zum Verwalten von Workflowausführungen, zum Beispiel zur erneuten Ausführung, zum Abbruch oder zur Löschung, findest du unter [Verwalten von Workflowausführungen](/actions/managing-workflow-runs).

## Verwenden von Startworkflows

{% data reusables.actions.workflow-template-overview %}

Weitere Informationen zum Verwenden und Erstellen von Startworkflows findest du unter [Verwenden von Startworkflows](/actions/using-workflows/using-starter-workflows) und [Erstellen von Startworkflows für deine Organisation](/actions/using-workflows/creating-starter-workflows-for-your-organization).

## Erweiterte Workflowfeatures

In diesem Abschnitt werden einige erweiterte Features von {% data variables.product.prodname_actions %} kurz erläutert, mit denen du komplexere Workflows erstellen kannst.

### Speichern von Geheimnissen

Wenn deine Workflows vertrauliche Daten wie Kennwörter oder Zertifikate verwenden, kannst du diese auf {% data variables.product.prodname_dotcom %} als _Geheimnisse_ speichern und dann in deinen Workflows als Umgebungsvariablen verwenden. Das bedeutet, dass du Workflows erstellen und freigeben kannst, ohne vertrauliche Werte direkt in die YAML-Quelle des Workflows einbetten zu müssen.

In diesem Beispielauftrag wird gezeigt, wie du auf ein vorhandenes Geheimnis als Umgebungsvariable verweisen und es als Parameter an einen Beispielbefehl senden kannst.

{% raw %}
```yaml
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Retrieve secret
        env:
          super_secret: ${{ secrets.SUPERSECRET }}
        run: |
          example-command "$super_secret"
```
{% endraw %}

Weitere Informationen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

### Erstellen abhängiger Aufträge

Die Aufträge in deinem Workflow werden standardmäßig gleichzeitig ausgeführt. Wenn du also über einen Auftrag verfügst, der nur ausgeführt werden muss, nachdem ein anderer Auftrag ausgeführt wurde, kannst du das Schlüsselwort `needs` verwenden, um diese Abhängigkeit zu erstellen. Wenn einer der Aufträge fehlschlägt, werden alle abhängigen Aufträge übersprungen. Wenn die Aufträge jedoch fortgesetzt werden sollen, kannst du dies mithilfe der bedingten Anweisung `if` definieren.

In diesem Beispiel werden die `setup`-, `build`- und `test`-Aufträge in Serien ausgeführt, wobei `build` und `test` von dem erfolgreichen Abschluss des vorangehenden Auftrags abhängen:

```yaml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh
```

Weitere Informationen findest du unter [Definieren von erforderlichen Aufträgen](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs).

### Verwenden einer Matrix

{% data reusables.actions.jobs.about-matrix-strategy %} Die Matrix wird mithilfe des Schlüsselworts `strategy` erstellt, das die Buildoptionen als Array empfängt. In dieser Matrix wird der Auftrag beispielsweise mehrmals ausgeführt, wobei verschiedene Versionen von Node.js verwendet werden:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [12, 14, 16]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
```

Weitere Informationen findest du unter [Verwenden einer Matrix für deine Aufträge](/actions/using-jobs/using-a-matrix-for-your-jobs).

{% ifversion actions-caching %}
### Abhängigkeiten „cachen“ (zwischenspeichern)

Wenn deine Aufträge regelmäßig Abhängigkeiten wiederverwenden, kannst du diese Dateien zwischenspeichern, um die Leistung zu verbessern. Sobald der Cache erstellt wurde, ist er für alle Workflows im gleichen Repository verfügbar.

In diesem Beispiel wird veranschaulicht, wie das Verzeichnis ` ~/.npm` zwischengespeichert wird:

```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
```

Weitere Informationen findest du unter [Zwischenspeichern von Abhängigkeiten zum Beschleunigen von Workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).
{% endif %}

### Datenbanken und Service-Container verwenden

Wenn für deinen Auftrag eine Datenbank oder ein Cachedienst erforderlich ist, kannst du das Schlüsselwort [`services`](/actions/using-jobs/running-jobs-in-a-container) verwenden, um einen temporären Container zum Hosten des Diensts zu erstellen. Der resultierende Container steht dann allen Schritten in diesem Auftrag zur Verfügung und wird entfernt, wenn der Auftrag abgeschlossen wurde. In diesem Beispiel wird veranschaulicht, wie ein Auftrag `services` verwenden kann, um einen `postgres`-Container zu erstellen, und dann `node` nutzt, um eine Verbindung mit diesem Dienst herzustellen.

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie
    services:
      postgres:
        image: postgres
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

Weitere Informationen findest du unter [Verwenden von Containerdiensten](/actions/using-containerized-services).

### Verwenden von Bezeichnungen zum Weiterleiten von Workflows

Wenn du sicher sein möchtest, dass ein bestimmter Runnertyp deinen Auftrag verarbeitet, kannst du mithilfe von Bezeichnungen steuern, wo die Aufträge ausgeführt werden. Du kannst einem selbstgehosteten Runner zusätzlich zur Standardbezeichnung `self-hosted` weitere Bezeichnungen hinzufügen. Dann kannst du auf diese Bezeichnungen in deinem YAML-Workflow verweisen, um sicherzustellen, dass der Auftrag auf vorhersehbare Weise weitergeleitet wird.{% ifversion not ghae %} {% data variables.product.prodname_dotcom %}-gehostete Runner wurden vordefinierte Bezeichnungen zugewiesen.{% endif %}

In diesem Beispiel wird gezeigt, wie ein Workflow Bezeichnungen verwenden kann, um den gewünschten Runner anzugeben:

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

Ein Workflow wird nur auf einem Runner ausgeführt, der alle Bezeichnungen im `runs-on`-Array hat. Der Auftrag wird bevorzugt an einen inaktiven, selbstgehosteten Runner mit den angegebenen Bezeichnungen weitergeleitet. {% ifversion fpt or ghec %}Wenn keine verfügbar sind und ein von {% data variables.product.prodname_dotcom %} gehosteter Runner mit den angegebenen Bezeichnungen vorhanden ist, wird der Auftrag an einen von {% data variables.product.prodname_dotcom %} gehosteten Runner weitergeleitet.{% endif %}

Weitere Informationen zu selbstgehosteten Runnerbezeichnungen findest du unter [Verwenden von Bezeichnungen mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners).

{% ifversion fpt or ghec %} Weitere Informationen zu von {% data variables.product.prodname_dotcom %} gehosteten Runnerbezeichnungen findest du unter [Unterstützte Runner und Hardwareressourcen](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Wiederverwenden von Workflows
{% data reusables.actions.reusable-workflows %} {% endif %}

### Verwenden von Umgebungen

Du kannst Umgebungen mit Schutzregeln und Geheimnissen konfigurieren, um die Ausführung von Aufträgen in einem Workflow zu steuern. Jeder Auftrag in einem Workflow kann auf eine einzelne Umgebung verweisen. Alle für die Umgebung konfigurierten Schutzregeln müssen eingehalten werden, bevor ein Auftrag, der auf die Umgebung verweist, an einen Runner gesendet wird. Weitere Informationen findest du unter [Verwenden von Umgebungen für die Bereitstellung](/actions/deployment/using-environments-for-deployment).
