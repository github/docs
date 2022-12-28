---
ms.openlocfilehash: af9c381d0012d84051d99d533cd8ceb56842bb4c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109936"
---
{% data variables.product.prodname_actions %} no {% ifversion ghec or fpt %}se {% endif %}requiere para que {% data variables.product.prodname_dependabot_version_updates %} y {% data variables.product.prodname_dependabot_security_updates %} se ejecuten en {% data variables.product.product_name %}.{% ifversion fpt or ghec %} Pero las solicitudes de incorporación de cambios que abre {% data variables.product.prodname_dependabot %} pueden desencadenar flujos de trabajo que ejecutan acciones. Para obtener más información, consulta "[Automatización de {% data variables.product.prodname_dependabot %} con {% data variables.product.prodname_actions %}](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)".{% elsif ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %} A fin de obtener más información, consulta "[Habilitación de {% data variables.product.prodname_dependabot %} para tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".{% endif %}
