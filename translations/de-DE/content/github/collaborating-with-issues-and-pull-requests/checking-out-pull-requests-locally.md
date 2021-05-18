---
title: Pull Requests lokal auschecken
intro: 'Wenn Dir jemand einen Pull Request aus einem Fork oder Branch Deines Repositorys schickt, kannst Du ihn lokal zusammenführen, um einen Merge-Konflikt zu lösen oder um die Änderungen vor dem Zusammenführen auf {% data variables.product.product_name %} zu testen und zu überprüfen.'
redirect_from:
  - /articles/checking-out-pull-requests-locally
permissions: Anyone with write access to a repository can pull a remote pull request down locally.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

  {% note %}

  **Hinweis:**Pull-Request-Autoren können Betreuern von vorgelagerten Repositorys, oder Personen mit Push-Zugriff auf das vorgelagerte Repository, die Berechtigung geben, Commits in einer benutzereigenen Fork zum Vergleichs-Branch ihrer Pull Requests zu machen. Weitere Informationen findest Du unter „[Änderungen an einem Pull-Request-Branch zulassen, der von einem Fork erstellt wurde](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork).“

  {% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also check out a pull request locally using the {% data variables.product.prodname_cli %}. For more information, see "[`gh pr checkout`](https://cli.github.com/manual/gh_pr_checkout)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### Einen aktiven Pull Request lokal ändern

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull-Requests auf die Pull-Requests, die Du ändern möchtest.{% if currentVersion == "free-pro-team@latest" %}
3. Um auszuwählen, wo Du den Pull Request öffnen willst, wähle das Dropdownmenü „**Open with {% octicon "triangle-down" aria-label="The down triangle icon" %}**" und klicke auf eine der Registerkarten. ![Link um auf die Pull-Request-Anweisungen in der Befehlszeile zuzugreifen](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. Klicke im Merge-Feld auf **Befehlszeilenanweisungen**. Führen Sie nacheinander die Schritte durch, um den vorgeschlagenen Pull Request herunterzuladen. ![Links zum Zugriff auf Anleitungen zu Befehlszeilen-Pull-Requests](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. Klicke optional zur Ansicht der vorgeschlagenen Änderungen mit {% data variables.product.prodname_desktop %} auf **öffne dies mit {% data variables.product.prodname_desktop %}**. ![Link to open a pull request locally in Desktop](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

### Einen inaktiven Pull Request lokal ändern

Wenn der Autor eines Pull Requests auf Anfragen nicht reagiert oder seine Fork gelöscht hat, kann der Pull-Request trotzdem noch zusammengeführt werden. Wenn Du jedoch einen Pull Request ändern willst und der Autor nicht antwortet, musst Du einige zusätzliche Schritte durchführen, um den Pull Request zu aktualisieren.

Sobald ein Pull-Request geöffnet ist, werden alle Änderungen von {% data variables.product.product_name %} remote gespeichert. Anders gesagt sind Commits in einem Pull Request schon in einem Repository verfügbar, noch bevor der Pull Request zusammengeführt wird. Du kannst einen offenen Pull Request abrufen und als Deinen eigenen neu erstellen.

Jeder kann einen zuvor geöffneten Pull Request weiter bearbeiten, testen oder sogar einen neuen Pull Request mit zusätzlichen Änderungen öffnen. Aber nur Mitarbeiter mit Push-Zugriff können Pull Requests zusammenführen.

{% data reusables.repositories.sidebar-issue-pr %}
2. Klicke in der Liste „Pull Requests“ auf den Pull Request, den Du zusammenführen möchtest.
3. Ermittle die ID-Nummer des inaktiven Pull Requests. Die ID ist die Ziffernfolge direkt hinter dem Titel des Pull Requests. ![ID-Nummer des Pull Requests](/assets/images/help/pull_requests/pull_request_id_number.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
5. Rufe den Verweis zum Pull Request basierend auf seiner ID-Nummer ab, und erstelle dabei einen neuen Branch.
  ```shell
  $ git fetch origin pull/<em>ID</em>/head:<em>BRANCHNAME</em>
  ```
6. Wechsle zu dem neuen Branch, der auf diesem Pull Request basiert:
  ```shell
  [main] $ git checkout <em>BRANCHNAME</em>
  > Switched to a new branch '<em>BRANCHNAME</em>'
  ```
7. Ab diesem Punkt kannst Du mit diesem Branch machen, was Du möchtest. You can run some local tests, or merge other branches into the branch.
8. Wenn Du fertig bist, kannst Du den neuen Branch nach oben übertragen:
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
9. [Erstelle einen neuen Pull Request](/articles/creating-a-pull-request) mit Deinem neuen Branch.

### Fehler: Pushen einiger Refs fehlgeschlagen

Der Remote-Namespace `refs/pull/` ist *schreibgeschützt*. Wenn Du versuchst, Commits dorthin zu übertragen, wird die folgende Fehlermeldung angezeigt:
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:<em>USERNAME</em>/<em>REPOSITORY</em>.git'
```

{% tip %}

**Tipp:** Wenn Du einen Remote-Verweis entfernst oder umbenennst, wirken sich Aufrufe von `git-remote` nicht auf Deinen lokalen Namespace `refs/pull/origin` aus.

{% endtip %}
