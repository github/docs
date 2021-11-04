---
title: Adding organizations to your enterprise
intro: You can create new organizations or invite existing organizations to manage within your enterprise.
product: '{% data reusables.gated-features.enterprise-accounts %}'
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
shortTitle: Agregar organizaciones
---

## Acerca de las organizaciones

Your enterprise account can own organizations. Members of your enterprise can collaborate across related projects within an organization. Para obtener más información, consulta "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

Enterprise owners can create new organizations within an enterprise account's settings or invite existing organizations to join an enterprise. To add an organization to your enterprise, you must create the organization from within the enterprise account settings.

## Crear una organización en tu cuenta de empresa

Las organizaciones nuevas que crees dentro de los parámetros de la cuenta de empresa se incluyen en la suscripción de la cuenta de empresa de {% data variables.product.prodname_ghe_cloud %}.

Los propietarios de empresas que creen una organización que es propiedad de una cuenta de empresa se convierten automáticamente en los propietarios de la organización. For more information about organization owners, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% data reusables.enterprise-accounts.access-enterprise %}
2. En la pestaña **Organizations** (Organizaciones), encima de la lista d elas organizaciones, haz clic en **New organization** (Organización nueva). ![Botón de la nueva organización](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. En "Organization name" (Nombre de la organización) escribe un nombre para tu organización. ![Campo para escribir el nombre de una organización nueva](/assets/images/help/business-accounts/new-organization-name-field.png)
4. Haz clic en **Create organization** (Crear organización).
5. En "Invite owners" (Invitar propietarios), escribe el nombre de usuario de una persona a la que te gustaría invitar para convertir en propietario de la organización, luego clic en **Invite** (Invitar). ![Campo de búsqueda del propietario de la organización y botón Invite (Invitar)](/assets/images/help/business-accounts/invite-org-owner.png)
6. Da clic en **Finalizar**.

## Invitar a una organización para que se una a tu cuenta empresarial

Los propietarios de las empresas pueden invitar a las organizaciones existentes para que se unan a su cuenta empresarial. Si la organización que quieres invitar ya pertenece a otra empresa, no podrás emitir una invitación hasta que la empresa anterior deje la propiedad de esta.

{% data reusables.enterprise-accounts.access-enterprise %}
2. En la pestaña **Organizaciones**, sobre la lista de las organizaciones, haz clic en **Invitar organización**. ![Invitar a una organización](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. Debajo de "Nombre de organización", comienza a teclear el nombre de la organización que quieras invitar y selecciónalo cuando se muestre en la lista desplegable. ![Buscar una organización](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Haz clic en **Invitar organización**.
5. Los propietarios de la organización recibirán un mensaje de correo electrónico invitándolos a unirse a la organización. Por lo menos el propietario necesita aceptar la invitación antes de que el proceso pueda continuar. Puedes cancelar o reenviar la invitación en cualquier momento antes de que un propietario la apruebe. ![Cancelar o reenviar](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. Una vez que un propietario de la organización haya aprobado la invitación, puedes ver su estado en la lista de invitaciones pendientes. ![Invitación pendiente](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. Haz clic en **Aprobar** para completar la transferencia o en **Cancelar** para cancelarla. ![Aprobar invitación](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)
