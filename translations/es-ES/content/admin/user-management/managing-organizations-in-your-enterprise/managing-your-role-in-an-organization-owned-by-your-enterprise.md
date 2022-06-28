---
title: Administrar tu rol en una organización que le pertenece a tu empresa
intro: Puedes administrar tu membrecía en cualquier organización que le pertenezca a tu empresa y cambiar tu rol dentro de la organización.
permissions: Enterprise owners can manage their role in an organization owned by the enterprise.
versions:
  feature: enterprise-owner-join-org
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Administrar tus roles organizacionales
---

## Acerca de la administración de roles

Puedes elegir unirte a una organización que le pertenezca a tu empresa como miembro o como propietario de la organización, cambiar tu rol dentro de ella o salir de ella.

{% ifversion ghec %}
{% warning %}

**Advertencia**: si una organización utiliza SCIM para aprovisionar usuarios, el unirte a esta de esta forma podría tener consecuencias imprevistas. Para obtener más información, consulta la sección "[SCIM para las organizaciones](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% endwarning %}
{% endif %}

Para obtener más información sobre cómo administrar los roles de otras personas en una organización, consulta la sección "[Administrar la membrecía de tu organización](/organizations/managing-membership-in-your-organization)" y "[Administrar el acceso de las personas a tu organización con roles](/organizations/managing-peoples-access-to-your-organization-with-roles)".

## Administrar tu rol con los ajustes de la empresa

Puedes unirte a una organización que le pertenezca a tu empresa y administrar tu rol dentro de dicha organización directamente desde los ajustes de tu cuenta empresarial.

{% ifversion ghec %}

Si una organización requiere el inicio de sesión único (SSO) de SAML, no puedes utilizar los ajustes empresariales para unirte a la organización. En vez de esto, debes unirte a la organización utilizando su proveedor de identidad (IdP). Entonces, puedes administrar tu rol en tus ajustes de empresa. Para obtener más información, consulta la sección "[Unirte a una organización que requiera el SSO de SAML](#joining-an-organization-that-enforces-saml-sso)".

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. En la pestaña de **Organizaciones**, a la derecha de aquella en la cual quieras administrar tu rol, selecciona el menú desplegable {% octicon "gear" aria-label="The gear icon" %} y haz clic en la acción que quieras tomar.

   ![Captura de pantalla del menú desplegable para el icono de engrane de una organización](/assets/images/help/business-accounts/change-role-in-org.png)

{% ifversion ghec %}

## Unirte a una organización que requiere el SSO de SAML

Si una organización requiere el SSO de SAML, no puedes utilizar los ajustes de la empresa para unirte a dicha organización. En vez de esto, debes unirte a la organización utilizando su proveedor de identidad (IdP).

1. Se te debe asignar acceso en tu IdP para la aplicación de {% data variables.product.prodname_ghe_cloud %} que utiliza la organización. Si no puedes configurar tu IdP tú mismo, contacta a tu administrador de IdP.
1. Autentícate en la organización utilizando el SSO de SAML.

   - Si la organización utiliza SCIM, acepta la invitación de la organización que se generará mediante la integración de SCIM.
   - Si la organización no utiliza SCIM, visita la siguiente URL, reemplazando ORGANIZATION con el nombre de la organización luego sigue las instrucciones para autenticarte.

    `https://github.com/orgs/ORGANIZATION/sso`

Después de que te hayas unido a la organización, puedes utilizar los ajustes de la empresa para administrar tu rol en la organización, tal como convertirte en un propietario de dicha organización. Para obtener más información, consulta la sección "[Administrar tu rol con los ajustes empresariales](#managing-your-role-with-the-enterprise-settings)".

{% endif %}
