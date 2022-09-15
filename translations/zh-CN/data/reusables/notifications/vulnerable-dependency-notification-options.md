---
ms.openlocfilehash: 5120f840aab87ca243eed66c5bb6256e80aefeea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064176"
---
{% ifversion fpt or ghec %}默认情况下，你将收到通知：{% endif %}{% ifversion ghes or ghae %}默认情况下，如果企业所有者在实例上已配置通知电子邮件，你将收到 {% data variables.product.prodname_dependabot_alerts %}：{% endif %}

- 通过电子邮件，在为存储库启用 {% data variables.product.prodname_dependabot %} 时，当有新的清单文件提交到存储库，以及当发现具有关键或高严重性的新漏洞时，将发送一封电子邮件（“每次找到漏洞时发送电子邮件”选项）。
- 在用户界面中，如果存在任何不安全的依赖项，则会在存储库的文件和代码视图中显示一条警告（“UI 警报”选项）
- 在命令行上，当你推送到具有任何不安全的依赖项的存储库时，警告将显示为回叫（“命令行”选项）。
- 在你的收件箱中，作为 Web 通知。 当为存储库启用 {% data variables.product.prodname_dependabot %}、将新的清单文件提交到存储库以及发现具有极高或高严重性的新漏洞时，将发送一条 Web 通知（“Web”选项）。{% ifversion not ghae %}
- 在 {% data variables.product.prodname_mobile %} 上，作为 web 通知。 有关详细信息，请参阅“[使用 GitHub Mobile 启用推送通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)。”{% endif %}

{% note %}

注意：电子邮件和 web{% ifversion not ghae %}/{% data variables.product.prodname_mobile %}{% endif %} 通知是：

- 按存储库：在存储库中启用 {% data variables.product.prodname_dependabot %} 时，或者当新的清单文件提交到存储库时。

- 按组织：当发现新的漏洞时。

{% endnote %}

可以自定义有关 {% data variables.product.prodname_dependabot_alerts %} 的通知方式。 例如，可以使用“以电子邮件发送漏洞摘要”和“每周安全性电子邮件摘要”选项通过电子邮件接收最多 10 个存储库的每周警报摘要 。
