---
title: Configuring secret scanning for your repositories
intro: 'You can configure how {% data variables.product.prodname_dotcom %} scans your repositories for secrets.'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Note:** {% data variables.product.prodname_secret_scanning_caps %} is enabled by default on public repositories and cannot be turned off. You can configure {% data variables.product.prodname_secret_scanning %} for your private repositories only.

{% endnote %}
{% endif %}

### Enabling {% data variables.product.prodname_secret_scanning %} for {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
You can enable {% data variables.product.prodname_secret_scanning %} for any repository that is owned by an organization.
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next"%}
4. If {% data variables.product.prodname_advanced_security %} is not already enabled for the repository, to the right of "{% data variables.product.prodname_GH_advanced_security %}", click **Enable**.
   {% if currentVersion == "free-pro-team@latest" %}![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/help/repository/enable-ghas-dotcom.png)
   {% elsif currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
5. Review the impact of enabling {% data variables.product.prodname_advanced_security %}, then click **Enable {% data variables.product.prodname_GH_advanced_security %} for this repository**.
6. When you enable {% data variables.product.prodname_advanced_security %}, {% data variables.product.prodname_secret_scanning %} may automatically be enabled for the repository due to the organization's settings. If "{% data variables.product.prodname_secret_scanning_caps %}" is shown with an **Enable** button, you still need to enable {% data variables.product.prodname_secret_scanning %} by clicking **Enable**. If you see a **Disable** button, {% data variables.product.prodname_secret_scanning %} is already enabled. ![Enable {% data variables.product.prodname_secret_scanning %} for your repository](/assets/images/help/repository/enable-secret-scanning-dotcom.png)
   {% elsif currentVersion == "enterprise-server@3.0" %}
7. To the right of "{% data variables.product.prodname_secret_scanning_caps %}", click **Enable**. ![Enable {% data variables.product.prodname_secret_scanning %} for your repository](/assets/images/help/repository/enable-secret-scanning-ghe.png)
   {% endif %}
{% if currentVersion == "github-ae@latest" %}
1. Before you can enable {% data variables.product.prodname_secret_scanning %}, you need to enable {% data variables.product.prodname_GH_advanced_security %} first. To the right of "{% data variables.product.prodname_GH_advanced_security %}", click **Enable**. ![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. Click **Enable {% data variables.product.prodname_GH_advanced_security %} for this repository** to confirm the action. ![Confirm enabling {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. To the right of "{% data variables.product.prodname_secret_scanning_caps %}", click **Enable**. ![Enable {% data variables.product.prodname_secret_scanning %} for your repository](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png)
{% endif %}

### Excluding alerts from {% data variables.product.prodname_secret_scanning %} in {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories

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

You can also ignore individual alerts from {% data variables.product.prodname_secret_scanning %}. For more information, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts)."

### Дополнительная литература

- "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"
