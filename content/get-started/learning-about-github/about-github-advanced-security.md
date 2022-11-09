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

{% data variables.product.prodname_dotcom %} has many features that help you improve and maintain the quality of your code. Some of these are included in all plans{% ifversion not ghae %}, such as dependency graph and {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Other security features require a {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} license to run on repositories apart from public repositories on {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

{% ifversion ghes or ghec %}For information about buying a license for {% data variables.product.prodname_GH_advanced_security %}, see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% elsif ghae %}There is no charge for {% data variables.product.prodname_GH_advanced_security %} on {% data variables.product.prodname_ghe_managed %} during the beta release.{% elsif fpt %}To purchase a {% data variables.product.prodname_GH_advanced_security %} license, you must be using {% data variables.product.prodname_enterprise %}. For information about upgrading to {% data variables.product.prodname_enterprise %} with {% data variables.product.prodname_GH_advanced_security %}, see "[GitHub's products](/get-started/learning-about-github/githubs-products)" and "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% endif %}

## About {% data variables.product.prodname_advanced_security %} features

A {% data variables.product.prodname_GH_advanced_security %} license provides the following additional features:

- **{% data variables.product.prodname_code_scanning_capc %}** - Search for potential security vulnerabilities and coding errors in your code. For more information, see "[About {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)."

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detect secrets, for example keys and tokens, that have been checked into the repository.{% ifversion secret-scanning-push-protection %} If push protection is enabled, also detects secrets when they are pushed to your repository. For more information, see "[About {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)" and "[Protecting pushes with {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."{% else %} For more information, see "[About {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)."{% endif %}

- **Dependency review** - Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."

{% ifversion ghes < 3.7 or ghae %}
<!-- Ref: ghae > 3.6 remove GHAE versioning from this section when the `security-overview-displayed-alerts` flag is toggled for GHAE -->
- **Security overview** - Review the security configuration and alerts for an organization and identify the repositories at greatest risk. For more information, see "[About security overviews](/code-security/security-overview/about-the-security-overview)."
{% endif %}

{% ifversion fpt or ghec %}
The table below summarizes the availability of {% data variables.product.prodname_GH_advanced_security %} features for public and private repositories.

|                   | Public repository           | Private repository without {% data variables.product.prodname_advanced_security %} | Private repository with {% data variables.product.prodname_advanced_security %} |
| :-----------------: | :---------------------------: | :--------------------------------------------: | :-----------------------------------------: |
| Code scanning     | Yes                         | No                                           | Yes                                        |
| Secret scanning   | Yes **(limited functionality only)** | No                                           | Yes                                       |
| Dependency review | Yes                         | No                                           | Yes                                       |
{% endif %}

For information about {% data variables.product.prodname_advanced_security %} features that are in development, see "[{% data variables.product.prodname_dotcom %} public roadmap](https://github.com/github/roadmap)." For an overview of all security features, see "[{% data variables.product.prodname_dotcom %} security features](/code-security/getting-started/github-security-features)."

{% ifversion fpt or ghec %}
{% data variables.product.prodname_GH_advanced_security %} features are enabled for all public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} can additionally enable these features for private and internal repositories. {% ifversion fpt %}For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features).
{% endif %}

{% ifversion ghes or ghec or ghae %}
## Deploying GitHub Advanced Security in your enterprise

To learn about what you need to know to plan your {% data variables.product.prodname_GH_advanced_security %} deployment at a high level and to review the rollout phases we recommended, see "[Adopting {% data variables.product.prodname_GH_advanced_security %} at scale](/code-security/adopting-github-advanced-security-at-scale)."

{% endif %}

{% ifversion not fpt %}
## Enabling {% data variables.product.prodname_advanced_security %} features

{%- ifversion ghes %}
The site administrator must enable {% data variables.product.prodname_advanced_security %} for {% data variables.location.product_location %} before you can use these features. For more information, see "[Configuring Advanced Security features](/admin/configuration/configuring-advanced-security-features).

Once your system is set up, you can enable and disable these features at the organization or repository level.

{%- elsif ghec %}
For public repositories these features are permanently on and can only be disabled if you change the visibility of the project so that the code is no longer public.

For other repositories, once you have a license for your enterprise account, you can enable and disable these features at the organization or repository level.

{%- elsif ghae %}
You can enable and disable these features at the organization or repository level.
{%- endif %}
For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."

{% ifversion ghec or ghes %}
If you have an enterprise account, license use for the entire enterprise is shown on your enterprise license page. For more information, see "[Viewing your {% data variables.product.prodname_GH_advanced_security %} usage](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)."
{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
## About starter workflows for {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.starter-workflows-beta %}
{% data reusables.advanced-security.starter-workflow-overview %}

For more information on starter workflows, see "[Setting up {% data variables.product.prodname_code_scanning %} using starter workflows](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)" and "[Using starter workflows](/actions/using-workflows/using-starter-workflows)."

{% endif %}

{% ifversion ghec or ghes or ghae %}
## Further reading

- "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise account](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %}
{% endif %}
