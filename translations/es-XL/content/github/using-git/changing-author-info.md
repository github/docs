---
title: Cambiar información del autor
redirect_from:
  - /change-author-info/
  - /changing-author-info/
  - /articles/changing-author-info
intro: 'Para cambiar el nombre y la dirección de correo electrónico registrados en las confirmaciones existentes, debes volver a escribir la historia completa de tu repositorio de Git.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**Advertencia**; Esta acción es destructiva para el historial de tu repositorio. Si estás colaborando con otros en un repositorio, será considerado como una mala práctica para volver a escribir el historial publicado. Solo deberías hacerlo en caso de emergencia.

{% endwarning %}

### Cambiar el historial de Git de tu repositorio mediante un script

Hemos creado un script que cambiará las confirmaciones que tenía previamente la dirección de correo electrónico antigua en sus campos de autor o persona que confirma el cambio para usar el nombre y la dirección de correo electrónico correctos.

{% tip %}

**Nota**: Al ejecutar este script se vuelve a escribir el historial para todos los colaboradores del repositorio. Luego de completar estos pasos, cualquier persona con bifurcaciones o clones debe extraer del historial escrito y la rebase cualquier cambio local que se encuentre en el historial escrito.

{% endtip %}

Antes de ejecutar este script, necesitarás:

* La dirección de correo electrónico antigua que aparece en los campos autor/persona que confirma el cambio que deseas cambiar
* El nombre y la dirección de correo electrónico correctos a los que deseas atribuir esas confirmaciones

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crear un clone nuevo, básico de tu repositorio:
  ```shell
  git clone --bare https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
  cd <em>repo</em>.git
  ```
3. Copiar y pegar el script, reemplazando las siguientes variables en función de la información que recopilaste:
    * `OLD_EMAIL`
    * `CORRECT_NAME`
    * `CORRECT_EMAIL`

  ```shell
  #!/bin/sh

  git filter-branch --env-filter '

  OLD_EMAIL="your-old-email@example.com"
  CORRECT_NAME="Your Correct Name"
  CORRECT_EMAIL="your-correct-email@example.com"

  if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
  then
  export GIT_COMMITTER_NAME="$CORRECT_NAME"
  export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
  fi
  if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
  then
  export GIT_AUTHOR_NAME="$CORRECT_NAME"
  export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
  fi
  ' --tag-name-filter cat -- --branches --tags
  ```

4. Presionar **Enter** (Intro) para ejecutar el script.
5. Revisar el nuevo historial de Git para detectar errores.
6. Subir tu historial corregido a {% data variables.product.product_name %}:
  ```shell
  git push --force --tags origin 'refs/heads/*'
  ```
7. Limpiar el clon temporal:
  ```shell
  cd ..
  rm -rf <em>repo</em>.git
  ```
