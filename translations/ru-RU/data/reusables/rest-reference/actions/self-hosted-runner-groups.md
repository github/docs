---
ms.openlocfilehash: 25521a8841a6e178bd9cb3c6ab569685f968c520
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 04/07/2022
ms.locfileid: "141520097"
---
## <a name="self-hosted-runner-groups"></a>Группы локального средства выполнения

API групп локальных средств выполнения позволяет управлять группами локальных средств выполнения. Дополнительные сведения см. в разделе [Управление доступом к средствам выполнения тестов локального размещения с помощью групп](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} должны иметь разрешение `administration` для репозиториев или разрешение `organization_self_hosted_runners` для организаций. Чтобы организации могли использовать этот API, пользователи, прошедшие проверку подлинности, должны иметь доступ администратора к репозиториям или организациям либо области `manage_runners:enterprise`.