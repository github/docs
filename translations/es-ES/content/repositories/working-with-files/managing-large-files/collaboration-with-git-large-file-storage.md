---
title: Colaboración con Git Large File Storage
intro: 'Con {% data variables.large_files.product_name_short %} habilitado, podrás extraer, modificar y subir archivos de gran tamaño del mismo modo que lo harías con cualquier archivo que administre Git. Sin embargo, un usuario que no tiene {% data variables.large_files.product_name_short %} experimentará un flujo de trabajo diferente.'
redirect_from:
  - /articles/collaboration-with-large-file-storage
  - /articles/collaboration-with-git-large-file-storage
  - /github/managing-large-files/collaboration-with-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/collaboration-with-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Collaboration
ms.openlocfilehash: 4589487059e2949da64ebf40e8a602703fed2c01
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136512'
---
Si los colaboradores en tu repositorio no tienen {% data variables.large_files.product_name_short %} instalado, no tendrán acceso al archivo de gran tamaño original. Si intentan clonar tu repositorio, solo extraerán los archivos punteros, y no tendrán acceso a los datos trues.

{% tip %}

**Sugerencia**: Para ayudar a los usuarios que no tengan {% data variables.large_files.product_name_short %} habilitado, se recomienda establecer pautas para los colaboradores del repositorio que describan la forma de trabajar con archivos de gran tamaño. Por ejemplo, puede pedir a los colaboradores que no modifiquen archivos grandes o que carguen los cambios en un servicio de uso compartido de archivos, como [Dropbox](http://www.dropbox.com/) o <a href="https://drive.google.com/" data-proofer-ignore>Google Drive</a>. Para más información, vea "[Establecimiento de instrucciones para los colaboradores del repositorio](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)".

{% endtip %}

## Ver archivos de gran tamaño en solicitudes de extracción

{% data variables.product.product_name %} no representa {% data variables.large_files.product_name_short %} objectos en solicitudes de extracción. Únicamente se muestra el archivo de puntero:

![Ejemplo de PR para archivos de gran tamaño](/assets/images/help/large_files/large_files_pr.png)

Para obtener más información sobre los archivos puntero, vea "[Acerca de {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)".

Para ver los cambios que se realizaron en los archivos grandes, verifica localmente la solicitud de extracción para revisar la diferencia. Para más información, vea "[Extracción del repositorio de las solicitudes de incorporación de cambios localmente](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)".

{% ifversion fpt or ghec %}

## Subir archivos de gran tamaño a bifurcaciones

La subida de archivos de gran tamaño cuenta para el ancho de banda de un repositorio padre y las cuotas de almacenamiento, en lugar de hacerlo para las cuotas del propietario de la bifurcación.

Puedes subir {% data variables.large_files.product_name_short %} objetos a las bifurcaciones públicas si la red del repositorio ya tiene {% data variables.large_files.product_name_short %} objetos o si tienes acceso de escritura a la raíz de la red del repositorio.

{% endif %}

## Información adicional

- "[Duplicación de un repositorio con archivos de almacenamiento de archivos grandes de Git](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects)"
