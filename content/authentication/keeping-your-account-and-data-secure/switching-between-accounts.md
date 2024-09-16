---
title: 'Switching between accounts'
intro: 'Learn how to switch between multiple {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %} accounts and {% data variables.enterprise.prodname_managed_users %}{% else %}accounts{% endif %}.'
allowTitleToDifferFromFilename: true
versions:
  feature: account-switcher
type: overview
topics:
  - Identity
  - Access management
---

If you need to use multiple accounts on {% data variables.product.prodname_dotcom %}, you can sign in to your accounts and switch between them  without always being required to reauthenticate. You can use the account switcher if you have a personal account and service accounts (sometimes called machine users){% ifversion fpt or ghec %} or if you need to switch between your personal account and {% data variables.enterprise.prodname_managed_users %} in an enterprise that uses {% data variables.product.prodname_emus %}{% endif %}.

When you are signed in to multiple accounts and using the account switcher, those sessions remain on your computer or browser. If you access {% data variables.product.prodname_dotcom %} on another computer or browser, the same accounts will not be available until you add them.

If you are signed in to multiple accounts and follow a link to {% data variables.product.product_name %} from an external source, such as a request to install or approve a {% data variables.product.prodname_github_app %}, you will first be prompted to choose which account you want to use.

Your SSO sessions will persist when you switch away from an account and return. This means you will not always need to authenticate with your identity provider (IdP) each time you want to use your SSO-linked account. {% ifversion fpt or ghec %}If you're a member of an enterprise that uses {% data variables.product.prodname_emus %} and add your {% data variables.enterprise.prodname_managed_user %} to the account switcher, the {% data variables.enterprise.prodname_managed_user %} will appear grayed out if your session has expired. Selecting the expired account will send you to reauthenticate with your IdP.{% endif %}

## Adding an account to the account switcher

When you add a new account to the account switcher, both the account you are currently signed in to and the account you have added will become available in the account switcher. You will be signed in to the new account immediately.

1. In the upper-right corner of any page, click your profile photo to open the menu.
1. If you have previously added an account to the account switcher, click {% octicon "arrow-switch" aria-hidden="true" %} **Switch account** to open the menu.
1. In the menu, click {% octicon "person-add" aria-hidden="true" %} **Add account**.
1. Sign in to the account you want to add to the account switcher.

## Switching between accounts

When you have added accounts to the account switcher, you can quickly change between them without always needing to reauthenticate.

{% note %}

**Note:** The "{% octicon "arrow-switch" aria-hidden="true" %} Switch account" option will not be available if all sessions have expired. You can instead click on {% octicon "arrow-switch" aria-hidden="true" %} **See all accounts** in the menu to reauthenticate.

{% endnote %}

1. In the upper-right corner of any page, click your profile photo to open the menu.
1. In the menu, click {% octicon "arrow-switch" aria-hidden="true" %} **Switch account**.
1. In the submenu, click on the account that you want to switch to.

      ![Screenshot of the "Switch account" menu with three options, "octocat", "hubot", and "Add account".](/assets/images/help/profile/switch-accounts.png)

## Removing accounts from the account switcher

You can either remove individual accounts or all accounts from the account switcher.

1. In the upper-right corner of any page, click your profile photo to open the menu.
1. In the menu, click **Sign out**.
1. Choose which accounts to sign out of and remove from the account switcher.
    * To remove the account you are currently signed in to from the account switcher and sign out, click **Sign out** next to your username.
    * To sign out from and remove an account from the account switcher, click **Remove** next to the username you want to remove.
    * To sign out from all accounts, and remove all accounts from the account switcher, click **Sign out from all accounts**.
