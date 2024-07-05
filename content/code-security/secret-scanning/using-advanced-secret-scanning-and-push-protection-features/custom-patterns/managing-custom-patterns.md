---
title: Managing custom patterns for secret
shortTitle: Manage custom patterns
intro: 'TODO'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Secret scanning
---

## Editing a custom pattern

When you save a change to a custom pattern, this closes all the {% data variables.secret-scanning.alerts %} that were created using the previous version of the pattern.
{% data reusables.secret-scanning.view-custom-pattern %}
1. Under "{% data variables.product.prodname_secret_scanning_caps %}", to the right of the custom pattern you want to edit, click {% octicon "pencil" aria-label="Edit pattern" %}.
{%- ifversion custom-pattern-dry-run-ga  %}
1. When you're ready to test your edited custom pattern, to identify matches without creating alerts, click **Save and dry run**.
{%- endif %}
1. When you have reviewed and tested your changes, click **Publish changes**.{% ifversion secret-scanning-push-protection-custom-patterns %}
{% data reusables.advanced-security.secret-scanning-enable-push-protection-custom-pattern %}
1. Optionally, to disable push protection for your custom pattern, click **Disable**.

   ![Screenshot of the custom pattern page with the button to disable push protection highlighted with a dark orange outline.](/assets/images/help/repository/secret-scanning-disable-push-protection-custom-pattern.png){% endif %}

## Removing a custom pattern

{% data reusables.secret-scanning.view-custom-pattern %}
1. To the right of the custom pattern you want to remove, click {% octicon "trash" aria-label="Remove pattern" %}.
1. Review the confirmation, and select a method for dealing with any open alerts relating to the custom pattern.
1. Click **Yes, delete this pattern**.
