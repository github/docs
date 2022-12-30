---
ms.openlocfilehash: 432a33a54f6568b889f8089173f3787a960410fe
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763743"
---
{% ifversion ghes < 3.5 %}

В некоторых случаях клиенты GitHub Advanced Security, обновившиеся до GitHub Enterprise Server 3.5 или более поздней версии, могут заметить, что оповещения о сканировании секретов отсутствуют в веб-интерфейсе и REST API. Чтобы оповещения оставались видимыми, не пропускайте версию 3.4 при обновлении с более ранней версии до версии 3.5 и выше. Проблема исправлена в выпусках исправлений [3.5.5](/enterprise-server@3.5/admin/release-notes#3.5.5) и [3.6.1](/enterprise-server@3.6/admin/release-notes#3.6.1).

Чтобы спланировать обновление через версию 3.4, см. статью [Помощник по обновлению](https://support.github.com/enterprise/server-upgrade). [Обновлено: 01.09.2022]

{% elsif ghes = 3.5 or ghes = 3.6 %}

В некоторых случаях клиенты GitHub Advanced Security, обновившиеся до GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }} или более поздней версии, могут заметить, что оповещения о сканировании секретов отсутствуют в веб-интерфейсе и REST API. Чтобы оповещения оставались видимыми, не пропускайте версию 3.4 при обновлении до последнего выпуска. Чтобы спланировать обновление через версию 3.4, см. статью [Помощник по обновлению](https://support.github.com/enterprise/server-upgrade).

- Чтобы отобразить отсутствующие оповещения для всех репозиториев, принадлежащих организации, владельцы организации могут перейти к параметрам **Анализ и безопасность кода**, а затем щелкнуть **Включить все** для проверки секретов. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories).
- Чтобы отобразить отсутствующие оповещения для отдельного репозитория, пользователи с правами администратора на доступ к репозиторию могут отключить, а затем включить проверку секретов для репозитория. Дополнительные сведения см. в статье [Управление параметрами безопасности и анализа для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).

Проблема исправлена в выпуске версии {% ifversion ghes = 3.5 %}[3.5.5](/admin/release-notes#3.5.5){% elsif ghes = 3.6 %}[3.6.1](/admin/release-notes#3.6.1){% endif %}. [Обновлено: 01.09.2022]

{% endif %}
