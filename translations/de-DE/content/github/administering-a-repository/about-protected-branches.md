---
title: Informationen zu geschützten Branches
intro: 'Mit geschützten Branches wird sichergestellt, dass Mitarbeiter auf Deinem Repository keine unwiderruflichen Änderungen an Branches vornehmen. Durch die Aktivierung geschützter Branches kannst Du außerdem weitere optionale Prüfungen und Anforderungen aktivieren, beispielsweise erforderliche Statuschecks und erforderliche Reviews.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pull_requests.about-protected-branches %} Du kannst entscheiden, Einschränkungen zu erzwingen über die Art und Weise, wie ein Pull Request in Dein Repository zusammengeführt wird.

Durch das Erstellen von Regeln für geschützte Branches können Repository-Inhaber und Personen mit Administratorberechtigung für ein Repository bestimmte Workflows oder Anforderungen erzwingen, bevor ein Mitarbeiter einen Branch in Dein Repository überführen kann.

{% data reusables.repositories.branch-rules-example %} Weitere Informationen findest Du unter „[Geschützte Branches konfigurieren](/articles/configuring-protected-branches/).“

### Priorisierung von Regeln für geschützte Branches

Wenn ein Repository mehrere Branch-Schutzregeln hat, die dieselben Branches betreffen, haben die Regeln, die einen spezifischen Branch-Namen enthalten, die höchste Priorität. Wenn es mehr als eine Branch-Schutzregel gibt, die auf den gleichen spezifischen Branch-Namen verweist, hat die zuerst erstellte Branch-Regel eine höhere Priorität.

Branch-Schutzregeln mit einem Sonderzeichen, wie `*`, `?` oder `]` werden in der Reihenfolge ihrer Erstellung angewendet, sodass ältere Regeln mit diesen Zeichen eine höhere Priorität haben.

### Einstellungen für geschützte Branches

When you create a branch protection rule in a repository, collaborators cannot force push to the protected branch or delete the branch{% if currentVersion == "free-pro-team@latest" %} by default{% endif %}. Du kannst andere Branch-Schutzeinstellungen aktivieren. Weitere Informationen findest Du unter „[Definieren der Zusammenführbarkeit von Pull Requests](/github/administering-a-repository/defining-the-mergeability-of-pull-requests)."

### Weiterführende Informationen

- „[Informationen zu erforderlichen Statuschecks](/articles/about-required-status-checks)“
- „[Informationen zu erforderlichen Reviews für Pull Requests](/articles/about-required-reviews-for-pull-requests)“
- „[Informationen zur obligatorischen Commit-Signatur](/articles/about-required-commit-signing)“
