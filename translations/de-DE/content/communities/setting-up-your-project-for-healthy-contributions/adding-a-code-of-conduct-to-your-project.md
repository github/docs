---
title: Einen Verhaltenskodex zu Deinem Projekt hinzufügen
intro: 'Mit einem Verhaltenskodex kannst du Standards für die Community festlegen, ein einladendes und integratives Projekt signalisieren, und die Verfahren für den Umgang mit Missbrauch aufzeigen.'
redirect_from:
  - /articles/adding-a-code-of-conduct-to-your-project
  - /github/building-a-strong-community/adding-a-code-of-conduct-to-your-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a code of conduct
ms.openlocfilehash: dcf1e589ae4f803017752f9e919aad304c570fbc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090216'
---
*Verhaltensregeln* legen die Standards für die Interaktion in einer Community fest. Er signalisiert, dass in dieser integrativen Umgebung alle Beiträge respektiert werden. Außerdem beschreibt er Verfahren für die Problembehandlung bei Schwierigkeiten zwischen Mitgliedern Deiner Projekt-Community. Weitere Informationen dazu, warum Verhaltensregeln Standards und Erwartungen für die Interaktion in einer Community festlegen, findest du im [Open-Source-Leitfaden](https://opensource.guide/code-of-conduct/).

Bevor Du einen Verhaltenskodex für Dein Projekt einsetzt, solltest Du Folgendes tun:

* Untersuche verschiedene Verhaltenskodizes, die für Open-Source-Projekte erstellt wurden. Wähle einen Kodex aus, der den Standards Deiner Community entspricht.
* Überlege Dir eingehend, ob Du diesen Kodex durchsetzen willst und kannst.

Du kannst deinem Projekt benutzerdefinierte Verhaltensregeln hinzufügen, die du mithilfe einer Vorlage oder manuell erstellst. Deine Verhaltensregeln sind in beiden Fällen verfügbar, aber der Eintrag „Verhaltensregeln“ wird im Communityprofil deines Repositorys nur dann als abgeschlossen gekennzeichnet, wenn du eine Vorlage verwendest. Wenn du Verhaltensregeln verwendest, die von einer anderen Person oder Organisation geschrieben wurden, musst du alle Zuordnungsrichtlinien aus der Quelle befolgen. Weitere Informationen zu Communityprofilen findest du unter [Informationen zu Communityprofilen für öffentliche Repositorys](//communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories).

Du kannst Standardverhaltensregeln für deine Organisation oder dein persönliches Konto erstellen. Weitere Informationen findest du unter [Erstellen einer Standard-Communityintegritätsdatei](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

## Einen Verhaltenskodex über eine Vorlage hinzufügen

{% data variables.product.product_name %} bietet Vorlagen für gängige Verhaltenskodizes. So kannst du rasch einen Verhaltenskodex zu deinem Projekt hinzufügen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Gib im Feld für den Dateinamen *CODE_OF_CONDUCT.md* ein.
4. Klicke auf **Vorlage für Verhaltensregeln auswählen**.
  ![Schaltfläche zum Auswählen einer Vorlage für Verhaltensregeln](/assets/images/help/repository/code-of-conduct-tool.png)
5. Wähle auf der linken Seite einen Verhaltenskodex aus, um eine Vorschau anzuzeigen und den Kodex zu Deinem Projekt hinzuzufügen.
  ![Auswahl einer Vorlage für Verhaltensregeln](/assets/images/help/repository/code-of-conduct-tool-picker.png)
6. Fülle die Felder auf der rechten Seite aus, um die richtigen Informationen in den ausgewählten Verhaltenskodex einzufügen.
7. Klicke auf **Überprüfen und einreichen**.
  ![Verhaltensregeln überprüfen und an das Projekt übermitteln](/assets/images/help/repository/code-of-conduct-tool-review.png)
8. Überprüfe den Inhalt des Verhaltenskodex, der sich im Textbereich befindet.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Einen Verhaltenskodex manuell hinzufügen

Wenn die Verhaltensregeln, die du verwenden möchtest, in den bereitgestellten Vorlagen nicht verfügbar sind, kannst du Verhaltensregeln manuell hinzufügen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Gib im Feld für den Dateinamen den Namen und die Erweiterung für die Datei ein.
  ![Neuer Dateiname für Verhaltensregeln](/assets/images/help/repository/new-code-of-conduct-file-name.png)
    - Um die Verhaltensregeln im Stammverzeichnis des Repositorys sichtbar zu machen, gib *CODE_OF_CONDUCT* im Feld für den Dateinamen ein.
    - Um die Verhaltensregeln im Verzeichnis `docs` des Repositorys sichtbar zu machen, gib *docs/CODE_OF_CONDUCT* ein.
    - Um die Verhaltensregeln im Verzeichnis `.github` des Repositorys sichtbar zu machen, gib *.github/CODE_OF_CONDUCT* ein.
4. Füge der neuen Datei deine benutzerdefinierten Verhaltensregeln hinzu.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
