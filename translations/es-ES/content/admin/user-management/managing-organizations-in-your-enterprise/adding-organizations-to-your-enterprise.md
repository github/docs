---
title: Agregar organizaciones a tu empresa
intro: 'Puedes agregar organizaciones para administrar dentro de tu empresa mediante la creación de una nueva organización, la invitación a una organización existente o la transferencia de una organización desde una cuenta empresarial diferente.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Add organizations
permissions: Enterprise owners can add organizations to an enterprise.
ms.openlocfilehash: 7b5627eb89e7e5356716a9cd2a9dfe03fd455270
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127623'
---
## Acerca de la adición de organizaciones a la cuenta empresarial

Tu cuenta empresarial puede ser propietaria de organizaciones. Los miembros de tu empresa pueden colaborar a lo largo de los proyectos relacionados dentro de una organización. Para obtener más información, vea "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

Puedes agregar organizaciones a la cuenta de empresa. Si no usas {% data variables.product.prodname_emus %}, puedes agregar organizaciones existentes en {% data variables.location.product_location %} a tu empresa. No se puede agregar una organización existente desde un {% data variables.enterprise.prodname_emu_enterprise %} a una empresa diferente.

{% data reusables.enterprise.create-an-enterprise-account %} Para obtener más información, vea "[Crear una cuenta de empresa](/admin/overview/creating-an-enterprise-account)".

Después de agregar una organización existente a tu empresa, los recursos de la organización permanecen accesibles para los miembros en las mismas direcciones URL y se aplican los siguientes cambios.

- Los miembros de la organización se convertirán en miembros de la empresa y {% data variables.product.company_short %} facturarán a la cuenta empresarial por el uso de la organización. Debes asegurarte de que la cuenta de empresa tiene suficientes licencias para dar cabida a los nuevos miembros. Para obtener más información, consulta "[Acerca de la facturación de la empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".
- Los propietarios de la empresa pueden administrar su rol dentro de la organización. Para más información, vea "[Administración del rol en una organización que pertenece a la empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".
- Las directivas aplicadas a la empresa se aplicarán a la organización. Para obtener más información, consulta «[Acerca de directivas de empresa](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)».
- Si el inicio de sesión único de SAML está configurado para la cuenta de la empresa, la configuración de SAML de la empresa se aplicará a la organización. Si la organización ha usado el inicio de sesión único de SAML, la configuración de la cuenta empresarial reemplazará a la configuración de la organización. SCIM no está disponible para las cuentas empresariales, por lo que SCIM se deshabilitará para la organización. Para obtener más información, consulta «[Configuración del inicio de sesión único de SAML para tu empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)» y «[Cambio de la configuración de SAML de una organización a una cuenta empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)».
- Si el inicio de sesión único de SAML se ha configurado para la organización, los {% data variables.product.pat_generic %} de los miembros o las claves SSH existentes de los miembros que estaban autorizadas para acceder a los recursos de la organización obtendrán autorización para acceder a los mismos recursos. Para acceder a otras organizaciones propiedad de la empresa, los miembros deben autorizar el {% data variables.product.pat_generic %} o la clave. Para más información, consulta "[Autorización de {% data variables.product.pat_generic %} para su uso con el inicio de sesión único de SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" y "[Autorización de una clave SSH para su uso con el inicio de sesión único de SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".
- Si la organización estaba conectada a {% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %} mediante {% data variables.product.prodname_github_connect %}, agregar la organización a una cuenta de empresa no actualizará la conexión. Las características de {% data variables.product.prodname_github_connect %} ya no funcionarán para la organización. Para seguir usando {% data variables.product.prodname_github_connect %}, debes deshabilitar y volver a habilitar la característica. Para obtener más información, consulte los siguientes artículos.

  - "[Administración de {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)" en la documentación de {% data variables.product.prodname_ghe_server %}
  - "[Administración de {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)" en la documentación de {% data variables.product.prodname_ghe_managed %}
- Si la organización ha usado aplicaciones de {% data variables.product.prodname_marketplace %} facturadas, la organización puede seguir usando las aplicaciones, pero debe pagar al proveedor directamente. Para obtener más información, ponte en contacto con el proveedor de la aplicación.
- Los cupones se quitarán de la organización. Para volver a aplicar el cupón, [ponte en contacto con nuestro equipo de ventas](https://github.com/enterprise/contact).

## Crear una organización en tu cuenta de empresa

Las organizaciones nuevas que crees dentro de los parámetros de la cuenta de empresa se incluyen en la suscripción de la cuenta de empresa de {% data variables.product.prodname_ghe_cloud %}.

Los propietarios de empresas que creen una organización que es propiedad de una cuenta de empresa se convierten automáticamente en los propietarios de la organización. Para obtener más información sobre los propietarios de la organización, vea "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% data reusables.enterprise-accounts.access-enterprise %}
2. En la pestaña **Organizations** (Organizaciones), encima de la lista de organizaciones, haga clic en **New organization** (Nueva organización).
  ![Botón de nueva organización](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. En "Organization name" (Nombre de la organización) escribe un nombre para tu organización.
  ![Campo para escribir el nombre de una organización nueva](/assets/images/help/business-accounts/new-organization-name-field.png)
4. Haga clic en **Create organization** (Crear organización).
5. En "Invite owners" (Invitar propietarios), escriba el nombre de usuario de una persona a la que le gustaría invitar para convertir en propietario de la organización y, luego, haga clic en **Invite** (Invitar).
  ![Campo de búsqueda del propietario de la organización y botón Invite (Invitar)](/assets/images/help/business-accounts/invite-org-owner.png)
6. Haga clic en **Finalizar**

## Invitar a una organización para que se una a tu cuenta empresarial

Los propietarios de las empresas pueden invitar a las organizaciones existentes para que se unan a su cuenta empresarial. Si la organización a la que quieres invitar ya pertenece a otra cuenta de empresa, debes ser propietario de ambas cuentas de empresa o la empresa anterior debe renunciar primero a la propiedad de la organización. Para obtener más información, vea "[Eliminar una organización de su empresa](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)". 

{% data reusables.enterprise-accounts.access-enterprise %}
1. En la pestaña **Organizations** (Organizaciones), encima de la lista de organizaciones, haga clic en **Invite organization** (Invitar a una organización).
![Invitar a una organización](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. Debajo de "Nombre de organización", comienza a teclear el nombre de la organización que quieras invitar y selecciónalo cuando se muestre en la lista desplegable.
![Buscar una organización](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Haga clic en **Invite organization** (Invitar a una organización).
5. Los propietarios de organizaciones recibirán un mensaje de correo electrónico con la invitación para unirse a la empresa. Por lo menos el propietario necesita aceptar la invitación antes de que el proceso pueda continuar. Puedes cancelar o reenviar la invitación en cualquier momento antes de que un propietario la apruebe.
![Cancelar o reenviar](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. Una vez que un propietario de la organización haya aprobado la invitación, puedes ver su estado en la lista de invitaciones pendientes.
![Invitación pendiente](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. Para completar la transferencia, haz clic en **Aprobar**.
![Aprobar invitación](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)

## Transferencia de una organización entre cuentas de empresa

Los propietarios de la empresa pueden transferir organizaciones existentes entre cuentas de empresa. Debes ser propietario de la empresa en ambas cuentas de empresa. 

{% note %}

**Nota:** no se puede transferir una organización existente a o desde un {% data variables.enterprise.prodname_emu_enterprise %}.  

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Junto a la organización que quieras transferir, selecciona la lista desplegable {% octicon "gear" width="16" aria-label="Gear" %} y, a continuación, haz clic en **Transferir organización**. 
![Captura de pantalla del botón Transferir](/assets/images/help/business-accounts/org-transfer-button.png)
1. Selecciona el menú desplegable **Seleccionar empresa**, empieza a escribir el nombre de la empresa de destino y selecciona la empresa cuando aparezca en la lista desplegable.
![Captura de pantalla de la lista desplegable de empresas](/assets/images/help/business-accounts/org-transfer-select-enterprise.png)
2. Haz clic en **Revisar transferencia**.
3. Para confirmar la transferencia, haz clic en **Transferir organización**.
![Captura de pantalla del botón Transferir organización](/assets/images/help/business-accounts/org-transfer-confirm-button.png)
