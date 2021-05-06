---
title: 'Warum werde ich von Git immer aufgefordert, mein Passwort einzugeben?'
intro: 'Wenn Du durch Git jedes Mal zur Eingabe eines Benutzernamens und Passworts aufgefordert wirst, wenn Du versuchst, mit GitHub zu interagieren, verwendest Du wahrscheinlich die HTTPS-Klon-URL für Dein Repository.'
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Die Verwendung einer HTTPS-Remote-URL hat einige Vorteile gegenüber der Verwendung von SSH. Die URL ist einfacher einzurichten als SSH und funktioniert in der Regel auch über strenge Firewalls und Proxies hinweg. However, it also prompts you to enter your {% data variables.product.product_name %} credentials every time you pull or push a repository.

{% data reusables.user_settings.password-authentication-deprecation %}

You can avoid being prompted for your password by configuring Git to [cache your credentials](/github/getting-started-with-github/caching-your-github-credentials-in-git) for you. Once you've configured credential caching, Git automatically uses your cached personal access token when you pull or push a repository using HTTPS.

### Weiterführende Informationen

- "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."
- "[About authentication to {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)"
- "[Adding your SSH key to the ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)"
