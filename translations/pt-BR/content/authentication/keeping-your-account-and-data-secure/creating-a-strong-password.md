---
title: Creating a strong password
intro: 'Secure your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} with a strong and unique password using a password manager.'
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
You must choose or generate a password for your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} that is at least:
- {% ifversion ghes %}Seven{% else %}Eight{% endif %} characters long, if it includes a number and a lowercase letter, or
- 15 characters long with any combination of characters

To keep your account secure, we recommend you follow these best practices:
- Use a password manager, such as [LastPass](https://lastpass.com/) or [1Password](https://1password.com/), to generate a password of at least 15 characters.
- Generate a unique password for {% data variables.product.product_name %}. If you use your {% data variables.product.product_name %} password elsewhere and that service is compromised, then attackers or other malicious actors could use that information to access your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.

- Configure two-factor authentication for your personal account. For more information, see "[About two-factor authentication](/articles/about-two-factor-authentication)."
- Never share your password, even with a potential collaborator. Each person should use their own personal account on {% data variables.product.product_name %}. For more information on ways to collaborate, see: "[Inviting collaborators to a personal repository](/articles/inviting-collaborators-to-a-personal-repository)," "[About collaborative development models](/articles/about-collaborative-development-models/)," or "[Collaborating with groups in organizations](/organizations/collaborating-with-groups-in-organizations/)."

{% data reusables.repositories.blocked-passwords %}

You can only use your password to log on to {% data variables.product.product_name %} using your browser. When you authenticate to {% data variables.product.product_name %} with other means, such as the command line or API, you should use other credentials. For more information, see "[About authentication to {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)." 

{% ifversion fpt or ghec %}{% data reusables.user-settings.password-authentication-deprecation %}{% endif %}

## Further reading

- "[Caching your {% data variables.product.product_name %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
- "[Keeping your account and data secure](/articles/keeping-your-account-and-data-secure/)"
