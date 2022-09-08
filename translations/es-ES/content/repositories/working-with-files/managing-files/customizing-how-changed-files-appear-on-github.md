---
title: Personalizar cómo aparecen los archivos cambiados en GitHub
intro: 'Para evitar que determinados archivos se muestren en diferencias de manera predeterminada, o que contribuyan al lenguaje del repositorio, puedes marcarlos con el atributo `linguist-generated` en un archivo *.gitattributes*.'
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/managing-repository-settings/customizing-how-changed-files-appear-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: How changed files appear
ms.openlocfilehash: 2ba6dc8286cab0ef493289d8ae39283209dae8b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136567'
---
Use un archivo *.gitattributes* para marcar los archivos que coincidan con un "patrón" determinado con los atributos especificados. Un archivo *.gitattributes* usa las mismas reglas para buscar coincidencias que los archivos _.gitignore_. Para obtener más información, consulte [FORMATO DE PATRÓN](https://www.git-scm.com/docs/gitignore#_pattern_format) en la documentación de Git.

1. A menos que el archivo *.gitattributes* ya exista, cree un archivo *.gitattributes* en la raíz del repositorio.
2. Use el atributo `linguist-generated` para marcar o desmarcar las rutas que desea que se ignoren para las estadísticas de lenguaje del repositorio y las que desea que se oculten de manera predeterminada en las diferencias.

  Por ejemplo, para marcar `search/index.json` como un archivo generado, agregue esta línea a *.gitattributes*:

  ```
search/index.json linguist-generated=true
  ```

## Información adicional
- "[Código generado](https://github.com/github/linguist/blob/master/docs/overrides.md#generated-code)" en la documentación para lingüistas
- "[Creación de archivos](/articles/creating-new-files/)"
