---
title: Олицетворение пользователя
intro: 'Вы можете олицетворять пользователей и выполнять действия от их имени, чтобы устранить неполадки, выполнить разблокировку или в силу других законных причин.'
permissions: Enterprise owners can impersonate users within their enterprise.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Impersonate a user
ms.openlocfilehash: df0513c3ca2931378e656f228939540dd5ea5816
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109288'
---
## Сведения об олицетворении пользователя

Если необходимо временно взять на себя учетную запись пользователя, например когда нужно устранить неполадки с проблемой пользователя или когда пользователь недоступен, а требуется срочное действие, можно запустить сеанс олицетворения для выполнения действий от его имени.

Для каждого сеанса олицетворения необходимо указать причину. Сеанс ограничен одним часом, и у вас будет тот же доступ, что и у пользователя, которого вы олицетворяете.

Действия, выполняемые во время сеанса олицетворения, записываются как события в журнал аудита предприятия, а также в журнал безопасности олицетворенного пользователя. Олицетворенному пользователю при запуске сеанса олицетворения отправляется уведомление по электронной почте. Дополнительные сведения см. в разделах [События журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise) и [Просмотр журнала безопасности](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log).

## Олицетворение пользователя

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
4. В левом верхнем углу страницы щелкните **Сведения о пользователе**.

   ![Сведения о пользователе](/assets/images/enterprise/stafftools/user-info.png)
5. В разделе "Зона опасности" щелкните **Войти на GitHub как @username**

   ![Олицетворение пользователя](/assets/images/enterprise/stafftools/impersonate.png)
6. Выберите причину из раскрывающегося списка. Если выбрать **Другое**, необходимо предоставить дополнительный контекст в разделе **Заметки**. Щелкните **Начать олицетворение**, чтобы начать сеанс.

   ![Причина олицетворения](/assets/images/enterprise/stafftools/impersonation-reason.png)
7. Когда вы будете готовы завершить сеанс олицетворения, щелкните **Вернуться к обычной жизни в качестве имя_пользователя** в верхней части страницы.

   ![Закончить олицетворение](/assets/images/enterprise/stafftools/end-impersonation.png)
