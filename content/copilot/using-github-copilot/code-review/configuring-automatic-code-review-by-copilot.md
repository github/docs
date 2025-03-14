---
title: Configuring automatic code review by Copilot
shortTitle: Automatic code review
intro: "Learn how to configure {% data variables.product.prodname_copilot_short %} to automatically review pull requests in a repository."
versions:
  feature: copilot
topics:
  - Copilot
---

## About automatic code review

By default, {% data variables.product.prodname_copilot_short %} will only review a pull request when it is assigned to the pull request in the same way you would assign a human reviewer. However, repository owners can configure {% data variables.product.prodname_copilot_short %} to automatically review all pull requests in the repository. Organization owners can configure {% data variables.product.prodname_copilot_short %} to automatically review all pull requests in some or all of the repositories in the organization.

### Triggering an automatic pull request review

After you configure automatic code review, {% data variables.product.prodname_copilot_short %} will review pull requests in the following situations:

* When a pull request is created as an "Open" pull request.

  A review is not triggered if the pull request is created as a "Draft" pull request.

* The first time a "Draft" pull request is switched to "Open".

> [!NOTE]
> {% data variables.product.prodname_copilot_short %} only automatically reviews a pull request once. If you make changes to the pull request after it has been automatically reviewed and you want {% data variables.product.prodname_copilot_short %} to re-review the pull request, you must request this manually. To do this, click the {% octicon "sync" aria-label="Re-request review" %} button next to {% data variables.product.prodname_copilot_short %}'s name in the **Reviewers** menu.

## Configuring automatic code review for a single repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
{% data reusables.repositories.repo-new-ruleset %}
1. Under "Target branches," click **Add target** and choose one of the options—for example, **Include default branch** or **Include all branches**.
1. Under "Branch rules," select the **Require a pull request before merging** checkbox.

   This expands a set of subsidiary options.

1. Select the **Request pull request review from {% data variables.product.prodname_copilot_short %}** checkbox.

   ![Screenshot of the "Request pull request review from {% data variables.product.prodname_copilot_short %}" branch ruleset option.](/assets/images/help/copilot/code-review/automatic-code-review.png)

1. At the bottom of the page, click **Create**.

## Configuring automatic code review for repositories in an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
{% data reusables.repositories.repo-new-ruleset %}
1. Under "Target repositories," click **Add target** and choose either **Include by pattern** or **Exclude by pattern**.
1. In the dialog box that's displayed, type a pattern that will match the names of repositories in your organization—for example, `*feature` to match all repositories with names that end in `feature`.

   For information about pattern-matching syntax, see [AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#using-fnmatch-syntax).

1. In the dialog box, click **Add inclusion pattern** or **Add exclusion pattern**.
1. Repeat the process for any additional patterns you want to add.

   > [!NOTE]
   > You can add multiple targeting criteria to the same ruleset. Exclusion patterns are applied after inclusion patterns. For example, you could include any repositories matching the pattern `*cat*`, and specifically exclude a repository matching the pattern `not-a-cat`.

1. Under "Target branches," click **Add target** and choose one of the target options.
1. Under "Branch rules," select the **Require a pull request before merging** checkbox.

   This expands a set of subsidiary options.

1. Select the **Request pull request review from {% data variables.product.prodname_copilot_short %}** checkbox.
1. At the bottom of the page, click **Create**.
