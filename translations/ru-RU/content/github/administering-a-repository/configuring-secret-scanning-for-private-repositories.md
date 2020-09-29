---
title: Configuring secret scanning for private repositories
intro: 'You can configure how {% data variables.product.product_name %} scans your private repositories for secrets.'
permissions: 'People with admin permissions to a private repository can enable {% data variables.product.prodname_secret_scanning %} for the repository.'
versions:
  free-pro-team: '*'
---

{% data reusables.secret-scanning.beta %}

### Enabling {% data variables.product.prodname_secret_scanning %} for private repositories

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. To the right of "Secret scanning", click **Enable**. ![Enable secret scanning for your repository](/assets/images/help/repository/enable-secret-scanning.png)

### Excluding alerts from {% data variables.product.prodname_secret_scanning %} in private repositories

You can use a *secret_scanning.yml* file to exclude directories from {% data variables.product.prodname_secret_scanning %}. For example, you can exclude directories that contain tests or randomly generated content.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field, type *.github/secret_scanning.yml*.
4. Under **Edit new file**, type `paths-ignore:` followed by the paths you want to exclude from {% data variables.product.prodname_secret_scanning %}.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```

    You can use special characters, such as `*` to filter paths. For more information about filter patterns, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)."

    {% note %}

    **Замечания:**
    - If there are more than 1,000 entries in `paths-ignore`, {% data variables.product.prodname_secret_scanning %} will only exclude the first 1,000 directories from scans.
    - If *secret_scanning.yml* is larger than 1 MB, {% data variables.product.prodname_secret_scanning %} will ignore the entire file.

    {% endnote %}

You can also ignore individual alerts from {% data variables.product.prodname_secret_scanning %}. For more information, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-alerts)."

### Дополнительная литература

- "[Managing {% data variables.product.prodname_secret_scanning %} for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization)"
