---
title: 在代码空间中开发
intro: '您可以在 {% data variables.product.product_name %} 上打开代码空间，然后使用 {% data variables.product.prodname_vscode %} 的功能进行开发。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 任何人都可以在其用户帐户拥有的代码空间内开发。
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.use-chrome %} 更多信息请参阅“[代码空间故障排除](/github/developing-online-with-codespaces/troubleshooting-your-codespace)”。

### 从 {% data variables.product.prodname_vscode %} 连接到代码空间
{% data reusables.codespaces.connect-to-codespace-from-vscode %}

### 导航到您的代码空间
{% data reusables.codespaces.navigate-to-codespaces %}
2. 单击您要在其中开发的代码空间的名称。 ![代码空间的名称](/assets/images/help/codespaces/click-name-codespace.png)

### 转发端口

通过端口转发，您可以访问在代码空间内运行的 TCP 端口。 例如，如果您在端口 3000 上运行 Web 应用程序，您可以从浏览器访问该应用程序以测试和调试它。

在代码空间内运行的应用程序向控制台输出端口时，{% data variables.product.prodname_codespaces %} 将检测到 localhost URL 模式并自动转发这些端口。 您可以单击终端中的 URL 在浏览器中打开它。 例如，如果应用程序向控制台输出 `http://127.0.0.1:3000` 或 `http://localhost:3000`，则日志会自动将输出转换为端口 3000 的可单击 URL。

![自动端口转发](/assets/images/help/codespaces/automatic-port-forwarding.png)

或者，您也可以使用以下任意方式转发端口。

* 您可以通过触发命令面板 (`shift command P` / `shift control P`) 并键入 "Codespaces: Forward Port" 来按需转发端口。 然后，您可以输入要转发的端口的编号。

    ![命令面板端口转发](/assets/images/help/codespaces/command-palette-port-forwarding.png)

* 您可以使用 `forwardPorts` 属性在 `.devcontainer.json` 文件中自动配置转发的端口。

* 您可以在远程资源管理器扩展中添加或删除转发的端口。 从远程资源管理器中，您可以复制和粘贴转发端口的 URL，从而可以通过浏览器访问它们。

    ![远程资源管理器端口转发](/assets/images/help/codespaces/remote-explorer-port-forwarding.png)
