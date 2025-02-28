---
title: Helping others review your changes
intro: 'You can use pull requests to provide clear context for your changes and keep your team informed, improving collaboration and the quality of reviews.'
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/getting-started/best-practices-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Help others review your changes
---

When you create a pull request, you’re asking your team to review your changes and provide feedback. This guide provides best practices for creating pull requests that are easy to review and keep your team informed, so that you can improve collaboration and the quality of reviews.

## Making your changes easy to review

Clear context in your pull requests helps reviewers quickly see what you’ve changed and why it matters. This makes the review process faster and smoother, with less back-and-forth, and helps your team give better feedback and make confident decisions. For information on creating a pull request, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

### Write small PRs

Aim to create small, focused pull requests that fulfill a single purpose. Smaller pull requests are easier and faster to review and merge, leave less room to introduce bugs, and provide a clearer history of changes.

### Provide context and guidance

Write clear titles and descriptions for your pull requests so that reviewers can quickly understand what the pull request does. In the pull request body, include:

* The purpose of the pull request
* An overview of what changed
* Links to any additional context such as tracking issues or previous conversations

To help reviewers, share the type of feedback you need. For example, do you need a quick look or a deeper critique?{% ifversion copilot %} Additionally, you can use {% data variables.product.prodname_copilot %} to generate a summary of your pull request. See [Use {% data variables.product.prodname_copilot %} to generate pull request summaries](#use-github-copilot-to-generate-pull-request-summaries), later in this article.{% endif %}

If your pull request consists of changes to multiple files, provide guidance to reviewers about the order in which to review the files. Recommend where to start and how to proceed with the review.

### Review your own pull request first

Review, build, and test your own pull request before submitting it. This will allow you to catch errors or typos that you may have missed, before others start reviewing.

### Review for security

There are various tools available that can help you review your pull request for potential security issues before others review it. Reviewing for security helps to catch and resolve security issues early, and lets you highlight unresolved risks for others to review and advise on. For example, you can:

* Check the dependency diff to see if your pull request is introducing vulnerable dependencies. See [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request).
* Check the {% data variables.product.prodname_advisory_database %} to find additional context and information on vulnerable dependencies.
* Investigate and resolve any failing security checks or workflows, such as the dependency review action or the {% data variables.product.prodname_code_scanning %} results check. See [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#about-the-dependency-review-action) and [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests#about-code-scanning-as-a-pull-request-check).{% ifversion code-scanning-autofix %}
* If your repository has set up {% data variables.product.prodname_code_scanning %} as a pull request check, use {% data variables.product.prodname_copilot_autofix %} to suggest fixes for security vulnerabilities in your code. See [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests#working-with-copilot-autofix-suggestions-for-alerts-on-a-pull-request).{% endif %}

## Keeping your team informed

Pull requests can do more than just document code changes—they’re also a powerful way to keep your team and manager informed about the status of your work. By making your progress visible in your pull requests, you can reduce the need for separate updates and ensure everyone stays aligned.

{% ifversion copilot %}

### Use {% data variables.product.prodname_copilot %} to generate pull request summaries

> [!NOTE] {% data reusables.copilot.copilot-requires-subscription %}

You can use {% data variables.product.prodname_copilot_short %} to generate a summary of a pull request on {% data variables.product.github %}. You can use the summary to help reviewers understand your changes.

1. On {% data variables.product.github %}, create a pull request or navigate to an existing pull request.

   > [!NOTE] {% data variables.product.prodname_copilot %} does not take into account any existing content in the pull request description, so it is best to start with a blank description.

1. Navigate to the text field where you want to add the pull request summary.

   * If you're creating a new pull request, use the "Add a description" field.
   * If you're adding a description to an existing pull request, edit the opening comment.
   * If you're adding a summary as a comment, navigate to the "Add a comment" section at the bottom of the pull request page.

1. In the header of the text field, select {% octicon "copilot" aria-label="Copilot actions" %}, then click **Summary**.

   ![Screenshot of the form for creating a pull request. A Copilot icon is highlighted, and a box appears with the "Summary" command.](/assets/images/help/copilot/copilot-description-suggestion.png)

1. Wait for {% data variables.product.prodname_copilot %} to produce the summary, then check over the results carefully.
1. Add any additional context that will help people viewing your pull request.
1. When you're happy with the description, click **Create pull request** on a new pull request, or **Update comment** if you're editing an existing description.

{% endif %}

### Link to related issues or projects

Connect your pull request to relevant issues or project boards to show how your work fits into the larger project.

* Add keywords like `Closes ISSUE-LINK` in your description to automatically link and close the issue when the pull request is merged.
* Use {% data variables.product.prodname_projects_v2 %} to track your work and link to the project from your pull request, making progress easy to track in one place. See [AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects).

### Highlight the status with labels

Add a status label to your pull request to show whether it’s ready for review, blocked, or in progress. This helps reviewers understand the state of your work at a glance. For more information, see [AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels).
