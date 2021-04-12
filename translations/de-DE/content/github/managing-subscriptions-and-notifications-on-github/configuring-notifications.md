---
title: Benachrichtigungen konfigurieren
intro: 'Wähle die Art der Aktivitäten auf {% data variables.product.product_name %} , für die Du Benachrichtigungen erhalten möchtest und wie Du diese Aktualisierungen erhalten möchtest.'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails/
  - /articles/configuring-notification-emails/
  - /articles/about-notification-emails/
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods/
  - /articles/managing-notification-delivery-methods/
  - /articles/managing-notification-emails-for-organizations/
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive/
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - notifications
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### Zustellungsoptionen für Benachrichtigungen

You can receive notifications for activity on {% data variables.product.product_name %} in the following locations.

  - The notifications inbox in the {% data variables.product.product_name %} web interface{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %}
  - The notifications inbox on {% data variables.product.prodname_mobile %}, which syncs with the inbox on {% data variables.product.product_name %}{% endif %}
  - An email client that uses a verified email address, which can also sync with the notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} and {% data variables.product.prodname_mobile %}{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} Weitere Informationen findest Du auf „[Deine Benachrichtigungseinstellungen wählen](#choosing-your-notification-settings)."
{% endif %}

{% data reusables.notifications.shared_state %}

#### Benefits of the notifications inbox

The notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} and {% data variables.product.prodname_mobile %}{% endif %} includes triaging options designed specifically for your {% data variables.product.product_name %} notifications flow, including options to:
  - Selektieren mehrerer Benachrichtigungen auf einmal.
  - Erledigte Benachrichtigungen als **Done** (Erledigt) markieren und aus dem Posteingang entfernen. Um alle Deine Benachrichtigungen anzuzeigen, die als **Done** markiert sind, verwende die Abfrage mit `is:done`.
  - Sichere eine Benachrichtigung für späteren Review. Gesicherte Benachrichtigungen sind in Deinem Posteingang markiert und werden auf unbestimmte Zeit gehalten. Um alle Deine gesicherten Benachrichtigungen zu sehen, benutze die Abfrage mit `is:saved`.
  - Melde eine Benachrichtigung ab und entferne sie aus dem Posteingang.
  - Vorschau des Issue, Pull Request oder der Team-Diskussion, aus der die Benachrichtigung auf {% data variables.product.product_name %} erstellt wurde, direkt aus dem Posteingang der Benachrichtigungen.
  - Siehe einen der neuesten Gründe, weshalb Du eine Benachrichtigung erhältst, über die Kennzeichnung `reasons` (Grund) in Deinem Posteingang.
  - Erstelle benutzerdefinierte Filter, um auf Wunsch auf verschiedene Benachrichtigungen fokussieren zu können.
  - Gruppiere Benachrichtigungen in Deinem Posteingang nach Repository oder Datum, um einen schnellen Überblick mit weniger Kontextwechseln zu erhalten

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %}
In addition, you can receive and triage notifications on your mobile device with
{% data variables.product.prodname_mobile %}. For more information, see "[Managing your notification settings with GitHub for mobile](#managing-your-notification-settings-with-github-for-mobile)" or "[GitHub for mobile](/github/getting-started-with-github/github-for-mobile)."
{% endif %}

#### Vorteile beim Benutzen eines E-Mail-Client für Benachrichtigungen

Ein Vorteil der Verwendung eines E-Mail-Clients ist, dass alle Deine Benachrichtigungen unbegrenzt aufbewahrt werden können, abhängig von der Speicherkapazität Deines E-Mail-Clients. In Deinem Posteingang für Benachrichtigungen hingegen werden Benachrichtigungen nur für 5 Monate aufbewahrt, außer wenn du sie mit **Saved** (Gesichert) markiert hast. Mit **Saved** (Gesichert) markierte Benachrichtigungen werden unbegrenzt gespeichert. Weitere Informationen zur Aufbewahrungsrichtlinie Deines Posteingangs findest Du unter „[Über Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)."

Benachrichtigungen an Deinen E-Mail-Client zu senden erlaubt Dir auch, Deinen Posteingang mit allen Einstellungen deines E-Mail-Clients anzupassen, welche allenfalls benutzerdefinierte oder farbcodierte Kennzeichnungen beinhalten.

E-Mail-Benachrichtigungen ermöglichen auch Flexibilität bei der Art von Benachrichtigungen, die Du erhältst und erlauben Dir die Auswahl verschiedener E-Mail-Adressen für Aktualisierungen. Beispielsweise kannst Du bestimmte Benachrichtigungen für ein Repository an die verifizierte persönliche E-Mail-Adresse senden. Weitere Informationen über E-Mail-Anpassungsoptionen findest Du unter „[Deine E-Mail-Benachrichtigungen anpassen](#customizing-your-email-notifications)."

### Über die Teilnahme und das Beobachten von Benachrichtigungen

Wenn Du ein Repository beobachtest, abonnierst Du Aktualisierungen für Aktivitäten in diesem Repository. Ebenfalls, wenn Du die Diskussionen eines bestimmten Teams verfolgst, abonnierst Du alle Aktualisierungen der Unterhaltung auf der Seite dieses Teams. Weitere Informationen finden Sie unter „[Informationen zu Teamdiskussionen](/github/setting-up-and-managing-organizations-and-teams/about-team-discussions)“.

To see repositories that you're watching, go to your [watching page](https://github.com/watching). Weitere Informationen findest Du unter „[Abonnements und Benachrichtigungen auf GitHub verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)."
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
#### Benachrichtigungen konfigurieren
{% endif %}
You can configure notifications for a repository on the repository page, or on your watching page.
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} You can choose to only receive notifications for releases in a repository, or ignore all notifications for a repository.{% endif %}{% if currentVersion == "free-pro-team@latest" %}

#### About custom notifications
{% data reusables.notifications-v2.custom-notifications-beta %}
You can customize notifications for a repository, for example, you can choose to only be notified when updates to one or more types of events (issues, pull request, releases, discussions) happen within a repository, or ignore all notifications for a repository.
{% endif %} For more information, see "[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions#configuring-your-watch-settings-for-an-individual-repository)."

#### Participating in conversations
Jedes Mal, wenn Du in einer Unterhaltung kommentierst oder wenn jemand Deinen Benutzernamen @erwähnt, bist Du _Teilnehmer_ in einer Unterhaltung. Standardmäßig abonnierst Du automatisch eine Unterhaltung, wenn Du daran teilnimmst. Du kannst Dich manuell von einer Unterhaltung abmelden, an der Du teilgenommen hast, indem Du auf dem Issue oder Pull Request auf **Unsubscribe** (Abmelden) klickst oder durch die Option **Unsubscribe** (Abmelden) im Posteingang für Benachrichtigungen.

For conversations you're watching or participating in, you can choose whether you want to receive notifications by email or through the notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} and {% data variables.product.prodname_mobile %}{% endif %}.

![Optionen für Teilnahme- und Beobachtungs-Benachrichtigungen](/assets/images/help/notifications-v2/participating-and-watching-options.png)

Ein Beispiel:
  - Wenn Du nicht möchtest, dass Benachrichtigungen an Deine E-Mail gesendet werden, deaktiviere **email** (E-Mail) für die Teilnahme und das Beobachten von Benachrichtigungen.
  - Wenn Du Benachrichtigungen per E-Mail erhalten möchtest, wenn Du an einer Unterhaltung teilgenommen hast, kannst du **email** (E-Mail) unter „Participating" (Teilnehmen) auswählen.

If you do not enable watching or participating notifications for web{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} and mobile{% endif %}, then your notifications inbox will not have any updates.

### E-Mail-Benachrichtigungen anpassen

Nach der Aktivierung von E-Mail-Benachrichtigungen sendet Dir {% data variables.product.product_name %} Benachrichtigungen als mehrteilige E-Mails, die sowohl HTML als auch reine Textkopien des Inhalts enthalten. Der Inhalt der E-Mail-Benachrichtigung umfasst alle Markdowns, @Erwähnungen, Emojis, Hash-Links usw., die im ursprünglichen Inhalt auf {% data variables.product.product_name %} erscheinen. Wenn Du nur den Text in der E-Mail sehen möchtest, kannst Du Deinen E-Mail-Client so konfigurieren, dass er nur die reine Textkopie anzeigt.

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% if currentVersion == "free-pro-team@latest" %}

Wenn Sie Gmail verwenden, können Sie auf eine Schaltfläche neben der Benachrichtigungs-E-Mail klicken, um den ursprünglichen Issue bzw. Pull Request anzuzeigen, der die Benachrichtigung generiert hat.

![Schaltflächen in Gmail](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

Wähle eine Standard-E-Mail-Adresse, an die Du Aktualisierungen für Unterhaltungen senden willst, an denen Du teilnimmst oder die Du beobachtest. Du kannst auch definieren, für welche Aktivitäten auf {% data variables.product.product_name %} Du Aktualisierungen über Deine Standard-E-Mail-Adresse erhalten willst. Wähle zum Beispiel aus, ob Du Aktualisierungen an Deine Standard-E-Mail senden möchtest für:
  - Kommentare für Issues und Pull Requests.
  - Pull-Request-Reviews.
  - Pull-Request-Pushes.
  - Deine eigenen Aktualisierungen, wie wenn Du beispielsweise einen Issue oder Pull Request öffnest, kommentierst oder schließt.

Depending on the organization that owns the repository, you can also send notifications to different email addresses. Deine Organisation verlangt möglicherweise, dass E-Mail-Adressen für bestimmte Domänen verifiziert sein müssen. For more information, see "[Choosing where your organization’s email notifications are sent](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)."

You can also send notifications for a specific repository to an email address. Weitere Informationen findest Du unter "[Informationen zu E-Mail-Benachrichtigungen für Pushes in Dein Repository](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)."

{% data reusables.notifications-v2.email-notification-caveats %}

### E-Mail-Benachrichtigungen filtern

Jede E-Mail-Benachrichtigung, die {% data variables.product.product_name %} sendet, enthält Headerinformationen. Die Header-Informationen in jeder E-Mail sind einheitlich, sodass Du sie in Deinem E-Mail-Client verwenden kannst, um alle {% data variables.product.product_name %}-Benachrichtigungen oder bestimmte Arten von {% data variables.product.product_name %}-Benachrichtigungen zu filtern oder weiterzuleiten.

Wenn Du glaubst, dass Du Benachrichtigungen erhältst, die nicht zu Dir gehören, überprüfe die Header für `X-GitHub-Recipient` (Empfänger) und `X-GitHub-Recipient-Address` (Empfänger-Adresse). Diese Header zeigen an, wer der beabsichtigte Empfänger ist. Abhängig von Deiner E-Mail-Einrichtung erhältst Du möglicherweise Benachrichtigungen für einen anderen Benutzer.

E-Mail-Benachrichtigungen von {% data variables.product.product_name %} enthalten die folgenden Headerinformationen:

| Header                   | Informationen                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `From`-Adresse           | This address will always be {% if currentVersion == "free-pro-team@latest" %}'`notifications@github.com`'{% else %}'the no-reply email address configured by your site administrator'{% endif %}.                                                                                                                                                                              |
| `To`-Feld                | This field connects directly to the thread.{% if currentVersion != "github-ae@latest" %} If you reply to the email, you'll add a new comment to the conversation.{% endif %}
| `Cc`-Adresse             | {% data variables.product.product_name %} fügt Sie zu `Cc` hinzu, wenn Sie eine Unterhaltung abonniert haben. Die zweite E-Mail-Adresse in `Cc` entspricht dem Benachrichtigungsgrund. Das Suffix für diese Benachrichtigungsgründe lautet {% data variables.notifications.cc_address %}. Zu den möglichen Benachrichtigungsgründen gehören folgende: <ul><li>`assign`: Dir wurde ein Issue oder Pull Request zugewiesen.</li><li>`author`: Du hast einen Issue oder Pull Request erstellt.</li><li>`comment`: Du hast einen Issue oder Pull Request kommentiert.</li><li>`manual`: Ein Issue oder Pull Request, den Du manuell abonniert hast, wurde aktualisiert.</li><li>`mention`: Du wurdest in einem Issue oder Pull Request erwähnt.</li><li>`push`: Jemand hat einen Commit für einen Pull Request erstellt, den Du abonniert hast.</li><li>`review_requested`: Du oder ein Team, dem Du angehörst, wurdest/wurde gebeten, einen Review für einen Pull Request durchzuführen.</li>{% if currentVersion != "github-ae@latest" %}<li>`security_alert`: {% data variables.product.prodname_dotcom %} hat eine Schwachstelle in einem Repository erkannt, für das Du Sicherheitswarnungen erhältst.</li>{% endif %}<li>`state_change`: Ein Issue oder Pull Request, den Du abonniert hast, wurde entweder geschlossen oder geöffnet.</li><li>`subscribed`: Es gab eine Aktualisierung in einem Repository, das Du beobachtest.</li><li>`team_mention`: Ein Team, dem Du angehörst, wurde in einem Issue oder Pull Request erwähnt.</li><li>`your_activity`: Du hast einen Issue oder Pull Request geöffnet, kommentiert oder geschlossen.</li></ul> |
| `mailing list`-Feld      | In diesem Feld werden der Name des Repositorys und sein Inhaber identifiziert. Das Format dieser Adresse lautet immer `<repository name>.<repository owner>.{% data variables.command_line.backticks %}`. |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
| `X-GitHub-Severity`-Feld | {% data reusables.repositories.security-alerts-x-github-severity %} Die möglichen Schweregrade sind:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)." | 
{% endif %}

### Wähle Deine Benachrichtigungseinstellungen

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. Auf der Seite für Benachrichtigungseinstellungen wählst Du, wie Du Benachrichtigungen erhalten willst, wenn:
    - Es Aktualisierungen in Repositories oder Teamdiskussionen gibt, die Du beobachtest, oder in einer Unterhaltung, an der Du teilnimmst. Weitere Informationen findest Du unter „[Über die Teilnahme an und das Beobachten von Benachrichtigungen](#about-participating-and-watching-notifications)."
    - Du Zugriff erhältst auf ein neues Repository oder wenn Du einem neuen Team beigetreten bist. For more information, see "[Automatic watching](#automatic-watching)."{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
    - There are new {% if page.version == 'dotcom' %} {% data variables.product.prodname_dependabot_alerts %} {% else %} security alerts {% endif %} in your repository. Weitere Informationen findest Du unter „[{% data variables.product.prodname_dependabot_alerts %} Benachrichtigungsoptionen](#dependabot-alerts-notification-options)." {% endif %}{% if currentVersion == "enterprise-server@2.21" %}
    - Es neue Sicherheitswarnungen in Deinem Repository gibt. For more information, see "[Security alert notification options](#security-alert-notification-options)." {% endif %} {% if currentVersion == "free-pro-team@latest" %}
    - Es Aktualisierungen zu Workflow-Ausführungen auf Repositorys gibt, die mit {% data variables.product.prodname_actions %} aufgesetzt wurden. For more information, see "[{% data variables.product.prodname_actions %} notification options](#github-actions-notification-options)."{% endif %}

### Automatisches Beobachten

Standardmäßig wirst Du jedes Mal, wenn Du Zugriff auf ein neues Repository erhältst, automatisch mit der Beobachtung dieses Repository beginnen. Jedes mal, wenn Du einem neuen Team beitrittst, abonnierst Du automatisch Aktualisierungen und erhältst Benachrichtigungen, wenn dieses Team @erwähnt ist. Wenn Du keine automatischen Abonnements möchtest, kannst Du die automatischen Beobachtungsoptionen deaktivieren.

  ![Optionen für automatisches Beobachten](/assets/images/help/notifications-v2/automatic-watching-options.png)

Wenn "Automatisch Repositories beobachten" deaktiviert ist, wirst Du auch nicht automatisch Deine eigenen Repositorys beobachten. Du musst dann zu Deiner Repository-Seite navigieren und die Beobachtungsoption wählen.

### Konfiguration der Beobachtungseinstellungen für ein einzelnes Repository

Du kannst wählen, ob Du ein einzelnes Repository ansehen möchtest oder nicht mehr. You can also choose to only be notified of {% if currentVersion == "free-pro-team@latest" %}certain event types such as issues, pull requests, discussions (if enabled for the repository) and {% endif %}new releases, or completely ignore an individual repository.

{% data reusables.repositories.navigate-to-repo %}
2. Klicke in der oberen rechten Ecke auf das Dropdownmenü „Watch" (Beobachten), um eine der Beobachtungsoptionen zu wählen.
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
  ![Beobachtungsoptionen in einem Dropdownmenü für ein Repository](/assets/images/help/notifications-v2/watch-repository-options.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
   ![Beobachtungsoptionen in einem Dropdownmenü für ein Repository](/assets/images/help/notifications-v2/watch-repository-options-custom.png)
{% data reusables.notifications-v2.custom-notifications-beta %}
The **Custom** option allows you to further customize notifications so that you're only notified when specific events happen in the repository, in addition to participating and @mentions.

   ![Custom watch options in a drop-down menu for a repository](/assets/images/help/notifications-v2/watch-repository-options-custom2.png)

If you select "Issues", you will be notified about, and subscribed to, updates on every issue (including those that existed prior to you selecting this option) in the repository. If you're @mentioned in a pull request in this repository, you'll receive notifications for that too, and you'll be subscribed to updates on that specific pull request, in addition to being notified about issues.

{% endif %}

### Wähle, wohin die E-Mail-Benachrichtigungen Deiner Organisation gesendet werden

Wenn Sie einer Organisation angehören, können Sie das E-Mail-Konto auswählen, an das die Benachrichtigungen für Aktivitäten in der Organisation gesendet werden sollen. Wenn Sie z. B. einer Organisation für die Arbeit angehören, könnten Sie sich die Benachrichtigungen an Ihre berufliche E-Mail-Adresse senden lassen statt an Ihre private.

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. Wählen Sie unter „Default notification email“ (Standardmäßige Benachrichtigungs-E-Mail-Adresse) die E-Mail-Adresse aus, an die Benachrichtigungen gesendet werden sollen.   
   ![Dropdownmenü mit standardmäßiger Benachrichtigungs-E-Mail-Adresse](/assets/images/help/notifications/notifications_primary_email_for_orgs.png)
4. Klicke auf **Save** (Speichern).

#### E-Mail-Routen pro Organisation anpassen

If you are a member of more than one organization, you can configure each one to send notifications to any of{% if currentVersion == "free-pro-team@latest" %} your verified email addresses{% else %} the email addressed you've added to your {% data variables.product.product_name %} account{% endif %}. {% if currentVersion == "free-pro-team@latest" %} For more information, see "[Verifying your email address](/articles/verifying-your-email-address)."{% endif %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. Suchen Sie in der Liste unter „Custom routing“ (Benutzerdefiniertes Routing) den Namen Ihrer Organisation.   
   ![Liste der Organisationen und E-Mail-Adressen](/assets/images/help/notifications/notifications_org_emails.png)
4. Klicke neben der E-Mail-Adresse, die Du ändern möchtest, auf **Edit** (Bearbeiten). ![E-Mail-Adressen einer Organisation bearbeiten](/assets/images/help/notifications/notifications_edit_org_emails.png)
5. Wähle eine Deiner verifizierten E-Mail-Adressen aus, und klicke dann auf **Save** (Speichern).    
   ![Eigene E-Mail-Adressen pro Organisation ändern](/assets/images/help/notifications/notifications_switching_org_email.gif)

{% if currentVersion != "github-ae@latest" %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_dependabot_alerts %} Benachrichtigungsoptionen
{% else %}
### Security alert notification options
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}
For more information about the notification delivery methods available to you, and advice on optimizing your notifications for

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}, see "[Configuring notifications for vulnerable dependencies](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_actions %} Benachrichtigungsoptionen

Wähle, wie Du Aktualisierungen für Workflow-Ausführungen erhalten willst für Repositorys, die Du beobachtest und die mit {% data variables.product.prodname_actions %} aufgesetzt sind. Du kannst auch wählen, nur Benachrichtigungen für fehlgeschlagene Workflow-Ausführungen zu erhalten.

  ![Notification options for GitHub Actions](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %}
### Managing your notification settings with {% data variables.product.prodname_mobile %}

Wenn Du {% data variables.product.prodname_mobile %} installierst, bist Du automatisch für Web-Benachrichtigungen abonniert. Within the app, you can enable push notifications for the following events.
- Direct mentions
- Assignments to issues or pull requests
- Requests to review a pull request
- Requests to approve a deployment

You can also schedule when {% data variables.product.prodname_mobile %} will send push notifications to your mobile device.

{% data reusables.mobile.push-notifications-on-ghes %}

#### Managing your notification settings with {% data variables.product.prodname_ios %}

1. In the bottom menu, tap **Profile**.
2. Um deine Einstellungen zu sehen, tippe auf {% octicon "gear" aria-label="The Gear icon" %}.
3. To update your notification settings, tap **Notifications** and then use the toggles to enable or disable your preferred types of push notifications.
4. Optionally, to schedule when {% data variables.product.prodname_mobile %} will send push notifications to your mobile device, tap **Working Hours**, use the **Custom working hours** toggle, and then choose when you would like to receive push notifications.

#### Managing your notification settings with {% data variables.product.prodname_android %}

1. In the bottom menu, tap **Profile**.
2. Um deine Einstellungen zu sehen, tippe auf {% octicon "gear" aria-label="The Gear icon" %}.
3. To update your notification settings, tap **Notifications** and then use the toggles to enable or disable your preferred types of push notifications.
4. Optionally, to schedule when {% data variables.product.prodname_mobile %} will send push notifications to your mobile device, tap **Receive Notifications**, use the **Custom working hours** toggle, and then choose when you would like to receive push notifications.

### Configuring your watch settings for an individual repository with {% data variables.product.prodname_mobile %}

Du kannst wählen, ob Du ein einzelnes Repository ansehen möchtest oder nicht mehr. You can also choose to only be notified of {% if currentVersion == "free-pro-team@latest" %}certain event types such as issues, pull requests, discussions (if enabled for the repository) and {% endif %}new releases, or completely ignore an individual repository.

1. On {% data variables.product.prodname_mobile %}, navigate to main page of the repository.
2. Tap **Watch**. ![The watch button on {% data variables.product.prodname_mobile %}](/assets/images/help/notifications-v2/mobile-watch-button.png)
3. To choose what activities you receive notifications for, tap your preferred watch settings. ![Watch settings dropdown menu in {% data variables.product.prodname_mobile %}](/assets/images/help/notifications-v2/mobile-watch-settings.png)
{% data reusables.notifications-v2.custom-notifications-beta %}

{% endif %}
