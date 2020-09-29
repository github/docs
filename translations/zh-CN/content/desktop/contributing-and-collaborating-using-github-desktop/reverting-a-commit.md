---
title: 还原提交
intro: 您可以还原特定提交，以从分支中删除其变更。
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
versions:
  free-pro-team: '*'
---

在还原到上一个提交时，还原本身也是提交。 原提交仍会保留在仓库的历史记录中。

{% tip %}

**提示：**在还原多个提交时，最好按照从最新到最旧的顺序还原。 如果以其他顺序还原提交，可能会出现合并冲突。

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![差异视图上方的还原选项](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![差异视图上方的还原选项](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
