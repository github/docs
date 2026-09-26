---
title: About rulesets
intro: Rulesets help you to control how people can interact with branches and tags in a repository.
product: '{% data reusables.gated-features.repo-rules %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
permissions: '{% data reusables.repositories.repo-rules-permissions %}'
shortTitle: About rulesets
category:
  - Manage branches and protect code
---

## About rulesets

A ruleset is a named list of rules that applies to a repository or to multiple repositories in an organization for customers on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} plans. You can have up to 75 rulesets per repository, and 75 organization-wide rulesets.

When you create a ruleset, you can allow certain users to bypass the rules in the ruleset. This can be users with a certain role, such as repository administrator, or it can be specific teams or {% data variables.product.prodname_github_apps %}. For more information about granting bypass permissions, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository).

{% ifversion not ghes %}

For organizations on the {% data variables.product.prodname_enterprise %} plan, you can set up rulesets at the {% ifversion enterprise-code-rulesets %} enterprise or {% endif %}organization level to target multiple repositories in your organization. See [AUTOTITLE](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization){% ifversion not ghec %} in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.

{% endif %}

You can use rulesets to target branches or tags in a repository or to block pushes to a repository and the repository's entire fork network.

{% ifversion push-rule-delegated-bypass %}

{% data reusables.repositories.about-push-rule-delegated-bypass %}

{% endif %}

### Branch and tag rulesets

You can create rulesets to control how people can interact with selected branches and tags in a repository. You can control things like who can push commits to a certain branch{% ifversion repo-rules-enterprise %} and how the commits must be formatted{% endif %}, or who can delete or rename a tag. For example, you could set up a ruleset for your repository's `feature` branch that requires signed commits and blocks force pushes for all users except repository administrators.

For each ruleset you create, you specify which branches or tags in your repository{% ifversion repo-rules-enterprise %}, or which repositories in your organization,{% endif %} the ruleset applies to. You can use `fnmatch` syntax to define a pattern to target specific {% ifversion repo-rules-enterprise %}branches, tags, and repositories{% else %}branches and tags{% endif %}. For example, you could use the pattern `releases/**/*` to target all branches in your repository whose name starts with the string `releases/`. For more information on `fnmatch` syntax, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax).

### Push rulesets

{% data reusables.repositories.push-rulesets-overview %}

## About rulesets and protected branches

Rulesets and branch protection rules can both protect branches in a repository. They work alongside each other, and all applicable rules are enforced. For more information, see [About rule layering](#about-rule-layering).

Rulesets offer more flexible ways to manage and understand protections:

* Multiple rulesets can apply to the same branch at the same time, while only one branch protection rule applies.
* You can change a ruleset's enforcement status without deleting the ruleset.
* Anyone with read access to a repository can view its active rulesets. This helps developers understand which rules apply and allows auditors to review protections without administrator access.
* Rulesets can also control commit metadata, such as commit messages and author email addresses. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets){% ifversion ghec %}."{% else %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

{% data reusables.repositories.rulesets-convert-branch-protection-rule %}

## Using ruleset enforcement statuses

{% data reusables.repositories.rulesets-about-enforcement-statuses %}

## About rule layering

A ruleset does not have a priority. Instead, if multiple rulesets target the same branch or tag in a repository, the rules in each of these rulesets are aggregated. If the same rule is defined in different ways across the aggregated rulesets, the most restrictive version of the rule applies. As well as layering with each other, rulesets also layer with protection rules targeting the same branch or tag.

For example, consider the following situation for the `my-feature` branch of the `octo-org/octo-repo` repository.

* An administrator of the repository has set up a ruleset targeting the `my-feature` branch. This ruleset requires signed commits, and three reviews on pull requests before they can be merged.
* An existing branch protection rule for the `my-feature` branch requires a linear commit history, and two reviews on pull requests before they can be merged.{% ifversion repo-rules-enterprise %}
* An administrator of the `octo-org` organization has also set up a ruleset targeting the `my-feature` branch of the `octo-repo` repository. The ruleset blocks force pushes, and requires one review on pull requests before they can be merged.{% endif %}

The rules from each source are aggregated, and all rules apply. Where multiple different versions of the same rule exist, the result is that the most restrictive version of the rule applies. Therefore, the `my-feature` branch requires signed commits and a linear commit history{% ifversion repo-rules-enterprise %}, force pushes are blocked{% endif %}, and pull requests targeting the branch will require three reviews before they can be merged.
