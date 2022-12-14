---
title: 将上游仓库合并到复刻
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
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145130066"
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. 将当前工作目录更改为您的本地仓库。
3. 检出要合并到其中的分支。 通常，您会合并到默认分支中。
  ```shell
  $ git checkout <em>DEFAULT_BRANCH_NAME</em>
  ```
4. 从上游仓库拉取所需的分支。 此方法将保留提交历史记录而不做修改。
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. 如有冲突，请解决。 有关详细信息，请参阅“[解决合并冲突](/github/collaborating-with-pull-requests/addressing-merge-conflicts)”。
6. 提交合并。
7. 检查更改，确认对更改满意。
8. 将合并推送到 GitHub 仓库。
  ```shell
  $ git push origin <em>DEFAULT_BRANCH_NAME</em>
  ```
