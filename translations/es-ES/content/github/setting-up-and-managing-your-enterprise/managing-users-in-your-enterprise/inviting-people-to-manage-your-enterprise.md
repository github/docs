---
title: Invitar a las personas para que administren tu empresa
intro: 'You can {% ifversion fpt %}invite people to become enterprise owners or billing managers for{% elsif ghes %}add enterprise owners to{% endif %} your enterprise account. You can also remove enterprise owners {% ifversion fpt %}or billing managers {% endif %}who no longer need access to the enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: 'Enterprise owners can {% ifversion fpt %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account/
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Invitar personas para que administren
---

## About users who can manage your enterprise account

{% data reusables.enterprise-accounts.enterprise-administrators %} For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)."

{% ifversion ghes %}

If you want to manage owners and billing managers for an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, see "[Inviting people to manage your enterprise](/free-pro-team@latest/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)" in the {% data variables.product.prodname_dotcom_the_website %} documentation.

{% endif %}

{% tip %}

**Sugerencia:**Para obtener más información acerca de administrar usuarios dentro de una organización que le pertenece a tu cuenta de empresa, consulta "[Administrar membresías de tu organización](/articles/managing-membership-in-your-organization)" y "[Administrar el acceso de personas a tu organización con roles](/articles/managing-peoples-access-to-your-organization-with-roles)."

{% endtip %}

## {% ifversion fpt %}Inviting{% elsif ghes %}Adding{% endif %} an enterprise administrator to your enterprise account

{% ifversion fpt %}After you invite someone to join the enterprise account, they must accept the emailed invitation before they can access the enterprise account.{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. En la barra lateral izquierda, haz clic en **Administrators** (Administradores). ![Pestaña Administrators (Administradores) en la barra lateral izquierda](/assets/images/help/business-accounts/administrators-tab.png)
1. Above the list of administrators, click {% ifversion fpt %}**Invite admin**{% elsif ghes %}**Add owner**{% endif %}.
  {% ifversion fpt %}
  !["Invite admin" button above the list of enterprise owners](/assets/images/help/business-accounts/invite-admin-button.png)
  {% elsif ghes %}
  !["Add owner" button above the list of enterprise owners](/assets/images/help/business-accounts/add-owner-button.png)
  {% endif %}
1. Escribe el nombre de usuario, el nombre completo o la dirección de correo electrónico de la persona a la que quieres invitar a que se convierta en administrador de empresa, luego selecciona la persona adecuada en los resultados. ![Modal box with field to type a person's username, full name, or email address, and Invite button](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion fpt %}
1. Selecciona **Owner** (Propietario) o **Billing Manager** (Gerente de facturación). ![Casilla modal con opciones de roles](/assets/images/help/business-accounts/invite-admins-roles.png)
1. Haz clic en **Send Invitation** (Enviar invitación). ![Send invitation button](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. Da clic en **Agregar**. !["Add" button](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## Eliminar un administrador de empresa de tu cuenta de empresa

Solo los propietarios de empresa pueden eliminar a otros administradores de empresa de la cuenta de empresa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Next to the username of the person you'd like to remove, click {% octicon "gear" aria-label="The Settings gear" %}, then click **Remove owner**{% ifversion fpt %} or **Remove billing manager**{% endif %}.
  {% ifversion fpt %}
  ![Parámetros con opción del menú para eliminar un administrador de empresa](/assets/images/help/business-accounts/remove-admin.png)
  {% elsif ghes %}
  ![Parámetros con opción del menú para eliminar un administrador de empresa](/assets/images/help/business-accounts/ghes-remove-owner.png)
  {% endif %}
1. Read the confirmation, then click **Remove owner**{% ifversion fpt %} or **Remove billing manager**{% endif %}.
