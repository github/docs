---
title: Pull Requests lokal auschecken
intro: 'Wenn dir jemand einen Pull Request aus einem Fork oder Branch deines Repositorys schickt, kannst du ihn lokal zusammenführen, um einen Mergekonflikt zu lösen oder die Änderungen vor dem Zusammenführen auf {% data variables.product.product_name %} zu testen und zu überprüfen.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
  - /articles/checking-out-pull-requests-locally
  - /github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
permissions: Anyone with write access to a repository can pull a remote pull request down locally.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Check out a PR locally
ms.openlocfilehash: bdb63d3951c92996ca4d6dc393bdc49b8d37acce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145133890'
---
{% note %}

  **Hinweis**: Nur die Ersteller von Pull Requests können Betreuern von Upstreamrepositorys oder Benutzern mit Pushzugriff auf das Upstreamrepository die Berechtigung erteilen, in einem benutzereigenen Fork Commits für den Vergleichsbranch ihres Pull Requests vorzunehmen. Weitere Informationen findest du unter [Zulassen von Änderungen an einem Pull Request-Branch, der aus einem Fork erstellt wurde](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

  {% endnote %}

## Einen aktiven Pull Request lokal ändern

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, den du ändern möchtest.{% ifversion fpt or ghec %}
3. Wenn du auswählen möchtest, wo der Pull Request geöffnet werden soll, wähle die Dropdownliste **Öffnen mit {% octicon "triangle-down" aria-label="The down triangle icon" %}**, und klicke auf eine der Registerkarten.
  ![Link zum Zugriff auf Befehlszeilenanweisungen für Pull Requests](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. Klicke im Mergefeld auf **Befehlszeilenanweisungen**. Führe nacheinander die folgenden Schritte durch, um den vorgeschlagenen Pull Request herunterzuladen.
  ![Link zum Zugriff auf Befehlszeilenanweisungen für Pull Requests](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. Optional: Wenn du die vorgeschlagenen Änderungen in {% data variables.product.prodname_desktop %} ansehen möchtest, klicke auf **Dies in {% data variables.product.prodname_desktop %} öffnen**.
  ![Links zum Öffnen eines Pull Requests auf dem lokalen Desktop](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Um einen Pull Request lokal auszuchecken, verwende den Unterbefehl `gh pr checkout`. Ersetze `pull-request` durch die Nummer, die URL oder den HEAD-Branch des Pull Requests.

```shell
gh pr checkout <em>pull-request</em>
```

{% endcli %}

## Einen inaktiven Pull Request lokal ändern

Wenn der Autor eines Pull Requests auf Anfragen nicht reagiert oder seine Fork gelöscht hat, kann der Pull-Request trotzdem noch zusammengeführt werden. Wenn du jedoch einen Pull Request ändern willst und der Autor nicht antwortet, musst du einige zusätzliche Schritte durchführen, um den Pull Request zu aktualisieren.

Sobald ein Pull-Request geöffnet ist, werden alle Änderungen von {% data variables.product.product_name %} remote gespeichert. Anders gesagt sind Commits in einem Pull Request schon in einem Repository verfügbar, noch bevor der Pull Request zusammengeführt wird. Du kannst einen offenen Pull Request abrufen und als deinen eigenen neu erstellen.

Jeder kann einen zuvor geöffneten Pull Request weiter bearbeiten, testen oder sogar einen neuen Pull Request mit zusätzlichen Änderungen öffnen. Aber nur Mitarbeiter mit Push-Zugriff können Pull Requests zusammenführen.

{% data reusables.repositories.sidebar-issue-pr %}
2. Klicke in der Liste „Pull Requests“ auf den Pull Request, den du zusammenführen möchtest.
3. Ermittle die ID-Nummer des inaktiven Pull Requests. Die ID ist die Ziffernfolge direkt hinter dem Titel des Pull Requests.
  ![ID-Nummer des Pull Requests](/assets/images/help/pull_requests/pull_request_id_number.png) {% data reusables.command_line.open_the_multi_os_terminal %}
5. Rufe den Verweis zum Pull Request basierend auf seiner ID-Nummer ab, und erstelle dabei einen neuen Branch.
  ```shell
  $ git fetch origin pull/<em>ID</em>/head:<em>BRANCHNAME</em>
  ```
6. Wechsle zu dem neuen Branch, der auf diesem Pull Request basiert:
  ```shell
  [main] $ git checkout <em>BRANCHNAME</em>
  > Switched to a new branch '<em>BRANCHNAME</em>'
  ```
7. An diesem Punkt kannst du mit diesem Branch machen, was du möchtest. Du kannst einige lokale Tests ausführen oder andere Branches in den Branch mergen.
8. Wenn du fertig bist, kannst du den neuen Branch nach oben übertragen:
  ```shell
  [pull-inactive-pull-request] $ git push origin <em>BRANCHNAME</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repository</em>.git
  >  * [new branch]      <em>BRANCHNAME</em> -> <em>BRANCHNAME</em>
  ```
9. [Erstelle einen neuen Pull Request](/articles/creating-a-pull-request) mit deinem neuen Branch.

## Fehler: Pushen einiger Refs fehlgeschlagen

Der Remotenamespace `refs/pull/` ist *schreibgeschützt*. Wenn du versuchst, Commits dorthin zu übertragen, wird die folgende Fehlermeldung angezeigt:
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:<em>USERNAME</em>/<em>REPOSITORY</em>.git'
```

{% tip %}

**Tipp**: Wenn du einen Remoteverweis entfernst oder umbenennst, ist dein lokaler `refs/pull/origin/`-Namespace von Aufrufen an `git-remote` nicht betroffen.

{% endtip %}
