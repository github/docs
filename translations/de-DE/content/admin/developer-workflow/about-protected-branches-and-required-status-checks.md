---
title: Informationen zu geschützten Branches und erforderlichen Statuschecks
intro: 'Mit geschützten Branches wird sichergestellt, dass Mitarbeiter an einem Repository keine unwiderruflichen Änderungen an Branches vornehmen. Mithilfe von erforderlichen Statuschecks wird sichergestellt, dass alle erforderlichen CI-Tests bestanden werden, bevor Mitarbeiter Änderungen an einem geschützten Branch vornehmen können. Branches in Repositorys, die Organisationen gehören, können so konfiguriert werden, dass nur bestimmte Benutzer{% if currentVersion ver_gt "enterprise-server@2.18" %}{% else %} oder{% endif %} Teams{% if currentVersion ver_gt "enterprise-server@2.18" %} oder Apps{% endif %} Pushes an den Branch durchführen können.'
redirect_from:
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
versions:
  enterprise-server: '*'
---

*Geschützte Branches* blockieren verschiedene Git-Features auf einem Branch, dessen Schutz ein Repository-Administrator ausgewählt hat. Ein geschützter Branch kann nicht

* per Push-Vorgang zwangsweise übertragen werden,
* gelöscht werden,
* mit Änderungen gemergt werden, bis die [erforderlichen Statuschecks](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/configuring-protected-branches-and-required-status-checks#enabling-required-status-checks) bestanden sind.

Personen mit Administratorberechtigungen für ein Repository sind immer in der Lage, einen Push-Vorgang für einen geschützten Branch durchzuführen. Wenn Sie *Branch-Einschränkungen* aktivieren, können nur bestimmte Benutzer{% if currentVersion ver_gt "enterprise-server@2.18" %}{% else %} oder{% endif %} Teams{% if currentVersion ver_gt "enterprise-server@2.18" %} oder Apps{% endif %} mit einer entsprechenden Berechtigung Pushes an den geschützten Branch durchführen. Weitere Informationen finden Sie unter „[Geschützte Branches und erforderliche Statuschecks konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/configuring-protected-branches-and-required-status-checks)“.

![Eingeschränkte Branchberechtigungen](/assets/images/help/repository/restrict-branch-users.png).

{% tip %}

**Hinweis:** Wenn „Include administrators“ (Administratoren einbeziehen) aktiviert ist und Sie die [erforderlichen Statuschecks](/articles/enabling-required-status-checks) für den Branch aktiviert haben und diese fehlschlagen, schlägt auch jeder Versuch, Änderungen an den geschützten Branch zu pushen, fehl, selbst für Benutzer{% if currentVersion ver_gt "enterprise-server@2.18" %} und Apps{% endif %} mit Administratorberechtigungen.

{% endtip %}
