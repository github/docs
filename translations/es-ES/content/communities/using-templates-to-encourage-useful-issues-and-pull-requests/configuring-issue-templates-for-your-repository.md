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
topics:
  - Community
shortTitle: Configurar
---

{% ifversion fpt or ghes %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

{% ifversion fpt or ghae or ghes %}

## Crear plantillas de reporte de problemas

{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En la sección "Características", en "Propuestas", haz clic en **Configurar plantillas**. ![Botón Start template setup (Comenzar la configuración de plantilla)](/assets/images/help/repository/set-up-templates.png)
4. Usa el menú desplegable Agregar plantilla y haz clic en el tipo de plantilla que deseas crear. ![Menú desplegable Agregar plantilla](/assets/images/help/repository/add-template-drop-down-menu.png)
5. Para acceder a la vista previa o editar la plantilla antes de confirmarla en el repositorio, haz clic en ** Mostrar la vista previa y editar**. ![Botón para mostrar la vista previa y editar](/assets/images/help/repository/preview-and-edit-button.png)
6. Para editar la plantilla, haz clic en {% octicon "pencil" aria-label="The edit icon" %} y escribe en los campos para editar el contenido. ![Botón Issue template edit (Editar plantilla de propuesta)](/assets/images/help/repository/issue-template-edit-button.png)
7. Para establecer automáticamente un título predeterminado para la propuesta, asigna la propuesta a personas que tengan acceso de lectura al repositorio o aplica etiquetas a tu plantilla de propuesta e ingresa estos detalles en "Información adicional opcional". También puedes agregar estos detalles en la plantilla de propuesta con `título`, `etiquetas` o `asignatario` en un formato de texto preliminar en lenguaje YAML. ![Información adicional de plantilla de propuesta](/assets/images/help/repository/additional-issue-template-info.png)
8. Cuando hayas terminado de editar y visualizar la vista previa de tu plantilla, haz clic en **Proponer cambios** en el ángulo superior derecho de la página. ![Botón para proponer cambios](/assets/images/help/repository/propose-changes-button.png)
9. Escribe un mensaje de confirmación que describa los cambios que realizaste. ![Campo para el mensaje de confirmación de la plantilla de propuesta](/assets/images/help/repository/issue-template-commit-message-field.png)
10. Debajo de los campos del mensaje de confirmación, decide si deseas confirmar tu plantilla directamente en la rama predeterminada o si deseas crear una nueva rama y abrir una solicitud de extracción. Para obtener más información acerca de las solicitudes de extracción, consulta "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)". ![Elecciòn de la plantilla de propuesta para mantener o abrir una solicitud de cambios](/assets/images/help/repository/issue-template-commit-to-master-or-open-pull-request.png)
11. Haz clic en **Commit changes** (Confirmar cambios). Una vez que estos cambios se fusionen en la rama predeterminada, la plantilla estará disponible para que la usen los colaboradores cuando abran nuevas propuestas en el repositorio.

{% ifversion fpt %}

## Crear formatos de propuestas

{% data reusables.community.issue-forms-beta %}

Con los formatos de propuestas, puedes crear plantillas de propuestas que tengan campos de formato web personalizables. Puedes fomentar que los contribuyentes incluyan información específica y estructurada si utilizas formatos de propuestas en tu repositorio. Los formatos de propuesta se escriben en YAML utilizando el modelado de formatos de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Sintaxis para el modelado de formatos de {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)". {% data reusables.actions.learn-more-about-yaml %}

Para utilizar un formato de propuesta en tu repositorio, debes crear un archivo nuevo y agregarlo a la carpeta `.github/ISSUE_TEMPLATE` en tu repositorio.

Aquí tienes un ejemplo de un archivo de confguración de un formato de propuesta.

{% data reusables.community.issue-forms-sample %}

Aquí está la versión interpretada de un formato de propuesta.  ![Un formato de propuesta interpretado](/assets/images/help/repository/sample-issue-form.png)

1. Elige un repositorio en donde quieras crear un formato de propuesta. Puedes utilizar un repositorio existente al cual tengas acceso de escritura o puedes crear un repositorio nuevo. Para obtener más información sobre la creación de repositorios, consulta "[Crear un repositorio nuevo](/articles/creating-a-new-repository)."
2. En tu repositorio, crea un archivo que se llame `.github/ISSUE_TEMPLATE/FORM-NAME.yml`, reemplazando `FORM-NAME` con el nombre para tu formato de propueta. Para obtener más información acerca de cómo crear archivos nuevos en GitHub, consulta la sección "[Crear archivos nuevos](/github/managing-files-in-a-repository/creating-new-files)".
3. En el campo del archivo nuevo, teclea el contenido de tu formato de propuesta. Para obtener más información, consulta la sección "[Sintaxis para formatos de propuestas](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)".
4. Confirma tu archivo en la rama predeterminada de tu repositorio. Para obtener más información, consulta "[Crear nuevos archivos](/github/managing-files-in-a-repository/creating-new-files)."

{% endif %}

{% ifversion fpt or ghae or ghes %}
## Configurar el selector de plantillas

{% data reusables.repositories.issue-template-config %}

Puedes alentar a los colaboradores para que utilicen plantillas de informe de problemas si configuras el parámetro `blank_issues_enabled` como `false`. Si configuras `blank_issues_enabled` como `true`, las personas podrán abrir un reporte de problema en blanco.

{% note %}

**Note:** If you used the legacy workflow to manually create an `issue_template.md` file in the `.github` folder and enable blank issues in your *config.yml* file, the template in `issue_template.md` will be used when people chose to open a blank issue. Si inhabilitas los reportes de problemas en blanco, la plantilla nunca se utilizará.

{% endnote %}

Si prefieres recibir ciertos reportes fuera de {% data variables.product.product_name %}, puedes dirigir a las personas a sitios externos con `contact_links`.

Aquí hay un ejemplo del archivo *config.yml*.

```shell
blank_issues_enabled: false
contact_links:
  - name: {% data variables.product.prodname_gcf %}
    url: https://github.community/
    about: Please ask and answer questions here.
  - name: {% data variables.product.prodname_dotcom %} Security Bug Bounty
    url: https://bounty.github.com/
    about: Please report security vulnerabilities here.
```

Tu archivo de configuración personalizará el selector de plantilla cuando el archivo se combina en la rama predeterminada del repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Teclea `.github/ISSUE_TEMPLATE/config.yml` en el campo de nombre de archivo. ![Nombre de archivo de configuración](/assets/images/help/repository/template-config-file-name.png)
4. Teclea el contenido de tu archivo de configuración en el cuerpo del nuevo archivo. ![Contenido de archivo de configuración](/assets/images/help/repository/template-config-file-content.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
{% endif %}

## Leer más

- "[Acerca de las plantillas de propuestas y de solicitudes de extracción](/articles/about-issue-and-pull-request-templates)"
- "[Crear de forma manual una plantilla de propuesta única para tu repositorio](/articles/manually-creating-a-single-issue-template-for-your-repository)"
