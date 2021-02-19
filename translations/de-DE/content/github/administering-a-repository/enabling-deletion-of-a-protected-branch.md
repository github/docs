---
title: Löschen eines geschützten Branch aktivieren
intro: Du kannst jedem Benutzer mit Schreibzugriff auf ein Repository erlauben, einen geschützten Branch zu löschen.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
---

Jeder Benutzer mit Administratorberechtigungen für ein Repository kann Branch-Löschungen aktivieren.

Standardmäßig kannst Du einen geschützten Branch nicht löschen. Wenn Du das Löschen eines geschützten Branch aktivierst, kann jeder Benutzer, der mindestens Schreibberechtigung im Repository hat, den Branch löschen, inbegriffen diejenigen mit Administratorberechtigungen.

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Wähle unter „Rules applied to everyone including administrators" (Regeln für jedermann, Administratoren inbegriffen) **Allow deletions** (Löschungen erlauben). ![Option „Allow branch deletions" (Erlaube Branch-Löschungen)](/assets/images/help/repository/allow-branch-deletions.png)
7. Klicke auf **Create** (Erstellen).
