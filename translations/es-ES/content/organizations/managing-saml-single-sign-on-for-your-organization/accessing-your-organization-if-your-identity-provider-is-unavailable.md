---
title: Acceder a tu organización si tu proveedor de identidad no está disponible
intro: 'Los administradores de la organización pueden iniciar sesión en {% data variables.product.product_name %} incluso si su proveedor de identidad no está disponible al saltear el inicio de sesión único y usar sus códigos de recuperación.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/accessing-your-organization-if-your-identity-provider-is-unavailable
  - /github/setting-up-and-managing-organizations-and-teams/accessing-your-organization-if-your-identity-provider-is-unavailable
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

Los administradores de la organización pueden usar [uno de los códigos de reuperación descargados o guardados](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)para saltear un inicio de sesión único. Es posible que los hayas guardado en un administrador de contraseñas, como [LastPass](https://lastpass.com/), [1Password](https://1password.com/), o [Keeper](https://keepersecurity.com/).

{% note %}

**Nota:** Solo puedes usar los códigos de recuperación una vez y debes usarlos en un orden consecutivo. Los códigos de recuperación garantizan el acceso durante 24 horas.

{% endnote %}

1. En la parte inferior del diálogo de inicio de sesión único, haz clic en **Use a recovery code** (Usar un código de recuperación) para saltear el inicio de sesión único. ![Enlace para ingresar tu código de recuperación](/assets/images/help/saml/saml_use_recovery_code.png)
2. En el campo "Recovery Code" (Código de recuperación), escribe tu código de recuperación. ![Código para ingresar tu código de recuperación](/assets/images/help/saml/saml_recovery_code_entry.png)
3. Da clic en **Verificar**. ![Botón para verificar tu código de recuperación](/assets/images/help/saml/saml_verify_recovery_codes.png)

Una vez que has usado un código de verificación, asegúrate de anotar que ya no es válido. No podrás volver a usar el código de recuperación.

### Leer más

- [Acerca de la administración de acceso e identidad con SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
