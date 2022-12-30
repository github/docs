---
ms.openlocfilehash: 74a6541cfbd0ad87d45a316cb46da45c227c9925
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145138745"
---
При обновлении системы безопасности или версий некоторые экосистемы должны иметь возможность разрешить все зависимости от источника, чтобы убедиться, что обновления успешно выполнены. Если файлы манифеста или блокировки содержат какие-либо частные зависимости, {% data variables.product.prodname_dependabot %} должен иметь доступ к расположению, в котором размещаются эти зависимости. Владельцы организации могут предоставлять {% data variables.product.prodname_dependabot %} доступ к частным репозиториям, содержащим зависимости для проекта, в той же организации. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies). Доступ к частным реестрам можно настроить в файле конфигурации репозитория _dependabot.yml_. Дополнительные сведения см. в разделе [Параметры конфигурации для файла dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries).
