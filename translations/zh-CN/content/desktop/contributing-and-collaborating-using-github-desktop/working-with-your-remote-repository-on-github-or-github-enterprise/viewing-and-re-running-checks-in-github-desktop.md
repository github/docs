---
title: 在 GitHub Desktop 中查看和重新运行检查
shortTitle: 查看和重新运行检查
intro: '您可以查看检查的状态，并在 {% data variables.product.prodname_desktop %} 中重新运行它们。'
versions:
  fpt: '*'
---

## 关于 {% data variables.product.prodname_desktop %} 中的检查

{% data variables.product.prodname_desktop %} 显示已在拉取请求分支中运行的检查的状态。 分支名称旁边的检查标志将显示*挂起、通过、*或*失败*检查状态。 您还可以在 {% data variables.product.prodname_desktop %} 中查看检查的状态时重新运行所有检查、失败的检查或单个检查。 有关在存储库中设置检查的详细信息，请参阅“[关于状态检查](/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)”。

{% data variables.product.prodname_desktop %} 还将在检查失败时显示系统通知。 有关启用通知的详细信息，请参阅“[在 GitHub 桌面中配置通知](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop)”。

## 查看和重新运行检查

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.click-pull-requests %}
  ![Current Branch（当前分支）下拉菜单中的 Pull Requests（拉取请求）选项卡](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png)
{% data reusables.desktop.choose-pr-from-list %}
  ![仓库中打开的拉取请求列表](/assets/images/help/desktop/click-pull-request.png)
4. 单击拉取请求分支名称右侧的拉取请求编号。 ![检查显示在分支名称旁边](/assets/images/help/desktop/checks-dialog.png)
5. 要重新运行失败的检查，请单击 **{% octicon "sync" aria-label="The sync icon" %} Re-run（重新运行）** ，然后选择 **Re-run Failed Checks（重新运行失败的检查）**。 ![重新运行失败的检查](/assets/images/help/desktop/re-run-failed-checks.png)
6. 要重新运行单个检查，请将鼠标悬停在要重新运行的单个检查上，然后选择 {% octicon "sync" aria-label="The sync icon" %} 图标以重新运行检查。 ![重新运行单个检查](/assets/images/help/desktop/re-run-individual-checks.png)
7. 您将看到一个确认对话框，其中包含将重新运行的检查的摘要。 单击 **Re-run Checks（重新运行检查）**以确认要执行重新运行。 ![重新运行确认对话框](/assets/images/help/desktop/re-run-confirmation-dialog.png)
