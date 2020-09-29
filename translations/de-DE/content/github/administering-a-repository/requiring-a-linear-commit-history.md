---
title: Einen linearen Commit-Verlauf verlangen
intro: 'Du kannst einen linearen Commit-Verlauf verlangen, um alle Merge-Commits eines geschützten Branches zu blockieren.'
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

Personen mit Administratorberechtigungen auf ein Repository können einen linearen Commit-Verlauf verlangen.

### Über die Durchsetzung des linearen Commit-Verlaufs

Das Erzwingen eines linearen Commit-Verlaufs verhindert, dass Merge-Commits in den geschützten Branch übertragen werden. Dies bedeutet, dass alle Pull Requests, die in den geschützten Branch zusammengeführt sind, einen Squash-Merge oder einen Rebase-Merge verwenden müssen. Eine streng linearer Commit-Verlauf kann Teams helfen, Änderungen effizienter zurückzuverfolgen. Weitere Informationen über Merge-Methoden findest Du unter „[Über Pull-Request-Merges](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)."

{% data reusables.repositories.protected-branches-options %}

Bevor Du einen linearen Commit-Verlauf verlangen kannst, muss Dein Repository Squash-Merge oder Rebase-Merge erlauben. Weitere Informationen findest Du unter „[Konfigurieren von Pull-Request-Merges](/github/administering-a-repository/configuring-pull-request-merges)."


### Einen linearen Commit-Verlauf durchsetzen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Wähle unter „Protect matching branches" (Übereinstimmende Branches schützen) **Require linear history** (Benötigt linearen Verlauf). ![Option „Required linear history" (Erforderter linearer Verlauf)](/assets/images/help/repository/required-linear-history.png)
{% data reusables.repositories.include-administrators %}
7. Klicke auf **Create** (Erstellen).
