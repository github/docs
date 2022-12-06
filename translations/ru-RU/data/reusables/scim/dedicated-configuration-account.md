---
ms.openlocfilehash: 49888e7031e048c77d405b1e65d9e06510e3c789
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063413"
---
Чтобы использовать SCIM в организации, необходимо применять стороннее приложение {% data variables.product.prodname_oauth_app %}. Приложение {% data variables.product.prodname_oauth_app %} должно быть авторизовано и впоследствии действует от имени конкретного пользователя {% data variables.product.prodname_dotcom %}. Если пользователь, который в последний раз авторизовал {% data variables.product.prodname_oauth_app %}, выходит или удаляется из организации, SCIM перестанет работать. Чтобы избежать этой проблемы, рекомендуется создать выделенную учетную запись пользователя для настройки SCIM. Эта учетная запись пользователя должна быть владельцем организации и будет использовать лицензию.
