---
title: Configuring automatic code review by GitHub Copilot
shortTitle: Configure automatic review
allowTitleToDifferFromFilename: true
intro: 'Learn how to configure {% data variables.product.prodname_copilot_short %} to automatically review pull requests.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/code-review/configuring-automatic-code-review-by-copilot
  - /copilot/how-tos/agents/copilot-code-review/configuring-automatic-code-review-by-copilot
  - /copilot/how-tos/agents/copilot-code-review/automatic-code-review
  - /copilot/how-tos/agents/copilot-code-review/configure-automatic-review
  - /copilot/how-tos/agents/request-a-code-review/configure-automatic-review
contentType: how-tos
---

## Introduction

This article tells you how to set up {% data variables.copilot.copilot_code-review_short %} to review pull requests automatically. For an overview of automatic pull request reviews, see [AUTOTITLE](/copilot/concepts/code-review/code-review#about-automatic-pull-request-reviews).

The three sections in this article tell you how to configure automatic code review for:

* [Pull requests that you create yourself](#configuring-automatic-code-review-for-all-pull-requests-you-create)
* [All new pull requests in a repository](#configuring-automatic-code-review-for-a-single-repository)
* [Pull requests in multiple repositories owned by an organization](#configuring-automatic-code-review-for-repositories-in-an-organization)

## Configuring automatic code review for all pull requests you create

> [!NOTE]
> This is only available if you are on the {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan.

{% data reusables.copilot.your-copilot %}
1. Locate the **Automatic {% data variables.copilot.copilot_code-review_short %}** option and click the dropdown button.

   ![Screenshot of the "Automatic {% data variables.copilot.copilot_code-review_short %}" setting with the dropdown menu displayed.](/assets/images/help/copilot/code-review/automatic-code-review-personal.png)

1. In the dropdown menu, select **Enabled**.

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
