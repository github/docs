---
title: Prepararse para aplicar el inicio de sesión único SAML en tu organización
intro: 'Antes de aplicar el inicio de sesión único de SAML en tu organización, deberías verificar la membresía de tu organización y configurar las configuraciones de conexión para tu proveedor de identidad.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  free-pro-team: '*'
---

Cuando [aplicas el inicio de sesión único de SAML](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) en tu organización, los miembros que no se han autenticado por medio de tu proveedor de identidad (IdP) serán eliminados de la organización y recibirán un correo electrónico informándoles acerca de la eliminación.

Antes de aplicar un SSO de SAML en tu organización, deberías:

- [Agregar](/articles/inviting-users-to-join-your-organization) o [eliminar](/articles/removing-a-member-from-your-organization) miembros de tu organización si es necesario.
- Si no lo has hecho, conectar tu IdP a tu organización. Para obtener más información, consulta "[Conectar tu proveedor de identidad a tu organización](/articles/connecting-your-identity-provider-to-your-organization)."
- Asegurar que los miembros de tu organización se hayan registrado y hayan vinculado sus cuentas con tu IdP.

{% data reusables.saml.outside-collaborators-exemption %}

### Leer más

- "[Acerca de la administración de acceso e identidad con el inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
