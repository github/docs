---
title: Renombrar un archivo
intro: 'Puedes renombrar cualquier archivo de tus repositorios directamente en {% data variables.product.product_name %}. Renombrar un archivo también te da la posibilidad de [mover el archivo a una ubicación nueva](/articles/moving-a-file-to-a-new-location).'
redirect_from:
  - /articles/renaming-a-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Tips**:

- Si intentas renombrar un archivo de un repositorio al que no tienes acceso, bifurcaremos el proyecto para tu cuenta de usuario y te ayudaremos a enviar [una solicitud de extracción](/articles/about-pull-requests) al repositorio original después de que confirmes tu cambio.
- Los nombres de los archivos creados a través de la interfaz web solo pueden contener caracteres alfanuméricos y guiones (`-`). Para utilizar otros caracteres, crea y confirma los archivos de forma local y luego súbelos al repositorio.
- Algunos archivos, como las imágenes, requieren que los renombres desde la línea de comando. Para obtener más información, consulta "[Renombrar un archivo usando la línea de comando](/articles/renaming-a-file-using-the-command-line)".

{% endtip %}

1. En tu repositorio, busca el archivo que quieres renombrar.
2. En la esquina superior derecha de la vista del archivo, haz clic en {% octicon "pencil" aria-label="The edit icon" %} para abrir el editor de archivos. ![Icono Edit file (Editar archivo)](/assets/images/help/repository/edit-file-icon.png)
3. En el campo de nombre del archivo, cambia el nombre del archivo con el nombre de archivo nuevo que quieras. También puedes actualizar los contenidos de tu archivo en el mismo momento. ![Editar el nombre del archivo](/assets/images/help/repository/changing-file-name.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
