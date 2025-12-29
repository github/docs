---
title: Commenting on a pull request
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
  - /articles/adding-commit-comments
  - /articles/commenting-on-the-diff-of-a-pull-request
  - /articles/commenting-on-differences-between-files
  - /articles/commenting-on-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
intro: 'After you open a pull request in a repository, collaborators or team members can comment on the comparison of files between the two specified branches, or leave general comments on the project as a whole.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Comment on a PR
---
## About pull request comments

You can comment on a pull request's **Conversation** tab to leave general comments, questions, or props. You can also suggest changes that the author of the pull request can apply directly from your comment.

You can also comment on specific files or sections of a file in a pull request's **Files changed** tab in the form of individual line or file comments, or as part of a pull request review. Adding line or file comments is a great way to discuss questions about implementation or provide feedback to the author. For more information about pull request reviews, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews).

For more information on adding line or file comments to a pull request review, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request).

> [!NOTE]
> If you reply to a pull request via email, your comment will be added on the **Conversation** tab and will not be part of a pull request review.

To reply to an existing line or file comment, you'll need to navigate to the comment on either the **Conversation** tab or **Files changed** tab and add an additional comment below it.

> [!TIP]
> * Pull request comments support the same [formatting](/get-started/writing-on-github) as regular comments on {% data variables.product.github %}, such as @mentions, emoji, and references.
> * You can add reactions to comments in pull requests in the **Files changed** tab.

## Adding comments to a pull request

{% data reusables.repositories.sidebar-pr %}
1. In the list of pull requests, click the pull request where you'd like to leave line comments.
{% data reusables.repositories.changed-files %}
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.multiple-lines-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
{% data reusables.repositories.start-file-comment %}
1. When you're done:

   * If you only want to add this **one comment**, click **Add single comment**.

   * If you want to add **multiple comments**, click **Start a review**, then continue adding comments.

     When you have finished, click **Finish your review** at the top right of the page, leave a summary of your review, and click **Submit review**.

Anyone watching the pull request or repository will receive a notification of your comments. Batching your comments avoids multiple notifications being sent. {% ifversion copilot %}If you are commenting on a pull request created by {% data variables.product.prodname_copilot_short %}, batching your comments prevents {% data variables.product.prodname_copilot_short %} from starting to work on individual comments before you have completed your review. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/using-copilot-to-work-on-an-issue).{% endif %}

### Resolving conversations

You can resolve a conversation in a pull request if you opened the pull request or if you have write access to the repository where the pull request was opened.

To indicate that a conversation on the **Files changed** tab is complete, click **Resolve conversation**.

The entire conversation will be collapsed and marked as resolved, making it easier to find conversations that still need to be addressed.

If the suggestion in a comment is out of your pull request's scope, you can open a new issue that tracks the feedback and links back to the original comment. For more information, see [AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-comment).

#### Discovering and navigating conversations

You can discover and navigate to all the conversations in your pull request using the **Conversations** menu that's shown at the top of the **Files Changed** tab.

From this view, you can see which conversations are unresolved, resolved, and outdated. This makes it easy to discover and resolve conversations.

![Screenshot of the "Conversations" menu on the "Files Changed" tab of a pull request.](/assets/images/help/pull_requests/conversations-menu.png)

## Further reading

* [AUTOTITLE](/get-started/writing-on-github)
{% ifversion fpt or ghec %}- [AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
{% endif %}
