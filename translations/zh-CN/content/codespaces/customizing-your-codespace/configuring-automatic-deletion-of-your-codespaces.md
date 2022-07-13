---
title: 配置代码空间的自动删除
shortTitle: 配置自动删除
intro: 未使用的代码空间将自动删除。 您可以选择停止的代码空间保留多长时间，最多保留 30 天。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
---

默认情况下，{% data variables.product.prodname_codespaces %} 在停止后会自动删除，并保持非活动状态 30 天。

但是，由于 {% data variables.product.prodname_codespaces %} 会产生存储费用，因此您可能希望通过在个人设置中更改 {% data variables.product.prodname_github_codespaces %} 的默认保留期来缩短保留期。 有关存储费用的详细信息，请参阅[关于代码空间的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)”。

{% note %}

**注意**：无论您是否设置了个人代码空间保留期，最好养成删除不再需要的代码空间的习惯。 更多信息请参阅“[删除代码空间](/codespaces/developing-in-codespaces/deleting-a-codespace)”。

{% endnote %}

无论代码空间是否包含未推送的更改，都会发生自动删除。 要防止自动删除代码空间，只需再次打开代码空间即可。 每次连接到代码空间时都会重置保留期，并在代码空间停止时重新启动保留倒计时。

如果存储库属于某个组织，则组织管理员可能已为整个组织设置了保留期。 如果此保留期小于个人设置中的默认保留期，则组织保留期将应用于您为此存储库创建的代码空间。 更多信息请参阅“[限制代码空间的保留期](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”。

每个代码空间都有自己的保留期。 因此，您可能具有不同租用期的代码空间。 例如，如果：
* 您创建了一个代码空间，更改了默认保留期，然后创建了另一个代码空间。
* 您从组织拥有的存储库创建了代码空间，该存储库具有为组织配置的保留期。

{% note %}

**注**：保留期以天为单位指定。 一天表示一个 24 小时的时间段，从一天中停止代码空间的时间开始。

{% endnote %}

{% webui %}

## 为代码空间设置默认保留期

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. 在“Default retention period（默认保留期）”下，输入代码空间停止后默认希望保留的天数。

   ![选择保留期](/assets/images/help/codespaces/setting-default-retention.png)

   您可以将默认保留期设置为介于 `0` 和 `30` 天之间。

   {% warning %}

   **警告**：将期限设置为 `0` 将导致在停止代码空间时立即删除代码空间，或者由于不活动超时而删除。 更多信息请参阅“[设置代码空间的超时期限](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces)”。

   {% endwarning %}

1. 单击 **Save（保存）**。

此默认设置可能会被较短的组织级保留期所取代。

如果您将保留期设置为一天以上，则会在删除前一天收到电子邮件通知。


## 检查自动删除之前的剩余时间

您可以检查代码空间是否即将被自动删除。

当非活动代码空间接近其保留期结束时，这将在 [https://github.com/codespaces](https://github.com/codespaces) 上 {% data variables.product.prodname_dotcom %} 的代码空间列表中指示。

![{% data variables.product.prodname_dotcom %} 上的代码空间列表中的删除前消息](/assets/images/help/codespaces/retention-deletion-message.png)


{% endwebui %}



{% cli %}

## 设置代码空间的保留期

您可以在 Web 浏览器的 {% data variables.product.prodname_dotcom_the_website %} 上设置默认保留期。 有关更多信息，请单击此文章顶部的“Web browser（Web 浏览器）”选项卡。

{% data reusables.cli.cli-learn-more %}

{% endcli %}

{% vscode %}

## 设置保留期

您可以在 Web 浏览器的 {% data variables.product.prodname_dotcom_the_website %} 上设置默认保留期。 有关更多信息，请单击此文章顶部的“Web browser（Web 浏览器）”选项卡。

## 检查代码空间是否很快将自动删除

您可以在 {% data variables.product.prodname_vscode %} 桌面应用程序中检查代码空间是否即将被自动删除。

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. 如果尚未选择远程资源管理器，请从远程资源管理器右上角的下拉菜单中选择 **{% data variables.product.prodname_github_codespaces %}** 。
1. 在“GITHUB CODESPACES”下，将鼠标指针放在您感兴趣的代码空间上。 将显示一个弹出框，其中显示有关代码空间的信息。

   如果代码空间即将结束其保留期，则会包含一行，告诉您何时删除代码空间。

   ![显示删除前时间的代码空间信息](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

{% endvscode %}
