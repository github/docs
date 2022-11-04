---
ms.openlocfilehash: af9c381d0012d84051d99d533cd8ceb56842bb4c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107890"
---
O {% data variables.product.prodname_actions %} não {% ifversion ghec or fpt %}é {% endif %}necessário para que {% data variables.product.prodname_dependabot_version_updates %} e {% data variables.product.prodname_dependabot_security_updates %} sejam executadas no {% data variables.product.product_name %}.{% ifversion fpt or ghec %} No entanto, as solicitações de pull abertas pelo {% data variables.product.prodname_dependabot %} podem disparar fluxos de trabalho que executam ações. Para obter mais informações, confira "[Como automatizar o {% data variables.product.prodname_dependabot %} com {% data variables.product.prodname_actions %}](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)". {% elsif ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %} Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)". {% endif %}
