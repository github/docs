---
title: Geplante Erinnerungen für Deine Organisation verwalten
intro: Du kannst in Slack Erinnerungen für alle Pull Requests erhalten, für die Teams in Deiner Organisation zum Review angefordert wurden.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - organisationen
  - teams
---

### Über geplante Erinnerungen für Pull Requests

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Organisationsinhaber können Erinnerungen für eines oder mehrere Teams in ihrer Organisation planen, für alle Pull Requests, für welche ein Team oder Teams zum Review angefordert wurde(n).

{% data reusables.reminders.scheduled-reminders-limitations %}

### Eine geplante Erinnerung für eine Organisation erstellen
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Schaltfläche „Scheduled reminders" (Geplante Erinnerungen)](/assets/images/help/organizations/scheduled-reminders-org.png)
{% data reusables.reminders.add-reminder %}
{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.slack-channel %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
{% data reusables.reminders.tracked-repos %}
11. Klicke unter „Filter by team assigned to review code" (Filtere nach Team, das für Code-Review zugewiesen ist) auf das Dropdownmenü **Add a team** (Team hinzufügen) und wähle eines oder mehrere Teams aus. Du kannst bis zu 100 Teams auswählen. Wenn das ausgewählte Team keinen Zugriff auf die oben ausgewählten "Tracked Repositories" (verfolgte Repositorys) hat, kannst Du die geplante Erinnerung nicht erstellen. ![Dropdownmenü „Add a team" (Ein Team hinzufügen)](/assets/images/help/organizations/scheduled-reminders-add-teams.png)
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

### Geplante Erinnerungen für eine Organisation verwalten
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Schaltfläche „Scheduled reminders" (Geplante Erinnerungen)](/assets/images/help/organizations/scheduled-reminders-org.png)
{% data reusables.reminders.edit-existing %}
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### Geplante Erinnerungen für eine Organisation löschen
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Schaltfläche „Scheduled reminders" (Geplante Erinnerungen)](/assets/images/help/organizations/scheduled-reminders-org.png)
{% data reusables.reminders.delete %}

### Weiterführende Informationen

- „[Deine geplanten Erinnerungen verwalten](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)"
- „[Geplante Erinnerungen für Dein Team verwalten](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)"
