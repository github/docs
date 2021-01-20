---
title: Solicitar una revisión de solicitud de extracción
intro: 'Después de crear una solicitud de extracción, le puedes pedir a una persona específica que revise los cambios que propusiste. Si eres miembro de la organización, también puedes solicitarle a un equipo específico que revise tus cambios.'
redirect_from:
  - /articles/requesting-a-pull-request-review
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Los propietarios y colaboradores de un repositorio que pertenece a una cuenta de usuario pueden asignar revisiones de solicitud de extracción. Los miembros de la organización con permisos de clasificación de un repositorio pueden asignar una revisión de solicitud de extracción.

Los propietarios o colaboradores pueden asignar una revisión de solicitud de extracción a cualquier persona que tenga [acceso de lectura](/articles/access-permissions-on-github) explícitamente garantizado a un repositorio que es propiedad del usuario. Los miembros de la organización pueden asignar la revisión de una solicitud de extracción a una persona o equipo con acceso de lectura a un repositorio. El revisor o equipo solicitado recibirá una notificación sobre tu solicitud de revisión de la solicitud de extracción. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Si solicitas una revisión de un equipo y se habilita una asignación de revisión de código, se solicitarán miembros específicos y el equipo se eliminará como revisor. Para obtener más información, consulta la sección "[Administrar una tarea de revisión de código para tu equipo](/github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team)".{% endif %}

{% note %}

**Nota:** Los autores de solicitudes de extracción no pueden solicitar revisiones a menos que sean propietarios del repositorio o colaboradores con acceso de escritura al repositorio.

{% endnote %}

Puedes solicitar una revisión de una persona sugerida o de una persona específica. Los revisores sugeridos se basan en los [datos del último responsable de git](/articles/tracking-changes-in-a-file/). Si solicitas una revisión, otras personas con acceso de escritura al repositorio pueden seguir revisando tu solicitud de extracción. Una vez que alguien haya revisado tu solicitud de código y hayas implementado los cambios necesarios, puedes volver a solicitar la revisión al mismo revisor. Si el revisor solicitado no emite una revisión y la solicitud de extracción cumple con los [requisitos para fusión](/articles/defining-the-mergeability-of-pull-requests) del repositorio, puedes fusionarla de todos modos.

{% data reusables.repositories.sidebar-pr %}
2. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción que quieres que una persona específica o un equipo revise.
3. Navega hacia **Reviewers** (Revisores) en la barra lateral derecha.
4. Para solicitar la revisión de una persona sugerida en **Reviewers** (Revisores), al lado del nombre de usuario, haz clic en **Request** (Solicitar). ![Icono Reviewers request (Solicitud de revisores) en la barra lateral derecha](/assets/images/help/pull_requests/request-suggested-review.png)
5. De manera opcional, para solicitar una revisión de alguna persona que no sea una persona sugerida, haz clic en **Reviewers** (Revisores), luego haz clic en un nombre en el menú desplegable. ![Icono Reviewers gear (Parámetro de revisores) en la barra lateral derecha](/assets/images/help/pull_requests/request-a-review-not-suggested.png)
6. De manera opcional, si conoces el nombre de la persona o el equipo del que quieres una revisión, haz clic en **Reviewers** (Revisores), luego escribe el nombre de usuario de la persona o el nombre del equipo al que le solicitarás que revise tus cambios. Haz clic en su nombre de equipo o nombre de usuario para solicitar una revisión. ![Campo para ingresar el nombre de usuario de un revisor y desplegable con el nombre del revisor](/assets/images/help/pull_requests/choose-pull-request-reviewer.png)
7. Después de que la solicitud de extracción esté revisada y de que hayas hecho los cambios necesarios, le puedes pedir a un revisor que vuelva a revisar tu solicitud de extracción. Navega hasta **Reviewers** (Revisores) en la barra lateral derecha y haz clic en {% octicon "sync" aria-label="The sync icon" %} al lado del nombre del revisor del que quieres la revisión. ![Icono Re-review sync (Sincronización de volver a revisar) en la barra lateral derecha](/assets/images/help/pull_requests/request-re-review.png)

### Further reading

- "[Acerca de las revisiones de solicitudes de extracción](/articles/about-pull-request-reviews)"
