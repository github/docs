---
ms.openlocfilehash: b189db919701cb53e317e1d7852528ab0bb79b79
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098374"
---
{% данных reusables.package_registry.packages-classic-pat-only %}

Вам нужен маркер доступа для публикации, установки и удаления частных, внутренних и общедоступных пакетов.

Для проверки подлинности в {% данных variables.product.prodname_registry %} или API {% ifversion fpt или ghec %}{% variables.product.pat_v1 данных variables.product.prodname_dotcom %}{% остальных %}{% данных %}{% variables.product.product_name %}{%endif %}. При создании {% данных variables.product.pat_v1 %}можно назначить маркер различным областям в зависимости от ваших потребностей. Дополнительные сведения о областях, связанных с пакетами для {% данных variables.product.pat_v1 %}, см. в разделе "[Сведения о разрешениях для пакетов GitHub](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)".

Для проверки подлинности в реестре {% data variables.product.prodname_registry %} в рабочем процессе {% data variables.product.prodname_actions %} можно использовать следующее:
- `GITHUB_TOKEN` для публикации пакетов, связанных с репозиторием рабочих процессов.
- значение {% данных variables.product.pat_v1 %} с по крайней мере `packages:read` областью для установки пакетов, связанных с другими частными репозиториями (которые `GITHUB_TOKEN` не могут получить доступ).
