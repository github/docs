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
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push protection
---

Push protection is a {% data variables.product.prodname_secret_scanning %} that

## About push protection for repositories and organizations

{% data reusables.secret-scanning.pre-push-protection %} {% data reusables.secret-scanning.push-protection-overview %} {% data reusables.secret-scanning.push-protection-custom-pattern %} {% ifversion secret-scanning-push-protection-custom-patterns %}For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."{% endif %}

By default, anyone with write access to the repository can choose to bypass push protection by specifying one of the bypass reasons outlined in the table. If you want greater control over which contributors can bypass push protection and which pushes containing secrets should be allowed, you can enable delegated bypass for push protection. Delegated bypass lets you configure a designated group of reviewers to oversee and manage requests to bypass push protection from contributors pushing to the repository. For more information, see "[Enabling delegated bypass for push protection](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection)."

{% ifversion secret-scanning-bypass-filter %}

On the {% data variables.product.prodname_secret_scanning %} alerts page for a repository or organization, you can apply the `bypassed:true` filter to easily see which alerts are the result of a user bypassing push protection. For more information on viewing these alerts, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

{% endif %}

You can monitor security alerts to discover when users are bypassing push protections and creating alerts. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)."

{% ifversion security-overview-push-protection-metrics-page %}

If you are an organization owner or security manager, you can view metrics on how push protection is performing across your organization. For more information, see "[AUTOTITLE](/code-security/security-overview/viewing-metrics-for-secret-scanning-push-protection)."

{% endif %}

{% ifversion ghec or fpt %}
{% note %}

**Note:** The github.dev web-based editor doesn't support push protection. For more information about the editor, see "[AUTOTITLE](/codespaces/the-githubdev-web-based-editor)."

{% endnote %}
{% endif %}

For information on the secrets and service providers supported for push protection, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns.md#supported-secrets)."

## About push protection for users.

TODO Add link to enabling article, which is new.

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection)"
* "[AUTOTITLE](/code-security/secret-scanning/working-with-push-protection)"
