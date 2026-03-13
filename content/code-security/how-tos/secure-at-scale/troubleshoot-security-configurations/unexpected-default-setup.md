---
title: Default setup for code scanning overrides advanced setup
shortTitle: Unexpected default setup
intro: You apply a {% data variables.product.prodname_security_configuration %} with "Enabled with advanced setup allowed" and the existing advanced setup for {% data variables.product.prodname_code_scanning %} is ignored in some repositories.
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: security-configurations
topics:
  - Code Security
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/troubleshooting-security-configurations/unexpected-default-setup
contentType: how-tos
---

## About the problem

When you apply a {% data variables.product.prodname_security_configuration %} and {% data variables.product.prodname_code_scanning %} is defined as "Enabled with advanced setup allowed", each repository is checked to see if there is an existing, active, advanced setup.

* **No change to {% data variables.product.prodname_code_scanning %}** if an **active** advanced setup configuration is detected.
* **Default setup is enabled** for repositories where advanced setup is **inactive or absent**.

### Inactive or absent advanced setup

{% data reusables.code-scanning.inactive-advanced-setup %}

## Solving the problem

This solution has two parts:

1. Any repositories where default setup for {% data variables.product.prodname_code_scanning %} was unexpectedly applied need to run {% data variables.product.prodname_codeql %} analysis at intervals of less than 90 days, for example, once a month.

   Even if the repository is not under active development, new vulnerabilities may be identified by updates to {% data variables.product.prodname_codeql %} analysis.

1. Once the affected repositories all have {% data variables.product.prodname_codeql %} analysis running, you can reapply the {% data variables.product.prodname_security_configuration %}.
