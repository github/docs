---
title: Converting an organization into a user
intro: 'It''s not possible to convert an organization into a personal user account, but you can create a new user account and transfer the organization''s repositories to it.'
redirect_from:
  - /articles/converting-an-organization-into-a-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}

1. [Sign up](/articles/signing-up-for-a-new-github-account) for a new GitHub user account.
2. [Have the user's role changed to an owner](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} to the new user account.
4. [Transfer each organization repository](/articles/how-to-transfer-a-repository) to the new user account.
5. [Delete the organization](/articles/deleting-an-organization-account).
6. [Rename the user](/articles/changing-your-github-username) to the organization's name.

{% else %}

1. Sign up for a new GitHub Enterprise user account.
2. [Have the user's role changed to an owner](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} to the new user account.
4. [Transfer each organization repository](/articles/how-to-transfer-a-repository) to the new user account.
5. [Delete the organization](/articles/deleting-an-organization-account).
6. [Rename the user](/articles/changing-your-github-username) to the organization's name.

{% endif %}
