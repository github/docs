---
title: 'Cannot enable CodeQL in a private repository'
intro: '{% data variables.product.prodname_GH_advanced_security %} must be enabled in order to use {% data variables.product.prodname_code_scanning %} on private repositories.'
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

{% ifversion fpt %}
If you are on a free, pro, or team plan, you can only use {% data variables.product.prodname_code_scanning %} on repositories that are publically available. To enable {% data variables.product.prodname_code_scanning %} for private or internal repositories, you must upgrade to GitHub Enterprise with {% data variables.product.prodname_GH_advanced_security %} and enable {% data variables.product.prodname_GH_advanced_security %} for the repository. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-products#github-enterprise)" and "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

{% else %}

## Confirm whether {% data variables.product.prodname_GH_advanced_security %} is enabled

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. Scroll down to "{% data variables.product.prodname_GH_advanced_security %}."
1. If there is an associated and active **Enable** button, {% data variables.product.prodname_GH_advanced_security %} is available for this repository but not yet enabled.
1. If use of {% data variables.product.prodname_GH_advanced_security %} is blocked by a policy, the **Enable** button is inactive and the owner of the policy is listed.

   !["Screenshot of the {% data variables.product.prodname_GH_advanced_security %}" setting. The enterprise policy owner and the inactive "Enable" button are highlighted in dark orange.](/assets/images/help/repository/ghas-enterprise-policy-block.png)

### Requesting access to {% data variables.product.prodname_GH_advanced_security %}

1. In the "{% data variables.product.prodname_GH_advanced_security %}" settings, click the enterprise name to display a list of users with access to edit the policy that controls access to {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-for-the-use-of-github-advanced-security-in-your-enterprises-organizations)."
1. Follow your company's policy for requesting access to additional features.

### Enabling {% data variables.product.prodname_GH_advanced_security %}

1. In the "{% data variables.product.prodname_GH_advanced_security %}" settings, click **Enable**.
1. Rerun {% data variables.product.prodname_code_scanning %}.

{% endif %}
