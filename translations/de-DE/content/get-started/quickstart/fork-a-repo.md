---
title: Forken eines Repositorys
redirect_from:
  - /fork-a-repo
  - /forking
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
intro: 'Ein Fork ist ein neues Repository, das denselben Code und dieselben Sichtbarkeitseinstellungen verwendet wie das ursprüngliche „Upstream-Repository“.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: 6756defd7567983cc7dbb1a9bfe36256e5b41a09
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191338'
---
## Informationen zu Forks

{% data reusables.repositories.fork-definition-long %} Weitere Informationen findest du unter [Arbeiten mit Forks](/github/collaborating-with-issues-and-pull-requests/working-with-forks).

### Änderungen für ein Projekt eines anderen Benutzers vorschlagen

Du kannst Forks beispielsweise benutzen, um Änderungen im Zusammenhang mit der Behebung eines Fehlers vorzuschlagen. Anstatt ein Issue für einen Bug zu erstellen, kannst du Folgendes tun:

- Forke das Repository.
- den Fehler beheben,
- Einen Pull Request an den Projektbesitzer senden

### Ein Projekt eines anderen Benutzers als Ausgangspunkt für eigene Ideen verwenden

Open-Source-Software basiert auf der Idee, dass wir durch gemeinsamen Code bessere, zuverlässigere Software erstellen können. Weitere Informationen findest du in der Open-Source-Initiative unter [Informationen zur Open-Source-Initiative](https://opensource.org/about).

Weitere Informationen zum Anwenden von Open-Source-Prinzipien auf die Entwicklungsarbeit deiner Organisation auf {% data variables.location.product_location %} findest du im {% data variables.product.prodname_dotcom %}-Whitepaper [Eine Einführung in Inner Source](https://resources.github.com/whitepapers/introduction-to-innersource/).

{% ifversion fpt or ghes or ghec %}

Wenn du ein öffentliches Repository von einem Fork eines Projekts anderer Benutzer*innen erstellst, musst du unbedingt eine Lizenzdatei hinzufügen, die bestimmt, wie dein Projekt für andere Personen freigegeben wird. Weitere Informationen findest du unter [Auswählen einer Open-Source-Lizenz](https://choosealicense.com/) unter choosealicense.com.

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning %}

{% endif %}

## Voraussetzungen

Sofern noch nicht geschehen, richte zunächst Git und die Authentifizierung bei {% data variables.location.product_location %} über Git ein. Weitere Informationen findest du unter [Einrichten von Git](/articles/set-up-git).

## Repository forken

{% webui %}

Du forkst vielleicht ein Projekt, um Änderungen für das Upstream-Repository vorzuschlagen. In diesem Fall ist es ratsam, deinen Fork regelmäßig mit dem vorgelagerten Repository zu synchronisieren. Zu diesem Zweck musst du Git in der Befehlszeile verwenden. Du kannst Festlegen des Upstreamrepositorys anhand desselben [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife)-Repositorys üben, das du gerade geforkt hast.

1. Navigiere auf {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %} zum Repository [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
2. Klicke in der oberen rechten Ecke der Seite auf **Forken**.
   ![Schaltfläche „Forken“](/assets/images/help/repository/fork_button.png){% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
3. Wähle eine*n Besitzer*in für das geforkte Repository aus.
   ![Erstellen einer neuen Forkseite mit hervorgehobener Besitzer-Dropdownliste](/assets/images/help/repository/fork-choose-owner.png)
4. Standardmäßig erhalten Forks den gleichen Namen wie die zugehörigen Upstream-Repositorys. Zur weiteren Unterscheidung kannst du den Namen des Forks ändern. 
   ![Erstellen einer neuen Forkseite mit hervorgehobenem Repositorynamensfeld](/assets/images/help/repository/fork-choose-repo-name.png)
5. Füge wahlweise eine Beschreibung deines Forks hinzu.
   ![Erstellen einer neuen Forkseite mit hervorgehobenem Beschreibungsfeld](/assets/images/help/repository/fork-description.png)
6. Wähle aus, ob nur der Standardbranch oder alle Branches in den neuen Fork kopiert werden sollen. Bei vielen Forkszenarien, z. B. Beiträge zu Open-Source-Projekten, musst du nur den Standardbranch kopieren. Standardmäßig wird nur der Standardbranch kopiert.
   ![Option zum ausschließlichen Kopieren des Standardbranch](/assets/images/help/repository/copy-default-branch-only.png)
7. Klicke auf **Fork erstellen**.
   ![Hervorgehobene Schaltfläche „Fork erstellen“](/assets/images/help/repository/fork-create-button.png)


{% note %}

**Hinweis:** Wenn du weitere Branches aus dem Upstream-Repository kopieren möchtest, ist dies über die Seite **Branches** möglich. Weitere Informationen findest du unter [Erstellen und Löschen von Branches innerhalb deines Repositorys](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository).{% endnote %}{% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Um einen Fork für ein Repository zu erstellen, verwende den Unterbefehl `gh repo fork`.

```shell
gh repo fork REPOSITORY
```

Um den Fork in einer Organisation zu erstellen, verwende das `--org`-Flag.

```shell
gh repo fork REPOSITORY --org "octo-org"
```

{% endcli %}

{% desktop %} {% enddesktop %}

## Klonen deines geforkten Repositorys

Momentan verfügst du über einen Fork des Repositorys „Spoon-Knife“, aber die Dateien dieses Repositorys befinden sich nicht auf dem lokalen Computer.

{% webui %}

1. Navigiere auf {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %} zu **deinem Fork** des Spoon-Knife-Repositorys.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %}
4. Gib `git clone` ein, und füge dann die zuvor kopierte URL ein. Sie sieht wie folgt aus (anstelle von `YOUR-USERNAME` wird dein {% data variables.product.product_name %}-Benutzername verwendet):
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  ```

5. Drücke die **EINGABETASTE**. Dein lokaler Klon wird erstellt.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remote: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Verwende das Flag `--clone`, um einen Klon deines Forks zu erstellen.

```shell
gh repo fork REPOSITORY --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

{% enddesktop %}

## Konfigurieren von Git zum Synchronisieren deines Forks mit dem Upstream-Repository

Wenn du ein Projekt forkst, um Änderungen für das Upstream-Repository vorzuschlagen, kannst du Git so konfigurieren, dass Änderungen am Upstream-Repository in den lokalen Klon deines Forks abgerufen werden.

{% webui %}

1. Navigiere auf {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %} zum Repository [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %}
4. Wechsle das Verzeichnis, und navigiere zu dem Speicherort des geklonten Forks.
    - Um in dein Startverzeichnis zu wechseln, gib nur `cd` ohne zusätzlichen Text ein.
    - Um die Dateien und Ordner im aktuellen Verzeichnis aufzulisten, gib `ls` ein.
    - Um zu einem deiner aufgelisteten Verzeichnisse zu wechseln, gib `cd your_listed_directory` ein.
    - Um ein Verzeichnis nach oben zu wechseln, gib `cd ..` ein.
5. Gib `git remote -v` ein, und drücke die **EINGABETASTE**. Daraufhin siehst du das derzeit konfigurierte Remoterepository für deinen Fork.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  ```

6. Gib `git remote add upstream` ein, füge dann die in Schritt 3 kopierte URL ein, und drücke die **EINGABETASTE**. Er sieht wie folgt aus:
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/Spoon-Knife.git
  ```

7. Um das neue Upstreamrepository zu überprüfen, das du für deinen Fork angegeben hast, gib erneut `git remote -v` ein. Die URL für deinen Fork sollte als `origin` und die URL für das Upstream-Repository als `upstream` angezeigt werden.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
  ```

Nun kannst du deinen Fork mit wenigen Git-Befehlen regelmäßig mit dem vorgelagerten Repository synchronisieren. Weitere Informationen findest du unter [Synchronisieren eines Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Um ein Remoterepository für das geforkte Repository zu konfigurieren, verwende das `--remote`-Flag.

```shell
gh repo fork REPOSITORY --remote=true
```

Um den Namen des Remoterepositorys anzugeben, verwende das `--remote-name`-Flag.

```shell
gh repo fork REPOSITORY --remote-name "main-remote-repo"
```

{% endcli %}

### Bearbeiten eines Forks

Du kannst nun jede Änderung am Fork vornehmen, einschließlich:

- **Erstellen von Branches**: [*Branches*](/articles/creating-and-deleting-branches-within-your-repository/) ermöglichen es dir, neue Features zu erstellen oder Ideen auszuprobieren, ohne dein Hauptprojekt zu gefährden.
- **Öffnen von Pull Requests**: Wenn du einen Beitrag zum Upstream-Repository leisten möchtest, kannst du dem ursprünglichen Autor eine Anforderung zum Pullen deines Forks in sein Repository senden, indem du einen [Pull Request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) übermittelst.

## Ein anderes Repository zum Forken finden
Forke ein Repository, um an einem Projekt mitzuarbeiten. {% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}Du kannst [Erkunden](https://github.com/explore) durchsuchen, um Projekte zu finden und an Open-Source-Repositorys mitzuwirken. Weitere Informationen findest du unter [Beitragen zu Open-Source-Projekten auf {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github).

{% endif %}

## Nächste Schritte

Du hast jetzt ein Repository geforkt, das Klonen deines Forks geübt und ein vorgelagertes Repository konfiguriert.

* Weitere Informationen zum Klonen des Forks und zum Synchronisieren der Änderungen in einem geforkten Repository auf deinem Computer findest du unter [Einrichten von Git](/articles/set-up-git).

* Du kannst auch auf {% data variables.product.prodname_dotcom %} ein neues Repository erstellen, in dem du all deine Projekte ablegen und deinen Code freigeben kannst. {% data reusables.getting-started.create-a-repository %}"

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
