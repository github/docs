---
title: Reinstalar el acceso de un colaborador externo antiguo a tu organización
intro: 'Puedes reinstaurar los permisos de acceso de un colaborador externo previo para los repositorios, bifurcaciones y configuraciones de la organización.'
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
shortTitle: Reinstaurar a un colaborador
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

**Tips**:

 - Solo los propietarios de las organizaciones pueden reinstaurar el acceso de un colaborador externo a una organización.{% if prevent-org-admin-add-outside-collaborator %} Los propietarios de las empresas pueden restringir aún más la capacidad para reinstaurar el acceso de los colaboradores externos para que esto solo ellos puedan hacerlo.{% endif %} Para obtener más información, consulte la sección "[Roles de una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".
 - Puede que el flujo de reinstalación de un miembro en {% data variables.product.product_location %} utilice el término "miembro" para describir la reinstalación de un colaborador externo, pero si reinstalas a esta persona y mantienes sus privilegios previos, solo tendrá los [permisos de colaborador externo](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators) anteriores.{% ifversion fpt or ghec %}
 - Si tu organización tiene una suscripción de pago por usuario, debe de existir una licencia sin utilizarse antes de que puedas invitar a un nuevo miembro para que se una a la organización o antes de reinstaurar a algún miembro previo de la misma. Para obtener más información, consulta "[Acerca del precio por usuario](/articles/about-per-user-pricing)."{% endif %}

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% ifversion fpt or ghec %}
1. Decide si quieres restaurar los privilegios antiguos del colaborador externo en la organización haciendo clic en **Invite and reinstate** (Invitar y reinstalar) o decide eliminar los privilegios antiguos y establecer nuevos permisos de acceso haciendo clic en **Invite and start fresh** (Invitar e iniciar de nuevo).

  {% warning %}

  **Advertencia:** Si quieres subir de categoría el colaborador externo a miembro de tu organización, elige **Invite and start fresh** (Invitar e iniciar de nuevo) y elige un rol nuevo para esta persona. Sin embargo, ten en cuenta que las bifurcaciones privadas de los repositorios de tu organización de esa persona se perderán si decides iniciar de nuevo. En cambio, para hacer que el colaborador externo antiguo sea miembro de tu organización *y* conserve sus bifurcaciones privadas, elige **Invite and reinstate** (Invitar y reinstalar). Una vez que esta persona acepte la invitación, puedes convertirla en miembro de la organización [invitándola a que se una a la organización como miembro](/articles/converting-an-outside-collaborator-to-an-organization-member).

  {% endwarning %}

  ![Decide si quieres restaurar los parámetros o no](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. Decide si quieres restaurar los privilegios antiguos del colaborador externo en la organización haciendo clic en **Add and reinstate** (Agregar y reinstalar) o decide eliminar los privilegios antiguos y establecer nuevos permisos de acceso haciendo clic en **Add and start fresh** (Agregar e iniciar de nuevo).

  {% warning %}

  **Advertencia:** Si quieres subir de categoría el colaborador externo a miembro de tu organización, elige **Add and start fresh** (Agregar e iniciar de nuevo) y elige un rol nuevo para esta persona. Sin embargo, ten en cuenta que las bifurcaciones privadas de los repositorios de tu organización de esa persona se perderán si decides iniciar de nuevo. En cambio, para hacer que el colaborador externo antiguo sea miembro de tu organización *y* conserve sus bifurcaciones privadas, elige **Add and reinstate** (Agregar y reinstalar). Luego puedes convertirla en miembro de la organización [agregándola a la organización como miembro](/articles/converting-an-outside-collaborator-to-an-organization-member).

  {% endwarning %}

  ![Decide si quieres restaurar los parámetros o no](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% ifversion fpt or ghec %}
7. Si eliminaste los privilegios anteriores de un colaborador externo antiguo, elige un rol para el usuario y, de manera opcional, agrégalo a algunos equipos, luego haz clic en **Send invitation** (Enviar invitación). ![Opciones de rol y equipo y botón para enviar invitación](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Si eliminaste los privilegios anteriores de un colaborador externo antiguo, elige un rol para el usuario y, de manera opcional, agrégalo a algunos equipos, luego haz clic en **Add member** (Agregar miembro). ![Opciones de rol y equipo y botón para agregar miembros](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% ifversion fpt or ghec %}
8. La persona invitada recibirá un correo electrónico invitándola a la organización. Tendrá que aceptar la invitación antes de convertirse en colaborador externo de la organización. {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## Leer más

- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
