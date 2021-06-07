---
title: Informationen zu Benachrichtigungen
intro: 'Benachrichtigungen bieten aktuelle Informationen zu den Aktivitäten und Unterhaltungen, an denen Du interessiert bist. Sie können Benachrichtigungen auf {% data variables.product.product_name %} empfangen oder über Ihren E-Mail-Client.'
versions:
  enterprise-server: <2.21
redirect_from:
  - /github/receiving-notifications-about-activity-on-github/about-notifications
---
### Arten von Benachrichtigungen

Die Benachrichtigungen, die Du erhältst, sind entweder *Teilnahmebenachrichtigungen* oder *Beobachtungsbenachrichtigungen*. Beide Arten von Benachrichtigungen können als Webbenachrichtigungen oder E-Mail-Benachrichtigungen empfangen werden. Weitere Informationen findest Du unter:

- „[Über Webbenachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"
- „[Über E-Mail-Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- „[Auslieferungsmethode für Deine Benachrichtigungen wählen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)"

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

#### Teilnahmebenachrichtigungen

{% data variables.product.product_name %} versendet *Teilnahmebenachrichtigungen*, wenn Du direkt an Aktivitäten oder Unterhaltungen innerhalb eines Repositorys oder eines Teams beteiligt bist, dem Du angehörst. In folgenden Fällen erhältst Du eine Benachrichtigung:
  - Du oder ein Team, dem Du angehörst, werden erwähnt. Weitere Informationen findest Du unter „[Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams).“
  - Das übergeordnete Team eines untergeordneten Teams, dem Du angehörst, wird erwähnt. Weitere Informationen finden Sie unter „[Informationen zu Teams](/articles/about-teams)“.
  - Dir wird ein Issue oder Pull Request zugewiesen.
  - In einer von Dir abonnierten Unterhaltung wird ein Kommentar hinzugefügt.
  - Es wird ein Commit für einen Pull Request durchgeführt, den Du abonniert hast.
  - Du öffnest, kommentierst oder schließt einen Issue oder Pull Request.
  - Es wird ein Review abgesendet, der Änderungen an einem Pull Request, den Du abonniert hast, genehmigt oder anfordert.
  - Du oder ein Team, dem Du angehörst, werden gebeten, einen Review für einen Pull Request durchzuführen.
  - Du oder ein Team, dem Du angehörst, sind der designierte Inhaber einer Datei und jemand öffnet einen Pull Request, durch den diese Datei geändert wird. Weitere Informationen findest Du unter „[Informationen zu Codeinhabern](/articles/about-code-owners).“
  - Du erstellst eine Teamdiskussion oder antwortest darauf.

#### Beobachtungsbenachrichtigungen

{% data variables.product.product_name %} versendet *Beobachtungsbenachrichtigungen* bei Aktualisierungen in Repositorys oder Teamdiskussionen, die Du gerade beobachtest.  {% data reusables.notifications.auto-watch %}For more information, see "[Watching and unwatching repositories](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)."
In folgenden Fällen erhältst Du eine Benachrichtigung:
  - Ein Issue wird geöffnet.
  - Ein Kommentar wird einem offenen Issue hinzugefügt.
  - Ein Pull Request wird geöffnet.
  - Ein Kommentar wird einem offenen Pull Request hinzugefügt.
  - Ein Kommentar wird einem Commit hinzugefügt.
  - Ein Release wird veröffentlicht. Weitere Informationen finden Sie unter „[Informationen zu Veröffentlichungen](/articles/about-releases)“. Du kannst auch nur auf Releases achten, die in einem Repository veröffentlicht werden, anstatt auf alle Aktualisierungen in einem Repository. Weitere Informationen findest Du unter „[Beobachtung von Repositorys aktivieren oder deaktivieren](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository)."
  - Es wird ein Review abgesendet, der Änderungen an einem Pull Request genehmigt oder anfordert.
  - Ein Beitrag in einer Teamdiskussion für ein Team, das Du gerade beobachtest, wird erstellt oder beantwortet.
  - Ein Beitrag in einer Teamdiskussion für ein übergeordnetes Team oder ein Team, dem Du angehörst und das Du beobachtest, wird geöffnet, bearbeitet oder beantwortet. Weitere Informationen findest Du unter „[Verschachtelte Teams](/articles/about-teams/#nested-teams).“

Du kannst außerdem die Aktivitäten von Personen, denen Du folgst, von Repositorys, die Du beobachtest, und von Organisationen, denen Du angehörst, in Deinem Dashboard durchsuchen. Weitere Informationen findest Du unter „[Informationen zum persönlichen Dashboard](/articles/about-your-personal-dashboard).“

### Weiterführende Informationen

- „[Repositorys auflisten, die Du beobachtest](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
- „[Beobachten von Repositorys aktivieren oder deaktivieren](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- „[Beobachten von Teamdiskussionen aktivieren oder deaktivieren](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-team-discussions)"
- „[Abonnieren oder Kündigen von Benachrichtigungen](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
