---
title: Using GitHub Codespaces for pull requests
shortTitle: Pull requests
intro: 'You can use {% data variables.product.prodname_github_codespaces %} in your web browser, or in {% data variables.product.prodname_vscode %} to create pull requests, review pull requests, and address review comments.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-for-pull-requests
  - /codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests
---

Using a codespace to work on a pull request gives you all the benefits of {% data variables.product.prodname_github_codespaces %}. For more information, see "[AUTOTITLE](/codespaces/overview#benefits-of-github-codespaces)."

## About pull requests in {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} provides you with many of the capabilities you might need to work with pull requests:

* [Create a pull request](/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace#raising-a-pull-request) - Using either the Terminal and Git commands or the "Source Control" view, you can create pull requests just as you would on {% data variables.product.prodname_dotcom_the_website %}. If the repository uses a pull request template, you'll be able to use this within the "Source Control" view.
* [Open a pull request](#opening-a-pull-request-in-codespaces) – You can open an existing pull request in a codespace, provided you have codespace access to the branch that is being merged in.
* [Review a pull request](#reviewing-a-pull-request-in-codespaces) - Once you have opened a pull request in a codespace, you can use the "GitHub Pull Request" view to add review comments and approve pull requests. You can also use {% data variables.product.prodname_github_codespaces %} to [view review comments](#view-comments-from-a-review-in-codespaces).

## Opening a pull request in {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

1. In the list of pull requests, click the pull request you'd like to open in {% data variables.product.prodname_codespaces %}.
1. On the right-hand side of your screen, click **{% octicon "code" aria-hidden="true" %} Code**.
1. In the {% data variables.product.prodname_codespaces %} tab, click {% octicon "plus" aria-label="Create a codespace on BRANCH" %}.

   ![Screenshot of the "Code" dropdown with the "{% data variables.product.prodname_codespaces %}" tab selected. The message "No codespaces" is displayed. The plus button is highlighted.](/assets/images/help/codespaces/open-with-codespaces-pr.png)

   A codespace is created for the pull request branch and is opened in your default editor for {% data variables.product.prodname_github_codespaces %}.

## Reviewing a pull request in {% data variables.product.prodname_codespaces %}

1. With your default editor set to either {% data variables.product.prodname_vscode %} or {% data variables.product.prodname_vscode %} for Web, open the pull request in a codespace, as described in "[Opening a pull request in {% data variables.product.prodname_codespaces %}](#opening-a-pull-request-in-codespaces)" previously in this article.
1. In the Activity Bar, click the Git pull request icon to display the "{% data variables.product.prodname_dotcom %} Pull Request" side bar. This icon is only displayed in the Activity Bar when you open a pull request in a codespace.

   ![Screenshot of the {% data variables.product.prodname_vscode_shortname %} Activity Bar. The mouse pointer is hovering over an icon displaying the tooltip "{% data variables.product.prodname_dotcom %} Pull Request."](/assets/images/help/codespaces/github-pr-view.png)

   If you opened a pull request in a codespace and the pull request icon is not displayed in the Activity Bar, make sure you are signed in to {% data variables.product.prodname_dotcom %}. Click the {% data variables.product.prodname_dotcom %} icon in the Activity Bar then click **Sign in**.

   ![Screenshot of the {% data variables.product.prodname_dotcom %} side bar showing the "Sign in" button. The {% data variables.product.prodname_dotcom %} icon in the Activity Bar is highlighted with an orange outline.](/assets/images/help/codespaces/sign-in-to-github.png)

1. To review the changes that have been made to a specific file, click the file's name in the "{% data variables.product.prodname_dotcom %} Pull Request" side bar.

   ![Screenshot of the "{% data variables.product.prodname_dotcom %} Pull Request" side bar. A file name is highlighted with a dark orange outline.](/assets/images/help/codespaces/changes-in-files.png)

   This displays a diff view in the editor, with the version of the file from the base branch on the left, and the new version of the file, from the head branch of the pull request, on the right.

1. To add a review comment, click the **+** sign next to the line number in the file displayed on the right side of the editor.

   ![Screenshot of the diff view. In the head version of the file, on the right side of the editor, the plus sign next to a line is highlighted.](/assets/images/help/codespaces/create-review-comment.png)

1. Type your review comment and then click **Start Review**.

   ![Screenshot of a comment being added, reading "Yes, I agree, this is clearer." The "Start Review" button is shown below the comment.](/assets/images/help/codespaces/start-review.png)

{% data reusables.codespaces.reviewing-a-pr %}

1. When you are finished adding review comments, you can add a summary comment for your pull request review in the "{% data variables.product.prodname_dotcom %} Pull Request" side bar. You can then click **Comment and Submit**, or click the dropdown arrow and select **Approve and Submit** or **Request Changes and Submit**.

   ![Screenshot of the side bar showing the dropdown options "Comment and Submit," "Approve and Submit," and "Request Changes and Submit."](/assets/images/help/codespaces/submit-review.png)

For more information on reviewing a pull request, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)."

## View comments from a review in {% data variables.product.prodname_codespaces %}

Once you have received feedback on a pull request, you can [open it in a codespace](#opening-a-pull-request-in-codespaces) in your web browser, or in {% data variables.product.prodname_vscode_shortname %}, to see the [review comments](#reviewing-a-pull-request-in-codespaces). From there you can respond to comments, add reactions, or dismiss the review.
