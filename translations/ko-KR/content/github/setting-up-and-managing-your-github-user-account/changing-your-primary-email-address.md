---
title: Changing your primary email address
intro: You can change the email address associated with your user account at any time.
redirect_from:
  - /articles/changing-your-primary-email-address
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
  - Notifications
---

{% note %}

**Note:** You cannot change your primary email address to an email that is already set to be your backup email address.

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
3. If you'd like to add a new email address to set as your primary email address, under "Add email address", type a new email address and click **Add**. ![Add another email address button](/assets/images/help/settings/add_another_email_address.png)
4. Under "Primary email address", use the drop-down menu to click the email address you'd like to set as your primary email address, and click **Save**. ![Set as primary button](/assets/images/help/settings/set_as_primary_email.png)
5. To remove the old email address from your account, next to the old email, click
{% octicon "trash" aria-label="The trash symbol" %}.
{% if currentVersion == "free-pro-team@latest" %}
6. Verify your new primary email address. Without a verified email address, you won't be able to use all of
{% data variables.product.product_name %}'s features. For more information, see "[Verifying your email address](/articles/verifying-your-email-address)."
{% endif %}

### 더 읽을거리

- "[Managing email preferences](/articles/managing-email-preferences/)"
