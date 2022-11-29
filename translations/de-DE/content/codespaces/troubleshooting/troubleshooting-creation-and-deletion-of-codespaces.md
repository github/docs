---
title: Problembehandlung beim Erstellen und Löschen von Codespaces
intro: 'In diesem Artikel findest du Schritte zur Behandlung gängiger Probleme, die beim Erstellen oder Löschen von Codespaces auftreten können, einschließlich Speicher- und Konfigurationsproblemen.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
ms.openlocfilehash: 4a12c848fa7400ec336f5ad086eb4d2858a431f0
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180819'
---
## Erstellen von Codespaces

### Kein Zugriff zum Erstellen eines Codespace
{% data variables.product.prodname_github_codespaces %} ist nicht für alle Repositorys verfügbar. Wenn die Optionen zum Erstellen eines Codespace nicht angezeigt werden, ist {% data variables.product.prodname_github_codespaces %} für dieses Repository eventuell nicht verfügbar. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#access-to-codespaces).

Vorausgesetzt, du hast noch verbleibende monatliche enthaltene Nutzung von {% data variables.product.prodname_github_codespaces %} in deinem persönlichen Konto oder eine Zahlungsmethode sowie ein Ausgabenlimit eingerichtet, kannst du Codespaces für öffentliche Repositorys erstellen. Du kannst jedoch nur dann einen Codespace für ein privates Repository erstellen, wenn du Änderungen an das Repository pushen oder das Repository forken kannst.

Weitere Informationen zur enthaltenen Nutzung bei persönlichen Konten und zum Festlegen eines Ausgabenlimits findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) und [Verwalten von Ausgabenlimits für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces).

### Codespace wird beim Erstellen nicht geöffnet.

Du erstellst einen Codespace, aber dieser wird nicht geöffnet:

1. Versuche, die Seite neu zu laden, falls ein Zwischenspeicherungs- oder Berichtsproblem aufgetreten ist.
2. Navigiere zur {% data variables.product.prodname_github_codespaces %}-Seite (https://github.com/codespaces ), und überprüfe, ob der neue Codespace hier aufgeführt ist. Der Prozess hat den Codespace vielleicht erfolgreich erstellt, hat dies jedoch nicht an deinen Browser gemeldet. Wenn der neue Codespace aufgelistet ist, kannst du ihn direkt über diese Seite öffnen.
3. Versuche erneut, den Codespace für das Repository zu erstellen, um einen vorübergehenden Kommunikationsfehler auszuschließen.

Wenn du immer noch keinen Codespace für ein Repository erstellen kannst, in dem {% data variables.product.prodname_github_codespaces %} verfügbar ist, {% data reusables.codespaces.contact-support %}.

### Fehler beim Erstellen des Codespace

Wenn beim Erstellen eines Codespace ein Fehler auftritt, ist dies wahrscheinlich auf ein temporäres Infrastrukturproblem in der Cloud zurückzuführen, z. B. auf ein Problem beim Bereitstellen eines virtuellen Computers für den Codespace. Ein weniger häufiger Grund für Fehler ist, wenn das Erstellen des Containers länger als eine Stunde dauert. In diesem Fall wird der Build abgebrochen, und für das Erstellen des Codespace wird ein Fehler ausgegeben.

{% note %}

**Hinweis:** Ein Codespace, der nicht erfolgreich erstellt wurde, kann nie verwendet werden und sollte gelöscht werden. Weitere Informationen findest du unter [Löschen eines Codespace](/codespaces/developing-in-codespaces/deleting-a-codespace).

{% endnote %}

Wenn du einen Codespace erstellst und dabei ein Fehler auftritt, führe Folgendes durch:

1. Überprüfe die [Statusseite](https://githubstatus.com) von {% data variables.product.prodname_dotcom %} auf aktive Incidents.
1. Wechsle zu [deiner {% data variables.product.prodname_github_codespaces %}-Seite](https://github.com/codespaces), lösche den Codespace, und erstelle einen neuen Codespace.
1. Wenn der Container erstellt wird, sieh dir die Protokolle an, die gestreamt werden, und stelle sicher, dass der Build nicht hängen geblieben ist. Ein Containerbuild, der länger als eine Stunde dauert, wird abgebrochen, was zu einem Fehler bei der Erstellung führt.

   Dieses Szenario tritt häufig auf, wenn ein Skript ausgeführt wird, das zur Benutzereingabe auffordert und auf eine Antwort wartet. Wenn dies der Fall ist, entferne die interaktive Eingabeaufforderung, damit der Build nicht-interaktiv abgeschlossen werden kann.

   {% note %}

   **Hinweis**: So zeigst du die Protokolle während eines Builds an:
   * Klicke im Browser auf **Protokolle anzeigen**. 

   ![Screenshot der Codespaces-Webbenutzeroberfläche mit hervorgehobenem Link „Protokolle anzeigen“](/assets/images/help/codespaces/web-ui-view-logs.png)

   * Klicke in der VS Code-Desktopanwendung unter „Remoteverbindung einrichten“ auf **Codespace erstellen**. 

   ![Screenshot von VS Code mit hervorgehobenem Link „Codespace erstellen“](/assets/images/help/codespaces/vs-code-building-codespace.png)

    {% endnote %}
2. Wenn das Erstellen eines Containers sehr lange dauert, solltest du Prebuilds verwenden, um das Erstellen von Codespaces zu beschleunigen. Weitere Informationen findest du unter [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds).

## Löschen von Codespaces

Ein Codespace kann nur wie folgt gelöscht werden:
* Durch den oder die Ersteller*in des Codespace
* Durch einen oder eine Organisationsbesitzer*in im Fall eines organisationseigenen Codespace
* Durch automatisches Löschen am Ende eines Aufbewahrungszeitraums 

Weitere Informationen findest du unter [Löschen eines Codespace](/codespaces/developing-in-codespaces/deleting-a-codespace) und [Konfigurieren des automatischen Löschens deiner Codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces).

## Containerspeicher

Beim Erstellen eines Codespace verfügt er über eine begrenzte Speichermenge, und im Laufe der Zeit ist es möglicherweise erforderlich, Speicherplatz freizugeben. Führe einen der folgenden Befehle im {% data variables.product.prodname_github_codespaces %}-Terminal aus, um Speicherplatz freizugeben.

- Entferne mithilfe von `sudo apt autoremove` Pakete, die nicht mehr verwendet werden.
- Bereinige den apt-Cache mithilfe von `sudo apt clean`.
- Zeige die zehn größten Dateien im Codespace mit `sudo find / -printf '%s %p\n'| sort -nr | head -10` an.
- Lösche nicht benötigte Dateien, z. B. Buildartefakte und Protokolle.

Einige destruktivere Optionen:

- Entferne nicht verwendete Docker-Images, Netzwerke und Container mithilfe von`docker system prune`. (Füge `-a` an, wenn du alle Images entfernen möchtest, und `--volumes`, wenn du alle Volumes entfernen möchtest.)
- Entferne nicht nachverfolgte Dateien aus der Arbeitsstruktur: `git clean -i`.

## Konfiguration

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```
Überprüfe die Erstellungsprotokolle, und aktualisiere nach Bedarf die Entwicklungscontainerkonfiguration. Weitere Informationen findest du unter „[{% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs)“.

Anschließend kannst du versuchen, den Codespace neu zu starten oder den Container neu zu erstellen. Weitere Informationen zum Neuerstellen des Containers findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace).
