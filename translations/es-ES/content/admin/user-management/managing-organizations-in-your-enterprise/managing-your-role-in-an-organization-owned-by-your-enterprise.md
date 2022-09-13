---
title: Administración del rol en una organización que pertenece a la empresa
intro: Puedes administrar tu pertenencia a cualquier organización que pertenezca a tu empresa y cambiar el rol dentro de la organización.
permissions: Enterprise owners can manage their role in an organization owned by the enterprise.
versions:
  feature: enterprise-owner-join-org
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Manage your organization roles
ms.openlocfilehash: e7a95602fe103dcbccb80bc2dfec6a67f8b4b312
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884241'
---
## Acerca de la administración de roles

Puede optar por unirse a una organización que pertenece a su empresa como miembro o como propietario de la organización, cambiar su rol dentro de la organización o dejar la organización.

{% ifversion ghec %} {% warning %}

**Advertencia**: Si una organización usa SCIM para aprovisionar usuarios, la unión a la organización de esta manera podría tener consecuencias imprevistas. Para obtener más información, consulta "[Acerca de SCIM para las organizaciones](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% endwarning %} {% endif %}

Para obtener información sobre cómo administrar los roles de otras personas en una organización, consulta "[Administración de la pertenencia a la organización](/organizations/managing-membership-in-your-organization)" y "[Administración del acceso de las personas a la organización mediante roles](/organizations/managing-peoples-access-to-your-organization-with-roles)".

## Administración del rol con la configuración empresarial

Puede unirse a una organización que pertenece a su empresa y administrar su rol dentro de la organización directamente desde la configuración de su cuenta empresarial.

{% ifversion ghec %}

Si una organización aplica el inicio de sesión único (SSO) de SAML, no puede usar la configuración empresarial para unirse a la organización. En vez de esto, debes unirte a la organización utilizando su proveedor de identidad (IdP). Después, puede administrar su rol en la configuración de la empresa. Para obtener más información, vea "[Unión a una organización que aplica el inicio de sesión único de SAML](#joining-an-organization-that-enforces-saml-sso)".

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. En la pestaña **Organizations** (Organizaciones), a la derecha de la organización en la que quiere administrar su rol, seleccione el menú desplegable {% octicon "gear" aria-label="The gear icon" %} y haga clic en la acción que quiera realizar.

   ![Captura de pantalla del menú desplegable del icono de engranaje en una organización](/assets/images/help/business-accounts/change-role-in-org.png)

{% ifversion ghec %}

## Unión a una organización que aplica el inicio de sesión único de SAML

Si una organización aplica el inicio de sesión único de SAML, no puede usar la configuración empresarial para unirse a la organización. En vez de esto, debes unirte a la organización utilizando su proveedor de identidad (IdP).

1. Debe tener asignado acceso en el IdP a la aplicación de {% data variables.product.prodname_ghe_cloud %} que usa la organización. Si no puede configurar el IdP usted mismo, póngase en contacto con el administrador de su IdP.
1. Autentíquese en la organización mediante el inicio de sesión único de SAML.

   - Si la organización usa SCIM, acepte la invitación de la organización que generará la integración de SCIM.
   - Si la organización no usa SCIM, vaya a la siguiente dirección URL, reemplazando ORGANIZATION por el nombre de la organización y, después, siga las indicaciones para autenticarse.

    `https://github.com/orgs/ORGANIZATION/sso`

Después de unirse a la organización, puede usar la configuración empresarial para administrar su rol en la organización, como convertirse en propietario de la organización. Para más información, vea "[Administración del rol con la configuración empresarial](#managing-your-role-with-the-enterprise-settings)".

{% endif %}
