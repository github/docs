---
title: Cambiar los métodos de entrega de autenticación de dos factores para tu dispositivo móvil
intro: Puedes alternar entre la recepción de código de autenticación a través de un mensaje de texto o una aplicación móvil.
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
shortTitle: Cambiar el método de entrega de 2FA
---

{% note %}

**Nota:** El cambiar tu método principal para una autenticación bifactorial invalida tu configuración actual de autenticación bifactorial, incluyendo tus códigos de recuperación. Mantén seguro tu conjunto de códigos de recuperación nuevo. El cambiar tu método principal de autenticación bifactorial no afecta tu configuración de recuperación por SMS, en caso de que la hayas configurado. Para obtener más información, consulta la sección "[Configurar los métodos de autenticación bifactoriales](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#setting-a-fallback-authentication-number)".

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
3. Al lado de "SMS delivery" (Entrega de SMS), haz clic en **Edit** (Editar). ![Editar opciones de entrega de SMS](/assets/images/help/2fa/edit-sms-delivery-option.png)
4. En "Delivery options" (Opciones de entrega), haz clic en **Reconfigure two-factor authentication** (Reconfirgurar autenticación de dos factores). ![Cambiar tus opciones de entrega 2FA](/assets/images/help/2fa/2fa-switching-methods.png)
5. Decide si deseas configurar la autenticación de dos factores mediante una app móvil TOTP o un mensaje de texto. Para obtener más información, consulta "[Configurar autenticación de dos factores](/articles/configuring-two-factor-authentication)".
    - Para configurar la autenticación de dos factores mediante una app móvil TOTP, haz clic en **Set up using an app** (Configurar mediante una app).
    - Para configurar la autenticación de dos factores mediante un mensaje de texto (SMS), haz clic en **Set up using SMS** (Configurar mediante SMS).

## Leer más

- "[Acerca de la autenticación de dos factores](/articles/about-two-factor-authentication)"
- [Configurar métodos de recuperación de autenticación de dos factores](/articles/configuring-two-factor-authentication-recovery-methods)"
