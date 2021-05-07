---
title: Crear de forma manual una plantilla de propuesta única para tu repositorio
intro: 'Cuando agregas una plantilla de propuesta creada de forma manual a tu repositorio, los colaboradores del proyecto verán automáticamente los contenidos de la plantilla en el cuerpo de la propuesta.'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository/
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Community
---

{% data reusables.repositories.legacy-issue-template-tip %}

Puedes crear un subdirectorio de *ISSUE_TEMPLATE/* (PLANTILLA DE PROPUESTA) en alguna de las carpetas admitidas para incluir múltiples plantillas de propuestas, y utilizar el parámetro de consulta `template` para especificar la plantilla que completará el cuerpo de la propuesta. Para obtener más información, consulta "[Acerca de la automatización para las propuestas y las solicitudes de extracción con parámetros de consulta ](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"

Puede añadir texto preliminar de YAML a cada plantilla de reporte de problemas para pre-llenar el título del mismo, añadir etiquetas y personal asignado automáticamente, y asignar un nombre y descripción que se mostrará en el selector de la misma, el cual verán las personas cuando se cree un nuevo reporte de problemas en su repositorio.

Aquí hay un ejemplo de texto preliminar de YAML.

```yaml
---
nombre: Problema de rastreo
acerca de: Utilice esta plantilla para rastrear nuevas características.
título: "[DATE]: [FEATURE NAME]"
etiquetas: problema de rastreo, necesita clasificación
asignados: octocat
---
```
{% note %}

**Nota:** Si un valor del texto preliminar incluye algún caracter reservado para YAML tal como `:`, deberás poner dicho valor entre comillas íntegramente. Por ejemplo, `":bug: Bug"` o `":new: triage needed, :bug: bug"`.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

### Agregar una plantilla de propuesta

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. En el campo para el nombre del archivo:
    -  Para que tu plantilla de propuesta sea visible en el directorio raíz del repositorio, escribe el nombre de tu *issue_template* (plantilla de propuesta). Por ejemplo, `issue_template.md`. ![Nuevo nombre de la plantilla de propuesta en un directorio raíz](/assets/images/help/repository/issue-template-file-name.png)
    - Para que tu plantilla de propuesta sea visible en el directorio `docs` del repositorio, escribe *docs/* seguido del nombre de tu *issue_template*. Por ejemplo, `docs/issue_template.md`, ![Nueva plantilla de propuesta en el directorio docs](/assets/images/help/repository/issue-template-file-name-docs.png)
    - Para almacenar tu archivo en un directorio escondido, escribe *.github/* seguido del nombre de tu *issue_template*. Por ejemplo, `.github/issue_template.md`. ![Nueva plantilla de propuesta en un directorio oculto](/assets/images/help/repository/issue-template-hidden-directory.png)
    - Para crear múltiples plantillas de propuestas y utilizar el parámetro de consulta `template` para especificar una plantilla para que complete el cuerpo de la propuesta, escribe *.github/ISSUE_TEMPLATE/*, después el nombre de tu plantilla de propuesta. Por ejemplo, `.github/ISSUE_TEMPLATE/issue_template.md`. Puedes también almacenar múltiples plantillas de propuestas en un subdirectorio `ISSUE_TEMPLATE` dentro de la raíz o directorios `docs/`. Para obtener más información, consulta "[Acerca de la automatización para las propuestas y las solicitudes de extracción con parámetros de consulta ](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)" ![Nueva plantilla de propuesta múltiple en un directorio oculto](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. En el cuerpo del nuevo archivo, agrega tu plantilla de propuesta. Puede incluir:
    - Texto preliminar de YAML
    - Comportamiento esperado y comportamiento real
    - Pasos para reproducir el problema
    - Especificaciones como la versión del proyecto, sistema operativo o hardware
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} Las plantillas están disponibles para los colaboradores cuando están fusionadas dentro de la rama predeterminada del repositorio.
{% data reusables.files.propose_new_file %}

### Leer más

- "[Acerca de las plantillas de propuestas y de solicitudes de extracción](/articles/about-issue-and-pull-request-templates)"
- "[Configurar las plantillas de reporte de problemas en su repositorio](/articles/configuring-issue-templates-for-your-repository)"
- "[Acerca de la automatización para las propuestas y las solicitudes de extracción con parámetros de consulta ](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Crear una propuesta](/articles/creating-an-issue)"
