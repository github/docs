---
title: Managing rulesets for a repository
intro: 'You can add rulesets to a repository to control how people can interact with specific branches and tags.'
product: '{% data reusables.gated-features.repo-rules %}'
versions:
  feature: repo-rules
permissions: '{% data reusables.repositories.repo-rules-permissions %}'
topics:
  - Repositories
shortTitle: Manage a ruleset
---

You can create rulesets to control how users can interact with selected branches and tags in a repository. When you create a ruleset, you can allow certain users to bypass the rules in the ruleset. This can be users with certain permissions, specific teams, or {% data variables.product.prodname_github_apps %}. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)."

You can use the REST and GraphQL APIs to manage rulesets. For more information, see "[AUTOTITLE](/rest/repos/rules)" and "[AUTOTITLE](/graphql/reference/mutations#createrepositoryruleset)."

{% data reusables.repositories.rulesets-sudo-mode %}

{% ifversion repo-rules-enterprise %}
{% tip %}

**Tip:** If you're the owner of an organization, you can create rulesets at the organization level. You can apply these rulesets to specific repositories in your organization, and to specific branches in those repositories. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization)."

{% endtip %}
{% endif %}

## Viewing rulesets for a repository

Anyone with read access to a repository can view the rulesets targeting the repository. This can be useful if you want to know why you can't commit to a branch. On the "Rulesets" page, you can view the active rulesets targeting a certain branch or tag. {% ifversion repo-rules-enterprise %}You will also see rulesets running in "Evaluate" mode, which are not enforced.{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. To the left of the branch, click {% octicon "shield-lock" aria-label="This branch is protected" %}.

   ![Screenshot of a list of branches in a repository. Next to the "main" branch, an icon of a shield with a keyhole is highlighted with an orange outline.](/assets/images/help/repository/view-branch-rules.png)
1. Optionally, to view the rulesets for another branch or tag, use the branch selector dropdown menu.

   ![Screenshot of the "Rulesets" page. Above a ruleset, a dropdown menu, labeled with a branch icon and "team-test," is highlighted with an orange outline.](/assets/images/help/repository/rulesets-branch-selector.png)
1. Click the name of the ruleset you want to view.

## Creating a ruleset

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
{% data reusables.repositories.create-ruleset-step %}
{% data reusables.repositories.rulesets-general-step %}
{% data reusables.repositories.rulesets-bypass-step %}
{% data reusables.repositories.rulesets-target-branches %}
{% data reusables.repositories.rulesets-protections-step %}{% ifversion repo-rules-enterprise %}
{% data reusables.repositories.rulesets-metadata-step %}{% endif %}
{% data reusables.repositories.rulesets-create-step %}

## Editing a ruleset

{% ifversion repo-rules-enterprise %}
{% note %}

**Note:** If a ruleset was created at the organization level, you cannot edit the ruleset from the repository's settings. If you have permission to edit the ruleset, you can do so in your organization's settings. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#editing-a-ruleset)."

{% endnote %}
{% endif %}

{% data reusables.repositories.about-editing-rulesets %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
{% data reusables.repositories.edit-ruleset-steps %}

## Deleting a ruleset

{% data reusables.repositories.deleting-ruleset-tip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
{% data reusables.repositories.delete-ruleset-steps %}

{% ifversion repo-rules-enterprise %}

## Viewing insights for rulesets

You can view insights for rulesets to see how rulesets are affecting a repository. {% data reusables.repositories.about-ruleset-insights %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the left sidebar, under "Code and automation," click **Rules**, then click **Insights**.

   ![Screenshot of the sidebar of the "Settings" page for a repository. The "Rules" sub-menu is expanded, and the "Insights" option is outlined in orange.](/assets/images/help/repository/ruleset-insights.png)
1. On the "Rule Insights" page, use the dropdown menus at the top of the page to filter the actions by ruleset, branch, actor, and time period.
{% data reusables.repositories.rulesets-view-rule-runs %}

{% endif %}

## Using `fnmatch` syntax

{% data reusables.repositories.rulesets-fnmatch %}

{% ifversion repo-rules-enterprise %}

## Using regular expressions for commit metadata

{% data reusables.repositories.rulesets-commit-regex %}

{% endif %}
