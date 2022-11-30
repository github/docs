---
title: Erstellen deines ersten Repositorys mit GitHub Desktop
shortTitle: Creating your first repository
intro: 'Du kannst {% data variables.product.prodname_desktop %} verwenden, um ein Git-Repository ohne die Befehlszeile zu verwenden und zu verwalten.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
  - /desktop/installing-and-configuring-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: bdfaa5770faef23d8176b24753e23d6a3d5159a1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105259'
---
## Einführung
{% data variables.product.prodname_desktop %} erweitert und vereinfacht deinen {% data variables.product.prodname_dotcom_the_website %}-Workflow, wobei anstelle von Textbefehlen an der Befehlszeile eine grafische Benutzeroberfläche verwendet wird. Am Ende dieses Leitfadens hast du mithilfe von {% data variables.product.prodname_desktop %} ein Repository erstellt, Änderungen daran vorgenommen und die Änderungen auf {% data variables.product.product_name %} veröffentlicht.

Nachdem du {% data variables.product.prodname_desktop %} installiert hast und dich bei {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %} angemeldet hast, kannst du ein Tutorialrepository erstellen und klonen. Im Tutorial werden die Grundlagen der Arbeit mit Git und {% data variables.product.prodname_dotcom %} erläutert. Du erfährst, wie du einen Text-Editor installierst, einen Branch erstellst, Commits und Pushes auf {% data variables.product.prodname_dotcom_the_website %} durchführst und einen Pull Request öffnest. Das Tutorial ist verfügbar, wenn du noch nicht über Repositorys auf {% data variables.product.prodname_desktop %} verfügst.

Es wird empfohlen, das Tutorial abzuschließen. Wenn du {% data variables.product.prodname_desktop %} jedoch durch das Erstellen eines neuen Repositorys mithilfe von {% data variables.product.prodname_desktop %} erkunden möchtest, findest du in diesem Leitfaden Informationen zum Arbeiten an einem Git-Repository.

## Teil 1: Installieren von {% data variables.product.prodname_desktop %} und Authentifizieren deines Kontos
Du kannst {% data variables.product.prodname_desktop %} unter jedem unterstützten Betriebssystem installieren. Nachdem du die App installiert hast, musst du dich anmelden und dein Konto auf {% data variables.product.prodname_dotcom %} oder in {% data variables.product.prodname_enterprise %} authentifizieren, bevor du ein Tutorialrepository erstellen und klonen kannst.

Weitere Informationen zum Installieren und Authentifizieren findest du unter [Einrichten von {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop).

## Teil 2: Erstellen eines neuen Repositorys
Wenn du über keine Repositorys verfügst, die mit {% data variables.product.prodname_desktop %} verknüpft sind, wird die Ansicht „Los geht‘s!“ angezeigt. Dort kannst du auswählen, ob du ein Tutorialrepository erstellen und klonen, ein vorhandenes Repository aus dem Internet klonen, ein neues Repository erstellen oder ein vorhandenes Repository von deiner Festplatte hinzufügen möchtest.
  ![Bildschirm „Los geht‘s!](/assets/images/help/desktop/lets-get-started.png)

### Erstellen und Klonen eines Tutorialrepositorys
Es wird empfohlen, ein Tutorialrepository als erstes Projekt zu erstellen und zu klonen, um sich mit {% data variables.product.prodname_desktop %} vertraut zu machen.

1. Klicke auf **Tutorialrepository erstellen und klonen**.
  ![Schaltfläche zum Erstellen und Klonen eines Tutorialrepositorys](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. Befolge die Anweisungen im Tutorial, um einen Text-Editor zu installieren, einen Branch zu erstellen, eine Datei zu bearbeiten, Commits durchzuführen, Dateien auf {% data variables.product.prodname_dotcom %} zu veröffentlichen und einen Pull Request zu öffnen.

### Ein neues Repository erstellen
Wenn du kein Tutorialrepository erstellen und klonen möchtest, kannst du ein neues Repository erstellen.

1. Klicke auf **Neues Repository auf deiner Festplatte erstellen...**. ![Neues Repository erstellen](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. Fülle die Felder aus, und wähle deine bevorzugten Optionen aus.
  ![Optionen zum Erstellen eines Repositorys](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - „Name“ definiert den Namen deines Repositorys sowohl lokal und als auch auf {% data variables.product.product_name %}.
   - „Description“ (Beschreibung) ist ein optionales Feld, das du verwenden kannst, um weitere Informationen zum Zweck deines Repositorys anzugeben.
   - „Local path“ (Lokaler Pfad) legt den Speicherort deines Repositorys auf deinem Computer fest. {% data variables.product.prodname_desktop %} erstellt standardmäßig einen _GitHub_-Ordner in deinem _Dokumente_-Ordner, um deine Repositorys zu speichern. Du kannst jedoch einen beliebigen anderen Speicherort auf deinem Computer auswählen. Dein neues Repository ist ein Ordner am ausgewählten Speicherort. Wenn du dein Repository beispielsweise `Tutorial` nennst, wird in dem für deinen lokalen Pfad ausgewählten Ordner ein Ordner namens _Tutorial_ erstellt. {% data variables.product.prodname_desktop %} speichert deinen ausgewählten Speicherort für das nächste Mal, wenn du ein neues Repository erstellst oder klonst.
   - Mit **Dieses Repository mit einer README-Datei initialisieren** wird ein anfänglicher Commit mit einer _README.md_-Datei erstellt. Anhand von Infodateien kann der Zweck deines Projekts nachvollzogen werden. Daher sollten diese Option ausgewählt und nützliche Informationen in die Datei eingetragen werden. Wenn dein Repository auf {% data variables.product.product_name %} aufgerufen wird, wird zunächst die Infodatei angezeigt, mit der sich der*die Besucher*in mit deinem Projekt vertraut machen kann. Weitere Informationen findest du unter [Informationen zu README-Dateien](/articles/about-readmes).
   - Mithilfe des Dropdownmenüs **Git ignorieren** kannst du eine benutzerdefinierte Datei hinzufügen, um bestimmte Dateien in deinem lokalen Repository zu ignorieren, die nicht in der Versionskontrolle gespeichert werden sollen. Wenn du eine bestimmte Sprache oder ein bestimmtes Framework verwendest, kannst du aus der verfügbaren Liste eine entsprechende Option auswählen. Für den Anfang kannst du diese Auswahl überspringen. Weitere Informationen findest du unter [Ignorieren von Dateien](/github/getting-started-with-github/ignoring-files).
   - Über das Dropdownmenü **Lizenz** kannst du einer _LICENSE_-Datei in deinem Repository eine Open-Source-Lizenz hinzufügen. Du musst dir keine Sorgen machen, dass du sofort eine Lizenz hinzufügen kannst. Weitere Informationen zu verfügbaren Open-Source-Lizenzen und dazu, wie du diese zu deinem Repository hinzufügst, findest du unter [Lizenzieren eines Repositorys](/articles/licensing-a-repository).
3. Klicke auf **Repository erstellen**.

## Teil 3: Erkunden von {% data variables.product.prodname_desktop %}
Im Dateimenü oben auf dem Bildschirm kannst du auf Einstellungen und Aktionen zugreifen, die du in {% data variables.product.prodname_desktop %} ausführen kannst. Die meisten Aktionen besitzen auch Tastenkürzel, die Ihnen bei der effizienteren Arbeit helfen. Eine vollständige Liste der Tastenkombinationen findest du unter [Tastenkombinationen](/desktop/getting-started-with-github-desktop/keyboard-shortcuts).

### {% data variables.product.prodname_desktop %}-Menüleiste
Oben in der {% data variables.product.prodname_desktop %}-App wird eine Leiste angezeigt, die den aktuellen Status deines Repositorys angibt.
  - **Aktuelles Repository** zeigt den Namen des Repositorys an, an dem du arbeitest. Du kannst auf **Aktuelles Repository** klicken, um zu einem anderen Repository in {% data variables.product.prodname_desktop %} zu wechseln.
  - **Aktueller Branch** zeigt den Namen des Branchs an, an dem du arbeitest. Du kannst auf **Aktueller Branch** klicken, um alle Branches in deinem Repository anzuzeigen, zu einem anderen Branch zu wechseln oder einen neuen Branch zu erstellen. Sobald du Pull Requests in deinem Repository erstellt hast, kannst du diese ebenfalls durch Klicken auf **Aktueller Branch** anzeigen.
  - **Repository veröffentlichen** wird angezeigt, da du dein Repository noch nicht auf {% data variables.product.product_name %} veröffentlicht hast, was du im nächsten Schritt erledigst. Dieser Abschnitt der Leiste ändert sich basierend auf dem Status deines aktuellen Branchs und Repositorys. Es sind verschiedene kontextabhängige Aktionen verfügbar, mit denen du Daten zwischen deinen lokalen Repositorys und Remoterepositorys austauschen kannst.

  ![GitHub Desktop erkunden](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

### Änderungen und Verlauf
Auf der linken Seitenleiste werden die Ansichten **Änderungen** und **Verlauf** angezeigt.
  ![Registerkarten „Änderungen“ und „Verlauf“](/assets/images/help/desktop/changes-and-history.png)

  - In der Ansicht **Änderungen** werden Änderungen angezeigt, die du an Dateien in deinem aktuellen Branch vorgenommen, aber nicht an dein lokales Repository committet hast. Unten wird ein Feld mit den Textfeldern „Zusammenfassung“ und „Beschreibung“ sowie die Schaltfläche **An BRANCH committen** angezeigt. Hier committest du die neuen Änderungen. Die Schaltfläche **An BRANCH committen** ist dynamisch und zeigt an, an welchen Branch du deine Änderungen committest.
  ![Commitbereich](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - Die Ansicht **Verlauf** zeigt die vorherigen Commits für den aktuellen Branch deines Repositorys an. Nach der Erstellung deines Repositorys sollte ein „Initial commit“ (Anfänglicher Commit) angezeigt werden, der von {% data variables.product.prodname_desktop %} erstellt wurde. Rechts neben dem Commit werden abhängig von den beim Erstellen deines Repositorys ausgewählten Optionen möglicherweise _.gitattributes_-, _.gitignore_-, _LICENSE_- oder _Infodateien_ angezeigt. Du kannst auf jede Datei klicken, um ein Diff-Element für die jeweilige Datei anzuzeigen. Hierbei handelt es sich um die Änderungen, die in diesem Commit an der Datei vorgenommen wurden. Der Diff-Wert zeigt nur die Teile der Datei, die sich geändert haben, und nicht den gesamten Dateiinhalt.
  ![Verlaufsansicht](/assets/images/help/desktop/getting-started-guide/history-view.png)

## Teil 4: Veröffentlichen deines Repositorys auf {% data variables.product.product_name %}
Wenn du ein neues Repository erstellst, ist es nur auf deinem Computer vorhanden, und du bist die einzige Person mit Zugriff darauf. Du kannst dein Repository auf {% data variables.product.product_name %} veröffentlichen, damit es computerübergreifend synchronisiert bleibt und andere Personen darauf zugreifen können. Pushe lokale Änderungen an {% data variables.product.product_name %}, um dein Repository zu veröffentlichen.

1. Klicke auf der Menüleiste auf **Repository veröffentlichen**.
    ![Repository veröffentlichen](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %} füllt die Felder „Name“ und „Beschreibung“ automatisch mit den beim Erstellen des Repositorys eingegebenen Informationen aus.
    - Mit der Option **Diesen Code privat halten** kannst du steuern, wer dein Projekt anzeigen kann. Wenn du diese Option nicht auswählst, können andere Benutzer*innen auf {% data variables.product.product_name %} deinen Code anzeigen. Wenn du diese Option aktivierst, ist dein Code nicht öffentlich verfügbar.
    - Über das Dropdownmenü **Organisation** kannst du, falls vorhanden, dein Repository für eine bestimmte Organisation veröffentlichen, zu der du auf {% data variables.product.product_name %} gehörst.

    ![Schritte zum Veröffentlichen des Repositorys](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. Klicke auf die Schaltfläche **Repository veröffentlichen**.
  3. In {% data variables.product.prodname_desktop %} kannst du auf das Repository auf {% data variables.product.prodname_dotcom_the_website %} zugreifen. Klicke im Dateimenü auf **Repository** und dann auf **Auf GitHub anzeigen**. Dadurch gelangst du in deinem Standardbrowser direkt zum Repository.

## Teil 5: Vornehmen von Änderungen sowie Committen und Pushen von Änderungen
Nachdem du nun dein Repository erstellt und veröffentlicht hast, kannst du Änderungen an deinem Projekt vornehmen und mit der Durchführung deines ersten Commits an dein Repository beginnen.

1. Wenn du deinen externen Editor innerhalb von {% data variables.product.prodname_desktop %} starten möchtest, klicke auf **Repository** und dann auf **In <em>EDITOR</em> öffnen**. Weitere Informationen findest du unter [Konfigurieren eines Standard-Editors](/desktop/getting-started-with-github-desktop/configuring-a-default-editor).
  ![Öffnen im Editor](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Nimm einige Änderungen an der zuvor erstellten _README.md_-Datei vor. Du kannst Informationen hinzufügen, die dein Projekt beschreiben (z. B. Funktionsweise und warum es nützlich ist). Wenn du mit deinen Änderungen zufrieden bist, speichere sie in deinem Text-Editor.
3. Navigiere in {% data variables.product.prodname_desktop %} zur Ansicht **Änderungen**. In der Dateiliste sollte deine _README.md_-Infodatei angezeigt werden. Das Häkchen links neben der _README.md_-Datei gibt an, dass deine Änderungen an der Datei Teil des Commits sind, den du durchführst. Künftig möchtest du möglicherweise an mehreren Dateien Änderungen vornehmen, gleichzeitig aber nur die Änderungen committen, die du an einigen der Dateien vorgenommen hast. Wenn du auf das Häkchen neben einer Datei klickst, wird diese Datei beim Commit nicht berücksichtigt.
  ![Anzeigen von Änderungen](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. Gib unten in der Liste **Änderungen** eine Commitnachricht ein. Gib rechts neben deinem Profilbild eine kurze Beschreibung zum Commit ein. Da du die _README.md_-Datei änderst, wäre „Hinzufügen von Informationen zum Projektzweck“ eine gute Commitzusammenfassung. Unterhalb der Zusammenfassung wird das Textfeld „Beschreibung“ angezeigt, in dem du eine längere Beschreibung der im Commit vorgenommenen Änderungen eingeben kannst. Dies ist hilfreich, wenn du dir den Projektverlauf ansehen und nachvollziehen möchtest, weshalb die Änderungen vorgenommen wurden. Da du eine grundlegende Aktualisierung der _README.md_-Datei vornimmst, kannst du die Beschreibung überspringen.
  ![Commitnachricht](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. Klicke auf **An BRANCHNAME committen**. Die Commitschaltfläche zeigt deinen aktuellen Branch an, sodass du sicher sein kannst, dass an den gewünschten Branch committet wird.
  ![Commit an Branch](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. Klicke auf **An origin pushen**, um deine Änderungen an das Remoterepository auf {% data variables.product.product_name %} zu pushen.
  ![An origin pushen](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - Die Schaltfläche **An origin pushen** ist dieselbe, auf die du zum Veröffentlichen deines Repositorys auf {% data variables.product.product_name %} geklickt hast. Diese Schaltfläche ändert sich kontextabhängig, je nachdem, in welcher Phase du dich im Git-Workflow befindest. Nun sollte `Push origin` mit einer `1` daneben angezeigt werden. Dies gibt an, dass ein Commit vorhanden ist, der nicht an {% data variables.product.product_name %} gepusht wurde.
  - Das „origin“ in **An origin pushen** bedeutet, dass du Änderungen an das Remoterepository namens `origin` pushst, was in diesem Fall das Repository deines Projekts auf {% data variables.product.prodname_dotcom_the_website %} ist. Bis du neue Commits per Push-Vorgang an {% data variables.product.product_name %} überträgst, gibt es Unterschiede zwischen dem Repository deines Projekts auf deinem Computer und dem Repository deines Projekts auf {% data variables.product.prodname_dotcom_the_website %}. Dadurch kannst du lokal arbeiten und deine Änderungen nur dann an {% data variables.product.prodname_dotcom_the_website %} pushen, wenn du dazu bereit bist.
7. Im Fenster rechts neben der Ansicht **Änderungen** werden Vorschläge für Aktionen angezeigt, die du als Nächstes ausführen kannst. Klicke auf **Auf {% data variables.product.product_name %} anzeigen**, um das Repository auf {% data variables.product.product_name %} in deinem Browser anzuzeigen.
  ![Verfügbare Aktionen](/assets/images/help/desktop/available-actions.png)
8. Klicke in deinem Browser auf **2 Commits**. Es wird eine Liste der Commits in diesem Repository auf {% data variables.product.product_name %} angezeigt. Der erste Commit sollte der Commit sein, den du gerade in {% data variables.product.prodname_desktop %} durchgeführt hast.
  ![Klicken auf „2 Commits“](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

## Schlussbemerkung
Du hast nun ein Repository erstellt, es auf {% data variables.product.product_name %} veröffentlicht, einen Commit durchgeführt und deine Änderungen an {% data variables.product.product_name %} gepusht. Du kannst denselben Workflow befolgen, wenn du zu anderen Projekten beiträgst, die du selbst erstellst oder an denen du mitwirkst.

## Weiterführende Themen
- [Erste Schritte mit Git](/github/getting-started-with-github/getting-started-with-git)
- [Informationen zu {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)
- [Erste Schritte mit {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)
