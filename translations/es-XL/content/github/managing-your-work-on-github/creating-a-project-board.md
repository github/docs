---
title: Crear un tablero de proyecto
intro: 'Los tableros de proyecto se pueden usar para crear flujos de trabajo personalizados de acuerdo con tus necesidades, como hacer un seguimiento y priorizar trabajos con características específicas, hojas de ruta completas y hasta listas de verificación de lanzamientos.'
redirect_from:
  - /articles/creating-a-project/
  - /articles/creating-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{{ site.data.reusables.project-management.use-automated-template }}

{{ site.data.reusables.project-management.copy-project-boards }}

{{ site.data.reusables.project-management.link-repos-to-project-board }} Para obtener más información, consulta "[Enlazar un repositorio a un tablero de proyecto](/articles/linking-a-repository-to-a-project-board)".

Una vez que has creado tu tablero de proyecto, puedes agregarle propuestas, solicitudes de extracción y notas. Para obtener más información, consulta "[Agregar propuestas y solicitudes de extracción a un tablero de proyecto](/articles/adding-issues-and-pull-requests-to-a-project-board)" y "[Agregar notas a un tablero de proyecto](/articles/adding-notes-to-a-project-board)".

También puedes configurar automatizaciones de flujo de trabajo para mantener tu tablero de proyecto sincronizado con el estado de las propuestas y solicitudes de extracción. Para obtener más información, consulta "[Acerca de la automatización para tableros de proyecto](/articles/about-automation-for-project-boards)".

{{ site.data.reusables.project-management.project-board-import-with-api }}

### Crear un tablero de proyecto propiedad de un usuario

{{ site.data.reusables.profile.access_profile }}
2. On the top of your profile page, in the main navigation, click
{% octicon "project" aria-label="The project board icon" %} **Projects**.
![Pestaña Project (Proyecto)](/assets/images/help/projects/user-projects-tab.png)
{{ site.data.reusables.project-management.click-new-project }}
{{ site.data.reusables.project-management.create-project-name-description }}
{{ site.data.reusables.project-management.choose-template }}
{{ site.data.reusables.project-management.linked-repositories }}
{{ site.data.reusables.project-management.create-project-button }}
{{ site.data.reusables.project-management.add-column-new-project }}
{{ site.data.reusables.project-management.name-project-board-column }}
{{ site.data.reusables.project-management.select-column-preset }}
{{ site.data.reusables.project-management.select-automation-options-new-column }}
{{ site.data.reusables.project-management.click-create-column }}
{{ site.data.reusables.project-management.add-more-columns }}

{{ site.data.reusables.project-management.edit-project-columns }}

### Crear un tablero de proyecto para toda la organización

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.organization-wide-project }}
{{ site.data.reusables.project-management.click-new-project }}
{{ site.data.reusables.project-management.create-project-name-description }}
{{ site.data.reusables.project-management.choose-template }}
{{ site.data.reusables.project-management.linked-repositories }}
{{ site.data.reusables.project-management.create-project-button }}
{{ site.data.reusables.project-management.add-column-new-project }}
{{ site.data.reusables.project-management.name-project-board-column }}
{{ site.data.reusables.project-management.select-column-preset }}
{{ site.data.reusables.project-management.select-automation-options-new-column }}
{{ site.data.reusables.project-management.click-create-column }}
{{ site.data.reusables.project-management.add-more-columns }}

{{ site.data.reusables.project-management.edit-project-columns }}

### Crear un tablero de proyecto para un repositorio

{{ site.data.reusables.repositories.navigate-to-repo }}
2. Debajo del nombre de tu repositorio, da clic
{% octicon "project" aria-label="The project board icon" %} **Projects**.
![Pestaña Project (Proyecto)](/assets/images/help/projects/repo-tabs-projects.png)
{{ site.data.reusables.project-management.click-new-project }}
{{ site.data.reusables.project-management.create-project-name-description }}
{{ site.data.reusables.project-management.choose-template }}
{{ site.data.reusables.project-management.create-project-button }}
{{ site.data.reusables.project-management.add-column-new-project }}
{{ site.data.reusables.project-management.name-project-board-column }}
{{ site.data.reusables.project-management.select-column-preset }}
{{ site.data.reusables.project-management.select-automation-options-new-column }}
{{ site.data.reusables.project-management.click-create-column }}
{{ site.data.reusables.project-management.add-more-columns }}

{{ site.data.reusables.project-management.edit-project-columns }}

### Leer más

- "[Acerca de los tableros de proyectos](/articles/about-project-boards)"
- "[Editar un tablero de proyecto](/articles/editing-a-project-board)"{% if currentVersion == "free-pro-team@latest" %}
- "[Copying a project board](/articles/copying-a-project-board)"{% endif %}
- "[Cerrar un tablero de proyecto](/articles/closing-a-project-board)"
- "[Acerca de la automatización de los tableros de proyecto](/articles/about-automation-for-project-boards)"
