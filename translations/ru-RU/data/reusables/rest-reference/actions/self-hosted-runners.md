---
ms.openlocfilehash: 7c3cd62c7bedd6544a40d4cedfb2c92e82dbafbe
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 04/07/2022
ms.locfileid: "141520102"
---
## <a name="self-hosted-runners"></a>Локальные средства выполнения тестов

API локальных средств выполнения позволяет регистрировать, просматривать и удалять локальные средства выполнения. {% data reusables.actions.about-self-hosted-runners %} Дополнительные сведения см. в разделе [Размещение собственных средств выполнения](/actions/hosting-your-own-runners).

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} должны иметь разрешение `administration` для репозиториев и разрешение `organization_self_hosted_runners` для организаций. Чтобы организации могли использовать этот API, пользователи, прошедшие проверку подлинности, должны иметь доступ администратора к репозиториям или организациям либо области `manage_runners:enterprise`.