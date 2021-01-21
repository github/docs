---
title: Desbloquear un usuario desde tu organización
intro: 'Los propietarios de la organización pueden desbloquear un usuario que se haya bloqueado previamente y restaurar su acceso a los repositorios de la organización.'
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
versions:
  free-pro-team: '*'
---

Después de desbloquear un usuario desde tu organización, este podrá contribuir con los repositorios de tu organización.

Si seleccionaste una cantidad de tiempo específica para bloquear al usuario, se desbloqueará de forma automática cuando termine ese período de tiempo. Para obtener más información, consulta "[Bloquear un usuario de tu organización](/articles/blocking-a-user-from-your-organization)".

{% tip %}

**Sugerencia**: Las configuraciones que se hayan eliminado cuando bloqueaste al usuario de tu organización, como el estado de colaborador, las estrellas y las observaciones, no se restaurarán cuando desbloquees al usuario.

{% endtip %}

### Desbloquear un usuario en un comentario

1. Navega hasta el comentario cuyo autor quieres desbloquear.
2. En la esquina superior derecha del comentario, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, luego haz clic en **Unblock user** (Desbloquear usuario). ![Ícono kebab horizontal y menú de moderación de comentarios que muestra la opción de desbloquear usuario](/assets/images/help/repository/comment-menu-unblock-user.png)
3. Para confirmar que quieres desbloquear al usuario, haz clic en **Okay**.

### Desbloquear un usuario en los parámetros de la organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.block_users %}
5. En "Blocked users" (Usuarios bloqueados), al lado del usuario que quieres desbloquear, haz clic en **Unblock** (Desbloquear). ![Botón Unblock user (Desbloquear usuario)](/assets/images/help/organizations/org-unblock-user-button.png)

### Further reading

- "[Bloquear a un usuario de tu organización](/articles/unblocking-a-user-from-your-organization)"
- "[Bloquear a un usuario desde tu cuenta personal](/articles/blocking-a-user-from-your-personal-account)"
- "[Desbloquear a un usuario desde tu cuenta personal](/articles/unblocking-a-user-from-your-personal-account)"
- "[Informar abuso o spam](/articles/reporting-abuse-or-spam)"
