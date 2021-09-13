---
title: Crear nuevos archivos
intro: 'Puedes crear nuevos archivos directamente en {% data variables.product.product_name %} en cualquier repositorio al que tengas acceso de escritura.'
redirect_from:
  - /articles/creating-new-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Cuando crees un archivo en {% data variables.product.product_name %}, ten en cuenta lo siguiente:

- Si intentas crear un nuevo archivo en un repositorio al que no tienes acceso, bifurcaremos el proyecto para tu cuenta de usuario y te ayudaremos a enviar [una solicitud de extracción](/articles/about-pull-requests) al repositorio original una vez que confirmes tu cambio.
- Los nombres de los archivos creados a través de la interfaz web solo pueden contener caracteres alfanuméricos y guiones (`-`). Para usar otros caracteres, [crea y confirma los archivos de manera local, y luego súbelos al repositorio en {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository-using-the-command-line).

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. En tu repositorio, dirígete a la carpeta en la que deseas crear un archivo.
{% data reusables.files.add-file %}
4. En el campo para el nombre del archivo, escribe el nombre y la extensión del archivo. Para crear subdirectorios, escribe el separador de directorio `/`. ![Nombre del nuevo archivo](/assets/images/help/repository/new-file-name.png)
5. En la pestaña **Editar nuevo archivo**, agrega contenido al archivo. ![Contenido del nuevo archivo](/assets/images/help/repository/new-file-content.png)
6. Para revisar el nuevo contenido, haz clic en **Vista previa**. ![Botón New file preview (Vista previa del archivo nuevo)](/assets/images/help/repository/new-file-preview.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Leer más

- "[Agregar un archivo a un repositorio](/articles/adding-a-file-to-a-repository)"
- [Agregar un archivo a un repositorio mediante la línea de comando](/articles/adding-a-file-to-a-repository-using-the-command-line)"
