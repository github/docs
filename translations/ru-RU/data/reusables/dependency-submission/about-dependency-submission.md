---
ms.openlocfilehash: 23a47438a4b4091ec5034671fa226eff68a08ef6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080482"
---
API отправки зависимостей позволяет отправлять зависимости для проекта. Так вы сможете добавлять зависимости, например разрешаемые при компиляции или сборке программного обеспечения, в функцию графа зависимостей {% data variables.product.prodname_dotcom %}, чтобы создать более полную картину всех зависимостей проекта.

На графе зависимостей отображаются все зависимости, которые вы отправили через этот API, а также те, которые определены в файлах манифеста или блокировки, размещенных в репозитории (например, файл `package-lock.json` в проекте JavaScript). Дополнительные сведения о просмотре графа зависимостей см. в статье [Изучение зависимостей репозитория](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#viewing-the-dependency-graph). 

Отправленные зависимости будут получать {% data variables.product.prodname_dependabot_alerts %} и {% data variables.product.prodname_dependabot_security_updates %} по всем известным уязвимостям. Вы будете получать {% data variables.product.prodname_dependabot_alerts %} только для тех зависимостей, которые относятся к одной из [поддерживаемых экосистем](https://github.com/github/advisory-database#supported-ecosystems) {% data variables.product.prodname_advisory_database %}. Отправленные зависимости не будут отображаться при проверке зависимостей или в аналитических сведениях о зависимостях в вашей организации.
