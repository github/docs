---
title: Erstellen Ihres ersten Repositorys mit GitHub Desktop.
shortTitle: Creating your first repository
intro: 'You can use {% data variables.product.prodname_desktop %} to create and manage a Git repository without using the command line.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  free-pro-team: '*'
---

### Einführung
{% data variables.product.prodname_desktop %} erweitert und vereinfacht Ihren {% data variables.product.prodname_dotcom_the_website %}-Workflow, wobei anstelle von Textbefehlen an der Befehlszeile eine visuelle Oberfläche verwendet wird. By the end of this guide, you'll have used {% data variables.product.prodname_desktop %} to create a repository, make changes to the repository, and publish the changes to {% data variables.product.product_name %}.

After installing {% data variables.product.prodname_desktop %} and signing into {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %} you can create and clone a tutorial repository. The tutorial will introduce the basics of working with Git and {% data variables.product.prodname_dotcom %}, including installing a text editor, creating a branch, making a commit, pushing to {% data variables.product.prodname_dotcom_the_website %}, and opening a pull request. The tutorial is available if you do not have any repositories on {% data variables.product.prodname_desktop %} yet.

We recommend completing the tutorial, but if you want to explore {% data variables.product.prodname_desktop %} by creating a new repository, this guide will walk you through using {% data variables.product.prodname_desktop %} to work on a Git repository.

### Part 1: Installing {% data variables.product.prodname_desktop %} and authenticating your account
You can install {% data variables.product.prodname_desktop %} on any supported operating system. After you install the app, you will need to sign in and authenticate your account on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %} before you can create and clone a tutorial repository.

For more information on installing and authenticating, see "[Setting up {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop)."

### Part 2: Creating a new repository
If you do not have any repositories associated with {% data variables.product.prodname_desktop %}, you will see a "Let's get started!" view, where you can choose to create and clone a tutorial repository, clone an existing repository from the Internet, create a new repository, or add an existing repository from your hard drive. ![The Let's get started! screen](/assets/images/help/desktop/lets-get-started.png)

#### Creating and cloning a tutorial repository
We recommend that you create and clone a tutorial repository as your first project to practice using {% data variables.product.prodname_desktop %}.

1. Klicken Sie auf **Create a tutorial repository and clone it** (Tutorial-Repository erstellen und klonen). ![Schaltfläche zum Erstellen und Klonen eines Tutorial-Repositorys](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. Follow the prompts in the tutorial to install a text editor, create a branch, edit a file, make a commit, publish to {% data variables.product.prodname_dotcom %}, and open a pull request.

#### Ein neues Repository erstellen
If you do not wish to create and clone a tutorial repository, you can create a new repository.

1. Klicken Sie auf **Create a New Repository on your Hard Drive...** (Neues Repository auf Ihrer Festplatte erstellen). ![Neues Repository erstellen](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. Fill in the fields and select your preferred options. ![Optionen zum Erstellen eines Repositorys](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - „Name“ definiert den Namen Ihres Repositorys, und zwar lokal und auf {% data variables.product.product_name %}.
   - „Description“ (Beschreibung) ist ein optionales Feld, das Sie verwenden können, um weitere Informationen zum Zweck Ihres Repositorys anzugeben.
   - „Local path“ (Lokaler Pfad) legt den Speicherort Ihres Repositorys auf Ihrem Computer fest. Standardmäßig erstellt {% data variables.product.prodname_desktop %} einen _GitHub_-Ordner im Ordner _Documents_ (Dokumente), um Ihre Repositorys zu speichern. Sie können aber auch einen anderen Speicherort auf Ihrem Computer auswählen. Ihr neues Repository ist ein Ordner am ausgewählten Speicherort. Wenn Sie Ihr Repository beispielsweise `Tutorial` nennen, wird ein Ordner namens _Tutorial_ im Ordner erstellt, den Sie als Ihren lokalen Pfad ausgewählt haben. {% data variables.product.prodname_desktop %} speichert Ihren ausgewählten Speicherort für das nächste Mal, wenn Sie ein neues Repository erstellen oder klonen.
   - Durch Auswahl von **Initialize this repository with a README** (Dieses Repository mit einer README-Datei initialisieren) wird ein anfänglicher Commit mit einer _README.md_-Datei erstellt. Anhand von README-Dateien kann der Zweck Ihres Projekts nachvollzogen werden. Daher sollte diese Option ausgewählt werden und nützliche Informationen in die Datei eingetragen werden. Wenn Ihr Repository auf {% data variables.product.product_name %} aufgerufen wird, wird zunächst die README-Datei angezeigt, in der sich der Besucher mit Ihrem Projekt vertraut machen kann. Weitere Informationen finden Sie unter „[Informationen zu README-Dateien](/articles/about-readmes/)“.
   - Mithilfe des Dropdownmenüs **Git ignore** (Git ignorieren) können Sie eine benutzerdefinierte Datei hinzufügen, um bestimmte Dateien in Ihrem lokalen Repository zu ignorieren, die nicht in der Versionskontrolle gespeichert werden sollen. If there's a specific language or framework that you'll be using, you can select an option from the available list. Für den Anfang können Sie diese Auswahl überspringen. Weitere Informationen finden Sie unter „[Dateien ignorieren](/articles/ignoring-files)“.
   - Mithilfe des Dropdownmenüs **License** (Lizenz) können Sie einer _LICENSE_-Datei in Ihrem Repository eine Open-Source-Lizenz hinzufügen. Sie müssen sich keine Sorgen machen, dass Sie sofort eine Lizenz hinzufügen können. Weitere Informationen zu verfügbaren Open-Source-Lizenzen und wie Sie diese zu Ihrem Repository hinzufügen können finden Sie unter „[Ein Repository lizenzieren](/articles/licensing-a-repository)“.
3. Klicke auf **Create repository** (Repository erstellen).

### Part 3: Exploring {% data variables.product.prodname_desktop %}
In the file menu at the top of the screen, you can access settings and actions that you can perform in {% data variables.product.prodname_desktop %}. Die meisten Aktionen besitzen auch Tastenkürzel, die Ihnen bei der effizienteren Arbeit helfen. For a full list of keyboard shortcuts, see "[Keyboard shortcuts](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)."

#### The {% data variables.product.prodname_desktop %} menu bar
At the top of the {% data variables.product.prodname_desktop %} app, you will see a bar that shows the current state of your repository.
  - **Current repository** (Aktuelles Repository) zeigt den Namen des Repositorys, an dem Sie arbeiten. Sie können auf **Current repository** (Aktuelles Repository) klicken, um zu einem anderen Repository in {% data variables.product.prodname_desktop %} zu wechseln.
  - **Current branch** (Aktueller Branch) zeigt den Namen des Branches, auf dem Sie arbeiten. Sie können auf **Current branch** (Aktueller Branch) klicken, um alle Branches in Ihrem Repository anzuzeigen, um zu einem anderen Branch zu wechseln oder um einen neuen Branch zu erstellen. Sobald Sie Pull Requests in Ihrem Repository erstellen, können Sie diese auch anzeigen, indem Sie auf **Current branch** (Aktueller Branch) klicken.
  - **Publish repository** (Repository veröffentlichen) wird angezeigt, da Sie Ihr Repository noch nicht auf {% data variables.product.product_name %} veröffentlicht haben, was Sie im nächsten Schritt erledigen. This section of the bar will change based on the status of your current branch and repository. Different context dependent actions will be available that let you exchange data between your local and remote repositories.

  ![GitHub Desktop erkunden](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

#### Changes and History
Auf der linken Seitenleiste befinden sich die Ansichten **Changes** (Änderungen) und **History** (Verlauf). ![The Changes and History tabs](/assets/images/help/desktop/changes-and-history.png)

  - In der Ansicht **Changes** (Änderungen) werden die Änderungen angezeigt, die Sie an Dateien auf Ihrem aktuellen Branch vorgenommen haben, jedoch noch nicht an Ihr lokales Repository committed haben. At the bottom, there is a box with "Summary" and "Description" text boxes and a **Commit to BRANCH** button. Hier committen Sie die neuen Änderungen. The **Commit to BRANCH** button is dynamic and will display which branch you're committing your changes to. ![Commit-Bereich](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - Die Ansicht **History** (Verlauf) zeigt die vorherigen Commits auf dem aktuellen Branch Ihres Repositorys. Nach der Erstellung Ihres Repositorys sollte ein „Initial commit“ (Anfänglicher Commit) angezeigt werden, der von {% data variables.product.prodname_desktop %} erstellt wurde. Abhängig von den Optionen, die Sie beim Erstellen des Repositorys ausgewählt haben, werden rechts neben dem Commit _.gitattributes_-, _.gitignore_-, _LICENSE_- oder _README_-Dateien angezeigt. Sie können auf jede Datei klicken, um ein Diff-Element für die jeweilige Datei anzuzeigen. Hierbei handelt es sich um die Änderungen, die in diesem Commit an der Datei vorgenommen wurden. Der Diff-Wert zeigt nur die Teile der Datei, die sich geändert haben, und nicht den gesamten Dateiinhalt. ![Verlaufsansicht](/assets/images/help/desktop/getting-started-guide/history-view.png)

### Part 4: Publishing your repository to {% data variables.product.product_name %}
When you create a new repository, it only exists on your computer and you are the only one who can access the repository. You can publish your repository to {% data variables.product.product_name %} to keep it synchronized across multiple computers and allow other people to access it. To publish your repository, push your local changes to {% data variables.product.product_name %}.

1. Click **Publish repository** in the menu bar. ![Repository veröffentlichen](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %} automatically fills the "Name" and "Description" fields with the information you entered when you created the repository.
    - **Keep this code private** lets you control who can view your project. If you leave this option unselected, other users on {% data variables.product.product_name %} will be able to view your code. If you select this option, your code will not be publicly available.
    - The **Organization** drop-down menu, if present, lets you publish your repository to a specific organization that you belong to on {% data variables.product.product_name %}.

    ![Schritte zum Veröffentlichen des Repositorys](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. Klicke auf die Schaltfläche **Publish Repository** (Repository veröffentlichen).
  3. In {% data variables.product.prodname_desktop %} können Sie auf das Repository auf {% data variables.product.prodname_dotcom_the_website %} zugreifen. Klicken Sie im Dateimenü auf **Repository** und anschließend auf **View on GitHub** (Auf GitHub anzeigen). Dadurch gelangen Sie in Ihrem Standardbrowser direkt zum Repository.

### Part 5: Making, committing, and pushing changes
Now that you've created and published your repository, you're ready to make changes to your project and start crafting your first commit to your repository.

1. To launch your external editor from within {% data variables.product.prodname_desktop %}, click **Repository**, then click **Open in <em>EDITOR</em>**. For more information, see "[Configuring a default editor](/desktop/getting-started-with-github-desktop/configuring-a-default-editor)." ![Im Editor öffnen](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Make some changes to the _README.md_ file that you previously created. You can add information that describes your project, like what it does and why it is useful. When you are satisfied with your changes, save them in your text editor.
3. In {% data variables.product.prodname_desktop %}, navigate to the **Changes** view. In der Dateiliste sollte Ihre _README.md_-Datei angezeigt werden. The checkmark to the left of the _README.md_ file indicates that the changes you've made to the file will be part of the commit you make. Künftig möchten Sie möglicherweise an mehreren Dateien Änderungen vornehmen, gleichzeitig aber nur die Änderungen committen, die Sie an einigen der Dateien vorgenommen haben. If you click the checkmark next to a file, that file will not be included in the commit. ![Änderungen anzeigen](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. Geben Sie im unteren Bereich der Liste **Changes** eine Commit-Mitteilung ein. Geben Sie rechts neben Ihrem Profilbild eine kurze Beschreibung zum Commit ein. Da die Datei _README.md_ geändert wird, wäre „Informationen zum Projektzweck hinzufügen“ eine gute Commit-Zusammenfassung. Below the summary, you'll see a "Description" text field where you can type a longer description of the changes in the commit, which is helpful when looking back at the history of a project and understanding why changes were made. Da Sie eine grundlegende Aktualisierung an der Datei _README.md_ vornehmen, können Sie die Beschreibung auslassen. ![Commit message](/assets/images/help/desktop/getting-started-guide/commit-message.png) <<<<<<< HEAD
5. Click **Commit to BRANCH NAME**. The commit button shows your current branch so you can be sure to commit to the branch you want.
![Commit to branch](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
=======
5. Klicken Sie auf **Commit to master** (An master committen). The commit button shows your current branch, which in this case is `master`, so that you know which branch you are making a commit to. ![An Master committen](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
> > > > > > > Master
6. Klicken Sie auf **Push origin** (Per Push-Vorgang an origin übertragen), um Ihre Änderungen an das Remote-Repository auf {% data variables.product.product_name %} per Push-Vorgang zu übertragen. ![Ursprung pushen](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - The **Push origin** button is the same one that you clicked to publish your repository to {% data variables.product.product_name %}. This button changes contextually based on where you are at in the Git workflow. It should now say `Push origin` with a `1` next to it, indicating that there is one commit that has not been pushed up to {% data variables.product.product_name %}.
  - The "origin" in **Push origin** means that you are pushing changes to the remote called `origin`, which in this case is your project's repository on {% data variables.product.prodname_dotcom_the_website %}. Bis Sie neue Commits per Push-Vorgang an {% data variables.product.product_name %} übertragen, gibt es Unterschiede zwischen dem Repository Ihres Projekts auf Ihrem Computer und dem Repository Ihres Projekts auf {% data variables.product.prodname_dotcom_the_website %}. This allows you to work locally and only push your changes to {% data variables.product.prodname_dotcom_the_website %} when you're ready.
7. In the window to the right of the **Changes** view, you'll see suggestions for actions you can do next. To open the repository on {% data variables.product.product_name %} in your browser, click **View on {% data variables.product.product_name %}**. ![Available actions](/assets/images/help/desktop/available-actions.png)
8. Klicken Sie in Ihrem Browser auf **2 Commits**. Es wird eine Liste der Commits in diesem Repository auf {% data variables.product.product_name %} angezeigt. Der erste Commit sollte der Commit sein, den Sie gerade in {% data variables.product.prodname_desktop %} durchgeführt haben. ![Auf „2 Commits“ klicken](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

### Fazit
You've now created a repository, published the repository to {% data variables.product.product_name %}, made a commit, and pushed your changes to {% data variables.product.product_name %}. You can follow this same workflow when contributing to other projects that you create or collaborate on.

### Weiterführende Informationen
- "[Learning about Git](/github/using-git/learning-about-git)"
- "[Learning about {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)"
- "[Getting started with {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)"
