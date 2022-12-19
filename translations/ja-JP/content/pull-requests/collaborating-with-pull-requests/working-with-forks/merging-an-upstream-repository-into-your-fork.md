---
title: 上流リポジトリをフォークにマージする
intro: If you don't have push (write) access to an upstream repository, then you can pull commits from that repository into your own fork.
redirect_from:
- /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
- /articles/merging-an-upstream-repository-into-your-fork
- /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
- /github/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Pull requests
shortTitle: Merge an upstream repo
ms.openlocfilehash: 7622e4865efc444a253cbbedf04ede0e47535967
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145139499"
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. ワーキングディレクトリをローカルプロジェクトに変更します。
3. マージ先のブランチをチェックアウトします。 通常、デフォルトブランチにマージします。
  ```shell
  $ git checkout <em>DEFAULT_BRANCH_NAME</em>
  ```
4. 上流リポジトリから目的のブランチをプルします。 この方法では、コミット履歴が修正されずに維持されます。
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. コンフリクトがある場合は解決します。 詳しい情報については、「[マージ コンフリクトへの対処](/github/collaborating-with-pull-requests/addressing-merge-conflicts)」を参照してください。
6. マージをコミットします。
7. 変更を確認し、問題がないことを確かめます。
8. マージを GitHub リポジトリにプッシュします。
  ```shell
  $ git push origin <em>DEFAULT_BRANCH_NAME</em>
  ```
