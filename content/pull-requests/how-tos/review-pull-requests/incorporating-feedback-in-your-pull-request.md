---
title: Incorporating feedback in your pull request
intro: Apply suggested changes directly to a pull request, batch multiple suggestions into a single commit, or open an issue to track out-of-scope feedback.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
  - /articles/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
  - /pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Incorporate feedback
category:
  - Review pull requests
contentType: how-tos
---
## Applying suggested changes

Other people can suggest specific changes to your pull request. You can apply these suggested changes directly in a pull request if you have write access to the repository.

If the pull request was created from a fork and the author allowed edits from maintainers, you can also apply suggested changes if you have write access to the upstream repository. See [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/commenting-on-a-pull-request) and [AUTOTITLE](/pull-requests/how-tos/work-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

To quickly incorporate more than one suggested change into a single commit, you can also apply suggested changes as a batch. Applying one suggested change or a batch of suggested changes creates a single commit on the compare branch of the pull request.

Each person who suggested a change included in the commit will be a co-author of the commit. The person who applies the suggested changes will be a co-author and the committer of the commit. See [Git Basics - Viewing the Commit History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History) from the _Pro Git_ book site.

{% data reusables.repositories.sidebar-pr %}
1. In the list of pull requests, click the pull request where you want to apply a suggested change.
1. Navigate to the first suggested change you want to apply.
    * To apply the change in its own commit, click **Commit suggestion**.

       ![Screenshot of a review comment with a suggestion. The "Commit suggestion" option is outlined in dark orange.](/assets/images/help/pull_requests/commit-suggestion-button.png)

    * To add the suggestion to a batch of changes, click **Add suggestion to batch**. Continue to add the suggested changes you want to include in a single commit. When you've finished adding suggested changes, click **Commit suggestions**.

       ![Screenshot of a review comment with a suggestion. The "Add suggestion to batch" option is outlined in dark orange.](/assets/images/help/pull_requests/add-suggestion-to-batch.png)

1. In the commit message field, type a short, meaningful commit message that describes the change you made to the file or files.
1. Click **Commit changes**.

## Re-requesting a review

For example, you can re-request a review after you've made substantial changes to your pull request.
To request a fresh review from a reviewer, in the sidebar of the **Conversation** tab, click the {% octicon "sync" aria-label="The sync icon" %} icon.

## Opening an issue for an out-of-scope suggestion

If someone suggests changes to your pull request and the changes are out of the pull request's scope, you can open a new issue to track the feedback. See [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/creating-an-issue).

## Further reading

* [AUTOTITLE](/pull-requests/reference/pull-request-reviews)
* [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request)
* [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/commenting-on-a-pull-request)
* [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/requesting-a-pull-request-review)
* [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/creating-an-issue)
