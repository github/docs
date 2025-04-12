---
title: Managing and standardizing pull requests
intro: 'Use these steps to manage and standardize the pull requests that contributors create in your repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Manage and standardize pull requests
---

If you are a repository maintainer, there are several ways that you can manage and standardize the pull requests that contributors create in your repository. These steps can help you ensure that pull requests are reviewed by the right people, and that they meet your repository's standards.

## Using pull request templates

Pull request templates let you customize and standardize the information you'd like to be included when someone creates a pull request in your repository. When you add a pull request template to your repository, project contributors will automatically see the template's contents in the pull request body. For more information, see [AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository).

You can use pull request templates to standardize the review process for your repository. For example, you can include a list of tasks that you would like authors to complete before merging their pull requests, by adding a task list to the template. For more information, see [AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists).

You can request that contributors include an issue reference in their pull request body, so that merging the pull request will automatically close the issue. For more information, see [AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).

## Defining code owners

You may want to make sure that specific individuals always review changes to certain code or files in your repository. For example, you may want to ensure that a member of the security team always reviews changes to your `SECURITY.md` file or `dependabot.yml` file.

You can define individuals or teams that you consider responsible for code or files in a repository to be code owners. Code owners will automatically be requested for review when someone opens a pull request that modifies the files that they own. You can define code owners for specific types of files or directories, as well as for different branches in a repository. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

## Using protected branches

You can use protected branches to prevent pull requests from being merged into important branches, such as `main`, until certain conditions are met. For example, you can require an approving review, or require that all status checks are passing. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

## Using rulesets

Working alongside protected branches, rulesets let you enforce policies across your repository, such as requiring status checks or workflows to pass before a pull request can be merged.

Rulesets are especially useful for maintaining repository security when combined with other automated security checks. For example:
* You can use rulesets to enforce the dependency review action, a workflow that blocks pull requests that are introducing vulnerable dependencies into your codebase. See [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/enforcing-dependency-review-across-an-organization). {% ifversion code-scanning-merge-protection-rulesets %}
* If your repository is configured with {% data variables.product.prodname_code_scanning %}, you can use rulesets to set {% data variables.product.prodname_code_scanning %} merge protection, which prevents pull requests from being merged if there is a {% data variables.product.prodname_code_scanning %} alert of a certain severity, or if a {% data variables.product.prodname_code_scanning %} analysis is still in progress. See [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/set-code-scanning-merge-protection).{% endif %}

{% ifversion push-rulesets %}

## Using push rulesets

{% data reusables.repositories.push-rulesets-overview %}

For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#push-rulesets).

{% endif %}

## Using automated tools to review code styling

Use automated tools, such as linters, in your repository's pull requests to maintain consistent styling and make code more understandable. Using automated tools to catch smaller problems like typos or styling leaves more time for reviewers to focus on the substance of a pull request.

For example, you can use {% data variables.product.prodname_actions %} to set up code linters that can run on pull requests as part of your continuous integration (CI) workflow. For more information, see [AUTOTITLE](/actions/automating-builds-and-tests/about-continuous-integration).
