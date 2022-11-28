---
title: Festlegen einer Mindestspezifikation für Codespacecomputer
shortTitle: Set a minimum machine spec
intro: 'Du kannst vermeiden, dass für {% data variables.product.prodname_github_codespaces %} für dein Repository Computertypen mit zu geringen Ressourcen verwendet werden.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: b7eeaac84721ff1d9ceab663957b1615952b0623
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159165'
---
## Übersicht

Jeder von dir erstellte Codespace wird auf einem separaten virtuellen Computer gehostet. Wenn du einen Codespace auf der Grundlage eines Repositorys erstellst, kannst du in der Regel zwischen verschiedenen Arten von virtuellen Computern wählen. Jeder Computertyp besitzt verschiedene Ressourcen (Prozessorkerne, Arbeitsspeicher, Speicher), und standardmäßig wird der Computertyp mit den wenigsten Ressourcen verwendet. Weitere Informationen zu Computertypen findest du unter [Ändern des Computertyps für deinen Codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types).

Wenn für dein Projekt eine bestimmte Computeleistung benötigt wird, kannst du {% data variables.product.prodname_github_codespaces %} so konfigurieren, dass standardmäßig nur Computertypen verwendet oder von den Benutzern ausgewählt werden können, die diese Anforderungen erfüllen. Du konfigurierst dies in einer `devcontainer.json`-Datei.

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %}

{% note %}

**Wichtig**: Der Zugriff auf einige Computertypen kann auf Organisationsebene eingeschränkt sein. So soll in der Regel vermieden werden, dass Benutzer Computer mit einer größeren Kapazität wählen, die zu einem höheren Preis abgerechnet werden. Wenn dein Repository einer organisationsweiten Richtlinie für Computertypen unterliegt, musst du sicherstellen, dass die Mindestanforderungen nicht so hoch festgelegt werden, dass keine Computertypen mehr zur Auswahl stehen. Weitere Informationen findest du unter [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

{% endnote %}

## Festlegen einer Mindestspezifikation für Computer

{% data reusables.codespaces.edit-devcontainer-json %}
1. Bearbeite die Datei `devcontainer.json`, und füge die Eigenschaft `hostRequirements` innerhalb des umschließenden JSON-Objekts am Anfang der Datei hinzu. Beispiel:

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   Du kannst eine oder alle der folgenden Optionen angeben: `cpus`, `memory` und `storage`.
   
   Um die Spezifikationen der {% data variables.product.prodname_github_codespaces %}-Computertypen zu überprüfen, die derzeit für dein Repository zur Verfügung stehen, durchlaufe den Prozess zum Erstellen eines Codespaces, bis du zur Auswahl der Computertypen gelangst. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).
   
1. Speichere die Datei, und committe deine Änderungen in den gewünschten Branch des Repositorys.

   Wenn du jetzt einen Codespace für diesen Branch des Repositorys erstellst und zu den Konfigurationsoptionen für die Erstellung wechselst, kannst du nur Computertypen auswählen, die den von dir angegebenen Ressourcen entsprechen oder diese überschreiten.

   ![Dialogfeld mit eingeschränkter Auswahl an Computertypen](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Weiterführende Themen

- [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)
