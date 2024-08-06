---
title: Enforcing dependency review across an organization
intro: 'Dependency review lets you catch insecure dependencies before you introduce them to your environment. You can enforce the use of the {% data variables.dependency-review.action_name %} across your organization.'
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Enforce dependency review
permissions: 'Organization owners can enforce use of the {% data variables.dependency-review.action_name %} in repositories within their organization.'
versions:
  feature: repo-rules
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
---

## About dependency review enforcement

{% data reusables.dependency-review.action-enterprise %}

{% data reusables.dependency-review.about-dependency-review-action %} For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

You can enforce the use of the {% data variables.dependency-review.action_name %} in your organization by setting up a repository ruleset that will require the `dependency-review-action` workflow to pass before pull requests can be merged. Repository rulesets are rule settings that allow you to control how users can interact with selected branches and tags in your repositories. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)" and "[Require workflows to pass before merging](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-workflows-to-pass-before-merging)."

## Prerequisites

You need to add the {% data variables.dependency-review.action_name %} to one of the repositories in your organization, and configure the action. For more information, see "[Configuring the dependency review action](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-action)."

## Enforcing dependency review for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
1. Click **New branch ruleset**.
1. Set **Enforcement status** to {% octicon "play" aria-hidden="true" %} **Active**.
1. Optionally, you can target specific repositories in your organization. For more information, see "[Choosing which repositories to target in your organization](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#choosing-which-repositories-to-target-in-your-organization)."
1. In the "Rules" section, select the "Require workflows to pass before merging" option.
1. In "Workflow configurations", click **Add workflow**.
1. In the dialog, select the repository that you added the {% data variables.dependency-review.action_name %} to. For more information, see "[Prerequisites](#prerequisites)."
1. Select a branch and the workflow file for dependency review in the enhanced dialog.

   ![Screenshot of the Add required workflow dialog. You need to specify a repository, branch, and workflow.](/assets/images/help/repository/add-required-workflow-dialog.png)

1. Click **Create**.
