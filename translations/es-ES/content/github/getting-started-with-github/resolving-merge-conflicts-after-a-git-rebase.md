---
title: Resolver conflictos de fusión después de una rebase de Git
intro: 'Cuando realizas una operación `git rebase`, normalmente mueves confirmaciones de un lado a otro. Por este motivo, puedes generar una situación en la que se introduzca un conflicto de fusión. Esto implica que dos de tus confirmaciones modificaron la misma línea del mismo archivo, y Git no sabe qué cambio aplicar.'
redirect_from:
  - /articles/resolving-merge-conflicts-after-a-git-rebase
  - /github/using-git/resolving-merge-conflicts-after-a-git-rebase
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


Después de reordenar y manipular confirmaciones utilizando `git rebase`, si ocurre un conflicto de fusión, Git te lo informará con el siguiente mensaje impreso en el terminal:

```shell
error: no se pudo aplicar fa39187... algo para agregar al parte A

Cuando hayas resuelto este problema, ejecuta "git rebase --continue".
Si prefieres saltear este parche, ejecuta "git rebase --skip".
Para revisar la rama original y detener el proceso de rebase, ejecuta "git rebase --abort".
No se pudo aplicar fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Cambia el archivo falso
```

Aquí Git te está diciendo qué confirmación está causando el conflicto (`fa39187`). Se te ofrecen tres opciones:

* Puedes ejecutar `git rebase --abort` para deshacer por completo la rebase. Git te regresará al estado de tu rama tal como estaba antes de haber pedido `git rebase`.
* Puedes ejecutar `git rebase --skip` para saltear por completo la confirmación. Esto significa que no se incluirá ninguno de los cambios introducidos por la confirmación problemática. Es muy poco común que elijas esta opción.
* Puedes corregir el conflicto.

Para corregir el conflicto, puedes seguir [los procedimientos estándar para resolver conflictos de fusión desde la línea de comando](/articles/resolving-a-merge-conflict-using-the-command-line). Cuando termines, tendrás que pedir `git rebase --continue` para que Git continúe procesando el resto de la rebase.
