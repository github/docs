---
title: Buscar coincidencias exactas en el código
intro: 'Puedes buscar coincidencias exactas de código en los repositorios de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
permissions: Las personas con permisos de lectura en un repositorio pueden buscar coincidencias exactas de archivos en el mismo.
versions:
  free-pro-team: '*'
---

{% note %}

{% data reusables.search.exact-match-beta %} Para solicitar acceso al beta,, [únete a la lista de espera](https://github.com/features/code-search-exact-match/signup).

{% endnote %}

### Acerca de la búsqueda de coincidencias exactas en el código

{% data reusables.search.exact-match %}

Predeterminadamente, las búsquedas de coincidencias exactas distinguen entre mayúsculas, minúsuclas, y símbolos, y no pueden incluir coincidencias parciales o gramática estandarizada. Por ejemplo, si buscas `let ReactDOM*` se regresará el valor `let ReactDOM*`.

### Buscar coincidencias exactas en el código

{% note %}

Buscar coincidencias exactas en los archivos dentro de un repositorio solo funcionará con aquellos repositorios indizados para el lanzamiento beta.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
2. En el campo de búsqueda, teclea la cadena de caracteres que quieras encontrar. ![Búsqueda de cadena de caracteres para coincidencia exacta](/assets/images/help/search/exact-match-search-string.png)
3. Opcionalmente, da clic en el menú desplegable de **Opciones** para acotar tu búsqueda. ![Menú desplegable de opciones para búsqueda de coincidencia exacta](/assets/images/help/search/exact-match-options.png)
4. Presiona <kbd>Enter</kbd> o <kbd>Return</kbd> en tu teclado.
5. En la lista de resultados, da clic en el archivo.

### Leer más

- "[Buscar código](/github/searching-for-information-on-github/searching-code)"
- "[Navegar en el código de {% data variables.product.product_name %}](/github/managing-files-in-a-repository/navigating-code-on-github)"
