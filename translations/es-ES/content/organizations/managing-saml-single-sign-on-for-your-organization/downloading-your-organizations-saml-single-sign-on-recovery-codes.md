---
title: Descargar los códigos de recuperación de inicio de sesión único SAML de tu organización
intro: 'Los administradores de la organización deben descargar los códigos de recuperación de inicio de sesión único SAML de la organización para asegurarse de poder acceder a {% data variables.product.product_name %} aun cuando el proveedor de identidad no se encuentre disponible para la organización.'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  free-pro-team: '*'
topics:
  - organizations
  - equipos
---

Los códigos de recuperación no se deben compartir ni distribuir. Te recomendamos guardarlos con un administrador de contraseñas, como [LastPass](https://lastpass.com/), [1Password](https://1password.com/), o [Keeper](https://keepersecurity.com/).

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
5. En "Inicio de sesión único SAML", en la nota acerca de los códigos de recuperación, haz clic en **Guardar tus códigos de recuperación**. ![Enlace para ver y guardar tus códigos de recuperación](/assets/images/help/saml/saml_recovery_codes.png)
6. Guarda tus códigos de recuperación haciendo clic en **Download** (Descargar), **Print** (Imprimir) o **Copy** (Copiar). ![Botones para descargar, imprimir o copiar tus códigos de recuperación](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  **Nota:** Tus códigos de recuperación te ayudarán a acceder nuevamente a {% data variables.product.product_name %} si tu IdP no está disponible. Si generas nuevos códigos de recuperación, los códigos de recuperación que se muestran en la página "Códigos de recuperación de inicio de sesión único" se actualizarán automáticamente.

  {% endnote %}

7. Una vez que usas un código de recuperación para obtener acceso nuevamente a {% data variables.product.product_name %}, no puedes volver a usarlo. El acceso a {% data variables.product.product_name %} solo estará disponible durante 24 horas antes de que se te solicite que inicies sesión usando inicio de sesión único.

### Leer más

- "[Acerca de la administración de identidad y el acceso con el inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Acceder a tu organización cuando tu proveedor de identidad no está disponible](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)"
