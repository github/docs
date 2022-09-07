---
ms.openlocfilehash: 6d101895af1ae0e202ebfb49119c83a14682de09
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145087224"
---
{% ifversion fpt or ghec %} {% note %}

注意：{% data variables.product.prodname_dependabot %} 拉取请求触发的工作流运行就像是来自存储库分支一样，因此使用只读 `GITHUB_TOKEN`。 这些工作流程运行无法访问任何密钥。 有关确保这些工作流安全的策略，请参阅[“确保 GitHub Actions 和工作流安全：阻止 pwn 请求”](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)"。

{% endnote %} {% endif %}
