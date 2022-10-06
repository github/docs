---
title: Crear un enlace permanente a un fragmento de código
intro: Puedes crear un enlace permanente a una línea específica o a un rango de líneas de código en una versión específica de un archivo o de una solicitud de extracción.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-a-permanent-link-to-a-code-snippet
  - /articles/creating-a-permanent-link-to-a-code-snippet
  - /github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet
  - /github/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Permanent links to code
ms.openlocfilehash: d1c363eba2a45558f3fdc9b55025309544ef677b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145069847'
---
## Vincular al código

Este tipo de enlace permanente se presentará como un fragmento de código únicamente en el repositorio en el que se originó. En los demás repositorios, el fragmento de código de enlace permanente se presentará como una URL.

![Fragmento de código que se presenta en un comentario](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**Sugerencia**: A fin de crear un vínculo permanente para un archivo completo, vea "[Obtener vínculos permanentes a los archivos](/articles/getting-permanent-links-to-files)".

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Busca el código con el que deseas establecer el enlace:
    - Para enlazar el código desde un archivo, dirígete hacia ese archivo.
    - Para enlazar el código desde una solicitud de incorporación de cambios, vaya a la solicitud de incorporación de cambios y haga clic en {% octicon "diff" aria-label="The file diff icon" %} **Files changed** (Archivos cambiados). Luego, desplácese hasta el archivo que contiene el código que quiera incluir en el comentario y haga clic en **View** (Ver).
{% data reusables.repositories.choose-line-or-range %}
4. A la izquierda de la línea o del rango de líneas, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. En el menú desplegable, haga clic en **Copy permalink** (Copiar vínculo permanente).
  ![Menú kebab con la opción de copiar un enlace permanente desde una línea seleccionada](/assets/images/help/repository/copy-permalink-specific-line.png)
5. Dirígete a la conversación en la que deseas enlazar el fragmento de código.
6. Pegue su enlace permanente en un comentario y haga clic en **Comment** (Comentar).
  ![Enlace permanente pegado en un comentario en el mismo repositorio](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

## Vincular al lenguaje de marcado

Puedes vincular a líneas específicas en los archivos de lenguaje de marcado si cargas el archivo de lenguaje de marcado sin la interpretación de lenguaje de marcado. Para cargar un archivo Markdown sin representar, puede utilizar el parámetro `?plain=1` al final de la dirección url del archivo. Por ejemplo, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1`.

Puedes vincular a una línea específica en el archivo de lenguaje de marcado de la misma forma en la que lo haces en el código. Anexe `#L` con el número o números de línea al final de la dirección url. Por ejemplo, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14` resaltará la línea 14 en el archivo README.md sin formato.

## Información adicional

- [Crear una incidencia](/articles/creating-an-issue/)
- [Abrir una incidencia desde el código](/articles/opening-an-issue-from-code/)/
- [Revisar cambios en solicitudes de incorporación de cambios](/articles/reviewing-changes-in-pull-requests/)
