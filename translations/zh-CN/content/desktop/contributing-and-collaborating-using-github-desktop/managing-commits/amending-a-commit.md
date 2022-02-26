---
title: 修改提交
intro: '您可以使用 {% data variables.product.prodname_desktop %} 修改上一个提交。'
versions:
  fpt: '*'
---

## 关于修改提交

修改提交是修改您当前分支中的最新提交的一种方式。 如果您需要编辑提交消息，或者忘记在提交中包含更改，这会很有帮助。

您可以继续修订提交，直到将其推送到远程仓库。 在推送提交后，修订选项在 {% data variables.product.prodname_desktop %} 中禁用。 修订提交时，请将以前的提交替换为当前分支的新提交。 修订已推送到远程仓库的提交可能会对与仓库合作的其他协作者造成混淆。

## 修改提交

{% data reusables.desktop.history-tab %}
2. 右键单击最新的提交并选择 **Amend commit（修订提交）**。 ![修订提交上下文菜单](/assets/images/help/desktop/amend-commit-context-menu.png)
3. 点击 **Summary（摘要）**字段来修改提交消息。 （可选）您可以在 **Description（说明）**字段中修改或添加关于提交的信息。
4. 选择您想要添加到提交的任何未提交更改。 有关选择更改的更多信息，请参阅“[提交和审查对项目的更改](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)”。
5. 完成更改后，点击 **Amend last commit（修改上次提交）**。 ![修改上次提交概述](/assets/images/help/desktop/amend-last-commit-overview.png)
