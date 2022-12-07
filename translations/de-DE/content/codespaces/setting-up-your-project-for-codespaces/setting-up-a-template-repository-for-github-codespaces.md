---
title: Einrichten eines Vorlagenrepositorys für GitHub Codespaces
shortTitle: Set up a template repo
intro: 'Du kannst Personen bei den ersten Schritten mit einem Projekt helfen, indem du ein Vorlagenrepository für die Verwendung mit {% data variables.product.prodname_github_codespaces %} einrichtest.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 155aa9bf839301439d2746b4b6f0f0575d2e60ff
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159597'
---
## Einführung

Indem du ein Vorlagenrepository einrichtest, kannst du Personen bei den ersten Schritten mit deinem Framework, deiner Bibliothek oder einem anderen Projekt in {% data variables.product.prodname_github_codespaces %} helfen. Benutzer können deine Vorlagendateien sofort in einer cloudbasierten Entwicklungsumgebung verwenden, ohne sich Gedanken über das Klonen deines Repositorys oder die Installation von Tools oder anderen Abhängigkeiten machen zu müssen. Mit einigen Konfigurationsschritten kannst du Benutzer in einem Codespace einrichten, in dem wichtige Dateien bereits für die Bearbeitung geöffnet sind und in dem bereits eine Anwendung auf einer Vorschaubrowserregisterkarte im {% data variables.product.prodname_vscode_shortname %}-Web-Editor ausgeführt wird.

Jeder Benutzer mit Lesezugriff auf dein Vorlagenrepository kann auf der Seite des Repositorys in {% data variables.product.product_name %} einen Codespace erstellen. Du kannst jedes vorhandene Repository in eine Vorlage umwandeln, und du musst keine Einstellungen ändern, damit Benutzer einen Codespace aus deinem Vorlagenrepository erstellen können. Weitere Informationen zum Umwandeln eines Repositorys in eine Vorlage findest du unter [Erstellen eines Vorlagenrepositorys](/repositories/creating-and-managing-repositories/creating-a-template-repository).

Du kannst einen Link im Format `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` bereitstellen, um Benutzer direkt zur Seite „Erstellen eines neuen Codespace“ für deine Vorlage weiterzuleiten.

![Screenshot: Seite „Erstellen eines neuen Codespace“](/assets/images/help/codespaces/create-a-new-codespace-page.png)

Beispielsweise kannst du diesen Link in einem Tutorial für die ersten Schritte mit deinem Framework bereitstellen. Ersetze `OWNER/TEMPLATE-REPO` in deinem Link durch den Namen des Vorlagenrepositorys, z. B. `monalisa/octo-template`.

Wenn ein Benutzer einen Codespace aus deiner Vorlage erstellt, wird der Inhalt deines Vorlagenrepositorys in seinem Codespace geklont. Wenn der Benutzer bereit ist, kann er seine Arbeit in einem neuen Repository in {% data variables.product.product_name %} veröffentlichen, das zu seinem persönlichen Konto gehört. Alle Nutzungsgebühren für den Codespace werden dem Benutzer in Rechnung gestellt, der ihn erstellt hat. Weitere Informationen findest du unter [Erstellen eines Codespace aus einer Vorlage](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template).

## Beschreiben deiner Vorlage

Wenn du keine Infodatei für dein Vorlagenrepository besitzt, erstelle eine, um den Zweck deiner Vorlage und die ersten Schritte damit zu beschreiben. Weitere Informationen findest du unter [Informationen zu README-Dateien](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).

Eine kurze Beschreibung deiner Vorlage wird auf der Seite „Erstellen eines neuen Codespace“ angezeigt, zu der Benutzer gelangen, wenn sie dem Link `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` folgen. Diese Beschreibung stammt aus dem Feld **Beschreibung**, das du beim Erstellen eines Repositorys festlegen kannst. Du kannst diese Beschreibung jederzeit bearbeiten, indem du zur Seite des Repositorys navigierst und rechts auf der Seite neben dem Abschnitt **Info** auf **{% octicon "gear" aria-label="The Settings gear" %}** klickst.

![Screenshot: Abschnitts „Info“ auf einer Repositoryseite](/assets/images/help/repository/repository-settings-icon.png)

## Hinzufügen von Startdateien

Vorlagenrepositorys enthalten in der Regel Startdateien mit Codebausteinen, sodass Benutzer schnell mit einer Bibliothek, einem Framework oder einer anderen Technologie beginnen können.

Eine Anleitung zu den zu integrierenden Dateitypen findest du in den Startdateien, die in den offiziellen {% data variables.product.company_short %}-Vorlagen für {% data variables.product.prodname_github_codespaces %} enthalten sind:

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. Um das Vorlagenrepository anzuzeigen, das die Dateien für die Vorlage enthält, klicke auf den Namen der Vorlage.

   ![Screenshot: Abschnitt „Schnellstartvorlagen durchsuchen“,in dem „React“ hervorgehoben ist](/assets/images/help/codespaces/react-template-name.png)

## Konfigurieren des Containerimages

Du kannst deinem Vorlagenrepository Konfigurationsdateien für Entwicklungscontainer hinzufügen, um die Entwicklungsumgebung für Personen, die deine Vorlage verwenden, mit {% data variables.product.prodname_github_codespaces %} anzupassen. Du kannst aus einer Liste vordefinierter Konfigurationseinstellungen in {% data variables.product.prodname_vscode %} wählen oder eine benutzerdefinierte Konfiguration erstellen, indem du eine eigene Datei vom Typ `devcontainer.json` schreibst. Wenn du keine Konfigurationsdateien hinzufügst, wird das Standardcontainerimage verwendet. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) und [Hinzufügen einer Entwicklungscontainerkonfiguration zu deinem Repository](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces).

{% note %}

**Hinweis:** {% data reusables.codespaces.configuration-choice-templates %}

{% endnote %}

Du solltest deinen Entwicklungscontainer mit den Tools und Anpassungen konfigurieren, um Benutzern eine optimale Nutzung deiner Vorlage zu ermöglichen. Gehe in deiner Datei `devcontainer.json` beispielsweise wie folgt vor: 
- Du kannst die `openFiles`-Eigenschaft verwenden, um eine Liste von Dateien zu definieren, die automatisch im {% data variables.product.prodname_vscode_shortname %}-Webclient geöffnet werden sollen, wenn ein Codespace aus deiner Vorlage erstellt wird.
- Wenn deine Vorlage Dateien für eine Webanwendung enthält, kannst du die Anwendung automatisch im Codespace des Benutzers ausführen lassen. Dazu kannst du mithilfe der `postAttachCommand`-Eigenschaft ein Skript ausführen, das die Anwendung auf einem lokalen Server startet, sobald der {% data variables.product.prodname_vscode_shortname %}-Webclient eine Verbindung mit dem Codespace herstellt. Lege außerdem die `onAutoForward`-Eigenschaft eines Ports auf `openPreview` fest, um die Anwendung, die an diesem Port ausgeführt wird, in einem einfachen Browser anzuzeigen, der in den {% data variables.product.prodname_vscode_shortname %}-Webclient eingebettet ist.

Die folgenden Konfigurationseinstellungen für eine React-Vorlage öffnen die Datei `app.js` im Editor des Benutzers, führen `npm start` (in einer `package.json`-Datei definiert) aus, um einen lokalen Server zu starten, und leiten den Port `3000` an eine Vorschaubrowserregisterkarte im Codespace weiter.

```JSON
{
    "postAttachCommand": {
      "server": "npm start",
    },

    "portsAttributes": {
      "3000": {
        "label": "Application",
        "onAutoForward": "openPreview"
      }
    },

    "customizations": {
      "codespaces": {
        "openFiles": ["src/App.js"]
      }
    }
}
```
Weitere Informationen findest du unter [Automatisches Öffnen von Dateien in den Codespaces für ein Repository](/codespaces/setting-up-your-project-for-codespaces/automatically-opening-files-in-the-codespaces-for-a-repository) und [Entwicklungscontainerspezifikation](https://containers.dev/implementors/json_reference/#general-properties) auf containers.dev.
