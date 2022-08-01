---
title: 'Adding items to your {% data variables.projects.project_v2 %}'
shortTitle: Adding items
intro: 'Learn how to add pull requests, issues, and draft issues to your projects individually or in bulk.'
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

Tu proyecto puede rastrear borradores de propuestas, propuestas, y solicitudes de cambios.

{% note %}

**Note:** A project can contain a maximum of 1,200 items and 10,000 archived items.

{% endnote %}

### Adding issues and pull requests to a project

#### Pasting the URL of an issue or pull request

{% data reusables.projects.add-item-via-paste %}

#### Buscar una propuesta o solicitud de cambios

{% data reusables.projects.add-item-bottom-row %}
2. Enter <kbd>#</kbd>.
3. Selecciona el repositorio en donde se ubica la solicitud de cambios o propuesta. Puedes teclear la parte del nombre de repositorio para reducir tus opciones. ![Screenshot showing pasting an issue URL to add it to the project](/assets/images/help/projects-v2/add-item-select-repo.png)
4. Selecciona la propuesta o solicitud de cambios. Puedes teclear parte del título para reducir tus opciones. ![Screenshot showing pasting an issue URL to add it to the project](/assets/images/help/projects-v2/add-item-select-issue.png)

#### Bulk adding issues and pull requests

1. In the bottom row of the project, click {% octicon "plus" aria-label="plus icon" %}. ![Screenshot showing + button at the bottom of the project](/assets/images/help/projects-v2/omnibar-add.png)
1. Click **Add item from repository**. ![Screenshot showing "add item from repository" menu item](/assets/images/help/projects-v2/add-bulk-menu-item.png)
{% data reusables.projects.bulk-add %}

#### Agregar propuestas o solicitudes de cambio múltiples desde un repositorio

1. En {% data variables.product.product_location %}, navega al repositorio que contiene las propuestas o solicitudes de cambio que quieras agregar a tu proyecto.
{% data reusables.repositories.sidebar-issue-pr %}
1. A la izquierda de cada título de propuesta, selecciona aquellas que quieras agregar a tu proyecto. ![Captura de pantalla que muestra una casilla de verificación para seleccionar una propuesta o solicitud de cambios](/assets/images/help/issues/select-issue-checkbox.png)
1. Opcionalmente, para seleccionar todas las propuestas o solicitudes de cambio en la página, en la parte superior de la lista de propuesta o solicitudes de cambio, selecciona todas. ![Captura de pantalla que muestra la casilla de verificación para seleccionar todo en la pantalla](/assets/images/help/issues/select-all-checkbox.png)
1. Above the list of issues or pull requests, click **Projects**. ![Screenshot showing projects option](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. Haz clic en los proyectos a los que quieras agregar las propuestas o solicitudes de cambio. ![Captura de pantalla que muestra la casilla de verificación para seleccionar todo en la pantalla](/assets/images/help/projects-v2/issue-index-select-project.png)

#### Asignar un rpoyecto desde dentro de una propuesta o solicitud de cambios

1. Navega a la propuesta o solicitud de cambios que quieras agregar a un proyecto.
2. En la barra lateral, haz clic en **Proyectos**. ![Screenshot showing "Projects" in the issue sidebar](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. Select the project that you want to add the issue or pull request to. ![Screenshot showing selecting a project from the issue sidebar](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. Optionally, populate the custom fields. ![Barra lateral del proyecto](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### Using the command palette to add an issue or pull request

1. {% data reusables.projects.open-command-palette %}
1. Start typing "Add items" and press <kbd>Return</kbd>.
{% data reusables.projects.bulk-add %}

### Crear borradores de propuestas

Los borradores de propuestas son útiles si quieres capturar ideas rápidamente. Unlike issues and pull requests that are referenced from your repositories, draft issues exist only in your project.

{% data reusables.projects.add-draft-issue %}

Los borradores de propuesta pueden tener un título, cuerpo de texto, asignados y cualquier campo personalizado desde tu proyecto. Para poder poblar el repositorio, las etiquetas o hitos de un borrador de propuesta, primero debes convertirla en una propuesta formal. Para obtener más información, consulta la sección "[Convertir los borradores de propuesta en propuestas formales](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues)".

{% note %}

**Nota**: Los usuarios no recibirán notificaciones cuando se les asigne o se les mencione en un borrador de propuesta, a menos de que este se convierta en una propuesta formal.

{% endnote %}
