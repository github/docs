---
title: Invitar a las personas para que administren tu empresa
intro: 'Puedes {% ifversion ghec %}invitar a personas a convertirse en propietarios de empresa o administradores de facturación de{% elsif ghes %}agregar propietarios de empresa a{% endif %} tu cuenta empresarial. También puedes quitar propietarios de empresa {% ifversion ghec %}o administradores de facturación {% endif %}que ya no necesitan acceso a la cuenta de empresa.'
permissions: 'Enterprise owners can {% ifversion ghec %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Invite people to manage
ms.openlocfilehash: 7cdbee6f1b37a8300f3523712c6e0dda4293af74
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '146180451'
---
## Acerca de los usuarios que pueden administrar tu cuenta empresarial

{% data reusables.enterprise-accounts.enterprise-administrators %} Para más información, vea "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

{% ifversion ghes %}

Si quiere administrar los propietarios y administradores de facturación de una cuenta de empresa en {% data variables.product.prodname_dotcom_the_website %}, vea "[Invitación a usuarios para administrar la empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

{% ifversion ghec %}

Si tu empresa utiliza {% data variables.product.prodname_emus %}, solo se pueden agregar o eliminar los propietarios de las empresas a través de tu proveedor de identidad. Para más información, vea "[Acerca de {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".

{% endif %}

{% tip %}

**Sugerencia:** Para más información sobre cómo administrar usuarios dentro de una organización propiedad de la cuenta de empresa, vea "[Administración de la pertenencia a su organización](/articles/managing-membership-in-your-organization)" y "[Administración del acceso de los usuarios a la organización con roles](/articles/managing-peoples-access-to-your-organization-with-roles)".

{% endtip %}

## {% ifversion ghec %}Inviting{% elsif ghes %}Adición{% endif %} de un administrador de empresa a la cuenta de empresa

{% ifversion ghec %}Después de invitar a alguien para que se una a la cuenta de empresa, esa persona debe aceptar la invitación que ha recibido por correo electrónico antes de poder acceder a la cuenta de empresa. Las invitaciones pendientes vencerán después de 7 días.{% endif %}

{% ifversion enterprise-membership-view-improvements %} Puedes ver todas las invitaciones pendientes para ser administrador de la cuenta empresarial. Para más información, vea "[Visualización de personas en la empresa](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-pending-invitations)".
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. Sobre la lista de administradores, haga clic en {% ifversion ghec %}**Invitar administrador**{% elsif ghes %}**Agregar propietario**{% endif %}.
  {% ifversion ghec %} ![Botón "Invitar administrador" sobre la lista de propietarios de empresa](/assets/images/help/business-accounts/invite-admin-button.png) {% elsif ghes %} ![Botón "Agregar propietario" sobre la lista de propietarios de empresa](/assets/images/help/business-accounts/add-owner-button.png) {% endif %}
1. Escribe el nombre de usuario, el nombre completo o la dirección de correo electrónico de la persona a la que quieres invitar a que se convierta en administrador de empresa, luego selecciona la persona adecuada en los resultados.
  ![Cuadro modal con un campo para escribir el nombre de usuario, el nombre completo o la dirección de correo electrónico de una persona, y botón Invitar](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion ghec %}
1. Seleccione **Propietario** o **Administrador de facturación**.
  ![Cuadro modal con opciones de roles](/assets/images/help/business-accounts/invite-admins-roles.png)
1. Haga clic en **Enviar invitación**.
  ![Botón Enviar invitación](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. Haga clic en **Agregar**.
  ![Botón "Agregar"](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## Eliminar un administrador de empresa de tu cuenta de empresa

Solo los propietarios de empresa pueden eliminar a otros administradores de empresa de la cuenta de empresa.

{% ifversion ghec %} Si el administrador que quieres quitar es miembro de alguna organización de propiedad de la empresa, puedes elegir **convertirlo en miembro**, lo que le quitará el rol de administración pero conservará su pertenencia a la organización, o bien puedes **quitarlo de la empresa**, lo que le quitará tanto el rol de administración como la pertenencia a la organización.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. Junto al nombre de usuario de la persona que quieres quitar, haz clic en {% octicon "gear" aria-label="The Settings gear" %} y, luego, haz clic en {% ifversion ghes %}**Quitar propietario**{% elsif ghec %}**Convertir en miembro** o **Quitar de la empresa**.{% endif %}.
  {% ifversion ghec %} ![Engranaje Configuración con la opción de menú para quitar un administrador de empresa](/assets/images/help/business-accounts/remove-admin.png) {% elsif ghes %} ![Settings gear with menu option to remove an enterprise administrator](/assets/images/help/business-accounts/ghes-remove-owner.png) {% endif %}
1. Lea la confirmación y, después, haga clic en {% ifversion ghes %}**Quitar propietario**{% elsif ghec %}**Sí, convertir a NOMBRE_DE_USUARIO en miembro**{% endif %}.
