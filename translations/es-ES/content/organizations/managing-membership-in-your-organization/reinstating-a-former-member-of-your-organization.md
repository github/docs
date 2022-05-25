---
title: Volver a admitir a un miembro anterior de tu organización
intro: 'Los propietarios de la organización pueden {% ifversion fpt or ghec %}invitar a miembros anteriores de la organización para volverse a unir a{% else %}agregar a miembros anteriores a{% endif%} tu organización y elegir si quieren restablecer el rol, permisos de acceso, bifurcaciones y configuraciones anteriores de dicha persona.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-member-of-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can reinstate a former member of an organization.
topics:
  - Organizations
  - Teams
shortTitle: Reinstaurar a un miembro
---

## Acerca de la reinstauración de miembros

Si se elimina a un usuario de tu organización en alguna de las siguientes formas, sus privilegios de acceso y ajustes se guardarán durante tres meses.

- Eliminaste al usuario manualmente de tu organización. Para obtener más información, consulta la sección "[Eliminar a un miembro de tu organización](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)".{% ifversion not ghae %}
- Se eliminó al usuario de tu organización porque requeriste que los miembros y colaboradores externos habilitaran la autenticación bifactorial (2FA). Para obtener más información, consulta la sección "[Solicitar la autenticación bifactorial en tu organización](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)".{% endif %}{% ifversion fpt or ghec %}
- Se eliminó al usuario de tu organización porque requeriste el inicio de sesión único de SAML. Para obtener más información, consulta la sección "[Requerir el inicio de sesión único de SAML en tu organización](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization){% ifversion fpt %}" en la documentaciòn de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}
- Convertiste a un miembro de la organización en colaborador externo. Para obtener más información, consulta la sección "[Convertir a un miembro de la organización en colaborador externo](/organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator)."

Puedes restablecer los privilegios del usuario si los vuelves a{% ifversion fpt or ghec %}invitar{% else %} agregar{% endif %} a la organización dentro de este periodo de tiempo.

{% note %}

**Nota:** {% data reusables.saml.removed-users-can-rejoin %} No necesitas invitar a estos usuarios a que se vuelvan a unir. En vez de esto, el usuario puede iniciar sesión en su cuenta personal, navegar a la organización y hacer clic en el letrero para autenticarse a través del inicio de sesión único de SAML.

{% endnote %}

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Cuando vuelvas a admitir a un miembro antiguo de la organización, puedes restaurar lo siguiente:
 - El rol del usuario en la organización
 - Cualquier bifurcación privada de los repositorios que son propiedad de la organización
 - La membresía a los equipos de la organización
 - El acceso y los permisos previos para los repositorios de la organización
 - Las estrellas para los repositorios de la organización
 - Las asignaciones de propuestas en la organización
 - Las suscripciones a repositorios (los parámetros de notificaciones para observar, no observar o ignorar la actividad de un repositorio)

{% ifversion ghes %}
Si se eliminó de la organización a un miembro de la organización porque no utilizó la autenticación de dos factores, y tu organización aún requiere que los miembros utilicen la 2FA, el miembro antiguo debe habilitar la autenticación de dos factores antes de que puedas reinstalar su membresía.
{% endif %}

{% ifversion fpt or ghec %}
Si tu organización tiene una suscripción de pago por usuario, debes de contar con una licencia disponible antes de que puedas volver a admitir a algún miembro anterior de la organización. Para obtener más información, consulta "[About per-user pricing](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-scim %}
{% endif %}

## Volver a admitir a un miembro anterior de tu organización

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% ifversion fpt or ghec %}
6. Decide si quieres restaurar los privilegios antiguos de esa persona en la organización o eliminar sus privilegios antiguos y establecer nuevos permisos de acceso, luego haz clic en **Invite and reinstate** (Invitar y reinstalar) o **Invite and start fresh** (Invitar e iniciar de nuevo). ![Decide si quieres restaurar la información o no](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. Decide si quieres restaurar los privilegios antiguos de esa persona en la organización o eliminar sus privilegios antiguos y establecer nuevos permisos de acceso, luego haz clic en **Add and reinstate** (Agregar y reinstalar) o **Add and start fresh** (Agregar e iniciar de nuevo). ![Decide si quieres restaurar los privilegios](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% ifversion fpt or ghec %}
7. Si eliminaste los privilegios anteriores de un miembro anterior de la organización, elige un rol para el usuario, y, de manera opcional, agrégalo a algunos equipos, luego haz clic en **Enviar invitación**. ![Opciones de rol y equipo y botón para enviar invitación](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Si eliminaste los privilegios anteriores de un miembro anterior de la organización, elige un rol para el usuario y, de manera opcional, agrégalo a algunos equipos, luego haz clic en **Agregar miembro**. ![Opciones de rol y equipo y botón para agregar miembros](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% ifversion fpt or ghec %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## Leer más

- "[Convertir a un miembro de la organización en colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
