---
title: Reinstalar un miembro antiguo de tu organización
intro: 'Los dueños de las organizaciones pueden {% if currentVersion == "free-pro-team@latest" %} invitar a un miembro previo de la organización para que se vuelva a unir{% else %}añadir miembros previos a{% endif%}sus organizaciónes, y escoger si se restablecen los roles previos, permisos de acceso, bifurcaciones y configuraciones de estas personas.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Si [eliminas un usuario de tu organización](/articles/removing-a-member-from-your-organization), [conviertes un miembro de la organización en un colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator) o si se elimina un usuario de tu organización porque [solicitaste a los miembros y colaboradores externos que habilitaran la autenticación de dos factores (2FA)](/articles/requiring-two-factor-authentication-in-your-organization), los privilegios y parámetros de acceso del usuario se guardarán durante tres meses. Puedes restaurar los privilegios del usuario si lo vuelves a {% if currentVersion =="free-pro-team@latest" %}invitar{% else %}agregar{% endif %} a la organización en el transcurso de ese tiempo.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Cuando reinstales un miembro antiguo de la organización, puedes restaurar lo siguiente:
 - El rol del usuario en la organización
 - Cualquier bifurcación privada de los repositorios que son propiedad de la organización
 - La membresía a los equipos de la organización
 - El acceso y los permisos previos para los repositorios de la organización
 - Las estrellas para los repositorios de la organización
 - Las asignaciones de propuestas en la organización
 - Las suscripciones a repositorios (los parámetros de notificaciones para observar, no observar o ignorar la actividad de un repositorio)

    {% tip %}

    {% if currentVersion == "free-pro-team@latest" %}
    **Tips**:
    - Si se eliminó de la organización a un miembro de la organización porque no utilizó la autenticación de dos factores, y tu organización aún requiere que los miembros utilicen la 2FA, el miembro antiguo debe habilitar la autenticación de dos factores antes de que puedas reinstalar su membresía.
    - Solo los propietarios de la organización pueden invitar a usuarios a unirse a una organización. Para obtener más información, consulta "[Niveles de permiso para una organización](/articles/permission-levels-for-an-organization)".
    - Si tu organización tiene una suscripción de pago por usuario, debes de contar con una licencia disponible antes de que puedas reinstaurar a algún miembro previo de la organización. Para obtener más información, consulta "[About per-user pricing](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-expiration %}

   {% else %}
    **Tips**:
    - Si se eliminó de la organización a un miembro de la organización porque no utilizó la autenticación de dos factores, y tu organización aún requiere que los miembros utilicen la 2FA, el miembro antiguo debe habilitar la autenticación de dos factores antes de que puedas reinstalar su membresía.
    - Solo los propietarios de la organización pueden agregar usuarios a una organización. Para obtener más información, consulta "[Niveles de permiso para una organización](/articles/permission-levels-for-an-organization)".
   {% endif %}

   {% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% if currentVersion == "free-pro-team@latest" %}
6. Decide si quieres restaurar los privilegios antiguos de esa persona en la organización o eliminar sus privilegios antiguos y establecer nuevos permisos de acceso, luego haz clic en **Invite and reinstate** (Invitar y reinstalar) o **Invite and start fresh** (Invitar e iniciar de nuevo). ![Decide si quieres restaurar la información o no](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. Decide si quieres restaurar los privilegios antiguos de esa persona en la organización o eliminar sus privilegios antiguos y establecer nuevos permisos de acceso, luego haz clic en **Add and reinstate** (Agregar y reinstalar) o **Add and start fresh** (Agregar e iniciar de nuevo). ![Decide si quieres restaurar los privilegios](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
7. Si eliminaste los privilegios anteriores de un miembro antiguo de la organización, elige un rol para el usuario, y, de manera opcional, agrégalo a algunos equipos, luego haz clic en **Send invitation** (Enviar invitación). ![Opciones de rol y equipo y botón para enviar invitación](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Si eliminaste los privilegios anteriores de un miembro antiguo de la organización, elige un rol para el usuario y, de manera opcional, agrégalo a algunos equipos, luego haz clic en **Add member** (Agregar miembro). ![Opciones de rol y equipo y botón para agregar miembros](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

### Leer más

- "[Convertir a un miembro de la organización en colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
