---
title: Invitar a las personas para que administren tu empresa
intro: 'Puedes {% ifversion fpt %}invitar a que las personas se conviertan en propietarios empresariales o gerentes de facturación para {% elsif ghes %}agregar propietarios empresariales a{% endif %} tu cuenta empresarial. También puedes eliminar a los propietarios empresariales {% ifversion fpt %}o gerentes de facturación {% endif %}que ya no necesiten acceso a la cuenta empresarial.'
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

## Acerca de los usuarios que pueden administrar tu cuenta empresarial

{% data reusables.enterprise-accounts.enterprise-administrators %} Para obtener más información, consulta la sección "[Roles en una empresaempresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)".

{% ifversion ghes %}

Si quieres administrar los propietarios y gerentes de facturación para una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}, consulta la sección "[Invitar a personas para que administren tu empresa](/free-pro-team@latest/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)" en la documentación de {% data variables.product.prodname_dotcom_the_website %}.

{% endif %}

{% ifversion fpt %}

Si tu empresa utiliza {% data variables.product.prodname_emus %}, solo se pueden agregar o eliminar los propietarios de las empresas a través de tu proveedor de identidad. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_emus %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".

{% endif %}

{% tip %}

**Sugerencia:**Para obtener más información acerca de administrar usuarios dentro de una organización que le pertenece a tu cuenta de empresa, consulta "[Administrar membresías de tu organización](/articles/managing-membership-in-your-organization)" y "[Administrar el acceso de personas a tu organización con roles](/articles/managing-peoples-access-to-your-organization-with-roles)."

{% endtip %}

## {% ifversion fpt %}Invitar{% elsif ghes %}Agregar{% endif %} a un administrador empresarial a tu cuenta empresarial

{% ifversion fpt %}Después de que invites a alguien para que se una a la cuenta empresarial, esta persona debe aceptar la invitación que le llegó por correo electrónico antes de que pueda acceder a la cuenta empresarial.{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. En la barra lateral izquierda, haz clic en **Administrators** (Administradores). ![Pestaña Administrators (Administradores) en la barra lateral izquierda](/assets/images/help/business-accounts/administrators-tab.png)
1. Sobre la lista de administradores, haz clic en {% ifversion fpt %}**Invitar administrador**{% elsif ghes %}**Agregar propietario**{% endif %}.
  {% ifversion fpt %}
  ![botón de "invitar administrador" sobre la lista de propietarios empresariales](/assets/images/help/business-accounts/invite-admin-button.png)
  {% elsif ghes %}
  ![Botón de "Agregar propietario" sobre la lista de propietarios empresariales](/assets/images/help/business-accounts/add-owner-button.png)
  {% endif %}
1. Escribe el nombre de usuario, el nombre completo o la dirección de correo electrónico de la persona a la que quieres invitar a que se convierta en administrador de empresa, luego selecciona la persona adecuada en los resultados. ![Modal box with field to type a person's username, full name, or email address, and Invite button](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion fpt %}
1. Selecciona **Owner** (Propietario) o **Billing Manager** (Gerente de facturación). ![Casilla modal con opciones de roles](/assets/images/help/business-accounts/invite-admins-roles.png)
1. Haz clic en **Send Invitation** (Enviar invitación). ![Send invitation button](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. Da clic en **Agregar**. !["Add" button](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## Eliminar un administrador de empresa de tu cuenta de empresa

Solo los propietarios de empresa pueden eliminar a otros administradores de empresa de la cuenta de empresa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Junto al nombre de usuario de la persona que te gustaría eliminar, haz clic en {% octicon "gear" aria-label="The Settings gear" %}, luego en **Eliminar propietario**{% ifversion fpt %} o **Eliminar gerente de facturación**{% endif %}.
  {% ifversion fpt %}
  ![Parámetros con opción del menú para eliminar un administrador de empresa](/assets/images/help/business-accounts/remove-admin.png)
  {% elsif ghes %}
  ![Parámetros con opción del menú para eliminar un administrador de empresa](/assets/images/help/business-accounts/ghes-remove-owner.png)
  {% endif %}
1. Lee la confirmación y luego haz clic en **Eliminar propietario**{% ifversion fpt %} o **Eliminar gerente de facturación**{% endif %}.
