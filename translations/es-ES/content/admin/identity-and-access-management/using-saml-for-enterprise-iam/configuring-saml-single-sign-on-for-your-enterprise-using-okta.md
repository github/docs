---
title: Configurar el inicio de sesión único de SAML para tu empresa utilizando Okta
intro: 'Puedes utilizar el inicio de sesión único (SSO, por sus siglas en inglés) del Lenguaje de Marcado para Confirmaciones (SAML, por sus siglas en inglés) con Okta para administrar automáticamente el acceso a tu cuenta empresarial en {% data variables.product.product_name %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configure SAML SSO with Okta
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## Acerca de SAML con Okta

Puedes controlar el acceso a tu cuenta empresarial en {% data variables.product.product_name %} y en otras aplicaciones web desde una interface central si configuras dicha cuenta para que utilice el SSO de SAML con Okta, un proveedor de identidad (IdP).

El SSO de SAML controla y protege el acceso a los recursos de la cuenta empresarial como las organizaciones, repositorios, informes de problemas y solicitudes de extracción. Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML para tu empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.saml.switching-from-org-to-enterprise %} Para obtener más información, consulta la sección "[Cambiar tu configuración de SAML de una cuenta de organización a una de empresa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

Como alternativa, también puedes configurar el SSO de SAML utilizando Okta para una organización que utiliza {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML y SCIM utilizando Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)".

## Agregar la aplicación {% data variables.product.prodname_ghe_cloud %} en Okta

{% data reusables.saml.okta-sign-into-your-account %}
1. Navigate to the [{% data variables.product.prodname_ghe_cloud %} - Enterprise Accounts](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) application in the Okta Integration Network and click **Add Integration**.
{% data reusables.saml.okta-dashboard-click-applications %}
1. Opcionalmente, a la derecha de la "Etiqueta de aplicación", teclea un nombre descriptivo para la aplicación.
1. A la derecha de "Empresas de {% data variables.product.prodname_dotcom %}", teclea el nombre de tu cuenta empresarial. Por ejemplo, si la URL de tu cuenta empresarial es `https://github.com/enterprises/octo-corp`, teclea `octo-corp`.
1. Haz clic en **Done** (listo).

## Habilitar y probar el SSO de SAML

{% data reusables.saml.okta-sign-into-your-account %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
1. A la derecha de los Ajustes, da clic en **Editar**.
1. Debajo de "Atributos de SAML Configurados", a la derecha de "grupos"; utiliza el menú desplegable y selecciona **Coincidencias de regex**.
1. A la derecha del menú desplegable, teclea `.*.*`.
1. Haz clic en **Save ** (guardar).
{% data reusables.saml.okta-view-setup-instructions %}
1. Habilita SAML para tu cuenta empresarial utilizando la información en las instrucciones de configuración. Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML para tu empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".
