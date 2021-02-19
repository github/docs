---
title: フォークにリモートを設定する
intro: 'オリジナルのリポジトリと [フォーク内の変更を同期する](/articles/syncing-a-fork) ため、Git の上流リポジトリをポイントするリモートを設定する必要があります。 これにより、オリジナルのリポジトリ内で行った変更をフォークと同期することもできるようになります。'
redirect_from:
  - /articles/configuring-a-remote-for-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
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
