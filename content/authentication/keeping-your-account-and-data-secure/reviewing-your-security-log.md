---
title: Reviewing your security log
intro: You can review the security log for your personal account to better understand actions you've performed and actions others have performed that involve you.
redirect_from:
  - /articles/reviewing-your-security-log
  - /github/authenticating-to-github/reviewing-your-security-log
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Review security log
---

## Accessing your security log

The security log lists all actions performed within the last 90 days.

{% data reusables.user-settings.access_settings %}
1. In the "Archives" section of the sidebar, click **{% octicon "log" aria-hidden="true" %} Security log**.

## Searching your security log

{% data reusables.audit_log.audit-log-search %}

### Search based on the action performed

The events listed in your security log are triggered by your actions. Actions are grouped into different categories. For the full list of events in each category, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/security-log-events)."

| Category name | Description
|------------------|-------------------{% ifversion fpt or ghec %}
| `billing` | Contains all activities related to your billing information.
| `codespaces` | Contains all activities related to {% data variables.product.prodname_github_codespaces %}. For more information, see "[AUTOTITLE](/codespaces/overview)."
| `copilot` | Contains all activities related to {% data variables.product.prodname_copilot_business_short %}. For more information, see "[AUTOTITLE](/copilot/overview-of-github-copilot)."
| `marketplace_agreement_signature` | Contains all activities related to signing the {% data variables.product.prodname_marketplace %} Developer Agreement.
| `marketplace_listing`| Contains all activities related to listing apps in {% data variables.product.prodname_marketplace %}.{% endif %}{% ifversion security-log-oauth-access-tokens %}
| `oauth_access` | Contains all activities related to OAuth access tokens.{% endif %}
| `oauth_authorization` | Contains all activities related to authorizing {% data variables.product.prodname_oauth_apps %}. For more information, see "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps)."{% ifversion passkeys %}
| `passkey` | Contains activities related to your passkeys. For more information, see "[AUTOTITLE](/authentication/authenticating-with-a-passkey/about-passkeys)."{% endif %}{% ifversion fpt or ghec %}
| `payment_method` | Contains all activities related to paying for your {% data variables.product.prodname_dotcom %} subscription.{% endif %}{% ifversion pat-v2%}
| `personal_access_token` | Contains activities related to {% data variables.product.pat_v2 %}s. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."{% endif %}
| `profile_picture`| Contains all activities related to your profile picture.
| `project` | Contains all activities related to project boards.
| `public_key` | Contains all activities related to [your public SSH keys](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
| `repo`| Contains all activities related to the repositories you own.{% ifversion fpt or ghec %}
| `sponsors` | Contains all events related to {% data variables.product.prodname_sponsors %} and sponsor buttons (see "[AUTOTITLE](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)" and "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)"){% endif %}{% ifversion ghes or ghae %}
| `team` | Contains all activities related to teams you are a part of.{% endif %}{% ifversion not ghae %}
| `two_factor_authentication` | Contains all activities related to [two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa).{% endif %}
| `user` | Contains all activities related to your account.

{% ifversion fpt or ghec %}

## Exporting your security log

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}
