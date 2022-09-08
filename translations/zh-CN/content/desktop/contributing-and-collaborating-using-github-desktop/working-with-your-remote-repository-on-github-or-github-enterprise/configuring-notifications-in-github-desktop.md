---
title: 在 GitHub Desktop 中配置通知
shortTitle: Configuring notifications
intro: '{% data variables.product.prodname_desktop %} 可让你随时查看有关拉取请求分支中发生的事件的通知。'
versions:
  fpt: '*'
ms.openlocfilehash: e7d99c4c81b64facae41b7697cde9d454e15e96a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060432'
---
## 关于 {% data variables.product.prodname_desktop %} 中的通知

{% data variables.product.prodname_desktop %} 将显示当前所选存储库中发生的事件的系统通知。 在以下情况下将显示通知：

- 拉取请求检查失败。
- 拉取请求评审保留了评论、批准或请求的更改。

单击通知会将应用程序焦点切换到 {% data variables.product.prodname_desktop %} 并提供更多详细信息。

## 有关拉取请求检查失败的通知

对拉取请求分支进行更改时，如果检查失败，你将收到通知。

![拉取请求检查失败通知](/assets/images/help/desktop/pull-request-checks-failed-notification.png)

单击通知将显示一个对话框，其中包含有关检查的详细信息。 查看检查失败的原因后，可以重新运行检查，或快速切换到拉取请求分支，开始修复错误。 有关详细信息，请参阅“[在 GitHub Desktop 中查看和重新运行检查](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)”。

![检查失败对话框](/assets/images/help/desktop/checks-failed-dialog.png)
## 拉取请求评审的通知

当队友批准、评论或请求拉取请求中的更改时，{% data variables.product.prodname_desktop %} 将显示系统通知。 有关拉取请求评审的详细信息，请参阅“[关于拉取请求评审](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)”。

![拉取请求评审通知](/assets/images/help/desktop/pull-request-review-notification.png)

单击通知会将应用程序焦点切换到 {% data variables.product.prodname_desktop %} 并为拉取请求审查评论提供更多上下文。

![拉取请求审查对话框](/assets/images/help/desktop/pull-request-review-dialog.png)
## 启用通知

如果已为 {% data variables.product.prodname_desktop %} 禁用系统通知，则可以按照以下步骤启用它们。

{% mac %}

1. 单击“Apple”菜单，然后选择“系统首选项”。
2. 选择“通知和焦点”。
3. 从应用程序列表中选择“{% data variables.product.prodname_desktop %}”。
4. 单击“允许通知”。

![macOS 通知和焦点](/assets/images/help/desktop/mac-enable-notifications.png)

有关 macOS 系统通知的详细信息，请参阅“[在 Mac 上使用通知](https://support.apple.com/en-us/HT204079)”。

{% endmac %}

{% windows %}

1. 打开“开始”菜单，然后选择“设置”。
2. 选择“系统”，然后单击“通知”。
3. 在应用程序列表中查找“{% data variables.product.prodname_desktop %}”并单击“打开”。

![启用 Windows 通知](/assets/images/help/desktop/windows-enable-notifications.png)

有关 Windows 系统通知的详细信息，请参阅“[更改 Windows 中的通知设置](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e)”。

{% endwindows %}
