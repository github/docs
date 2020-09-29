---
title: 'Änderungen an einen Pull-Request-Branch freigeben, der von einem Fork erstellt wurde'
intro: 'Du kannst Änderungen an einen Pull-Request-Branch freigeben, der von einem Fork Deines Repositorys erstellt wurde, wenn die Erlaubnis des Pull-Request-Erstellers vorliegt.'
redirect_from:
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Commits sind nur an Pull-Request-Branches möglich, auf die Folgendes zutrifft:
- sie sind in einem Repository geöffnet, auf das Du Push-Zugriff hast, und wurden von einem Fork dieses Repositorys erstellt
- sie sind auf einer benutzereigenen Fork
- sie haben die Berechtigung des Pull-Request-Erstellers erhalten
- sie haben keine [Branch-Einschränkungen](/articles/about-branch-restrictions), die Dich am freigeben hindern

Nur der Benutzer, der den Pull Request erstellt hat, kann Dir die Erlaubnis erteilen, Commits zu seinem Branch zu übertragen. Weitere Informationen findest Du unter „[Änderungen an einem Pull-Request-Branch zulassen, der von einem Fork erstellt wurde](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork).“

{% note %}

**Hinweis:** Du kannst auch Commits an einen Pull-Request-Branch von einem Fork Deines Repositorys über {% data variables.product.product_location %} machen, indem Du Deine eigene Kopie (oder Fork) des Forks Deines Repositorys erstellst und die Änderungen an denselben Head-Branch freigibst, auf dem die ursprünglichen Pull-Request-Änderungen vorgenommen wurden. Allgemeine Anleitungen findest Du unter „[Einen Pull Request von einem Fork erstellen](/articles/creating-a-pull-request-from-a-fork).“

{% endnote %}

1. Navigiere auf {% data variables.product.product_name %} zur Hauptseite des Forks (oder der Kopie Deines Repositorys), auf dem der Pull-Request-Branch erstellt wurde.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
 {% tip %}

 **Tipp:** Wenn Du den Fork lieber mit {% data variables.product.prodname_desktop %} klonen möchtest, findest Du weitere Informationen unter „[Ein Repository zum {% data variables.product.prodname_desktop %} klonen](/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop).“

 {% endtip %}
4. Ändern Sie das aktuelle Arbeitsverzeichnis in den Speicherort, zu dem Sie das geklonte Verzeichnis herunterladen möchten.
  ```shell
  $ cd open-source-projects
  ```
5. Geben Sie `git clone` ein, und fügen Sie dann die in Schritt 3 kopierte URL ein.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  ```
6. Drücke die **Eingabetaste**. Der lokale Klon wird erstellt.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  > Cloning into `FORK-OF-THE-REPOSITORY`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
 {% tip %}

 **Tipp:** Die Fehlermeldung „fatal: destination path 'REPOSITORY-NAME' already exists and is not an empty directory“ bedeutet, dass Dein aktuelles Arbeitsverzeichnis bereits ein Repository mit demselben Namen enthält. Um den Fehler zu beheben, müssen Sie den Fork in ein anderes Verzeichnis klonen.

 {% endtip %}
7. Navigieren Sie in Ihr neu geklontes Repository.
  ```shell
  $ cd <em>FORK-OF-THE-REPOSITORY</em>
  ```
7. Wechseln Sie die Branches zu dem Vergleichsbranch des Pull Requests, auf dem die ursprünglichen Änderungen vorgenommen wurden. Wenn Sie zum ursprünglichen Pull Request navigieren, sehen Sie den Vergleichsbranch oben im Pull Request. ![Beispiel zum Vergleichsbranch](/assets/images/help/pull_requests/compare-branch-example.png) In diesem Beispiel ist der Vergleichs-Branch `test-branch`:
  ```shell
  $ git checkout <em>test-branch</em>
  ```

 {% tip %}

 **Tipp:**Weitere Informationen zu Pull-Request-Branches samt Beispielen findest Du unter „[Einen Pull Request erstellen](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository).“

 {% endtip %}
8. Ab diesem Punkt kannst Du mit diesem Branch machen, was Du möchtest. You can push new commits to it, run some local tests, or merge other branches into the branch. Nehmen Sie nach Bedarf Änderungen vor.
9. Wenn Sie Ihre Änderungen an den Head-Branch des Pull-Requests committet haben, können Sie Ihre Änderungen direkt zum ursprünglichen Pull Request pushen. In diesem Beispiel ist der Head-Branch `test-branch`:
  ```shell
  $ git push origin <em>test-branch</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>.git
  > 12da2e9..250e946  <em>test-branch</em> -> <em>test-branch</em>
  ```

Deine neuen Commits werden auf dem ursprünglichen Pull Request auf {% data variables.product.product_location %} entsprechend wiedergegeben.

### Weiterführende Informationen

- „[Informationen zu Forks](/articles/about-forks)“
