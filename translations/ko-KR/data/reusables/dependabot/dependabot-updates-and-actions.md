---
ms.openlocfilehash: af9c381d0012d84051d99d533cd8ceb56842bb4c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109170"
---
{% data variables.product.prodname_actions %}은 {% data variables.product.prodname_dependabot_version_updates %}이고 {% data variables.product.prodname_dependabot_security_updates %}이(가) {% data variables.product.product_name %}에서 실행하려면 {% endif %}가 아닌 {% ifversion ghec 또는 fpt %}입니다. {% ifversion fpt or ghec %} 그러나 {% data variables.product.prodname_dependabot %}에서 연 끌어오기 요청은 작업을 실행하는 워크플로를 트리거할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_dependabot %}을(를) 사용하여 {% data variables.product.prodname_actions %} 자동화"를 참조하세요](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions). {% elsif ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %} 자세한 내용은 "[엔터프라이즈에 {% data variables.product.prodname_dependabot %} 사용"을 참조하세요](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise). {% endif %}
