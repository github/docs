---
ms.openlocfilehash: 0957d7c909250bfccb51681eac05e3f3196bb6d5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145122003"
---
{% ifversion fpt or ghec or ghes > 3.4 %}

Чтобы пройти проверку подлинности в {% data variables.product.prodname_container_registry %} в рабочем процессе {% data variables.product.prodname_actions %}, используйте `GITHUB_TOKEN` для обеспечения оптимальной безопасности и оптимального удобства работы. Если рабочий процесс использует личный маркер доступа (PAT) для проверки подлинности в `{% data reusables.package_registry.container-registry-hostname %}`, настоятельно рекомендуется обновить рабочий процесс для использования `GITHUB_TOKEN`.

{% ifversion fpt or ghec %}Инструкции по обновлению рабочих процессов, проходящих проверку подлинности в `{% data reusables.package_registry.container-registry-hostname %}` с использованием личного маркера доступа, см. в разделе [Обновление рабочего процесса, который обращается к `ghcr.io`](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio).{% endif %}

Дополнительные сведения о `GITHUB_TOKEN` см. в разделе [Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow).

Если вы используете {% data variables.product.prodname_container_registry %} в действиях, следуйте нашим рекомендациям по обеспечению безопасности в разделе [Усиление безопасности для GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access).

{% endif %}
