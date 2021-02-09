---
title: Buscar archivos en GitHub
intro: 'Puedes buscar un archivo en un repositorio utilizando el buscador de archivos. Para buscar un archivo en distintos repositorios en {% data variables.product.product_name %}, usa el [calificados de búsqueda de código`filename`](/articles/searching-code#search-by-filename).'
redirect_from:
  - /articles/finding-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Tips:**

- Los resultados del buscador de archivos excluyen algunos directorios como `build`, `log`, `tmp` y `vendor`. Para buscar archivos dentro de estos directorios, usa el [calificador de búsqueda de código `filename`](/articles/searching-code#search-by-filename).
- También puedes abrir el buscador de archivos presionando `t` en tu teclado. Para obtener más información, consulta "[Atajos del teclado](/articles/keyboard-shortcuts/#comments)".

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% if currentVersion ver_lt "enterprise-server@2.22" %}
2. Debajo del nombre del repositorio, haz clic en **Buscar archivo**. ![Botón Buscar archivo](/assets/images/help/search/find-file-button.png)
{% else %}
2. Sobre la lista de archivos, da clic en **Ir al archivo**. ![Botón Buscar archivo](/assets/images/help/search/find-file-button.png)
{% endif %}
3. En el campo de búsqueda, escribe el nombre del archivo que deseas buscar. ![Campo de búsqueda Buscar archivo](/assets/images/help/search/find-file-search-field.png)
4. En la lista de resultados, haz clic en el archivo que deseas buscar.

### Leer más

- "[Acerca de buscar en GitHub](/articles/about-searching-on-github)"

