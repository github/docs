---
title: Ein Repository forken
redirect_from:
  - /fork-a-repo/
  - /forking/
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
intro: 'Ein Fork ist eine Kopie eines Repositorys. Durch das Forken eines Repositorys kannst Du Änderungen uneingeschränkt testen, ohne Auswirkungen auf das Originalprojekt.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Informationen zu Forks

Üblicherweise werden Forks genutzt, um Änderungen für ein Projekt eines anderes Benutzers vorzuschlagen oder ein Projekt eines anderen Benutzers als Ausgangspunkt für eigene Ideen zu verwenden. You can fork a repository to create a copy of the repository and make changes without affecting the upstream repository. For more information, see "[Working with forks](/github/collaborating-with-issues-and-pull-requests/working-with-forks)."

### Änderungen für ein Projekt eines anderen Benutzers vorschlagen

Du kannst Forks beispielsweise benutzen, um Änderungen im Zusammenhang mit der Behebung eines Fehlers vorzuschlagen. Anstatt einen Issue für einen Bug zu erstellen, kannst Du:

- das Repository forken,
- den Fehler beheben,
- Submit a pull request to the project owner.

### Ein Projekt eines anderen Benutzers als Ausgangspunkt für eigene Ideen verwenden

Open-Source-Software basiert auf der Idee, dass wir durch gemeinsamen Code bessere, zuverlässigere Software erstellen können. Weitere Informationen findest Du in „[Über die Open-Source-Initiative](http://opensource.org/about)“ auf der Open-Source-Initiative-Website.

For more information about applying open source principles to your organization's development work on {% data variables.product.product_location %}, see {% data variables.product.prodname_dotcom %}'s white paper "[An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

{% ifversion fpt or ghes %}

Wenn Du ein öffentliches Repository von einem Fork eines Projekts eines anderen Benutzers erstellst, musst Du unbedingt eine Lizenzdatei hinzufügen, die bestimmt, wie Dein Projekt für andere Personen freigegeben wird. For more information, see "[Choose an open source license](https://choosealicense.com/)" at choosealicense.com.

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% endif %}

## Vorrausetzungen

Wenn Sie es noch nicht getan haben, müssen Sie zunächst [Git einrichten](/articles/set-up-git). Denke auch daran, [Authentifizierungen zu {% data variables.product.product_location %} über Git einzurichten](/articles/set-up-git#next-steps-authenticating-with-github-from-git).

## Repository forken

{% include tool-switcher %}
{% webui %}

Du forkst vielleicht ein Projekt, um Änderungen an das vorgelagerte - oder originale - Repository vorzuschlagen. In diesem Fall ist es ratsam, Ihren Fork regelmäßig mit dem vorgelagerten Repository zu synchronisieren. Zu diesem Zweck müssen Sie Git in der Befehlszeile verwenden. Das Festlegen des vorgelagerten Repositorys kannst Du mit demselben Repository [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) üben, das Du gerade geforkt hast.

1. Navigieren Sie auf {% data variables.product.product_location %} zum Repository [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
2. Klicke in der oberen rechte Ecke der Seite auf **Fork**. ![Schaltfläche „Fork“ (Fork)](/assets/images/help/repository/fork_button.jpg)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a fork of a repository, use the `gh repo fork` subcommand.

```shell
gh repo fork <em>repository</em>
```

To create the fork in an organization, use the `--org` flag.

```shell
gh repo fork <em>repository</em> --org "octo-org"
```

{% endcli %}

{% desktop %}
{% enddesktop %}

## Cloning your forked repository

Right now, you have a fork of the Spoon-Knife repository, but you don't have the files in that repository locally on your computer.

{% include tool-switcher %}
{% webui %}

1. Navigiere auf {% data variables.product.product_name %} zu **Deinem Fork** des Repositorys „Spoon-Knife“.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
4. Gib `git clone` ein, und füge dann die zuvor kopierte URL ein. Der Befehl sieht wie folgt aus, wobei `YOUR-USERNAME` durch Deinen {% data variables.product.product_name %}-Benutzernamen ersetzt wird:
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  ```

5. Drücke die **Eingabetaste**. Der lokale Klon wird erstellt.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a clone of your fork, use the `--clone` flag.

```shell
gh repo fork <em>repository</em> --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

{% enddesktop %}

## Configuring Git to sync your fork with the original repository

Wenn Du ein Projekt forkst, um Änderungen für das Original-Repository vorzuschlagen, kannst Du Git so konfigurieren, dass Änderungen am vorgelagerten (originalen) Repository in den lokalen Klon Deiner Fork abgerufen werden.

{% include tool-switcher %}
{% webui %}

1. Navigiere auf {% data variables.product.product_name %} zum Repository [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Change directories to the location of the fork you cloned.
    - Um in Dein Home-Verzeichnis zu wechseln, gib einfach `cd` ohne zusätzlichen Text ein.
    - Um die Dateien und Ordner im aktuellen Verzeichnis anzuzeigen, gib `ls` ein.
    - Um in eines der aufgelisteten Verzeichnisse zu wechseln, gib `cd aufgeführtes_verzeichnis` ein.
    - Um ein Verzeichnis nach oben zu wechseln, gib `cd ..` ein.
5. Gib `git remote -v` ein, und drück die **Eingabetaste**. Daraufhin siehst Du das aktuell konfigurierte Remote-Repository für Deinen Fork.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```

6. Gib `git remote add upstream` ein. Füge dann die URL ein, die Du bei Schritt 2 kopiert hast, und drücke die **Eingabetaste**. Dies sieht wie folgt aus:
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
  ```

7. Um das neue vorgelagerte Repository zu überprüfen, das Du für Deinen Fork angegeben hast, gib erneut `git remote -v` ein. Nun sollte die URL Deiner Fork als `origin` und die URL des Original-Repositorys als `upstream` aufgeführt sein.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```

Nun können Sie Ihren Fork mit wenigen Git-Befehlen regelmäßig mit dem vorgelagerten Repository synchronisieren. Weitere Informationen finden Sie unter „[Fork synchronisieren](/articles/syncing-a-fork)“.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To configure a remote repository for the forked repository, use the `--remote` flag.

```shell
gh repo fork <em>repository</em> --remote=true
```

To specify the remote repository's name, use the `--remote-name` flag.

```shell
gh repo fork <em>repository</em> --remote-name "main-remote-repo"
```

{% endcli %}

### Nächste Schritte:

Du kannst nun jede Änderung am Fork vornehmen, einschließlich:

- **Branches erstellen:** Mit [*Branches*](/articles/creating-and-deleting-branches-within-your-repository/) kannst Du ohne Risiko für das Hauptprojekt neue Funktionen entwickeln oder Ideen testen.
- **Pull Requests öffnen:** Wenn Du einen Beitrag zum Original-Repository leisten möchtest, kannst Du einen [Pull Request](/articles/about-pull-requests) an den Original-Autor senden und ihn dazu auffordern, Deinen Fork in sein Repository abzurufen.

## Ein anderes Repository zum Forken finden
Forken Sie ein Repository, um an einem Projekt mitzuarbeiten. {% data reusables.repositories.you-can-fork %}

{% ifversion fpt %}Du kannst [Erkunden](https://github.com/explore) verwenden, um Projekte zu finden und an Open-Source-Repositorys mitzuarbeiten. Weitere Informationen findest du unter „[Möglichkeiten finden, Beiträge an Open-Source auf {% data variables.product.prodname_dotcom %} zu leisten](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."

{% endif %}

## Geschafft!

Sie haben jetzt ein Repository geforkt, das Klonen Ihres Forks geübt und ein vorgelagertes Repository konfiguriert. For more information about cloning the fork and syncing the changes in a forked repository from your computer see "[Set up Git](/articles/set-up-git)."

You can also create a new repository where you can put all your projects and share the code on {% data variables.product.prodname_dotcom %}. For more information see, "[Create a repository](/articles/create-a-repo)."

Each repository in {% data variables.product.product_name %} is owned by a person or an organization. You can interact with the people, repositories, and organizations by connecting and following them on {% data variables.product.product_name %}. For more information see "[Be social](/articles/be-social)."

{% data reusables.support.connect-in-the-forum-bootcamp %}
