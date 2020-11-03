---
title: Incorporating feedback in your pull request
intro: 'When reviewers suggest changes in a pull request, you can automatically incorporate the changes into the pull request or open an issue to track out-of-scope suggestions.'
redirect_from:
  - /articles/incorporating-feedback-in-your-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Applying suggested changes

Other people can suggest specific changes to your pull request. You can apply these suggested changes directly in a pull request if you have write access to the repository. If the pull request was created from a fork and the author allowed edits from maintainers, you can also apply suggested changes if you have write access to the upstream repository. For more information, see "[Commenting on a pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)" and "[Allowing changes to a pull request branch created from a fork](/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork)."

To quickly incorporate more than one suggested change into a single commit, you can also apply suggested changes as a batch. Applying one suggested change or a batch of suggested changes creates a single commit on the compare branch of the pull request.

Each person who suggested a change included in the commit will be a co-author of the commit. The person who applies the suggested changes will be a co-author and the committer of the commit. For more information about the term committer in Git, see "[Git Basics - Viewing the Commit History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)" from the _Pro Git_ book site.

{% data reusables.repositories.sidebar-pr %}
2. In the list of pull requests, click the pull request you'd like to apply a suggested change to.
3. Navigate to the first suggested change you'd like to apply.
    - To apply the change in its own commit, click **Commit suggestion**. ![Commit suggestion button](/assets/images/help/pull_requests/commit-suggestion-button.png)
    - To add the suggestion to a batch of changes, click **Add suggestion to batch**. Continue to add the suggested changes you want to include in a single commit. When you've finished adding suggested changes, click **Commit suggestions**. ![Add suggestion to batch button](/assets/images/help/pull_requests/add-suggestion-to-batch.png)
4. In the commit message field, type a short, meaningful commit message that describes the change you made to the file or files. ![Commit message field](/assets/images/help/pull_requests/suggested-change-commit-message-field.png)
5. Click **Commit changes.** ![Commit changes button](/assets/images/help/pull_requests/commit-changes-button.png)

### Opening an issue for an out-of-scope suggestion

If someone suggests changes to your pull request and the changes are out of the pull request's scope, you can open a new issue to track the feedback. For more information, see "[Opening an issue from a comment](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)."

### Дополнительная литература

- "[About pull request reviews](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)"
- "[Reviewing proposed changes in a pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Commenting on a pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)"
- "[Requesting a pull request review](/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)"
- "[Opening an issue from a comment](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)"
