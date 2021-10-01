---
title: Crear una solicitud de extracción
intro: 'Crea una solicitud de extracción para proponer y colaborar en los cambios en un repositorio. Estos cambios se proponen en una *rama*, lo cual garantiza que la rama predeterminada contenga únicamente trabajo finalizado y aprobado.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
---

Todo usuario que tenga permisos de lectura para un repositorio puede crear una solicitud de extracción, pero tú debes tener permisos de escritura para poder crear una rama. Si deseas crear una rama nueva para tu solicitud de extracción y no tienes permisos de escritura para el repositorio, puedes bifurcar antes el repositorio. Para obtener más información, consulta "[Crear una solicitud de extracción a partir de una bifurcación](/articles/creating-a-pull-request-from-a-fork)" y "
[Acerca de las bifurcaciones](/articles/about-forks)".</p> 

Puedes especificar en qué rama deseas fusionar tus cambios cuando creas tu solicitud de extracción. Las solicitudes de extracción solo se pueden abrir entre dos ramas que sean diferentes.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}



## Cambiar el rango de la rama y el repositorio de destino

Predeterminadamente, las solicitudes de cambios se basan en la rama predeterminada del repositorio padre. Para obtener más información, consulta "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)."

Si el repositorio padre predeterminado no es el correcto, puedes cambiar tanto el repositorio padre como la rama con las listas desplegables. También puedes intercambiar tus ramas base y encabezado con las listas desplegables para establecer diferencias entre los puntos de referencia. Las referencias que aparecen aquí deben ser nombres de ramas en tu repositorio GitHub.

![Ramas para editar la solicitud de extracción](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

Cuando pienses en las ramas, recuerda que la *rama base* es **el lugar donde** se deben aplicar los cambios y la *rama encabezado* contiene **los cambios** que deseas que se apliquen.

Cuando cambias el repositorio base, también puedes cambiar las notificaciones de la solicitud de extracción. Cualquier usuario que pueda subir al repositorio base recibirá una notificación por correo electrónico y verá la nueva solicitud de extracción en su tablero la próxima vez que inicie sesión.

Cuando cambies alguna información en el rango de la rama, las áreas de vista previa modificadas Confirmar y Campos se actualizarán para mostrar tu nuevo rango.

{% tip %}

**Tips**:

- Usando la vista comparativa, puedes configurar comparaciones en todo el periodo. Para obtener más información, consulta la sección "[Comparar confirmaciones de cambios](/github/committing-changes-to-your-project/comparing-commits)."
- Los mantenedores de proyecto pueden agregar una plantilla de solicitud de extracción para un repositorio. Las plantillas incluyen indicaciones para la información en el cuerpo de una solicitud de extracción. Para obtener más información, consulta "[Acerca de las plantillas de propuestas y solicitudes de extracción](/articles/about-issue-and-pull-request-templates)".

{% endtip %}



## Crear una solicitud de extracción

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}

2. En el menú "Branch" (Rama), elige la rama que contiene tus confirmaciones. ![Menú desplegable de ramas](/assets/images/help/pull_requests/branch-dropdown.png) 
   
   {% data reusables.repositories.new-pull-request %}

4. Usa el menú desplegable de la rama _base_ para seleccionar la rama en la que deseas fusionar tus cambios y luego usa el menú desplegable de la rama de _comparación_ para elegir la rama de tema en la que hiciste los cambios. ![Menús desplegables para elegir la base y comparar ramas](/assets/images/help/pull_requests/choose-base-and-compare-branches.png) 
   
   {% data reusables.repositories.pr-title-description %}
   
   
   
   {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

Una vez que tu solicitud de extracción ha sido revisada, esta se puede [fusionar en un repositorio](/articles/merging-a-pull-request).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para crear una solicitud de cambios, utiliza el subcomando `gh pr create`.



```shell
gh pr create
```


Para asignar una solicitud de cambios a un individuo, utiliza los marcadores `--assignee` o `-a`. Puedes utilizar `@me` para auto-asignar la solicitud de cambios.



```shell
gh pr create --assignee "@octocat"
```


Para especificar la rama en la que quieres que se fusione la solicitud de cambios, utiliza los marcadores `--base` o `-B`. Para especificar la rama que contiene confirmaciones para tu solicitud de cambios, utiliza los marcadores `--head` o `-H`.



```shell
gh pr create --base my-base-branch --head my-changed-branch
```


Para incluir el título y cuerpo de la solicitud de cambios nueva, utiliza los marcadores `--title` y `--body`.



```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```


Para marcar una solicitud de cambios como borrador, utiliza el marcador `--draft`.



```shell
gh pr create --draft
```


Para agregar etiquetas o hitos a la solicitud de cambios nueva, utiliza los marcadores `--label` y `--milestone`.



```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```


Para agregar la solicitud de cambios nueva a un proyecto específico, utiliza el marcador `--project`.



```shell
gh pr create --project octocat-project
```


Para asignar a un individuo como revisor, utiliza el marcador `--reviewer`.



```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```


Para crear la solicitud de cambios en tu buscador web predeterminado, utiliza el marcador `--web`.



```shell
gh pr create --web
```


{% endcli %}

{% desktop %}

{% mac %}

1. Cambia a la rama para la cual quieras crear una solicitud de extracción. Para obtener más información, consulta la sección "[Cambiar entre ramas](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Haz clic en **Create Pull Request** (Crear solicitud de extracción). {% data variables.product.prodname_desktop %} abrirá tu buscador predeterminado para llevarte a {% data variables.product.prodname_dotcom %}. ![El botón de crear solicitud de extracción](/assets/images/help/desktop/mac-create-pull-request.png)

4. En {% data variables.product.prodname_dotcom %}, confirma que la rama en el menú desplegable de **base:** se aquella en donde quieres fusionar tus cambios. Confirma que la rama en el menú desplegable de **comparar:** es la rama de tema en donde realizaste tus cambios. ![Menús desplegables para elegir la base y comparar ramas](/assets/images/help/desktop/mac-create-pull-request.png) 
   
   {% data reusables.repositories.pr-title-description %}
   
   
   
   {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Cambia a la rama para la cual quieras crear una solicitud de extracción. Para obtener más información, consulta la sección "[Cambiar entre ramas](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Haz clic en **Create Pull Request** (Crear solicitud de extracción). {% data variables.product.prodname_desktop %} abrirá tu buscador predeterminado para llevarte a {% data variables.product.prodname_dotcom %}. ![El botón de crear solicitud de extracción](/assets/images/help/desktop/windows-create-pull-request.png)

3. En {% data variables.product.prodname_dotcom %}, confirma que la rama en el menú desplegable de **base:** se aquella en donde quieres fusionar tus cambios. Confirma que la rama en el menú desplegable de **comparar:** es la rama de tema en donde realizaste tus cambios. ![Menús desplegables para elegir la base y comparar ramas](/assets/images/help/desktop/mac-create-pull-request.png) 
   
   {% data reusables.repositories.pr-title-description %}
   
   
   
   {% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt %}

{% codespaces %}

1. Once you've committed changes to your local copy of the repository, click the **Create Pull Request** icon. ![Barra lateral de control de código fuente con el botón de preparación resaltado](/assets/images/help/codespaces/codespaces-commit-pr-button.png)  

1. Verifica que el repositorio y la rama local desde la que estás haciendo la fusión y la rama y repositorio remotos hacia los que estés haciendo la fusión sean correctos. Después, asigna un nombre y descripción a la solicitud de cambios. ![Barra lateral de control de código fuente con el botón de preparación resaltado](/assets/images/help/codespaces/codespaces-commit-pr.png)

1. Da clic en **Crear**.

For more information on creating pull requests in {% data variables.product.prodname_codespaces %}, see "[Using Codespaces for pull requests](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests)."

{% endcodespaces %}

{% endif %}


## Leer más

- "[Crear una solicitud de extracción desde una bifurcación](/articles/creating-a-pull-request-from-a-fork)"
- "[Cambiar la rama base de una solicitud de extracción](/articles/changing-the-base-branch-of-a-pull-request)"
- "[Agregar propuestas y solicitudes de extracción al tablero de proyecto desde la barra lateral](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)"
- "[Acerca de la automatización para las propuestas y las solicitudes de extracción con parámetros de consulta ](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Asignar propuestas y solicitudes de cambio a otros usuarios de GitHub](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)"
- "[Escribir en GitHub](/github/writing-on-github)"
