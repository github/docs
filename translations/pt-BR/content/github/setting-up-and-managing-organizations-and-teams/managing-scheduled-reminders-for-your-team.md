---
title: Gerenciar lembretes agendados para a sua equipe
intro: Você pode receber lembretes no Slack quando sua equipe tiver pull requests à espera de revisão.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests
versions:
  free-pro-team: '*'
---

### Sobre os lembretes agendados para as equipes

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Os mantenedores de equipe e os proprietários da organização podem definir lembretes agendados para quaisquer pull requests que se solicite que uma equipe revise. Antes de criar um lembrete agendado para sua equipe, um proprietário da organização deve autorizar o seu espaço de trabalho do Slack. Para obter mais informações, consulte "[Gerenciar lembretes agendados para a sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization)".

### Criar um lembrete agendado para uma equipe
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botão de lembretes agendados](/assets/images/help/teams/scheduled-reminders-teams.png)
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

### Gerenciar um lembrete agendado para uma equipe
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botão de lembretes agendados](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.edit-existing %}
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### Excluir um lembrete agendado para uma equipe
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botão de lembretes agendados](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.delete %}

### Leia mais

- "[Gerenciar lembretes agendados para a sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization)"
- "[Gerenciar seus lembretes agendados](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)"
