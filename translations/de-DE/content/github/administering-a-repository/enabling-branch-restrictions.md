---
title: Branch-Einschränkungen aktivieren
intro: 'Du kannst Branch-Einschränkungen erzwingend, sodass nur bestimmte Benutzer{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} oder{% endif %} Teams{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} oder Apps{% endif %} einen Push zu einem geschützten Branch in Repositorys Deiner Organisation machen können.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/enabling-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Jeder Benutzer mit Administratorberechtigungen für ein Repository im Besitz der Organisation kann Branch-Einschränkungen aktivieren.

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
{% data reusables.repositories.include-administrators %}
6. Wähle unter „Protect matching Branches" (Schütze übereinstimmende Branches) **Einschränken, wer an übereinstimmende Branches übertragen kann**. ![Kontrollkästchen „Branch restriction" (Branch-Einschränkung)](/assets/images/help/repository/restrict-branch.png)
8. Suche und wähle Personen {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} oder{% endif %} Teams{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} oder Apps{% endif %} aus, welche die Berechtigung zum übertragen zu geschützten Branches haben. ![Suche für die Branch-Einschränkung](/assets/images/help/repository/restrict-branch-search.png)
9. Klicke auf **Create** (Erstellen).

### Weiterführende Informationen

- „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches)“
- „[Geschützte Branches konfigurieren](/github/administering-a-repository/configuring-protected-branches)“
- „[Informationen zu erforderlichen Statuschecks](/github/administering-a-repository/about-required-status-checks)“
- „[Erforderliche Statuschecks aktivieren](/github/administering-a-repository/enabling-required-status-checks)“
