---
title: フォークにリモートを設定する
intro: 'You must configure a remote that points to the upstream repository in Git to [sync changes you make in a fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) with the original repository. これにより、オリジナルのリポジトリ内で行った変更をフォークと同期することもできるようになります。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/configuring-a-remote-for-a-fork
  - /articles/configuring-a-remote-for-a-fork
  - /github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Configure a remote
---

{% data reusables.command_line.open_the_multi_os_terminal %}
2. フォーク用に現在構成されたリモートリポジトリを一覧表示します。
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```
3. フォークと同期する、新しいリモート*上流*リポジトリを指定します。
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git
  ```
4. フォーク用に指定した新しい上流リポジトリを検証します。
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```
