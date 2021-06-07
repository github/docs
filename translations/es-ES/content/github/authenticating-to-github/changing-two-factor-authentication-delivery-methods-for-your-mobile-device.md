---
title: Cambiar los métodos de entrega de autenticación de dos factores para tu dispositivo móvil
intro: Puedes alternar entre la recepción de código de autenticación a través de un mensaje de texto o una aplicación móvil.
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods/
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  free-pro-team: '*'
topics:
  - 2fa
---

{% note %}

**Nota:** El cambio de tu método de autenticación de dos factores invalida tu configuración de método de dos factores actual. Sin embargo, esto no afecta tus códigos de recuperación o configuración SMS de reserva. Puedes actualizar tus códigos de recuperación o configuración SMS de reserva o en la página de parámetros de seguridad de tu cuenta personal, si así lo deseas.

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Al lado de "SMS delivery" (Entrega de SMS), haz clic en **Edit** (Editar). ![Editar opciones de entrega de SMS](/assets/images/help/2fa/edit-sms-delivery-option.png)
4. En "Delivery options" (Opciones de entrega), haz clic en **Reconfigure two-factor authentication** (Reconfirgurar autenticación de dos factores). ![Cambiar tus opciones de entrega 2FA](/assets/images/help/2fa/2fa-switching-methods.png)
5. Decide si deseas configurar la autenticación de dos factores mediante una app móvil TOTP o un mensaje de texto. Para obtener más información, consulta "[Configurar autenticación de dos factores](/articles/configuring-two-factor-authentication)".
    - Para configurar la autenticación de dos factores mediante una app móvil TOTP, haz clic en **Set up using an app** (Configurar mediante una app).
    - Para configurar la autenticación de dos factores mediante un mensaje de texto (SMS), haz clic en **Set up using SMS** (Configurar mediante SMS).

### Leer más

- "[Acerca de la autenticación de dos factores](/articles/about-two-factor-authentication)"
- [Configurar métodos de recuperación de autenticación de dos factores](/articles/configuring-two-factor-authentication-recovery-methods)"
