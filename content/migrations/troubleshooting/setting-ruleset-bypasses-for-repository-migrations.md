---
title: Setting ruleset bypasses for repository migrations
shortTitle: Ruleset bypasses
intro: 'When migrating repositories with {% data variables.product.prodname_importer_proper_name %}, evaluation of organization-level and enterprise-level rulesets can cause Git pushes to fail unless **Repository migrations** is added to the bypass list with the **Exempt** mode.'
versions:
  ghec: '*'
---

## Background

When you import a repository with {% data variables.product.prodname_importer_proper_name %}, an internal service pushes the repository's Git data to {% data variables.product.github %}, batching refs together for performance. This introduces a possible case where evaluation of organization-level or enterprise-level rulesets against the pushed refs can time out, causing the repository migration as a whole to fail.

Because {% data variables.product.prodname_importer_proper_name %} tags its Git pushes as migration operations, you can create ruleset bypasses that apply only to repository migrations and not to other actors. This prevents ruleset evaluations from timing out and causing migration failures.

## “Always allow” vs. “Exempt”

Ruleset bypasses come in two types: “always allow” and “exempt.” Their differences are subtle, but material for the case of repository migrations:

| Mode | Behavior |
|------|----------|
| **Always allow** | The ruleset will be evaluated and the selected actor(s) will be prompted to bypass |
| **Exempt** | The ruleset will not be evaluated and no bypass prompt will be shown |

The key distinction for the purposes of Git migrations is not whether the ruleset will pass or fail (“always allow” would be sufficient in that case), but whether the ruleset is evaluated at all (necessitating “exempt” bypasses).

## Adding the bypass

The following steps walk through configuring ruleset bypasses required for migrations. You will need organization admin or enterprise admin permissions to edit the respective rulesets.

1. In your organization’s settings, expand the **Repository** section, then navigate to **Rulesets**.

1. Navigate to the ruleset you want to update. In the **Bypass list** section, you will see either an empty list or any bypasses already configured.

1. If **Repository migrations** isn’t present in the bypass list, click **Add bypass**. A dropdown appears listing the available bypass actors; check the box next to **Repository migrations**, and note that the entry appears in your bypass list with a default mode of **Always allow**.

1. Click the **···** menu on the Repository migrations entry. You will see two mode options and a delete action. Select **Exempt**. Do not leave the mode set to **Always allow**—as noted above, **Always allow** bypasses still allow evaluation, which is what times out. The bypass list now shows **Repository migrations** with mode **Exempt**.

1. Scroll to the bottom of the ruleset page and click **Save changes**. The bypass takes effect immediately for subsequent migration runs.

## Security and side effects

As noted above, {% data variables.product.prodname_importer_proper_name %} uses a specific path for pushing Git data, and the **Repository migrations** bypass only targets that path—there is no path where ordinary users or Git pushes to existing repositories can bypass rulesets using the **Repository migrations** bypass.

It is recommended that all **Repository migrations** bypasses be left in place for as long as you are running migrations. After migrations are complete,
 leaving the bypass in place does not pose any security risk.

## Related topics

* [AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer)
* [AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/troubleshooting-your-migration-with-github-enterprise-importer)
* [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)
* [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/managing-policies-for-code-governance)
