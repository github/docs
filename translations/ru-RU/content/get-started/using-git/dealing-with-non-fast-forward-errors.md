---
title: Обработка ошибок не быстрого перемещения вперед
intro: Иногда Git не может внести изменения в удаленный репозиторий без потери фиксаций. В этом случае ваша передача данных будет отклонена.
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
ms.openlocfilehash: 45405455b20d71ca01d61f23d949be4ec5964356
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009030'
---
Если другой пользователь отправил изменения в ту же ветвь, что и вы, GIT не сможет отправить ваши изменения:

```shell
$ git push origin main
> To https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
>  ! [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

Это можно исправить путем [извлечения и слияния](/github/getting-started-with-github/getting-changes-from-a-remote-repository) изменений, внесенных в удаленную ветвь, с локальными изменениями:

```shell
$ git fetch origin
# Fetches updates made to an online repository
$ git merge origin YOUR_BRANCH_NAME
# Merges updates made online with your local work
```

Кроме того, можно просто использовать `git pull` для одновременного выполнения обеих команд:

```shell
$ git pull origin YOUR_BRANCH_NAME
# Grabs online updates and merges them with your local work
```
