---
title: Why is Git always asking for my credentials?
intro: 'If Git prompts you for your credentials every time you try to interact with GitHub, you''re probably using the HTTPS clone URL for your repository.'
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/getting-started-with-git/why-is-git-always-asking-for-my-password
  - /get-started/getting-started-with-git/why-is-git-always-asking-for-my-password
  - /get-started/git-basics/why-is-git-always-asking-for-my-password
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Repeated credential prompts
---
Using an HTTPS remote URL has some advantages compared with using SSH. It's easier to set up than SSH, and usually works through strict firewalls and proxies. However, it also prompts you to enter your {% data variables.product.github %} credentials every time you pull or push a repository.

{% data reusables.user-settings.password-authentication-deprecation %}

You can avoid being prompted for your password by configuring Git to [cache your credentials](/get-started/git-basics/caching-your-github-credentials-in-git) for you. Once you've configured credential caching, Git automatically uses your cached {% data variables.product.pat_generic %} when you pull or push a repository using HTTPS.

{% ifversion ghec %}
If you are an [Enterprise Managed User](/get-started/learning-about-github/types-of-github-accounts#managed-user-accounts), and your enterprise owners do not have [the SSO Redirect setting](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users) enabled for the enterprise, then credential caching may not work properly when using [Git Credential Manager (GCM)](https://github.com/git-ecosystem/git-credential-manager). You will need to disable GCM [account filtering](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/configuration.md#credentialgithubaccountfiltering) locally in this situation to prevent getting prompted for authentication each time you perform a Git operation. For more details, see [AUTOTITLE](/get-started/git-basics/caching-your-github-credentials-in-git).
{% endif %}

## Further reading

* [AUTOTITLE](/get-started/git-basics/about-remote-repositories)
* [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
* [AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)
* [AUTOTITLE](/get-started/git-basics/caching-your-github-credentials-in-git)
