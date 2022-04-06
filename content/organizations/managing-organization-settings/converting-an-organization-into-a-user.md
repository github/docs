---
title: Converting an organization into a user
intro: 'It''s not possible to convert an organization into a personal account, but you can create a new personal account and transfer the organization''s repositories to it.'
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert organization to user
---

{% ifversion fpt or ghec %}

{% note %}

**Note**: After an account is deleted, the username at the time of deletion becomes unavailable for reuse for 90 days. To reuse an organization's username immediately, you must change the username before you delete the organization.

 {% endnote %}

1. [Sign up](/articles/signing-up-for-a-new-github-account) for a new account on GitHub.
2. [Have the user's role changed to an owner](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} to the new personal account.
4. [Transfer each organization repository](/articles/how-to-transfer-a-repository) to the new personal account.
5. [Rename the organization](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username) to make the current username available.
6. [Rename the user](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username) to the organization's name.
7. [Delete the organization](/organizations/managing-organization-settings/deleting-an-organization-account).


{% else %}

1. Sign up for a new GitHub Enterprise personal account.
2. [Have the user's role changed to an owner](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} to the new personal account.
4. [Transfer each organization repository](/articles/how-to-transfer-a-repository) to the new personal account.
5. [Delete the organization](/articles/deleting-an-organization-account).
6. [Rename the user](/articles/changing-your-github-username) to the organization's name.

{% endif %}
