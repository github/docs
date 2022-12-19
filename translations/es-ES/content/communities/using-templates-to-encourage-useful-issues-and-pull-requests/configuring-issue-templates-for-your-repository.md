---
title: Configurar las plantillas de reporte de problemas para tu repositorio
intro: Puedes personalizar las plantillas disponibles para los colaboradores para que las utilicen cuando abren un nuevo reporte de problema en tu repositorio.
redirect_from:
  - /github/building-a-strong-community/creating-issue-templates-for-your-repository
  - /articles/configuring-issue-templates-for-your-repository
  - /github/building-a-strong-community/configuring-issue-templates-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Configure
ms.openlocfilehash: d415d95f8aeab1b053663437b6dbf6dd637e3039
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147431996'
---
{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Crear plantillas de reporte de problemas

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En la sección "Características", en "Incidencias", haga clic en **Configurar plantillas**.
![Botón para iniciar la configuración de plantillas](/assets/images/help/repository/set-up-templates.png)
4. Usa el menú desplegable Agregar plantilla y haz clic en el tipo de plantilla que deseas crear.
![Menú desplegable Agregar plantilla](/assets/images/help/repository/add-template-drop-down-menu.png)
5. Para obtener una vista previa de la plantilla o editarla antes de confirmarla en el repositorio, haga clic en **Vista previa y edición**.
![Botón para mostrar la vista previa y editar](/assets/images/help/repository/preview-and-edit-button.png)
6. Para editar la plantilla, haga clic en {% octicon "pencil" aria-label="The edit icon" %} y escriba en los campos para editar el contenido.
![Botón Editar plantilla de incidencia](/assets/images/help/repository/issue-template-edit-button.png)
7. Para establecer automáticamente un título predeterminado para la propuesta, asigna la propuesta a personas que tengan acceso de lectura al repositorio o aplica etiquetas a tu plantilla de propuesta e ingresa estos detalles en "Información adicional opcional". También puede agregar estos detalles en la plantilla de incidencia con `title`, `labels` o `assignees` en un texto preliminar de YAML.
![Información adicional de la plantilla de incidencia](/assets/images/help/repository/additional-issue-template-info.png)
8. Cuando haya terminado de editar y ver la vista previa de la plantilla, haga clic en **Proponer cambios** en la esquina superior derecha de la página.
![Botón para proponer cambios](/assets/images/help/repository/propose-changes-button.png)
9. Escribe un mensaje de confirmación que describa los cambios que realizaste.
![Campo de mensaje de confirmación de la plantilla de incidencia](/assets/images/help/repository/issue-template-commit-message-field.png)
10. Debajo de los campos del mensaje de confirmación, decide si deseas confirmar tu plantilla directamente en la rama predeterminada o si deseas crear una nueva rama y abrir una solicitud de extracción. Para más información sobre las solicitudes de incorporación de cambios, vea "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".
![Opción para confirmar la plantilla de incidencia en la rama principal o abrir una solicitud de incorporación de cambios](/assets/images/help/repository/issue-template-commit-to-master-or-open-pull-request.png)
11. Haga clic en **Confirmar cambios**. Una vez que estos cambios se fusionen en la rama predeterminada, la plantilla estará disponible para que la usen los colaboradores cuando abran nuevas propuestas en el repositorio.

{% ifversion fpt or ghec %}

## Crear formatos de propuestas

{% data reusables.community.issue-forms-beta %}

Con los formatos de propuestas, puedes crear plantillas de propuestas que tengan campos de formato web personalizables. Puedes fomentar que los contribuyentes incluyan información específica y estructurada si utilizas formatos de propuestas en tu repositorio. Los formatos de propuesta se escriben en YAML utilizando el modelado de formatos de {% data variables.product.prodname_dotcom %}. Para más información, vea "[Sintaxis del esquema de formulario para {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)". {% data reusables.actions.learn-more-about-yaml %}

Para usar un formulario de incidencia en el repositorio, debe crear un archivo y agregarlo a la carpeta `.github/ISSUE_TEMPLATE` del repositorio.

Aquí tienes un ejemplo de un archivo de confguración de un formato de propuesta.

{% data reusables.community.issue-forms-sample %}

Aquí está la versión interpretada de un formato de propuesta.
  ![Un formulario de incidencia representado](/assets/images/help/repository/sample-issue-form.png)

1. Elige un repositorio en donde quieras crear un formato de propuesta. Puedes utilizar un repositorio existente al cual tengas acceso de escritura o puedes crear un repositorio nuevo. Para más información sobre cómo crear un repositorio, vea "[Creación de un repositorio](/articles/creating-a-new-repository)".
2. En el repositorio, cree un archivo denominado `.github/ISSUE_TEMPLATE/FORM-NAME.yml` y reemplace `FORM-NAME` por el nombre del formulario de incidencia. Para más información sobre cómo crear archivos en GitHub, vea "[Creación de archivos](/github/managing-files-in-a-repository/creating-new-files)".
3. En el campo del archivo nuevo, teclea el contenido de tu formato de propuesta. Para más información, vea "[Sintaxis de los formularios de incidencia](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)".
4. Confirma tu archivo en la rama predeterminada de tu repositorio. Para más información, vea "[Creación de archivos](/github/managing-files-in-a-repository/creating-new-files)".

{% endif %}

## Configurar el selector de plantillas

{% data reusables.repositories.issue-template-config %}

Puede animar a los colaboradores a usar plantillas de incidencia si establece `blank_issues_enabled` en `false`. Si establece `blank_issues_enabled` en `true`, los usuarios tendrán la opción de abrir una incidencia en blanco.

{% note %}

**Nota:** Si ha usado el flujo de trabajo heredado para crear manualmente un archivo `issue_template.md` en la carpeta `.github` y habilita las incidencias en blanco en el archivo *config.yml*, se utilizará la plantilla de `issue_template.md` cuando los usuarios decidan abrir una incidencia en blanco. Si inhabilitas los reportes de problemas en blanco, la plantilla nunca se utilizará.

{% endnote %}

Si prefiere recibir determinados informes fuera de {% data variables.product.product_name %}, puede dirigir a los usuarios a sitios externos con `contact_links`.

Este es un archivo *config.yml* de ejemplo.

```yaml{:copy}
blank_issues_enabled: false
contact_links:
  - name: {% data variables.product.prodname_gcf %}
    url: https://github.com/orgs/community/discussions
    about: Please ask and answer questions here.
  - name: {% data variables.product.prodname_dotcom %} Security Bug Bounty
    url: https://bounty.github.com/
    about: Please report security vulnerabilities here.
```

Tu archivo de configuración personalizará el selector de plantilla cuando el archivo se combina en la rama predeterminada del repositorio.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. En el campo del nombre de archivo, escriba `.github/ISSUE_TEMPLATE/config.yml`.
  ![Nombre de archivo de configuración](/assets/images/help/repository/template-config-file-name.png)
4. Teclea el contenido de tu archivo de configuración en el cuerpo del nuevo archivo.
  ![Contenido del archivo de configuración](/assets/images/help/repository/template-config-file-content.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Información adicional

- "[Acerca de las plantillas de incidencias y las solicitudes de incorporación de cambios](/articles/about-issue-and-pull-request-templates)"
- "[Creación manual de una sola plantilla de incidencia para el repositorio](/articles/manually-creating-a-single-issue-template-for-your-repository)"
