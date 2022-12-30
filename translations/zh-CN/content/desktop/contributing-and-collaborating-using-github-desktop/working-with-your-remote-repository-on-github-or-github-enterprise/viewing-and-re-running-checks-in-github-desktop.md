---
title: 在 GitHub Desktop 中查看和重新运行检查
shortTitle: Viewing and re-running checks
intro: '可以查看检查的状态，并在 {% data variables.product.prodname_desktop %} 中重新运行它们。'
versions:
  fpt: '*'
ms.openlocfilehash: d763dc4e4b30844b905b4e601df6c9cb500c8094
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068017'
---
## 关于 {% data variables.product.prodname_desktop %} 中的检查

{% data variables.product.prodname_desktop %} 显示在拉取请求分支中运行的检查的状态。 分支名称旁边的检查锁屏提醒将显示检查的“待处理”、“通过”或“失败”状态 。 在 {% data variables.product.prodname_desktop %} 中查看检查状态时，还可以重新运行所有检查、失败的检查或个别检查。 有关在存储库中设置检查的详细信息，请参阅“[关于状态检查](/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)”。

{% data variables.product.prodname_desktop %} 也会在检查失败时显示系统通知。 有关启用通知的详细信息，请参阅“[在 GitHub Desktop 中配置通知](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop)”。

## 查看和重新运行检查

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.click-pull-requests %}![“Current Branch”下拉菜单中的“拉取请求”选项卡](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png) {% data reusables.desktop.choose-pr-from-list %} ![存储库中打开的拉取请求列表](/assets/images/help/desktop/click-pull-request.png)
4. 单拉取请求分支名称右侧的拉取请求编号。
  ![检查分支名称旁边显示的内容](/assets/images/help/desktop/checks-dialog.png)
5. 若要重新运行失败的检查，请单击 {% octicon "sync" aria-label="The sync icon" %}“重新运行”，然后选择“重新运行失败的检查” 。
  ![重新运行失败的检查](/assets/images/help/desktop/re-run-failed-checks.png)
6. 若要重新运行单个检查，请将鼠标悬停在要重新运行的单个检查上，然后选择 {% octicon "sync" aria-label="The sync icon" %} 图标以重新运行检查。
  ![重新运行单个检查](/assets/images/help/desktop/re-run-individual-checks.png)
7. 你将看到一个确认对话框，其中包含将重新运行的检查摘要。 单击“重新运行检查”以确认要重新运行。
  ![“重新运行”确认对话框](/assets/images/help/desktop/re-run-confirmation-dialog.png)
