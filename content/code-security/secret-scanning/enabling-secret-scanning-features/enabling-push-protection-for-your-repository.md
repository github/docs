---
title: Enabling push protection for your repository
shortTitle: Enable push protection
intro: 'With push protection, {% data variables.product.prodname_secret_scanning %} blocks contributors from pushing secrets to a repository and generates an alert whenever a contributor bypasses the block.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
---

## About enabling push protection

To enable push protection for a repository, you must first enable {% data variables.product.prodname_secret_scanning %}. You can then enable push protection in the repository's "Code security and analysis" settings page following the steps outlined in this article.

{% ifversion secret-scanning-push-protection-for-users %}

You can additionally enable push protection for your own personal account, which prevents you from pushing secrets to _any_ public repository on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users)."

{% endif %}

If you're an organization owner, you can enable push protection for multiple repositories at a time{% ifversion security-configurations-ga %} using a security configuration{% endif %}. For more information, see {% ifversion security-configurations-ga %}"[AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/creating-a-custom-security-configuration){% else %}"[AUTOTITLE](/code-security/getting-started/quickstart-for-securing-your-organization#enabling-security-features-in-your-organization){% endif %}."

Organization owners, security managers, and repository administrators can also enable push protection for {% data variables.product.prodname_secret_scanning %} via the API. For more information, see "[AUTOTITLE](/rest/repos#update-a-repository)" and expand the "Properties of the `security_and_analysis` object" section.

{% ifversion secret-scanning-enterprise-level %}

If your organization is owned by an enterprise account, an enterprise owner can also enable push protection at the enterprise level. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)."

{% endif %}

## Enabling push protection for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection)"
* "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/excluding-folders-and-files-from-secret-scanning)"
* "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)"
* "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"
