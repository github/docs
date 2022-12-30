---
title: Crear una solicitud de incorporación de cambios
intro: 'Crea una solicitud de incorporación de cambios para proponer cambios en un repositorio y colaborar con ellos. Estos cambios se proponen en una *rama*, lo cual garantiza que la rama predeterminada contenga únicamente trabajo finalizado y aprobado.'
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: de387cea338fb927d2baeedd79855eefbdbc82ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110998'
---
Si deseas crear una rama nueva para tu solicitud de extracción y no tienes permisos de escritura para el repositorio, puedes bifurcarlo primero. Para más información, vea "[Creación de una solicitud de incorporación de cambios a partir de una bifurcación](/articles/creating-a-pull-request-from-a-fork)" y "[Acerca de las bifurcaciones](/articles/about-forks)".

Puedes especificar en qué rama deseas fusionar tus cambios cuando creas tu solicitud de extracción. Las solicitudes de extracción solo se pueden abrir entre dos ramas que sean diferentes.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## Cambiar el rango de la rama y el repositorio de destino

Predeterminadamente, las solicitudes de cambios se basan en la rama predeterminada del repositorio padre. Para más información, vea "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

Si el repositorio padre predeterminado no es el correcto, puedes cambiar tanto el repositorio padre como la rama con las listas desplegables. También puedes intercambiar tus ramas base y encabezado con las listas desplegables para establecer diferencias entre los puntos de referencia. Las referencias que aparecen aquí deben ser nombres de ramas en tu repositorio GitHub.

![Ramas para editar la solicitud de extracción](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

Al pensar en las ramas, recuerde que la *rama base* es **donde** se deben aplicar los cambios y la *rama principal* contiene **lo que** se quiere aplicar.

Cuando cambias el repositorio base, también puedes cambiar las notificaciones de la solicitud de extracción. Cualquier usuario que pueda subir al repositorio base recibirá una notificación por correo electrónico y verá la nueva solicitud de extracción en su tablero la próxima vez que inicie sesión.

Cuando cambies alguna información en el rango de la rama, las áreas de vista previa modificadas Confirmar y Campos se actualizarán para mostrar tu nuevo rango.

{% tip %}

**Sugerencias**:
- Usando la vista comparativa, puedes configurar comparaciones en todo el periodo. Para más información, vea "[Comparación de confirmaciones](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)".
- Los mantenedores de proyecto pueden agregar una plantilla de solicitud de extracción para un repositorio. Las plantillas incluyen indicaciones para la información en el cuerpo de una solicitud de extracción. Para más información, vea "[Acerca de las plantillas de incidencias y solicitudes de incorporación de cambios](/articles/about-issue-and-pull-request-templates)".

{% endtip %}

## Crear una solicitud de extracción

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. En el menú "Branch" (Rama), elige la rama que contiene tus confirmaciones.
  ![Menú desplegable Rama](/assets/images/help/pull_requests/branch-dropdown.png) {% data reusables.repositories.new-pull-request %}
4. Use el menú desplegable de la rama _base_ para seleccionar la rama en la que quiera combinar los cambios y, después, use el menú desplegable de la rama de _comparación_ para elegir la rama de tema en la que ha realizado los cambios.
  ![Menús desplegables para elegir la ramas base y de comparación](/assets/images/help/pull_requests/choose-base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

Una vez que se haya revisado la solicitud de incorporación de cambios, se puede [combinar en el repositorio](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para crear una solicitud de incorporación de cambios, use el subcomando `gh pr create`.

```shell
gh pr create
```

Para asignar una solicitud de incorporación de cambios a un individuo, use las marcas `--assignee` o `-a`. Puede usar `@me` para asignarse la solicitud de incorporación de cambios.

```shell
gh pr create --assignee "@octocat"
```

Para especificar la rama en la que quiere combinar la solicitud de incorporación de cambios, use las marcas `--base` o `-B`. Para especificar la rama que contiene confirmaciones para la solicitud de incorporación de cambios, use las marcas `--head` o `-H`.

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

A fin de incluir un título y un cuerpo para la nueva solicitud de incorporación de cambios, use las marcas `--title` y `--body`.

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

Para marcar una solicitud de incorporación de cambios como borrador, use la marca `--draft`.

```shell
gh pr create --draft
```

Para agregar etiquetas o hitos a la nueva solicitud de incorporación de cambios, use las marcas `--label` y `--milestone`.

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

Para agregar la nueva solicitud de incorporación de cambios a un proyecto concreto, use la marca `--project`.

```shell
gh pr create --project octocat-project
```

Para asignar a un usuario o equipo como revisores, use la marca `--reviewer`.

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

Para crear la solicitud de incorporación de cambios en el explorador web predeterminado, use la marca `--web`.

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

{% mac %}

1. Cambia a la rama para la cual quieras crear una solicitud de extracción. Para más información, vea "[Cambio de ramas](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Haga clic en **Crear solicitud de incorporación de cambios**. {% data variables.product.prodname_desktop %} abrirá tu buscador predeterminado para llevarte a {% data variables.product.prodname_dotcom %}.
  ![El botón Crear solicitud de incorporación de cambios](/assets/images/help/desktop/mac-create-pull-request.png)
4. En {% data variables.product.prodname_dotcom %}, confirme que la rama en el menú desplegable **base:** es en la que quiere combinar los cambios. Confirme que la rama del menú desplegable **compare:** es la rama de temas en la que ha realizado los cambios.
  ![Menús desplegables para elegir la ramas base y de comparación](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Cambia a la rama para la cual quieras crear una solicitud de extracción. Para más información, vea "[Cambio de ramas](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Haga clic en **Crear solicitud de incorporación de cambios**. {% data variables.product.prodname_desktop %} abrirá tu buscador predeterminado para llevarte a {% data variables.product.prodname_dotcom %}.
  ![El botón Crear solicitud de incorporación de cambios](/assets/images/help/desktop/windows-create-pull-request.png)
3. En {% data variables.product.prodname_dotcom %}, confirme que la rama en el menú desplegable **base:** es en la que quiere combinar los cambios. Confirme que la rama del menú desplegable **compare:** es la rama de temas en la que ha realizado los cambios.
  ![Menús desplegables para elegir la ramas base y de comparación](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. Después de haber confirmado los cambios en la copia local del repositorio, haga clic en el icono **Crear solicitud de incorporación de cambios**.
![Barra lateral de control de código fuente con el botón de almacenamiento provisional resaltado](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. Verifica que el repositorio y la rama local desde la que estás haciendo la fusión y la rama y repositorio remotos hacia los que estés haciendo la fusión sean correctos. Después, asigna un nombre y descripción a la solicitud de cambios.
![Barra lateral de solicitudes de incorporación de cambios de GitHub](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Haga clic en **Crear**.

Para más información sobre cómo crear solicitudes de incorporación de cambios en {% data variables.product.prodname_github_codespaces %}, consulta "[Uso de {% data variables.product.prodname_github_codespaces %} para solicitudes de incorporación de cambios](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)".

{% endcodespaces %}

{% endif %}
## Información adicional

- "[Creación de una solicitud de incorporación de cambios desde una bifurcación](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- "[Mantenimiento de la solicitud de incorporación de cambios sincronizada con la rama base](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)"
- "[Cambio de la rama base de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)"
- "[Adición de incidencias y solicitudes de incorporación de cambios a un panel de proyecto desde la barra lateral](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)"
- "[Acerca de la automatización para incidencias y solicitudes de incorporación de cambios con parámetros de consulta](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Asignación de incidencias y solicitudes de incorporación de cambios a otros usuarios de GitHub](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)"
- "[Escritura en GitHub](/github/writing-on-github)"
