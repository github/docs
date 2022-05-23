---
title: Prepararse para aplicar el inicio de sesión único SAML en tu organización
intro: 'Antes de aplicar el inicio de sesión único de SAML en tu organización, deberías verificar la membresía de tu organización y configurar las configuraciones de conexión para tu proveedor de identidad.'
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepararse para requerir el SSO de SAML
---

{% data reusables.saml.ghec-only %}

{% data reusables.saml.when-you-enforce %} Antes de requerir el SSO de SAML en tu organización, debes revisar la membrecía de la misma, habilitar el SSO de SAML y revisar el acceso de SAML de los miembros de esta. Para obtener más información, consulta lo siguiente.

| Tarea                                                                                                     | Más información           |
|:--------------------------------------------------------------------------------------------------------- |:------------------------- |
| Agregar o eliminar miembros de tu organización                                                            | <ul><li>"[Invitar a los usuarios para que se unan a tu organización](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"</li><li>"[Eliminar a un miembro de tu organización](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)"</li></ul> |
| Conecta tu IdP a tu organización habilitando el SSO de SAML                                               | <ul><li>"[Conectar tu proveedor de identidad a tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)"</li><li>"[Habilitar y probar el inicio de sesión único de SAML para tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)"</li></ul> |
| Asegurar que los miembros de tu organización se hayan registrado y hayan vinculado sus cuentas con tu IdP | <ul><li>"[Visualizar y administrar el acceso de SAML de un miembro en tu organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"</li></ul> |

Después de que termines con estas tareas, puedes requerir el SSO de SAML en tu organización. Para obtener más información, consulta la sección "[Requerir el inicio de sesión único de SAML en tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)".

{% data reusables.saml.outside-collaborators-exemption %}
