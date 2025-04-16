---
title: 'Error: "{% data variables.product.prodname_GHAS_or_code_security %} must be enabled for this repository to use code scanning"'
shortTitle: '{% data variables.product.prodname_code_security %} must be enabled'
intro: 'If you see this error, make sure that {% data variables.product.prodname_GH_code_security %} is enabled.'
allowTitleToDifferFromFilename: true
type: reference
topics:
  - Code scanning
  - Errors
  - Troubleshooting
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About this error

```text
{% data variables.product.prodname_GHAS_or_code_security %} must be enabled for this repository to use code scanning
403: {% data variables.product.prodname_GHAS_or_code_security %} is not enabled
```

This error is reported if you try to run {% data variables.product.prodname_code_scanning %} in a repository where {% data variables.product.prodname_GH_code_security %} is not enabled or where use of this feature is blocked by a policy.

{% ifversion fpt or ghec %}You will only see this error for repositories with private or internal visibility. {% data variables.product.prodname_GH_code_security %} is enabled by default for all public repositories.{% endif %}

{% ifversion fpt %}
If you are on a **{% data variables.product.prodname_free_team %}** or **{% data variables.product.prodname_pro %}** plan, you can only use {% data variables.product.prodname_code_scanning %} on repositories that are publicly available. To enable {% data variables.product.prodname_code_scanning %} for private or internal repositories, you must upgrade to {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %} with {% data variables.product.prodname_GH_code_security %} and enable {% data variables.product.prodname_code_security %} for the repository. For more information, see [AUTOTITLE](/get-started/learning-about-github/githubs-products#github-team) and [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security).
{% endif %}

## Confirming the cause of the error

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. On the settings page, scroll down to "{% data variables.product.prodname_code_security %}."
1. If there is an associated and active **Enable** button, {% data variables.product.prodname_GH_code_security %} is available for this repository but not yet enabled.
{% ifversion ghas-products %}
1. If use of {% data variables.product.prodname_GH_code_security %} is blocked by a policy, "{% octicon "shield" aria-hidden="true" %} Disabled" is shown in place of the **Enable** button.

   !["Screenshot of the {% data variables.product.prodname_AS %}" setting. The disabled option is highlighted in dark orange.](/assets/images/help/repository/ghas-enterprise-policy-block.png)
{% else %}
1. If use of {% data variables.product.prodname_GH_code_security %} is blocked by a policy, the **Enable** button is inactive and the owner of the policy is listed.

   !["Screenshot of the {% data variables.product.prodname_AS %}" setting. The enterprise policy owner and the inactive "Enable" button are highlighted in dark orange.](/assets/images/help/repository/ghas-enterprise-policy-block-ghas.png)
{% endif %}

## Fixing the problem

If {% data variables.product.prodname_GH_code_security %} is available to your repository, you can enable it on the settings page.

If {% data variables.product.prodname_GH_code_security %} is blocked by a policy, you first need to request access.

### Requesting access to {% data variables.product.prodname_GH_code_security %}

1. In the "{% data variables.product.UI_advanced_security %}" settings, click the enterprise name to display a list of users with access to edit the policy that controls access to {% data variables.product.prodname_code_security %} products. For more information, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-for-the-use-of-github-advanced-security-in-your-enterprises-organizations).
1. Follow your company's policy for requesting access to additional features.

### Enabling {% data variables.product.prodname_GH_code_security %}

1. Open the "Code security" settings page.
1. Next to the "{% data variables.product.prodname_code_security %}" feature, click **Enable**.
1. Rerun {% data variables.product.prodname_code_scanning %}.
