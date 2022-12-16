---
title: Доступ к консоли управления
intro: '{% data reusables.enterprise_site_admin_settings.about-the-management-console %}'
redirect_from:
  - /enterprise/admin/articles/about-the-management-console
  - /enterprise/admin/articles/management-console-for-emergency-recovery
  - /enterprise/admin/articles/web-based-management-console
  - /enterprise/admin/categories/management-console
  - /enterprise/admin/articles/accessing-the-management-console
  - /enterprise/admin/guides/installation/web-based-management-console
  - /enterprise/admin/installation/accessing-the-management-console
  - /enterprise/admin/configuration/accessing-the-management-console
  - /admin/configuration/accessing-the-management-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Access the management console
ms.openlocfilehash: 60cd45e9e33dfbd037c831b96bed806dddcf6a21
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107128'
---
## Сведения о {% data variables.enterprise.management_console %}

Используйте {% data variables.enterprise.management_console %} для основных административных действий.
- **Начальная настройка**. Пошаговое руководство по начальной настройке при первом запуске {% данных variables.location.product_location %} путем посещения IP-адреса {% данных variables.location.product_location %}в браузере.
- **Настройка политик проверки подлинности для {% данных variables.enterprise.management_console %}**: установите ограничения скорости для попыток входа и длительность блокировки, если кто-то превышает ограничение скорости. 
- **Настройка базовых параметров для экземпляра**. Настройте DNS, имя узла, SSL, проверку подлинности пользователей, электронную почту, службы мониторинга и пересылку журналов на странице "Параметры".
- **Планирование периодов обслуживания**: переключите {% данных variables.location.product_location %} в автономный режим при выполнении обслуживания с помощью {% данных variables.enterprise.management_console %} или административной оболочки.
- **Устранение неполадок**. Создайте пакет поддержки или представление диагностических сведений высокого уровня.
- **Управление лицензиями**.Просмотрите или обновите свою лицензию {% data variables.product.prodname_enterprise %}.

Вы всегда можете получить доступ к данным {% variables.enterprise.management_console %} с помощью IP-адреса {% данных variables.location.product_location %}, даже если экземпляр находится в режиме обслуживания или имеется критический сбой приложения, имя узла или неправильное настройку SSL.

Чтобы получить доступ к {% данных variables.enterprise.management_console %}, необходимо использовать пароль администратора, установленный во время начальной настройки {% данных variables.location.product_location %}. Также необходимо иметь возможность подключаться к узлу виртуальной машины через порт 8443. Если у вас возникли проблемы с открытием {% data variables.enterprise.management_console %}, проверьте конфигурации промежуточных брандмауэров и групп безопасности. 

Хэш паролей {% data variables.enterprise.management_console %} хранится в `/data/user/common/secrets.conf`, и этот файл с основного устройства автоматически синхронизируется с любыми репликами с высоким уровнем доступности. Любое изменение пароля основного экземпляра будет автоматически реплицировано на реплики с высоким уровнем доступности. Дополнительные сведения о высокой доступности см. в разделе [Сведения о конфигурации с высоким уровнем доступности](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration).

## Доступ к {% data variables.enterprise.management_console %} в качестве администратора сайта

При первом доступе к {% data variables.enterprise.management_console %} в качестве администратора сайта необходимо отправить файл лицензии {% data variables.product.prodname_enterprise %} для проверки подлинности в приложении. Дополнительные сведения см. в разделе [Управление лицензией для {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise).

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}

## Доступ к {% data variables.enterprise.management_console %} в качестве пользователя, не прошедшего проверку подлинности

1. Перейдите по этому URL-адресу в браузере, заменив `hostname` фактическим именем узла или IP-адресом {% data variables.product.prodname_ghe_server %}:
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

## Разблокировка {% data variables.enterprise.management_console %} после неудачных попыток входа

{% данных variables.enterprise.management_console %} блокируется после {% ifversion enterprise-authentication-rate-limits %}количество неудачных попыток входа, настроенных политиками проверки подлинности. Дополнительные сведения см. в разделе "[Настройка ограничений скорости политики проверки подлинности](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits)". {% else %}десять неудачных попыток входа выполняются в течение десяти минут. Прежде чем попытаться войти еще раз, необходимо дождаться автоматической разблокировки экрана входа. Экран входа автоматически разблокируется немедленно, если в предыдущем десятиминутном периоде было менее десяти неудачных попыток входа. Счетчик сбрасывается после успешного входа. {% endif %}

{% данных reusables.enterprise_management_console.unlocking-management-console-with-shell %}

## Устранение неполадок с неудачными подключениями к {% data variables.enterprise.management_console %}

Если вы не можете подключиться к {% данных variables.enterprise.management_console %} на {% данных variables.location.product_location %}, ознакомьтесь со следующими сведениями, чтобы устранить проблему.

### Ошибка: "Срок действия сеанса истек" для подключений через подсистему балансировки нагрузки

Если доступ к {% данных variables.location.product_location %} выполняется с помощью подсистемы балансировки нагрузки и подключений к {% данных variables.enterprise.management_console %} завершается ошибкой с сообщением об истечении срока действия сеанса, может потребоваться перенастроить подсистему балансировки нагрузки. Дополнительные сведения см. в статье [Использование {% data variables.product.product_name %} с подсистемой балансировки нагрузки](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console).
