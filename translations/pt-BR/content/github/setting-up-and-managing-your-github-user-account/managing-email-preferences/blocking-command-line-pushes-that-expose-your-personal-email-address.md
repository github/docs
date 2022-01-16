---
title: Bloquear pushes de linha de comando que mostrem endereços de e-mail pessoais
intro: 'Se você optou por manter seu endereço de e-mail privado ao realizar operações na web, também é possível optar por bloquear pushes de linha de comando que possam mostrar seu endereço de e-mail pessoal.'
redirect_from:
  - /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  free-pro-team: '*'
topics:
  - Accounts
  - Notifications
---

Quando você faz push de commits usando a linha de comando, o endereço de e-mail [definido no Git](/articles/setting-your-commit-email-address) é associado aos seus commits. Se você habilitar essa configuração, cada vez que você fizer push para o GitHub, verificaremos o commit mais recente. Se o e-mail do autor nesse commit for um e-mail privado na sua conta do GitHub, nós iremos bloquear o push e avisá-lo sobre como expor seu e-mail privado.

{% data reusables.user_settings.about-commit-email-addresses %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.keeping_your_email_address_private %}
4. Para manter seu endereço de e-mail privado em commits dos quais você faz push pela linha de comando, selecione **Block command line pushes that expose my email** (Bloquear pushes de linha de comando que mostrem meu e-mail). ![Opção para bloquear pushes de linha de comando que mostrem seus e-mails](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

### Leia mais

- "[Configurar endereço de e-mail do commit](/articles/setting-your-commit-email-address)"
