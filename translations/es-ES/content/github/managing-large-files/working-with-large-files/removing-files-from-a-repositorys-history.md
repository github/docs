---
title: Eliminar archivos del historial de un repositorio
intro: 'Para eliminar un archivo grande de tu repositorio, debes eliminarlo por completo de tu repositorio local y de {% data variables.product.product_location %}.'
redirect_from:
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% warning %}

**Advertencia**: Estos procedimientos eliminarán archivos de manera permanente del repositorio de tu computadora y de {% data variables.product.product_location %}. Si el archivo es importante, haz una copia de seguridad local en un directorio por fuera del repositorio.

{% endwarning %}

### Eliminar un archivo agregado en la confirmación más reciente no subida

Si el archivo se agregó con tu confirmación más reciente, y no lo subiste a {% data variables.product.product_location %}, puedes eliminar el archivo y modificar la confirmación:

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. Para eliminar el archivo, ingresa a `git rm --cached`:
  ```shell
  $ git rm --cached <em>giant_file</em>
  # Stage our giant file for removal, but leave it on disk
  ```
4. Confirma este cambio usando `--amend -CHEAD`:
  ```shell
  $ git commit --amend -CHEAD
  # Amend the previous commit with your change
  # Simply making a new commit won't work, as you need
  # to remove the file from the unpushed history as well
  ```
5. Sube tus confirmaciones a {% data variables.product.product_location %}:
  ```shell
  $ git push
  # Push our rewritten, smaller commit
  ```

### Eliminar un archivo que se añadió en una confirmación de cambios previa

Si añadiste un archivo en una confirmación previa, necesitas eliminarlo del historial del repositorio. Para eliminar archivos de la historia del repositorio, puedes utilizar BFG Repo-Cleaner o el comando `git filter-branch`. Para obtener más información, consulta la sección "[Eliminar datos sensibles de un repositorio](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)".
