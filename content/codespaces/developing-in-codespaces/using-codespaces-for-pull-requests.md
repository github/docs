---
title: Using Codespaces for pull requests
shortTitle: Pull requests
intro: 'You can use {% data variables.product.prodname_codespaces %} in your development workflow to create pull requests, review pull requests, and address review comments.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
---

## About pull requests in {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} provides you with many of the capabilities you might need to work with pull requests:

- [Create a pull request](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) - Using either the Terminal and Git commands or the Source Control view, you can create pull requests just as you would on {% data variables.product.prodname_dotcom_the_website %}. If the repository uses a pull request template, you'll be able to use this within the Source Control view.
- [Open a pull request](#opening-a-pull-request-in-codespaces) – You can open an existing pull request in a codespace, provided you have codespace access to the branch that is being merged in.
- [Review a pull request](#reviewing-a-pull-request-in-codespaces) - Once you have opened a pull request in a codespace, you can use the "GitHub Pull Request" view to add review comments and approve pull requests. You can also use {% data variables.product.prodname_codespaces %} to [view review comments](#view-comments-from-a-review-in-codespaces).

## Opening a pull request in {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

2. In the list of pull requests, click the pull request you'd like to open in {% data variables.product.prodname_codespaces %}.
3. On the right-hand side of your screen, click **{% octicon "code" aria-label="The code icon" %} Code**. 
4. From the {% data variables.product.prodname_codespaces %} tab, click **New codespace**.
  ![Option to open PR in a codespace](/assets/images/help/codespaces/open-with-codespaces-pr.png)

## Reviewing a pull request in {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.review-pr %}

For more information on reviewing a pull request, see "[Reviewing proposed changes in a pull request](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)."

## View comments from a review in {% data variables.product.prodname_codespaces %}

Once you have received feedback on a pull request, you can [open it in a codespace](#opening-a-pull-request-in-codespaces) to see the [review comments](#reviewing-a-pull-request-in-codespaces). From there you can respond to comments, add reactions, or dismiss the review. 

  ![Option to open PR in a codespace](/assets/images/help/codespaces/incorporating-codespaces.png)
