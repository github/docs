---
title: Fehlerbehebung von erforderlichen Statuschecks
intro: You can check for common errors and resolve issues with required status checks.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

If you have a check and a status with the same name, and you select that name as a required status check, both the check and the status are required. For more information, see "[Checks](/rest/reference/checks)."

After you enable required status checks, your branch may need to be up-to-date with the base branch before merging. Dadurch wird sichergestellt, dass Dein Branch mit dem neuesten Code aus dem Basisbranch getestet wurde. Wenn Dein Branch veraltet ist, musst Du den Basisbranch in Deinen Branch zusammenführen. Weitere Informationen findest Du unter „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging).“

{% note %}

**Note:** Mit Git rebase kannst Du Deinen Branch auch auf den Basisbranch aktualisieren. Weitere Informationen findest Du unter „[Informationen zu Git rebase](/github/getting-started-with-github/about-git-rebase).“

{% endnote %}

Du kannst lokale Änderungen erst dann an einen geschützten Branch übertragen, wenn alle erforderlichen Statuschecks bestanden sind. Ansonsten erhalten Sie eine Fehlermeldung ähnlich der folgenden.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Note:** Pull requests that are up-to-date and pass required status checks can be merged locally and pushed to the protected branch. Dies kann ohne Statuschecks erfolgen, die auf dem Merge-Commit selbst ausgeführt werden.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

Manchmal werden sich die Ergebnisse der Statuschecks für den Test-Merge-Commit und Head-Commit widersprechen. If the test merge commit has a status, the test merge commit must pass. Anderenfalls muss der Status des Head-Commit bestanden sein, bevor Du den Branch zusammenführen kannst. For more information about test merge commits, see "[Pulls](/rest/reference/pulls#get-a-pull-request)."

![Branch mit widersprüchlichen Merge-Commits](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}
