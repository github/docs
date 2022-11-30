---
title: Commenting on a pull request
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
  - /articles/adding-commit-comments/
  - /articles/commenting-on-the-diff-of-a-pull-request/
  - /articles/commenting-on-differences-between-files/
  - /articles/commenting-on-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request
intro: 'After you open a pull request in a repository, collaborators or team members can comment on the comparison of files between the two specified branches, or leave general comments on the project as a whole.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Comment on a PR
---
## About pull request comments

You can comment on a pull request's **Conversation** tab to leave general comments, questions, or props. You can also suggest changes that the author of the pull request can apply directly from your comment.

![Pull Request conversation](/assets/images/help/pull_requests/conversation.png)

You can also comment on specific sections of a file on a pull request's **Files changed** tab in the form of individual line comments or as part of a [pull request review](/articles/about-pull-request-reviews). Adding line comments is a great way to discuss questions about implementation or provide feedback to the author.

For more information on adding line comments to a pull request review, see ["Reviewing proposed changes in a pull request."](/articles/reviewing-proposed-changes-in-a-pull-request)

{% note %}

**Note:** If you reply to a pull request via email, your comment will be added on the **Conversation** tab and will not be part of a pull request review.

{% endnote %}

To reply to an existing line comment, you'll need to navigate to the comment on either the **Conversation** tab or **Files changed** tab and add an additional line comment below it.

{% tip %}

**Tips:**
- Pull request comments support the same [formatting](/categories/writing-on-github) as regular comments on {% data variables.product.product_name %}, such as @mentions, emoji, and references.
- You can add reactions to comments in pull requests in the **Files changed** tab.

{% endtip %}

## Adding line comments to a pull request

{% data reusables.repositories.sidebar-pr %}
2. In the list of pull requests, click the pull request where you'd like to leave line comments.
{% data reusables.repositories.changed-files %}
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
5. When you're done, click **Add single comment**.
  ![Inline comment window](/assets/images/help/commits/inline-comment.png)

Anyone watching the pull request or repository will receive a notification of your comment.

{% data reusables.pull_requests.resolving-conversations %}

## Further reading

- "[Writing on GitHub](/github/writing-on-github)"
{% ifversion fpt %}- "[Reporting abuse or spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
{% endif %}
