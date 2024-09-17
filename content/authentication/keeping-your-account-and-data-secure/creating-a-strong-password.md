---
title: Creating a strong password
intro: 'Secure your account on {% data variables.product.prodname_dotcom %} with a strong and unique password using a password manager.'
redirect_from:
  - /articles/what-is-a-strong-password
  - /articles/creating-a-strong-password
  - /github/authenticating-to-github/creating-a-strong-password
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a strong password
---
You must choose or generate a password for your account on {% data variables.product.prodname_dotcom %} that is at least:
* {% ifversion ghes %}Seven{% else %}Eight{% endif %} characters long, if it includes a number and a lowercase letter, or
* 15 characters long with any combination of characters

To keep your account secure, we recommend you follow these best practices:
* Use a password manager to generate a password of at least 15 characters.
* Generate a unique password for {% data variables.product.product_name %}. If you use your {% data variables.product.product_name %} password elsewhere and that service is compromised, then attackers or other malicious actors could use that information to access your account.
* Configure two-factor authentication for your personal account. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)."{% ifversion passkeys %}
* {% data reusables.passkeys.add-passkey-option %}{% endif %}
* Never share your password, even with a potential collaborator. Each person should use their own personal account on {% data variables.product.product_name %}. For more information on ways to collaborate, see: "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)," "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)," or "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations)."

{% data reusables.repositories.blocked-passwords %}

You can only use your password to log on to {% data variables.product.product_name %} using your browser. When you authenticate to {% data variables.product.product_name %} with other means, such as the command line or API, you should use other credentials. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)."

{% ifversion fpt or ghec %}{% data reusables.user-settings.password-authentication-deprecation %}{% endif %}

## Further reading

* "[AUTOTITLE](/get-started/getting-started-with-git/caching-your-github-credentials-in-git)"
* "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure)"
