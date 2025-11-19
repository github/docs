---
title: Changing your username
intro: Change your {% data variables.product.github %} username.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Usernames
shortTitle: Change username
permissions: '{% ifversion ghec %}Users with personal accounts can change their username. Members of an {% data variables.enterprise.prodname_emu_enterprise %} cannot change their username.{% elsif ghes %}If your instance uses built-in authentication or LDAP, you can change your username. If you sign in to {% data variables.location.product_location %} with single sign-on (SSO), only your local administrator can change your username.{% else %}Users with personal accounts can change their username.{% endif %}'
contentType: how-tos
redirect_from:
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/changing-your-username
---

## Prerequisites

Before changing your username, you should be aware of potential impacts on your account and activity. For more information, see [AUTOTITLE](/account-and-profile/concepts/username-changes).

## Changing your username

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
1. In the "Change username" section, click **Change username**.{% ifversion fpt or ghec %}
1. Read the warnings about changing your username. If you still want to change your username, click **I understand, let's change my username**.
1. Type a new username.
1. If the username you've chosen is available, click **Change my username**. If the username you've chosen is unavailable, you can try a different username or one of the suggestions you see.
{% endif %}

## Next steps

For reference information and limitations, see [AUTOTITLE](/account-and-profile/reference/username-reference#changing-your-username).
