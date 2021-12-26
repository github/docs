---
title: Creating a strong password
intro: 'Secure your {% data variables.product.product_name %} account with a strong and unique password using a password manager.'
redirect_from:
  - /articles/what-is-a-strong-password/
  - /articles/creating-a-strong-password
  - /github/authenticating-to-github/creating-a-strong-password
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Identity
  - Access management
---

You must choose or generate a password for your {% data variables.product.product_name %} account that is at least:
- {% if enterpriseServerVersions contains currentVersion %}Seven{% else %}Eight{% endif %} characters long, if it includes a number and a lowercase letter, or
- 15 characters long with any combination of characters

To keep your account secure, we recommend you follow these best practices:
- Use a password manager, such as [LastPass](https://lastpass.com/), [1Password](https://1password.com/), or [Keeper](https://keepersecurity.com/), to generate a password of at least 15 characters.
- Generate a unique password for {% data variables.product.product_name %}. If you use your {% data variables.product.product_name %} password elsewhere and that service is compromised, then attackers or other malicious actors could use that information to access your {% data variables.product.product_name %} account.
- Configure two-factor authentication for your personal account. For more information, see "[About two-factor authentication](/articles/about-two-factor-authentication)."
- Never share your password, even with a potential collaborator. Each person should use their own personal account on {% data variables.product.product_name %}. For more information on ways to collaborate, see: "[Inviting collaborators to a personal repository](/articles/inviting-collaborators-to-a-personal-repository)," "[About collaborative development models](/articles/about-collaborative-development-models/)," or "[Collaborating with groups in organizations](/organizations/collaborating-with-groups-in-organizations/)."

{% data reusables.repositories.blocked-passwords %}

You can only use your password to log on to {% data variables.product.product_name %} using your browser. When you authenticate to {% data variables.product.product_name %} with other means, such as the command line or API, you should use other credentials. For more information, see "[About authentication to {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)."

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.password-authentication-deprecation %}{% endif %}

### 더 읽을거리

- "[Caching your {% data variables.product.product_name %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
- "[Keeping your account and data secure](/articles/keeping-your-account-and-data-secure/)"
