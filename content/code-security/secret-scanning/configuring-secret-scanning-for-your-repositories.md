---
title: Configuring secret scanning for your repositories
intro: 'You can configure how {% data variables.product.prodname_dotcom %} scans your repositories for secrets that match advanced security patterns.'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning_GHAS %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
  - /code-security/secret-security/configuring-secret-scanning-for-your-repositories
versions:
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

## Enabling {% data variables.product.prodname_secret_scanning_GHAS %}

You can enable {% data variables.product.prodname_secret_scanning_GHAS %} for any repository that is owned by an organization. Once enabled, {% data reusables.secret-scanning.secret-scanning-process %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. If {% data variables.product.prodname_advanced_security %} is not already enabled for the repository, to the right of "{% data variables.product.prodname_GH_advanced_security %}", click **Enable**.
   {% ifversion fpt or ghec %}![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/help/repository/enable-ghas-dotcom.png)
   {% elsif ghes or ghae %}![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
5. Review the impact of enabling {% data variables.product.prodname_advanced_security %}, then click **Enable {% data variables.product.prodname_GH_advanced_security %} for this repository**.
6. When you enable {% data variables.product.prodname_advanced_security %}, {% data variables.product.prodname_secret_scanning %} may automatically be enabled for the repository due to the organization's settings. If "{% data variables.product.prodname_secret_scanning_caps %}" is shown with an **Enable** button, you still need to enable {% data variables.product.prodname_secret_scanning %} by clicking **Enable**. If you see a **Disable** button, {% data variables.product.prodname_secret_scanning %} is already enabled. 
   ![Enable {% data variables.product.prodname_secret_scanning %} for your repository](/assets/images/help/repository/enable-secret-scanning-dotcom.png)
{% ifversion secret-scanning-push-protection %}
7. Optionally, if you want to enable push protection, click **Enable** to the right of "Push protection." {% data reusables.secret-scanning.push-protection-overview %} For more information, see "[Protecting pushes with {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
   ![Enable push protection for your repository](/assets/images/help/repository/secret-scanning-enable-push-protection.png)
{% endif %}
{% ifversion ghae %}
1. Before you can enable {% data variables.product.prodname_secret_scanning %}, you need to enable {% data variables.product.prodname_GH_advanced_security %} first. To the right of "{% data variables.product.prodname_GH_advanced_security %}", click **Enable**.
   ![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. Click **Enable {% data variables.product.prodname_GH_advanced_security %} for this repository** to confirm the action.
   ![Confirm enabling {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. To the right of "{% data variables.product.prodname_secret_scanning_caps %}", click **Enable**.
   ![Enable {% data variables.product.prodname_secret_scanning %} for your repository](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png)
{% endif %}

## Excluding directories from {% data variables.product.prodname_secret_scanning_GHAS %}

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
    
    **Notes:**
    - If there are more than 1,000 entries in `paths-ignore`, {% data variables.product.prodname_secret_scanning %} will only exclude the first 1,000 directories from scans.
    - If *secret_scanning.yml* is larger than 1 MB, {% data variables.product.prodname_secret_scanning %} will ignore the entire file.
    
    {% endnote %}

You can also ignore individual alerts from {% data variables.product.prodname_secret_scanning %}. For more information, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts)."

## Further reading

- "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"
- "[Defining custom patterns for {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)"
