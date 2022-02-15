---
title: 代码空间中的转发端口
intro: '{% data reusables.codespaces.about-port-forwarding %}'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: 转发端口
---

## 关于转发的端口

通过端口转发，您可以访问在代码空间内运行的 TCP 端口。 For example, if you're running a web application on a particular port in your codespace, you can forward that port. This allows you to access the application from the browser on your local machine for testing and debugging.

When an application running inside a codespace prints output to the terminal that contains a localhost URL, such as `http://localhost:PORT` or `http://127.0.0.1:PORT`, the port is automatically forwarded. If you're using {% data variables.product.prodname_codespaces %} in the browser or in {% data variables.product.prodname_vscode %}, the URL string in the terminal is converted into a link that you can click to view the web page on your local machine. 默认情况下，{% data variables.product.prodname_codespaces %} 使用 HTTP 转发端口。

![自动端口转发](/assets/images/help/codespaces/automatic-port-forwarding.png)

You can also forward a port manually, label forwarded ports, share forwarded ports with members of your organization, share forwarded ports publicly, and add forwarded ports to the codespace configuration.

## 转发端口

您可以手动转发未自动转发的端口。

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 在端口列表下，单击 **Add port（添加端口）**。

   ![添加端口按钮](/assets/images/help/codespaces/add-port-button.png)

1. 键入端口编号或地址，然后按 Enter。

   ![输入端口按钮的文本框](/assets/images/help/codespaces/port-number-text-box.png)

## 使用 HTTPS 转发

默认情况下，{% data variables.product.prodname_codespaces %} 使用 HTTP 转发端口，但您可以根据需要更新任何端口以使用 HTTPS。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 右键单击要更新的端口，然后单击 **Change Port Protocol（更改端口协议）**。 ![更改端口协议的选项](/assets/images/help/codespaces/update-port-protocol.png)
1. 选择此端口所需的协议。 您选择的协议将在代码空间的有效期内被记住用于此端口。

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 在端口列表下，单击 **Add port（添加端口）**。

   ![添加端口按钮](/assets/images/help/codespaces/add-port-button.png)

1. 键入端口编号或地址，然后按 Enter。

   ![输入端口按钮的文本框](/assets/images/help/codespaces/port-number-text-box.png)

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

To forward a port use the `gh codespace ports forward` subcommand. Replace `codespace-port:local-port` with the remote and local ports that you want to connect. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace ports forward <em>codespace-port</em>:<em>local-port</em>
```

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_ports_forward).

To see details of forwarded ports enter `gh codespace ports` and then choose a codespace.

{% endcli %}

## 共享端口

{% note %}

**Note:** You can only make a port private to an organization if your organization uses {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}. This feature is not currently available in the beta version of {% data variables.product.prodname_codespaces %}.

{% endnote %}

If you want to share a forwarded port with others, you can either make the port private to your organization or make the port public. After you make a port private to your organization, anyone in the organization with the port's URL can view the running application. After you make a port public, anyone who knows the URL and port number can view the running application without needing to authenticate.

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port that you want to share, select the "Port Visibility" menu, then click **Private to Organization** or **Public**. ![Option to select port visibility in right-click menu](/assets/images/help/codespaces/make-public-option.png)
1. 在端口的本地地址右侧，单击复制图标。 ![端口 URL 的复制图标](/assets/images/help/codespaces/copy-icon-port-url.png)
1. 将复制的 URL 发送给您想要与其共享端口的人。

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 右键单击要共享的端口，然后单击 **Make Public（公开）**。 ![右键菜单中公开端口的选项](/assets/images/help/codespaces/make-public-option.png)
1. 在端口的本地地址右侧，单击复制图标。 ![端口 URL 的复制图标](/assets/images/help/codespaces/copy-icon-port-url.png)
1. 将复制的 URL 发送给您想要与其共享端口的人。

{% endvscode %}

{% cli %}

To change the visibility of a forwarded port, use the `gh codespace ports visibility` subcommand. {% data reusables.codespaces.port-visibility-settings %}

Replace `codespace-port` with the forwarded port number. Replace `setting` with `private`, `org`, or `public`. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>setting</em>
```

You can set the visibility for multiple ports with one command. 例如：

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_ports_visibility).

{% endcli %}

## 标记端口

您可以标记端口，使端口更容易在列表中识别。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 悬停在要标记的端口上，然后单击标签图标。 ![端口的标签图标](/assets/images/help/codespaces/label-icon.png)
{% data reusables.codespaces.type-port-label %}

## 将端口添加到代码空间配置

您可以将转发的端口添加到仓库的 {% data variables.product.prodname_codespaces %} 配置中，因此该端口将自动为创建自仓库的所有代码空间转发。 更新配置后，必须重建任何以前创建的代码空间以应用更改。 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)”。

您可以使用 `forwardPorts` 属性在 `.devcontainer.json` 文件中手动配置转发的端口，也可以使用代码空间中的“端口”面板。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 右键单击要添加到代码空间配置的端口，然后单击 **Set Label and Update devcontainer.json（设置标签和更新 devcontainer.json）**。 ![右键菜单中设置标签并将端口添加到 devcontainer.json 的选项](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png)
{% data reusables.codespaces.type-port-label %}
