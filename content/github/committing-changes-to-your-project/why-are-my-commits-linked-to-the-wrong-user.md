---
title: Why are my commits linked to the wrong user?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account/
  - /articles/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} uses the email address in the commit header to link the commit to a GitHub user. If your commits are being linked to another user, or not linked to a user at all, you may need to change your local Git configuration settings, add an email address to your account email settings, or do both.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


{% tip %}

**Note**: If your commits are linked to another user, that does not mean the user can access your repository. A user can only access a repository you own if you add them as a collaborator or add them to a team that has access to the repository.

{% endtip %}

### Commits are linked to another user

If your commits are linked to another user, that means the user has added the email address in your local Git configuration settings to their {% data variables.product.product_name %} account. In this case, you can change the email in your local Git configuration settings and add the new email address to your {% data variables.product.product_name %} account to link future commits to your account.

1. To change the email address in your local Git configuration, follow the steps in "[Setting your commit email address in Git](/articles/setting-your-commit-email-address)". If you work on multiple machines, you will need to change this setting on each one.
2. Add the email address from step 2 to your account settings by following the steps in "[Adding an email address to your GitHub account](/articles/adding-an-email-address-to-your-github-account)".

Commits you make from this point forward will be linked to your account.

### Commits are not linked to any user

If your commits are not linked to any user, the commit author's name will not be rendered as a link to a user profile.

To check the email address used for those commits and connect commits to your account, take the following steps:

1. Navigate to the commit by clicking the commit message link.
![Commit message link](/assets/images/help/commits/commit-msg-link.png)
2. To read a message about why the commit is not linked, hover over the blue {% octicon "question" aria-label="Question mark" %} to the right of the username.
![Commit hover message](/assets/images/help/commits/commit-hover-msg.png)

  - **Unrecognized author (with email address)** If you see this message with an email address, it means the address has not been added to your account settings. To link your commits, [add the email address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account). If your email address has a Gravatar associated with it, the Gravatar will be displayed next to your username, rather than the default gray Octocat.
  - **Unrecognized author (no email address)** If you see this message without an email address, it means you used a generic email address that can't be added to your email settings. You will need to [set your commit email address in Git](/articles/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.
  - **Invalid email** This means the email address in your local Git configuration settings is either blank or not formatted as an email address. You will need to [set your commit email address in Git](/articles/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.

{% warning %}

If your local Git configuration contained a generic email address, or an email address that was already attached to another user's account, then your previous commits will not be linked to your account. While Git does allow you to change the email address used for previous commits, we strongly discourage this, especially in a shared repository.

{% endwarning %}

### Further reading

* "[Searching commits](/articles/searching-commits)"
