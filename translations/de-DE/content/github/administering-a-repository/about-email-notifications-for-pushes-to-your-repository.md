---
title: Informationen zu E-Mail-Benachrichtigungen für Pushes an Dein Repository
intro: Du kannst festlegen, dass E-Mail-Benachrichtigungen automatisch an eine bestimmte E-Mail-Adresse gesendet werden, wenn jemand an das Repository überträgt.
permissions: Personen mit Administratorberechtigung in einem Repository können E-Mail-Benachrichtigungen für Pushes in Dein Repository aktivieren.
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository/
  - /articles/receiving-email-notifications-for-pushes-to-a-repository/
  - /articles/about-email-notifications-for-pushes-to-your-repository/
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.notifications.outbound_email_tip %}

In jeder E-Mail-Benachrichtigung für einen Push an ein Repository werden die neuen Commits und Links zu einem Diff aufgelistet, der nur diese Commits enthält. In der E-Mail-Benachrichtigung siehst Du Folgendes:

- Den Namen des Repositorys, in dem der Commit erstellt wurde
- Den Branch, in dem der Commit erstellt wurde
- Den SHA1 des Commits, einschließlich eines Links zum Diff in {% data variables.product.product_name %}
- Den Autor des Commits
- Das Erstellungsdatum des Commits
- Die Dateien, die im Rahmen des Commits geändert wurden
- Die Commit-Mitteilung

Du kannst E-Mail-Benachrichtigungen filtern, die Du für Pushes an ein Repository erhältst. For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}"[About notification emails](/github/receiving-notifications-about-activity-on-github/about-email-notifications)." Du kannst auch E-Mail-Benachrichtigungen für Pushes ausschalten. Weitere Informationen findest Du unter „[Auslieferungsmethode für Deine Benachrichtigungen wählen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications){% endif %}.“

### E-Mail-Benachrichtigungen für Pushes in Dein Repository aktivieren

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-notifications %}
5. Gib bis zu zwei E-Mail-Adressen (getrennt durch Leerzeichen) ein, an die Du Benachrichtigungen senden möchtest. Wenn Du E-Mails an mehr als zwei Konten senden möchtest, legst Du eine der E-Mail-Adressen als Gruppen-E-Mail-Adresse fest. ![Textfeld für die E-Mail-Adresse](/assets/images/help/settings/email_services_addresses.png)
1. If you operate your own server, you can verify the integrity of emails via the **Approved header**. The **Approved header** is a token or secret that you type in this field, and that is sent with the email. If the `Approved` header of an email matches the token, you can trust that the email is from {% data variables.product.product_name %}. ![Email approved header textbox](/assets/images/help/settings/email_services_approved_header.png)
7. Click **Setup notifications**. ![Setup notifications button](/assets/images/help/settings/setup_notifications_settings.png)

### Weiterführende Informationen
{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- „[Über Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/about-notifications)"
{% else %}
- „[Über Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- „[Auslieferungsmethode für Deine Benachrichtigungen wählen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)"
- „[Über E-Mail-Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- „[Über Webbenachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"{% endif %}
