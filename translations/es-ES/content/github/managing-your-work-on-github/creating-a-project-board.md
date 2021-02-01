---
title: Crear un tablero de proyecto
intro: 'Los tableros de proyecto se pueden usar para crear flujos de trabajo personalizados de acuerdo con tus necesidades, como hacer un seguimiento y priorizar trabajos con características específicas, hojas de ruta completas y hasta listas de verificación de lanzamientos.'
redirect_from:
  - /articles/creating-a-project/
  - /articles/creating-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} Para obtener más información, consulta "[Enlazar un repositorio a un tablero de proyecto](/articles/linking-a-repository-to-a-project-board)".

Una vez que has creado tu tablero de proyecto, puedes agregarle propuestas, solicitudes de extracción y notas. Para obtener más información, consulta "[Agregar propuestas y solicitudes de extracción a un tablero de proyecto](/articles/adding-issues-and-pull-requests-to-a-project-board)" y "[Agregar notas a un tablero de proyecto](/articles/adding-notes-to-a-project-board)".

También puedes configurar automatizaciones de flujo de trabajo para mantener tu tablero de proyecto sincronizado con el estado de las propuestas y solicitudes de extracción. Para obtener más información, consulta "[Acerca de la automatización para tableros de proyecto](/articles/about-automation-for-project-boards)".

{% data reusables.project-management.project-board-import-with-api %}

### Crear un tablero de proyecto propiedad de un usuario

{% data reusables.profile.access_profile %}
2. En la parte superior de tu página de perfil, en la navegación principal, da clic en
{% octicon "project" aria-label="The project board icon" %} **Proyectos**.
![Pestaña Project (Proyecto)](/assets/images/help/projects/user-projects-tab.png)
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.choose-visibility %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### Crear un tablero de proyecto para toda la organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.choose-visibility %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### Crear un tablero de proyecto para un repositorio

{% data reusables.repositories.navigate-to-repo %}
2. Under your repository name, click
{% octicon "project" aria-label="The project board icon" %} **Proyectos**.
![Pestaña Project (Proyecto)](/assets/images/help/projects/repo-tabs-projects.png)
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### Further reading

- "[Acerca de los tableros de proyectos](/articles/about-project-boards)"
- "[Editar un tablero de proyecto](/articles/editing-a-project-board)"{% if currentVersion == "free-pro-team@latest" %}
- "[Copying a project board](/articles/copying-a-project-board)"{% endif %}
- "[Cerrar un tablero de proyecto](/articles/closing-a-project-board)"
- "[Acerca de la automatización de los tableros de proyecto](/articles/about-automation-for-project-boards)"
