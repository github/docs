---
title: Converting branch protections to rulesets
intro: 'Use rulesets to gain clearer visibility and control over your repository protections while preserving their existing behavior.'
product: '{% data reusables.gated-features.repo-rules %}'
versions:
  feature: branch-protection-ruleset-conversion
permissions: 'People with admin access to a repository, or a custom role with the "edit repository rules" permission, can create, edit, and delete rulesets for a repository.'
shortTitle: Convert to rulesets
category:
  - Manage branches and protect code
---

## About converting branch protections to rulesets

Rulesets give you clearer visibility and control over how protections apply to a repository. Unlike branch protection rules, multiple rulesets can apply to the same branch at the same time, and people with read access can view the active rulesets. This helps developers understand the rules that affect them and lets auditors review repository protections without administrator access.

To move your existing protections to this model, convert one branch protection rule at a time in a guided flow. {% data variables.product.github %} generates one or more rulesets that preserve the original rule's behavior. You can preview the rulesets{% ifversion repo-rules-enterprise %}, choose how each one is enforced,{% endif %} and verify the result before you remove the original branch protection rule.

For more information about rulesets, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

## Converting a branch protection rule to a ruleset

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. Under "Branch protection rules", find the rule you want to convert, then click **Convert to ruleset**.
1. Set the ruleset name for each ruleset that will be created in this conversion.
1. Review the "New behavior" section to understand what will change when you create the ruleset or rulesets.{% ifversion repo-rules-enterprise %}
1. Under "Enforcement status", choose how the new ruleset is enforced. For more information, see [Choosing an enforcement status](#choosing-an-enforcement-status).{% endif %}
1. {% ifversion repo-rules-enterprise %}If you chose **Active**, you can optionally remove the original branch protection rule as part of the conversion by selecting **Delete branch protection rule once migration is done**.{% else %}Optionally, to remove the original branch protection rule as part of the conversion, select **Delete branch protection rule once migration is done**.{% endif %}
1. Click **Create ruleset**. If the conversion produces more than one ruleset, the button includes the number of rulesets, for example, **Create 2 rulesets**.

If you keep the original branch protection rule, it continues to protect matching branches. An **Active** ruleset is enforced alongside it, so changes must satisfy both.{% ifversion repo-rules-enterprise %} An **Evaluate** ruleset records how it would behave without enforcing its rules.{% endif %}

> [!NOTE]
> The conversion covers all branch protection types with the exception of the "Require conversation resolution before merging" setting. In branch protections, this setting exists on its own. In rulesets, conversation resolution is part of the pull request rule and only applies when that rule is enabled. As a result, this setting does not map one to one during conversion. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).

{% ifversion repo-rules-enterprise %}

### Choosing an enforcement status

When you convert a branch protection rule, you choose an enforcement status for the new ruleset.

* **Active**: the ruleset is enforced as soon as it is created.
* **Evaluate**: the ruleset runs without enforcing its rules, so you can review how it would behave before it takes effect.

Although **Active** is selected by default, consider which status fits your situation:

* If you have created or migrated similar rules before and are confident in the outcome, you can use **Active**.
* If this is your first migration, consider starting in **Evaluate** mode. You can confirm that the new ruleset behaves as expected, then delete the original branch protection rule once you have finished testing.

{% else %}

The new ruleset has an **Active** status, which means that it is enforced as soon as it is created.

{% endif %}

### Deleting the original branch protection rule

After you convert a rule, return to the **Branches** settings page. If you did not opt to delete the branch protection rule during the conversion process and the new ruleset fully covers it, the listed rule displays the message "This rule is fully covered by rulesets and can be safely deleted", and a **Delete** button appears in place of the **Convert to ruleset** button.

Before you delete the original rule, we recommend confirming that the new ruleset behaves as you expect{% ifversion repo-rules-enterprise %}, especially if you created it in **Evaluate** mode{% endif %}. When you are ready, click **Delete** to remove the branch protection rule.

## Further reading

* [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
