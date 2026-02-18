---
title: Code scanning merge protection
shortTitle: Merge protection
intro: Code scanning rules prevent pull requests with potential vulnerabilities from being merged.
topics:
  - Code Security
  - Code scanning
product: 'Rulesets are available in public repositories with {% data variables.product.prodname_free_user %} and {% data variables.product.prodname_free_team %} for organizations, and in public and private repositories with {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}'
permissions: 'Repository administrators and organization owners'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: concepts
---

## Rulesets for {% data variables.product.prodname_code_scanning %} merge protection

A ruleset is a named list of rules that control how people can interact with branches and tags in your repositories. You can add {% data variables.product.prodname_code_scanning %} rules to rulesets to prevent pull requests from being merged when any of the following conditions are met:

{% data reusables.code-scanning.merge-protection-rulesets-conditions %}

Typically, you should use {% data variables.product.prodname_code_scanning %} merge protection on long-lived feature branches, where you want to guarantee code has been analyzed before pull requests can be merged.

Configuring a {% data variables.product.prodname_code_scanning %} rule will not automatically enable {% data variables.product.prodname_code_scanning %}. To learn how to enable code scanning, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning).

> [!NOTE]
> * Merge protection with rulesets is not related to status checks. For more information about status checks, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).

## Availability

You can set {% data variables.product.prodname_code_scanning %} merge protection with rulesets:
* At the repository level
* At the organization level ({% data variables.product.prodname_enterprise %} plans only)

## Exceptions and limitations

Merge protection with rulesets will **not apply** to:
* Merge queue groups
* {% data variables.product.prodname_dependabot %} pull requests analyzed by default setup

Additionally, all the lines of code identified by an alert must exist in the pull request diff. For more information, see [AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#source-file-locations).

## Next steps

To configure a ruleset that requires {% data variables.product.prodname_code_scanning %} results, see [AUTOTITLE](/code-security/how-tos/scan-code-for-vulnerabilities/manage-your-configuration/set-code-scanning-merge-protection).
