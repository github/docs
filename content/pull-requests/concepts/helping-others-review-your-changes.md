---
title: Helping others review your changes
intro: Create clear, focused pull requests that improve collaboration, streamline reviews, and keep your team informed about your changes.
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/getting-started/best-practices-for-pull-requests
  - /pull-requests/collaborating-with-pull-requests/getting-started/helping-others-review-your-changes
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Help others review your changes
category:
  - Create pull requests
contentType: concepts
---

When you create a pull request, you’re asking others to review your changes and provide feedback. Pull requests that are focused, clear, and easy to follow help reviewers give better feedback and make confident suggestions.

## Making your changes easy to review

Clear context helps reviewers quickly understand what changed and why it matters. It reduces back-and-forth, makes review faster, and helps your team focus on the most important parts of the change. 

### Write small pull requests

Small, focused pull requests are easier to review and safer to merge. They help reviewers understand the purpose of the change, spot issues more quickly, and follow the history of the project later.

When a change grows large, consider splitting it into smaller pull requests that each serve one purpose.

### Provide context and guidance

A clear title and description help reviewers understand the problem, the approach, and the result. Good context often explains why the change is needed, what changed, and where reviewers should pay special attention.

Guidance is especially helpful when a pull request touches many files or requires a specific review order. For example, you can point reviewers to the most important files first or explain what type of feedback would be most useful. You can also use {% data variables.product.prodname_copilot %} to generate a summary of your pull request.

### Review your own pull request first

Reviewing your own pull request before asking others to review it helps you catch mistakes early. It also shows reviewers that the pull request is ready for their attention.

A self-review can include reading the diff, checking for accidental changes, and making sure relevant builds or tests have run.

### Review for security

Security reviews help catch risk before a pull request is merged. This is especially important when a pull request changes dependencies, authentication, permissions, workflows, or code that handles sensitive data.

{% data variables.product.github %} can surface security information in pull requests, such as dependency changes, dependency review results, and {% data variables.product.prodname_code_scanning %} checks. Use these signals to resolve issues early or to highlight risks that need reviewer attention. 

If your repository has {% data variables.product.prodname_code_scanning %} set up as a check, {% data variables.copilot.copilot_autofix %} can suggest fixes for security vulnerabilities.

## Keeping your team informed

Pull requests can do more than document code changes—they’re also a way to keep your team informed about the status of your work. Visible progress helps reduce separate status updates and keeps everyone aligned.

{% ifversion fpt or ghec %}

### Use {% data variables.product.prodname_copilot %} to generate pull request summaries

> [!NOTE]
> {% data variables.product.prodname_copilot_short %} features require a {% data variables.product.prodname_copilot_short %} plan. See [AUTOTITLE](/copilot/get-started/plans).

{% data variables.product.prodname_copilot_short %} can generate a pull request summary on {% data variables.product.github %}. A generated summary can help reviewers understand the main changes, but you should review it carefully and add context that only you know.

Summaries are most useful when they explain the purpose of the change, call out important files, and highlight anything reviewers should examine closely. 

{% endif %}

### Link to related issues or projects

Connecting a pull request to issues or projects shows how the work fits into the larger project. Links help reviewers understand priority, track progress, and find related discussions.

Use issue-closing keywords when a pull request should close an issue after merging. You can also link to {% data variables.product.prodname_projects_v2 %} so people can track work in one place. 

### Highlight the status with labels

Status labels help reviewers understand whether a pull request is ready for review, blocked, or still in progress. Clear labels make it easier for people to prioritize reviews and avoid reviewing work before it is ready. 

## Further reading
* [AUTOTITLE](/pull-requests/concepts/resolving-reviews)
* [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)
* [AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels)
