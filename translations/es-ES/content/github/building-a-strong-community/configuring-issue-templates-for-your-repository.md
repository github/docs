---
title: Configurar las plantillas de reporte de problemas para tu repositorio
intro: Puedes personalizar las plantillas disponibles para los colaboradores para que las utilicen cuando abren un nuevo reporte de problema en tu repositorio.
redirect_from:
  - /github/building-a-strong-community/creating-issue-templates-for-your-repository
  - /articles/configuring-issue-templates-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

### Crear plantillas de reporte de problemas

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

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Configurar el selector de plantillas

{% data reusables.repositories.issue-template-config %}

Puedes alentar a los colaboradores para que utilicen plantillas de informe de problemas si configuras el parámetro `blank_issues_enabled` como `false`. Si configuras `blank_issues_enabled` como `true`, las personas podrán abrir un reporte de problema en blanco.

{% note %}

**Nota:** Si utilizaste tu flujo de trabajo tradicional para crear manualmente un archivo de `issue_template.md` fy habilitaste el reporte de problemas en blanco en tu archivo de *config.yml* se utilizará la plantilla en `issue_template.md` cuando las personas decidan abrir un reporte de problema en blanco. Si inhabilitas los reportes de problemas en blanco, la plantilla nunca se utilizará.

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

### Further reading

- "[Acerca de las plantillas de propuestas y de solicitudes de extracción](/articles/about-issue-and-pull-request-templates)"
- "[Crear de forma manual una plantilla de propuesta única para tu repositorio](/articles/manually-creating-a-single-issue-template-for-your-repository)"
