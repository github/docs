---
title: Erstellen Ihres ersten Repositorys mit GitHub Desktop.
intro: 'Sie können {% data variables.product.prodname_desktop %} verwenden, um schnell mit einem Git-Repository zu arbeiten, ohne die Befehlszeile verwenden zu müssen.'
versions:
  free-pro-team: '*'
---

### Einführung

Diese Anleitung führt Sie durch den Prozess der Verwendung von {% data variables.product.prodname_desktop %} für die Arbeit an einem Git-Repository. {% data variables.product.prodname_desktop %} erweitert und vereinfacht Ihren {% data variables.product.prodname_dotcom_the_website %}-Workflow, wobei anstelle von Textbefehlen an der Befehlszeile eine visuelle Oberfläche verwendet wird. Am Ende dieser Anleitung haben Sie {% data variables.product.prodname_desktop %} verwendet, um ein Repository zu erstellen, Änderungen am Repository vorgenommen und die Änderungen an {% data variables.product.prodname_dotcom_the_website %} oder {% data variables.product.prodname_ghe_server %} veröffentlicht.

Nachdem Sie {% data variables.product.prodname_desktop %} heruntergeladen und sich bei {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %} angemeldet haben, können Sie ein Tutorial-Repository erstellen und klonen. Das Tutorial erläutert die Grundlagen der Arbeit mit Git und {% data variables.product.prodname_dotcom %}. Abgedeckt werden dabei auch die Installation eines Editorrs, das Erstellen eines Branches, Commits, das Pushen zu {% data variables.product.prodname_dotcom_the_website %} und das Erstellen eines Pull Requests. Das Tutorial ist so lange verfügbar, wie Sie noch keine Repositorys auf {% data variables.product.prodname_desktop %} besitzen.

### Schritt 1. {% data variables.product.prodname_desktop %}-Installation und -Anmeldung

1. Laden Sie {% data variables.product.prodname_desktop %} von {% data variables.product.desktop_link %} herunter. {% data variables.product.prodname_desktop %} unterstützt aktuelle Versionen von Windows und macOS. Spezifische Installationsanweisungen für Ihr Betriebssystem finden Sie unter „[{% data variables.product.prodname_desktop %} installieren](/desktop/getting-started-with-github-desktop/installing-github-desktop)“.

2. Starten Sie {% data variables.product.prodname_desktop %}, und folgen Sie dem Flow mit der anfänglichen Begrüßung, um sich bei Ihrem {% data variables.product.product_name %}-Konto anzumelden. Der Schritt „Configure Git“ (Git konfigurieren) wird angezeigt, wo Sie Ihren Namen und Ihre E-Mail-Adresse festlegen können. Um sicherzustellen, dass Ihre Commits Ihrem {% data variables.product.product_name %}-Konto richtig zugeordnet sind, verwenden Sie die Ihrem {% data variables.product.product_name %}-Konto zugeordnete E-Mail-Adresse. Weitere Informationen zur Commit-Zuordnung finden Sie unter „[Commit-E-Mail-Adresse festlegen](/articles/setting-your-commit-email-address)“.

### Schritt 2. Neues Repository erstellen

Es wird die Ansicht „Let's get started!“ (Los geht's!) angezeigt. Hier können Sie ein Tutorial-Repository erstellen und klonen, ein vorhandenes Repository klonen, ein neues Repository erstellen oder ein vorhandenes Repository hinzufügen.

#### Ein Tutorial-Repository erstellen und klonen

1. Klicken Sie auf **Create a tutorial repository and clone it** (Tutorial-Repository erstellen und klonen). ![Schaltfläche zum Erstellen und Klonen eines Tutorial-Repositorys](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. Folgen Sie den Anweisungen im Tutorial.

#### Neues Repository erstellen

1. Klicken Sie auf **Create a New Repository on your Hard Drive...** (Neues Repository auf Ihrer Festplatte erstellen). ![Neues Repository erstellen](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. Um ein neues Repository zu erstellen, füllst Du folgende Felder aus: ![Optionen zum Erstellen eines Repositorys](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - „Name“ definiert den Namen Ihres Repositorys, und zwar lokal und auf {% data variables.product.product_name %}.
   - „Description“ (Beschreibung) ist ein optionales Feld, das Sie verwenden können, um weitere Informationen zum Zweck Ihres Repositorys anzugeben.
   - „Local path“ (Lokaler Pfad) legt den Speicherort Ihres Repositorys auf Ihrem Computer fest. Standardmäßig erstellt {% data variables.product.prodname_desktop %} einen _GitHub_-Ordner im Ordner _Documents_ (Dokumente), um Ihre Repositorys zu speichern. Sie können aber auch einen anderen Speicherort auf Ihrem Computer auswählen. Ihr neues Repository ist ein Ordner am ausgewählten Speicherort. Wenn Sie Ihr Repository beispielsweise `Tutorial` nennen, wird ein Ordner namens _Tutorial_ im Ordner erstellt, den Sie als Ihren lokalen Pfad ausgewählt haben. {% data variables.product.prodname_desktop %} speichert Ihren ausgewählten Speicherort für das nächste Mal, wenn Sie ein neues Repository erstellen oder klonen.
   - Durch Auswahl von **Initialize this repository with a README** (Dieses Repository mit einer README-Datei initialisieren) wird ein anfänglicher Commit mit einer _README.md_-Datei erstellt. Anhand von README-Dateien kann der Zweck Ihres Projekts nachvollzogen werden. Daher sollte diese Option ausgewählt werden und nützliche Informationen in die Datei eingetragen werden. Wenn Ihr Repository auf {% data variables.product.product_name %} aufgerufen wird, wird zunächst die README-Datei angezeigt, in der sich der Besucher mit Ihrem Projekt vertraut machen kann. Weitere Informationen finden Sie unter „[Informationen zu README-Dateien](/articles/about-readmes/)“.
   - Mithilfe des Dropdownmenüs **Git ignore** (Git ignorieren) können Sie eine benutzerdefinierte Datei hinzufügen, um bestimmte Dateien in Ihrem lokalen Repository zu ignorieren, die nicht in der Versionskontrolle gespeichert werden sollen. Wenn Sie eine bestimmte Sprache oder ein bestimmtes Framework verwenden, können Sie aus der verfügbaren Liste eine entsprechende Option auswählen. Für den Anfang können Sie diese Auswahl überspringen. Weitere Informationen finden Sie unter „[Dateien ignorieren](/articles/ignoring-files)“.
   - Mithilfe des Dropdownmenüs **License** (Lizenz) können Sie einer _LICENSE_-Datei in Ihrem Repository eine Open-Source-Lizenz hinzufügen. Sie müssen sich keine Sorgen machen, dass Sie sofort eine Lizenz hinzufügen können. Weitere Informationen zu verfügbaren Open-Source-Lizenzen und wie Sie diese zu Ihrem Repository hinzufügen können finden Sie unter „[Ein Repository lizenzieren](/articles/licensing-a-repository)“.
3. Klicken Sie auf **Create repository** (Repository erstellen).

### Schritt 3. {% data variables.product.prodname_desktop %} erkunden

Nach dem Erstellen eines Repositorys wird oben auf dem Bildschirm das Dateimenü angezeigt. Dort können Sie auf Einstellungen und Aktionen zugreifen, die Sie in {% data variables.product.prodname_desktop %} durchführen können. Die meisten Aktionen besitzen auch Tastenkürzel, die Ihnen bei der effizienteren Arbeit helfen. For a full list of keyboard shortcuts, see "[Keyboard shortcuts](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)."

1. Unterhalb des Menüs befindet sich eine Leiste, auf welcher der aktuelle Zustand Ihres Repositorys in {% data variables.product.prodname_desktop %} angezeigt wird:
    - **Current repository** (Aktuelles Repository) zeigt den Namen des Repositorys, an dem Sie arbeiten. Sie können auf **Current repository** (Aktuelles Repository) klicken, um zu einem anderen Repository in {% data variables.product.prodname_desktop %} zu wechseln.
    - **Current branch** (Aktueller Branch) zeigt den Namen des Branches, auf dem Sie arbeiten. Sie können auf **Current branch** (Aktueller Branch) klicken, um alle Branches in Ihrem Repository anzuzeigen, um zu einem anderen Branch zu wechseln oder um einen neuen Branch zu erstellen. Sobald Sie Pull Requests in Ihrem Repository erstellen, können Sie diese auch anzeigen, indem Sie auf **Current branch** (Aktueller Branch) klicken.
    - **Publish repository** (Repository veröffentlichen) wird angezeigt, da Sie Ihr Repository noch nicht auf {% data variables.product.product_name %} veröffentlicht haben, was Sie im nächsten Schritt erledigen.

  ![GitHub Desktop erkunden](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

2. Auf der linken Seitenleiste befinden sich die Ansichten **Changes** (Änderungen) und **History** (Verlauf).

    - In der Ansicht **Changes** (Änderungen) werden die Änderungen angezeigt, die Sie an Dateien auf Ihrem aktuellen Branch vorgenommen haben, jedoch noch nicht an Ihr lokales Repository committed haben. Unten befindet sich ein Feld mit den Textfeldern „Summary“ (Übersicht) und „Description“ (Beschreibung) sowie die Schaltfläche **Commit to master** (An master committen). Hier committen Sie die neuen Änderungen. Mithilfe der Schaltfläche **Commit** können Sie nachvollziehen, auf welchen Branch Sie Ihre Änderungen committen. ![Commit-Bereich](/assets/images/help/desktop/getting-started-guide/commit-area.png)

    - Die Ansicht **History** (Verlauf) zeigt die vorherigen Commits auf dem aktuellen Branch Ihres Repositorys. Nach der Erstellung Ihres Repositorys sollte ein „Initial commit“ (Anfänglicher Commit) angezeigt werden, der von {% data variables.product.prodname_desktop %} erstellt wurde. Abhängig von den Optionen, die Sie beim Erstellen des Repositorys ausgewählt haben, werden rechts neben dem Commit _.gitattributes_-, _.gitignore_-, _LICENSE_- oder _README_-Dateien angezeigt. Sie können auf jede Datei klicken, um ein Diff-Element für die jeweilige Datei anzuzeigen. Hierbei handelt es sich um die Änderungen, die in diesem Commit an der Datei vorgenommen wurden. Der Diff-Wert zeigt nur die Teile der Datei, die sich geändert haben, und nicht den gesamten Dateiinhalt. ![Verlaufsansicht](/assets/images/help/desktop/getting-started-guide/history-view.png)

### Schritt 4. Repository per Push-Vorgang an {% data variables.product.product_name %} übertragen

Derzeit befindet sich Ihr Repository nur auf Ihrem Computer, und Sie allein können auf das Repository zugreifen. Wenn Sie Ihr Repository auf {% data variables.product.product_name %} veröffentlichen, bleibt es computer- und teammitgliederübergreifend im selben Projekt synchron. Zum Veröffentlichen des Repositorys übertragen Sie es per Push-Vorgang an {% data variables.product.product_name %}, wodurch es auch auf {% data variables.product.prodname_dotcom_the_website %} zur Verfügung steht.

1. Klicken Sie auf **Publish repository** (Repository veröffentlichen). ![Repository veröffentlichen](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
   - Es werden ein paar bekannte Felder angezeigt. „Name“ und „Description“ (Beschreibung) entspricht den Feldern, die Sie beim Erstellen des Repositorys ausgefüllt haben.
   - Die Option **Keep this code private** (Diesen Code privat halten) wird angezeigt. Wählen Sie diese Option aus, wenn Sie Ihren Code nicht öffentlich für andere Benutzer auf {% data variables.product.product_name %} freigeben möchten.
   - Mithilfe des ggf. angezeigten Dropdownmenüs **Organization** (Organisation) können Sie Ihr Repository in einer bestimmten Organisation veröffentlichen, zu der Sie auf {% data variables.product.product_name %} gehören. Es ist in Ordnung, wenn Sie noch kein Mitglied einer Organisation sind. ![Schritte zum Veröffentlichen des Repositorys](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
2. Klicken Sie auf **Publish repository** (Repository veröffentlichen).
3. In {% data variables.product.prodname_desktop %} können Sie auf das Repository auf {% data variables.product.prodname_dotcom_the_website %} zugreifen. Klicken Sie im Dateimenü auf **Repository** und anschließend auf **View on GitHub** (Auf GitHub anzeigen). Dadurch gelangen Sie in Ihrem Standardbrowser direkt zum Repository.

Kehren Sie nach der Veröffentlichung Ihres Repositorys zu {% data variables.product.prodname_desktop %} zurück, und nehmen Sie weitere Änderungen an Ihrem lokalen Repository vor. Zuerst richten wir einen standardmäßigen Texteditor ein.

### Schritt 5. Texteditor einrichten

Um den Zeitaufwand für die Einrichtung Ihrer Entwicklungsumgebung zu reduzieren, können Sie direkt in {% data variables.product.prodname_desktop %} mehrere Texteditoren und integrierte Entwicklungsumgebungen starten. In einem Repository in {% data variables.product.prodname_desktop %} können Sie problemlos den Projektordner in Ihrem bevorzugten Texteditor öffnen.

1. Klicken Sie auf **File** (Datei), dann auf **Options** (Optionen) und anschließend auf **Advanced** (Erweitert).
2. Verwenden Sie das Dropdownmenü **External editor** (Externer Editor), und wählen Sie einen Editor aus der Liste aus. Die von Ihnen installierten Editoren sollten in der Liste angezeigt werden. Falls keine Editoren angezeigt werden, installieren Sie einen unterstützten Editor wie [Atom](https://atom.io). Eine Liste mit den unterstützten Editoren finden Sie in der [Integration „Open External Editor“ (offener externer Editor)](https://github.com/desktop/desktop/blob/development/docs/technical/editor-integration.md#windows) im {% data variables.product.prodname_desktop %}-Repository. ![Externer Editor](/assets/images/help/desktop/mac-editor-menu.png)
3. Starten Sie nach der Installation eines neuen Editors {% data variables.product.prodname_desktop %} neu, damit der Editor im Dropdownmenü **External editor** verfügbar wird.

### Schritt 6. Änderungen vornehmen, committen und per Push-Vorgang übertragen

Nach der Konfiguration Ihres standardmäßigen Editors sind Sie bereit, Änderungen an Ihrem Projekt vorzunehmen und den ersten Commit an Ihr Repository zu senden.

1. Um Ihren externen Editor in {% data variables.product.prodname_desktop %} zu öffnen, klicken Sie auf **Repository** (Repository) und dann auf **Open in <em>EDITOR</em>** (In <em>EDITOR</em> öffnen). ![Im Editor öffnen](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Nehmen Sie zunächst einige Änderungen an der von Ihnen zuvor erstellten _README.md_-Datei vor. Fügen Sie Informationen hinzu, die das Projekt beschreiben, also beispielsweise wofür das Projekt steht und weshalb es nützlich ist. Beachten Sie, dass es sich hierbei um die erste Interaktion der Personen mit Ihrem Projekt handelt. Nun sind Sie bereit, Ihren ersten Commit durchzuführen.
3. Wechseln Sie von Ihrem Texteditor zurück zu {% data variables.product.prodname_desktop %}, und navigieren Sie zur Registerkarte **Changes** (Änderungen). In der Dateiliste sollte Ihre _README.md_-Datei angezeigt werden. Das Häkchen neben der Datei _README.md_ gibt an, dass die von Ihnen an der Datei vorgenommenen Änderungen ein Teil des Commits sein werden, den Sie durchführen. Künftig möchten Sie möglicherweise an mehreren Dateien Änderungen vornehmen, gleichzeitig aber nur die Änderungen committen, die Sie an einigen der Dateien vorgenommen haben. Mit {% data variables.product.prodname_desktop %} können Sie bestimmte Änderungen auswählen, die Sie committen möchten. ![Änderungen anzeigen](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. Geben Sie im unteren Bereich der Liste **Changes** eine Commit-Mitteilung ein. Geben Sie rechts neben Ihrem Profilbild eine kurze Beschreibung zum Commit ein. Da die Datei _README.md_ geändert wird, wäre „Informationen zum Projektzweck hinzufügen“ eine gute Commit-Zusammenfassung. Unterhalb der Zusammenfassung wird das Textfeld „Description“ (Beschreibung) angezeigt, wo Sie eine längere Beschreibung der im Commit vorgenommenen Änderungen eingeben können. Dies ist hilfreich, wenn Sie sich den Projektverlauf ansehen und nachvollziehen, weshalb die Änderungen vorgenommen wurden. Da Sie eine grundlegende Aktualisierung an der Datei _README.md_ vornehmen, können Sie die Beschreibung auslassen. ![Commit-Mitteilung](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. Klicken Sie auf **Commit to master** (An master committen). Die Commit-Schaltfläche zeigt Ihren aktuellen Branch, in diesem Fall ist dies `master`. So können Sie sichergehen, dass Sie den Commit zum gewünschten Branch durchführen. ![An Master committen](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. Klicken Sie auf **Push origin** (Per Push-Vorgang an origin übertragen), um Ihre Änderungen an das Remote-Repository auf {% data variables.product.product_name %} per Push-Vorgang zu übertragen. ![Ursprung pushen](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
   - Erinnern Sie sich an die Schaltfläche vom Typ **Publish** (Veröffentlichen), die Sie verwendet haben, um Ihr Repository auf {% data variables.product.product_name %} zu veröffentlichen? Stattdessen sollte nun `Push origin` (Per Push-Vorgang an origin übertragen) mit einer `1` daneben angezeigt werden. Dies gibt an, dass ein Commit nicht per Push-Vorgang auf {% data variables.product.product_name %} übertragen wurde.
   - Das „origin“ (Ursprung) in **Push origin** (Per Push-Vorgang an origin übertragen) bedeutet, dass die Änderungen an die Remote-Instanz namens `origin` per Push-Vorgang übertragen werden. In diesem Fall ist dies das Repository Ihres Projekts auf {% data variables.product.prodname_dotcom_the_website %}. Bis Sie neue Commits per Push-Vorgang an {% data variables.product.product_name %} übertragen, gibt es Unterschiede zwischen dem Repository Ihres Projekts auf Ihrem Computer und dem Repository Ihres Projekts auf {% data variables.product.prodname_dotcom_the_website %}. Dadurch können Sie lokal arbeiten und Ihre Arbeit erst dann per Push-Vorgang an {% data variables.product.prodname_dotcom_the_website %} übertragen, wenn Sie dazu bereit sind.
7. Im offenen Bereich neben der Registerkarte **Changes** (Änderungen) werden Vorschläge für die Aktionen angezeigt, die Sie als Nächstes erledigen können. Klicken Sie auf **View on GitHub** (Auf GitHub anzeigen), um das Repository auf {% data variables.product.product_name %} in Ihrem Browser anzuzeigen. ![Auf GitHub anzeigen](/assets/images/help/desktop/getting-started-guide/view-on-github.png)
8. Klicken Sie in Ihrem Browser auf **2 Commits**. Es wird eine Liste der Commits in diesem Repository auf {% data variables.product.product_name %} angezeigt. Der erste Commit sollte der Commit sein, den Sie gerade in {% data variables.product.prodname_desktop %} durchgeführt haben! ![Auf „2 Commits“ klicken](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

### Fazit

Glückwünsch! Nun haben Sie ein Repository erstellt, das Repository auf {% data variables.product.product_name %} veröffentlicht, einen Commit durchgeführt und Ihre Änderungen per Push-Vorgang übertragen. Es wurden nur einige der Dinge behandelt, die Sie mit {% data variables.product.product_name %} und {% data variables.product.prodname_desktop %} erledigen können. Wir hoffen, diese Übung trägt dazu bei, dass Sie weitere Erkundungen anstellen!
