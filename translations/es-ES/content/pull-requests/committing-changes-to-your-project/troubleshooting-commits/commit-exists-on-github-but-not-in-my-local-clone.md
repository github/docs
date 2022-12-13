---
title: La confirmación existe en GitHub pero no en mi clon local
intro: 'Algunas veces una confirmación estará visible en {% data variables.product.product_name %}, pero no existirá en tu clon local del repositorio.'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/troubleshooting-commits/commit-exists-on-github-but-not-in-my-local-clone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit missing in local clone
ms.openlocfilehash: 9374b17a111bc3f88bf81d60de97e354c0bcf8ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145137107'
---
Cuando se usa `git show` para ver una confirmación específica en la línea de comandos, es posible que reciba un error irrecuperable.

Por ejemplo, puede recibir un error `bad object` localmente:

```shell
$ git show 1095ff3d0153115e75b7bca2c09e5136845b5592
> fatal: bad object 1095ff3d0153115e75b7bca2c09e5136845b5592
```

Sin embargo, cuando ves la confirmación en {% data variables.product.product_location %}, podrás verla sin problemas:

`github.com/$account/$repository/commit/1095ff3d0153115e75b7bca2c09e5136845b5592`

Existen varias explicaciones posibles:

* El repositorio local está desactualizado.
* La rama que contiene la contiene la confirmación fue eliminada, por lo que ya no se hace referencia a la confirmación.
* Alguien realizó un empuje forzado sobre la confirmación.

## El repositorio local está desactualizado

Es posible que tu repositorio local aún no esté confirmado. Para obtener información del repositorio remoto al clon local, use `git fetch`:

```shell
$ git fetch <em>remote</em>
```

Esto copia de forma segura la información del repositorio remoto en el clon local sin realizar ningún cambio en los archivos que ha extraído del repositorio. Puede usar `git fetch upstream` para obtener información de un repositorio que haya bifurcado, o bien `git fetch origin` para obtener información de un repositorio que solo ha clonado.

{% tip %}

**Sugerencia**: Para más información, lea [cómo administrar repositorios remotos y capturar datos](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) en el libro [Pro Git](https://git-scm.com/book).

{% endtip %}

## La rama que contenía la confirmación fue eliminada

Si un colaborador del repositorio ha eliminado la rama que contiene la confirmación o ha realizado una inserción forzada en la rama, es posible que la confirmación que falta haya quedado huérfana (es decir, no es accesible desde ninguna referencia) y, por tanto, no se capturará en el clon local.

Afortunadamente, si un colaborador tiene un clon local del repositorio con la confirmación que falta, puede volver a insertarla en {% data variables.product.product_name %}.  Tendrá que asegurarse de que a la confirmación le haga referencia una rama local y que, después, se inserte como una rama nueva en {% data variables.product.product_name %}.

Imagine que el usuario todavía tiene una rama local (por ejemplo, `B`) que contiene la confirmación.  Esto podría realizar el seguimiento de la rama que se ha insertado a la fuerza o se ha eliminado, y que simplemente todavía no han actualizado.  Para conservar la confirmación, pueden insertar esa rama local en una rama nueva (por ejemplo, `recover-B`) en {% data variables.product.product_name %}.  En este ejemplo, imagine que hay un repositorio remoto denominado `upstream` desde el que tienen acceso de inserción a `github.com/$account/$repository`.

La otra persona ejecuta:

```shell
$ git branch recover-B B
# Create a new local branch referencing the commit
$ git push upstream B:recover-B
# Push local B to new upstream branch, creating new reference to commit
```

Ahora, *puede* ejecutar:

```shell
$ git fetch upstream recover-B
# Fetch commit into your local repository.
```

## Evitar empujes forzados

Evita los empujes forzados a un repositorio a menos que sea absolutamente necesario. Esto es especialmente cierto si más de una persona puede subir al repositorio. Si alguien sube información forzadamente a un repositorio, esta subida forzada podría sobrescribir confirmaciones en las que otras personas basaron su trabajo. El subir información forzadamente cambia el historial del repositorio y puede corromper las solicitudes de cambios.

## Información adicional

- ["Trabajo con repositorios remotos" en el libro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
- ["Recuperación de datos" en el libro _Pro Git_](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery)
