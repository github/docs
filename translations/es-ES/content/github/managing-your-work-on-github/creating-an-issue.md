---
title: Crear una propuesta
intro: 'Las propuestas se pueden usar para hacer un seguimiento de los errores, mejoras u otras solicitudes.'
permissions: People with read permissions can create an issue in a repository where issues are enabled.
redirect_from:
  - /articles/creating-an-issue
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Puedes abrir una nueva propuesta basada en el código a partir de una solicitud de extracción existente. Para obtener más información, consulta la sección "[Abrir una propuesta desde el código](/github/managing-your-work-on-github/opening-an-issue-from-code)".

Puedes abrir una propuesta nueva desde un comentario en algún otro informe o en una solicitud de cambios. Para obtener más información, consulte la sección "[Abrir un informe de problemas desde un comentario](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**Tip**: También puedes crear una propuesta si usas el {% data variables.product.prodname_cli %}. Para obtener más información, consulta "[`gh issue create`](https://cli.github.com/manual/gh_issue_create)" en la documentación de {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

Si utilizas un tablero de proyecto para rastrear y priorizar tu trabajo, puedes convertir las notas del mismo en informes de problemas. Para obtener más información, consulta la sección "[Acerca de los tableros de proyecto](/github/managing-your-work-on-github/about-project-boards)" y "[Agregar notas a un tablero de proyecto](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)".

{% tip %}

**Sugerencias**: Los mantenedores del proyecto pueden elegir hacer lo siguiente:
  - Crear una plantilla de propuesta para un repositorio. Las plantillas incluyen indicaciones para brindar información en el cuerpo de una propuesta. Para obtener más información, consulta "[Acerca de las plantillas de propuestas y solicitudes de extracción](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)".
  - Inhabilitar las propuestas para un repositorio. Para obtener más información, consulta la sección "[Inhabilitar propuestas](/github/managing-your-work-on-github/disabling-issues)". Las solicitudes de cambios no pueden apagarse y siempre están disponibles.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. Haz clic en **Propuesta nueva**. ![Botón Nuevas propuestas](/assets/images/help/issues/new_issues_button.png)
4. Si hay distintos tipos de propuestas, haz clic en **Empezar** junto al tipo de propuesta que deseas abrir. ![Selecciona el tipo de propuesta que quieres crear](/assets/images/help/issues/issue_template_get_started_button.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion >= "enterprise-server@2.21" %}
5. Opcionalmente, da clic en **Abrir una propuesta en blanco** si el tipo de propuesta que quieres abrir no se incluye en las opciones disponibles. ![Enlace para abrir una propuesta en blanco](/assets/images/help/issues/blank_issue_link.png)
{% else %}
5. Opcionalmente, da clic en **Abrir una propuesta normal** si el tipo de propuesta que quieres abrir no se incluye en las opciones disponibles. ![Enlace para abrir una propuesta normal](/assets/images/help/issues/regular_issue_link.png)
{% endif %}
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}
### Leer más

- "[Crear un enlace permanente a un fragmento de código](/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet)".
