---
title: Ein Remote-Repository für einen Fork konfigurieren
intro: 'Du musst ein Remote-Repository konfigurieren, das auf das vorgelagerte Repository in Git verweist, um [die Synchronisation der in einem Fork vorgenommenen Änderungen](/articles/syncing-a-fork) mit dem ursprünglichen Repository zu ermöglichen. Damit kannst Du auch Änderungen im ursprünglichen Repository mit dem Fork synchronisieren.'
redirect_from:
  - /articles/configuring-a-remote-for-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Liste das aktuell konfigurierte Remote-Repository für Deine Fork auf.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```
3. Lege ein neues *vorgelagertes* Remote-Repository fest, das mit dem Fork synchronisiert wird.
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git
  ```
4. Überprüfe das neue vorgelagerte Repository, das Du für Deinen Fork angegeben hast.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```
