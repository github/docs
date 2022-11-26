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
---

## About pull requests in {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} provides you with many of the capabilities you might need to work with pull requests:

- [Create a pull request](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) - Using either the Terminal and Git commands or the Source Control view, you can create pull requests just as you would on {% data variables.product.prodname_dotcom_the_website %}. If the repository uses a pull request template, you'll be able to use this within the Source Control view.
- [Open a pull request](#opening-a-pull-request-in-codespaces) – You can open an existing pull request in a codespace, provided you have codespace access to the branch that is being merged in.
- [Review a pull request](#reviewing-a-pull-request-in-codespaces) - Once you have opened a pull request in a codespace, you can use the "GitHub Pull Request" view to add review comments and approve pull requests. You can also use {% data variables.product.prodname_github_codespaces %} to [view review comments](#view-comments-from-a-review-in-codespaces).

## Opening a pull request in {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

1. In the list of pull requests, click the pull request you'd like to open in {% data variables.product.prodname_codespaces %}.
1. On the right-hand side of your screen, click **{% octicon "code" aria-label="The code icon" %} Code**. 
1. In the {% data variables.product.prodname_codespaces %} tab, click the plus sign ({% octicon "plus" aria-label="The plus icon" %})

   ![Option to open PR in a codespace](/assets/images/help/codespaces/open-with-codespaces-pr.png)

   A codespace is created for the pull request branch and is opened in your default editor for {% data variables.product.prodname_github_codespaces %}.

## Reviewing a pull request in {% data variables.product.prodname_codespaces %}

1. With your default editor set to either {% data variables.product.prodname_vscode %} or {% data variables.product.prodname_vscode %} for Web, open the pull request in a codespace, as described in "[Opening a pull request](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces)" above.
2. In the Activity Bar, click the **GitHub Pull Request** view. This view only appears when you open a pull request in a codespace.
  ![Option to open PR in a codespace](/assets/images/help/codespaces/github-pr-view.png)
3. To review a specific file, click the **Open File** icon in the sidebar.
  ![Option to open PR in a codespace](/assets/images/help/codespaces/changes-in-files.png)
4. To add review comments, click the **+** icon next to the line number. Type your review comment and then click **Start Review**.
  ![Option to open PR in a codespace](/assets/images/help/codespaces/start-review.png)
5. When you are finished adding review comments, from the sidebar you can choose to either submit the comments, approve the changes, or request changes.
  ![Option to open PR in a codespace](/assets/images/help/codespaces/submit-review.png)

For more information on reviewing a pull request, see "[Reviewing proposed changes in a pull request](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)."

## View comments from a review in {% data variables.product.prodname_codespaces %}

Once you have received feedback on a pull request, you can [open it in a codespace](#opening-a-pull-request-in-codespaces) in your web browser, or in {% data variables.product.prodname_vscode_shortname %}, to see the [review comments](#reviewing-a-pull-request-in-codespaces). From there you can respond to comments, add reactions, or dismiss the review. 

  ![Option to open PR in a codespace](/assets/images/help/codespaces/incorporating-codespaces.png)



