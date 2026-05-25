---
title: Configuring automatic code review by GitHub Copilot
shortTitle: Configure automatic review
allowTitleToDifferFromFilename: true
intro: 'Set up {% data variables.product.prodname_copilot_short %} to automatically review pull requests for you, a repository, or an organization.'
versions:
  feature: copilot
redirect_from:
  - /copilot/using-github-copilot/code-review/configuring-automatic-code-review-by-copilot
  - /copilot/how-tos/agents/copilot-code-review/configuring-automatic-code-review-by-copilot
  - /copilot/how-tos/agents/copilot-code-review/automatic-code-review
  - /copilot/how-tos/agents/copilot-code-review/configure-automatic-review
  - /copilot/how-tos/agents/request-a-code-review/configure-automatic-review
  - /copilot/how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review
contentType: how-tos
category: 
  - Configure Copilot
---

<!-- expires 2026-06-01 -->

{% data reusables.copilot.code-review-actions-minutes-note %}

<!-- end expires 2026-06-01 -->

## Introduction

You can configure {% data variables.copilot.copilot_code-review_short %} to review pull requests automatically. For an overview of automatic pull request reviews, see [AUTOTITLE](/copilot/concepts/code-review#about-automatic-pull-request-reviews).

## Configuring automatic code review for your own pull requests

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
{% data reusables.copilot.auto-code-review-steps %}

## Configuring automatic code review for repositories in an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
{% data reusables.repositories.repo-new-ruleset %}
1. Under "Target repositories," click **Add target** and choose either **Include by pattern** or **Exclude by pattern**.
1. Type a pattern that matches the repository names you want to target—for example, `*feature` to match all repositories with names ending in `feature`.

   For pattern-matching syntax, see [AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#using-fnmatch-syntax).

1. Click **Add inclusion pattern** or **Add exclusion pattern**.
1. Repeat for any additional patterns.

   > [!NOTE]
   > You can add multiple targeting criteria to the same ruleset. Exclusion patterns are applied after inclusion patterns. For example, you could include any repositories matching the pattern `*cat*`, and specifically exclude a repository matching the pattern `not-a-cat`.

{% data reusables.copilot.auto-code-review-steps %}
