---
ms.openlocfilehash: 9b1f61261d2e59fe30703a3bebfdaed7a25667e6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145084864"
---
* `{owner}/{repo}/.github/workflows/{filename}@{ref}`{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %} 用于公共{% ifversion ghes or ghec or ghae %}或内部{% endif %}存储库中的可重用工作流。
* `./.github/workflows/{filename}` 用于同一存储库中的可重用工作流。{% endif %}

`{ref}` 可以是 SHA、发布标记或分支名称。 对于稳定性和安全性来说，使用提交 SHA 最稳妥。 有关详细信息，请参阅“[GitHub Actions 的安全强化](/actions/learn-github-actions/security-hardening-for-github-actions#reusing-third-party-workflows)”。 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %} 如果使用第二个语法选项（不带 `{owner}/{repo}` 和 `@{ref}`），则调用的工作流来自与调用方工作流相同的提交。{% endif %}
