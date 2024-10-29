---
title: Stashing changes in GitHub Desktop
shortTitle: Stashing changes
intro: 'You can temporarily save your changes without committing them to a branch by stashing the changes in {% data variables.product.prodname_desktop %}.'
versions:
  feature: desktop
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/stashing-changes
  - /desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/stashing-changes
  - /desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/stashing-changes-in-github-desktop
---
## About stashed changes

To apply your changes to your repository, you must save the files and then commit the changes to a branch. If you have saved changes that you are not ready to commit yet, you can stash the changes for later. When you stash changes, the changes are temporarily removed from the files and you can choose to restore or discard the changes later. You can only stash one set of changes at a time with {% data variables.product.prodname_desktop %}. If you use {% data variables.product.prodname_desktop %} to stash changes, all unsaved changes will be stashed. After you stash changes on a branch, you can safely change branches or make other changes to your current branch.

If you use {% data variables.product.prodname_desktop %} to switch branches while you have saved, but not committed, changes, {% data variables.product.prodname_desktop %} will prompt you to stash the changes or bring them to the other branch. For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop#switching-between-branches)."

## Stashing changes

{% data reusables.desktop.click-changed-files-header %}
{% data reusables.desktop.click-stash-all-changes %}

## Restoring stashed changes

{% data reusables.desktop.navigate-to-stashed-changes %}
{% data reusables.desktop.click-stashed-changes %}
{% data reusables.desktop.click-restore %}

## Discarding stashed changes

{% data reusables.desktop.navigate-to-stashed-changes %}
{% data reusables.desktop.click-stashed-changes %}
{% data reusables.desktop.click-discard %}
