---
ms.openlocfilehash: 4cf4347384a6be2cadb240a15bc78efea0097799
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192756"
---
Некоторые реестры {% data variables.product.prodname_registry %} поддерживают детализированные разрешения. Это означает, что вы можете разрешить пакеты принадлежать пользователю или организации или связываться с репозиторием. Список реестров, поддерживающих детализированные разрешения, см. в разделе [Сведения о разрешениях для {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).

Если для реестров, поддерживающих детализированные разрешения, если рабочий процесс использует {% data variables.product.pat_generic %} для проверки подлинности в реестре, настоятельно рекомендуется обновить рабочий процесс, чтобы использовать `GITHUB_TOKEN`.

Инструкции по обновлению рабочих процессов, которые проходят проверку подлинности в реестре с помощью {% data variables.product.pat_generic %}, см. в разделе [Обновление рабочего процесса, который обращается к реестру с помощью {% data variables.product.pat_generic %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token).

Дополнительные сведения о `GITHUB_TOKEN` см. в разделе [Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow).

Дополнительные сведения о рекомендациях по использованию реестра в действиях см. в разделе Усиление [безопасности для GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access).
