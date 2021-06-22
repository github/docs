---
title: Crear una propuesta
intro: 'Las propuestas se pueden usar para hacer un seguimiento de los errores, mejoras u otras solicitudes.'
redirect_from:
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: People with read permissions can create an issue in a repository where issues are enabled.
topics:
  - Pull requests
---
{% data reusables.repositories.create-issue-in-public-repository %}

Puedes abrir una nueva propuesta basada en el código a partir de una solicitud de extracción existente. Para obtener más información, consulta la sección "[Abrir un informe de problemas desde el código](/github/managing-your-work-on-github/opening-an-issue-from-code)".

Puedes abrir un nuevo informe de problemas directamente desde un comentario en algún otro informe o en una solicitud de extracción. Para obtener más información, consulte la sección "[Abrir un informe de problemas desde un comentario](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also create an issue using the {% data variables.product.prodname_cli %}. For more information, see "[`gh issue create`](https://cli.github.com/manual/gh_issue_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

Si utilizas un tablero de proyecto para rastrear y priorizar tu trabajo, puedes convertir las notas del mismo en informes de problemas. Para obtener más información, consulta la sección "[Acerca de los tableros de proyecto](/github/managing-your-work-on-github/about-project-boards)" y "[Agregar notas a un tablero de proyecto](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)".

{% tip %}

**Sugerencias**: Los mantenedores del proyecto pueden elegir hacer lo siguiente:
  - Crear una plantilla de propuesta para un repositorio. Las plantillas incluyen indicaciones para brindar información en el cuerpo de una propuesta. Para obtener más información, consulta "[Acerca de las plantillas de propuestas y solicitudes de extracción](/github/building-a-strong-community/about-issue-and-pull-request-templates)".
  - Inhabilitar las propuestas para un repositorio. Para obtener más información, consulta la sección "[Inhabilitar informes de problemas](/github/managing-your-work-on-github/disabling-issues)". Pull requests can't be turned off and are always available.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. Haz clic en **Nueva propuesta**. ![Botón Nuevas propuestas](/assets/images/help/issues/new_issues_button.png)
4. Si hay distintos tipos de propuestas, haz clic en **Empezar** junto al tipo de propuesta que deseas abrir. ![Selecciona el tipo de informe de problemas que quieres crear](/assets/images/help/issues/issue_template_get_started_button.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion >= "enterprise-server@2.21" %}
5. Opcionalmente, da clic en **Abrir un informe de problemas en blanco** si el tipo de informe de problemas que quieres abrir no se incluye en las opciones disponibles. ![Enlace para abrir un informe de problemas en blanco](/assets/images/help/issues/blank_issue_link.png)
{% else %}
5. Opcionalmente, da clic en **Abrir un informe de problemas normal** si el tipo de informe de problemas que quieres abrir no se incluye en las opciones disponibles. ![Enlace para abrir un informe de problemas normal](/assets/images/help/issues/regular_issue_link.png)
{% endif %}
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}
### Leer más

- "[Crear un enlace permanente a un fragmento de código](/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet)".
