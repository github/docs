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

- By default, file finder results exclude some directories like `build`, `log`, `tmp`, and `vendor`. To search for files in these directories, use the [`filename` code search qualifier](/search-github/searching-on-github/searching-code#search-by-filename).{% ifversion file-finder-exclusion-controls %} Alternatively, you can customize which directories are excluded by default [using a `.gitattributes` file](#customizing-excluded-files).{% endif %}
- También puedes abrir el buscador de archivos presionando `t` en tu teclado. Para obtener más información, consulta "[Atajos del teclado](/articles/keyboard-shortcuts/#comments)".

{% endtip %}

## Using the file finder

{% data reusables.repositories.navigate-to-repo %}
2. Sobre la lista de archivos, da clic en **Ir al archivo**. ![Botón Buscar archivo](/assets/images/help/search/find-file-button.png)
3. En el campo de búsqueda, escribe el nombre del archivo que deseas buscar. ![Campo de búsqueda Buscar archivo](/assets/images/help/search/find-file-search-field.png)
4. En la lista de resultados, haz clic en el archivo que deseas buscar.

{% ifversion file-finder-exclusion-controls %}

## Customizing excluded files

By default, file finder results do not include files in the following directories if they exist at your repository root:

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `build`
 - `dot_git`
 - `log`
 - `tmp`
 - `vendor`

You can override these default exclusions using a `.gitattributes` file.

To do this, create or update a file called `.gitattributes` in your repository root, setting the [`linguist-generated`](https://github.com/github/linguist/blob/master/docs/overrides.md) attribute to `false` for each directory that should be included in file finder results.

For example, the following `.gitattributes` file would cause files in the `build/` directory to be available to the file finder:

```
build/** linguist-generated=false
```

Note that this override requires the use of the recursive glob pattern (`**`). For more information, see "[pattern format](https://git-scm.com/docs/gitignore#_pattern_format)" in the Git documentation. More complex overrides of subdirectories within excluded-by-default directories are not supported.

{% endif %}

## Leer más

- "[About searching on GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"{% ifversion file-finder-exclusion-controls %}
- "[Customizing how changed files appear on GitHub](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)"
- [`.gitattributes`](https://git-scm.com/docs/gitattributes) in the Git documentation{% endif %}
