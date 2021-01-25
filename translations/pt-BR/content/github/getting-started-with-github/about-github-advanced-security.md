---
title: About GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} makes extra security features available to customers under an {% data variables.product.prodname_advanced_security %} license. These features are also enabled for public repositories on {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

### Sobre o {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} has many features that help you improve and maintain the quality of your code. Some of these are included in all plans, for example: dependency graph and {% data variables.product.prodname_dependabot_alerts %}. Other security features require a license for {% data variables.product.prodname_GH_advanced_security %} to run on repositories apart from public repositories on {% data variables.product.prodname_dotcom_the_website %}. (That is, private and internal repositories on {% data variables.product.prodname_dotcom_the_website %}, and all repositories on {% data variables.product.prodname_ghe_server %}.)

For an overview of all security features, see "[About securing your repository](/github/administering-a-repository/about-securing-your-repository#setting-up-your-repository-securely)."

### About {% data variables.product.prodname_advanced_security %} features

A {% data variables.product.prodname_GH_advanced_security %} license provides the following additional features:

- **{% data variables.product.prodname_code_scanning_capc %}** - Search for potential security vulnerabilities and coding errors in your code. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detect secrets, for example keys and tokens, that have been checked into the repository. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)".

{% if currentVersion == "free-pro-team@latest" %}
- **Dependency review** - Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. For more information, see "[Reviewing dependency changes in a pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)."
{% endif %}

For information about {% data variables.product.prodname_advanced_security %} features that are in development, see "[{% data variables.product.prodname_dotcom %} public roadmap](https://github.com/github/roadmap)."

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Enabling {% data variables.product.prodname_advanced_security %} features on {% data variables.product.prodname_ghe_server %}

The site administrator must enable {% data variables.product.prodname_advanced_security %} for {% data variables.product.product_location %} before you can use these features. For more information, see "[Configuring Advanced Security features](/admin/configuration/configuring-advanced-security-features)."

Once your system is set up, you can enable and disable these features at the organization or repository level. For more information, see "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."
For information about purchasing a license for

{% data variables.product.prodname_GH_advanced_security %}, contact {% data variables.contact.contact_enterprise_sales %}.
{% endif %}

### Enabling {% data variables.product.prodname_advanced_security %} features on {% data variables.product.prodname_dotcom_the_website %}

For public repositories on {% data variables.product.prodname_dotcom_the_website %}, these features are permanently on and are only disabled if you change the visibility of the project so that the code is no longer public.

For all other repositories, once you have a license, you can enable and disable these features at the organization or repository level. {% if currentVersion == "free-pro-team@latest" %}For more information, see "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."
For information about purchasing a license for

{% data variables.product.prodname_GH_advanced_security %}, contact {% data variables.contact.contact_enterprise_sales %}.
{% endif %}
