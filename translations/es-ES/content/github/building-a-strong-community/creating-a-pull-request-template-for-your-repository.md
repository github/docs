---
title: Crear una plantilla de solicitud de extracción para tu repositorio
intro: 'Cuando agregas una plantilla de solicitud de extracción a tu repositorio, los colaboradores del proyecto verán automáticamente los contenidos de la plantilla en el cuerpo de la solicitud de extracción.'
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Para obtener más información, consulta "[Acerca de las plantillas de propuestas y solicitudes de extracción](/articles/about-issue-and-pull-request-templates)".

Puedes crear un subdirectorio *PULL_REQUEST_TEMPLATE/* en alguna de las carpetas admitidas para incluir múltiples plantillas de solicitudes de extracción, y utilizar el parámetro de consulta `template` para especificar la plantilla que completará el cuerpo de la solicitud de extracción. Para obtener más información, consulta "[Acerca de la automatización para las propuestas y las solicitudes de extracción con parámetros de consulta ](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

Puedes crear plantillas predeterminadas de solicitud de cambios para tu cuenta de organización {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} o de usuario{% endif %}. Para obtener más información, consulta "[Crear un archivo de salud predeterminado para la comunidad](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% endif %}

### Agregar una plantilla de solicitud de extracción

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. En el campo para el nombre del archivo:
    -  Para hacer que tu plantilla de solicitud de extracción se pueda ver en el directorio raíz del repositorio, nómbrala como `pull_request_template.md`. ![Nuevo nombre de plantilla de solicitud de extracción en un directorio raíz](/assets/images/help/repository/pr-template-file-name.png)
    - Para hacer que tu plantilla de solicitud de extracción se pueda ver en el directorio `docs` del repositorio, nómbrala como `docs/pull_request_template.md`. ![Nueva plantilla de solicitud de extracción en un directorio de documentos](/assets/images/help/repository/pr-template-file-name-docs.png)
    - Para guardar tu archivo en un directorio oculto, nombra la plantilla de solicitud de extracción `.github/pull_request_template.md`. ![Nueva plantilla de solicitud de extracción en un directorio oculto](/assets/images/help/repository/pr-template-hidden-directory.png)
    - Para crear plantillas de solicitud de extracción múltiples y utilizar el parámetro de consulta `template` para especificar una plantilla para completar el cuerpo de la solicitud de extracción, escribe *.github/PULL_REQUEST_TEMPLATE/* y luego, el nombre de tu plantilla de solicitud de extracción. Por ejemplo, `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`. También puedes almacenar plantillas de solicitud de extracción múltiples en un subdirectorio `PULL_REQUEST_TEMPLATE` dentro de la raíz o directorios `docs/`. Para obtener más información, consulta "[Acerca de la automatización para las propuestas y las solicitudes de extracción con parámetros de consulta ](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)" ![Nueva plantilla de solicitud de extracción múltiple en un directorio oculto](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. En el cuerpo del nuevo archivo, agrega tu plantilla de solicitud de extracción. Puede incluir:
    - Una [ referencia a una propuesta relacionada](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) en tu repositorio.
    - Una descripción de los cambios propuestos en la solicitud de extracción.
    - [@menciones](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) de la persona o del equipo responsable de revisar los cambios propuestos.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} Las plantillas están disponibles para los colaboradores cuando están fusionadas dentro de la rama predeterminada del repositorio.
{% data reusables.files.propose_new_file %}

### Leer más

- "[Acerca de las plantillas de propuestas y de solicitudes de extracción](/articles/about-issue-and-pull-request-templates)"
- "[Acerca de la automatización para las propuestas y las solicitudes de extracción con parámetros de consulta ](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Crear una solicitud de extracción](/articles/creating-a-pull-request)"
