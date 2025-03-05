---
title: Enabling push protection for your repository
shortTitle: Enable push protection
intro: 'With push protection, {% data variables.product.prodname_secret_scanning %} blocks contributors from pushing secrets to a repository and generates an alert whenever a contributor bypasses the block.'
permissions: '{% data reusables.permissions.push-protection %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
---

## About enabling push protection

To enable push protection for a repository, you must first enable {% data variables.product.prodname_secret_scanning %}. You can then enable push protection in the repository's {% ifversion code-security-wording-only %}"Code security"{% else %}"Code security and analysis"{% endif %} settings page following the steps outlined in this article.

{% ifversion secret-scanning-push-protection-for-users %}

You can additionally enable push protection for your own personal account, which prevents you from pushing secrets to _any_ public repository on {% data variables.product.prodname_dotcom %}. For more information, see [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users).

{% endif %}

{% ifversion security-configurations %}

If you're an organization owner, you can enable push protection for multiple repositories at a time using {% data variables.product.prodname_security_configurations %}. For more information, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale).

{% else %}

If you're an organization owner, you can enable push protection for multiple repositories at a time. For more information, see [AUTOTITLE](/code-security/getting-started/quickstart-for-securing-your-organization#enabling-security-features-in-your-organization).

{% endif %}

Organization owners, security managers, and repository administrators can also enable push protection for {% data variables.product.prodname_secret_scanning %} via the API. For more information, see [AUTOTITLE](/rest/repos#update-a-repository) and expand the "Properties of the `security_and_analysis` object" section.

{% ifversion security-configuration-enterprise-level %}

If your organization is owned by an enterprise account, an enterprise owner can also enable push protection at the enterprise level. For more information, see [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/creating-a-custom-security-configuration-for-your-enterprise).

{% elsif ghes < 3.16 %}

If your organization is owned by an enterprise account, an enterprise owner can also enable push protection at the enterprise level. For more information, see [AUTOTITLE](/admin/managing-code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).

{% endif %}

## Enabling push protection for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection)
* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/excluding-folders-and-files-from-secret-scanning)
* [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)
