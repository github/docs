---
title: Einen Sicherheitshinweis bearbeiten
intro: Du kannst die Metadaten und die Beschreibung für einen Sicherheitshinweis bearbeiten, wenn Du Details aktualisieren oder Fehler korrigieren musst.
redirect_from:
  - /github/managing-security-vulnerabilities/editing-a-security-advisory
versions:
  free-pro-team: '*'
topics:
  - sicherheit
---

Personen mit Administratorberechtigungen für einen Sicherheitshinweis können den Hinweise bearbeiten.

### About credits for security advisories

You can credit people who helped discover, report, or fix a security vulnerability. If you credit someone, they can choose to accept or decline credit.

If someone accepts credit, the person's username appears in the "Credits" section of the security advisory. Anyone with read access to the repository can see the advisory and the people who accepted credit for it.

If you believe you should be credited for a security advisory, please contact the person who created the advisory and ask them to edit the advisory to include your credit. Only the creator of the advisory can credit you, so please don't contact GitHub Support about credits for security advisories.

### Einen Sicherheitshinweis bearbeiten

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. Klicke in der Liste „Security Advisories“ (Sicherheitshinweise) auf den Hinweis, den Du bearbeiten möchtest.
5. Klicke in der rechten oberen Ecke der Details zum Sicherheitshinweis auf {% octicon "pencil" aria-label="The edit icon" %}. ![Schaltfläche „Edit" (Bearbeiten) für einen Sicherheitshinweis](/assets/images/help/security/security-advisory-edit-button.png)
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-severity %}
{% data reusables.repositories.security-advisory-edit-cwe-cve %}
{% data reusables.repositories.security-advisory-edit-description %}
11. Optionally, edit the "Credits" for the security advisory. ![Credits for a security advisory](/assets/images/help/security/security-advisory-credits.png)
12. Klicke auf **Update security advisory** (Aktualisiere Sicherheitshinweis). ![Schaltfläche „Add“ (Hinzufügen)](/assets/images/help/security/update-advisory-button.png)
13. The people listed in the "Credits" section will receive an email or web notification inviting them to accept credit. If a person accepts, their username will be publicly visible once the security advisory is published.

### Weiterführende Informationen

- „[Einen Sicherheitshinweis zurückziehen](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
