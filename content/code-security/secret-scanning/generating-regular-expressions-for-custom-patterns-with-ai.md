---
title: Generating regular expressions for custom patterns with AI
shortTitle: Use the regular expression generator
intro: 'You can use the {% data variables.secret-scanning.custom-pattern-regular-expression-generator %} to generate regular expressions for custom patterns. The generator uses an AI model to generate expressions that match your input, and optionally example strings.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  feature: secret-scanning-custom-pattern-ai-generated
type: how_to
topics:
  - Advanced Security
  - Secret scanning
  - AI
---
{% data reusables.secret-scanning.beta-custom-pattern-regular-expression-generator %}

## Generating a regular expression for a repository using the generator

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

## Generating a regular expression for an organization using the generator

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}

{% ifversion security-configurations %}
    {% data reusables.security-configurations.changed-org-settings-global-settings-callout %} For detail on using the {% data variables.secret-scanning.custom-pattern-regular-expression-generator %}, reference the following steps in this procedure. For more information on configuring {% data variables.product.prodname_global_settings %} for your organization, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization)."
{% endif %}

{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-generate-regular-expression-custom-pattern %}
1. When you're ready to test your new custom pattern, to identify matches in selected repositories without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

{% data reusables.secret-scanning.link-to-push-protection %}

## Further reading

- "[AUTOTITLE](/code-security/secret-scanning/about-the-regular-expression-generator-for-custom-patterns)"
