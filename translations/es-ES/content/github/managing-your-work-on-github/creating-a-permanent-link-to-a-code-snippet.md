---
title: Crear un enlace permanente a un fragmento de código
intro: Puedes crear un enlace permanente a una línea específica o a un rango de líneas de código en una versión específica de un archivo o de una solicitud de extracción.
redirect_from:
  - /articles/creating-a-permanent-link-to-a-code-snippet
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - solicitudes de extracción
---

Este tipo de enlace permanente se presentará como un fragmento de código únicamente en el repositorio en el que se originó. En los demás repositorios, el fragmento de código de enlace permanente se presentará como una URL.

![Fragmento de código que se presenta en un comentario](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**Sugerencia:** Para crear un enlace permanente para un archivo completo, consulta "[Obtener enlaces permanentes a los archivos](/articles/getting-permanent-links-to-files)".

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Busca el código con el que deseas establecer el enlace:
    - Para enlazar el código desde un archivo, dirígete hacia ese archivo.
    - Para enlazar el código desde una solicitud de extracción, dirígete a la solicitud de extracción y haz clic en {% octicon "diff" aria-label="The file diff icon" %}**Archivos con cambios**. Luego, desplázate hasta el archivo que contiene el código que deseas incluir en tu comentario y haz clic en **Ver**.
{% data reusables.repositories.choose-line-or-range %}
4. A la izquierda de la línea o del rango de líneas, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. En el menú desplegable, haz clic en **Copiar enlace permanente**. ![Menú kebab con la opción de copiar un enlace permanente desde una línea seleccionada](/assets/images/help/repository/copy-permalink-specific-line.png)
5. Dirígete a la conversación en la que deseas enlazar el fragmento de código.
6. Pega tu enlace permanente en un comentario y haz clic en **Comentar**. ![Enlace permanente pegado en un comentario en el mismo repositorio](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

### Leer más

- [Crear una propuesta](/articles/creating-an-issue/)"
- "[Abrir una propuesta desde el código](/articles/opening-an-issue-from-code/)"
- "[Revisar los cambios en las solicitudes de extracción](/articles/reviewing-changes-in-pull-requests/)"
