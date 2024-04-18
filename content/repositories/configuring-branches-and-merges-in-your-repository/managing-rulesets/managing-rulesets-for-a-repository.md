---
title: Managing rulesets for a repository
intro: 'You can edit, monitor, and delete existing rulesets in a repository to alter how people can interact with specific branches and tags.'
product: '{% data reusables.gated-features.repo-rules %}'
versions:
  feature: repo-rules
permissions: '{% data reusables.repositories.repo-rules-permissions %}'
topics:
  - Repositories
shortTitle: Manage a ruleset
---

After creating a ruleset, you can still make changes to it. For example, you can add rules to better protect your branches or tags, or you can {% ifversion repo-rules-enterprise %}switch your ruleset from "Evaluate" mode to "Active" after testing its effects on the contributor experience for your repository{% else %}temporarily disable a ruleset to troubleshoot any unintended effects on the contributor experience for your repository{% endif %}.

You can use the REST and GraphQL APIs to manage rulesets. For more information, see "[AUTOTITLE](/rest/repos/rules)" and "[AUTOTITLE](/graphql/reference/mutations#createrepositoryruleset)."

{% ifversion repo-rules-enterprise %}
{% tip %}

**Tip:** If you're the owner of an organization, you can create rulesets at the organization level. You can apply these rulesets to specific repositories in your organization, and to specific branches in those repositories. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization)."

{% endtip %}
{% endif %}

## Viewing rulesets for a repository

On the "Rulesets" page, anyone with read access to the repository can view the active rulesets targeting a certain {% ifversion push-rulesets%}branch, tag, or push restriction.{% else %}branch or tag.{% endif %} {% ifversion repo-rules-enterprise %}You will also see rulesets running in "Evaluate" mode, which are not enforced.{% endif %}

{% ifversion push-rulesets %}

For push rulesets for forked repositories, the "Rulesets" page will indicate that the ruleset is managed by the source repository where the rule is applied.

{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. To the left of the branch name, click {% octicon "shield-lock" aria-label="view rules" %}.
1. Optionally, to filter the results click the tabs or use the "Search branches" search bar.
1. Click the name of the ruleset you want to view.

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

{% ifversion repo-rules-management %}

## Using ruleset history

{% data reusables.repositories.ruleset-beta-note %}

{% data reusables.repositories.ruleset-history-conceptual %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
{% data reusables.repositories.ruleset-history %}

### Importing a ruleset

{% data reusables.repositories.import-a-ruleset-conceptual %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
{% data reusables.repositories.import-a-ruleset %}

{% endif %}

{% ifversion repo-rules-enterprise %}

## Viewing insights for rulesets

You can view insights for rulesets to see how rulesets are affecting a repository. {% data reusables.repositories.about-ruleset-insights %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the left sidebar, under "Code and automation," click **Rules**, then click **Insights**.

   ![Screenshot of the sidebar of the "Settings" page for a repository. The "Rules" sub-menu is expanded, and the "Insights" option is outlined in orange.](/assets/images/help/repository/ruleset-insights.png)
1. On the "Rule Insights" page, use the dropdown menus at the top of the page to filter the actions by ruleset, branch, actor, and time period.
{% data reusables.repositories.rulesets-view-rule-runs %}
{%- ifversion repo-rules-merge-queue %}
1. Optionally, review merge queue details for corresponding pull requests in the same merge group.

    {% note %}

    **Note:** The merge queue rule is in public beta and this interface is subject to change.

    {% endnote %}

{% endif %}

{% endif %}
