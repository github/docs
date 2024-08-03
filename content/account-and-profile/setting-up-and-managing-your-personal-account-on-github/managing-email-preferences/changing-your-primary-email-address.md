---
title: Changing your primary email address
intro: To change your primary email address, you'll add a new email, then delete the old one.
redirect_from:
  - /articles/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Primary email address
---

You can change the email address associated with your personal account at any time. You cannot change your primary email address to an email that is already set to be your backup email address.

{% ifversion ghec %}

>[!NOTE] This article **does not apply** to {% data variables.enterprise.prodname_managed_users %}. To change your email address as a {% data variables.enterprise.prodname_managed_user %}, contact the administrator for your company's identity provider (IdP). Your primary email address is the first one assigned to you in the IdP.

{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
1. If you'd like to add a new email address to set as your primary email address, under "Add email address", type a new email address and click **Add**.
1. Under "Primary email address", use the drop-down menu to click the email address you'd like to set as your primary email address, and click **Save**.
1. To remove the old email address from your account, next to the old email, click {% octicon "trash" aria-label="The trash symbol" %}.
{% ifversion fpt or ghec %}
1. Verify your new primary email address. Without a verified email address, you won't be able to use all of {% data variables.product.product_name %}'s features. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address)."
{% endif %}
