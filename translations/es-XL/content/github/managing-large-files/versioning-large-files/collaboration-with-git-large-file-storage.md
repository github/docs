---
title: Colaboración con el almacenamiento de archivos de gran tamaño de Git
intro: 'Con {% data variables.large_files.product_name_short %} habilitado, podrás extraer, modificar y subir archivos de gran tamaño del mismo modo que lo harías con cualquier archivo que administre Git. Sin embargo, un usuario que no tiene {% data variables.large_files.product_name_short %} experimentará un flujo de trabajo diferente.'
redirect_from:
  - /articles/collaboration-with-large-file-storage/
  - /articles/collaboration-with-git-large-file-storage
  - /github/managing-large-files/collaboration-with-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
Si los colaboradores en tu repositorio no tienen {% data variables.large_files.product_name_short %} instalado, no tendrán acceso al archivo de gran tamaño original. Si intentan clonar tu repositorio, solo extraerán los archivos punteros, y no tendrán acceso a los datos trues.

{% tip %}

**Tip:** Te recomendamos configurar lineamientos para los contribuyentes del repositorio, los cuales describan la forma de trabajar con archivos grandes, para todo usuario que no tenga {% data variables.large_files.product_name_short %} habilitado. Por ejemplo, puedes pedirles a los colaboradores que no modifiquen archivos de gran tamaño o que carguen los cambios a un servicio de intercambio de archivos como [Dropbox](http://www.dropbox.com/) o <a href="https://drive.google.com/" data-proofer-ignore>Google Drive</a>. Para obtener más información, consulta "[Establecer pautas para los colaboradores del repositorio](/github/building-a-strong-community/setting-guidelines-for-repository-contributors)".

{% endtip %}

### Ver archivos de gran tamaño en solicitudes de extracción

{% data variables.product.product_name %} no representa {% data variables.large_files.product_name_short %} objectos en solicitudes de extracción. Only the pointer file is shown:

![Ejemplo de PR para archivos de gran tamaño](/assets/images/help/large_files/large_files_pr.png)

Para obtener más información acerca de los archivos puntero, consulta la sección "[Acerca de{% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)".

Para ver los cambios que se realizaron en los archivos grandes, verifica localmente la solicitud de extracción para revisar la diferencia. Para obtener más información, consulta la sección "[Revisar las solicitudes de extracción localmente](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)".

{% if currentVersion == "free-pro-team@latest" %}

### Subir archivos de gran tamaño a bifurcaciones

La subida de archivos de gran tamaño cuenta para el ancho de banda de un repositorio padre y las cuotas de almacenamiento, en lugar de hacerlo para las cuotas del propietario de la bifurcación.

Puedes subir {% data variables.large_files.product_name_short %} objetos a las bifurcaciones públicas si la red del repositorio ya tiene {% data variables.large_files.product_name_short %} objetos o si tienes acceso de escritura a la raíz de la red del repositorio.

{% endif %}

### Leer más

- "[Duplicar un repositorio con objetos de almacenamiento de gran tamaño de Git](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects)"
