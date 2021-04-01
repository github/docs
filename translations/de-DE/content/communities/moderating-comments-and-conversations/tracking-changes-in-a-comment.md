---
title: Änderungen an einem Kommentar verfolgen
intro: Du kannst den Änderungsverlauf eines Kommentars ansehen und vertrauliche Informationen aus dem Änderungsverlauf eines Kommentars löschen.
redirect_from:
  - /articles/tracking-changes-in-a-comment
  - /github/building-a-strong-community/tracking-changes-in-a-comment
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - community
---

### Änderungsverlauf eines Kommentars anzeigen

Jede Person mit Lesezugriff auf ein Repository kann den Änderungsverlauf eines Kommentars anzeigen.

1. Navigiere zu dem Kommentar, dessen Änderungsverlauf Du anzeigen möchtest.
{% data reusables.repositories.edited-comment-list %}

### Vertrauliche Informationen aus dem Verlauf eines Kommentars löschen

Verfasser von Kommentaren und Personen mit Schreibzugriff zu einem Repository können vertrauliche Informationen aus dem Änderungsverlauf eines Kommentars löschen.

Wenn Du sensible Informationen aus dem Änderungsverlauf eines Kommentars löschst, bleiben die Person, die die Änderung vorgenommen hat, und der Zeitpunkt der Änderung im Kommentarverlauf ersichtlich, der Inhalt der Änderung ist aber nicht mehr verfügbar.

1. Navigiere zu dem Kommentar, in dessen Änderungsverlauf Du vertrauliche Informationen löschen möchtest.
{% data reusables.repositories.edited-comment-list %}
3. Klicke rechts oben im Fenster mit dem Änderungsverlauf auf **Options** (Optionen). Klicke dann auf **Delete revision from history** (Revision aus Verlauf löschen), um das Diff zu löschen, das den hinzugefügten Inhalt zeigt. ![Änderungsdetails eines Kommentars löschen](/assets/images/help/repository/delete-comment-edit-details.png)
4. Klicke zur Bestätigung der Löschanforderung auf **OK**.

### Weiterführende Informationen

{% if currentVersion == "free-pro-team@latest" %}- "[Reporting abuse or spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"{% endif %}
- „[Kommentar bearbeiten](/articles/editing-a-comment)“
