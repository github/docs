---
title: Alterar os métodos de entrega da autenticação de dois fatores em dispositivos móveis
intro: Você pode alternar entre receber códigos de notificação por meio de uma mensagem de texto ou um aplicativo móvel.
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  fpt: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Altere método de entrega de 2FA
---

{% note %}

**Observação:** Mudar o seu método principal para a autenticação de dois fatores invalida a configuração atual de autenticação de dois fatores, incluindo os seus códigos de recuperação. Mantenha o seu novo conjunto de códigos de recuperação seguros. Mudar o seu método principal para autenticação de dois fatores não afeta sua configuração de SMS padrão, caso esteja configurado. Para obter mais informações, consulte "[Configurando métodos de recuperação de autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#setting-a-fallback-authentication-number)".

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
3. Ao lado de "SMS delivery" (Entrega de SMS), clique em **Edit** (Editar). ![Opções para editar entrega de SMS](/assets/images/help/2fa/edit-sms-delivery-option.png)
4. Em "Delivery options" (Opções de entrega), clique em **Reconfigure two-factor authentication** (Reconfigurar autenticação de dois fatores). ![Alternar as opções de entrega de 2FA](/assets/images/help/2fa/2fa-switching-methods.png)
5. Decida se deseja configurar a autenticação de dois fatores usando um app móvel TOTP ou uma mensagem de texto. Para obter mais informações, consulte "[Configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)".
    - Para configurar a autenticação de dois fatores usando um app móvel TOTP, clique em **Set up using an app** (Configurar usando um app).
    - Para configurar a autenticação de dois fatores usando mensagem de texto (SMS), clique em **Set up using SMS** (Configurar usando SMS).

## Leia mais

- [Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)"
- "[Configurar métodos de recuperação de autenticação de dois fatores](/articles/configuring-two-factor-authentication-recovery-methods)"
