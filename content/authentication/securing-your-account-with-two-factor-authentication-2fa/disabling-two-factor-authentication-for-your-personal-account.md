---
title: Disabling two-factor authentication for your personal account
intro: 'If you disable two-factor authentication for your personal account, you may lose access to organizations you belong to.'
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/disabling-two-factor-authentication-for-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Disable 2FA
---

{% ifversion mandatory-2fa-dotcom-contributors %}
{% data reusables.two_fa.mandatory-2fa-contributors-2023 %}
{% endif %}

{% warning %}

**Warning:** If you're a member{% ifversion fpt or ghec %}, billing manager,{% endif %} or outside collaborator to a public repository of an organization that requires two-factor authentication and you disable 2FA, you'll be automatically removed from the organization, and you'll lose your access to their repositories. To regain access to the organization, re-enable two-factor authentication and contact an organization owner.

{% endwarning %}

We strongly recommend using two-factor authentication (2FA) to secure your account. If you need to disable 2FA, we recommend re-enabling it as soon as possible.

{% ifversion mandatory-2fa-dotcom-contributors %}
If you are part of the group that {% data variables.product.prodname_dotcom %} is requiring to enroll in 2FA in 2023, you cannot disable 2FA. A banner will display in your authentication settings to remind you that you are not allowed to disable 2FA. For more information about our 2023 2FA enrollment rollout for contributors to {% data variables.product.prodname_dotcom_the_website %}, see [this blog post](https://github.blog/2023-03-09-raising-the-bar-for-software-security-github-2fa-begins-march-13).

You can modify your existing 2FA configuration instead of disabling it entirely. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/changing-your-two-factor-authentication-method)."
{% endif %}

If your organization requires two-factor authentication and you're a member, owner, or an outside collaborator on a private repository of your organization, you must first leave your organization before you can disable two-factor authentication.

To remove yourself from your organization:
* As an organization member or owner, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization)."
* As an outside collaborator, ask an organization owner or repository administrator to remove you from the organization's repositories. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization)" and "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/removing-an-outside-collaborator-from-an-organization-repository)."

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% ifversion 2fa-reconfiguration-inline-update %}
1. Hover over **Enabled**, then click **Disable**.

   ![Screenshot of an account's 2FA settings. A green button labeled "Enabled" is outlined in orange.](/assets/images/help/2fa/disable-two-factor-authentication.png)

1. If necessary, enter your password or perform 2FA once more to disable 2FA for your {% data variables.product.prodname_dotcom %} account.
{% else %}
1. Click **Disable**.
{% endif %}

## Further reading

* "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)"
* "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)"
* "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)"
