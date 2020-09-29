---
title: Bloquear pushes de linha de comando que mostrem endereços de e-mail pessoais
intro: 'Se você optou por manter seu endereço de e-mail privado ao realizar operações na web, também é possível optar por bloquear pushes de linha de comando que possam mostrar seu endereço de e-mail pessoal.'
redirect_from:
  - /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  free-pro-team: '*'
---

Quando você faz push de commits usando a linha de comando, o endereço de e-mail [definido no Git](/articles/setting-your-commit-email-address) é associado aos seus commits. Essa configuração impede você de fazer push de commits na linha de comando que usa seu endereço de e-mail pessoal.

{% data reusables.user_settings.about-commit-email-addresses %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.keeping_your_email_address_private %}
4. Para manter seu endereço de e-mail privado em commits dos quais você faz push pela linha de comando, selecione **Block command line pushes that expose my email** (Bloquear pushes de linha de comando que mostrem meu e-mail). ![Opção para bloquear pushes de linha de comando que mostrem seus e-mails](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

### Leia mais

- "[Configurar endereço de e-mail do commit](/articles/setting-your-commit-email-address)"
