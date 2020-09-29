---
title: Mover un archivo a una nueva ubicación
intro: 'Cuando editas un archivo, puedes elegir moverlo a cualquier lugar dentro de tu repositorio, incluso si el directorio no existe.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Además de cambiar la ubicación del archivo, también puedes [actualizar los contenidos de tu archivo](/articles/editing-files-in-your-repository), o [darle un nuevo nombre](/articles/renaming-a-file) en la misma confirmación.

{% tip %}

**Tips**:

- Si tratas de mover un archivo en un repositorio al cual no tienes acceso, bifurcaremos el proyecto a tu cuenta de usuario y te ayudaremos a enviar [una solicitud de extracción](/articles/about-pull-requests) al repositorio original después de confirmar tu cambio.
- Algunos archivos, como imágenes, necesitan que los muevas desde la línea de comando. Para obtener más información, consulta "[Mover un archivo a una nueva ubicación utilizando la línea de comando](/articles/moving-a-file-to-a-new-location-using-the-command-line)".
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. En tu repositorio, navega hasta el archivo que deseas mover.
2. En la esquina superior derecha de la vista del archivo, haz clic en {% octicon "pencil" aria-label="The edit icon" %} para abrir el editor de archivos. ![Icono Edit file (Editar archivo)](/assets/images/help/repository/move-file-edit-file-icon.png)
3. En el campo de nombre de archivo, cambia el nombre del archivo utilizando estos lineamientos: ![Editar el nombre del archivo](/assets/images/help/repository/moving_files.gif)
    - Para mover el archivo **dentro de una subcarpeta**, escribe el nombre de la carpeta que deseas, seguido de `/`. El nombre de tu nueva carpeta se convierte en el nuevo elemento en la ruta de navegación.
    - Para mover el archivo dentro de un directorio **encima de la ubicación actual del archivo**, coloca tu cursor al comienzo del campo de nombre de archivo, después escribe `../` para subir un nivel completo de directorio, o presiona la tecla de `retroceso` para editar el nombre de la carpeta padre.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
