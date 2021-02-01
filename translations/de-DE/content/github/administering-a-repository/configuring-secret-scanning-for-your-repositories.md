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

Du kannst eine *secret_scanning.yml*-Datei verwenden, um Verzeichnisse von {% data variables.product.prodname_secret_scanning %} auszuschließen. Beispielsweise kannst Du Verzeichnisse ausschließen, welche Tests oder zufällig generierte Inhalte enthalten.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Gib im Feld „Dateiname" *.github/secret_scanning.yml* ein.
4. Gib unter **Edit new file** (Neue Datei bearbeiten) `paths-ignore:` ein, gefolgt von den Pfaden, die Du von {% data variables.product.prodname_secret_scanning %} ausschließen willst.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```

    Du kannst Sonderzeichen wie `*` verwenden, um Pfade zu filtern. Weitere Informationen zu Filtermustern findest Du unter „[Workflow-Syntax für GitHub-Aktionen](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)."

    {% note %}

    **Hinweise:**
    - Wenn es mehr als 1.000 Einträge in `paths-ignore` gibt, wird {% data variables.product.prodname_secret_scanning %} nur die ersten 1.000 Verzeichnisse von Scans ausschließen.
    - Wenn *secret_scanning.yml* größer als 1 MB ist, wird {% data variables.product.prodname_secret_scanning %} die ganze Datei ignorieren.

    {% endnote %}

Du kannst auch einzelne Warnungen von {% data variables.product.prodname_secret_scanning %} ignorieren. Weitere Informationen findest Du unter „[Warnungen von {% data variables.product.prodname_secret_scanning %} verwalten](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-alerts)."

### Weiterführende Informationen

- "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)"
