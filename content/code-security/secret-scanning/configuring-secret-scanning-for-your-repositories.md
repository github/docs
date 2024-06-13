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
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
shortTitle: Configure secret scans
---

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Enabling {% data variables.secret-scanning.user_alerts %}

You can enable {% data variables.secret-scanning.user_alerts %} for any {% ifversion secret-scanning-user-owned-repos %}{% ifversion ghes %}repository{% else %} repository that is owned by an organization, and for repositories owned by user accounts when using {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}{% endif %}{% elsif fpt %}free public repository that you own{% else %}repository that is owned by an organization{% endif %}. Once enabled, {% data reusables.secret-scanning.secret-scanning-process %}{% ifversion ghes < 3.11 %} {% data variables.product.prodname_secret_scanning_caps %} does not scan issues.{% endif %} {% data reusables.secret-scanning.what-is-scanned %}

You can also enable {% data variables.product.prodname_secret_scanning %} for multiple repositories in an organization at the same time. For more information, see "[AUTOTITLE](/code-security/getting-started/securing-your-organization)."

{% ifversion secret-scanning-enterprise-level %}
{% note %}

**Note:** If your organization is owned by an enterprise account, an enterprise owner can also enable {% data variables.product.prodname_secret_scanning %} at the enterprise level. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)."

{% endnote %}
{% endif %}

A repository administrator can choose to disable {% data variables.product.prodname_secret_scanning %} for a repository at any time. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}{% ifversion ghec or ghes %}
1. If {% data variables.product.prodname_advanced_security %} is not already enabled for the repository, to the right of "{% data variables.product.prodname_GH_advanced_security %}", click **Enable**.
1. Review the impact of enabling {% data variables.product.prodname_advanced_security %}, then click **Enable {% data variables.product.prodname_GH_advanced_security %} for this repository**.
1. When you enable {% data variables.product.prodname_advanced_security %}, {% data variables.product.prodname_secret_scanning %} may automatically be enabled for the repository due to the organization's settings. If "{% data variables.product.prodname_secret_scanning_caps %}" is shown with an **Enable** button, you still need to enable {% data variables.product.prodname_secret_scanning %} by clicking **Enable**. If you see a **Disable** button, {% data variables.product.prodname_secret_scanning %} is already enabled.

   ![Screenshot of the "{% data variables.product.prodname_secret_scanning_caps %}" section of the "Code security and analysis" page, with the "Enable" button highlighted in a dark orange outline.](/assets/images/help/repository/enable-secret-scanning-alerts.png){% endif %}{% ifversion fpt %}
1. Scroll down to the bottom of the page, and click **Enable** for {% data variables.product.prodname_secret_scanning %}. If you see a **Disable** button, it means that {% data variables.product.prodname_secret_scanning %} is already enabled for the repository.

   ![Screenshot of the "{% data variables.product.prodname_secret_scanning_caps %}" section of the "Code security and analysis" page, with the "Enable" button highlighted in a dark orange outline.](/assets/images/help/repository/enable-secret-scanning-alerts.png){% endif %}

## Enabling additional features for {% data variables.secret-scanning.user_alerts %}

You can enable the following additional {% data variables.product.prodname_secret_scanning %} feature{% ifversion ghec or ghes %}s{% endif %} through your repository's "Code security and analysis" settings:
- **Push protection**. For more information, see "[AUTOTITLE](/code-security/secret-scanning/push-protection-for-repositories-and-organizations#enabling-secret-scanning-as-a-push-protection-for-a-repository)."{% ifversion secret-scanning-validity-check-partner-patterns %}
- **Validity checks for partner patterns**. For more infomation, see "[Enabling validity checks for partner patterns](#enabling-validity-checks-for-partner-patterns)."{% endif %}{% ifversion secret-scanning-non-provider-patterns %}
- **Scanning for non-provider patterns**. For more information, see "[Enabling scanning for non-provider patterns](#enabling-scanning-for-non-provider-patterns)."{% endif %}{% ifversion secret-scanning-ai-generic-secret-detection%}
- **AI-powered generic secret detection**. For more information, see "[AUTOTITLE](/code-security/secret-scanning/enabling-ai-powered-generic-secret-detection)."{% endif %}{% ifversion secret-scanning-push-protection-custom-patterns %}
- **Scanning for custom patterns**. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)."{% endif %}

{% ifversion secret-scanning-validity-check-partner-patterns %}

### Enabling validity checks for partner patterns

{% data reusables.secret-scanning.validity-check-partner-patterns-beta %}
{% data reusables.gated-features.partner-pattern-validity-check-ghas %}

You can allow {% data variables.product.prodname_secret_scanning %} to automatically check the validity of a secret found in your repository by sending it to the relevant partner. For more information on validity checks, see "Checking a secret's validity" in "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning#checking-a-secrets-validity)."

{% note %}

**Note:** When you enable automatic validity checks for a repository, you also allow on-demand validity checks to be performed for patterns detected in that repository.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.secret-scanning.validity-check-auto-enable %}

You can also use the REST API to enable validity checks for partner patterns for your repository. For more information, see "[AUTOTITLE](/rest/repos/repos#update-a-repository)." Alternatively, organization owners and enterprise administrators can enable the feature for all repositories in the organization or enterprise settings. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#allowing-validity-checks-for-partner-patterns-in-an-organization)" and "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)."

{% endif %}

{% ifversion secret-scanning-non-provider-patterns %}

### Enabling scanning for non-provider patterns

{% data reusables.secret-scanning.non-provider-patterns-beta %}

You can enable scanning for non-provider patterns. Non-provider patterns correspond to secrets such as private keys and they have a higher ratio of false positives.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under {% data variables.product.prodname_secret_scanning_caps %}, select the checkbox next to "Scan for non-provider patterns".

For more information about non-provider patterns, see "{% ifversion fpt or ghec %}[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#about-user--alerts){% else %}[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#about-secret-scanning-alerts){% endif %}."

{% endif %}

{% ifversion secret-scanning-enable-by-default-for-public-repos %}

## Enabling {% data variables.secret-scanning.user_alerts %} for all your {% ifversion ghec %}user-owned {% endif %}public repositories

You can enable {% data variables.product.prodname_secret_scanning %} for all of your existing {% ifversion ghec %}user-owned {% endif %}public repositories through your personal account settings.
{% note %}

**Note**: As of March 11, 2024, {% data variables.product.prodname_secret_scanning %} and push protection will be enabled by default for all new {% ifversion ghec %}user-owned {% endif %}public repositories that you create. You can still choose to disable these features for an individual repository in the repository's "Code security and analysis" settings page. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-public-repositories)".

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
1. Under "Code security and analysis", to the right of "{% data variables.product.prodname_secret_scanning_caps %}", click **Disable all** or **Enable all**.
{% data reusables.secret-scanning.push-protection-optional-enable %}

{% endif %}

## Excluding directories from {% data variables.secret-scanning.user_alerts %}

You can configure a _secret_scanning.yml_ file to exclude directories from {% data variables.product.prodname_secret_scanning %}, including when you use push protection. For example, you can exclude directories that contain tests or randomly generated content.

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

You can also ignore individual alerts from {% data variables.product.prodname_secret_scanning %}. For more information, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

{% ifversion not fpt %}

## Further reading

- "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)"
- "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)"
{% endif %}
