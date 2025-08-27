---
title: A feature has disappeared from a security configuration
shortTitle: Feature disappears
allowTitleToDifferFromFilename: true
intro: 'Changes to your {% data variables.product.prodname_ghe_server %} instance''s installation settings by a site administrator may affect which security features are available to your configuration.'
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: security-configurations-ghes-only
topics:
  - Code Security
  - Secret Protection
  - Organizations
  - Security
---

## About the problem

Security configurations only include features that have been installed by a site administrator on your {% data variables.product.prodname_ghe_server %} instance.

If a site administrator changes the installation settings for a feature on your {% data variables.product.prodname_ghe_server %} instance, your configuration may be impacted.

After you have created and applied a security configuration to repositories across your organization:
* If a site administrator then **installs a new security feature** on the {% data variables.product.prodname_ghe_server %} instance, the feature appears in the configuration, but the enablement status for the feature displays as "Not set".
* If a site administrator **uninstalls an entire feature** from the {% data variables.product.prodname_ghe_server %} instance, the feature (and any sub-features) disappear from the configuration. The configuration doesn't detach from the repositories it's been applied to, and all other functionality continues as normal.
* If a site administrator **uninstalls {% data variables.product.prodname_actions %}** from the {% data variables.product.prodname_ghe_server %} instance, features that are dependent on {% data variables.product.prodname_actions %} (that is, {% data variables.product.prodname_dependabot_security_updates %} and {% data variables.product.prodname_code_scanning %}) disappear from the configuration. The configuration doesn't detach from the repositories it's been applied to, and all other functionality continues as normal.
* If a site administrator **uninstalls and then reinstalls** a feature on the {% data variables.product.prodname_ghe_server %} instance, the configuration remembers the pre-existing enablement status of the feature (either "Enabled", "Disabled", or "Not set") and reverts back to this original enablement status.

## Solving the problem

If you are concerned that a feature has disappeared from a configuration you've created, you should contact the site administrator for your {% data variables.product.prodname_ghe_server %} instance and check whether the feature, or its prerequisite feature, has been uninstalled from the instance, and if the change was intentional.
