---
title: Cambiar un mensaje de confirmación
redirect_from:
  - /articles/can-i-delete-a-commit-message/
  - /articles/changing-a-commit-message
intro: 'Si un mensaje de confirmación contiene información poco clara, incorrecta o confidencial, puedes modificarlo localmente y subir una nueva confirmación con un nuevo mensaje para {% data variables.product.product_name %}. También puedes cambiar un mensaje de confirmación para agregar la información faltante.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Volver a escribir el mensaje de confirmación más reciente

Puedes cambiar el mensaje de confirmación más reciente usando el comando `git commit --amend`.

En Git, el texto del mensaje de confirmación es parte de la confirmación. Cambiar el mensaje de la confirmación cambiará la commit ID-- es decir, el checksum de SHA1 que designa la confirmación. Efectivamente, estás creando una nueva confirmación que reemplaza a la anterior.

### La confirmación no se ha subido en línea

Si la confirmación solo existe en tu repositorio local y no se ha subido a {% data variables.product.product_location %}, puedes modificar el mensaje de confirmación con el comando `git commit --amend`.

1. En la línea de comando, desplázate hasta el repositorio que contiene la confirmación que deseas modificar.
2. Escribe `git commit --amend` y presiona **Enter** (Intro).
3. En tu editor de texto, edita el mensaje de confirmación y guarda la confirmación.
    - Puedes agregar un coautor al agregar una introducción a la confirmación. Para obtener más información, consulta "[Crear una confirmación con múltiples autores](/articles/creating-a-commit-with-multiple-authors)".
{% if currentVersion == "free-pro-team@latest" %}
    - Puedes crear confirmaciones en nombre de tu organización agregando una introducción al mensaje de la confirmación. Para obtener más información, consulta "[Crear una confirmación en nombre de una organización](/articles/creating-a-commit-on-behalf-of-an-organization)"
{% endif %}

El nuevo mensaje y la confirmación aparecerán en {% data variables.product.product_location %} la próxima vez que subas un cambio.

{% tip %}

Puedes cambiar el editor de texto predeterminado para Git si cambias el parámetro `core.editor`. Para obtener más información, consulta la sección "[Configuración Básica del Cliente](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)" en el manual de Git.

{% endtip %}

### Medificar mensajes de confirmación antiguos o múltiples

Si ya subiste la confirmación a {% data variables.product.product_location %}, tendrás que subir forzadamente una confirmación con un mensaje modificado.

{% warning %}

Desalentamos enfáticamente que se realicen subidas forzadas, dado que esto cambia el historial de tu repositorio. Si haces subidas forzadas, las personas que ya hayan clonado tu repositorio tendrán que arreglar su historial local manualmente. Para obtener más información, consulta la sección "[Recuperarse de un rebase ascendente](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)" en el manual de Git.

{% endwarning %}

**Cambiar el mensaje de la confirmaciòn subida màs recientemente**

1. Sigue los [pasos anteriores](/articles/changing-a-commit-message#commit-has-not-been-pushed-online) para modificar el mensaje de confirmación.
2. Usa el comando `push --force` para realizar un empuje forzado sobre la confirmación anterior.
  ```shell
  $ git push --force <em>example-branch</em>
  ```

**Cambiar el mensaje de los mensajes de confirmaciòn mùtilples o del màs antiguo**

Si necesitas modificar el mensaje de varias confirmaciones o de una confirmación antigua, puedes utilizar un rebase interactivo y luego hacer una subida forzada para cambiar el historial de la confirmación.

1. En la línea de comando, desplázate hasta el repositorio que contiene la confirmación que deseas modificar.
2. Usa el comando `git rebase -i HEAD~n` para mostrar una lista de las últimas confirmaciones `n` en tu editor de texto predeterminado.

    ```shell
    # Displays a list of the last 3 commits on the current branch
    $ git rebase -i HEAD~3
    ```
    La lista se verá parecida a la siguiente:

    ```shell
    pick e499d89 Delete CNAME
    pick 0c39034 Better README
    pick f7fde4a Change the commit message but push the same commit.

    # Rebase 9fdb3bd..f7fde4a sobre 9fdb3bd
    #
    # Comandos:
    # p, escoger = usar confirmación
    # r, volver a redactar = usar confirmación, pero editar el mensaje de confirmación
    # e, editar = usar confirmación, pero detener la modificación
    # s, machacar = usar confirmación, pero fusionarla con la confirmación anterior
    # f, arreglar = como "machacar", pero descartar el mensaje de registro de confirmación
    # x, exec = ejecutar comando (el resto de la línea) usando shell
    #
    # Estas líneas pueden reordenarse, pero se ejecutan desde arriba hacia abajo.
    #
    # Si eliminas una línea aquí ESA CONFIRMACIÓN SE PERDERÁ.
    # Sin embargo, si eliminas todo, la rebase será interrumpida.
    #
    # Note that empty commits are commented out
    ```
3. Reemplaza `pick` (escoger) por `reword` (volver a redactar) antes de cada mensaje de confirmación que desees cambiar.
  ```shell
  pick e499d89 Delete CNAME
  reword 0c39034 Better README
  reword f7fde4a Change the commit message but push the same commit.
  ```
4. Guardar y cerrar el archivo con la lista de confirmaciones.
5. En cada archivo de confirmación resultante, escribe el nuevo mensaje de confirmación, guarda el archivo, y ciérralo.
6. Cuando estès listo para subir tus cambios a GitHub, utiliza el comando push --force para subir el cambio forzadamente sobre la confirmaciòn antigua.
```shell
$ git push --force <em>example-branch</em>
```

Para obtener más información sobre el rebase interactivo, consulta la sección "[Modo interactivo](https://git-scm.com/docs/git-rebase#_interactive_mode)" en el manual de Git.

{% tip %}

Como se mencionó anteriormente, el modificar el mensaje de confirmación dará como resultado una confirmación nueva con una ID nueva. Sin embargo, en este caso, cada confirmación que siga a la confirmación modificada también obtendrá una ID nueva, ya que cada confirmación contiene también la id de su padre.

{% endtip %}

{% warning %}

Si incluiste información sensible en un mensaje de confirmación, el subir dicha confirmación forzadamente con una confirmación modificada no eliminará la confirmación original de {% data variables.product.product_name %}. La confirmación anterior no será parte del clon siguiente; sin embargo, es posible que siga almacenada en el caché de {% data variables.product.product_name %} y que se pueda acceder a ella a través de la ID de la confirmación. Debes contactar a {% data variables.contact.contact_support %} con la ID de confirmación anterior para que la purguen del repositorio remoto.

{% endwarning %}

### Further reading

* "[Firmar confirmaciones](/articles/signing-commits)"
