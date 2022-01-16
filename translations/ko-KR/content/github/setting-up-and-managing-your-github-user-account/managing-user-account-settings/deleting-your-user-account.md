---
title: Deleting your user account
intro: 'You can delete your {% data variables.product.product_name %} user account at any time.'
redirect_from:
  - /articles/deleting-a-user-account/
  - /articles/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---

Deleting your user account removes all repositories, forks of private repositories, wikis, issues, pull requests, and pages owned by your account. {% if currentVersion == "free-pro-team@latest" %} Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted - instead, they'll be associated with our [Ghost user](https://github.com/ghost).{% else %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted.{% endif %}

{% if currentVersion == "free-pro-team@latest" %} The account name also becomes available to anyone else to use on a new account, and we stop billing you. The email address associated with the account becomes available for use with a different {% data variables.product.product_name %} account. {% endif %}

If you’re the only owner of an organization, you must transfer ownership to another person or delete the organization before you can delete your user account. If there are other owners in the organization, you must remove yourself from the organization before you can delete your user account.

For more information, see:
- "[Transferring organization ownership](/articles/transferring-organization-ownership)"
- "[Deleting an organization account](/articles/deleting-an-organization-account)"
- "[Removing yourself from an organization](/articles/removing-yourself-from-an-organization/)"

### Back up your account data

Before you delete your user account, make a copy of all repositories, private forks, wikis, issues, and pull requests owned by your account.

{% warning %}

**Warning:** Once your user account has been deleted, GitHub cannot restore your content.

{% endwarning %}

### Delete your user account

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. At the bottom of the Account Settings page, under "Delete account", click **Delete your account**. Before you can delete your user account:
    - If you're the only owner in the organization, you must transfer ownership to another person or delete your organization.
    - If there are other organization owners in the organization, you must remove yourself from the organization. ![Account deletion button](/assets/images/help/settings/settings-account-delete.png)
4. In the "Make sure you want to do this" dialog box, complete the steps to confirm you understand what happens when your account is deleted: ![Delete account confirmation dialog](/assets/images/help/settings/settings-account-deleteconfirm.png)
  {% if currentVersion == "free-pro-team@latest" %}- Recall that all repositories, forks of private repositories, wikis, issues, pull requests and pages owned by your account will be deleted, your billing will end, and your username will be available to anyone for use on {% data variables.product.product_name %}.
  {% else %}- Recall that all repositories, forks of private repositories, wikis, issues, pull requests and pages owned by your account will be deleted, and your username will be available for use on {% data variables.product.product_name %}.
  {% endif %}- In the first field, type your {% data variables.product.product_name %} username or email.
    - In the second field, type the phrase from the prompt.
