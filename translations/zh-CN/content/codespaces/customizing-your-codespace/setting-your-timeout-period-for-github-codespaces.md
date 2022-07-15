---
title: Setting your timeout period for GitHub Codespaces
shortTitle: 设置超时
intro: '您可以在个人设置页面中设置 {% data variables.product.prodname_codespaces %} 的默认超时。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
---

代码空间将在一段时间不活动后停止运行。 您可以指定此超时期限的长度。 更新后的设置将应用于任何新创建的代码空间。

某些组织可能有最大空闲超时策略。 如果组织策略设置的最大超时小于您设置的默认超时，则将使用组织的超时而不是您的设置，并且在创建代码空间后，您将收到通知。 更多信息请参阅“[限制空闲超时期限](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)”。

{% warning %}

**警告**：代码空间按分钟计费。 如果您未主动使用代码空间，但代码空间尚未超时，则仍需为代码空间运行的时间付费。 更多信息请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”。

{% endwarning %}

{% webui %}

## 设置默认超时期

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. 在“Default idle timeout（默认空闲超时）”下，输入所需的时间，然后单击 **Save（保存）**。 时间必须在 5 分钟到 240 分钟（4 小时）之间。 ![选择超时](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## 设置代码空间的超时期限

{% data reusables.cli.cli-learn-more %}

要在创建代码空间时设置超时期限，请将 `idle-timeout` 参数与 `codespace create` 子命令结合使用。 指定时间（以分钟为单位），后跟 `m`。 时间必须在 5 分钟到 240 分钟（4 小时）之间。

```shell
gh codespace create --idle-timeout 90m
```

如果在创建代码空间时未指定超时期限，则将使用默认超时期限。 有关设置默认超时期限的信息，请单击此页面上的“Web browser（Web 浏览器）”选项卡。 您当前无法通过 {% data variables.product.prodname_cli %} 指定默认超时期限。

{% endcli %}

{% vscode %}

## 设置超时期

您可以通过 Web 浏览器在 {% data variables.product.prodname_dotcom_the_website %} 上设置默认超时期限。 或者，如果使用 {% data variables.product.prodname_cli %} 创建代码空间，则可以为该特定代码空间设置超时期限。 有关详细信息，请单击上面的相应选项卡。

{% endvscode %}
