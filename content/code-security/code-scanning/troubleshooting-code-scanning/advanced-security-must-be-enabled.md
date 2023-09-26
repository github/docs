---
title: 'Error: "Advanced Security must be enabled for this repository to use code scanning"'
shortTitle: 'Advanced Security must be enabled'
intro: 'If you see this error, make sure that {% data variables.product.prodname_GH_advanced_security %} is enabled.'
allowTitleToDifferFromFilename: true
type: reference
topics:
  - Code scanning
  - Errors
  - Troubleshooting
versions:
  feature: code-scanning-tool-status-page
---

## About this error

```text
Advanced Security must be enabled for this repository to use code scanning
403: GitHub Advanced Security is not enabled
```

This error is reported if you try to run {% data variables.product.prodname_code_scanning %} in a repository where {% data variables.product.prodname_GH_advanced_security %} is not enabled or where use of this feature is blocked by a policy.

{% ifversion fpt or ghec %}You will only see this error for repositories with private or internal visibility. {% data variables.product.prodname_GH_advanced_security %} is enabled by default for all public repositories.{% endif %}

## Confirming the cause of the error

{% ifversion fpt %}
If you are on a free, pro, or team plan, you can only use {% data variables.product.prodname_code_scanning %} on repositories that are publically available. To enable {% data variables.product.prodname_code_scanning %} for private or internal repositories, you must upgrade to GitHub Enterprise with {% data variables.product.prodname_GH_advanced_security %} and enable {% data variables.product.prodname_GH_advanced_security %} for the repository. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-products#github-enterprise)" and "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

{% else %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. Scroll down to "{% data variables.product.prodname_GH_advanced_security %}."
1. If there is an associated and active **Enable** button, {% data variables.product.prodname_GH_advanced_security %} is available for this repository but not yet enabled.
1. If use of {% data variables.product.prodname_GH_advanced_security %} is blocked by a policy, the **Enable** button is inactive and the owner of the policy is listed.

   ![Screenshot of the "{% data variables.product.prodname_GH_advanced_security %}" setting. The owner of the enterprise policy and the inactive "Enable" button are highlighted with a dark orange outline.](/assets/images/help/repository/ghas-enterprise-policy-block.png)

## Fixing the problem

If {% data variables.product.prodname_GH_advanced_security %} is available to your repository, you can enable it on the settings page. If {% data variables.product.prodname_GH_advanced_security %} is blocked by a policy, you first need to request access.

### Requesting access to {% data variables.product.prodname_GH_advanced_security %}

1. In the "{% data variables.product.prodname_GH_advanced_security %}" settings, click the enterprise name to display a list of users with access to edit the policy that controls access to {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-for-the-use-of-github-advanced-security-in-your-enterprises-organizations)."
1. Follow your company's policy for requesting access to additional features.

### Enabling {% data variables.product.prodname_GH_advanced_security %}

1. In the "{% data variables.product.prodname_GH_advanced_security %}" settings, click **Enable**.
1. Rerun {% data variables.product.prodname_code_scanning %}.

{% endif %}
