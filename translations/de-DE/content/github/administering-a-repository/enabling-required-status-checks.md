---
title: Erforderliche Statuschecks aktivieren
intro: 'Repository-Administratoren können erforderliche Statuschecks erzwingen, bevor ein Branch in einen Pull Request zusammengeführt wird oder bevor Commits auf einem lokalen Branch an den geschützten Remote-Branch übertragen werden können.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.repositories.protected-branches-options %}

Bevor Du erforderliche Statusprüfungen aktivieren kannst, musst Du das Repository für die Verwendung des Status-API konfigurieren. For more information, see "[Building a CI Server](/guides/building-a-ci-server/)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Wähle unter „Protect matching Branches" (Schütze übereinstimmende Branches) **Verlange erfolgreiche Statuschecks vor dem Zusammenführen**. ![Option für erforderliche Statuschecks](/assets/images/help/repository/required-status-checks.png)
7. Wähle optional **Require branches to be up to date before merging** (Verlange aktuelle Branches vor dem Übertragen). Diese Option stellt sicher, dass der Branch mit dem neuesten Code auf dem Basisbranch getestet wird. ![Kontrollkästchen für lockere oder strenge erforderliche Statuschecks](/assets/images/help/repository/protecting-branch-loose-status.png)
7. Wähle aus der Liste der verfügbaren Statuschecks diejenigen Prüfungen, die Du verlangen willst. ![Liste der verfügbaren Statuschecks](/assets/images/help/repository/required-statuses-list.png)
{% data reusables.repositories.include-administrators %}
9. Klicke auf **Create** (Erstellen).

{% data reusables.repositories.required-status-merge-tip %}
