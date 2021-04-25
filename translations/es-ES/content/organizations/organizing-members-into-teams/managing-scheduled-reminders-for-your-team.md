---
title: Administrar recordatorios programados para tu equipo
intro: Puedes obtener recordatorios en Slack cuando existan solicitudes de extracción pendientes de revisión por parte de tu equipo.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your team
versions:
  free-pro-team: '*'
topics:
  - organizations
  - equipos
---

### Acerca de los recordatorios programados para equipos

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Los mantenedores de equipo y propietarios de organización pueden configurar recordatorios programados para cualquier solicitud de extracción que tenga una solicitud de revisión por parte de sus equipos. Antes de que puedas crear un recordatorio programado para tu equipo, un propietario de la organización debe autorizar tu espacio de trabajo de Slack. Para obtener más información, consulta la sección "[Administrar recordatorios programados para tu organización](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)".

{% data reusables.reminders.scheduled-reminders-limitations %}

### Crear un recordatorio programado para un equipo
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botón de recordatorios programados](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.add-reminder %}
{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.slack-channel %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
{% data reusables.reminders.tracked-repos %}
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

### Administrar un recordatorio programado para un equipo
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botón de recordatorios programados](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.edit-existing %}
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### Borrar un recordatorio programado para un equipo
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botón de recordatorios programados](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.delete %}

### Leer más

- "[Administrar los recordatorios programados para tu organización](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)"
- "[Administrar tus recordatorios programados](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)"
