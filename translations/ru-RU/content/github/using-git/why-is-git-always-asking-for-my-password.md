---
title: Why is Git always asking for my password?
intro: 'If Git prompts you for a username and password every time you try to interact with GitHub, you''re probably using the HTTPS clone URL for your repository.'
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Using an HTTPS remote URL has some advantages compared with using SSH. It's easier to set up than SSH, and usually works through strict firewalls and proxies. However, it also prompts you to enter your GitHub credentials every time you pull or push a repository.

You can avoid being prompted for your password by configuring Git to [cache your credentials](/github/using-git/caching-your-github-credentials-in-git) for you. {% data reusables.user_settings.password-authentication-deprecation %}

Once you've configured credential caching, Git automatically uses your cached personal access token in place of a password when you pull or push a repository using HTTPS.


### Дополнительная литература

* "[Which remote URL should I use](/articles/which-remote-url-should-i-use/#cloning-with-https-urls)"
* "[About authentication to {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)"
* "[Adding your SSH key to the ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)"
