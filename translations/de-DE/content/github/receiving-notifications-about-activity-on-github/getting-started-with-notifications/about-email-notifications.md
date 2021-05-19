---
title: Informationen zu E-Mail-Benachrichtigungen
intro: 'Wenn Du E-Mail-Benachrichtigungen aktivierst, erhältst Du Teilnahme- und Beobachtungsbenachrichtigungen in Deinem E-Mail-Client, die Du anhand der E-Mail-Headerinformationen filtern kannst.'
versions:
  enterprise-server: <2.21
redirect_from:
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications
---
Weitere Informationen über die Unterschiede zwischen *Teilnahmebenachrichtigungen* und *Beobachtungsbenachrichtigungen-* findest Du auf [Über Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)."

Nach der Aktivierung von E-Mail-Benachrichtigungen sendet Dir {% data variables.product.product_name %} Benachrichtigungen als mehrteilige E-Mails, die sowohl HTML als auch reine Textkopien des Inhalts enthalten. Der Inhalt der E-Mail-Benachrichtigung umfasst alle Markdowns, @Erwähnungen, Emojis, Hash-Links usw., die im ursprünglichen Inhalt auf {% data variables.product.product_name %} erscheinen. Wenn Du nur den Text in der E-Mail sehen möchtest, kannst Du Deinen E-Mail-Client so konfigurieren, dass er nur die reine Textkopie anzeigt. Weitere Informationen über das Aktivieren von E-Mail-Benachrichtigungen findest Du unter „[Auslieferungsmethode für Deine Benachrichtigungen wählen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications).“

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

### E-Mail-Benachrichtigungen filtern

Jede E-Mail-Benachrichtigung, die {% data variables.product.product_name %} sendet, enthält Headerinformationen. Die Header-Informationen in jeder E-Mail sind einheitlich, sodass Du sie in Deinem E-Mail-Client verwenden kannst, um alle {% data variables.product.product_name %}-Benachrichtigungen oder bestimmte Arten von {% data variables.product.product_name %}-Benachrichtigungen zu filtern oder weiterzuleiten.

E-Mail-Benachrichtigungen von {% data variables.product.product_name %} enthalten die folgenden Headerinformationen:

| Header                                                    | Informationen                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `From`-Adresse                                            | Diese Adresse wird immer die von Deinem Administrator konfigurierte „No-Reply-E-Mail-Adresse" sein.                                                                                                                                                                                                                                                                            |
| `To`-Feld                                                 | Dieses Feld ist direkt mit dem Thread verknüpft. Wenn Du auf die E-Mail antwortest, fügst Du der Unterhaltung einen neuen Kommentar hinzu.                                                                                                                                                                                                                                     |
| `Cc`-Adresse                                              | {% data variables.product.product_name %} fügt Sie zu `Cc` hinzu, wenn Sie eine Unterhaltung abonniert haben. Die zweite E-Mail-Adresse in `Cc` entspricht dem Benachrichtigungsgrund. Das Suffix für diese Benachrichtigungsgründe lautet {% data variables.notifications.cc_address %}. Zu den möglichen Benachrichtigungsgründen gehören folgende: <ul><li>`assign`: Dir wurde ein Issue oder Pull Request zugewiesen.</li><li>`author`: Du hast einen Issue oder Pull Request erstellt.</li><li>`comment`: Du hast einen Issue oder Pull Request kommentiert.</li><li>`manual`: Ein Issue oder Pull Request, den Du manuell abonniert hast, wurde aktualisiert.</li><li>`mention`: Du wurdest in einem Issue oder Pull Request erwähnt.</li><li>`push`: Jemand hat einen Commit für einen Pull Request erstellt, den Du abonniert hast.</li><li>`review_requested`: Du oder ein Team, dem Du angehörst, wurdest/wurde gebeten, einen Review für einen Pull Request durchzuführen.</li><li>`security_alert`: {% data variables.product.prodname_dotcom %} hat eine Schwachstelle in einem Repository erkannt, für das Du Sicherheitswarnungen erhältst.</li><li>`state_change`: Ein Issue oder Pull Request, den Du abonniert hast, wurde entweder geschlossen oder geöffnet.</li><li>`subscribed`: Es gab eine Aktualisierung in einem Repository, das Du beobachtest.</li><li>`team_mention`: Ein Team, dem Du angehörst, wurde in einem Issue oder Pull Request erwähnt.</li><li>`your_activity`: Du hast einen Issue oder Pull Request geöffnet, kommentiert oder geschlossen.</li></ul> |
| `mailing list`-Feld                                       | In diesem Feld werden der Name des Repositorys und sein Inhaber identifiziert. Das Format dieser Adresse lautet immer `<repository name>.<repository owner>.{% data variables.command_line.backticks %}`.                                                                                                                                                          |{% if currentVersion ver_gt "enterprise-server@2.19" % %}
| `X-GitHub-Severity`-Feld                                  | {% data reusables.repositories.security-alerts-x-github-severity %} Die möglichen Schweregrade sind:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)." | 
{% endif %}

### Weiterführende Informationen

- „[Repositorys auflisten, die Du beobachtest](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
- „[Beobachten von Repositorys aktivieren oder deaktivieren](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- „[Abonnieren oder Kündigen von Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
- „[Gists erstellen](/articles/creating-gists)“
