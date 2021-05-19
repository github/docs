---
title: Administrar los recordatorios programados para tu organización
intro: Puedes obtener recordatorios en Slack para todas las solicitudes de extracción de las cuales se haya solicitado revisión por parte de los equipos en tu organización.
versions:
  free-pro-team: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization
---
### Acerca de los recordatorios programados para las solicitudes de extracción

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Los propietarios de la organización pueden programar un recordatorio para uno mas equipos en ella que contemple todas las solicitudes de extracción que han solicitado la revisión de uno o más equipos de ésta.

### Crear un recordatorio programado para una organización
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botón de recordatorios programados](/assets/images/help/organizations/scheduled-reminders-org.png)
{% data reusables.reminders.add-reminder %}
{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.slack-channel %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
{% data reusables.reminders.tracked-repos %}
11. Da clic en el menú desplegable de **Añadir equipo** debajo de "Filtrar por equipo asignado para revisar el código", y elige uno o más equipos. Puedes agregar hasta 100 equipos. Si el equipo que seleccionas carece de acceso a los "Repositorios rastreados" seleccionados anteriormente, no podrás crear el recordatorio programado. ![Menú desplegable de añadir un equipo](/assets/images/help/organizations/scheduled-reminders-add-teams.png)
{% data reusables.reminders.ignore-drafts %}
{% data reusables.reminders.no-review-requests %}
{% data reusables.reminders.author-reviews %}
{% data reusables.reminders.approved-prs %}
{% data reusables.reminders.min-age %}
{% data reusables.reminders.min-staleness %}
{% data reusables.reminders.ignored-terms %}
{% data reusables.reminders.ignored-labels %}
{% data reusables.reminders.required-labels %}
{% data reusables.reminders.create-reminder %}

### Administrar un recordatorio programado para una organización
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botón de recordatorios programados](/assets/images/help/organizations/scheduled-reminders-org.png)
{% data reusables.reminders.edit-existing %}
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### Borrar un recordatorio programado para una organización
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botón de recordatorios programados](/assets/images/help/organizations/scheduled-reminders-org.png)
{% data reusables.reminders.delete %}

### Leer más

- "[Administrar tus recordatorios programados](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)"
- "[Administrar los recordatorios programados para tu equipo](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-team)"
