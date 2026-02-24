---
title: Dependabot security updates reference
shortTitle: Dependabot security updates
intro: Find usage information for {% data variables.product.prodname_dependabot_security_updates %}.
topics:
  - Dependency graph
  - Dependencies
  - Vulnerabilities
  - Repositories
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: reference
---

## Priority of grouped security update settings

Settings for grouped {% data variables.product.prodname_dependabot_security_updates %} are applied in the following order, from highest to lowest priority:

1. Settings defined in a `dependabot.yml` file. See [About the `dependabot.yml` file](/code-security/reference/supply-chain-security/dependabot-options-reference#about-the-dependabotyml-file).
1. Repository-level settings defined in the UI
1. Organization-level settings defined in the UI

## Enablement for forked repositories

If you create a fork of a repository that has security updates enabled, {% data variables.product.prodname_dotcom %} will automatically disable {% data variables.product.prodname_dependabot_security_updates %} for the fork. You can then decide whether to enable {% data variables.product.prodname_dependabot_security_updates %} on the specific fork.
