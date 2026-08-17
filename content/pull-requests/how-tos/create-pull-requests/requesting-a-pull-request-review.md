---
title: Requesting a pull request review
intro: Request reviews for your pull requests from individuals or teams to ensure thorough feedback and collaboration.
product: '{% data reusables.gated-features.multiple-pr-reviewers %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
  - /articles/requesting-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
  - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Request a PR review
category:
  - Create pull requests
contentType: how-tos
---

To request a review, you need write access to the repository. You can request a review from a person or team with read access to the repository, and they  receive a notification. For complete details on permissions for requesting reviews, see [AUTOTITLE](/pull-requests/reference/pull-request-reviews#requesting-and-requiring-reviews).

## Requesting reviews from collaborators and organization members

Suggested reviewers are based on [git blame data](/repositories/working-with-files/using-files/viewing-and-understanding-files). After someone reviews your pull request and you make changes, you can request another review from the same reviewer.

{% data reusables.repositories.sidebar-pr %}
1. In the list of pull requests, click the pull request that you want a specific person or team to review.
1. To request a review from a suggested person under **Reviewers**, next to their username, click **Request**.

   ![Screenshot of the "Reviewers" section of a pull request's sidebar. To the right of @octocat, a "Request" link is outlined in dark orange.](/assets/images/help/pull_requests/request-suggested-review.png)

1. Optionally, to request a review from someone other than a suggested person, click **Reviewers**.

   If you know the name of the person or team you want a review from, type the username of the person or the name of the team you're asking to review your changes. Click their team name or username to request a review.

1. After your pull request is reviewed and you make the necessary changes, you can ask a reviewer to review your pull request again. Navigate to **Reviewers** in the right sidebar and click {% octicon "sync" aria-label="Re-request review" %} next to the reviewer's name whose review you want.

   ![Screenshot of the "Reviewers" section of a pull request's sidebar. To the right of @octocat, a sync icon is outlined in dark orange.](/assets/images/help/pull_requests/request-re-review.png)

{% ifversion fpt or ghec %}

## Requesting a review from {% data variables.product.prodname_copilot %}

> [!NOTE]
> {% data variables.product.prodname_copilot_short %} features require a {% data variables.product.prodname_copilot_short %} plan. See [AUTOTITLE](/copilot/get-started/plans).

You can also request that {% data variables.product.prodname_copilot_short %} review your code and provide feedback and suggested changes on your work. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review).

{% endif %}

## Further reading

* [AUTOTITLE](/pull-requests/reference/pull-request-reviews)
