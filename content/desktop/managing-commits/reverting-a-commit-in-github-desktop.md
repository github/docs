---
title: Reverting a commit in GitHub Desktop
shortTitle: Reverting a commit
intro: 'You can use {% data variables.product.prodname_desktop %} to revert a specific commit to remove its changes from your branch.'
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-commits/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-commits/reverting-a-commit-in-github-desktop
versions:
  feature: desktop
---
When you revert to a previous commit, the revert is also a commit. The original commit also remains in the repository's history.

{% tip %}

**Tip:** When you revert multiple commits, it's best to revert in order from newest to oldest. If you revert commits in a different order, you may see merge conflicts.

{% endtip %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}

## Further reading

* "[AUTOTITLE](/desktop/managing-commits/options-for-managing-commits-in-github-desktop)"
