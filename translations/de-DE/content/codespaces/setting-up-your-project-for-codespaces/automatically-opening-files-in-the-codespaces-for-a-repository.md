---
title: Automatisches Öffnen von Dateien in den Codespaces für ein Repository
shortTitle: Automatically opening files
intro: 'Du kannst festlegen, dass bestimmte Dateien automatisch geöffnet werden, wenn jemand einen Codespace für dein Repository erstellt und den Codespace im {% data variables.product.prodname_vscode %}-Webclient öffnet.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: a57b76eda4bfc47071f3cfeade8f50afde9e01e6
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114034'
---
## Übersicht

Wenn Benutzer*innen beim Erstellen eines Codespaces für dein Repository eine bestimmte Datei angezeigt werden soll, kannst du festlegen, dass diese automatisch im {% data variables.product.prodname_vscode_shortname %}-Webclient geöffnet wird. Diese Einstellung kannst du in der Konfigurationsdatei des Entwicklungscontainers für dein Repository vornehmen. 

Die von dir angegebenen Dateien werden nur geöffnet, wenn ein Codespace zum ersten Mal im Webclient geöffnet wird. Wenn ein*e Benutzer*in die angegebenen Dateien schließt, werden diese nicht automatisch erneut geöffnet, wenn diese*r den Codespace das nächste Mal öffnet oder neu startet.

{% note %}

**Hinweis**: Diese Automatisierung gilt nur für den {% data variables.product.prodname_vscode_shortname %}-Webclient, nicht für die {% data variables.product.prodname_vscode_shortname %}-Desktopanwendung oder andere unterstützte Editors.

{% endnote %}

## Festlegen der automatischen Dateiöffnung

{% data reusables.codespaces.edit-devcontainer-json %}
1. Bearbeite die `devcontainer.json`-Datei, und füge eine `customizations.codespaces.openFiles`-Eigenschaft hinzu. Die `customizations`-Eigenschaft befindet sich innerhalb des umschließenden JSON-Objekts am Anfang der Datei. Beispiel:

   ```json{:copy}
   "customizations": {
     "codespaces": {
       "openFiles": [
         "README.md",
         "scripts/tsconfig.json",
         "docs/main/CODING_STANDARDS.md"
       ]
     }
   }
   ```

   Der Wert der `openFiles`-Eigenschaft ist ein Array aus mindestens einer Datei in deinem Repository. Die Pfade sind relativ zum Stammverzeichnis des Repositorys (absolute Pfade werden nicht unterstützt). Die Dateien werden im Webclient in der angegebenen Reihenfolge geöffnet, wobei die erste Datei im Array im Editor angezeigt wird.
   
1. Speichere die Datei, und committe deine Änderungen in den gewünschten Branch des Repositorys.

## Weitere Informationsquellen

- [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)
