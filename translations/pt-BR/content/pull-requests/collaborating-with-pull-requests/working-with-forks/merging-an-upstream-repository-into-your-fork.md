---
title: Fazer merge de um repositório upstream para sua bifurcação
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
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145128018"
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. Altere o diretório de trabalho atual para seu projeto local.
3. Faça checkout do branch que deseja fazer merge. Normalmente, você fará o merge no branch-padrão.
  ```shell
  $ git checkout <em>DEFAULT_BRANCH_NAME</em>
  ```
4. Faça pull do branch desejado do repositório upstream. Esse método guardará o histórico do commit sem modificações.
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. Resolva os conflitos, caso existam. Para obter mais informações, confira "[Como resolver conflitos de mesclagem](/github/collaborating-with-pull-requests/addressing-merge-conflicts)".
6. Faça commit do merge.
7. Revise as alterações e certifique-se de que são adequadas.
8. Faça push do merge para o seu repositório GitHub.
  ```shell
  $ git push origin <em>DEFAULT_BRANCH_NAME</em>
  ```
