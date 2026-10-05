---
title: Changing your username
intro: Change your {% data variables.product.github %} username.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Change username
permissions: '{% ifversion ghec %}Users with personal accounts can change their username. Members of an {% data variables.enterprise.prodname_emu_enterprise %} cannot change their username.{% elsif ghes %}If your instance uses built-in authentication or LDAP, you can change your username. If you sign in to {% data variables.location.product_location %} with single sign-on (SSO), only your local administrator can change your username.{% else %}Users with personal accounts can change their username.{% endif %}'
contentType: how-tos
redirect_from:
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/changing-your-username
category:
  - Change or close your account
---

## Prerequisites

Before you change your username, review the potential impact on your account, links, and activity history. For more information, see [AUTOTITLE](/account-and-profile/concepts/username-changes).

## Changing your username

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
1. In the "Change username" section, click **Change username**.
1. Review the warning message. If you still want to continue, click **I understand, let's change my username**.{% ifversion fpt or ghec %}
1. Enter a new username.
1. If the username is available, click **Change my username**. If it is unavailable, choose a different username or use one of the suggested alternatives.
{% endif %}

## Next steps

For reference information, requirements, and limitations, see [AUTOTITLE](/account-and-profile/reference/username-reference#changing-your-username).
