---
title: Enforcing dependency review across an organization
intro: Dependency review lets you catch insecure dependencies before you introduce them to your environment. You can enforce the use of the {% data variables.dependency-review.action_name %} across your organization.
shortTitle: Enforce dependency review
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Code Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/enforcing-dependency-review-across-an-organization
contentType: how-tos
---

You can enforce the use of the {% data variables.dependency-review.action_name %} in your organization by setting up a repository ruleset that will require a workflow that runs dependency review to pass before pull requests can be merged. For more information about the action, see [AUTOTITLE](/code-security/concepts/supply-chain-security/about-dependency-review#about-the-dependency-review-action).

## Prerequisites

You need to add the {% data variables.dependency-review.action_name %} to one of the repositories in your organization, and configure the action. For more information, see [Configuring the dependency review action](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-review-action).

## Enforcing dependency review for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
1. Click the **New ruleset** dropdown menu, and select **New branch ruleset**.
1. To help identify your ruleset and clarify its purpose, give the ruleset a name in **Ruleset Name**.
1. Set **Enforcement status** to **{% octicon "play" aria-hidden="true" aria-label="play" %} Active**.
1. Optionally, you can target specific repositories in your organization. For more information, see [Choosing which repositories to target in your organization](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#choosing-which-repositories-to-target-in-your-organization).
1. In the "Rules" section, select the "Require workflows to pass before merging" option.
1. In "Workflow configurations", click **Add workflow**.
1. In the dialog, select the repository that you added the {% data variables.dependency-review.action_name %} to. For more information, see [Prerequisites](#prerequisites).
1. Select a branch and the workflow file for dependency review in the enhanced dialog.

   ![Screenshot of the Add required workflow dialog. You need to specify a repository, branch, and workflow.](/assets/images/help/repository/add-required-workflow-dialog.png)

1. Click **Create**.
