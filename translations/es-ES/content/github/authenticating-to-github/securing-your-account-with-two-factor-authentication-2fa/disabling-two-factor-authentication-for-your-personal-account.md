---
title: Inhabilitar la autenticación de dos factores para tu cuenta personal
intro: 'Si inhabilitas la autenticación de dos factores para tu cuenta personal, puedes perder acceso a las organizaciones a las que perteneces.'
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/disabling-two-factor-authentication-for-your-personal-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2FA
---

Te recomendamos encarecidamente que uses la autenticación de dos factores para proteger tu cuenta. Si necesitas inhabilitar la autenticación de dos factores, te recomendamos habilitarla nuevamente lo antes posible.

{% warning %}

**Advertencia:** Si eres un miembro{% if currentVersion == "free-pro-team@latest" %}, gerente de facturación,{% endif %} o colaborador externo para un repositorio público o para una organización que requiere de autenticación bifactorial e inhabilitas la 2FA, se te eliminará automáticamente de la organización y perderás tu acceso a sus repositorios. Para volver a obtener acceso a la organización, habilita nuevamente la autenticación de dos factores y comunícate con un propietario de la organización.

{% endwarning %}

Si tu organización requiere autenticación de dos factores y eres un miembro, propietario o colaborador externo de un repositorio privado de tu organización, primero debes abandonar la organización para poder inhabilitar la autenticación de dos factores.

Para eliminarte a ti mismo de la organización:
 - Como miembro o propietario de la organización, consulta "[Eliminarte a ti mismo de una organización](/articles/removing-yourself-from-an-organization/)".
 - Como colaborador externo, solicita a un propietario de la organización o administrador de un repositorio que te elimine de los repositorios de la organización. Para obtener más información, consulta "[Ver los roles de las personas en una organización](/articles/viewing-people-s-roles-in-an-organization)" y "[Eliminar un colaborador externo de un repositorio de la organización](/articles/removing-an-outside-collaborator-from-an-organization-repository/)".

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Da clic en **Inhabilitar**. ![Botón Inhabilitar autenticación de dos factores](/assets/images/help/2fa/disable-two-factor-authentication.png)

### Leer más

- "[Acerca de la autenticación de dos factores](/articles/about-two-factor-authentication)"
- [Configurar autenticación de dos factores](/articles/configuring-two-factor-authentication)"
- [Configurar métodos de recuperación de autenticación de dos factores](/articles/configuring-two-factor-authentication-recovery-methods)"
