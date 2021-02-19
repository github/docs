---
title: Obligatorische Commit-Signatur aktivieren
intro: Repository-Administratoren können die obligatorische Commit-Signatur auf einem Branch erzwingen, um alle Commits zu blockieren, die nicht signiert und verifiziert sind.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Bevor Du die obligatorische Commit-Signatur auf einem Branch aktivierst, musst Du zuerst den Branch als geschützten Branch aufsetzen. Weitere Informationen finden Sie unter „[Geschützte Branches konfigurieren](/github/administering-a-repository/configuring-protected-branches)“.

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Wähle **Require signed commits** (Verlange signierte Commits) aus. ![Option „Require signed commits“ (Verlange signierte Commits)](/assets/images/help/repository/require-signed-commits.png)
6. Optional wähle **Include administrators** (Administratoren einbeziehen) aus. Damit sind obligatorische Commit-Signaturen auch für die Administratoren des Repositorys vorgeschrieben. ![Kontrollkästchen „Include administrators“ (Administratoren einbeziehen)](/assets/images/help/repository/include-admins-protected-branches.png)
7. Klicke auf **Create** (Erstellen).
