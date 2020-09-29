---
title: Interaktionen in Deinem Repository begrenzen
intro: 'Personen mit Inhaber- oder Administratorberechtigungen können für bestimmte Benutzer temporär die Möglichkeiten zum Kommentieren, Öffnen von Issues und Erstellen von Pull Requests in Deinem öffentlichen Repository einschränken, um eine Periode limitierter Aktivität durchzusetzen,.'
redirect_from:
  - /articles/limiting-interactions-with-your-repository/
  - /articles/limiting-interactions-in-your-repository
versions:
  free-pro-team: '*'
---

Nach 24 Stunden können die Benutzer die normale Aktivität in Deinem Repository wiederaufnehmen.

{% tip %}

**Tipp:** Organisationsinhaber können Aktivitätsbeschränkungen für die gesamte Organisation aktivieren. Wenn Aktivitätsbeschränkungen für die gesamte Organisation aktiviert sind, kannst Du keine Beschränkungen für einzelne Repositorys vornehmen. Weitere Informationen findest Du unter „[Interaktionen in Deiner Organisation begrenzen](/articles/limiting-interactions-in-your-organization).“

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Klicke in der Seitenleiste mit den Einstellungen Deines Repositorys auf **Interaction Limits** (Interaktionsbeschränkungen). ![Interaktionsbeschränkungen in den Repository-Einstellungen ](/assets/images/help/repository/repo-settings-interaction-limits.png)
4. Klicke unter „Temporary interaction limits" (Temporäre Interaktionsbeschränkungen) auf eine oder mehrere Optionen: ![Optionen für die temporäre Interaktionsbeschränkung](/assets/images/help/repository/temporary-interaction-limits-options.png)
    - **Limit to existing users** (Beschränkung für existierende Benutzer): Begrenzt die Aktivität für Benutzer, deren Konto erst seit weniger 24 Stunden besteht und die bisher keine Beiträge geleistet haben und keine Mitarbeiter sind.
    - **Limit to prior contributors** (Beschränkung für frühere Mitarbeiter): Begrenzt die Aktivität für Benutzer, die noch keine Beiträge geleistet haben und keine Mitarbeiter sind.
    - **Limit to repository collaborators**: Limits activity for users who do not have write access or are not collaborators.

### Weiterführende Informationen
- „[Missbrauch oder Spam melden](/articles/reporting-abuse-or-spam)“
- „[Den Zugriff einer Person auf ein Repository einer Organisation verwalten](/articles/managing-an-individual-s-access-to-an-organization-repository)“
- „[Berechtigungsebenen für ein Repository eines Benutzerkontos](/articles/permission-levels-for-a-user-account-repository)"
- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“
