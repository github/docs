---
title: Why are my commits linked to the wrong user?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} uses the email address in the commit header to link the commit to a GitHub user. If your commits are being linked to another user, or not linked to a user at all, you may need to change your local Git configuration settings{% ifversion not ghae %}, add an email address to your account email settings, or do both{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Linked to wrong user
---
{% tip %}

**Note**: If your commits are linked to another user, that does not mean the user can access your repository. A user can only access a repository you own if you add them as a collaborator or add them to a team that has access to the repository.

{% endtip %}

## Commits are linked to another user

If your commits are linked to another user, that means the email address in your local Git configuration settings is connected to that user's account on {% data variables.product.product_name %}. In this case, you can change the email in your local Git configuration settings{% ifversion ghae %} to the address associated with your account on {% data variables.product.product_name %} to link your future commits. Old commits will not be linked. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."{% else %} and add the new email address to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} account to link future commits to your account.

1. To change the email address in your local Git configuration, follow the steps in "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git)". If you work on multiple machines, you will need to change this setting on each one.
1. Add the email address from step 2 to your account settings by following the steps in "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)".{% endif %}

Commits you make from this point forward will be linked to your account.

## Commits are not linked to any user

If your commits are not linked to any user, the commit author's name will not be rendered as a link to a user profile. To check the email address used for those commits and connect commits to your account, take the following steps.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
{% data reusables.repositories.navigate-to-commit %}
1. To read a message about why the commit is not linked, hover over the blue {% octicon "question" aria-label="Question mark" %} to the right of the username.

   - **Unrecognized author (with email address)** If you see this message with an email address, the address you used to author the commit is not connected to your account on {% data variables.product.product_name %}. {% ifversion not ghae %}To link your commits, [add the email address to your GitHub email settings](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account).{% endif %}{% ifversion not ghae %} If the email address has a Gravatar associated with it, the Gravatar will be displayed next to the commit, rather than the default gray Octocat.{% endif %}
   - **Unrecognized author (no email address)** If you see this message without an email address, you used a generic email address that can't be connected to your account on {% data variables.product.product_name %}.{% ifversion not ghae %} You will need to [set your commit email address in Git](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.{% endif %}
   - **Invalid email** The email address in your local Git configuration settings is either blank or not formatted as an email address.{% ifversion not ghae %} You will need to [set your commit email address in Git](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.{% endif %}

{% ifversion ghae %}
You can change the email in your local Git configuration settings to the address associated with your account to link your future commits. Old commits will not be linked. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."
{% endif %}

{% warning %}

If your local Git configuration contained a generic email address, or an email address that was already attached to another user's account, then your previous commits will not be linked to your account. While Git does allow you to change the email address used for previous commits, we strongly discourage this, especially in a shared repository.

{% endwarning %}

## Further reading

- "[AUTOTITLE](/search-github/searching-on-github/searching-commits)"
