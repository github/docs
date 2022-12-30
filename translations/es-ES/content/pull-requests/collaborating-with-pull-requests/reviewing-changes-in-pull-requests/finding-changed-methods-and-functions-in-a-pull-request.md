---
title: Encontrar funciones y métodos cambiados en una solicitud de extracción
intro: 'Puedes encontrar rápidamente los cambios propuestos en un método o función en una solicitud de incorporación de cambios en los archivos *.go*, *.js*, *.ts*, *.py*, *.php* y *.rb*.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Methods & functions
ms.openlocfilehash: be891fe01166ee0eccf9ba7c824a1017c9d8fc11
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139194'
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
4. Para ver una lista de resumen de las funciones y métodos modificados, haga clic en **Saltar a...** . ![Menú desplegable Saltar a](/assets/images/help/pull_requests/jump-to-menu.png)
5. Selecciona el método o la función cambiada dentro del menú desplegable. También puedes ingresar el nombre del método o la función en los resultados del filtro.
  ![Función y métodos de filtro](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 **Nota:** Si no ve las funciones o los métodos que esperaba, confirme que el código se compila y no contiene errores. En el menú desplegable solo se muestran las funciones y los métodos modificados en esta solicitud de incorporación de cambios y detectados en archivos *.go*, *.js*, *.ts*, *.py*, *.php* y *.rb*.

 {% endnote %}

6. Serás redireccionado a la primera línea de la función o el método seleccionado.
 ![Ver la función o el método en los archivos modificados](/assets/images/help/pull_requests/view-selected-function-or-method.png)

## Información adicional

- "[Acerca de la comparación de ramas en solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)"
- "[Filtrado de archivos en una solicitud de incorporación de cambios por tipo de archivo](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)"
