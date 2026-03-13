---
title: GitHub secret types
intro: Learn about the different types of secrets used by {% data variables.product.github %}.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Secret scanning
  - Secret Protection
  - Dependabot
  - Actions
  - Codespaces
contentType: concepts
---

{% data variables.product.github %} secrets are used to securely store sensitive information like API keys, tokens, and passwords in repositories.

When you store the sensitive information as a {% data variables.product.github %} secret, you remove the need to hardcode the credential or key, and prevent exposure of it in your code or logs. The secret can then be used to authenticate services, manage credentials, and securely pass sensitive data in workflows.

There are {% ifversion fpt or ghec %}three {% else %}two {% endif %}types of secrets used by {% data variables.product.github %}:

* {% data variables.product.prodname_dependabot %} secrets
* Actions secrets{% ifversion fpt or ghec %}
* {% data variables.product.prodname_codespaces %} secrets{% endif %}

Depending on the {% data variables.product.github %} secret type, you can create and manage secrets under your repository, organization, or personal account security settings page.

For information on the usage, scope, permissions, and limitations of each secret type, see [AUTOTITLE](/code-security/reference/secret-security/understanding-github-secret-types).
