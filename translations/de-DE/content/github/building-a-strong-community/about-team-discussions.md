---
title: Informationen zu Teamdiskussionen
intro: 'Dein Team kann in Diskussionsbeiträgen auf der Teamseite einer Organisation gemeinsam planen, sich gegenseitig auf den neuesten Stand bringen oder über jedes beliebige Thema sprechen.'
redirect_from:
  - /articles/about-team-discussions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.organizations.team-discussions-purpose %}

Jedes Organisationsmitglied kann Beiträge auf der Seite Deines Teams veröffentlichen oder an einer öffentlichen Diskussion teilnehmen. {% data reusables.organizations.team-discussions-permissions %}

![Registerkarte mit Diskussionen auf einer Teamseite mit öffentlichen und privaten Diskussionen](/assets/images/help/organizations/team-page-discussions-tab.png)

Du kannst auf jede Teamdiskussion verknüpfen, um sie an anderer Stelle zu referenzieren. Du kannst wichtige Beiträge an die Seite Deines Teams anheften, um sie später schnell wiederzufinden. Weitere Informationen findest Du unter „[Eine Teamdiskussion anheften](/articles/pinning-a-team-discussion).“

![Registerkarte mit angehefteten Diskussionen auf einer Teamseite mit angehefteter Diskussion](/assets/images/help/organizations/team-discussions-pinned.png)

{% data reusables.organizations.team-discussions-default %}-Inhaber können Teamdiskussionen für die gesamte Organisation deaktivieren. Weitere Informationen findest Du unter „[Teamdiskussionen innerhalb Deiner Organisation deaktivieren](/articles/disabling-team-discussions-for-your-organization).“

### Benachrichtigungen für Teamdiskussionen

Wenn jemand eine öffentliche Diskussion auf der Seite eines Teams veröffentlicht oder beantwortet, erhalten Mitglieder des Teams und Mitglieder von untergeordneten Teams E-Mail- oder Webbenachrichtigungen. Wenn jemand eine private Diskussion auf der Seite eines Teams veröffentlicht oder beantwortet, erhalten nur Mitglieder des Teams Benachrichtigungen.

{% tip %}

**Tipp:** Abhängig von Deinen Benachrichtigungseinstellungen erhältst Du Updates per E-Mail, über die Seite mit den Webbenachrichtigungen auf {% data variables.product.product_name %} oder beide. For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}"[About email notifications](/github/receiving-notifications-about-activity-on-github/about-email-notifications)" and "[About web notifications](/github/receiving-notifications-about-activity-on-github/about-web-notifications){% endif %}."

{% endtip %}

Wenn Dein Benutzername in einer Teamdiskussion erwähnt wird, erhältst Du standardmäßig Benachrichtigungen für den Beitrag, in dem Dein Benutzername erwähnt wird, und alle Antworten auf diesen Beitrag. Außerdem erhältst Du standardmäßig Benachrichtigungen für andere Antworten auf einen von Dir beantworteten Beitrag.

Um Benachrichtigungen für Teamdiskussionen zu deaktivieren, kannst Du einen bestimmten Diskussionsbeitrag kündigen oder Deine Benachrichtigungseinstellungen so ändern, dass Du die Diskussionen eines bestimmten Teams nicht mehr beobachtest oder vollständig ignorierst. Du kannst Benachrichtigungen für einen bestimmten Diskussionsbeitrag abonnieren, auch wenn Du die Diskussionen dieses Teams nicht beobachtest.

For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions){% else %}"[Subscribing to and unsubscribing from notifications](/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications){% endif %}" and "[Nested teams](/articles/about-teams/#nested-teams)."

### Weiterführende Informationen

- „[Informationen zu Unterhaltungen auf {% data variables.product.prodname_dotcom %}](/articles/about-conversations-on-github)“
- „[Informationen zu Teams](/articles/about-teams)“
- „[Eine Teamdiskussion erstellen](/articles/creating-a-team-discussion)“
- „[Eine Teamdiskussion bearbeiten oder löschen](/articles/editing-or-deleting-a-team-discussion)“
