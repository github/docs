---
title: Configurar el escaneo de secretos para tus repositorios
intro: 'Puedes configurar la forma en que {% data variables.product.prodname_dotcom %} escanea tus repositorios para encontrar secretos.'
permissions: 'Las personas con permisos administrativos en un repositorio pueden habilitar el {% data variables.product.prodname_secret_scanning %} en éste.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Nota:** El {% data variables.product.prodname_secret_scanning_caps %} se habilita predeterminadamente en los repositorios públicos y no puede apagarse. Puedes configurar el {% data variables.product.prodname_secret_scanning %} solo para tus repositorios privados.

{% endnote %}
{% endif %}

### Habilitar el {% data variables.product.prodname_secret_scanning %} para los repositorios {% if currentVersion == "free-pro-team@latest" %}privados {% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
4. Si no se muestra el "{% data variables.product.prodname_secret_scanning_caps %}" en la página, primero necesitarás habilitar la {% data variables.product.prodname_GH_advanced_security %}. A la derecha de "{% data variables.product.prodname_GH_advanced_security %}", da clic en **Habilitar**. ![Habilitar la {% data variables.product.prodname_GH_advanced_security %} para tu repositorio](/assets/images/help/repository/enable-ghas-dotcom.png)
5. Da clic en **Habilitar la {% data variables.product.prodname_GH_advanced_security %} para este repositorio** para confirmar la acción. ![Confirmar la habilitación de la {% data variables.product.prodname_GH_advanced_security %} para tu repositorio](/assets/images/help/repository/enable-ghas-confirmation-dotcom.png)
6. Cuando habilitas
la {% data variables.product.prodname_GH_advanced_security %}, esto podría habilitar el {% data variables.product.prodname_secret_scanning %} automáticamente para el repositorio (esto se controla en la configuración de la organización). Si se muestra "{% data variables.product.prodname_secret_scanning_caps %}" con un botón de **Habilitar**, aún necesitarás habilitar el {% data variables.product.prodname_secret_scanning %} si das clic en **Habilitar**. Si ves un botón de **Inhabilitar**, entonces el {% data variables.product.prodname_secret_scanning %} ya se encuentra habilitado.
   ![Habilitar el {% data variables.product.prodname_secret_scanning %} para tu repositorio](/assets/images/help/repository/enable-secret-scanning-dotcom.png)
   {% else if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@3.0" %}
4. A la derecha de "
{% data variables.product.prodname_secret_scanning_caps %}", da clic en **Habilitar**.
   ![Habilitar el {% data variables.product.prodname_secret_scanning %} para tu repositorio](/assets/images/help/repository/enable-secret-scanning-ghe.png)
   {% endif %}

### Excluir alertas del {% data variables.product.prodname_secret_scanning %} en los repositorios {% if currentVersion == "free-pro-team@latest" %}privados {% endif %}

Puedes utilizar un archivo *secret_scanning.yml* para excluir los directorios de {% data variables.product.prodname_secret_scanning %}. Por ejemplo, puedes excluir directorios que contengan pruebas o contenido generado aleatoriamente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. En el campo de nombre del archivo, teclea *.github/secret_scanning.yml*.
4. Debajo de **Editar nuevo archivo**, teclea `paths-ignore:` seguido por las rutas que quieras excluir de {% data variables.product.prodname_secret_scanning %}.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```

    Puedes utilizar caracteres especiales, tales como `*` para filtrar las rutas. Para obtener más información acerca de filtrar las rutas, consulta la sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

    {% note %}

    **Notas:**
    - Si hay más de 1,000 entradas en `paths-ignore`, {% data variables.product.prodname_secret_scanning %} solo excluirá de los escaneos a los primeros 1,000 directorios.
    - Si *secret_scanning.yml* es mayor a 1 MB, {% data variables.product.prodname_secret_scanning %} ignorará todo el archivo.

    {% endnote %}

También puedes ignorar alertas individuales de {% data variables.product.prodname_secret_scanning %}. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-alerts)".

### Leer más

- "[Administrar la seguridad y la configuración de análisis para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)"
