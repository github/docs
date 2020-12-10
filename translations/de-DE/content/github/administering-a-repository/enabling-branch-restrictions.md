---
title: Branch-Einschränkungen aktivieren
intro: 'You can enforce branch restrictions so that only certain users, teams, or apps can push to a protected branch in repositories owned by your organization.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/enabling-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Jeder Benutzer mit Administratorberechtigungen für ein Repository im Besitz der Organisation kann Branch-Einschränkungen aktivieren.

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
{% data reusables.repositories.include-administrators %}
6. Wähle unter „Protect matching Branches" (Schütze übereinstimmende Branches) **Einschränken, wer an übereinstimmende Branches übertragen kann**. ![Kontrollkästchen „Branch restriction" (Branch-Einschränkung)](/assets/images/help/repository/restrict-branch.png)
8. Search for and select the people, teams, or apps who will have permission to push to the protected branch. ![Suche für die Branch-Einschränkung](/assets/images/help/repository/restrict-branch-search.png)
9. Klicke auf **Create** (Erstellen).

### Weiterführende Informationen

- „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches)“
- „[Geschützte Branches konfigurieren](/github/administering-a-repository/configuring-protected-branches)“
- „[Informationen zu erforderlichen Statuschecks](/github/administering-a-repository/about-required-status-checks)“
- „[Erforderliche Statuschecks aktivieren](/github/administering-a-repository/enabling-required-status-checks)“
