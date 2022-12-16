---
title: Управление оповещениями о проверке секретов
intro: 'Можно просматривать и закрывать оповещения о секретах, записанных в ваш репозиторий.'
permissions: People with admin access to a repository can view and dismiss alerts.
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Manage secret alerts
ms.openlocfilehash: f7c92b975d5bf8646b25d817564bff32ffc94e1c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158672'
---
{% data reusables.secret-scanning.beta %}

## Управление оповещениями {% data variables.product.prodname_secret_scanning %}

{% ifversion ghec %} {% note %}

**Примечание.** Оповещения создаются только для репозиториев с включенным {% data variables.product.prodname_secret_scanning_GHAS %}. Секреты, найденные в общедоступных репозиториях с помощью бесплатной службы {% data variables.product.prodname_secret_scanning_partner%}, передаются непосредственно партнеру без создания оповещения.

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. На левой боковой панели нажмите **Оповещения о проверке секретов**.
   {% ifversion ghes or ghec %} ![" Вкладка](/assets/images/help/repository/sidebar-secrets.png) "Оповещения о сканировании секретов" {% endif %} {% ifversion ghae %} ![вкладка](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png) "Оповещения о сканировании секретов" {% endif %}
1. В разделе "Проверка секретов" щелкните оповещение, которое вы хотите просмотреть.
   {% ifversion ghec %} ![ Список оповещений от сканирования](/assets/images/help/repository/secret-scanning-click-alert.png) секретов {% endif %} {% ifversion ghes %} ![Список оповещений от сканирования](/assets/images/help/repository/secret-scanning-click-alert-ghe.png) секретов {% endif %} {% ifversion ghae %} ![Список оповещений от сканирования](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png) секретов {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. Чтобы закрыть оповещение, выберите раскрывающееся меню "Закрыть оповещение" и выберите причину устранения оповещения.

   ![Снимок экрана: раскрывающееся меню для закрытия оповещения о проверке секретов](/assets/images/help/repository/secret-scanning-dismiss-alert.png){% else %}
1. Чтобы закрыть оповещение, выберите раскрывающееся меню "Пометить как" и выберите причину устранения оповещения. 
  
   ![Снимок экрана: раскрывающееся меню для разрешения оповещения при проверке секретов](/assets/images/enterprise/3.2/repository/secret-scanning-resolve-alert-ghe.png)

   {% endif %} {% ifversion secret-scanning-dismissal-comment %}
1. При необходимости добавьте комментарий о закрытии. Комментарий о закрытии будет добавлен на временную шкалу оповещений, и он может использоваться в качестве обоснования для аудита или отчетов. На временной шкале оповещений можно просмотреть журнал всех оповещений и примечаний об увольнении. Вы также можете получить или задать комментарий с помощью API {% data variables.product.prodname_secret_scanning_caps %}. Комментарий содержится в поле `resolution_comment`. Дополнительные сведения см. в разделе ["{% data variables.product.prodname_secret_scanning_caps %}](/rest/secret-scanning#update-a-secret-scanning-alert)" документации по REST API.

  ![Снимок экрана, показывающий, как закрыть оповещение с помощью раскрывающегося списка "Закрыть оповещение" с возможностью добавления комментария к закрытию](/assets/images/help/repository/secret-scanning-dismissal-comment.png)

1. Щелкните **Закрыть оповещение**.
{% endif %}

## Защита скомпрометированных секретов

После фиксации секрета в репозитории следует считать секрет скомпрометированным. {% data variables.product.prodname_dotcom %} рекомендует следующие действия для скомпрометированных секретов:

- Для скомпрометированного {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %} удалите скомпрометированный маркер, создайте новый маркер и обновите все службы, использующие старый маркер. Дополнительные сведения см. в разделе [Создание {% data variables.product.pat_generic %} для командной строки](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).
{%- ifversion token-audit-log %}
  - {% ifversion ghec %} Если ваша организация принадлежит корпоративной учетной записи, определите{% else %}Определите{% endif %} все действия, выполненные скомпрометированный маркер в ресурсах предприятия. Дополнительные сведения см. в разделе [Определение событий журнала аудита, выполняемых маркером доступа](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token).
{%- endif %}
- Для всех остальных секретов сначала убедитесь, что секрет, зафиксированный в {% data variables.product.product_name %}, является допустимым. Если это так, создайте новый секрет, обновите все службы, использующие старый секрет, а затем удалите старый секрет.

{% ifversion ghec %} {% note %}

**Примечание.** Если секрет обнаружен в общедоступном репозитории на {% data variables.product.prodname_dotcom_the_website %} и он также соответствует шаблону партнера, создается оповещение, и потенциальный секрет передается поставщику службы. Дополнительные сведения о шаблонах партнеров см. в разделе [Поддерживаемые секреты для шаблонов партнеров](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns).

{% endnote %} {% endif %}

## Настройка уведомлений для оповещений {% data variables.product.prodname_secret_scanning %}

При обнаружении нового секрета {% data variables.product.product_name %} уведомляет всех пользователей, имеющих доступ к оповещениям системы безопасности для репозитория, в соответствии с их настройками уведомлений. Вы получите уведомление по электронной почте, если следите за репозиторием, включили уведомления для оповещений системы безопасности или всех действий в репозитории, а также если являетесь автором фиксации, содержащей секрет, и не пропускаете этот репозиторий.

Дополнительные сведения см. в разделах [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) и [Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).
