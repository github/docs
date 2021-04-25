---
title: Informationen zu Teams
intro: Teams sind Gruppen von Organisationsmitgliedern, welche die Struktur Deines Unternehmens oder Deiner Gruppe mit kaskadierenden Zugriffsberechtigungen und Erwähnungen widerspiegeln.
redirect_from:
  - /articles/about-teams
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
---

![Liste der Teams in einer Organisation](/assets/images/help/teams/org-list-of-teams.png)

Organisationsinhaber und Team-Betreuer können Teams Administrator-, Lese- oder Schreibzugriff auf die Repositorys der Organisation gewähren. Organisationsmitglieder können eine Benachrichtigung an ein ganzes Team senden, indem sie den Namen des Teams erwähnen. Organisationsmitglieder können außerdem eine Benachrichtigung an ein ganzes Team senden, indem sie von diesem Team einen Review anfordern. Organisationsmitglieder können Reviews von bestimmten Teams mit Lesezugriff auf das Repository anfordern, in dem der Pull Request geöffnet ist. Teams können als Inhaber bestimmter Codetypen oder Codebereiche in einer CODEOWNERS-Datei bestimmt werden.

Weitere Informationen findest Du unter:
- „[Den Teamzugriff auf ein Repository einer Organisation verwalten](/articles/managing-team-access-to-an-organization-repository)“
- „[Personen und Teams erwähnen](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)“
- „[Informationen zu Codeinhabern](/articles/about-code-owners/)“

![Bild einer Teamerwähnung](/assets/images/help/teams/team-mention.png)

{% if enterpriseServerVersions contains currentVersion %}

Sie können außerdem mit LDAP Sync {% data variables.product.product_location %}-Teammitglieder und -Teamrollen mit Ihren bestehenden LDAP-Gruppen synchronisieren. Dadurch können Sie eine rollenbasierte Zugriffskontrolle für Benutzer von Ihrem LDAP-Server aus statt manuell innerhalb von {% data variables.product.product_location %} einrichten. Weitere Informationen finden Sie unter „[LDAP-Synchronisierung aktivieren](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)“.

{% endif %}

{% data reusables.organizations.team-synchronization %}

### Sichtbarkeit eines Teams

{% data reusables.organizations.types-of-team-visibility %}

### Teamseiten

Jedes Team hat seine eigene Seite innerhalb einer Organisation. Auf der Seite eines Teams kannst Du Teammitglieder, untergeordnete Teams und Repositorys des Teams anzeigen. Organisationsinhaber und Team-Betreuer können auf die Teameinstellungen zugreifen und die Beschreibung sowie das Profilbild des Teams über die Seite des Teams aktualisieren.

Organisationsmitglieder können Diskussionen mit dem Team erstellen und daran teilnehmen. Weitere Informationen finden Sie unter „[Informationen zu Teamdiskussionen](/github/setting-up-and-managing-organizations-and-teams/about-team-discussions)“.

![Teamseite mit einer Auflistung der Teammitglieder und Diskussionen](/assets/images/help/organizations/team-page-discussions-tab.png)

### Verschachtelte Teams

Du kannst die Hierarchie Deiner Gruppe oder Deines Unternehmens innerhalb Deiner {% data variables.product.product_name %}-Organisation mit mehreren Ebenen von verschachtelten Teams abbilden. Ein übergeordnetes Team kann mehrere untergeordnete Teams haben, wohingegen jedes untergeordnete Team nur ein übergeordnetes Team hat. Nicht öffentliche Teams können nicht verschachtelt werden.

Für untergeordnete Teams gelten die Zugriffsberechtigungen des übergeordneten Teams, wodurch die Verwaltung von Berechtigungen für große Gruppen vereinfacht wird. Mitglieder von untergeordneten Teams erhalten außerdem Benachrichtigungen, wenn das übergeordnete Team @erwähnt wird, was die Kommunikation mit mehreren Personengruppen vereinfacht.

Wenn Deine Teamstruktur beispielsweise „Mitarbeiter > Engineering > Application Engineering > Identity“ lautet, bedeutet die Gewährung von Schreibzugriff für Engineering auf ein Repository, dass auch Application Engineering und Identity diesen Zugriff erhalten. Wenn Du das Identity-Team oder ein Team am unteren Ende der Organisationshierarchie @erwähnst, erhält nur dieses Team eine Benachrichtigung.

![Teamseite mit einem übergeordneten und einem untergeordneten Team](/assets/images/help/teams/nested-teams-eng-example.png)

Um zu verstehen, wer die Berechtigungen und Erwähnungen eines übergeordneten Teams teilt, kannst Du alle Mitglieder der untergeordneten Teams eines übergeordneten Teams auf der Registerkarte „Members“ (Mitglieder) auf der Seite des übergeordneten Teams sehen. Mitglieder eines untergeordneten Teams sind keine direkten Mitglieder des übergeordneten Teams.

![Seite eines übergeordneten Teams mit allen Mitgliedern der untergeordneten Teams](/assets/images/help/teams/team-and-subteam-members.png)

Du kannst beim Erstellen des Teams ein übergeordnetes Team auswählen oder ein Team in der Hierarchie Deiner Organisation später verschieben. Weitere Informationen findest Du unter „[Team innerhalb der Hierarchie Deiner Organisation verschieben](/articles/moving-a-team-in-your-organization-s-hierarchy).“

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

### Die Verschachtelung von Teams in Deiner Organisation vorbereiten

Wenn in Ihrer Organisation bereits Teams vorhanden sind, sollten Sie die Zugriffsberechtigungen für das Repository jedes Teams überprüfen, bevor Sie Teams über- oder unterordnen. Sie sollten außerdem die neue Struktur berücksichtigen, die Sie für Ihre Organisation implementieren möchten.

An der Spitze der Teamhierarchie sollten Sie den übergeordneten Teams Zugriffsberechtigungen für das Repository erteilen, die für jedes Mitglied des übergeordneten Teams und seine untergeordneten Teams sicher sind. Wenn Sie sich in der Hierarchie nach unten bewegen, können Sie untergeordneten Teams zusätzlichen, detaillierteren Zugriff auf sensiblere Repositorys gewähren.

1. Entferne alle Mitglieder aus vorhandenen Teams
2. Überprüfe und bearbeite die Zugriffsrechte für Repositorys für jedes Team, und weise jedem Team ein übergeordnetes Team zu
3. Erstelle alle gewünschten neuen Teams, wähle ein übergeordnetes Team für jedes neue Team, und gewähre seinen Mitgliedern Zugriff auf Repositorys
4. Füge Personen direkt zu Teams hinzu

### Weiterführende Informationen

- „[Ein Team erstellen](/articles/creating-a-team)“
- „[Organisationsmitglieder zu einem Team hinzufügen](/articles/adding-organization-members-to-a-team)“
