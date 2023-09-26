---
title: Configuring secret scanning for your repositories
intro: 'You can configure how {% data variables.product.prodname_dotcom %} scans your repositories for leaked secrets and generates alerts.'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'People with admin permissions to a {% ifversion fpt %}public {% endif %}repository can enable {% data variables.product.prodname_secret_scanning %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
  - /code-security/secret-security/configuring-secret-scanning-for-your-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
shortTitle: Configure secret scans
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Enabling {% data variables.secret-scanning.user_alerts %}

You can enable {% data variables.secret-scanning.user_alerts %} for any {% ifversion fpt %}free public{% endif %} repository{% ifversion ghec or ghes or ghae %} that is owned by an organization{% else %} that you own{% endif %}. Once enabled, {% data reusables.secret-scanning.secret-scanning-process %}  {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}

{% endif %}

You can also enable {% data variables.product.prodname_secret_scanning %} for multiple repositories in an organization at the same time. For more information, see "[AUTOTITLE](/code-security/getting-started/securing-your-organization)."

{% ifversion secret-scanning-enterprise-level %}
{% note %}

**Note:** If your organization is owned by an enterprise account, an enterprise owner can also enable {% data variables.product.prodname_secret_scanning %} at the enterprise level. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)."

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}{% ifversion ghec or ghes or ghae %}
1. If {% data variables.product.prodname_advanced_security %} is not already enabled for the repository, to the right of "{% data variables.product.prodname_GH_advanced_security %}", click **Enable**.
1. Review the impact of enabling {% data variables.product.prodname_advanced_security %}, then click **Enable {% data variables.product.prodname_GH_advanced_security %} for this repository**.
1. When you enable {% data variables.product.prodname_advanced_security %}, {% data variables.product.prodname_secret_scanning %} may automatically be enabled for the repository due to the organization's settings. If "{% data variables.product.prodname_secret_scanning_caps %}" is shown with an **Enable** button, you still need to enable {% data variables.product.prodname_secret_scanning %} by clicking **Enable**. If you see a **Disable** button, {% data variables.product.prodname_secret_scanning %} is already enabled.

   ![Screenshot of the "{% data variables.product.prodname_secret_scanning_caps %}" section of the "Code security and analysis" page, with the "Enable" button highlighted in a dark orange outline.](/assets/images/help/repository/enable-secret-scanning-alerts.png){% endif %}{% ifversion fpt %}
1. Scroll down to the bottom of the page, and click **Enable** for {% data variables.product.prodname_secret_scanning %}. If you see a **Disable** button, it means that {% data variables.product.prodname_secret_scanning %} is already enabled for the repository.

   ![Screenshot of the "{% data variables.product.prodname_secret_scanning_caps %}" section of the "Code security and analysis" page, with the "Enable" button highlighted in a dark orange outline.](/assets/images/help/repository/enable-secret-scanning-alerts.png){% endif %}

{% ifversion secret-scanning-push-protection %}
1. Optionally, if you want to enable push protection, click **Enable** to the right of "Push protection." {% data reusables.secret-scanning.push-protection-overview %} For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
   ![Screenshot of the "{% data variables.product.prodname_secret_scanning_caps %}" section. Next to an indented item marked "Push protection," the "Enable" button is highlighted in a dark orange outline.](/assets/images/help/repository/secret-scanning-enable-push-protection.png)
{% endif %}
{% ifversion ghae %}
1. Before you can enable {% data variables.product.prodname_secret_scanning %}, you need to enable {% data variables.product.prodname_GH_advanced_security %} first. To the right of "{% data variables.product.prodname_GH_advanced_security %}", click **Enable**.
   ![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository.](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
1. Click **Enable {% data variables.product.prodname_GH_advanced_security %} for this repository** to confirm the action.
   ![Confirm enabling {% data variables.product.prodname_GH_advanced_security %} for your repository.](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
1. To the right of "{% data variables.product.prodname_secret_scanning_caps %}", click **Enable**.
   ![Enable {% data variables.product.prodname_secret_scanning %} for your repository.](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png)
{% endif %}

{% ifversion fpt %}

## Enabling {% data variables.secret-scanning.user_alerts %} for all your public repositories

You can enable {% data variables.secret-scanning.user_alerts %} for all of your public repositories through your personal account settings.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
1. Under "Code security and analysis", to the right of "{% data variables.product.prodname_secret_scanning_caps %}", click **Disable all** or **Enable all**.

   ![Screenshot of the setting options for "{% data variables.product.prodname_secret_scanning_caps %}" on the personal account settings page. The options "Enable all" and "Disable all" are highlighted with an orange outline.](/assets/images/help/repository/secret-scanning-personal-account-settings-enable-all.png)
1. Optionally, to automatically enable {% data variables.product.prodname_secret_scanning %} for any new public repositories that you create, below "{% data variables.product.prodname_secret_scanning_caps %}", select the checkbox for "Automatically enable for new public repositories."

   ![Screenshot of the setting options for "{% data variables.product.prodname_secret_scanning_caps %}" on the personal account settings page. The option "Automatically enable for new public repositories" is highlighted with an orange outline.](/assets/images/help/repository/secret-scanning-personal-account-settings-auto-enable.png)

{% endif %}

## Excluding directories from {% data variables.secret-scanning.user_alerts %}

You can configure a _secret_scanning.yml_ file to exclude directories from {% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %}, including when you use push protection{% endif %}. For example, you can exclude directories that contain tests or randomly generated content.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field, type _.github/secret_scanning.yml_.
1. Under **Edit new file**, type `paths-ignore:` followed by the paths you want to exclude from {% data variables.product.prodname_secret_scanning %}.

    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```

    You can use special characters, such as `*` to filter paths. For more information about filter patterns, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)."

    {% note %}

    **Notes:**
    - If there are more than 1,000 entries in `paths-ignore`, {% data variables.product.prodname_secret_scanning %} will only exclude the first 1,000 directories from scans.
    - If `secret_scanning.yml` is larger than 1 MB, {% data variables.product.prodname_secret_scanning %} will ignore the entire file.

    {% endnote %}

You can also ignore individual alerts from {% data variables.product.prodname_secret_scanning %}. For more information, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts)."

{% ifversion not fpt %}

## Further reading

- "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)"
- "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)"
{% endif %}
