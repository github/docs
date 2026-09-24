---
title: Configuring code review by GitHub Copilot
shortTitle: Configure code review
allowTitleToDifferFromFilename: true
intro: Set up {% data variables.product.prodname_copilot_short %} to review pull requests.
versions:
  feature: copilot
redirect_from:
  - /copilot/using-github-copilot/code-review/configuring-automatic-code-review-by-copilot
  - /copilot/how-tos/agents/copilot-code-review/configuring-automatic-code-review-by-copilot
  - /copilot/how-tos/agents/copilot-code-review/automatic-code-review
  - /copilot/how-tos/agents/copilot-code-review/configure-automatic-review
  - /copilot/how-tos/agents/request-a-code-review/configure-automatic-review
  - /copilot/how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review
  - /copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review
contentType: how-tos
category:
  - Configure Copilot
---

## Introduction

You can configure {% data variables.copilot.copilot_code-review_short %} to review pull requests automatically, and you can set your {% data variables.product.prodname_copilot_short %} review effort. For an overview, see [AUTOTITLE](/copilot/concepts/agents/code-review#automatic-pull-request-reviews).

## Configuring automatic code review for your own pull requests

You can set {% data variables.copilot.copilot_code-review_short %} to review the pull requests you create, in any repository where {% data variables.copilot.copilot_code-review_short %} is available to you.

> [!NOTE]
> Configuring automatic code review is available on the {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, and {% data variables.copilot.copilot_max_short %} plans, and with a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} license. It is not available for {% data variables.enterprise.prodname_managed_users %}.

{% data reusables.user-settings.copilot-settings %}
{% data reusables.copilot.code-review.user-settings-sidebar %}
1. Enable **Automatic {% data variables.copilot.copilot_code-review_short %}**.
1. Optionally, to review each new push to a pull request that {% data variables.product.prodname_copilot_short %} is already reviewing, enable **Review new pushes**.
1. Optionally, to review pull requests while they are still marked as drafts, enable **Review draft pull requests**.

A pull request can qualify for automatic review from several independent sources: your user settings, repository rulesets, or organization rulesets. These sources are evaluated separately. If more than one source applies, {% data variables.product.prodname_copilot_short %} still posts a single review. Your user settings cannot disable push or draft reviews that a ruleset has enabled. For more information, see [AUTOTITLE](/copilot/concepts/agents/code-review#automatic-pull-request-reviews).

## Configuring your {% data variables.product.prodname_copilot_short %} review effort

You can choose the {% data variables.product.prodname_copilot_short %} review effort that {% data variables.copilot.copilot_code-review_short %} uses for the reviews you request. Your choice applies to automatic reviews and to reviews you request manually. For an overview of the levels and how {% data variables.product.prodname_copilot_short %} decides which to use, see [AUTOTITLE](/copilot/concepts/agents/code-review#review-effort-level).

{% data reusables.user-settings.copilot-settings %}
{% data reusables.copilot.code-review.user-settings-sidebar %}
1. Next to "Review effort level," select the {% data variables.product.prodname_copilot_short %} review effort for reviews you request.
   * **Lite**: Standard review.
   * **Balanced**: Deeper analysis of complex logic, security-sensitive code, and cross-service changes.
   * **Max**: Most thorough review. This option appears with a **Coming soon** label and is not available yet.

To return to the built-in default, select the **Default** option at the top of the menu. Until you choose a specific level, the control shows the built-in default that applies to you, either **Default (Lite)** or **Default (Balanced)**.

Your {% data variables.product.prodname_copilot_short %} review effort is independent of **Automatic {% data variables.copilot.copilot_code-review_short %}**. Turning automatic review off does not clear your {% data variables.product.prodname_copilot_short %} review effort or stop it from applying to reviews you request manually.

## Configuring automatic code review for a repository

You can enable automatic code reviews for a repository and customize how code reviews are performed.

### Enabling automatic reviews

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
{% data reusables.repositories.repo-new-ruleset %}
1. Under "Target branches," click **Add target** and choose one of the options—for example, **Include default branch** or **Include all branches**.
{% data reusables.copilot.auto-code-review-steps %}

### Customizing {% data variables.copilot.copilot_code-review_short %}

You can configure how {% data variables.copilot.copilot_code-review_short %} completes code reviews in your repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. {% data reusables.user-settings.code-planning-automation %} click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, then **Code review**.
1. To choose the depth of {% data variables.product.prodname_copilot_short %} code reviews, next to "Review effort level," select the effort level for automatic reviews in this repository.
   * **Lite**: Standard review.
   * **Balanced**: Deeper analysis of complex logic, security-sensitive code, and cross-service changes.

   Balanced reviews use more {% data variables.product.prodname_ai_credits_short %}, and may consume marginally more {% data variables.product.prodname_actions %} minutes. See [AUTOTITLE](/copilot/concepts/agents/code-review#estimated-consumption).
1. To choose whether {% data variables.product.prodname_copilot_short %} can approve pull requests in your repository, configure the settings under "Auto-approval."
   * **Allow {% data variables.product.prodname_copilot_short %} to approve pull requests**: Toggle on to let {% data variables.product.prodname_copilot_short %} submit approving reviews.
   * **Allow {% data variables.product.prodname_copilot_short %} approvals to count toward merge requirements**: Toggle on so {% data variables.product.prodname_copilot_short %} approvals can satisfy pull request approval requirements.
   * **File paths**: Optionally, limit which pull requests count toward merge requirements. Enter one file glob per line to count approvals only on pull requests where every changed file matches one of the globs. Leave blank to count approvals for all files. Up to 15 globs are supported.

   > [!NOTE]
   > {% data reusables.copilot.automatic-approvals-public-preview %}

## Configuring automatic code review for repositories in an organization

You can enable automatic code reviews for repositories in your organization and customize how code reviews are performed.

### Enabling automatic reviews

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

### Customizing {% data variables.copilot.copilot_code-review_short %}

You can configure how {% data variables.copilot.copilot_code-review_short %} completes code reviews in repositories in your organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. {% data reusables.user-settings.code-planning-automation %} click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, then **Code review**.
1. To choose the depth of {% data variables.product.prodname_copilot_short %} code reviews, next to "Review effort level," select the default effort level for automatic reviews in repositories in your organization.
   * **Lite**: Standard review.
   * **Balanced**: Deeper analysis of complex logic, security-sensitive code, and cross-service changes.

    Balanced reviews use more {% data variables.product.prodname_ai_credits_short %}, and may consume marginally more {% data variables.product.prodname_actions %} minutes. See [AUTOTITLE](/copilot/concepts/agents/code-review#estimated-consumption).
1. To choose whether {% data variables.product.prodname_copilot_short %} can approve pull requests in your repositories, select an option under "Approvals," next to "Count {% data variables.product.prodname_copilot_short %} approvals toward merge requirements."
   * **Enabled everywhere**: {% data variables.product.prodname_copilot_short %} approvals can count toward merge requirements in every repository in the organization.
   * **Let repositories decide**: Repository admins can decide this in repository settings.
   * **Enable for selected repositories**: {% data variables.product.prodname_copilot_short %} approvals can count toward merge requirements only in the repositories you select. If you choose this option, also assign the repositories you want to enable this for.
   * **Disabled everywhere**: {% data variables.product.prodname_copilot_short %} approvals cannot count toward merge requirements in any repository in the organization.
   
   > [!NOTE]
   > {% data reusables.copilot.automatic-approvals-public-preview %}

## Configuring automatic code review for an enterprise

You can enable automatic code reviews for your enterprise and customize how code reviews are performed.

### Enabling automatic reviews

1. Create an enterprise-level branch ruleset. See [AUTOTITLE](/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance).
1. Target the organizations and repositories where {% data variables.copilot.copilot_code-review_short %} should run automatically.
1. Enable the **Automatically request {% data variables.copilot.copilot_code-review_short %}** policy.
1. Optionally, enable automatic reviews for draft pull requests and after each push to a pull request.
1. Click **Create**.

### Customizing {% data variables.copilot.copilot_code-review_short %}

You can configure how {% data variables.copilot.copilot_code-review_short %} completes code reviews for your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. Scroll down to "Available Agents", then click **{% data variables.copilot.copilot_code-review_short %}**.
1. Next to "{% data variables.copilot.copilot_code-review_short %}", select a policy.
1. Then choose which {% data variables.copilot.copilot_code-review_short %} features to enable for your enterprise.
1. To choose whether {% data variables.product.prodname_copilot_short %} can approve pull requests in your organizations, next to "Allow {% data variables.product.prodname_copilot_short %} to approve pull requests," select a policy.
   * **Let organizations decide**: Organization owners can choose whether to enable {% data variables.product.prodname_copilot_short %} approvals.
   * **Enable for selected organizations**: {% data variables.product.prodname_copilot_short %} approvals are enabled only for the organizations you select.
   * **Disabled everywhere**: Organizations cannot enable {% data variables.product.prodname_copilot_short %} approvals. This is the default.

   > [!NOTE]
   > {% data reusables.copilot.automatic-approvals-public-preview %}
