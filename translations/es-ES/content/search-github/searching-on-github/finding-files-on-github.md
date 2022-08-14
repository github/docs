---
title: Buscar archivos en GitHub
intro: 'Puedes buscar un archivo en un repositorio utilizando el buscador de archivos. Para buscar un archivo en varios repositorios de {% data variables.product.product_name %}, utiliza el [calificador de búsqueda de código `filename`](/search-github/searching-on-github/searching-code#search-by-filename).'
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
---

{% tip %}

**Tips:**

- Predeterminadamente, los resultados del buscador de archivos excluyen a algunos directorios como `build`, `log`, `tmp` y `vendor`. Para buscar archivos en estos directorios, utiliza el [calificador de búsqueda de código `filename`](/search-github/searching-on-github/searching-code#search-by-filename).{% ifversion file-finder-exclusion-controls %} Como alternativa, puedes personalizar qué directorios se excluyen predeterminadamente [utilizando un archivo `.gitattributes`](#customizing-excluded-files).{% endif %}
- También puedes abrir el buscador de archivos presionando `t` en tu teclado. Para obtener más información, consulta "[Atajos del teclado](/articles/keyboard-shortcuts/#comments)".

{% endtip %}

## Utilizar el buscador de archivos

{% data reusables.repositories.navigate-to-repo %}
2. Sobre la lista de archivos, da clic en **Ir al archivo**. ![Botón Buscar archivo](/assets/images/help/search/find-file-button.png)
3. En el campo de búsqueda, escribe el nombre del archivo que deseas buscar. ![Campo de búsqueda Buscar archivo](/assets/images/help/search/find-file-search-field.png)
4. En la lista de resultados, haz clic en el archivo que deseas buscar.

{% ifversion file-finder-exclusion-controls %}

## Personalizar los archivos excluidos

Predeterminadamente, los resultados del buscador de archivos no incluyen aquellos en los siguientes directorios si es que existen en la raíz de tu repositorio:

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `build`
 - `dot_git`
 - `log`
 - `tmp`
 - `vendor`

Puedes anular estas exclusiones predeterminadas utilizando un archivo `.gitattributes`.

Para hacerlo, crea o actualiza un archivo llamado `.gitattributes` en la raíz de tu repositorio, ajustando el atributo [`linguist-generated`](https://github.com/github/linguist/blob/master/docs/overrides.md) en `false` para cada directorio que deba incluirse en los resultados del buscador de archivos.

Por ejemplo, el siguiente archivo `.gitattributes` ocasionaría que los archivos en el directorio `build/` estén disponibles para el buscador de archivos:

```
build/** linguist-generated=false
```

Toma en cuenta que esta anulación requiere utilizar el patrón de glob recursivo (`**`). Para obtener más información, consulta la sección "[formato de patrón](https://git-scm.com/docs/gitignore#_pattern_format)" en la documentación de Git. No hay compatibilidad para anulaciones más complejas de subdirectorios dentro de los directorios que se excluyen predeterminadamente.

{% endif %}

## Leer más

- "[Acerca de buscar en GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"{% ifversion file-finder-exclusion-controls %}
- "[Personalizar cómo se muestran los archivos cambiados en GitHub](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)"
- [`.gitattributes`](https://git-scm.com/docs/gitattributes) en la documentación de Git{% endif %}
