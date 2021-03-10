---
title: Habilitar el inicio de sesión único de SAML para las organizaciones en tu cuenta de empresa
intro: 'Puedes controlar y asegurar el acceso a los recursos tales como repositorios, propuestas y solicitudes de cambios si habilitas el inicio de sesión único (SSO) de SAML y la autenticación centralizada mediante un IdP a través de todas las organizaciones que pertenezcan al acuenta emprearial.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Los propietarios de la empresa pueden habilitar el inicio de sesión único de SAML para las organizaciones en una cuenta empresarial.
versions:
  free-pro-team: '*'
---

### Acerca del inicio de sesión único de SAML para las cuentas empresariales

{% data reusables.saml.dotcom-saml-explanation %}Para obtener más información, consulta "[Acerca de la administración de identidad y accesos con el inicio de sesión único de SAML](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)".

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %}Para obtener más información, consulta la sección "[Visualizar y administrar el acceso de SAML de un usuario a tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)".

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %}Si no estás participando en el beta privado, SCIM no será compatible para las cuentas empresariales. Para obtener más información, consulta la sección "[Acerca del aprovisionamiento de usurios para las organizaciones en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)".

### Habilitar el inicio de sesión único de SAML para las organizaciones en tu cuenta de empresa

{% note %}

**Nota:** Habilitar la autenticación con inicio de sesión único de SAML para tu cuenta de empresa reemplazará cualquier configuración de SAML existente al nivel de la organización.

{% endnote %}

Para obtener información más detallada sobre cómo habilitar el SAML utilizando Okta, consulta la sección "[Configurar el inicio de sesión único de SAML y SCIM para tu cuenta empresarial utilizando Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "inicio de sesión único SAML", selecciona **Habilitar autenticación SAML**. ![Casilla de verificación para habilitar SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. En el campo **URL de inicio de sesión**, escribe el extremo HTTPS de tu IdP para las solicitudes de inicio de sesión único. Este valor se encuentra en la configuración de tu IdP. ![Campo para la URL a la que los miembros serán redireccionados cuando inicien sesión](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Opcionalmente, en el campo **Emisor**, teclea tu URL de emisor de SAML para verificar la autenticidad de los mensajes enviados. ![Campo para el nombre del emisor SAML](/assets/images/help/saml/saml_issuer.png)
8. En **Certificado público**, pega un certificado para verificar las respuestas de SAML. ![Campo para el certificado público de tu proveedor de identidad](/assets/images/help/saml/saml_public_certificate.png)
9. Para verificar la integridad de las solicitudes de tu emisor de SAML, haz clic en {% octicon "pencil" aria-label="The edit icon" %}. Posteriormente, en los menús desplegables de "Método de firma" y "Método de resumen", elige el algoritmo de hash que utiliza tu emisor de SAML. ![Menús desplegables para los algoritmos de hash del Método de firma y del Método de resumen usados por tu emisor SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar SAML SSO para tu empresa, haz clic en **Probar la configuración de SAML** para asegurarte de que la información que has ingresado sea correcta. ![Botón para probar la configuración de SAML antes de exigir el inicio de sesión único](/assets/images/help/saml/saml_test.png)
11. Haz clic en **Save ** (guardar).
