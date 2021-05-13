---
title: Administrar bot y cuentas de servicio con inicio de sesión único de SAML
intro: Las organizaciones que han habilitado el inicio de sesión único de SAML pueden conservar el acceso para los bot y las cuentas de servicio.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

Para conservar el acceso a los bot y a las cuentas de servicio, los administradores de la organización pueden [habilitar](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), pero **no** [implementar](/articles/enforcing-saml-single-sign-on-for-your-organization) el inicio de sesión único de SAML para sus organizaciones. Si debes implementar el inicio de sesión único de SAML para tu organización, puedes crear una identidad externa para el bot o la cuenta de servicio con tu proveedor de identidad (IdP).

{% warning %}

**Nota:** Si implementas el inicio de sesión único de SAML para tu organización y **no** tienes identidades externas configuradas para bots y cuentas de servicio con tu IdP, estas se eliminarán de tu organización.

{% endwarning %}

### Leer más

- "[Acerca de la administración de identidad y el acceso con el inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
