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
ms.openlocfilehash: e9cbf6e70fb5e07f9cd2c5e27d9b952921e18fdc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110060'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## Acerca de SAML con Okta

Puedes controlar el acceso a tu cuenta empresarial en {% data variables.product.product_name %} y en otras aplicaciones web desde una interface central si configuras dicha cuenta para que utilice el SSO de SAML con Okta, un proveedor de identidad (IdP).

El SSO de SAML controla y protege el acceso a los recursos de la cuenta empresarial como las organizaciones, repositorios, informes de problemas y solicitudes de extracción. Para obtener más información, consulte "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.saml.switching-from-org-to-enterprise %} Para más información, vea "[Cambio de la configuración de SAML de una organización a una cuenta de empresa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

Como alternativa, también puedes configurar el SSO de SAML utilizando Okta para una organización que utiliza {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, vea "[Configuración del inicio de sesión único de SAML y SCIM mediante Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)".

## Agregar la aplicación {% data variables.product.prodname_ghe_cloud %} en Okta

{% data reusables.saml.okta-sign-into-your-account %}
1. Ve a la aplicación [{% data variables.product.prodname_ghe_cloud %} - Cuentas empresariales](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) en Okta Integration Network y haz clic en **Agregar integración**.
{% data reusables.saml.okta-dashboard-click-applications %}
1. Opcionalmente, a la derecha de la "Etiqueta de aplicación", teclea un nombre descriptivo para la aplicación.
1. A la derecha de "Empresas de {% data variables.product.prodname_dotcom %}", teclea el nombre de tu cuenta empresarial. Por ejemplo, si la dirección URL de la cuenta empresarial es `https://github.com/enterprises/octo-corp`, escribe `octo-corp`.
1. Haga clic en **Done**(Listo).

## Habilitar y probar el SSO de SAML

{% data reusables.saml.okta-sign-into-your-account %} {% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.click-enterprise-account-application %} {% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %}
1. A la derecha de configuración, haz clic en **Editar**.
1. En "Atributos de SAML configurados", a la derecha de "grupos", utiliza el menú desplegable y selecciona **Coincidencias de regex**.
1. A la derecha del menú desplegable, escribe `.*.*`.
1. Haga clic en **Save**(Guardar).
{% data reusables.saml.okta-view-setup-instructions %}
1. Habilita SAML para tu cuenta empresarial utilizando la información en las instrucciones de configuración. Para obtener más información, consulte "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".
