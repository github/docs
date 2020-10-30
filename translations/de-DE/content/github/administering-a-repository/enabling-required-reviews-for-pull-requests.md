---
title: Erforderliche Reviews für Pull-Requests aktivieren
intro: 'Repository-Administratoren können erforderliche Reviews vorschreiben, sodass Pull Requests eine bestimmte Anzahl an genehmigenden Reviews aufweisen müssen, bevor sie zusammengeführt werden.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Bevor Du erforderliche Reviews auf einem Branch aktivierst, musst Du zunächst den Branch als geschützten Branch aufsetzen. Weitere Informationen finden Sie unter „[Geschützte Branches konfigurieren](/github/administering-a-repository/configuring-protected-branches)“.

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Wähle **Require pull request reviews before merging** (Pull-Request-Reviews vor dem Merge erforderlich) aus. ![Kontrollkästchen für Einschränkungen bei Pull-Request-Reviews](/assets/images/help/repository/PR-reviews-required.png)
6. Wähle im Dropdownmenü „Required approving reviews“ (Erforderliche genehmigende Reviews) die Anzahl an genehmigenden Reviews aus, die Du auf dem Branch vorschreiben möchtest. ![Dropdownmenü zur Auswahl der Anzahl an erforderlichen genehmigenden Reviews](/assets/images/help/repository/number-of-required-review-approvals.png)
7. Wähle optional **Dismiss stale pull request approvals when new commits are pushed** (Alte Pull-Request-Genehmigungen verwerfen, wenn neue Commits übertragen werden) aus. Dadurch wird ein genehmigender Pull-Request-Review verworfen, wenn ein Code-verändernder Commit an den Branch übertragen wird. ![Kontrollkästchen „Dismiss stale pull request approvals when new commits are pushed“ (Alte Pull-Request-Genehmigungen verwerfen, wenn neue Commits übertragen werden)](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
8. Wähle optional **Require review from Code Owners** (Review von Codeinhabern erforderlich) aus, damit ein Review von einem Codeinhaber erforderlich ist, wenn der Pull Request sich auf Code auswirkt, für den es einen bestimmten Inhaber gibt. Weitere Informationen findest Du unter „[Über Codeinhaber](/github/creating-cloning-and-archiving-repositories/about-code-owners)." ![Review von Codeinhabern erforderlich](/assets/images/help/repository/PR-review-required-code-owner.png)
9. Wenn das Repository Teil einer Organisation ist, wähle optional **Restrict who can dismiss pull request reviews** (Einschränken, wer Pull-Request-Reviews verwerfen kann) aus, um die Personen oder Teams zu suchen und auszuwählen, die Pull-Request-Reviews verwerfen können. Weitere Informationen findest Du unter „[Einen Pull-Request-Review ablehnen](/github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review).“ Diese Option ist für persönliche Repository nicht verfügbar. ![Kontrollkästchen „Restrict who can dismiss pull request reviews“ (Einschränken, wer Pull-Request-Reviews verwerfen kann)](/assets/images/help/repository/PR-review-required-dismissals.png)
{% data reusables.repositories.include-administrators %}
11. Klicke auf **Create** (Erstellen).

### Weiterführende Informationen

- „[Informationen zu erforderlichen Reviews für Pull Requests](/github/administering-a-repository/about-required-reviews-for-pull-requests)“
- „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches)“
- „[Informationen zu erforderlichen Statuschecks](/github/administering-a-repository/about-required-status-checks)“
