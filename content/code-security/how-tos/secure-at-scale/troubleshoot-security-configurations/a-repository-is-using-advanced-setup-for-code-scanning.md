---
title: A repository is using advanced setup for code scanning
shortTitle: Active advanced setup
intro: You see an error when you try to attach a {% data variables.product.prodname_security_configuration %} with default code scanning enabled to repositories that use advanced setup for code scanning.
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: security-configurations
redirect_from:
  - /code-security/securing-your-organization/troubleshooting-security-configurations/a-repository-has-an-existing-advanced-setup-for-code-scanning
  - /code-security/securing-your-organization/troubleshooting-security-configurations/a-repository-is-using-advanced-setup-for-code-scanning
topics:
  - Code Security
  - Organizations
  - Security
contentType: how-tos
---

## About the problem

You cannot successfully apply a {% data variables.product.prodname_security_configuration %} with {% data variables.product.prodname_code_scanning %} default setup set to "Enabled" to a target repository that has an active configuration of advanced setup for {% data variables.product.prodname_code_scanning %}. Advanced setups are tailored to the specific security needs of the repositories they are applied to, so they are not intended to be overridden at scale.

### Active advanced setup

If you try to attach a {% data variables.product.prodname_security_configuration %} with {% data variables.product.prodname_code_scanning %} set to "Enabled" to a repository that already uses advanced setup, security settings will be applied as follows:

* **{% data variables.product.prodname_code_scanning_caps %} default setup will not be enabled**, and advanced setup will continue to run as normal.
* **All other security features enabled in the configuration will be enabled.**
* **The {% data variables.product.prodname_security_configuration %} will not be attached** to the repository, since only some features from the configuration are enabled.

### Inactive or absent advanced setup

{% data reusables.code-scanning.inactive-advanced-setup %}

If there is no advanced setup or the advanced setup is inactive, then default setup is enabled and the {% data variables.product.prodname_security_configuration %} applied as expected.

## Solving the problem

There are three ways you could solve this problem:

1. **Change the Default setup option from "Enabled" to "Enabled with advanced setup allowed"** in the {% data variables.product.prodname_security_configuration %}. _Option available from {% data variables.product.prodname_ghe_server %} 3.19._ After editing your {% data variables.product.prodname_security_configuration %}, reapply it to the repositories. For more information, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).
1. **Update the affected repositories to use default setup** for {% data variables.product.prodname_code_scanning %} at the repository level and then reapply your {% data variables.product.prodname_security_configuration %} to the repositories. For more information, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning).
1. **Create a new custom {% data variables.product.prodname_security_configuration %}** that does not include a setting for {% data variables.product.prodname_code_scanning %} and apply this {% data variables.product.prodname_security_configuration %} to repositories that use advanced setup. For more information, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).
