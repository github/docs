---
title: Hacer cumplir el inicio de sesión único de SAML para tu organización
intro: Los propietarios y los administradores de la organización pueden requerir el inicio de sesión único de SAML para que todos los miembros de la organización se tengan que autenticar a través de un proveedor de identidad (IdP).
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enforcing-saml-single-sign-on-for-your-organization
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: Hacer cumplir el inicio de sesión único de SAML
---

## Acerca de requerir el SSO de SAML en tu organización

Cuando habilitas el SSO de SAML, {% data variables.product.prodname_dotcom %} mostrará a los miembros que visitan los recursos de la organización en {% data variables.product.prodname_dotcom_the_website %} para autenticarse en tu IdP, lo cual vincula la cuenta de usuario del miembro a una identidad en el IdP. Los mimebros aún pueden acceder a los recursos organizacionales antes de autenticarse con tu IdP.

![Anuncio con mensaje para autenticarse mediante el SSO de SAML para acceder a una organización](/assets/images/help/saml/sso-has-been-enabled.png)

También puedes requerir el SSO de SAML para tu organización. {% data reusables.saml.when-you-enforce %} Cuando esto se requiere, se elimina de la organizacióna cualquier miembro y administrador que no se hayan autenticado mediante el IdP. {% data variables.product.company_short %} envía una notificación de correo electrónico a cada usuario eliminado.

Puedes restaurar los miembros de la organización una vez que realizas el inicio de sesión único sin problemas. Los ajustes y privilegios de acceso de los usuarios eliminados se guardan por tres meses y se pueden almacenar durante este periodo de tiempo. Para obtener más información, consulta "[Reinstalar un miembro antiguo de tu organización](/enterprise/{{ page.version }}/user/articles/reinstating-a-former-member-of-your-organization)".

Los bots y cuentas de servicio que no tengan identidades externas configuradas en el IdP de tu organización también se eliminarán cuando requieras el SSO de SAML. Para obtener más información acerca de los bots y las cuentas de servicio, consulta la sección "[Administrar los bots y las cuentas de servicio con el inicio de sesión único de SAML](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)".

Si tu organización le pertenece a una cuenta empresarial, el requerir SAML para dicha cuenta anulará la configuración de SAML a nivel de organización y requerirá el SSO de SAML para todas las organizaciones que pertenezcan a la empresa. Para obtener más información, consulta la sección "[Requerir el inicio de sesión único de SAML para las organizaciones de tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account)".

{% tip %}

**Sugerencia:**{% data reusables.saml.testing-saml-sso %}

{% endtip %}

## Requerir el SSO de SAML para tu organización

1. Habilita y prueba el SSO de SAML para tu organización y luego autentícate con tu IdP por lo menos una vez. Para obtener más información, consulta "[Habilitar y probar el inicio de sesión único para tu organización](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)".
1. Prepárate para requerir el SSO de SAML para tu organización. Para obtener más información, consulta "[Preparación para exigir inicio de sesión único SAML en tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization)".
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Debajo de "Inicio de sesión único de SAML", selecciona **Requerir la autenticación con el SSO de SAML para todos los miembros de la organización _ORGANIZATION_**. ![Casilla de verificación de "Requerir autenticación con el SSO de SAML"](/assets/images/help/saml/require-saml-sso-authentication.png)
1. Si cualquiera de los miembros de la organización no se autentica a través de tu IdP, {% data variables.product.company_short %} lo mostrará. Si requieres el SSO de SAML, {% data variables.product.company_short %} eliminará a los miembros de la organización. Revisa la advertencia y haz clic en **Eliminar a los miembros y requerir el inicio de sesión único de SAML**. ![Diálogo de "Confirmar que se requiere el SSO de SAML" con lista de miembros a eliminar de la organización](/assets/images/help/saml/confirm-saml-sso-enforcement.png)
1. Debajo de "Códigos de recuperación del inicio de sesión único", revisa tus códigos de recuperación. Almacena los códigos de recuperación en una ubicación segura, como un administrador de contraseñas.

## Leer más

- "[Visualizar y administrar el acceso de SAML de un miembro a tu organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"
