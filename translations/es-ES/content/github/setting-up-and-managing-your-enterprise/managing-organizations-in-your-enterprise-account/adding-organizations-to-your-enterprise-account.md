---
title: Agregar organizaciones en tu cuenta de empresa
intro: Puedes crear organizaciones nuevas o invitar a organizaciones existentes para que se administren con tu cuenta empresarial.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
versions:
  fpt: '*'
topics:
  - Enterprise
shortTitle: Agregar organizaciones
---

Los propietarios de las empresas pueden crear organizaciones nuevas dentro de los ajustes de una cuenta empresarial o invitar a organizaciones existentes para que se unan a una empresa.

Para agregar una organización a tu cuenta de empresa, debes crear la organización desde el interior de los parámetros de la cuenta de empresa.

## Crear una organización en tu cuenta de empresa

Las organizaciones nuevas que crees dentro de los parámetros de la cuenta de empresa se incluyen en la suscripción de la cuenta de empresa de {% data variables.product.prodname_ghe_cloud %}. Para más información sobre la colaboración en organizaciones, consulta "[Configurar y administrar organizaciones y equipo](/categories/setting-up-and-managing-organizations-and-teams)".

Los propietarios de empresas que creen una organización que es propiedad de una cuenta de empresa se convierten automáticamente en los propietarios de la organización. Para obtener más información sobre los propietarios de organizaciones, consulta "[Niveles de permiso de una organización](/articles/permission-levels-for-an-organization)."

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
