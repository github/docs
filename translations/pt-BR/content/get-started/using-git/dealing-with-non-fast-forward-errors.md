---
title: Lidar com erros non-fast-forward
intro: 'Às vezes, o Git não pode fazer sua alteração em um repositório remote sem perder os commits. Quando isso acontece, seu push é recusado.'
redirect_from:
  - /articles/dealing-with-non-fast-forward-errors
  - /github/using-git/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/using-git/dealing-with-non-fast-forward-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Non-fast-forward error
ms.openlocfilehash: 59e1957bf2376462c1267527b1bc29ed9de49db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145101341'
---
Se outra pessoa tiver feito push no mesmo branch que você, o Git não poderá fazer push das alterações:

```shell
$ git push origin main
> To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
>  ! [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

Isso pode ser corrigido [buscando e mesclando](/github/getting-started-with-github/getting-changes-from-a-remote-repository) as alterações feitas na ramificação remota com as alterações feitas localmente:

```shell
$ git fetch origin
# Fetches updates made to an online repository
$ git merge origin <em>YOUR_BRANCH_NAME</em>
# Merges updates made online with your local work
```

Ou você pode usar `git pull` para executar ambos os comandos ao mesmo tempo:

```shell
$ git pull origin <em>YOUR_BRANCH_NAME</em>
# Grabs online updates and merges them with your local work
```
