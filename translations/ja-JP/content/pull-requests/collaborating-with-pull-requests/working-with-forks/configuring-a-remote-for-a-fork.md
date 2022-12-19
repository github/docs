---
title: フォークにリモートを設定する
intro: オリジナルのリポジトリと[フォーク内で行った変更を同期する](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)ために、Git の上流リポジトリをポイントするリモートを構成する必要があります。 これにより、オリジナルのリポジトリ内で行った変更をフォークと同期することもできるようになります。
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
ms.openlocfilehash: d474b56a9b1881d9511ccf9e239bb54e26967784
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145139492"
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. フォーク用に現在構成されたリモートリポジトリを一覧表示します。
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```
3. フォークと同期する、新しいリモートの "*上流*" リポジトリを指定します。
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
