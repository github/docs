---
title: Can I create accounts for people in my organization?
intro: 'While you can add users to an organization you''ve created, you can''t create personal user accounts on behalf of another person.'
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization/
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Create accounts for people
---

## About user accounts

Because you access an organization by logging in to a user account, each of your team members needs to create their own user account. After you have usernames for each person you'd like to add to your organization, you can add the users to teams.

{% ifversion fpt or ghec %}
If you need greater control over the user accounts of your organization members, consider {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}
{% endif %}

## Adding users to your organization

1. Provide each person instructions to [create a user account](/articles/signing-up-for-a-new-github-account).
2. Ask for the username of each person you want to give organization membership to.
3. [Invite the new personal accounts to join](/articles/inviting-users-to-join-your-organization) your organization. Use [organization roles](/articles/permission-levels-for-an-organization) and [repository permissions](/articles/repository-permission-levels-for-an-organization) to limit the access of each account.
