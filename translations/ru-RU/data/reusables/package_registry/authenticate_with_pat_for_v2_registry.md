---
ms.openlocfilehash: 902af6bdbe3c48fe8b5930bdf1041151f343b60b
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: "148113868"
---
Если рабочий процесс использует {% data variables.product.pat_generic %} для проверки подлинности в реестре, мы настоятельно рекомендуем обновить рабочий процесс для использования `GITHUB_TOKEN`.

{% ifversion fpt or ghec %} Инструкции по обновлению рабочих процессов, которые проходят проверку подлинности в реестре с помощью {% data variables.product.pat_generic %}, см. в разделе [Обновление рабочего процесса, который обращается к реестру с помощью {% data variables.product.pat_generic %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token). {% endif %}

Дополнительные сведения о `GITHUB_TOKEN` см. в разделе [Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow).

Дополнительные сведения о рекомендациях по использованию реестра в действиях см. в разделе Защита [безопасности для GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access).
