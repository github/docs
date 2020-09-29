---
title: Interaktionen in Deiner Organisation begrenzen
intro: 'Organisationsinhaber können für bestimmte Benutzer temporär die Möglichkeiten zum Kommentieren, Öffnen von Issues und Erstellen von Pull Requests in den öffentlichen Repositorys der Organisation einschränken, um eine Periode limitierter Aktivität durchzusetzen.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
---

Nach 24 Stunden können die Benutzer die normale Aktivität in den öffentlichen Repositorys Deiner Organisation wiederaufnehmen. Wenn Du Einschränkungen für die gesamte Organisation aktivierst, kannst Du keine Beschränkung der Interaktionen für einzelne Repositorys aktivieren oder deaktivieren. Weitere Informationen zur Repository-abhängigen Aktivitätsbegrenzung findest Du unter „[Interaktionen in Deinem Repository begrenzen](/articles/limiting-interactions-in-your-repository).“

{% tip %}

**Tipp:** Organisationsinhaber können auch Benutzer für eine bestimmte Zeitdauer blockieren. Wenn die Sperre ausläuft, wird der Benutzer automatisch entsperrt. Weitere Informationen findest Du unter „[Benutzer für Deine Organisation blockieren](/articles/blocking-a-user-from-your-organization).“

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Klicke in der Seitenleiste mit den Einstellungen Deiner Organisation auf **Interaction Limits** (Interaktionsbeschränkungen). ![Interaktionsbeschränkungen in den Organisationseinstellungen ](/assets/images/help/organizations/org-settings-interaction-limits.png)
5. Klicke unter "Temporary interaction limits" (Temporäre Interaktionsbeschränkungen) auf eine oder mehrere Optionen. ![Optionen für die temporäre Interaktionsbeschränkung](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)
   - **Limit to existing users** (Beschränkung für vorhandene Benutzer): Begrenzt die Aktivität für Benutzer der Organisation, deren Konto erst seit weniger als 24 Stunden besteht und die bisher keine Beiträge geleistet haben und keine Mitarbeiter sind.
   - **Limit to prior contributors** (Beschränkung für frühere Mitarbeiter): Begrenzt die Aktivität für Benutzer der Organisation, die noch keine Beiträge geleistet haben und keine Mitarbeiter sind.
   - **Limit to repository collaborators**: Limits activity for organization users who do not have write access or are not collaborators.

### Weiterführende Informationen
- „[Missbrauch oder Spam melden](/articles/reporting-abuse-or-spam)“
- „[Den Zugriff einer Person auf ein Repository einer Organisation verwalten](/articles/managing-an-individual-s-access-to-an-organization-repository)“
- „[Berechtigungsebenen für ein Repository eines Benutzerkontos](/articles/permission-levels-for-a-user-account-repository)"
- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“
