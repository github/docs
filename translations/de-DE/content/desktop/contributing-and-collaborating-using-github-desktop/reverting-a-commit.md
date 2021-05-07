---
title: Einen Commit rückgängig machen
intro: 'Du kannst einen bestimmten Commit zurücksetzen, um dessen Änderungen aus deinem Branch zu entfernen.'
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
versions:
  free-pro-team: '*'
---

Wenn Du einen vorherigen Commit rückgängig machst, ist das Rückgängigmachen ebenfalls ein Commit. Der ursprüngliche Commit verbleibt ebenfalls im Verlauf des Repositorys.

{% tip %}

**Tipp:** Wenn Du mehrere Commits rückgängig machst, ist es am besten, die Änderungen in der Reihenfolge vom neuesten zum ältesten rückgängig zu machen. Wenn Du Commits in einer anderen Reihenfolge rückgängig machst, werden möglicherweise Merge-Konflikte angezeigt.

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![Die Option „Revert“ (Rückgängig machen) oberhalb der Diff-Ansicht](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![Die Option „Revert“ (Rückgängig machen) oberhalb der Diff-Ansicht](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
