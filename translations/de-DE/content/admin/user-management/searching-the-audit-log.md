---
title: Auditprotokoll durchsuchen
intro: Site administrators can search an extensive list of audited actions on the enterprise.
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log/
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
---

### Suchabfragesyntax

Erstellen Sie eine Suchabfrage aus mindestens einem Schlüsselwertpaar, das durch die logischen Operatoren AND/OR getrennt ist.

|      Schlüssel | Wert                                                                           |
| --------------:| ------------------------------------------------------------------------------ |
|     `actor_id` | ID des Benutzerkontos, das die Aktion initiiert hat                            |
|        `actor` | Name des Benutzerkontos, der die Aktion initiiert hat                          |
| `oauth_app_id` | ID der mit der Aktion verknüpften OAuth-Anwendung                              |
|       `action` | Name of the audited action                                                     |
|      `user_id` | ID des von der Aktion betroffenen Benutzers                                    |
|     `Benutzer` | Name des von der Aktion betroffenen Benutzers                                  |
|      `repo_id` | ID des von der Aktion betroffenen Repositorys (sofern zutreffend)              |
|         `repo` | Name des von der Aktion betroffenen Repositorys (sofern zutreffend)            |
|     `actor_ip` | IP-Adresse, über welche die Aktion initiiert wurde                             |
|   `created_at` | Zeitpunkt, an dem die Aktion aufgetreten ist                                   |
|         `from` | Ansicht, von wem die Aktion initiiert wurde                                    |
|         `note` | Verschiedene ereignisspezifische Informationen (im Nur-Text- oder JSON-Format) |
|          `org` | Name der von der Aktion betroffenen Organisation (sofern zutreffend)           |
|       `org_id` | ID der von der Aktion betroffenen Organisation (sofern zutreffend)             |

So können Sie beispielsweise alle Aktionen anzeigen, die sich seit Anfang 2017 auf das Repository `octocat/Spoon-Knife` ausgewirkt haben:

  `repo:"octocat/Spoon-Knife" AND created_at:[2017-01-01 TO *]`

Eine vollständige Liste der Aktionen finden Sie unter „[Überwachte Aktionen](/admin/user-management/audited-actions)“.

### Auditprotokoll durchsuchen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
4. Geben Sie eine Suchabfrage ein.![Suchabfrage](/assets/images/enterprise/site-admin-settings/search-query.png)
