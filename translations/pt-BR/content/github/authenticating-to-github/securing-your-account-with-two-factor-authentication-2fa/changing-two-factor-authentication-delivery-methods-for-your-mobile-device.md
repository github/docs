---
title: Alterar os métodos de entrega da autenticação de dois fatores em dispositivos móveis
intro: Você pode alternar entre receber códigos de notificação por meio de uma mensagem de texto ou um aplicativo móvel.
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods/
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  free-pro-team: '*'
topics:
  - 2fa
---
{% note %}

**Observação:** alterar o método de autenticação de dois fatores invalida a configuração do método atual de dois fatores. No entanto, isso não afeta os códigos de recuperação nem retrocede a configuração de SMS. É possível atualizar os códigos de recuperação ou o retrocesso da configuração de SMS na página de configurações de segurança da sua conta pessoal se desejado.

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Ao lado de "SMS delivery" (Entrega de SMS), clique em **Edit** (Editar). ![Opções para editar entrega de SMS](/assets/images/help/2fa/edit-sms-delivery-option.png)
4. Em "Delivery options" (Opções de entrega), clique em **Reconfigure two-factor authentication** (Reconfigurar autenticação de dois fatores). ![Alternar as opções de entrega de 2FA](/assets/images/help/2fa/2fa-switching-methods.png)
5. Decida se deseja configurar a autenticação de dois fatores usando um app móvel TOTP ou uma mensagem de texto. Para obter mais informações, consulte "[Configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)".
    - Para configurar a autenticação de dois fatores usando um app móvel TOTP, clique em **Set up using an app** (Configurar usando um app).
    - Para configurar a autenticação de dois fatores usando mensagem de texto (SMS), clique em **Set up using SMS** (Configurar usando SMS).

### Leia mais

- [Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)"
- "[Configurar métodos de recuperação de autenticação de dois fatores](/articles/configuring-two-factor-authentication-recovery-methods)"
