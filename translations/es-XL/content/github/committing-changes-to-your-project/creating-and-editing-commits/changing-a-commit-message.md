---
title: Cambiar un mensaje de confirmación
redirect_from:
  - /articles/can-i-delete-a-commit-message/
  - /articles/changing-a-commit-message
  - /github/committing-changes-to-your-project/changing-a-commit-message
intro: 'Si un mensaje de confirmación contiene información poco clara, incorrecta o confidencial, puedes modificarlo localmente y subir una nueva confirmación con un nuevo mensaje para {% data variables.product.product_name %}. También puedes cambiar un mensaje de confirmación para agregar la información faltante.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
### Volver a escribir el mensaje de confirmación más reciente

Puedes cambiar el mensaje de confirmación más reciente usando el comando `git commit --amend`.

{% warning %}

En Git, el texto del mensaje de confirmación es parte de la confirmación. Si cambias el mensaje de confirmación cambiará commit ID--i.e., la suma de comprobación SHA1 que designa la confirmación. Efectivamente, estás creando una nueva confirmación que reemplaza a la anterior.

{% endwarning %}

#### La confirmación no ha sido subida en línea

Si la confirmación solo existe en tu repositorio local y no ha sido subida a {% data variables.product.product_location %} puedes modificar el mensaje de confirmación con el comando `git commit --amend`.

1. En la línea de comando, desplázate hasta el repositorio que contiene la confirmación que deseas modificar.
2. Escribe `git commit --amend` y presiona **Enter** (Intro).
3. En tu editor de texto, edita el mensaje de confirmación y guarda la confirmación.
    - Puedes agregar un coautor al agregar una introducción a la confirmación. Para obtener más información, consulta "[Crear una confirmación con múltiples autores](/articles/creating-a-commit-with-multiple-authors)".
{% if currentVersion == "free-pro-team@latest" %}
    - Puedes crear confirmaciones en nombre de tu organización agregando una introducción al mensaje de la confirmación. Para obtener más información, consulta "[Crear una confirmación en nombre de una organización](/articles/creating-a-commit-on-behalf-of-an-organization)"
{% endif %}

El nuevo mensaje y la confirmación aparecerán en {% data variables.product.product_location %} la próxima vez que subas un cambio.

{% tip %}

Puedes cambiar el editor de texto predeterminado para Git al cambiar el parámetro `core.editor`. Para más información, consulta "[Basic Client Configuration](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)" en el manual de Git.

{% endtip %}

#### Modificar mensajes de confirmación múltiples o más antiguos

Si ya has subido la confirmación a {% data variables.product.product_location %}, deberás realizar un empuje forzado de la confirmación con un mensaje modificado.

{% warning %}

Desalentamos enfáticamente el empuje forzado, dado que cambia el historial de tu repositorio. Si realizas un empuje forzado, las personas que tienen clonado tu repositorio deberán arreglar manualmente el historial local. Para obtener más información, consulta "[Recuperarse de una rebase ascendente](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)" en el manual de Git.

{% endwarning %}

**Modificar el mensaje de la confirmación subida más recientemente**

1. Sigue los [pasos anteriores](/articles/changing-a-commit-message#commit-has-not-been-pushed-online) para modificar el mensaje de confirmación.
2. Usa el comando `push --force` para realizar un empuje forzado sobre la confirmación anterior.
  ```shell
  $ git push --force <em>example-branch</em>
  ```

**Modificar el mensaje de confirmación múltiple o más antiguo**

Si necesitas modificar el mensaje para múltiples confirmaciones o una confirmación más antigua, puedes usar la rebase interactiva y luego forzar el empuje para cambiar el historial de confirmación.

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
6. Realizar un empuje forzado de las confirmaciones modificadas.
  ```shell
  $ git push --force
  ```

Para más información sobre la rebase interactiva, consulta [Interactive mode](https://git-scm.com/docs/git-rebase#_interactive_mode)" (Modo interactivo) en el manual de Git.

{% tip %}

Tal como mencionamos anteriormente, si modificas el mensaje de confirmación se producirá una confirmación nueva con una ID nueva. Sin embargo, en este caso, cada confirmación posterior a la confirmación modificada también arrojará una ID nueva porque cada confirmación también contiene la ID de su padre.

{% endtip %}

{% warning %}

Si incluiste información confidencial en un mensaje de confirmación, el empuje forzado de la confirmación con una confirmación modificada no eliminará la confirmación original de {% data variables.product.product_name %}. La confirmación anterior no será parte de una clonación posterior; sin embargo, es posible que siga almacenada en la memoria caché de {% data variables.product.product_name %} y que esté accesible mediante la ID de confirmación. Debes ponerte en contacto con {% data variables.contact.contact_support %} con la ID de confirmación antigua para purgarla del repositorio remoto.

{% endwarning %}

### Leer más

* "[Firmar confirmaciones](/articles/signing-commits)"
