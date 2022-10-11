---
title: 隐藏更改
intro: 您可以暂时保存更改，而无需通过隐藏更改将其提交到分支。
versions:
  free-pro-team: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/stashing-changes
---

### 关于隐藏的更改

要将更改应用到仓库，您必须保存文件，然后将更改提交到分支。 如果您保存了尚未准备好提交的更改，可以隐藏更改供以后使用。 当您隐藏更改时，更改会暂时从文件中删除，然后您可以选择恢复或丢弃更改。 使用 {% data variables.product.prodname_desktop %} 只能隐藏一组更改。 如果您使用 {% data variables.product.prodname_desktop %} 来隐藏更改，则所有未保存的更改都将被隐藏。 在隐藏分支上的更改后，您可以安全地更改分支或对当前分支进行其他更改。

如果您在已保存但未提交更改时使用 {% data variables.product.prodname_desktop %} 切换分支，则 {% data variables.product.prodname_desktop %} 会提示您隐藏更改或将其带到其他分支。 更多信息请参阅“[管理分支](/desktop/contributing-to-projects/managing-branches#switching-between-branches)。”

### 隐藏更改

{% data reusables.desktop.click-changed-files-header %}
{% data reusables.desktop.click-stash-all-changes %}

### 恢复隐藏的更改

{% data reusables.desktop.navigate-to-stashed-changes %}
{% data reusables.desktop.click-stashed-changes %}
{% data reusables.desktop.click-restore %}

### 丢弃隐藏的更改

{% data reusables.desktop.navigate-to-stashed-changes %}
{% data reusables.desktop.click-stashed-changes %}
{% data reusables.desktop.click-discard %}
