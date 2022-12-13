---
title: Отображение IP-адресов в журнале аудита для предприятия
intro: Исходный IP-адрес для событий можно отобразить в журнале аудита предприятия.
shortTitle: IP addresses in audit log
permissions: Enterprise owners can display IP addresses in the audit log for an enterprise.
versions:
  feature: enterprise-audit-log-ip-addresses
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Networking
  - Security
ms.openlocfilehash: 425cef8193f0ddeeb6c1ac46bb90b36711310c74
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099271'
---
## Сведения об отображении IP-адресов в журнале аудита

По умолчанию в {% data variables.product.product_name %} не отображается исходный IP-адрес для событий в журнале аудита предприятия. При необходимости, чтобы обеспечить соответствие требованиям и реагировать на угрозы, можно отобразить полный IP-адрес, связанный с субъектом, ответственным за каждое событие. Субъекты обычно являются пользователями, но также могут быть приложениями или интеграциями.

Вы обязаны соблюдать любые юридические обязательства в отношении просмотра или хранения IP-адресов, отображаемых в журнале аудита предприятия.

Если вы решили отобразить IP-адреса, они отображаются только в журнале аудита предприятия. IP-адреса не будут отображаться для событий в журналах аудита для отдельных организаций вашего предприятия. Дополнительные сведения о журналах аудита организации см. в разделе [Просмотр журнала аудита для вашей организации](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization).

IP-адреса можно отображать в журнале аудита независимо от того, какой метод проверки подлинности используется для вашего предприятия, на {% данных variables.location.product_location %}. Дополнительные сведения см. в разделе [Сведения о проверке подлинности для предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).

Когда кто-либо создает учетную запись на {% данных variables.location.product_location %}, пользователь соглашается с коллекцией {% данных variables.product.company_short %}сбора основных сведений о подключениях к службам {% данных variables.product.company_short %}, включая исходный IP-адрес. Дополнительные сведения см. в [заявлении о конфиденциальности GitHub](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#usage-information).

## События, в которых отображаются IP-адреса в журнале аудита

В {% data variables.product.product_name %} отображается IP-адрес в журнале аудита, когда сотрудник предприятия взаимодействует с ресурсом, принадлежащим предприятию или организации в предприятии. Например, вы увидите IP-адрес для событий аудита, включающие внутренний или частный репозиторий, принадлежащий организации в предприятии, или ресурсы, связанные с этими репозиториями, такие как проблема, запрос на вытягивание, действие или проект.

Если участники корпоративного доступа {% к данным variables.location.product_location %} с личными учетными записями, которыми они управляют, так как вы не используете {% данных variables.product.prodname_emus %}, {% данных variables.product.product_name %} не отображает событие или IP-адрес в журнале аудита для следующих действий.
  
- Проверка подлинности в {% данных variables.location.product_location %}
- взаимодействие с ресурсом, принадлежащим личной учетной записи, включая репозиторий, gist или проект;
- взаимодействие с общедоступным репозиторием, принадлежащим организации вашего предприятия.

## Включение отображения IP-адресов в журнале аудита

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. В разделе "Журнал аудита" щелкните **Раскрытие исходного IP-адреса**.

   ![Снимок экрана: вкладка "Раскрытие исходного IP-адреса"](/assets/images/help/enterprises/audit-log-source-ip-disclosure-tab.png)
1. В разделе "Раскрывать IP-адреса субъектов в журналах аудита" выберите **Включить раскрытие исходных IP-адресов**.

   ![Снимок экрана: флажок для включения отображения IP-адресов в журналах аудита](/assets/images/help/enterprises/audit-log-enable-source-ip-disclosure-checkbox.png)
1. Выберите команду **Сохранить**.

После включения функции можно получить доступ к журналу аудита для просмотра событий, включающих IP-адреса. Дополнительные сведения см. в разделе [Доступ к журналу аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise).
