---
title: Geschützte Branches konfigurieren
intro: 'Wenn Du ein Repository-Inhaber bist oder Administratorberechtigungen in einem Repository hast, kannst Du den Branch-Schutz im Repository anpassen und bestimmte Workflows erzwingen, beispielsweise verlangen, dass mehr als nur ein Pull-Request-Review erforderlich ist oder bestimmte Statuschecks erfolgreich abgeschlossen werden müssen, bevor das Zusammenführen eines Pull Requests möglich ist.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


{% data reusables.repositories.branch-rules-example %}

Du kannst auch einen automatischen Branch-Schutz für alle Branches in Deinem Repository einrichten. Verwende dazu die Platzhalter-Syntax `*`. Weil {% data variables.product.prodname_dotcom %} das `File::FNM_PATHNAME`-Flag für die `File.fnmatch`-Syntax verwendet, wird der Platzhalter das Verzeichnistrennzeichen (`/`) nicht abgleichen. Zum Beispiel wird `qa/*` alle Branches mit `qa/` abgleichen und einen einzigen Schrägstrich enthalten. Du kannst mehrere Schrägstriche mit `qa/**/*` einschließen und die `qa`-Zeichenfolge mit `qa**/**/*` erweitern, um mehr Möglichkeiten zu berücksichtigen. Weitere Informationen zu den Syntax-Optionen für Branch-Regeln findest Du in der [fnmatch-Dokumentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Um eine Ausnahme für eine vorhandene Branch-Regel zu erstellen, erstellst Du eine neue Branch-Schutzregel mit höherer Priorität, z. B. eine Branch-Regel für einen bestimmten Branch-Namen. Weitere Informationen über die Prioritätsreihenfolge und andere Einstellungen für geschützte Branch-Regeln findest Du unter „[Über geschützte Branches](/github/administering-a-repository/about-protected-branches)."

{% note %}

**Hinweis:** Um eine Branch-Regel zu erstellen, muss der von Dir angegebene Branch noch nicht im Repository vorhanden sein.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Optional kannst Du bestimmte Einstellungen für Branch-Regeln konfigurieren. ![Einstellungen für Regeln für geschützte Branches](/assets/images/help/branches/branch-rule-settings.png)
7. Um Deine Branch-Schutzregel zu bestätigen, klicke auf **Create** (Erstellen) oder **Save changes** (Änderungen speichern).

### Weiterführende Informationen

- „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches)“
- „[Informationen zu erforderlichen Statuschecks](/github/administering-a-repository/about-required-status-checks)“
- „[Erforderliche Statuschecks aktivieren](/github/administering-a-repository/enabling-required-status-checks)“
- „[Informationen zu Branch-Einschränkungen](/github/administering-a-repository/about-branch-restrictions)“
- „[Branch-Einschränkungen aktivieren](/github/administering-a-repository/enabling-branch-restrictions)“
- „[Informationen zur obligatorischen Commit-Signatur](/github/administering-a-repository/about-required-commit-signing)“
