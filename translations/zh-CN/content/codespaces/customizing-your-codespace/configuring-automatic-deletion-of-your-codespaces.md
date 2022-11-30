---
title: 配置 codespace 的自动删除
shortTitle: Configure automatic deletion
intro: 处于非活动状态的 codespace 会自动删除。 你可以选择停止的 codespace 将保留多长时间，最长为 30 天。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5414d2223f490638f27475840a25883e9c353e77
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159488'
---
默认情况下，{% data variables.product.prodname_github_codespaces %} 在停止且保持 30 天的非活动状态后会自动删除。

但是，由于 {% data variables.product.prodname_github_codespaces %} 会产生存储费用，因此，你可能希望通过在 {% data variables.product.prodname_github_codespaces %} 的个人设置中更改默认期限来减少保持期。 有关存储费用的详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”。

{% note %}

注意：无论你是否设置了个人 codespace 保持期，最好养成删除不再需要的 codespace 的习惯。 有关详细信息，请参阅“[删除 codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)”。

{% endnote %}

无论 codespace 是否包含未推送的更改，自动删除都会进行。 若要防止 codespace 的自动删除，只需再次打开此 codespace 即可。 每次连接到 codespace 时保持期都会重置，并且当 codespace 停止时，保留倒计时将重新开始。

如果存储库属于某一组织，此组织管理员可能已为整个组织设置了保持期。 如果此期限小于个人设置中的默认保持期，则组织保持期将应用于为此存储库创建的 codespace。 有关详细信息，请参阅“[限制 codespace 的保持期](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”。

每个 codespace 都有自身的保持期。 因此，你可能拥有具有不同保持期的 codespace。 例如，如果：
* 你创建了一个 codespace，更改了你的默认保持期，然后创建了另一个 codespace。
* 你使用 {% data variables.product.prodname_cli %} 创建了一个 codespace，并指定了一个不同的保持期。
* 你从组织拥有的存储库创建了一个 codespace，该存储库拥有为组织配置的保持期。

{% note %}

注意：保持期是按天指定的。 一天表示一个 24 小时的期限，从停止 codespace 那一天的那一刻起。

{% endnote %}

{% webui %}

## 设置 codespace 的默认保持期

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. 在“默认保持期”下，输入你希望 codespace 在停止后默认将保留的天数。 

   ![选择保持期](/assets/images/help/codespaces/setting-default-retention.png)

   你可以在 `0` 到 `30` 天之间设置默认的保持期。 

   {% warning %}

   警告：将期限设置为 `0` 将导致 codespace 在停止时或由于处于非活动状态而超时时被立即删除。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_github_codespaces %} 的超时时间](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)”。

   {% endwarning %}
 
1. 单击“保存” 。

使用 {% data variables.product.prodname_cli %} 创建 codespace 时，可以重写此默认值。 如果在指定了更短保持期的组织中创建 codespace，则组织级别的值将重写你的个人设置。

如果设置的保持期超过一天，你将在删除的前一天收到电子邮件通知。 

## 检查自动删除之前剩余的时间

可以查看 codespace 是否即将自动删除。 

当处于非活动状态的 codespace 的保持期即将结束时，这将在 {% data variables.product.prodname_dotcom %} 上的 codespace 列表中指明：[https://github.com/codespaces](https://github.com/codespaces)。

![{% data variables.product.prodname_dotcom %} 上的 codespace 列表中的预删除消息](/assets/images/help/codespaces/retention-deletion-message.png)

{% endwebui %}

{% cli %}

## 设置 codespace 的保持期

若要在创建 codespace 时设置 codespace 保持期，请将 `--retention-period` 标志与 `codespace create` 子命令一起使用。 按天数指定期限。 期限必须介于 0 到 30 天之间。

```shell
gh codespace create --retention-period DAYS
```

如果在创建 codespace 时未指定保持期，则将使用默认保持期或组织保持期，具体视哪个保持期的期限较低。 有关设置默认保持期的信息，请单击此页面上的“Web 浏览器”选项卡。 

{% data reusables.cli.cli-learn-more %}

{% endcli %}

{% vscode %}

## 指定保持期

可以通过 Web 浏览器在 {% data variables.product.prodname_dotcom_the_website %} 上设置默认保持期。 或者，如果使用 {% data variables.product.prodname_cli %} 创建 codespace，则可以为该特定 codespace 设置保持期。 有关详细信息，请单击上面相应的选项卡。

## 检查 codespace 是否即将被自动删除

可以在 {% data variables.product.prodname_vscode %} 桌面应用程序中检查 codespace 是否即将自动删除。

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. 从“远程资源管理器”右上角的下拉菜单中选择“{% data variables.product.prodname_github_codespaces %}”（如果尚未选择）。
1. 在“GITHUB CODESPACES”下，将鼠标指针放置在你感兴趣的 codespace 上。 随即将显示一个弹出框，其中显示了有关 codespace 的信息。

   如果 codespace 即将接近保持期的末尾，则会包含一行，此行将告知你 codespace 将何时被删除。

   ![显示了删除前剩余时间的 codespace 信息](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

{% endvscode %}
