---
title: Generating regular expressions for custom patterns with Copilot secret scanning
shortTitle: Generate regular expressions
intro: You can use {% data variables.secret-scanning.copilot-secret-scanning %}'s {% data variables.secret-scanning.custom-pattern-regular-expression-generator %} to write regular expressions for custom patterns. The generator uses an AI model to generate expressions that match your input, and optionally example strings.
permissions: '{% data reusables.permissions.security-repo-enable %}'
allowTitleToDifferFromFilename: true
versions:
  feature: secret-scanning-custom-pattern-ai-generated
contentType: how-tos
topics:
  - Secret Protection
  - Secret scanning
  - AI
  - Copilot
redirect_from:
  - /code-security/secret-scanning/generating-regular-expressions-for-custom-patterns-with-ai
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/generating-regular-expressions-for-custom-patterns-with-ai
  - /code-security/secret-scanning/copilot-secret-scanning/generating-regular-expressions-for-custom-patterns-with-ai
  - /code-security/secret-scanning/copilot-secret-scanning/generating-regular-expressions-for-custom-patterns-with-copilot-secret-scanning
---

## Generating a regular expression for a repository with {% data variables.secret-scanning.copilot-secret-scanning %}

{% data reusables.secret-scanning.copilot-secret-scanning-expression-generator-subscription-note %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "{% data variables.product.prodname_secret_protection %}", under "Custom patterns", click **New pattern**.
{% data reusables.advanced-security.secret-scanning-generate-regular-expression-custom-pattern %}
1. When you're ready to test your new custom pattern, to identify matches in the repository without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

{% data reusables.secret-scanning.link-to-push-protection %}

## Generating a regular expression for an organization with {% data variables.secret-scanning.copilot-secret-scanning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.security-configurations.display-global-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern-org %}
{% data reusables.advanced-security.secret-scanning-generate-regular-expression-custom-pattern %}
1. When you're ready to test your new custom pattern, to identify matches in selected repositories without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

{% data reusables.secret-scanning.link-to-push-protection %}

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/responsible-ai-regex-generator)
