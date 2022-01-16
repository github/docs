---
title: Editar los permisos de una GitHub App
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions/
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% note %}

**Nota:** Los permisos actualizados no tendrán efecto en una instalación hasta que el propietario de la cuenta o de la organización apruebe los cambios. Puedes utilizar el [Webhook de eventos de la instalación](/webhooks/event-payloads/#installation) para saber cuando las personas acepten nuevos permisos para tu app. Una excepción son los [permisos a nivel de usuario](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions), los cuales no requieren que un propietario de la cuenta apruebe los cambios a los permisos.

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Selecciona la GitHub App de la cual quieras cambiar los permisos. ![Seleccion de apps](/assets/images/github-apps/github_apps_select-app.png)
5. En la barra lateral izquierda, haz clic en **Permissions & webhooks** (Permisos y webhooks). ![Permisos y webhooks](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. Modifica los permisos que te gustaría cambiar. Para cada tipo de permisos, selecciona ya sea "únicamente lectura", "Lectura & escritura", o "Sin acceso" del menú desplegable. ![Selecciones de permisos para tu GitHub App](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. En "suscribirse a los eventos", selecciona cualquier evento al que quieras suscribir a tu app. ![Selecciones de permisos para suscribir tu GitHub App a los eventos](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. Opcionalmente, en "agregar una nota para los usuarios", agrega una nota que indique a tus usuarios el por qué estás cambiando los permisos que solicita tu GitHub App. ![Caja de entrada para agregar una nota para los usuarios, la cual explique por qué cambiaron los permisos de tu GitHub App](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. Haz clic en **Guardar cambios**. ![Botón para guardar los cambios en los permisos](/assets/images/github-apps/github_apps_save_changes.png)
