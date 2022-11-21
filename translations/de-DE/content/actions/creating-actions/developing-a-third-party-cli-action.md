---
title: Entwickeln einer Aktion für eine Drittanbieter-CLI
shortTitle: CLI setup action
intro: 'Erfahre, wie du eine Aktion entwickeln kannst, um eine CLI für {% data variables.product.prodname_actions %}-Runner einzurichten.'
redirect_from: []
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Actions
ms.openlocfilehash: c839faa63efd0f8b7f5ab78a81107d27ab93e1c4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090481'
---
## Einführung

Du kannst eine Aktion schreiben, um Benutzern über eine konfigurierte CLI-Umgebung auf {% data variables.product.prodname_actions %}-Runnern den Zugriff auf deine Server zu gewähren.

Deine Aktion sollte folgende Vorgaben erfüllen:

- Sie sollte Benutzern die einfache Angabe der zu installierenden CLI-Version ermöglichen.
- Sie sollte mehrere Betriebssysteme unterstützen.
- Sie sollte effizient ausgeführt werden, um Laufzeiten und zugehörige Kosten zu minimieren.
- Sie sollte sowohl auf von {% data variables.product.product_name %} gehosteten als auch auf selbstgehosteten Runnern funktionieren.
- Sie sollte nach Möglichkeit Communitytools nutzen.

In diesem Artikel wird veranschaulicht, wie eine Aktion geschrieben wird, die eine bestimmte Version deiner CLI abruft, installiert, dem Pfad hinzufügt und (optional) zwischenspeichert. Diese Art von Aktion (eine Aktion zum Einrichten eines Tools) wird häufig mit `setup-$TOOL` benannt. 

## Voraussetzungen

Du solltest wissen, wie eine benutzerdefinierte Aktion geschrieben wird. Weitere Informationen findest du unter [Informationen zu benutzerdefinierten Aktionen](/actions/creating-actions/about-custom-actions). Eine ausführlichere Anleitung zum Schreiben einer benutzerdefinierten Aktion findest du unter [Erstellen einer JavaScript-Aktion](/actions/creating-actions/creating-a-javascript-action).

## Beispiel

Das folgende Skript veranschaulicht, wie du eine vom Benutzer angegebene Version als Eingabe abfragst, die entsprechende Version deiner CLI herunterlädst und extrahierst und die CLI dann dem Pfad hinzufügst.

{% data variables.product.prodname_dotcom %} stellt [`actions/toolkit`](https://github.com/actions/toolkit) bereit. Dabei handelt es sich um eine Reihe von Paketen, die dir beim Erstellen von Aktionen helfen. In diesem Beispiel werden die Pakete [`actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) und [`actions/tool-cache`](https://github.com/actions/toolkit/tree/main/packages/tool-cache) verwendet.

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function setup() {
  // Get version of tool to be installed
  const version = core.getInput('version');

  // Download the specific version of the tool, e.g. as a tarball
  const pathToTarball = await tc.downloadTool(getDownloadURL());

  // Extract the tarball onto the runner
  const pathToCLI = await tc.extractTar(pathToTarball);

  // Expose the tool by adding it to the PATH
  core.addPath(pathToCLI)
}

module.exports = setup
```
{% endraw %}

Um dieses Skript zu verwenden, ersetze `getDownloadURL` durch eine Funktion, die deine CLI herunterlädt. Du musst auch eine Metadatendatei für Aktionen erstellen (`action.yml`), die eine `version`-Eingabe akzeptiert und dieses Skript ausführt. Ausführliche Informationen zum Erstellen einer Aktion findest du unter [Erstellen einer JavaScript-Aktion](/actions/creating-actions/creating-a-javascript-action).

Ein vollständiges Beispiel zum Einrichten dieser Aktion findest du unter [example-setup-gh](https://github.com/github-developer/example-setup-gh).

## Weitere Informationsquellen

Dieses Muster wird in mehreren Aktionen verwendet. Weitere Beispiele findest du hier:

* [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby)
* [`google-github-actions/setup-gcloud`](https://github.com/google-github-actions/setup-gcloud)
* [`hashicorp/setup-terraform`](https://github.com/hashicorp/setup-terraform)

