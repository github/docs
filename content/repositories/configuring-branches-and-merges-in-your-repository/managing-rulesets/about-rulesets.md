---
title: About rulesets
intro: 'Rulesets help you to control how people can interact with branches and tags in a repository.'
product: '{% data reusables.gated-features.repo-rules %}'
versions:
  feature: repo-rules
permissions: '{% data reusables.repositories.repo-rules-permissions %}'
topics:
  - Repositories
shortTitle: About rulesets
---

## About rulesets

A ruleset is a named list of rules that applies to a repository{% ifversion repo-rules-enterprise %}, or to multiple repositories in an organization{% endif %}. You can have up to 75 rulesets per repository{% ifversion repo-rules-enterprise %}, and 75 organization-wide rulesets{% endif %}.

When you create a ruleset, you can allow certain users to bypass the rules in the ruleset. This can be users with a certain role, such as repository administrator, or it can be specific teams or {% data variables.product.prodname_github_apps %}. For more information about granting bypass permissions, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#granting-bypass-permissions-for-your-ruleset)."

{% ifversion not ghes %}

For organizations on the {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_team %} plans, you can set up rulesets at the organization level to target multiple repositories in your organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization){% ifversion ghec %}."{% else %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

{% endif %}

{% ifversion push-rulesets %}

You can use rulesets to target branches or tags in a repository or to block pushes to a repository and the repository's entire fork network.

{% data reusables.repositories.rulesets-push-rules-beta-note %}

{% endif %}

### Branch and tag rulesets

You can create rulesets to control how people can interact with selected branches and tags in a repository. You can control things like who can push commits to a certain branch{% ifversion repo-rules-enterprise %} and how the commits must be formatted{% endif %}, or who can delete or rename a tag. For example, you could set up a ruleset for your repository's `feature` branch that requires signed commits and blocks force pushes for all users except repository administrators.

For each ruleset you create, you specify which branches or tags in your repository{% ifversion repo-rules-enterprise %}, or which repositories in your organization,{% endif %} the ruleset applies to. You can use `fnmatch` syntax to define a pattern to target specific {% ifversion repo-rules-enterprise %}branches, tags, and repositories{% else %}branches and tags{% endif %}. For example, you could use the pattern `releases/**/*` to target all branches in your repository whose name starts with the string `releases/`. For more information on `fnmatch` syntax, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax)."

{% ifversion push-rulesets %}

### Push rulesets

{% data reusables.repositories.rulesets-push-rules-beta-note %}

{% data reusables.repositories.push-rulesets-overview %}

{% endif %}

## About rulesets, protected branches, and protected tags

Rulesets work alongside any branch protection rules and tag protection rules in a repository. Many of the rules you can define in rulesets are similar to protection rules, and you can start using rulesets without overriding any of your existing protection rules.

{% ifversion tag-protection-rules-import %}Additionally, you can import existing tag protection rules into repository rulesets. This will implement the same tag protections you currently have in place for your repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules#about-importing-tag-protection-rules-to-repository-rulesets)."{% endif %}

Rulesets have the following advantages over branch and tag protection rules.

- Unlike protection rules, multiple rulesets can apply at the same time, so you can be confident that every rule targeting a branch or tag in your repository will be evaluated when someone interacts with that branch or tag. For more information, see "[About rule layering](#about-rule-layering)."
- Rulesets have statuses, so you can easily manage which rulesets are active in a repository without needing to delete rulesets.
- Anyone with read access to a repository can view the active rulesets for the repository. This means a developer can understand why they have hit a rule, or an auditor can check the security constraints for the repository, without requiring admin access to the repository.
- You can create additional rules to control the metadata of commits entering a repository, such as the commit message and the author's email address. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#metadata-restrictions){% ifversion ghec %}."{% else %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

## Using ruleset enforcement statuses

{% data reusables.repositories.rulesets-about-enforcement-statuses %}

## About rule layering

A ruleset does not have a priority. Instead, if multiple rulesets target the same branch or tag in a repository, the rules in each of these rulesets are aggregated. If the same rule is defined in different ways across the aggregated rulesets, the most restrictive version of the rule applies. As well as layering with each other, rulesets also layer with protection rules targeting the same branch or tag.

For example, consider the following situation for the `my-feature` branch of the `octo-org/octo-repo` repository.

- An administrator of the repository has set up a ruleset targeting the `my-feature` branch. This ruleset requires signed commits, and three reviews on pull requests before they can be merged.
- An existing branch protection rule for the `my-feature` branch requires a linear commit history, and two reviews on pull requests before they can be merged.{% ifversion repo-rules-enterprise %}
- An administrator of the `octo-org` organization has also set up a ruleset targeting the `my-feature` branch of the `octo-repo` repository. The ruleset blocks force pushes, and requires one review on pull requests before they can be merged.{% endif %}

The rules from each source are aggregated, and all rules apply. Where multiple different versions of the same rule exist, the result is that the most restrictive version of the rule applies. Therefore, the `my-feature` branch requires signed commits and a linear commit history{% ifversion repo-rules-enterprise %}, force pushes are blocked{% endif %}, and pull requests targeting the branch will require three reviews before they can be merged.
