---
title: Encontrar funciones y métodos cambiados en una solicitud de extracción
intro: 'Puedes encontrar rápidamente los cambios propuestos en un método o función en los archivos *.go*, *.js*, *.ts*, *.py*, *.php*, and *.rb*.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Cualquier usuario con acceso de lectura a un repositorio puede ver una lista resumida de los cambios en las funciones y los métodos en determinados archivos o solicitud de extracción.

La lista resumida de métodos y funciones se crea a partir de estos tipos de archivos compatibles:
  - Go
  - JavaScript (incluidos Typescript, Flow y otros tipos de JavaScript)
  - PHP
  - Python
  - Ruby

{% data reusables.repositories.sidebar-pr %}
2. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción en la que deseas encontrar los métodos y funciones modificados.
{% data reusables.repositories.changed-files %}
4. Para ver una lista resumida de los métodos y funciones modificados, haz clic en **Ir a...**. ![Ir al menú desplegable](/assets/images/help/pull_requests/jump-to-menu.png)
5. Selecciona el método o la función cambiada dentro del menú desplegable. También puedes ingresar el nombre del método o la función en los resultados del filtro. ![Filtrar función y métodos](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 **Nota:** Si no encuentras las funciones o los métodos que esperabas, confirma que tu código se compile y no contenga errores. En el menú desplegable aparecen solo las funciones y los métodos modificados en esta solicitud de extracción que se encuentran en los archivos *.go*, *.js*, *.ts*, *.py*, *.php* y *.rb*..

 {% endnote %}

6. Serás redireccionado a la primera línea de la función o el método seleccionado. ![ver la función o el método en los archivos modificados](/assets/images/help/pull_requests/view-selected-function-or-method.png)

### Leer más

- "[Acerca de la comparación de las ramas en una solicitud de extracción](/articles/about-comparing-branches-in-pull-requests)"
- "[Filtrar archivos en una solicitud de extracción por tipo de archivo](/articles/filtering-files-in-a-pull-request-by-file-type)"
