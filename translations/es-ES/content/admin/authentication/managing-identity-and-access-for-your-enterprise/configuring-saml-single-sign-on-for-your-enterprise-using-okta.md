---
title: Configuring SAML single sign-on for your enterprise using Okta
intro: 'Puedes utilizar el inicio de sesión único (SSO, por sus siglas en inglés) del Lenguaje de Marcado para Confirmaciones (SAML, por sus siglas en inglés) con Okta para administrar automáticamente el acceso a tu cuenta empresarial en {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configurar el SAML con Okta
---

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.enterprise-accounts.emu-saml-note %}

## Acerca de SAML con Okta

Puedes controlar el acceso a tu cuenta empresarial en {% data variables.product.product_name %} y en otras aplicaciones web desde una interface central si configuras dicha cuenta para que utilice el SSO de SAML con Okta, un proveedor de identidad (IdP).

El SSO de SAML controla y protege el acceso a los recursos de la cuenta empresarial como las organizaciones, repositorios, informes de problemas y solicitudes de extracción. Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML para tu empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.saml.switching-from-org-to-enterprise %} Para obtener más información, consulta la sección "[Cambiar tu configuración de SAML de una cuenta de organización a una de empresa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

## Prerrequisitos

{% data reusables.saml.use-classic-ui %}

## Agregar la aplicación {% data variables.product.prodname_ghe_cloud %} en Okta

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
1. Da clic en "{% data variables.product.prodname_ghe_cloud %} - Cuentas Empresariales".
1. Da clic en **Agregar**.
1. Opcionalmente, a la derecha de la "Etiqueta de aplicación", teclea un nombre descriptivo para la aplicación. ![Campo de etiqueta de la aplicación](/assets/images/help/saml/okta-application-label.png)
1. A la derecha de "Empresas de {% data variables.product.prodname_dotcom %}", teclea el nombre de tu cuenta empresarial. Por ejemplo, si la URL de tu cuenta empresarial es `https://github.com/enterprises/octo-corp`, teclea `octo-corp`. ![Campo de Github Enterprises](/assets/images/help/saml/okta-github-enterprises.png)
1. Haz clic en **Done** (listo).

## Habilitar y probar el SSO de SAML

{% data reusables.saml.okta-admin-button %}
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

## Crear grupos en Okta

1. En Okta, crea un grupo para que empate con la organización que pertenezca a tu cuenta empresarial. El nombre de cada grupo debe coincidir con el nombre de cuenta de la organización (no así, con el nombre mostrado de la misma). Por ejemplo, si la URL de la organización es `https://github.com/octo-org`, nombra `octo-org` al grupo.
1. Asigna la aplicación que creaste para tu cuenta empresarial a cada grupo. {% data variables.product.prodname_dotcom %} recibirá todos los datos de los `groups` para cada usuario.
1. Agrega usuarios a los grupos basándote en las organizaciones a las cuales quisieras que pertenezcan dichos usuarios.

## Habilitar SAML utilizando el aprovisionamiento

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Debajo de "Aprovisionamiento de Usuarios de SAML", selecciona **Habilitar el aprovisionamiento de usuarios de SAML**. ![Casilla para habilitar el aprovisionamiento de usuarios con SAML](/assets/images/help/business-accounts/user-provisioning.png)
1. Haz clic en **Save ** (guardar).
1. Opcionalmente, habilita el desaprovisionamiento de usuarios de SAML.
   - Selecciona **Habilitar el resaprovisionamiento de usuarios de SAML**, y luego da clic en **Guardar**. ![Casilla para habilitar el desaprovisionamiento de usuarios con SAML](/assets/images/help/business-accounts/saml-deprovisioning.png)
   - Lee la advertencia y da clic en **Habilitar el desaprovisionamiento de SAML**. ![Botón para habilitar el desaprovisionamiento de usuarios de SAML](/assets/images/help/business-accounts/saml-deprovisioning-confirm.png)
