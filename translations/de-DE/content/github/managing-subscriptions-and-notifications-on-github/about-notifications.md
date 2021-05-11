---
title: Informationen zu Benachrichtigungen
intro: 'Benachrichtigungen bieten Aktualisierungen über die Aktivitäten auf {% data variables.product.product_name %} , die Du abonniert hast. Du kannst den Posteingang für Benachrichtigungen verwenden, um deine Updates anzupassen, zu selektieren und zu verwalten.'
redirect_from:
  - /articles/notifications/
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### Benachrichtigungen und Abonnements

Über ein Abonnement kannst Du festlegen, dass Du Aktualisierungen zu bestimmten Aktivitäten auf {% data variables.product.product_name %} erhalten willst. Benachrichtigungen sind Aktualisierungen, die Du für bestimmte Aktivitäten erhältst, die Du abonniert hast.

#### Abonnement-Optionen

Du kannst Benachrichtigungen abonnieren für:
- Eine Unterhaltung in einem spezifischen Issue, Pull Request oder Gist.
- Alle Aktivitäten in einem Repository oder in einer Team-Diskussion.
- CI-Aktivität wie beispielsweise der Status von Workflows in Repositorys, die mit {% data variables.product.prodname_actions %} aufgesetzt wurden.
{% if currentVersion == "free-pro-team@latest" %}
- Issues, pulls requests, releases and discussions (if enabled) in a repository.
{% endif %}
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- Releases in einem Repository.
{% endif %}

Du kannst auch automatisch alle Repositorys überwachen, auf die Du Push-Zugriff hast, mit Ausnahme von Forks. Du kannst jedes andere Repository, auf das Du Zugriff hast, manuell verfolgen durch klicken auf **Watch** (Beobachten).

Wenn Du kein Interesse mehr an einer Unterhaltung hast, kannst Du das Abonnement abmelden oder die Art der Benachrichtigungen anpassen, die Du in der Zukunft erhalten willst. Wenn Du beispielsweise keine Benachrichtigungen mehr von einem bestimmten Repository erhalten möchtest, kannst Du **Unsubscribe** (Abmelden) klicken. Weitere Informationen findest Du unter „[Deine Abonnements verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)."

#### Standardabonnements

Im Allgemeinen wirst Du automatisch Unterhaltungen abonniert erhalten, wenn folgendes gilt:
- Du hast automatische Beobachtungen auf Repositories oder Teams, denen Du beigetreten bist, in Deinen Benachrichtigungseinstellungen nicht deaktiviert. Diese Einstellung ist standardmäßig aktiviert.
- Du bist einem Issue oder Pull Request zugewiesen worden.
- Du hast einen Pull Request oder einen Issue eröffnet oder Du hast einen Beitrag in einer Teamdiskussion erstellt.
- Du hast einen Thread kommentiert.
- Du hast manuell einen Thread abonniert, indem Du auf **Watch** (Beobachten) or **Subscribe** (Abonnieren) geklickt hast.
- Du wurdest mit Deinem Benutzernahmen @erwähnt.
- Du hast den Status eine Thread geändert, zum Beispiel durch Schließen eines Issues oder Zusammenführen eines Pull Request.
- Ein Team, dem Du angehörst, wurde @erwähnt.

Standardmäßig überwachst Du auch automatisch alle Repositorys, die Du erstellst und die im Besitz Deines Benutzerkonto sind.

Um für Unterhaltungen, die Du automatisch abonniert hast, keine Benachrichtigungen mehr zu erhalten, kannst Du Deine Benachrichtigungseinstellungen ändern oder die Abonnements und Beobachtungen für Aktivitäten auf {% data variables.product.product_name %} direkt abmelden. Weitere Informationen findest Du unter „[Deine Abonnements verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)."

### Benachrichtigungen und Abonnements anpassen

You can choose to view your notifications through the notifications inbox at [https://github.com/notifications](https://github.com/notifications){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} and in the {% data variables.product.prodname_mobile %} app{% endif %}, through your email, or some combination of these options.

Konfiguriere Deine Benachrichtigungseinstellungen, um die Art von Aktualisierungen anzupassen, die Du erhalten möchtest, und wohin sie gesendet werden sollen. Weitere Informationen findest Du unter „[Benachrichtigungen konfigurieren](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications).”

Um Deine Abonnements übersichtlich zu halten, überprüfe Deine Abonnements und Deine verfolgten Repositorys regelmäßig und melde sie bei Bedarf ab. Weitere Informationen findest Du unter „[Abonnements für Aktivitäten auf GitHub verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)."

Um anzupassen, wie Du Aktualisierungen für bestimmte Pull Requests oder Issues erhalten möchtest, kannst Du Deine Einstellungen innerhalb des Issues oder Pull Requests konfigurieren. Weitere Informationen findest Du unter „[Eine einzelne Benachrichtigung selektieren](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request).”

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22"%}
You can customize and schedule push notifications in the
{% data variables.product.prodname_mobile %} app. Weitere Informationen findest Du unter „[Benachrichtigungen konfigurieren](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#managing-your-notification-settings-with-github-for-mobile)."
{% endif %}

### Gründe für den Erhalt von Benachrichtigungen

Dein Posteingang ist mit Standardfiltern konfiguriert, die die häufigsten Gründe dafür darstellen, warum Personen ihre Benachrichtigungen nachverfolgen müssen. Weitere Informationen über Posteingang-Filter findest Du unter „[Benachrichtigungen über Deinen Posteingang verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#default-notification-filters)."

Dein Posteingang zeigt eine Kennzeichnung für die `Gründe`, weshalb Du eine Benachrichtigungen erhältst.

![Begründungskennzeichnungen im Posteingang](/assets/images/help/notifications-v2/reasons-as-labels-in-inbox.png)

Du kannst Deinen Posteingang nach dem Grund filtern, warum Du Benachrichtigungen abonniert hast. Um beispielsweise nur Pull Requests zu sehen, für die jemand Deinen Review angefordert hast, kannst Du `review-requested` als Abfragefilter verwenden.

![Filtere Benachrichtigungen nach "Review Requested" (Review angefordert)](/assets/images/help/notifications-v2/review-requested-reason.png)

Wenn du Benachrichtigungen so konfiguriert hast, dass sie per E-Mail gesendet werden und Du glaubst, dass Du Benachrichtigungen erhältst, die nicht zu Dir gehören, versuche die Fehlerbehebung über E-Mail-Kopfzeilen, die den beabsichtigten Empfänger anzeigen. Weitere Informationen findest Du unter „[Benachrichtigungen konfigurieren](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)."

### Benachrichtigungen in Deinem Posteingang selektieren

Um Deine Benachrichtigungen effektiv zu verwalten, kannst Du sie in Deinem Posteingang mit folgenden Optionen selektieren:
- Entferne eine Benachrichtigung aus dem Posteingang mit **Done** (Erledigt). Du kannst Benachrichtigungen mit Kennzeichnung **Done** (Erledigt) alle an einem Ort überprüfen, indem Du in der Seitenleiste auf **Done** (Erledigt) klickst oder indem Du die Abfrage `is:done` benutzt.
- Markiere eine Benachrichtigung als gelesen oder ungelesen.
- **Save** (Sichere) eine Benachrichtigung für eine spätere Überprüfung. **Saved** (Gesicherte) Benachrichtigungen sind in Deinem Posteingang markiert. Du kannst Benachrichtigungen mit Kennzeichnung **Saved** (Gesichert) alle an einem Ort überprüfen, indem Du in der Seitenleiste auf **Saved** (Gesichert) klickst oder indem Du die Abfrage `is:saved` benutzt.
- Melde eine Benachrichtigung automatisch ab und auch künftige Aktualisierungen dieser Unterhaltung. Das Abmelden entfernt die Benachrichtigung auch aus Deinem Posteingang. Wenn Du Dich aus einer Unterhaltung abmeldest und später jemandem Deinen Benutzernamen oder ein Team erwähnt, von dem Du Aktualisierungen erhältst, dann wirst Du wieder Benachrichtigungen von dieser Unterhaltung erhalten.

Aus Deinem Posteingang heraus kannst Du auch mehrere Benachrichtigungen auf einmal selektieren. Weitere Informationen findest Du unter „[Benachrichtigungen über Deinen Posteingang verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)."

### Deinen Posteingang für Benachrichtigungen anpassen

To focus on a group of notifications in your inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} or {% data variables.product.prodname_mobile %}{% endif %}, you can create custom filters. Zum Beispiel kannst Du einen benutzerdefinierten Filter für ein Open-Source-Projekt erstellen, zu dem Du beiträgst, und nur Benachrichtigungen für das Repository sehen, in dem Du erwähnt bist. Weitere Informationen findest du unter „[Benachrichtigungen über Deinen Posteingang verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)." Weitere Beispiele für die Anpassung Deines Selektions-Workflows findest Du unter „[Einen Workflow für das Selektieren Deiner Benachrichtigungen anpassen](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)."

### Richtlinie zur Aufbewahrung von Benachrichtigungen

Benachrichtigungen, die nicht als **Saved** (Gesichert) markiert sind, werden für 5 Monate aufbewahrt. Benachrichtigungen, die als **Saved** (Gesichert) markiert sind, werden unbegrenzt aufbewahrt. Wenn Deine gesicherte Benachrichtigung älter als 5 Monate ist und Du die „gesichert" Markierung entfernst, wird die Benachrichtigung innerhalb eines Tages aus Deinem Posteingang entfernt.

### Feedback und Support

Wenn Du Feedback oder Funktionsanfragen für Benachrichtigungen hast, benutze das [Feedback Formular für Benachrichtigungen](https://support.github.com/contact/feedback?contact%5Bcategory%5D=notifications&contact%5Bsubject%5D=Product+feedback).
