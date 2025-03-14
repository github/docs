---
title: Managing code rulesets for repositories in your enterprise
intro: 'You can edit, monitor, and delete existing rulesets to alter how people can interact with repositories in your enterprise.'
allowTitleToDifferFromFilename: true
versions:
  feature: enterprise-code-rulesets
permissions: 'Enterprise owners'
shortTitle: Manage rulesets
---

After creating a ruleset at the enterprise level, you can make changes to the ruleset to alter how people can interact with the targeted repositories. For example, you can:

* Add rules to better protect the branches or tags in those repositories
* Switch your ruleset from "Evaluate" mode to "Active" after testing its effects on the contributor experience

{% data reusables.repositories.rulesets-anyone-can-view %}

{% ifversion push-rule-delegated-bypass %}

## About delegated bypass

{% data reusables.repositories.about-push-rule-delegated-bypass %}

{% endif %}

## Editing a ruleset

You can edit a ruleset to change parts of the ruleset, such as the name, bypass permissions, or rules. You can also edit a ruleset to change its status, such as if you want to enable or temporarily disable a ruleset.

{% data reusables.enterprise-accounts.access-enterprise %}
1. In the left sidebar, in the "Policies" section, click  **Code**, then click **Rulesets**.
1. On the "Rulesets" page, click the name of the ruleset you want to edit.
1. Change the ruleset as required.

   For information on the available rules, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)

1. At the bottom of the page, click **Save changes**.

## Deleting a ruleset

{% data reusables.repositories.rulesets-anyone-can-view %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. In the left sidebar, in the "Policies" section, click **Code**, then click **Rulesets**.
1. To the right of the ruleset's name, select {% octicon "kebab-horizontal" aria-label="Open additional options" %}, then click **{% octicon "trash" aria-hidden="true" %} Delete ruleset**.

## Using ruleset history

{% data reusables.repositories.ruleset-beta-note %}

{% data reusables.repositories.ruleset-history-conceptual %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. In the left sidebar, in the "Policies" section, click **Code**, then click **Rulesets**.
1. To view the history of changes to the ruleset, select {% octicon "kebab-horizontal" aria-label="Open additional options" %} to the right of the ruleset's name, then click **{% octicon "history" aria-hidden="true" %} History**.
1. To the right of the specific iteration, select {% octicon "kebab-horizontal" aria-label="Open additional options" %}, then click **Compare changes**, **Restore**, or **Download**.

## Importing a ruleset

You can import a ruleset from another repository, organization or enterprise using the exported JSON file from the previous section. This can be useful if you want to apply the same ruleset to multiple repositories, organizations or enterprises.

{% data reusables.enterprise-accounts.access-enterprise %}
1. In the left sidebar, in the "Policies" section, click **Code**, then click **Rulesets**.
1. Select the **New ruleset** dropdown, then click **Import a ruleset**.
1. Open the exported JSON file.
1. Review the imported ruleset and click **Create**.

## Viewing insights for rulesets

You can view insights for rulesets to see how rulesets are affecting the repositories in your enterprise. {% data reusables.repositories.about-ruleset-insights %}

If a ruleset is running in "Evaluate" mode, you can see actions that would have passed or failed if the ruleset had been active.

{% data reusables.enterprise-accounts.access-enterprise %}
1. In the left sidebar, in the "Policies" section, click **Code**, then click **Rulesets**.
1. On the "Rule insights" page, use the dropdown menus at the top of the page to filter the actions by ruleset, repository, actor, and time period.
1. To see which specific rules failed or required a bypass, click {% octicon "kebab-horizontal" aria-label="View rule runs" %}, then expand the name of the ruleset.

{% ifversion push-rule-delegated-bypass %}

{% data reusables.repositories.managing-delegated-bypass %}

{% endif %}
