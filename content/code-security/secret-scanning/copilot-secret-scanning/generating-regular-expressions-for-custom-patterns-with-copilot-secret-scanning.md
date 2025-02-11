---
title: Generating regular expressions for custom patterns with Copilot secret scanning
shortTitle: Regular expression generator
intro: 'You can use {% data variables.secret-scanning.copilot-secret-scanning %}''s {% data variables.secret-scanning.custom-pattern-regular-expression-generator %} to write regular expressions for custom patterns. The generator uses an AI model to generate expressions that match your input, and optionally example strings.'
permissions: '{% data reusables.permissions.security-repo-enable %}'
allowTitleToDifferFromFilename: true
versions:
  feature: secret-scanning-custom-pattern-ai-generated
type: how_to
topics:
  - Advanced Security
  - Secret scanning
  - AI
  - Copilot
redirect_from:
  - /code-security/secret-scanning/generating-regular-expressions-for-custom-patterns-with-ai
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/generating-regular-expressions-for-custom-patterns-with-ai
  - /code-security/secret-scanning/copilot-secret-scanning/generating-regular-expressions-for-custom-patterns-with-ai
---

## Generating a regular expression for a repository with {% data variables.secret-scanning.copilot-secret-scanning %}

{% data reusables.secret-scanning.copilot-secret-scanning-expression-generator-subscription-note %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-generate-regular-expression-custom-pattern %}
1. When you're ready to test your new custom pattern, to identify matches in the repository without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

{% data reusables.secret-scanning.link-to-push-protection %}

## Generating a regular expression for an organization with {% data variables.secret-scanning.copilot-secret-scanning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" %} Code security** then **Global settings**.
{% data reusables.advanced-security.secret-scanning-new-custom-pattern-org %}
{% data reusables.advanced-security.secret-scanning-generate-regular-expression-custom-pattern %}
1. When you're ready to test your new custom pattern, to identify matches in selected repositories without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

{% data reusables.secret-scanning.link-to-push-protection %}

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/responsible-ai-regex-generator)
