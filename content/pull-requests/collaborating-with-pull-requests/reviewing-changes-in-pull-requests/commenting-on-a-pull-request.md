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

You can also comment on specific {% ifversion pull-request-comment-on-file %}files or {% endif %}sections of a file in a pull request's **Files changed** tab in the form of individual line {% ifversion pull-request-comment-on-file %}or file {% endif %}comments, or as part of a pull request review. Adding line {% ifversion pull-request-comment-on-file %}or file {% endif %}comments is a great way to discuss questions about implementation or provide feedback to the author. For more information about pull request reviews, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)."

For more information on adding line {% ifversion pull-request-comment-on-file %}or file {% endif %}comments to a pull request review, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)."

{% note %}

**Note:** If you reply to a pull request via email, your comment will be added on the **Conversation** tab and will not be part of a pull request review.

{% endnote %}

To reply to an existing line {% ifversion pull-request-comment-on-file %}or file {% endif %}comment, you'll need to navigate to the comment on either the **Conversation** tab or **Files changed** tab and add an additional comment below it.

{% tip %}

**Tips:**
* Pull request comments support the same [formatting](/get-started/writing-on-github) as regular comments on {% data variables.product.product_name %}, such as @mentions, emoji, and references.
* You can add reactions to comments in pull requests in the **Files changed** tab.

{% endtip %}

## Adding comments to a pull request

{% data reusables.repositories.sidebar-pr %}
1. In the list of pull requests, click the pull request where you'd like to leave line comments.
{% data reusables.repositories.changed-files %}
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.multiple-lines-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
{% ifversion pull-request-comment-on-file %}
{% data reusables.repositories.start-file-comment %}{% endif %}
1. When you're done, click **Add single comment**.

Anyone watching the pull request or repository will receive a notification of your comment.

{% data reusables.pull_requests.resolving-conversations %}

## Further reading

* "[AUTOTITLE](/get-started/writing-on-github)"
{% ifversion fpt or ghec %}- "[AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
{% endif %}
