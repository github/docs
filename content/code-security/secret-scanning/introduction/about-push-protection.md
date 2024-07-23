---
title: About push protection
intro: 'TODO.'
product: '{% data reusables.gated-features.push-protection-for-repos %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
  - /code-security/secret-scanning/protecting-pushes-with-secret-scanning
  - /code-security/secret-scanning/push-protection-for-repositories-and-organizations
type: overview
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push protection
---

Push protection is a {% data variables.product.prodname_secret_scanning %} feature that checks commits for highly identifiable secrets before these commits are pushed to a repository.

{% data reusables.secret-scanning.pre-push-protection %} {% data reusables.secret-scanning.push-protection-overview %}

{% ifversion secret-scanning-push-protection-for-users %}

You can enable push protection:

* At repository/organization level, if you are a repository administrator or an organization owner For more information, see
* For your account on {% data variables.product.prodname_dotcom %}, as a user.

## About push protection for repositories and organizations

{% else %}

If you are a repository administrator or an organization owner, you can enable push protection at repository/organization level.

{% endif %}

{% ifversion security-overview-push-protection-metrics-page %}

If you are an organization owner or security manager, you can view metrics on how push protection is performing across your organization. For more information, see "[AUTOTITLE](/code-security/security-overview/viewing-metrics-for-secret-scanning-push-protection)."

{% endif %}

{% ifversion ghec or fpt %}
{% note %}

**Note:** The github.dev web-based editor doesn't support push protection. For more information about the editor, see "[AUTOTITLE](/codespaces/the-githubdev-web-based-editor)."

{% endnote %}
{% endif %}

By default, anyone with write access to the repository can choose to bypass push protection by specifying one of the bypass reasons outlined in the table. If you want greater control over which contributors can bypass push protection and which pushes containing secrets should be allowed, you can enable delegated bypass for push protection. Delegated bypass lets you configure a designated group of reviewers to oversee and manage requests to bypass push protection from contributors pushing to the repository. For more information, see "[Enabling delegated bypass for push protection](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection)."

You can monitor security alerts to discover when users are bypassing push protections and creating alerts. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)."

For information on the secrets and service providers supported for push protection, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."

{% ifversion secret-scanning-push-protection-for-users %}

## About push protection for users

Everyone across {% data variables.product.prodname_dotcom %} can enable push protection for themselves within your individual settings. This ensures your pushes are protected whenever you push to a public repository on {% data variables.product.prodname_dotcom %}, without relying on that repository to have push protection enabled. For more information, see "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users)."

{% endif %}

TODO Add link to enabling article, which is new.

## Next steps

Mention custom patterns at the end?
{% data reusables.secret-scanning.push-protection-custom-pattern %} {% ifversion secret-scanning-push-protection-custom-patterns %}For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."{% endif %}

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/working-with-push-protection)"
