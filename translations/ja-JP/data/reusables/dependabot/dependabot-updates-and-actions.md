---
ms.openlocfilehash: af9c381d0012d84051d99d533cd8ceb56842bb4c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109171"
---
{% data variables.product.prodname_actions %} は、{% data variables.product.product_name %} で {% data variables.product.prodname_dependabot_version_updates %}と {% data variables.product.prodname_dependabot_security_updates %}を実行するために必要です{% ifversion ghec or fpt %}必要ありません{% endif %}。{% ifversion fpt or ghec %}しかし、{% data variables.product.prodname_dependabot %} によって開かれた pul request では、アクションを実行するワークフローをトリガーできます。 詳しくは、「[{% data variables.product.prodname_actions %} による {% data variables.product.prodname_dependabot %} の自動化](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)」を参照してください。{% elsif ghes %}{% data reusables.dependabot.enabling-actions-for-ghes %}詳しくは、「[Enterprise に対する {% data variables.product.prodname_dependabot %} の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。{% endif %}
