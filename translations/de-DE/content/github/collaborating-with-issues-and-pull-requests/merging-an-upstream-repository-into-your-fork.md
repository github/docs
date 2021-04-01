---
title: Ein vorgelagertes Repository in Deinen Fork zusammenführen
intro: 'Wenn Du keinen Push-Zugriff (Schreibzugriff) auf ein vorgelagertes Repository hast, kannst Du Commits von diesem Repository in Deine eigene Fork abrufen.'
redirect_from:
  - /articles/merging-an-upstream-repository-into-your-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Wechsle Dein aktuelles Arbeitsverzeichnis in das lokale Projekt.
3. Checke den Branch aus, in den Du zusammenführen möchtest. Usually, you will merge into the default branch.
  ```shell
  $ git checkout <em>DEFAULT_BRANCH_NAME</em>
  ```
4. Rufe den gewünschten Branch aus dem vorgelagerten Repository ab. Auf diese Weise wird der Commit-Verlauf unverändert beibehalten.
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. Wenn Konflikte auftreten, behebe sie. Weitere Informationen findest Du unter „[Mergekonflikte beheben](/articles/addressing-merge-conflicts)“.
6. Gib den Merge frei.
7. Überprüfe die Änderungen, und stelle sicher, dass alles in Ordnung ist.
8. Übertrage den Merge in Dein GitHub-Repository.
  ```shell
  $ git push origin <em>DEFAULT_BRANCH_NAME</em>
  ```
