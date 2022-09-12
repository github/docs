---
title: Cambiar un mensaje de confirmación
redirect_from:
  - /articles/can-i-delete-a-commit-message
  - /articles/changing-a-commit-message
  - /github/committing-changes-to-your-project/changing-a-commit-message
  - /github/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message
intro: 'Si un mensaje de confirmación contiene información poco clara, incorrecta o confidencial, puedes modificarlo localmente y subir una nueva confirmación con un nuevo mensaje para {% data variables.product.product_name %}. También puedes cambiar un mensaje de confirmación para agregar la información faltante.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fa4966da0fe443e6635b43fc9b3b11108d57cf6e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145137149'
---
## Volver a escribir el mensaje de confirmación más reciente

Puede cambiar el mensaje de confirmación más reciente mediante el comando `git commit --amend`.

En Git, el texto del mensaje de confirmación es parte de la confirmación. Cambiar el mensaje de la confirmación cambiará la commit ID-- es decir, el checksum de SHA1 que designa la confirmación. Efectivamente, estás creando una nueva confirmación que reemplaza a la anterior.

## La confirmación no se ha subido en línea

Si la confirmación solo existe en el repositorio local y no se ha insertado en {% data variables.product.product_location %}, puede modificar el mensaje de confirmación con el comando `git commit --amend`.

1. En la línea de comando, desplázate hasta el repositorio que contiene la confirmación que deseas modificar.
2. Escriba `git commit --amend` y presione **Entrar**.
3. En tu editor de texto, edita el mensaje de confirmación y guarda la confirmación.
    - Puedes agregar un coautor al agregar una introducción a la confirmación. Para más información, vea "[Creación de una confirmación con varios autores](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)".
{% ifversion fpt or ghec %}
    - Puedes crear confirmaciones en nombre de tu organización agregando una introducción al mensaje de la confirmación. Para más información, vea "[Creación de una confirmación en nombre de una organización](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)". {% endif %}

El nuevo mensaje y la confirmación aparecerán en {% data variables.product.product_location %} la próxima vez que subas un cambio.

{% tip %}

Puede cambiar el editor de texto predeterminado para Git si modifica el valor `core.editor`. Para más información, vea "[Configuración básica del cliente](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)" en el manual de Git.

{% endtip %}

## Medificar mensajes de confirmación antiguos o múltiples

Si ya subiste la confirmación a {% data variables.product.product_location %}, tendrás que subir forzadamente una confirmación con un mensaje modificado.

{% warning %}

Desalentamos enfáticamente que se realicen subidas forzadas, dado que esto cambia el historial de tu repositorio. Si haces subidas forzadas, las personas que ya hayan clonado tu repositorio tendrán que arreglar su historial local manualmente. Para más información, vea "[Recuperación de la fusión mediante cambio de base ascendente](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)" en el manual de Git.

{% endwarning %}

**Cambio del mensaje de la confirmación insertada más recientemente**

1. Siga los [pasos anteriores](/articles/changing-a-commit-message#commit-has-not-been-pushed-online) para modificar el mensaje de confirmación.
2. Use el comando `push --force-with-lease` para forzar la inserción sobre la confirmación anterior.
  ```shell
  $ git push --force-with-lease origin <em>example-branch</em>
  ```

**Cambio del mensaje de mensajes anteriores o varios mensajes de confirmación**

Si necesitas modificar el mensaje de varias confirmaciones o de una confirmación antigua, puedes utilizar un rebase interactivo y luego hacer una subida forzada para cambiar el historial de la confirmación.

1. En la línea de comando, desplázate hasta el repositorio que contiene la confirmación que deseas modificar.
2. Use el comando `git rebase -i HEAD~n` para mostrar una lista de las últimas confirmaciones `n` en el editor de texto predeterminado.

    ```shell
    # Displays a list of the last 3 commits on the current branch
    $ git rebase -i HEAD~3
    ```
    La lista se verá parecida a la siguiente:

    ```shell
    pick e499d89 Delete CNAME
    pick 0c39034 Better README
    pick f7fde4a Change the commit message but push the same commit.

    # Rebase 9fdb3bd..f7fde4a onto 9fdb3bd
    #
    # Commands:
    # p, pick = use commit
    # r, reword = use commit, but edit the commit message
    # e, edit = use commit, but stop for amending
    # s, squash = use commit, but meld into previous commit
    # f, fixup = like "squash", but discard this commit's log message
    # x, exec = run command (the rest of the line) using shell
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #
    # Note that empty commits are commented out
    ```
3. Reemplace `pick` por `reword` antes de cada mensaje de confirmación que quiera cambiar.
  ```shell
  pick e499d89 Delete CNAME
  reword 0c39034 Better README
  reword f7fde4a Change the commit message but push the same commit.
  ```
4. Guardar y cerrar el archivo con la lista de confirmaciones.
5. En cada archivo de confirmación resultante, escribe el nuevo mensaje de confirmación, guarda el archivo, y ciérralo.
6. Cuando estès listo para subir tus cambios a GitHub, utiliza el comando push --force para subir el cambio forzadamente sobre la confirmaciòn antigua.
```shell
$ git push --force origin <em>example-branch</em>
```

Para más información sobre la fusión mediante cambio de base interactiva, vea "[Modo interactivo](https://git-scm.com/docs/git-rebase#_interactive_mode)" en el manual de Git.

{% tip %}

Como se mencionó anteriormente, el modificar el mensaje de confirmación dará como resultado una confirmación nueva con una ID nueva. Sin embargo, en este caso, cada confirmación que siga a la confirmación modificada también obtendrá una ID nueva, ya que cada confirmación contiene también la id de su padre.

{% endtip %}

{% warning %}

Si incluiste información sensible en un mensaje de confirmación, el subir dicha confirmación forzadamente con una confirmación modificada no eliminará la confirmación original de {% data variables.product.product_name %}. La confirmación anterior no será parte del clon siguiente; sin embargo, es posible que siga almacenada en el caché de {% data variables.product.product_name %} y que se pueda acceder a ella a través de la ID de la confirmación. Debes contactar a {% data variables.contact.contact_support %} con la ID de confirmación anterior para que la purguen del repositorio remoto.

{% endwarning %}

## Información adicional

* "[Firma de confirmaciones](/articles/signing-commits)"
