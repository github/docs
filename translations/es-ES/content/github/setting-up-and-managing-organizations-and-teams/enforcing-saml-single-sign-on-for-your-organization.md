---
title: Hacer cumplir el inicio de sesión único de SAML para tu organización
intro: Los propietarios y los administradores de la organización pueden hacer cumplir el inicio de sesión único de SAML para que todos los miembros de la organización se tengan que autenticar a través de un proveedor de identidad.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
versions:
  free-pro-team: '*'
---

Si haces cumplir el inicio de sesión único de SAML en tu organización, todo miembro que no se haya autenticado mediante tu proveedor de identidad de SAML (IdP), incluidos los administradores, será eliminado de la organización y recibirá un correo electrónico en el que se le notificará la eliminación. También se eliminarán los bots y las cuentas de servicio que no tengan identidades externas configuradas en el IdP de tu organización. Para obtener más información acerca de los bots y las cuentas de servicio, consulta "[Administrar los bots y las cuentas de servicio con el inicio de sesión único de SAML](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)". Puedes restaurar los miembros de la organización una vez que realizas el inicio de sesión único sin problemas.

Si tu organización le pertenece a una cuenta de empresa, al habilitar SAML para la cuenta de empresa, se reemplazará la configuración SAML al nivel de organización. Para obtener más información, consulta la sección "[Requerir los parámetros de seguridad en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)".

{% tip %}

**Sugerencia:**{% data reusables.saml.testing-saml-sso %}

{% endtip %}

1. Habilita y prueba el inicio de sesión único de SAML para tu organización. Para obtener más información acerca de este proceso, consulta "[Habilitar y probar el inicio de sesión único para tu organización](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)".
2. Luego de seleccionar **Requerir autenticación del inicio de sesión único de SAML para todos los miembros de la organización SAML SSO Org**, se mostrarán los miembros de la organización que no se hayan autenticado mediante tu IdP. Si haces cumplir el inicio de sesión único de SAML, estos miembros se eliminarán de la organización.
3. Haz clic en **Hacer cumplir el inicio de sesión único de SAML** para hacer cumplir el inicio de sesión único de SAML y eliminar a los miembros de la organización que figuren en la lista.

### Leer más

- "[Acerca de la administración de identidad y el acceso con el inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
