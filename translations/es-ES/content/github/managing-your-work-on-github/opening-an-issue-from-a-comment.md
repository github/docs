---
title: Abrir un informe de problemas desde un comentario
intro: Puedes abrir un nuevo informe de problemas desde un comentario específico en un informe de problemas o solicitud de extracción.
permissions: People with read permissions can create an issue in a repository where issues are enabled.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Cuando abres un informe de problemas desde un comentario, este informe contiene un fragmento de código que muestra en dónde se hizo el comentario originalmente.

{% data reusables.repositories.administrators-can-disable-issues %}

1. Navega al comentario desde el cual quieras abrir un informe de problemas.

2. Dentro del comentario, da clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Botón Kebab en el comentario de la revisión de solicitud de extracción](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. Haz clic en **Reference in new issue** (Referencia en la propuesta nueva). ![Referencia en el elemento del menú de propuestas nuevas](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. Usa el menú desplegable "Repository" (Repositorio) y selecciona el repositorio donde desees abrir la propuesta. ![Repositorio desplegable para nueva propuesta](/assets/images/help/pull_requests/new-issue-repository.png)
5. Escribe un título descriptivo y un cuerpo para la propuesta. ![Título y cuerpo para la nueva propuesta](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. Haz clic en **Create issue** (Crear propuesta). ![Botón para crear la nueva propuesta](/assets/images/help/pull_requests/create-issue.png)
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}

### Leer más

- [Crear una propuesta](/github/managing-your-work-on-github/creating-an-issue)"
