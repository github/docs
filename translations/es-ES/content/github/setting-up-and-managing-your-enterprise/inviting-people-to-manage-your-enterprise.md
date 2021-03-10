---
title: Invitar a las personas para que administren tu empresa
intro: Puedes invitar a personas a que se vuelvan propietarios de empresa o administradores de facturación en tu cuenta de empresa. También puedes eliminar propietarios de empresa o administradores de facturación que no necesiten seguir teniendo acceso a la cuenta de empresa.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account/
  - /articles/inviting-people-to-manage-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de invitar a personas a administrar tu cuenta de empresa

{% data reusables.enterprise-accounts.enterprise-administrators %} Para obtener más información, consulta la sección "[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)".

{% tip %}

**Sugerencia:**Para obtener más información acerca de administrar usuarios dentro de una organización que le pertenece a tu cuenta de empresa, consulta "[Administrar membresías de tu organización](/articles/managing-membership-in-your-organization)" y "[Administrar el acceso de personas a tu organización con roles](/articles/managing-peoples-access-to-your-organization-with-roles)."

{% endtip %}

### Invitar a un administrador de empresa a tu cuenta de empresa

Solo los propietarios de empresa pueden invitar a otras personas a que se conviertan en administradores de empresa.

Después de que invites a alguna persona a que se una a la cuenta de empresa, esta debe aceptar la invitación enviada por correo electrónico antes de poder acceder a la cuenta de empresa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. En la barra lateral izquierda, haz clic en **Administrators** (Administradores). ![Pestaña Administrators (Administradores) en la barra lateral izquierda](/assets/images/help/business-accounts/administrators-tab.png)
4. Arriba de la lista de administradores, haz clic en **Invite admin** (Invitar administrador). ![Botón Invite admin (Invitar administrador) arriba de la lista de propietarios de empresa](/assets/images/help/business-accounts/invite-admin-button.png)
5. Escribe el nombre de usuario, el nombre completo o la dirección de correo electrónico de la persona a la que quieres invitar a que se convierta en administrador de empresa, luego selecciona la persona adecuada en los resultados. ![Casilla modal con campo para escribir el nombre de usuario, el nombre completo o la dirección de correo electrónico de una persona y botón Invite (Invitar)](/assets/images/help/business-accounts/invite-admins-modal-button.png)
6. Selecciona **Owner** (Propietario) o **Billing Manager** (Gerente de facturación). ![Casilla modal con opciones de roles](/assets/images/help/business-accounts/invite-admins-roles.png)
7. Haz clic en **Send Invitation** (Enviar invitación). ![Botón Send invitation (Enviar invitación)](/assets/images/help/business-accounts/invite-admins-send-invitation.png)

### Eliminar un administrador de empresa de tu cuenta de empresa

Solo los propietarios de empresa pueden eliminar a otros administradores de empresa de la cuenta de empresa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. Junto al nombre de usuario de la persona que quieres eliminar, haz clic en {% octicon "gear" aria-label="The Settings gear" %}, luego haz clic en **Remove owner** (Eliminar propietario) o **Remove billing manager** (Eliminar gerente de facturación). ![Parámetros con opción del menú para eliminar un administrador de empresa](/assets/images/help/business-accounts/remove-admin.png)
