---
title: Personal repository access and collaboration
intro: Learn how to manage access and collaboration for repositories you own with your personal account on {% data variables.product.github %}.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
  - Privacy
  - Open Source
shortTitle: Access to repositories
contentType: other
redirect_from:
  - /account-and-profile/concepts/personal-repository-access-and-collaboration
  - /account-and-profile/concepts/access-to-repositories
---

## About collaboration in a personal repository

You can collaborate with others on repositories you own by inviting them as collaborators. Collaborators have access to contribute to your code and manage issues and pull requests.

{% ifversion ghec %}

If you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}, you can only invite other members of your enterprise to collaborate with you. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

To add a collaborator, see [AUTOTITLE](/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository).

{% ifversion fpt or ghec %}

{% data reusables.repositories.private_forks_inherit_permissions %}

## About successors

We recommend inviting another {% data variables.product.company_short %} user to be your successor, to manage your user owned repositories if you cannot. As a successor, they will have permission to:

* Archive your public repositories.
* Transfer your public repositories to their own user owned account.
* Transfer your public repositories to an organization where they can create repositories.

Successors cannot log into your account.

An appointed successor can manage your public repositories after presenting a death certificate then waiting for 7 days or presenting an obituary then waiting for 21 days. For more information, see [AUTOTITLE](/free-pro-team@latest/site-policy/other-site-policies/github-deceased-user-policy).

To request access to manage repositories as a successor, please contact us through the {% data variables.contact.contact_support_portal %}.

For more information, see [AUTOTITLE](/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-personal-accounts-repositories).

{% endif %}
