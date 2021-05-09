---
title: Gerenciar lembretes agendados para a sua organização
intro: Você pode obter lembretes no Slack para todos os pull requests que as equipes em sua organização foram solicitadas para revisar.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

### Sobre lembretes agendados para pull requests

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Os proprietários da organização podem agendar um lembrete para uma ou mais equipes na sua organização, para todos os pull requests que a equipe ou equipes foram solicitadas revisar.

{% data reusables.reminders.scheduled-reminders-limitations %}

### Criar um lembrete agendado para uma organização
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botão de lembretes agendados](/assets/images/help/organizations/scheduled-reminders-org.png)
{% data reusables.reminders.add-reminder %}
{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.slack-channel %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
{% data reusables.reminders.tracked-repos %}
11. Em "Filtrar por equipe atribuída ao código de revisão", clique no menu suspenso **Adicionar uma equipe** e escolha uma ou mais equipes. Você pode adicionar até 100 equipes. Se a equipe selecionada não tiver acesso aos "repositórios rastreados" selecionados acima, você não será conseguirá criar o lembrete agendado. ![Menu suspenso para Adicionar equipe](/assets/images/help/organizations/scheduled-reminders-add-teams.png)
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

### Gerenciar um lembrete agendado para uma organização
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botão de lembretes agendados](/assets/images/help/organizations/scheduled-reminders-org.png)
{% data reusables.reminders.edit-existing %}
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### Excluir um lembrete agendado para uma organização
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botão de lembretes agendados](/assets/images/help/organizations/scheduled-reminders-org.png)
{% data reusables.reminders.delete %}

### Leia mais

- "[Gerenciar seus lembretes agendados](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)"
- "[Gerenciar lembretes agendados para a sua equipe](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)"
