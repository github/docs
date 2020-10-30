---
title: Einen Sicherheitshinweis erstellen
intro: 'Du kannst einen Entwurf eines Sicherheitshinweises erstellen, um privat über die Sicherheitslücke in Deinem Open-Source-Projekt zu diskutieren und sie zu beheben.'
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
versions:
  free-pro-team: '*'
---

Jeder, der über Administratorberechtigungen für ein Repository verfügt, kann einen Sicherheitshinweis erstellen.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### Einen Sicherheitshinweis erstellen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. Klicke auf **New draft security advisory** (Entwurf eines neuen Sicherheitshinweises). ![Schaltfläche „Open draft advisory“ (Hinweisentwurf öffnen)](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. Gib einen Titel für den Sicherheitshinweis ein. ![Feld „Title“ (Titel)](/assets/images/help/security/security-advisory-title.png)
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-description %}
8. Klicke auf **Create security advisory** (Erstelle Sicherheitshinweis). ![Schaltfläche „Create security advisory" (Sicherheitshinweis erstellen)](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

### Nächste Schritte:

- Du kannst Den Entwurf des Sicherheitshinweises kommentieren, um die Schwachstelle mit Deinem Team zu diskutieren.
- Füge Mitarbeiter zum Sicherheitshinweis hinzu. Weitere Informationen findest Du unter „[Einen Mitarbeiter zu einem Sicherheitshinweis hinzufügen](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory).“
- Privat mit anderen zusammenarbeiten, um die Schwachstelle in einem temporären privaten Fork zu beheben. Weitere Informationen findest Du unter „[In einem temporären privaten Fork zusammenarbeiten, um eine Sicherheitslücke zu beheben](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability).“
- Add individuals who should receive credit for contributing to the security advisory. Weitere Informationen findest Du unter „[Einen Sicherheitshinweis bearbeiten](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)."
- Veröffentliche den Sicherheitshinweis, um Deine Community über die Sicherheitslücke zu informieren. Weitere Informationen findest Du unter „[Einen Sicherheitshinweis veröffentlichen](/github/managing-security-vulnerabilities/publishing-a-security-advisory)."
