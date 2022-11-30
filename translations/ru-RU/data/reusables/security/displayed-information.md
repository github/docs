---
ms.openlocfilehash: b57bbd1a709b4cae3b93607d1cd03c1a4a31be15
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/07/2022
ms.locfileid: "148135690"
---
При включении одной или нескольких функций безопасности и анализа для существующих репозиториев результаты появятся на {% data variables.product.prodname_dotcom %} в течение нескольких минут:

- Все существующие репозитории будут иметь выбранную конфигурацию.
- Новые репозитории будут следовать выбранной конфигурации, если вы установили флажок для новых репозиториев. {% ifversion GH-advisory-db-supports-malware %}
- Мы используем разрешения для проверки файлов манифеста с целью применения соответствующих служб.
- Если этот параметр включен, в графе зависимостей отобразятся сведения о зависимостях.
- Если этот параметр включен, {% data variables.product.prodname_dotcom %} создаст {% data variables.product.prodname_dependabot_alerts %} для уязвимых зависимостей или вредоносных программ. {% endif %} {% ifversion fpt or ghec or ghes %}
- Если этот параметр включен, обновления для системы безопасности {% data variables.product.prodname_dependabot %} будут создавать запросы на вытягивание для обновления уязвимых зависимостей при активации {% data variables.product.prodname_dependabot_alerts %}.{% endif %}
