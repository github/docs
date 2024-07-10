---
title: A repository is using advanced setup for code scanning
shortTitle: Active advanced setup
intro: 'You cannot attach a {% data variables.product.prodname_security_configuration %} with code scanning enabled to repositories that are using advanced setup for code scanning.'
permissions: '{% data reusables.security-configurations.security-configurations-permissions %}'
versions:
  feature: security-configurations
redirect_from:
  - /code-security/securing-your-organization/troubleshooting-security-configurations/a-repository-has-an-existing-advanced-setup-for-code-scanning
topics:
  - Advanced Security
  - Organizations
  - Security
---

{% data reusables.security-configurations.security-configurations-beta-note-short %}

## About the problem

You cannot successfully apply a {% data variables.product.prodname_security_configuration %} with {% data variables.product.prodname_code_scanning %} default setup enabled to a target repository that uses advanced setup for {% data variables.product.prodname_code_scanning %}. Advanced setups are tailored to the specific security needs of their repositories, so they are not intended to be overridden at scale.

If you try to attach a {% data variables.product.prodname_security_configuration %} with {% data variables.product.prodname_code_scanning %} enabled to a repository already using advanced setup, security settings will be applied as follows:

* **{% data variables.product.prodname_code_scanning_caps %} default setup will not be enabled**, and advanced setup will continue to run as normal.
* **All other security features enabled in the configuration will be enabled.**
* **The {% data variables.product.prodname_security_configuration %} will not be attached** to the repository, since only some features from the configuration are enabled.

For all repositories without an active advanced setup, the {% data variables.product.prodname_security_configuration %} will be applied as expected, and {% data variables.product.prodname_code_scanning %} default setup will be enabled.

{% note %}

**Note:** If advanced setup is considered inactive for a repository, default setup _will_ still be enabled for that repository. Advanced setup is considered inactive for a repository if the repository meets any of the following criteria:
* The latest {% data variables.product.prodname_codeql %} analysis is more than 90 days old
* All {% data variables.product.prodname_codeql %} configurations have been deleted
* The workflow file has been deleted or disabled (exclusively for YAML-based advanced setup)
  
{% endnote %}

## Solving the problem

There are two ways you can solve this problem:

1. **Update the affected repositories to use default setup** for {% data variables.product.prodname_code_scanning %} at the repository level and then reapply your {% data variables.product.prodname_security_configuration %} to the repositories. For more information, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)."
1. **Create a new custom {% data variables.product.prodname_security_configuration %}** that does not include a setting for {% data variables.product.prodname_code_scanning %} and apply this {% data variables.product.prodname_security_configuration %} to repositories that use advanced setup. For more information, see "[AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/creating-a-custom-security-configuration)."
