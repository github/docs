---
title: Resolver conflictos de fusión después de una rebase de Git
intro: 'Cuando realizas una operación `git rebase`, normalmente mueves confirmaciones de un lado a otro. Por este motivo, puedes generar una situación en la que se introduzca un conflicto de fusión. Esto implica que dos de tus confirmaciones modificaron la misma línea del mismo archivo, y Git no sabe qué cambio aplicar.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115970'
---
Después de reordenar y manipular las confirmaciones mediante `git rebase`, si se produce un conflicto de confirmación, Git se lo indicará con el siguiente mensaje impreso en el terminal:

```shell
error: could not apply fa39187... something to add to patch A

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
```

Aquí, Git le indica qué confirmación causa el conflicto (`fa39187`). Se te ofrecen tres opciones:

* Puede ejecutar `git rebase --abort` para deshacer completamente la fusión mediante cambio de base. Git le devolverá el estado de la rama tal y como estaba antes de llamar a `git rebase`.
* Puede ejecutar `git rebase --skip` para omitir completamente la confirmación. Esto significa que no se incluirá ninguno de los cambios introducidos por la confirmación problemática. Es muy poco común que elijas esta opción.
* Puedes corregir el conflicto.

Para corregir el conflicto, puede seguir [los procedimientos estándar de resolución de conflictos de combinación desde la línea de comandos](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line). Cuando haya terminado, tendrá que llamar a `git rebase --continue` para que Git siga procesando el resto de la fusión mediante cambio de base.
