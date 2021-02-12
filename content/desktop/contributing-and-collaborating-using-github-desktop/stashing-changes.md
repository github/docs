---
title: Stashing changes
intro: You can temporarily save your changes without committing the changes to a branch by stashing the changes.
versions:
  free-pro-team: '*'
---

### About stashed changes

To apply your changes to your repository, you must save the files and then commit the changes to a branch. If you have saved changes that you are not ready to commit yet, you can stash the changes for later. When you stash changes, the changes are temporarily removed from the files and you can choose to restore or discard the changes later. You can only stash one set of changes at a time with {% data variables.product.prodname_desktop %}. If you use {% data variables.product.prodname_desktop %} to stash changes, all unsaved changes will be stashed. After you stash changes on a branch, you can safely change branches or make other changes to your current branch.

You can also stash changes when you switch branches. For more information, see "[Managing branches](/desktop/contributing-to-projects/managing-branches#switching-between-branches)."

### Stashing changes

{% data reusables.desktop.click-changed-files-header %}
{% data reusables.desktop.click-stash-all-changes %}

### Restoring stashed changes

{% data reusables.desktop.navigate-to-stashed-changes %}
{% data reusables.desktop.click-stashed-changes %}
{% data reusables.desktop.click-restore %}

### Discarding stashed changes

{% data reusables.desktop.navigate-to-stashed-changes %}
{% data reusables.desktop.click-stashed-changes %}
{% data reusables.desktop.click-discard %}
