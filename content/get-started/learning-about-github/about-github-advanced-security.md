---
title: About GitHub Advanced Security
intro: '{% data variables.product.github %} makes extra security features available to customers {% ifversion ghas-products %}who purchase {% data variables.product.prodname_GH_code_security %} or {% data variables.product.prodname_GH_secret_protection %}{% else %}under a {% data variables.product.prodname_GHAS %} license{% endif %}.{% ifversion fpt or ghec %} Some features are enabled for public repositories by default.{% endif %}'
product: '{% data reusables.gated-features.ghas-ghec %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
---

## About {% data variables.product.prodname_GHAS %} {% ifversion ghas-products %}products{% endif %}

{% data variables.product.github %} has many features that help you improve and maintain the quality of your code. Some of these are included in all plans, such as dependency graph and {% data variables.product.prodname_dependabot_alerts %}.

{% ifversion ghas-products %}

Other security features require you to purchase one of {% data variables.product.github %}'s {% data variables.product.prodname_AS %} products:

{% data reusables.advanced-security.ghas-products-bullets+ghas %}

{% ifversion fpt or ghec %}Some of these features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, are enabled for public repositories by default. To run the feature on your private or internal repositories, you must purchase the relevant {% data variables.product.prodname_GHAS %} product.{% endif %}

You must be on a {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %} plan in order to purchase {% data variables.product.prodname_GH_code_security %} or {% data variables.product.prodname_GH_secret_protection %}. For more information, see [AUTOTITLE](/get-started/learning-about-github/githubs-plans) and [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% else %}

Other security features require a {% data variables.product.prodname_GHAS %} (GHAS) license. For information about buying a license for {% data variables.product.prodname_GHAS %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% endif %}

{% ifversion ghas-products %}

## {% data variables.product.prodname_GH_code_security %}

You get the following features with {% data variables.product.prodname_GH_code_security %}:

* **{% data variables.product.prodname_code_scanning_caps %}**: Search for potential security vulnerabilities and coding errors in your code using {% data variables.product.prodname_codeql %} or a third-party tool.

* **{% data variables.product.prodname_codeql_cli %}**: Run {% data variables.product.prodname_codeql %} processes locally on software projects or to generate {% data variables.product.prodname_code_scanning %} results for upload to {% data variables.product.github %}.{% ifversion code-scanning-autofix %}

* **{% data variables.copilot.copilot_autofix_short %}**: Get automatically generated fixes for {% data variables.product.prodname_code_scanning %} alerts.{% endif %}{% ifversion security-campaigns %}

* **Security campaigns**: Reduce security debt at scale.{% endif %}

* **{% data variables.dependabot.custom_rules_caps %} for {% data variables.product.prodname_dependabot %}**: Manage your {% data variables.product.prodname_dependabot_alerts %} at scale, by automating which alerts you want to ignore, snooze, or trigger a {% data variables.product.prodname_dependabot %} security update for.

* **Dependency review**: Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request.

* **Security overview**: Understand the distribution of risk across your organization.

{% ifversion fpt or ghec %}

The table below summarizes the availability of {% data variables.product.prodname_GH_code_security %} features for public and private repositories.

{% rowheaders %}

| | Public repository <br>without {% data variables.product.prodname_GH_code_security %} | Private repository <br>without {% data variables.product.prodname_GH_code_security %} | Public or private repository <br>with {% data variables.product.prodname_GH_code_security %} |
| --- | --- | --- | --- |
| {% data variables.product.prodname_code_scanning_caps %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| {% data variables.product.prodname_codeql_cli %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
|{% ifversion code-scanning-autofix %}|
| {% data variables.copilot.copilot_autofix_short %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
|{% endif %}|
|{% ifversion security-campaigns %}|
| Security campaigns | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
|{% endif %}|
| {% data variables.dependabot.custom_rules_caps %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Dependency review | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Security overview | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
{% endrowheaders %}

{% endif %}

For more information about features, see [AUTOTITLE](/code-security/getting-started/github-security-features).

## {% data variables.product.prodname_GH_secret_protection %}

You get the following features with {% data variables.product.prodname_GH_secret_protection %}:

{% data reusables.secret-protection.product-list %}

{% ifversion ghas-products-cloud %}

The table below summarizes the availability of {% data variables.product.prodname_GH_secret_protection %} features for public and private repositories.

{% rowheaders %}

| | Public repository <br>without {% data variables.product.prodname_GH_secret_protection %} | Private repository <br>without {% data variables.product.prodname_GH_secret_protection %} | Public or private repository <br>with {% data variables.product.prodname_GH_secret_protection %} |
| --- | --- | --- | --- |
| Secret scanning   | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Push protection   | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
|{% ifversion secret-scanning-ai-generic-secret-detection %}|
| Copilot secret scanning  | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
|{% endif %}|
| Custom patterns   | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
|{% ifversion push-protection-delegated-bypass %}|
| Delegated bypass for push protection    | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
|{% endif %}|
| Security overview   | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |

{% endrowheaders %}

{% endif %}

For more information about individual features, see [AUTOTITLE](/code-security/getting-started/github-security-features).

{% else %}

## About {% data variables.product.prodname_GHAS %} features

A {% data variables.product.prodname_GHAS %} license provides the following additional features:

* **{% data variables.product.prodname_code_scanning_caps %}** - Search for potential security vulnerabilities and coding errors in your code using {% data variables.product.prodname_codeql %} or a third-party tool. See [AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning) and [AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql).

* **{% data variables.product.prodname_codeql_cli %}** - Run {% data variables.product.prodname_codeql %} processes locally on software projects or to generate {% data variables.product.prodname_code_scanning %} results for upload to {% data variables.product.github %}. See [AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/about-the-codeql-cli).

* **{% data variables.product.prodname_secret_scanning_caps %}** - Detect secrets, for example keys and tokens, that have been checked into  the repository. If push protection is enabled, {% data variables.product.prodname_dotcom %} also detects secrets when they are pushed to your repository. {% ifversion secret-scanning-enable-by-default-for-public-repos %}{% data variables.secret-scanning.user_alerts_caps %} and push protection are available and free of charge for all {% ifversion ghec %}user-owned {% endif %}public repositories on {% data variables.product.prodname_dotcom_the_website %}.{% endif %} See [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning) and [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection).

* **{% data variables.dependabot.custom_rules_caps %}** - {% data reusables.dependabot.dependabot-custom-rules-ghas %}

* **Dependency review** - Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. See [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).

{% endif %}

{% ifversion ghas-products %}{% ifversion secret-risk-assessment %}

## Run an assessment of your organization's exposure to secret leaks

Organizations on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} can run a free report to scan the code in the organization for leaked secrets. This can help you understand the current exposure of repositories in your organization to leaked secrets, as well as help you see how many existing secret leaks could have been prevented by {% data variables.product.prodname_GH_secret_protection %}. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/about-secret-risk-assessment).{% endif %}{% else %}{% endif %}

## Deploying {% ifversion ghas-products %}{% data variables.product.prodname_GH_code_security %} and {% data variables.product.prodname_GH_secret_protection %}{% else %}{% data variables.product.prodname_GHAS %} in your enterprise{% endif %}

To learn about what you need to know to plan your deployment of {% ifversion ghas-products %}{% data variables.product.prodname_GH_code_security %} and {% data variables.product.prodname_GH_secret_protection %}{% else %}{% data variables.product.prodname_GHAS %}{% endif %} at a high level and to review the rollout phases we recommended, see [AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale).

## Enabling features

{% ifversion ghes %}
A site administrator must enable {% data variables.product.prodname_AS %} for {% data variables.location.product_location %} before you can use these features. See [AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise).
{% endif %}

{% ifversion security-configurations %}
{% data reusables.security-configurations.enable-security-features-with-gh-config %}
{% endif %}

{% ifversion security-configurations %}{% else %}Once your system is set up, you can enable and disable these features at the organization or repository level. See [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization) and [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).{% endif %}

If you are on a {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %} plan, license use for the entire team or enterprise is shown on your license page. {% ifversion fpt or ghec %}See [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage).{% endif %}

{% ifversion copilot-chat-ghas-alerts %}

## Leveraging {% data variables.copilot.copilot_chat %} to understand security alerts

Additionally, with a {% data variables.copilot.copilot_enterprise %} license, you can ask {% data variables.copilot.copilot_chat %} for help to better understand security alerts in repositories in your organization ({% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_secret_scanning %}, and {% data variables.product.prodname_dependabot_alerts %}). See [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#asking-questions-about-alerts-from-github-advanced-security-features).
{% endif %}

{% ifversion github-certification %}

## About {% data variables.product.prodname_GHAS %} Certification

You can highlight your knowledge by earning a {% data variables.product.prodname_GHAS %} certificate with {% data variables.product.prodname_certifications %}. The certification validates your expertise in vulnerability identification, workflow security, and robust security implementation. See [AUTOTITLE](/get-started/showcase-your-expertise-with-github-certifications/about-github-certifications).

{% endif %}

## About {% data variables.product.prodname_GHAS %} with Azure Repos

If you want to use {% data variables.product.prodname_GHAS %} with Azure Repos, see [{% data variables.product.prodname_GHAS %} & Azure DevOps](https://resources.github.com/topics/github-advanced-security/) in our resources site. For documentation, see [Configure {% data variables.product.prodname_ghas_azdo %}](https://learn.microsoft.com/en-us/azure/devops/repos/security/configure-github-advanced-security-features) in Microsoft Learn.

## Further reading

* [AUTOTITLE](/code-security/getting-started/github-security-features)
* [{% data variables.product.github %} public roadmap](https://github.com/github/roadmap){%- ifversion ghec or ghes %}
* [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise){% endif %}
