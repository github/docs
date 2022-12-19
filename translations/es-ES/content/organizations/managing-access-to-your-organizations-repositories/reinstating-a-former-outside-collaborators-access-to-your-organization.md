---
title: Reinstalar el acceso de un colaborador externo antiguo a tu organización
intro: Puedes reinstaurar los permisos de acceso de un colaborador externo previo para los repositorios, bifurcaciones y configuraciones de la organización.
redirect_from:
- /articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization
- /articles/reinstating-a-former-outside-collaborators-access-to-your-organization
- /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-outside-collaborators-access-to-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Reinstate collaborator
ms.openlocfilehash: 88d986f922f1a66d652dba55f10142f7e493ffa2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146178912"
---
Cuando se elimina el acceso de un colaborador externo a los repositorios privados de tu organización, los privilegios de acceso y configuraciones de éste se guardan por tres meses. Puedes restablecer los privilegios del usuario si los vuelves a{% ifversion fpt or ghec %}invitar{% else %} agregar{% endif %} a la organización dentro de este periodo de tiempo.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Cuando reinstalas un colaborador externo antiguo, puedes restaurar lo siguiente:
 - El acceso antiguo del usuario a los repositorios de la organización
 - Cualquier bifurcación privada de los repositorios que son propiedad de la organización
 - La membresía a los equipos de la organización
 - El acceso y los permisos previos para los repositorios de la organización
 - Las estrellas para los repositorios de la organización
 - Las asignaciones de propuestas en la organización
 - Las suscripciones a repositorios (los parámetros de notificaciones para observar, no observar o ignorar la actividad de un repositorio)

{% tip %}

**Sugerencias**:

 - Solo los propietarios de la organización pueden restablecer el acceso de los colaboradores externos a una organización.{% ifversion prevent-org-admin-add-outside-collaborator %} Los propietarios de la empresa pueden restringir aún más la capacidad de restablecer el acceso de los colaboradores externos y que solo los propietarios de la empresa puedan hacerlo.{% endif %} Para más información, consulta "[Roles de una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".
 - El restablecimiento de un flujo de miembro en {% data variables.product.product_location %} puede usar el término "miembro" para describir el restablecimiento de un colaborador externo, pero si restableces esta persona y conservas sus privilegios anteriores, solo tendrá sus [permisos de colaborador externo](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators) anteriores.{% ifversion fpt or ghec %}
 - Si tu organización tiene una suscripción de pago por usuario, debe de existir una licencia sin utilizarse antes de que puedas invitar a un nuevo miembro para que se una a la organización o antes de reinstaurar a algún miembro previo de la misma. Para obtener más información, vea "[Acerca de los precios por usuario](/articles/about-per-user-pricing)".{% endif %}

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
1. Decide si quieres restaurar los privilegios anteriores del colaborador externo en la organización haciendo clic en **Invitar y restablecer** o decide eliminar los privilegios anteriores y establecer nuevos permisos de acceso haciendo clic en **Invitar e iniciar de nuevo**.

  {% warning %}

  **Advertencia:** Si quieres actualizar el colaborador externo a un miembro de la organización, elige **Invitar e iniciar de nuevo** y elige un nuevo rol para esta persona. Sin embargo, ten en cuenta que las bifurcaciones privadas de los repositorios de tu organización de esa persona se perderán si decides iniciar de nuevo. Para que el antiguo colaborador externo sea miembro de la organización *y* mantenga sus bifurcaciones privadas, elige **Invitar y restablecer** en su lugar. Una vez que esta persona acepte la invitación, podrás convertirle en miembro de la organización [invitándolo a unirse a la organización como miembro](/articles/converting-an-outside-collaborator-to-an-organization-member).

  {% endwarning %}

  ![Decide si quieres restaurar los parámetros o no](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. Decide si quieres restaurar los privilegios anteriores del colaborador externo en la organización haciendo clic en **Agregar y restablecer** o decide eliminar los privilegios anteriores y establecer nuevos permisos de acceso haciendo clic en **Agregar e iniciar de nuevo**.

  {% warning %}

  **Advertencia:** Si quieres actualizar el colaborador externo a un miembro de la organización, elige **Agregar e iniciar de nuevo** y elige un nuevo rol para esta persona. Sin embargo, ten en cuenta que las bifurcaciones privadas de los repositorios de tu organización de esa persona se perderán si decides iniciar de nuevo. Para que el antiguo colaborador externo sea miembro de la organización *y* mantenga sus bifurcaciones privadas, elige **Agregar y restablecer** en su lugar. Después, puedes convertirle en miembro de la organización [agregándolo a la organización como miembro](/articles/converting-an-outside-collaborator-to-an-organization-member).

  {% endwarning %}

  ![Decide restaurar los parámetros o no](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. Si has borrado los privilegios anteriores de un antiguo miembro de la organización, elige un rol para el usuario y, de manera opcional, agrégalo a algunos equipos; a continuación, haz clic en **Enviar invitación**.
  ![Opciones de rol y equipo y botón para enviar una invitación](/assets/images/help/organizations/add-role-send-invitation.png) {% else %}
7. Si has borrado los privilegios anteriores de un antiguo miembro de la organización, elige un rol para el usuario y, de manera opcional, agrégalo a algunos equipos; a continuación, haz clic en **Agregar miembro**.
  ![Opciones de rol y equipo y botón para agregar a un miembro](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %}
8. La persona invitada recibirá un correo electrónico invitándola a la organización. Tendrá que aceptar la invitación antes de convertirse en colaborador externo de la organización. {% data reusables.organizations.cancel_org_invite %} {% endif %}

## Lecturas adicionales

- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
