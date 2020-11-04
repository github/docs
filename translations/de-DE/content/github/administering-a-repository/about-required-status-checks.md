---
title: Informationen zu erforderlichen Statuschecks
intro: Mithilfe von erforderlichen Statuschecks wird sichergestellt, dass alle erforderlichen CI-Tests bestanden werden, bevor Mitarbeiter Änderungen an einem geschützten Branch vornehmen können.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Informationen zu erforderlichen Statuschecks

Wenn Du in Deinem Repository Schutzmaßnahmen für Branches erzwungen hast, kannst Du erforderliche Statuschecks einrichten. Wenn Du in Deinem Repository Schutzmaßnahmen für Branches erzwungen hast, kannst Du erforderliche Statuschecks einrichten. Weitere Informationen findest Du unter „[Geschützte Branches konfigurieren](/articles/configuring-protected-branches/)“ und „[Erforderliche Statuschecks aktivieren](/articles/enabling-required-status-checks)“. Weitere Informationen findest Du unter „[Über Statuschecks](/github/administering-a-repository/enabling-required-status-checks)."

Nach der Aktivierung der erforderlichen Statuschecks müssen alle erforderlichen Statuschecks durchlaufen werden, bevor Branches in den geschützten Branch zusammengeführt werden können. Nachdem alle erforderlichen Statuschecks durchlaufen sind, müssen alle Commits entweder in einen anderen Branch übertragen und dann zusammengeführt oder direkt in den geschützten Branch übertragen werden.

![Geschützten Branch zusammenführen ](/assets/images/help/repository/req-status-check-all-passed.png)

{% tip %}

**Hinweis:** Jede Person oder Integration mit Schreibberechtigungen auf ein Repository kann den Zustand von Statuschecks im Repository festlegen. {% data variables.product.product_name %} verifiziert nicht, dass der Autor eines Checks autorisiert ist, einen Check mit einem bestimmten Namen zu erstellen oder einen vorhandenen Status zu ändern. Vor dem Zusammenführen eines Pull Request solltest Du überprüfen, dass der Autor jedes im Merge-Feld aufgeführten Status erwartet wird.

{% endtip %}

Administratoren eines Repositorys können einen geschützten Branch zusammenführen, auch wenn die erforderlichen Statuschecks nicht bestanden wurden oder noch ausstehen. Du kannst verlangen, dass auch für Administratoren erforderliche Statuschecks notwendig sind. Weitere Informationen findest du unter „[Erforderliche Statuschecks aktivieren](/github/administering-a-repository/enabling-required-status-checks)."

![Administratoren-Zusammenführung eines geschützten Branch](/assets/images/help/repository/req-status-check-admin-merge.png)

Administratoren können einen geschützten Branch zusammenführen, auch wenn der Branch nicht auf dem neuesten Stand des Basisbranches ist.

### Einstellungen für erforderliche Statuschecks

Du kannst entweder lose oder strenge Statuschecks einrichten, je nachdem, ob Du vor dem Zusammenführen eine Aktualisierung Deines Branch mit dem Basisbranch verlangen willst. Weitere Informationen findest Du unter „[Arten von erforderlichen Statuschecks](/github/administering-a-repository/types-of-required-status-checks)."

### Fehlerbehebung von erforderlichen Statuschecks

Wenn Du eine Prüfung und einen Status mit dem gleichen Namen hast, und Du selektierst diesen Namen als erforderlichen Statuscheck, dann sind sowohl die Prüfung wie auch der Status erforderlich. For more information, see "[Checks](/v3/checks/)."

Nachdem Du die erforderlichen Statuschecks eingerichtet hast, muss Dein Branch vor dem Zusammenführen auf dem neuesten Stand des Basisbranches sein. Dadurch wird sichergestellt, dass Dein Branch mit dem neuesten Code aus dem Basisbranch getestet wurde. Wenn Dein Branch veraltet ist, musst Du den Basisbranch in Deinen Branch zusammenführen.

{% note %}

**Note:** Mit Git rebase kannst Du Deinen Branch auch auf den Basisbranch aktualisieren. Weitere Informationen findest Du unter „[Informationen zu Git rebase](/github/using-git/about-git-rebase).“

{% endnote %}

![Veralteter Branch](/assets/images/help/repository/req-status-check-out-of-date.png)

Du kannst lokale Änderungen erst dann an einen geschützten Branch übertragen, wenn alle erforderlichen Statuschecks bestanden sind. Ansonsten erhältst Du eine Fehlermeldung ähnlich der folgenden:

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Hinweis:** Pull Requests, die auf dem neuesten Stand sind und die erforderlichen Statuschecks bestehen, können lokal zusammengeführt und an den geschützten Branch übertragen werden. Dies kann ohne Statuschecks erfolgen, die auf dem Merge-Commit selbst ausgeführt werden.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

Manchmal werden sich die Ergebnisse der Statuschecks für den Test-Merge-Commit und Head-Commit widersprechen. Wenn der Test-Merge-Commit einen Status hat, muss dieser bestanden werden. Anderenfalls muss der Status des Head-Commit bestanden sein, bevor Du den Branch zusammenführen kannst. For more information about test merge commits, see "[Pull Requests](/v3/pulls/#response-1)."

![Branch mit widersprüchlichen Merge-Commits](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}

### Weiterführende Informationen

- „[Über Statuschecks](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
