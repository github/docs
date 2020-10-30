---
title: Auslieferungsmethode für Deine Benachrichtigungen wählen
intro: 'Du kannst Benachrichtigungen auf {% data variables.product.product_location %} empfangen oder über Deinen E-Mail-Client.'
versions:
  enterprise-server: <2.21
---

Bei persönlichen Konten werden die Benachrichtigungs-E-Mails automatisch an die standardmäßige Benachrichtigungs-E-Mail-Adresse gesendet.

{% data reusables.notifications.outbound_email_tip %}

### Auslieferungsmethode für Benachrichtigungen zu Repository-Aktivitäten auswählen

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
3. Konfiguriere mithilfe von Kontrollkästchen, auf welchem Weg Du Benachrichtigungen erhältst, bei denen Du beteiligt bist oder die Du beobachtest:
    - Bei der Auswahl von **Email** (E-Mail) wird eine E-Mail an Deine standardmäßige Benachrichtigungs-E-Mail-Adresse gesendet.
    - Bei der Auswahl von **Web** (Web) kannst Du auf {% data variables.product.product_location %} auf die Benachrichtigungen zugreifen. ![Benachrichtigungseinstellungen konfigurieren](/assets/images/help/settings/ent-notifications-settings.png)
4. Wenn Du **Email** (E-Mail) für Unterhaltungen ausgewählt hast, an denen Du teilnimmst oder die Du beobachtest, kannst Du über die Kontrollkästchen im Abschnitt „Notification email“ (Benachrichtigungs-E-Mail) festlegen, über welche Aktualisierungen Du informiert werden möchtest:
    - Wähle **Comments on Issues and Pull Requests** (Kommentare zu Issues und Pull Requests) aus, um eine E-Mail zu erhalten, wenn jemand in einem Issue oder auf der Registerkarte „Conversation“ (Unterhaltung) eines Pull Requests einen Kommentar hinterlässt.
    - Wähle **Pull request reviews** (Pull-Request-Reviews) aus, um eine E-Mail zu erhalten, wenn jemand auf der Registerkarte „Files changes“ (Änderungen an Dateien) eines Pull Requests einen Review-Kommentar hinterlässt.
    - Wähle **Pull request pushes** (Pull-Request-Pushes) aus, um eine E-Mail zu erhalten, wenn jemand bei einem von Dir abonnierten Pull Request einen Kommentar hinterlässt.
    - Wähle **Include your own updates** (Eigene Aktualisierungen einschließen) aus, um eine E-Mail zu erhalten, wenn Du einen Issue oder Pull Request öffnest, kommentierst oder schließt. ![Optionen zum Konfigurieren von E-Mail-Benachrichtigungen](/assets/images/help/settings/email_notification_settings.png)

### Auslieferungsmethode für Sicherheitswarnungen zu angreifbaren Abhängigkeiten auswählen

{% data reusables.repositories.security-alert-delivery-options %}

{% data reusables.repositories.enable-security-alerts %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
3. Konfiguriere unter „Security alerts" (Sicherheitswarnungen), wie Du Benachrichtigungen erhalten willst, wenn {% data variables.product.product_name %} eine angreifbare Abhängigkeit in Deinem Repository entdeckt: ![Optionen zum Konfigurieren von Benachrichtigungen für Sicherheitswarnungen](/assets/images/help/settings/vulnerability-alerts-options.png)
    - Bei der Auswahl von **UI alerts** (Warnungen auf Benutzeroberfläche) wird ein Banner auf der {% data variables.product.product_name %}-Oberfläche angezeigt.
    - Bei der Auswahl von **Command Line** (Befehlszeile) werden Warnungen als Callback angezeigt, wenn Du einen Push an ein Repository mit Schwachstellen durchführst.
    - Bei der Auswahl von **Web** (Web) kannst Du auf {% data variables.product.product_location %} auf die Benachrichtigungen zugreifen.
    - Bei der Auswahl von **Email each time a vulnerability is found** (Bei jeder Erkennung einer Schwachstelle) wird eine E-Mail an Deine standardmäßige Benachrichtigungs-E-Mail-Adresse versendet.
    - Bei der Auswahl von **Email a digest summary of vulnerabilities** (Sende eine Zusammenfassung von Verwundbarkeiten via E-Mail) wird eine E-Mail mit der Zusammenfassung der Sicherheitswarnungen für bis zu 10 Repositorys versendet. Über das Dropdownmenü kannst Du auswählen, ob Du die E-Mails mit der Zusammenfassung täglich oder wöchentlich erhalten möchtest.

### Weiterführende Informationen

- „[Über Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- „[Über E-Mail-Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- „[Über Webbenachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"
- „[Beobachten von Repositorys aktivieren oder deaktivieren](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- „[E-Mail-Vorlieben verwalten](/articles/managing-email-preferences)“
