---
title: Obtener enlaces permanentes a archivos
intro: 'Cuando ves un archivo en {% data variables.product.product_location %}, puedes presionar la tecla "y" para actualizar la URL y obtener un enlace permanente para la versión exacta del archivo que estás viendo.'
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url
  - /articles/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/managing-files-on-github/getting-permanent-links-to-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Permanent links to files
ms.openlocfilehash: 4e3d5ec282f7f7ba820094240698c88e298cdb69
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136464'
---
{% tip %}

**Sugerencia**: Presione "?" en cualquier página de {% data variables.product.product_name %} para ver todos los métodos abreviados de teclado disponibles.

{% endtip %}

## Vistas del archivo que muestran la versión más reciente en una rama

Cuando ves un archivo en {% data variables.product.product_location %}, por lo general, accedes a la versión en el encabezado actual de una rama.  Por ejemplo:

* [https://github.com/github/codeql/blob/**main**/README.md](https://github.com/github/codeql/blob/main/README.md)

Hace referencia al repositorio `codeql` de GitHub y muestra la versión `main` actual del archivo `README.md` de la rama.

La versión de un archivo en el encabezado de una rama puede cambiar cuando se realizan nuevas confirmaciones, por eso si copias la URL normal, el contenido del archivo puede no ser el mismo cuando alguien lo vea más tarde.

## Vínculo permanente a un archivo en una confirmación específica mediante la tecla <kbd>Y</kbd>

Para crear un vínculo permanente a la versión específica de un archivo que ve, en lugar de usar el nombre de una rama en la dirección URL (p. ej., el elemento `main` en el ejemplo anterior), coloque un identificador de confirmación. Esto creará un vínculo permanente a esa versión exacta del archivo en esa confirmación.  Por ejemplo:

* [https://github.com/github/codeql/blob/**b212af08a6cffbb434f3c8a2795a579e092792fd**/README.md](https://github.com/github/codeql/blob/b212af08a6cffbb434f3c8a2795a579e092792fd/README.md)

Aquí se reemplaza `main` por el identificador de una confirmación específica y el contenido del archivo no cambiará.

Pero buscar el SHA de la confirmación de forma manual es un inconveniente, por lo que, a modo de acceso directo, puede escribir <kbd>y</kbd> para actualizar automáticamente la dirección URL a la versión del vínculo permanente.  Luego puedes copiar la URL sabiendo que todas las personas con quienes la compartas verán exactamente lo mismo que tú viste.

{% tip %}

**Sugerencia**: Puede colocar cualquier identificador que se pueda resolver en una confirmación en la dirección URL, incluidos los nombres de rama, los SHA de las confirmaciones específicas o las etiquetas.

{% endtip %}

## Crear un enlace permanente a un fragmento de código

Puedes crear un enlace permanente a una línea específica o a un rango de líneas de código en una versión específica de un archivo o de una solicitud de extracción. Para obtener más información, vea "[Creación de un vínculo permanente a un fragmento de código](/articles/creating-a-permanent-link-to-a-code-snippet/)".

## Información adicional

- "[Archivado de un repositorio de GitHub](/articles/archiving-a-github-repository)"
