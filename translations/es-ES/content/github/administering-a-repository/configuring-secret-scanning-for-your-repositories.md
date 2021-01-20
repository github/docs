---
title: Configuring secret scanning for your repositories
intro: 'You can configure how {% data variables.product.prodname_dotcom %} scans your repositories for secrets.'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning %} for the repository.'
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

**Note:** {% data variables.product.prodname_secret_scanning_caps %} is enabled by default on public repositories and cannot be turned off. You can configure {% data variables.product.prodname_secret_scanning %} for your private repositories only.

{% endnote %}
{% endif %}

### Enabling {% data variables.product.prodname_secret_scanning %} for {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}

{% if currentVersion == "free-pro-team@latest" %}
4. If "{% data variables.product.prodname_secret_scanning_caps %}" is not shown on the page, you need to enable {% data variables.product.prodname_GH_advanced_security %} first. To the right of "{% data variables.product.prodname_GH_advanced_security %}", click **Enable**. ![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/help/repository/enable-ghas-dotcom.png)
5. Click **Enable {% data variables.product.prodname_GH_advanced_security %} for this repository** to confirm the action. ![Confirm enabling {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/help/repository/enable-ghas-confirmation-dotcom.png)
6. When you enable
{% data variables.product.prodname_GH_advanced_security %} this may automatically enable {% data variables.product.prodname_secret_scanning %} for the repository (this is controlled by the organization configuration). If "{% data variables.product.prodname_secret_scanning_caps %}" is shown with an **Enable** button, you still need to enable {% data variables.product.prodname_secret_scanning %} by clicking **Enable**. If you see a **Disable** button, {% data variables.product.prodname_secret_scanning %} is already enabled.
   ![Enable {% data variables.product.prodname_secret_scanning %} for your repository](/assets/images/help/repository/enable-secret-scanning-dotcom.png){% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
4. To the right of "
{% data variables.product.prodname_secret_scanning_caps %}", click **Enable**.
   ![Enable {% data variables.product.prodname_secret_scanning %} for your repository](/assets/images/help/repository/enable-secret-scanning-ghe.png)
   {% endif %}

### Excluding alerts from {% data variables.product.prodname_secret_scanning %} in {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories

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

### Further reading

- "[Administrar la seguridad y la configuración de análisis para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)"
