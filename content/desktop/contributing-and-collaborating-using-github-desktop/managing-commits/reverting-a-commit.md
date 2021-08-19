---
title: Reverting a commit
intro: You can revert a specific commit to remove its changes from your branch.
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit
versions:
  fpt: '*'
---
When you revert to a previous commit, the revert is also a commit. The original commit also remains in the repository's history.

{% tip %}

**Tip:** When you revert multiple commits, it's best to revert in order from newest to oldest. If you revert commits in a different order, you may see merge conflicts.

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![The Revert option above the diff view](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![The Revert option above the diff view](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
