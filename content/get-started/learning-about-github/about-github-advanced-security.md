---
title: About GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} makes extra security features available to customers under an {% data variables.product.prodname_advanced_security %} license.{% ifversion fpt or ghec %} These features are also enabled for public repositories on {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
---
## About {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} has many features that help you improve and maintain the quality of your code. Some of these are included in all plans{% ifversion not ghae %}, such as dependency graph and {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Other security features require a {% data variables.product.prodname_GH_advanced_security %} (GHAS){% ifversion fpt or ghec %} license to run on repositories apart from public repositories on {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

{% ifversion ghes %}For information about buying a license for {% data variables.product.prodname_GH_advanced_security %}, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% elsif ghec %}For information about buying a license for {% data variables.product.prodname_GH_advanced_security %}, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/signing-up-for-github-advanced-security)."{% elsif ghae %}There is no charge for {% data variables.product.prodname_GH_advanced_security %} on {% data variables.product.prodname_ghe_managed %} during the beta release.{% elsif fpt %}To purchase a {% data variables.product.prodname_GH_advanced_security %} license, you must be using {% data variables.product.prodname_enterprise %}. For information about upgrading to {% data variables.product.prodname_enterprise %} with {% data variables.product.prodname_GH_advanced_security %}, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)" and "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% endif %}

{% ifversion ghec %}{% data reusables.advanced-security.ghas-trial %}{% endif %}

{% ifversion ghas-for-azure-devops %}
{% note %}

**Note:** If you want to use {% data variables.product.prodname_GH_advanced_security %} with Azure Repos, see [{% data variables.product.prodname_GH_advanced_security %} & Azure DevOps](https://resources.github.com/ghazdo/) in our resources site. For documentation, see [Configure {% data variables.product.prodname_ghas_azdo %}](https://learn.microsoft.com/en-us/azure/devops/repos/security/configure-github-advanced-security-features) in Microsoft Learn.

{% endnote %}
{% endif %}

## About {% data variables.product.prodname_advanced_security %} features

A {% data variables.product.prodname_GH_advanced_security %} license provides the following additional features:

- **{% data variables.product.prodname_code_scanning_caps %}** - Search for potential security vulnerabilities and coding errors in your code. For more information, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning)."

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detect secrets, for example keys and tokens, that have been checked into {% ifversion fpt %} private repositories{% else %} the repository{% endif %}. {% ifversion fpt%}{% data variables.secret-scanning.user_alerts_caps %} and {% data variables.secret-scanning.partner_alerts %} are available and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}.{% endif %}{% ifversion secret-scanning-push-protection %} If push protection is enabled, also detects secrets when they are pushed to your repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)" and "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."{% else %} For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)."{% endif %}

- **Dependency review** - Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

{% ifversion ghes < 3.7 or ghae %}
<!-- Ref: ghae > 3.6 remove GHAE versioning from this section when the `security-overview-displayed-alerts` flag is toggled for GHAE -->
- **Security overview** - Review the security configuration and alerts for an organization and identify the repositories at greatest risk. For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview)."
{% endif %}

{% ifversion fpt or ghec %}
The table below summarizes the availability of {% data variables.product.prodname_GH_advanced_security %} features for public and private repositories.

{% rowheaders %}

| | Public repository | Private repository <br>without {% data variables.product.prodname_advanced_security %} | Private repository <br>with {% data variables.product.prodname_advanced_security %} |
| --- | --- | --- | --- |
| Code scanning     | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Secret scanning   | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Dependency review | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |

{% endrowheaders %}

{% endif %}

For information about {% data variables.product.prodname_advanced_security %} features that are in development, see "[{% data variables.product.prodname_dotcom %} public roadmap](https://github.com/github/roadmap)." For an overview of all security features, see "[AUTOTITLE](/code-security/getting-started/github-security-features)."

{% ifversion fpt or ghec %}
{% data variables.product.prodname_GH_advanced_security %} features are enabled for all public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} can additionally enable these features for private and internal repositories. {% ifversion fpt %}For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features).
{% endif %}

{% ifversion ghes or ghec or ghae %}

## Deploying GitHub Advanced Security in your enterprise

To learn about what you need to know to plan your {% data variables.product.prodname_GH_advanced_security %} deployment at a high level and to review the rollout phases we recommended, see "[AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale)."

{% endif %}

{% ifversion not fpt %}

## Enabling {% data variables.product.prodname_advanced_security %} features

{%- ifversion ghes %}
The site administrator must enable {% data variables.product.prodname_advanced_security %} for {% data variables.location.product_location %} before you can use these features. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise).

Once your system is set up, you can enable and disable these features at the organization or repository level.

{%- elsif ghec %}
For public repositories these features are permanently on and can only be disabled if you change the visibility of the project so that the code is no longer public.

For other repositories, once you have a license for your enterprise account, you can enable and disable these features at the organization or repository level.

{%- elsif ghae %}
You can enable and disable these features at the organization or repository level.
{%- endif %}
For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)" and "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."

{% ifversion ghec or ghes %}
If you have an enterprise account, license use for the entire enterprise is shown on your enterprise license page. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)."
{% endif %}

{% endif %}

{% ifversion fpt or ghec %}

## About starter workflows for {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.starter-workflows-beta %}
{% data reusables.advanced-security.starter-workflow-overview %}

For more information on starter workflows, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-code-scanning-using-third-party-actions)" and "[AUTOTITLE](/actions/learn-github-actions/using-starter-workflows)."

{% endif %}

{% ifversion ghec or ghes or ghae %}

## Further reading

- "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)"

{% endif %}
{% endif %}
