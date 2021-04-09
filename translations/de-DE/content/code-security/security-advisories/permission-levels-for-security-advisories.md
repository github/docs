---
title: Berechtigungsstufen für Sicherheitshinweise
intro: Welche Aktionen Du in einem Sicherheitshinweis durchführen kannst, hängt davon ab, ob Du Administrations- oder Schreibberechtigungen für den Sicherheitshinweis hast.
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
versions:
  free-pro-team: '*'
topics:
  - sicherheit
---

### Überblick über die Berechtigungen

{% data reusables.repositories.security-advisory-admin-permissions %} Weitere Informationen zum Hinzufügen eines Mitarbeiter zu einem Sicherheitshinweis findest Du unter [Einen Mitarbeiter zu einem Sicherheitshinweis hinzufügen](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)."

| Aktion                                                                                                                                                                                                                                                                                 | Schreib-berechtigungen | Administratorberechtigungen |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------------------------- |
| Entwurf eines Sicherheitshinweises ansehen                                                                                                                                                                                                                                             | X                      | X                           |
| Mitarbeiter zu Sicherheitshinweisen hinzufügen (siehe „[Mitarbeiter zu Sicherheitshinweisen hinzufügen](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)")                                                                                      |                        | X                           |
| Kommentare im Sicherheitshinweis bearbeiten und löschen                                                                                                                                                                                                                                | X                      | X                           |
| Einen temporären privaten Fork im Sicherheitshinweis erstellen (siehe „[In einem temporären privaten Fork zusammenarbeiten, um eine Sicherheitslücke zu beheben](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)“)                            |                        | X                           |
| Änderungen an einem temporären privaten Fork im Sicherheitshinweis vornehmen (siehe „[In einem temporären privaten Fork zusammenarbeiten, um eine Sicherheitslücke zu beheben](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)“)              | X                      | X                           |
| Pull Requests in einem temporären privaten Fork erstellen (siehe „[In einem temporären privaten Fork zusammenarbeiten, um eine Sicherheitslücke zu beheben](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)“) | X                      | X                           |
| Änderungen im Sicherheitshinweis zusammenführen (siehe „[In einem temporären privaten Fork zusammenarbeiten, um eine Sicherheitslücke zu beheben](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)“)                                           |                        | X                           |
| Metadaten im Sicherheitshinweis hinzufügen und bearbeiten (siehe „[Sicherheitshinweis veröffentlichen](/github/managing-security-vulnerabilities/publishing-a-security-advisory)")                                                                                                     | X                      | X                           |
| Add and remove credits for a security advisory (see "[Editing a security advisory](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)")                                                                                      | X                      | X                           |
| Den Entwurf des Sicherheitshinweises schließen                                                                                                                                                                                                                                         |                        | X                           |
| Den Sicherheitshinweis veröffentlichen (siehe „[Einen Sicherheitshinweis veröffentlichen](/github/managing-security-vulnerabilities/publishing-a-security-advisory)")                                                                                                                  |                        | X                           |

### Weiterführende Informationen

- „[Einen Mitarbeiter zu einem Sicherheitshinweis hinzufügen](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)"
- „[Zusammenarbeit in einer temporären privaten Fork, um eine Sicherheitslücke zu beheben](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)"
- „[Einen Mitarbeiter aus einem Sicherheitshinweis entfernen](/github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory)"
- „[Einen Sicherheitshinweis zurückziehen](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
