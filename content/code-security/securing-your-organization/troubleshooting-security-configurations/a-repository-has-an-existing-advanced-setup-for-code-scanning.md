---
title: A repository has an existing advanced setup for code scanning
shortTitle: Existing advanced setup
intro: 'You need to override existing advanced setups at the repository level before you can apply a {% data variables.product.prodname_security_configuration %} with {% data variables.product.prodname_code_scanning %} enabled.'
permissions: '{% data reusables.security-configurations.security-configurations-permissions %}'
versions:
  feature: security-configurations
topics:
  - Advanced Security
  - Organizations
  - Security
---

{% note %}

**Note:** {% data reusables.security-configurations.security-configurations-beta-note-short %}

{% endnote %}

To successfully apply a {% data variables.product.prodname_security_configuration %} with {% data variables.product.prodname_code_scanning %} default setup enabled, the target repository cannot have an existing advanced setup for {% data variables.product.prodname_code_scanning %}. {% data variables.product.prodname_security_configurations_caps %} cannot override advanced setups since advanced setups are tailored to the specific security needs of their repositories, and organization owners or security managers enabling default setup at scale may not realize they are overriding those custom settings.

If you try to apply a {% data variables.product.prodname_security_configuration %} with {% data variables.product.prodname_code_scanning %} enabled to a repository with an existing advanced setup for {% data variables.product.prodname_code_scanning %}, security settings will be enabled as follows:

  - {% data variables.product.prodname_code_scanning_caps %} default setup _will not_ be enabled on the repository, and the existing advanced setup will continue to run as normal.
  - Aside from {% data variables.product.prodname_code_scanning %}, all security features enabled in the configuration _will_ be enabled on the repository.
  - The {% data variables.product.prodname_security_configuration %} _will not_ be attached to the repository, since only some features from the configuration are enabled.

For all repositories without an existing advanced setup for {% data variables.product.prodname_code_scanning %}, the {% data variables.product.prodname_security_configuration %} will be applied as expected, and {% data variables.product.prodname_code_scanning %} default setup will be enabled.

{% note %}

**Note:** If you cannot successfully apply a configuration to a private{% ifversion ghec or ghes %} or internal{% endif %} repository without {% data variables.product.prodname_code_scanning %} advanced setup enabled, you should make sure you have sufficient available {% data variables.product.prodname_GH_advanced_security %} licenses to apply that configuration. For more information, see "[AUTOTITLE](/code-security/securing-your-organization/troubleshooting-security-configurations/not-enough-github-advanced-security-licenses)."

{% endnote %}

To apply a {% data variables.product.prodname_security_configuration %} with {% data variables.product.prodname_code_scanning %} enabled to a repository with advanced setup, you must first configure default setup at the repository level, then apply the {% data variables.product.prodname_security_configuration %} as normal. For more information, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)."
