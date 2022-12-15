---
title: 设置 Codespaces 超时时间
shortTitle: Set the timeout
intro: 您可以在个人设置页面中设置 {% data variables.product.prodname_codespaces %} 的默认超时。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
type: how_to
ms.openlocfilehash: 3a4e009b5494b96e6daa6736a441a5fba9594857
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064416"
---
代码空间将在一段时间不活动后停止运行。 您可以指定此超时期限的长度。 更新后的设置将应用于任何新创建的代码空间。

某些组织可能设有最大空闲超时策略。 如果组织策略设置的最大超时时间少于你设置的默认超时时间，将使用组织的超时时间而不是你设置的超时时间，你将在 codespace 创建后收到此通知。 有关详细信息，请参阅“[限制空闲超时期限](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)”。

{% warning %}

**警告**：Codespaces 按分钟计费。 如果您未主动使用代码空间，但代码空间尚未超时，则仍需为代码空间运行的时间付费。 有关详细信息，请参阅“[关于 Codespaces 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)”。

{% endwarning %}

{% webui %}

## <a name="setting-your-default-timeout-period"></a>设置默认超时期限

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. 在“默认空闲超时”下，输入所需时间，然后单击“保存”。 时间必须在 5 分钟到 240 分钟（4 小时）之间。
   ![选择超时](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## <a name="setting-the-timeout-period-for-a-codespace"></a>设置 codespace 的超时期限

{% data reusables.cli.cli-learn-more %}

若要设置创建代码空间时的超时期限，请将 `idle-timeout` 参数与 `codespace create` 子命令一起使用。 指定以分钟为单位的时间，后跟 `m`。 时间必须在 5 分钟到 240 分钟（4 小时）之间。

```shell
gh codespace create --idle-timeout 90m
```

如果在创建代码空间时未指定超时期限，则将使用默认超时期限。 有关设置默认超时期限的信息，请单击此页面上的“Web browser（Web 浏览器）”选项卡。 您当前无法通过 {% data variables.product.prodname_cli %} 指定默认超时期限。

{% endcli %}

{% vscode %}

## <a name="setting-a-timeout-period"></a>设置超时期限

可以通过 Web 浏览器在 {% data variables.product.prodname_dotcom_the_website %} 上设置默认超时期限。 或者，如果使用 {% data variables.product.prodname_cli %} 创建 codespace，则可以为该特定 codespace 设置超时期限。 有关详细信息，请单击上面相应的选项卡。

{% endvscode %}
