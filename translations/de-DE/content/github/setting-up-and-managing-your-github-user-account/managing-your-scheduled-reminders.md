---
title: Verwalten Deiner geplanten Erinnerungen
intro: 'Du kannst in Slack Erinnerungen erhalten, wenn für Dich oder Dein Team Pull Requests auf einen Review warten.'
versions:
  free-pro-team: '*'
topics:
  - Accounts
---

### Über geplante Erinnerungen für Benutzer

Geplante Erinnerungen werden verwendet, um sicherzustellen, dass Benutzer sich auf die wichtigsten Review-Anforderungen konzentrieren, die ihre Aufmerksamkeit erfordern. Geplante Erinnerungen für Pull Requests senden Dir in Slack eine Nachricht mit offenen Pull Requests, die Deinen Review zu einem bestimmten Zeitpunkt benötigen. Du kannst beispielsweise planmäßige Erinnerungen so einrichten, dass sie Dir jeden Morgen um 10 Uhr eine Nachricht in Slack zusenden über Pull Requests, die von Dir oder einem Deiner Teams überprüft werden müssen.

Für bestimmte Ereignisse kannst Du auch Echtzeit-Alarmierung für geplante Erinnerungen einrichten. Echtzeit-Alarme werden in Deinen Slack-Kanal gesendet, sobald ein wichtiges Ereignis stattfindet, beispielsweise wenn Du einem Review zugewiesen wirst.

Du kannst geplante Erinnerungen für persönliche oder für Team-Review-Anfragen für Pull Requests in Organisationen festlegen, in denen Du Mitglied bist. Bevor Du eine geplante Erinnerung für Dich selbst erstellen kannst, muss ein Organisationsinhaber Deinen Slack-Arbeitsbereich autorisieren. Weitere Informationen findest Du unter „[Geplante Erinnerungen für Deine Organisation verwalten](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)."

{% data reusables.reminders.scheduled-reminders-limitations %}

### Geplante Erinnerungen für Dein Benutzerkonto erstellen

{% data reusables.user_settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Schaltfläche „Scheduled reminders" (Geplante Erinnerungen)](/assets/images/help/profile/scheduled-reminders-profile.png)
3. Neben der Organisation, für die Du Erinnerungen planen möchtest, klicke auf **Edit** (Bearbeiten). ![Schaltfläche „Scheduled reminders edit" (geplante Erinnerungen bearbeiten)](/assets/images/help/settings/scheduled-reminders-org-choice.png)
{% data reusables.reminders.add-reminder %}
{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
8. Um optional geplante Erinnerungen für Reviews zu erhalten, die Dir zugewiesen wurden, wähle **Review requests assigned to you** (Review-Anforderungen, die Dir zugewiesen wurden). ![Kontrollfeld „Review requests assigned to you" (Dir zugewiesene Review-Anforderungen)](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. Um optional geplante Erinnerungen für Reviews zu erhalten, die einem Team zugewiesen wurden, in dem Du Mitglied bist, wähle **Review requests assigned to your team** (Review-Anforderungen, die Deinem Team zugewiesen wurden). ![Kontrollfeld „Review requests assigned to your team" (Deinem Team zugewiesene Review-Anforderungen)](/assets/images/help/profile/scheduled-reminders-your-team-requests.png)
{% data reusables.reminders.real-time-alerts %}
![Kontrollfeld „Enable real-time alerts" (Echtzeit-Alarme aktivieren)](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png)
{% data reusables.reminders.create-reminder %}

### Geplante Erinnerungen für Dein Benutzerkonto verwalten
{% data reusables.user_settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Schaltfläche „Scheduled reminders" (Geplante Erinnerungen)](/assets/images/help/profile/scheduled-reminders-profile.png)
3. Klicke neben der Organisation, für die Du geplante Erinnerungen bearbeiten möchtest, auf **Edit** (Bearbeiten). ![Schaltfläche „Scheduled reminders edit" (geplante Erinnerungen bearbeiten)](/assets/images/help/settings/scheduled-reminders-org-choice.png)
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### Geplante Erinnerungen für Dein Benutzerkonto löschen
{% data reusables.user_settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Schaltfläche „Scheduled reminders" (Geplante Erinnerungen)](/assets/images/help/profile/scheduled-reminders-profile.png)
3. Klicke neben der Organisation, für die Du geplante Erinnerungen löschen möchtest, auf **Edit** (Bearbeiten). ![Schaltfläche „Scheduled reminders edit" (geplante Erinnerungen bearbeiten)](/assets/images/help/settings/scheduled-reminders-org-choice.png)
{% data reusables.reminders.delete %}

### Weiterführende Informationen

- „[Geplante Erinnerungen für Deine Organisation verwalten](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)"
- „[Geplante Erinnerungen für Dein Team verwalten](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)"
