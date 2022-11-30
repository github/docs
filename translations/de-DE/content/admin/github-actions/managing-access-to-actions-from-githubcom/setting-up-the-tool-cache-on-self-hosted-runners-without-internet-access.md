---
title: Einrichten des Toolcaches auf selbstgehosteten Runnern ohne Internetzugriff
intro: 'Um die enthaltenen `actions/setup`-Aktionen auf selbstgehosteten Runnern ohne Internetzugriff zu verwenden, musst du zunächst den Toolcache des Runners für deine Workflows auffüllen.'
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
  - /admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
  - Networking
  - Storage
shortTitle: Tool cache for offline runners
ms.openlocfilehash: fe1b070880db8353064f1be5a26b0a63a5e92cf5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529296'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu den enthaltenen Setupaktionen und dem Runnertoolcache

{% data reusables.actions.enterprise-no-internet-actions %}

Die meisten offiziellen von {% data variables.product.prodname_dotcom %} erstellten Aktionen werden automatisch mit {% data variables.product.product_name %} kombiniert. Selbstgehostete Runner ohne Internetzugang müssen jedoch erst konfiguriert werden, bevor sie die enthaltenen `actions/setup-LANGUAGE`-Aktionen wie z. B. `setup-node` nutzen können.

Die `actions/setup-LANGUAGE`-Aktionen benötigen normalerweise Internetzugriff, um die erforderlichen Umgebungsbinärdateien in den Toolcache des Runners herunterzuladen. Selbstgehostete Runner ohne Internetzugriff können die Binärdateien nicht herunterladen, sodass du den Toolcache auf dem Runner manuell auffüllen musst.

Du kannst den Runnertoolcache auffüllen, indem du einen {% data variables.product.prodname_actions %}-Workflow auf {% data variables.product.prodname_dotcom_the_website %} ausführst, der einen auf {% data variables.product.prodname_dotcom %} gehosteten Toolcache des Runners als Artefakt hochlädt, das du dann auf deinen nicht mit dem Internet verbundenen, selbstgehosteten Runner übertragen und extrahieren kannst.

{% note %}

**Hinweis:** Du kannst nur einen auf {% data variables.product.prodname_dotcom %} gehosteten Toolcache für einen selbstgehosteten Runner verwenden, der über ein identisches Betriebssystem und eine identische Architektur verfügt. Wenn du beispielsweise einen {% data variables.product.prodname_dotcom %}-gehosteten Runner für `ubuntu-22.04` verwendest, um einen Toolcache zu generieren, muss dein selbstgehosteter Runner ein 64-Bit-Computer mit Ubuntu 22.04 sein. Weitere Informationen zu {% data variables.product.prodname_dotcom %}-gehosteten Runnern findest du unter [Informationen zu {% data variables.product.prodname_dotcom %}-gehosteten Runnern](/free-pro-team@latest/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources).

{% endnote %}

## Voraussetzungen

* Du musst wissen, welche Entwicklungsumgebungen deine selbstgehosteten Runner benötigen. Im folgenden Beispiel wird veranschaulicht, wie ein Toolcache für die `setup-node`-Aktion mit den Node.js-Versionen 10 und 12 aufgefüllt wird.
* Greife auf ein Repository auf {% data variables.product.prodname_dotcom_the_website %} zu, das du zur Ausführung eines Workflows verwenden kannst.
* Greife auf das Dateisystem deines selbstgehosteten Runners zu, um den Ordner des Toolcaches aufzufüllen.

## Auffüllen des Toolcaches für einen selbstgehosteten Runner

1. Navigiere auf {% data variables.product.prodname_dotcom_the_website %} zu einem Repository, das du zur Ausführung eines {% data variables.product.prodname_actions %}-Workflows verwenden kannst.
1. Erstelle eine neue Workflowdatei im Ordner des Repositorys `.github/workflows`, die ein Artefakt hochlädt, das den auf {% data variables.product.prodname_dotcom %} gehosteten Toolcache des Runners enthält.

   Das folgende Beispiel zeigt einen Workflow, der den Toolcache für eine Ubuntu 22.04-Umgebung hochlädt, wobei die Aktion `setup-node` mit den Node.js-Versionen 10 und 12 verwendet wird.

   ```yaml
   name: Upload Node.js 10 and 12 tool cache
   on: push
   jobs:
     upload_tool_cache:
       runs-on: ubuntu-22.04
       steps:
         - name: Clear any existing tool cache
           run: |
             mv "{% raw %}${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"{% endraw %}
             mkdir -p "{% raw %}${{ runner.tool_cache }}{% endraw %}"
         - name: Setup Node 10
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 10.x
         - name: Setup Node 12
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 12.x
         - name: Archive tool cache
           run: |
             cd "{% raw %}${{ runner.tool_cache }}{% endraw %}"
             tar -czf tool_cache.tar.gz *
         - name: Upload tool cache artifact
           uses: {% data reusables.actions.action-upload-artifact %}
           with:
             path: {% raw %}${{runner.tool_cache}}/tool_cache.tar.gz{% endraw %}
   ```
1. Lade das Toolcacheartefakt aus der Workflowausführung herunter. Anweisungen zum Herunterladen von Artefakten findest du unter [Herunterladen von Workflowartefakten](/actions/managing-workflow-runs/downloading-workflow-artifacts).
1. Übertrage das Toolcacheartefakt in deinen selbstgehosteten Runner, und extrahiere es in das lokale Toolcacheverzeichnis. Das Standardverzeichnis für den Toolcache ist `RUNNER_DIR/_work/_tool`. Wenn der Runner noch keine Aufträge verarbeitet hat, musst du möglicherweise die `_work/_tool`-Verzeichnisse erstellen.

    Nach dem Extrahieren des Toolcacheartefaktes, das im obigen Beispiel hochgeladen wurde, sollte eine Verzeichnisstruktur auf deinem selbstgehosteten Runner vorhanden sein, die dem folgenden Beispiel ähnelt:

    ```
    RUNNER_DIR
    ├── ...
    └── _work
        ├── ...
        └── _tool
            └── node
                ├── 10.22.0
                │   └── ...
                └── 12.18.3
                    └── ...
    ```

Dein selbstgehosteter Runner ohne Internetzugriff sollte jetzt in der Lage sein, die `setup-node`-Aktion zu verwenden. Wenn Probleme auftreten, stelle sicher, dass du den richtigen Toolcache für deine Workflows aufgefüllt hast. Wenn du beispielsweise die `setup-python`-Aktion verwenden musst, fülle den Toolcache mit der Python-Umgebung auf, die du verwenden möchtest.
