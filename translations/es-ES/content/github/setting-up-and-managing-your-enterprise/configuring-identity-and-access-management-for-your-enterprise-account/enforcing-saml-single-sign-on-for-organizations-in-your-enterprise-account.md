---
title: Requerir el inicio de sesión único de SAML para las organizaciones en tu cuenta empresarial
intro: 'Puedes controlar y asegurar el acceso a los recursos como repositorios, propuestas y solicitudes de cambio al requerir el inicio de sesión único (SSO) de SAML y la autenticación centralizada a través de un IdP a través de todas las organizaciones que pertenecen a una cuenta empresarial.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can enforce SAML single sign-on for organizations in an enterprise account.
versions:
  fpt: '*'
topics:
  - Enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
shortTitle: Requerir SAML
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## Acerca del inicio de sesión único de SAML para las cuentas empresariales

{% data reusables.saml.dotcom-saml-explanation %}Para obtener más información, consulta "[Acerca de la administración de identidad y accesos con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %}Para obtener más información, consulta la sección "[Visualizar y administrar el acceso de SAML de un usuario a tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)".

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %}

## Requerir el inicio de sesión único de SAML para las organizaciones en tu cuenta empresarial

{% note %}

**Notas:**

- Cuando hablitas el SSO de SAML para tu empresa, la configuración de esta ignorará cualquier configuración de SAML a nivel organizacional. {% data reusables.saml.switching-from-org-to-enterprise %} Para obtener más información, consulta la sección "[Cambiar tu configuración de SAML de una cuenta de organización a una de empresa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".
- Cuando requieres el SSO de SAML para una organización, {% data variables.product.company_short %} elimina cualquier miembro de la organización que no se haya autenticado con éxito en tu IdP de SAML. Cuando requieres el SSO de SAML para tu empresa, {% data variables.product.company_short %} no elimina a los miembros de dicha empresa que no se hayan autenticado exitosamente con tu IdP de SAML. La siguiente vez que un miembro acceda a los recursos empresariales, este deberá autenticarse con tu IdP de SAML.

{% endnote %}

Para obtener información más detallada sobre cómo habilitar el SAML utilizando Okta, consulta la sección "[Configurar el inicio de sesión único de SAML para tu cuenta empresarial utilizando Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "Inicio de sesión único de SAML", selecciona **Requerir autenticación SAML**. ![Casilla de verificación para habilitar SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. En el campo **URL de inicio de sesión**, escribe el extremo HTTPS de tu IdP para las solicitudes de inicio de sesión único. Este valor se encuentra en la configuración de tu IdP. ![Campo para la URL a la que los miembros serán redireccionados cuando inicien sesión](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Opcionalmente, en el campo **Emisor**, teclea tu URL de emisor de SAML para verificar la autenticidad de los mensajes enviados. ![Campo para el nombre del emisor SAML](/assets/images/help/saml/saml_issuer.png)
8. En **Certificado público**, pega un certificado para verificar las respuestas de SAML. ![Campo para el certificado público de tu proveedor de identidad](/assets/images/help/saml/saml_public_certificate.png)
9. Para verificar la integridad de las solicitudes de tu emisor de SAML, haz clic en {% octicon "pencil" aria-label="The edit icon" %}. Posteriormente, en los menús desplegables de "Método de firma" y "Método de resumen", elige el algoritmo de hash que utiliza tu emisor de SAML. ![Menús desplegables para los algoritmos de hash del Método de firma y del Método de resumen usados por tu emisor SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar SAML SSO para tu empresa, haz clic en **Probar la configuración de SAML** para asegurarte de que la información que has ingresado sea correcta. ![Botón para probar la configuración de SAML antes de exigir el inicio de sesión único](/assets/images/help/saml/saml_test.png)
11. Haz clic en **Save ** (guardar).
