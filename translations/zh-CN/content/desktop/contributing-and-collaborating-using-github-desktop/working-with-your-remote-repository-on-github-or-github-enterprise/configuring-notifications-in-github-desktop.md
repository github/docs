---
title: 在 GitHub Desktop 中配置通知
shortTitle: 配置通知
intro: '{% data variables.product.prodname_desktop %} 将为您提供有关拉取请求分支中发生的事件的通知。'
versions:
  fpt: '*'
---

## 关于 {% data variables.product.prodname_desktop %} 中的通知

{% data variables.product.prodname_desktop %} 将显示当前选定存储库中发生的事件的系统通知。 在以下情况下将显示通知：

- 拉取请求检查失败。
- 拉取请求审核留下评论、批准或请求的更改。

单击通知会将应用程序焦点切换到 {% data variables.product.prodname_desktop %} ，并提供更详细的信息。

## 有关拉取请求检查失败的通知

对拉取请求分支进行更改时，如果检查失败，您将收到通知。

![拉取请求检查失败通知](/assets/images/help/desktop/pull-request-checks-failed-notification.png)

单击通知将显示一个对话框，其中包含有关检查的详细信息。 查看检查失败的原因后，可以重新运行检查，或快速切换到拉取请求分支以开始修复错误。 更多信息请参阅“[在 GitHub Desktop 中查看和重新运行检查](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)”。

![检查失败对话框](/assets/images/help/desktop/checks-failed-dialog.png)
## 拉取请求审核通知

{% data variables.product.prodname_desktop %} 将在队友批准、评论或请求拉取请求更改时显示系统通知。 有关拉取请求审核的详细信息，请参阅“[拉取请求审核](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)”。

![拉取请求审核通知](/assets/images/help/desktop/pull-request-review-notification.png)

单击通知会将应用程序焦点切换到 {% data variables.product.prodname_desktop %} ，并为拉取请求审核评论提供更多上下文。

![拉取请求审核对话框](/assets/images/help/desktop/pull-request-review-dialog.png)
## 启用通知

如果系统通知对 {% data variables.product.prodname_desktop %} 禁用，您可以按照以下步骤启用它们。

{% mac %}

1. 单击 **Apple** 菜单，然后选择 **System Preferences（系统偏好设置）**。
2. 选择 **Notifications & Focus（通知和焦点）**。
3. 从应用程序列表中选择 **{% data variables.product.prodname_desktop %}**。
4. 单击 **Allow Notifications（允许通知）**。

![macOS 通知和焦点](/assets/images/help/desktop/mac-enable-notifications.png)

有关 macOS 系统通知的更多信息，请参阅“[在 Mac 上使用通知](https://support.apple.com/en-us/HT204079)”。

{% endmac %}

{% windows %}

1. 打开 **Start（开始）**菜单，然后选择 **Settings（设置）**。
2. 选择 **System（系统）**，然后单击 **Notifications（通知）**。
3. 在应用程序列表中找到 **{% data variables.product.prodname_desktop %}** ，然后单击 **On（打开）**。

![启用 Windows 通知](/assets/images/help/desktop/windows-enable-notifications.png)

有关 Windows 系统通知的详细信息，请参阅“[更改 Windows 中的通知设置](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e)”。

{% endwindows %}
