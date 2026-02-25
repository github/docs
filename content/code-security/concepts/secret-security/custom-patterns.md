---
title: Custom patterns
intro: 'Detect secret types specific to your organization with custom patterns.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Secret scanning
  - Secret Protection
contentType: concepts
---

You can define custom patterns to identify secrets that are not detected by the default patterns supported by {% data variables.product.prodname_secret_scanning %}. For example, you might have a secret pattern that is internal to your organization. For a list of supported secrets and service providers, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns).

Custom patterns for {% data variables.product.prodname_secret_scanning %} are defined as regular expressions, and can be created at the enterprise, organization, or repository level. You can also enable push protection for custom patterns, stopping those secrets from ever reaching your repository.

## Next steps

To start using custom patterns, see [AUTOTITLE](/code-security/how-tos/secure-your-secrets/customize-leak-detection/defining-custom-patterns-for-secret-scanning).
