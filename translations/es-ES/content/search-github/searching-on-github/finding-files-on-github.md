---
title: Buscar archivos en GitHub
intro: 'Puedes buscar un archivo en un repositorio utilizando el buscador de archivos. Para buscar un archivo en varios repositorios en {% data variables.product.product_name %}, usa el [calificador de búsqueda de código `filename`](/search-github/searching-on-github/searching-code#search-by-filename).'
redirect_from:
  - /articles/finding-files-on-github
  - /github/searching-for-information-on-github/finding-files-on-github
  - /github/searching-for-information-on-github/searching-on-github/finding-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 7cecdfd58ecf56cac251bd77af3a4e1a7fcfd607
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880200'
---
{% tip %}

**Sugerencias:**

- De manera predeterminada, los resultados del buscador de archivos excluyen algunos directorios como `build`, `log`, `tmp` y `vendor`. Para buscar archivos en estos directorios, usa el [calificador de búsqueda de código `filename`](/search-github/searching-on-github/searching-code#search-by-filename).{% ifversion file-finder-exclusion-controls %} Como alternativa, puedes personalizar qué directorios se excluyen de forma predeterminada [mediante un archivo `.gitattributes`](#customizing-excluded-files).{% endif %}
- También puede abrir el buscador de archivos si pulsa `t` en el teclado. Para obtener más información, consulte "[Métodos abreviados de teclado](/articles/keyboard-shortcuts)".

{% endtip %}

## Uso del buscador de archivos

{% data reusables.repositories.navigate-to-repo %}
2. Encima de la lista de archivos, haga clic en **Go to file**.
![Botón Find file](/assets/images/help/search/find-file-button.png)
3. En el campo de búsqueda, escribe el nombre del archivo que deseas buscar.
![Campo de búsqueda para buscar archivos](/assets/images/help/search/find-file-search-field.png)
4. En la lista de resultados, haz clic en el archivo que deseas buscar.

{% ifversion file-finder-exclusion-controls %}

## Personalización de archivos excluidos

De forma predeterminada, los resultados del buscador de archivos no incluyen archivos en los directorios siguientes si existen en la raíz del repositorio:

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `build`
 - `dot_git`
 - `log`
 - `tmp`
 - `vendor`

Puedes invalidar estas exclusiones predeterminadas mediante un archivo `.gitattributes`.

Para ello, crea o actualiza un archivo llamado `.gitattributes` en la raíz del repositorio, y establece el atributo [`linguist-generated`](https://github.com/github/linguist/blob/master/docs/overrides.md) en `false` para cada directorio que se deba incluir en los resultados del buscador de archivos.

Por ejemplo, el siguiente archivo `.gitattributes` hará que los archivos del directorio `build/` estén disponibles para el buscador de archivos:

```
build/** linguist-generated=false
```

Ten en cuenta que para esta invalidación es necesario usar el patrón global recursivo (`**`). Para más información, consulta "[formato de patrón](https://git-scm.com/docs/gitignore#_pattern_format)" en la documentación de Git. No se admiten invalidaciones más complejas de subdirectorios dentro de directorios excluidos de forma predeterminada.

{% endif %}

## Información adicional

- "[Acerca de la búsqueda en GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"{% ifversion file-finder-exclusion-controls %}
- "[Personalización de cómo aparecen los archivos cambiados en GitHub](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)"
- [`.gitattributes`](https://git-scm.com/docs/gitattributes) en la documentación de Git{% endif %}
