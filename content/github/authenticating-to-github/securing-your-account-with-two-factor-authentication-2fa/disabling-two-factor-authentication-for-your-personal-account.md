---
title: Disabling two-factor authentication for your personal account
intro: 'If you disable two-factor authentication for your personal account, you may lose access to organizations you belong to.'
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/disabling-two-factor-authentication-for-your-personal-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2FA
---
We strongly recommend using two-factor authentication to secure your account. If you need to disable 2FA, we recommend re-enabling it as soon as possible.

{% warning %}

**Warning:** If you're a member{% if currentVersion == "free-pro-team@latest" %}, billing manager,{% endif %} or outside collaborator to a public repository of an organization that requires two-factor authentication and you disable 2FA, you'll be automatically removed from the organization, and you'll lose your access to their repositories. To regain access to the organization, re-enable two-factor authentication and contact an organization owner.

{% endwarning %}

If your organization requires two-factor authentication and you're a member, owner, or an outside collaborator on a private repository of your organization, you must first leave your organization before you can disable two-factor authentication.

To remove yourself from your organization:
 - As an organization member or owner, see "[Removing yourself from an organization](/articles/removing-yourself-from-an-organization/)."
 - As an outside collaborator, ask an organization owner or repository administrator to remove you from the organization's repositories. For more information, see "[Viewing people's roles in an organization](/articles/viewing-people-s-roles-in-an-organization)" and "[Removing an outside collaborator from an organization repository](/articles/removing-an-outside-collaborator-from-an-organization-repository/)."

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Click **Disable**.
  ![Disable two-factor authentication button](/assets/images/help/2fa/disable-two-factor-authentication.png)

### Further reading

- "[About two-factor authentication](/articles/about-two-factor-authentication)"
- "[Configuring two-factor authentication](/articles/configuring-two-factor-authentication)"
- "[Configuring two-factor authentication recovery methods](/articles/configuring-two-factor-authentication-recovery-methods)"
