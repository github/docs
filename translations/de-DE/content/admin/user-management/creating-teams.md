---
title: Teams erstellen
intro: 'Mithilfe von Teams können Organisationen  Mitgliedergruppen erstellen und den Zugriff auf Repositorys steuern. Teammitgliedern können Lese-, Schreib- oder Administratorberechtigungen für bestimmte Repositorys erteilt werden.'
redirect_from:
  - /enterprise/admin/user-management/creating-teams
versions:
  enterprise-server: '*'
---

Teams sind zentral für viele gemeinschaftliche Features von {% data variables.product.prodname_dotcom %}, beispielsweise Team-@Erwähnungen, um die entsprechenden Teilnehmer dahingehend zu informieren, dass Sie deren Beiträge oder Aufmerksamkeit anfordern möchten. Weitere Informationen finden Sie unter „[Berechtigungsebenen für die Repositorys einer Organisation](/enterprise/{{ currentVersion }}/user/articles/repository-permission-levels-for-an-organization/)“.

Ein Team kann eine Gruppe in Ihrem Unternehmen darstellen oder Personen mit bestimmten Interessen oder Expertenwissen enthalten. So könnte beispielsweise ein Team aus Barrierefreiheitsexperten auf {% data variables.product.product_location_enterprise %} aus Personen unterschiedlicher Abteilungen bestehen. Teams können funktionale Anliegen vertreten, welche die bestehende Bereichshierarchie eines Unternehmens ergänzen.

Organisationen können mehrere Ebenen untergeordneter Teams erstellen, um die Hierarchiestruktur eines Unternehmens oder einer Gruppe abzubilden. Weitere Informationen finden Sie unter „[Informationen zu Teams](/enterprise/{{ currentVersion }}/user/articles/about-teams/#nested-teams)“.

### Ein Team erstellen

Eine umsichtige Kombination von Teams ist ein wirksames Mittel, um den Zugriff auf das Repository zu steuern. For example, if your organization allows only your release engineering team to push code to the default branch of any repository, you could give only the release engineering team **admin** permissions to your organization's repositories and give all other teams **read** permissions.

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}

### Teams mit aktivierter LDAP-Synchronisierung erstellen

Instanzen, die LDAP für die Benutzerauthentifizierung verwenden, können die LDAP-Synchronisierung zum Verwalten der Mitglieder eines Teams verwenden. Wenn Sie den **Distinguished Name** (DN) der Gruppe im Feld **LDAP group** (LDAP-Gruppe) festlegen, wird einer LDAP-Gruppe auf Ihrem LDAP-Server ein Team zugeordnet. Wenn Sie die LDAP-Synchronisierung zum Verwalten der Mitglieder eines Teams verwenden, können Sie Ihr Team in {% data variables.product.product_location_enterprise %} nicht verwalten. Das zugeordnete Team synchronisiert seine Mitglieder im Hintergrund und regelmäßig in dem Intervall, das bei aktivierter LDAP-Synchronisierung konfiguriert wurde. Weitere Informationen finden Sie unter „[LDAP-Synchronisierung aktivieren](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)“.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Hinweise:**
- Die LDAP-Synchronisierung verwaltet nur die Mitgliederliste des Teams. Sie müssen die Repositorys und Berechtigungen des Teams auf {% data variables.product.prodname_ghe_server %} verwalten.
- Wenn eine LDAP-Gruppenzuordnung zu einem DN entfernt wird, beispielsweise wenn die LDAP-Gruppe gelöscht wird, dann wird jedes Mitglied aus dem synchronisierten {% data variables.product.prodname_ghe_server %}-Team entfernt. Um dies zu beheben, ordnen Sie das Team einem neuen DN zu, fügen Sie die Teammitglieder erneut hinzu, und [synchronisieren Sie die Zuordnung manuell](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap/#manually-syncing-ldap-accounts).
- Falls bei aktivierter LDAP-Synchronisierung eine Person aus einem Repository entfernt wird, verliert diese den Zugriff, ihre Forks werden jedoch nicht gelöscht. Wenn die Person innerhalb von drei Monaten zu einem Team mit Zugriff auf das ursprüngliche Organisations-Repository hinzugefügt wird, wird ihr Zugriff auf die Forks bei der nächsten Synchronisierung automatisch wiederhergestellt.

{% endwarning %}

1. Stellen Sie sicher, dass die [LDAP-Synchronisierung aktiviert ist](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync).
{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
6. Suchen Sie nach dem DN einer LDAP-Gruppe, um diesem das Team zuzuordnen. Falls Sie den DN nicht kennen, geben Sie den Namen der LDAP-Gruppe ein.
{% data variables.product.prodname_ghe_server %} sucht nach Übereinstimmungen und vervollständigt diese automatisch.
![Zuordnung zum LDAP-Gruppen-DN](/assets/images/enterprise/orgs-and-teams/ldap-group-mapping.png)
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}
