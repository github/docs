---
title: Geschützte Branches und erforderliche Statuschecks konfigurieren
intro: 'Sie können zum Begrenzen von Branch-Änderungen geschützte Branches aktivieren und erforderliche Statuschecks erzwingen, bevor ein Branch in einem Pull Request gemergt wird oder bevor Commits auf einem lokalen Branch per Push-Vorgang an den geschützten Remote-Branch übertragen werden können.'
redirect_from:
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
versions:
  enterprise-server: '*'
---

Jeder, der über Administratorberechtigungen für ein Repository verfügt, kann Branch-Einschränkungen aktivieren.

### Geschützten Branch für ein Repository aktivieren

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Klicke auf **Create** (Erstellen).

### Arten von erforderlichen Statuschecks

| Art des erforderlichen Statuschecks | Einstellung                                                                                                                                           | Merge-Anforderungen                                                             | Hinweise                                                                                                                                                                                                                                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Streng**                          | Das Kontrollkästchen **Require branches to be up-to-date before merging** (Aktualität der Branches vor dem Mergen erzwingen) ist aktiviert.           | Der Branch **muss** vor dem Mergen auf dem Stand des Basis-Branches sein.       | Dies ist das Standardverhalten für erforderliche Statuschecks. Weitere Builds können erforderlich sein, da Sie den Head-Branch auf den neuesten Stand bringen müssen, nachdem andere Mitarbeiter Pull Requests in den geschützten Basis-Branch gemergt haben.                                      |
| **Locker**                          | Das Kontrollkästchen **Require branches to be up-to-date before merging** (Aktualität der Branches vor dem Mergen erzwingen) ist **nicht** aktiviert. | Der Branch muss vor dem Mergen **nicht** auf dem Stand des Basis-Branches sein. | Es sind weniger Builds erforderlich, da Sie den Head-Branch nicht auf den neuesten Stand bringen müssen, nachdem andere Mitarbeiter Pull Requests gemergt haben. Statuschecks schlagen nach dem Mergen Ihres Branches möglicherweise fehl, wenn inkompatible Änderungen am Basis-Branch vorliegen. |
| **Deaktiviert**                     | Das Kontrollkästchen **Require status checks to pass before merging** (Statuschecks müssen vor dem Mergen bestanden werden) ist **deaktiviert**.      | Für den Branch gelten keine Merge-Einschränkungen.                              | Wenn die erforderlichen Statuschecks nicht aktiviert sind, können Mitarbeiter den Branch unabhängig von seinem Stand gegenüber dem Basis-Branch jederzeit mergen. Die Wahrscheinlich inkompatibler Änderungen erhöht sich dadurch jedoch.                                                          |

### Erforderliche Statuschecks aktivieren

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Aktivieren Sie **Require status checks to pass before merging** (Statuschecks müssen vor dem Mergen bestanden werden). ![Option für erforderliche Statuschecks](/assets/images/help/repository/required-status-checks.png)
6. Wählen Sie in der Liste der verfügbaren Statuschecks die Checks aus, die als erforderlich festgelegt werden sollen. ![Liste der verfügbaren Statuschecks](/assets/images/help/repository/required-statuses-list.png)
{% data reusables.repositories.include-administrators %}
8. Deaktivieren Sie optional **Require branches to be up to date before merging** (Erzwingen, dass Branches vor dem Mergen aktuell sein müssen). Wenn diese Option ausgewählt ist, wird der Branch mit dem neuesten Code auf dem Basis-Branch getestet. ![Kontrollkästchen für lockere oder strenge erforderliche Statuschecks](/assets/images/help/repository/protecting-branch-loose-status-new.png)
9. Optional wählst Du {% if currentVersion ver_gt "enterprise-server@2.18" %}**Beschränken, wer per Push in die passenden Zweige übertragen kann**{% else %}**Beschränken, wer per Push in diesen Zweig übertragen kann**{% endif %}. ![Branch restriction checkbox]{% if currentVersion ver_gt "enterprise-server@2.18" %}(/assets/images/help/repository/restrict-branch.png){% else %}(/assets/images/help/repository/restrict-branch-push.png){% endif %}
10. Suche und wähle Personen{% if currentVersion ver_gt "enterprise-server@2.18" %},{% else %} oder{% endif %} Teams{% if currentVersion ver_gt "enterprise-server@2.18" %} oder Apps{% endif %} aus, welche berechtigt sind, per Push in geschützte Branches zu übertragen. ![Suche für die Branch-Einschränkung](/assets/images/help/repository/restrict-branch-search.png)
11. Klicke auf **Create** (Erstellen).

{% data reusables.repositories.required-status-merge-tip %}
