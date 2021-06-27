---
title: About GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} makes extra security features available to customers under an {% data variables.product.prodname_advanced_security %} license.{% ifversion fpt %} These features are also enabled for public repositories on {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
---
## About {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} has many features that help you improve and maintain the quality of your code. Some of these are included in all plans{% ifversion not ghae %}, such as dependency graph and {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Other security features require a license for {% data variables.product.prodname_GH_advanced_security %} to run on repositories apart from public repositories on {% data variables.product.prodname_dotcom_the_website %}.

{% ifversion fpt %}For more information, see "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security)."{% elsif ghes > 2.22 %}For information about purchasing a license for {% data variables.product.prodname_GH_advanced_security %}, contact {% data variables.contact.contact_enterprise_sales %}.{% elsif ghae %}There is no charge for {% data variables.product.prodname_GH_advanced_security %} on {% data variables.product.prodname_ghe_managed %} during the beta release.{% endif %}

## About {% data variables.product.prodname_advanced_security %} features

A {% data variables.product.prodname_GH_advanced_security %} license provides the following additional features:

- **{% data variables.product.prodname_code_scanning_capc %}** - Search for potential security vulnerabilities and coding errors in your code. For more information, see "[About {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)."

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detect secrets, for example keys and tokens, that have been checked into the repository. For more information, see "[About {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)."

{% ifversion fpt %}
- **Dependency review** - Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."
{% endif %}

For information about {% data variables.product.prodname_advanced_security %} features that are in development, see "[{% data variables.product.prodname_dotcom %} public roadmap](https://github.com/github/roadmap)." For an overview of all security features, see "[{% data variables.product.prodname_dotcom %} security features](/code-security/getting-started/github-security-features)."

{% ifversion ghes > 2.22 or ghae %}
## Enabling {% data variables.product.prodname_advanced_security %} features on {% data variables.product.product_name %}

{% ifversion ghes > 2.22 %}
The site administrator must enable {% data variables.product.prodname_advanced_security %} for {% data variables.product.product_location %} before you can use these features. For more information, see "[Configuring Advanced Security features](/admin/configuration/configuring-advanced-security-features)."
{% endif %}

Once your system is set up, you can enable and disable these features at the organization or repository level. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."

{% endif %}

{% ifversion not ghae %}
## Enabling {% data variables.product.prodname_advanced_security %} features on {% data variables.product.prodname_dotcom_the_website %}

For public repositories on {% data variables.product.prodname_dotcom_the_website %}, these features are permanently on and can only be disabled if you change the visibility of the project so that the code is no longer public.

For other repositories, once you have a license for your enterprise account, you can enable and disable these features at the organization or repository level. {% ifversion fpt or ghes > 3.0 %}For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."{% endif %}

{% endif %}

{% ifversion fpt %}
If you have an enterprise account, license use for the entire enterprise is shown on your enterprise license page. For more information, see "[Viewing your {% data variables.product.prodname_GH_advanced_security %} usage](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)."

{% endif %}

{% ifversion fpt %}

## Further reading

- "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account)"

{% elsif ghes > 3.0 or ghae-next %}

## Further reading

- "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %}
