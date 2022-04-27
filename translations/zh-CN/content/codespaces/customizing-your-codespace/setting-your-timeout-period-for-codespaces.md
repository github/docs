---
title: 设置 Codespaces 超时时间
intro: '您可以在个人设置页面中设置 {% data variables.product.prodname_codespaces %} 的默认超时。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
shortTitle: 设置超时
---

代码空间将在一段时间不活动后停止运行。 您可以指定此超时期限的长度。 更新后的设置将应用于任何新创建的代码空间。

Some organizations may have a maximum idle timeout policy. If an organization policy sets a maximum timeout which is less than the default timeout you have set, the organization's timeout will be used instead of your setting, and you will be notified of this after the codespace is created. For more information, see "[Restricting the idle timeout period](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)."

{% warning %}

**警告**：代码空间按分钟计费。 如果您未主动使用代码空间，但代码空间尚未超时，则仍需为代码空间运行的时间付费。 更多信息请参阅“[关于代码空间的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)”。

{% endwarning %}

{% webui %}

## 设置默认超时

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. 在“Default idle timeout（默认空闲超时）”下，输入所需的时间，然后单击 **Save（保存）**。 时间必须在 5 分钟到 240 分钟（4 小时）之间。 ![选择超时](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## 设置超时期限

{% data reusables.cli.cli-learn-more %}

要在创建代码空间时设置超时期限，请将 `idle-timeout` 参数与 `codespace create` 子命令结合使用。 指定时间（以分钟为单位），后跟 `m`。 时间必须在 5 分钟到 240 分钟（4 小时）之间。

```shell
gh codespace create --idle-timeout 90m
```

如果在创建代码空间时未指定超时期限，则将使用默认超时期限。 有关设置默认超时期限的信息，请单击此页面上的“Web browser（Web 浏览器）”选项卡。 您当前无法通过 {% data variables.product.prodname_cli %} 指定默认超时期限。

{% endcli %}
