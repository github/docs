---
title: Разрешение конфликтов слияния после перемещения Git
intro: 'При выполнении операции `git rebase`, как правило, происходит перемещение фиксаций. Из-за этого может возникать ситуации появления конфликтов объединения. Это означает, что две ваши фиксации изменили одну и ту же строку в одном и том же файле, и Git не знает, какое из этих изменений следует применить.'
redirect_from:
  - /articles/resolving-merge-conflicts-after-a-git-rebase
  - /github/using-git/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/using-git/resolving-merge-conflicts-after-a-git-rebase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Resolve conflicts after rebase
ms.openlocfilehash: 8798282fb804f7b2389d98f69ba2b0e855a2289a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115971'
---
После переупорядочения фиксаций и управления ими с помощью `git rebase`, если возникнет конфликт слияния, Git отправит вам следующее сообщение, напечатанное в терминале:

```shell
error: could not apply fa39187... something to add to patch A

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
```

Здесь Git сообщает, какая фиксация вызывает конфликт (`fa39187`). Предоставляются три варианта выбора:

* Вы можете полностью отменить перемещение, выполнив `git rebase --abort`. Git вернет вас в состояние ветви, каким оно было до вызова `git rebase`.
* Вы можете выполнить `git rebase --skip`, чтобы полностью пропустить фиксацию. Это означает, что никакие изменения, внесенные проблемной фиксацией, не будут включены. Выбор этого варианта — большая редкость.
* Конфликт можно исправить.

Чтобы устранить конфликт, можно выполнить [стандартные процедуры для разрешения конфликтов слияния из командной строки](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line). По завершении необходимо вызвать `git rebase --continue`, чтобы Git продолжил оставшуюся часть перемещения.
