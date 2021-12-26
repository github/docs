---
title: 代码空间中的转发端口
intro: '{% data reusables.codespaces.about-port-forwarding %}'
versions:
  free-pro-team: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### 关于转发的端口

通过端口转发，您可以访问在代码空间内运行的 TCP 端口。 例如，如果您在端口 4000 上运行 Web 应用程序，您可以从浏览器访问该应用程序以测试和调试它。

在代码空间内运行的应用程序向控制台输出端口时，{% data variables.product.prodname_codespaces %} 将检测到 localhost URL 模式并自动转发端口。 您可以单击终端中的 URL 在浏览器中打开端口。 例如，如果应用程序向控制台输出 `http://127.0.0.1:4000` 或 `http://localhost:4000`，则日志会自动将输出转换为端口 4000 的可单击 URL。

![自动端口转发](/assets/images/help/codespaces/automatic-port-forwarding.png)

您还可以手动转发端口、标记转发的端口、公开共享转发的端口以及将转发的端口添加到代码空间配置中。

### 转发端口

您可以手动转发未自动转发的端口。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 在端口列表下，单击 **Add port（添加端口）**。 ![添加端口按钮](/assets/images/help/codespaces/add-port-button.png)
1. 键入端口编号或地址，然后按 Enter。 ![输入端口按钮的文本框](/assets/images/help/codespaces/port-number-text-box.png)

### 标记端口

您可以标记端口，使端口更容易在列表中识别。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 悬停在要标记的端口上，然后单击标签图标。 ![端口的标签图标](/assets/images/help/codespaces/label-icon.png)
{% data reusables.codespaces.type-port-label %}

### 共享端口

如果您想与他人共享转发的端口，您可以公开该端口。 当您公开端口后，任何拥有端口 URL 的人都可以查看正在运行的应用程序，而无需进行身份验证。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 右键单击要共享的端口，然后单击 **Make Public（公开）**。 ![右键菜单中公开端口的选项](/assets/images/help/codespaces/make-public-option.png)
1. 在端口的本地地址右侧，单击复制图标。 ![端口 URL 的复制图标](/assets/images/help/codespaces/copy-icon-port-url.png)
1. 将复制的 URL 发送给您想要与其共享端口的人。

### 将端口添加到代码空间配置

您可以将转发的端口添加到仓库的 {% data variables.product.prodname_codespaces %} 配置中，因此该端口将自动为创建自仓库的所有代码空间转发。 更新配置后，必须重建任何以前创建的代码空间以应用更改。 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)”。

您可以使用 `forwardPorts` 属性在 `.devcontainer.json` 文件中手动配置转发的端口，也可以使用代码空间中的“端口”面板。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 右键单击要添加到代码空间配置的端口，然后单击 **Set Label and Update devcontainer.json（设置标签和更新 devcontainer.json）**。 ![右键菜单中设置标签并将端口添加到 devcontainer.json 的选项](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png)
{% data reusables.codespaces.type-port-label %}

