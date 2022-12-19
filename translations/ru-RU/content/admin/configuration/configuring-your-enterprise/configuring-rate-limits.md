---
title: Настройка ограничений скорости
intro: 'Для {% data variables.product.prodname_ghe_server %} можно задать ограничения скорости с помощью {% data variables.enterprise.management_console %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-rate-limits
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
ms.openlocfilehash: 2a90093f833639fa247acc7292d9897728043005
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107552'
---
## Включение ограничений скорости для {% data variables.product.prodname_enterprise_api %}

Включение ограничений скорости для {% data variables.product.prodname_enterprise_api %} может предотвратить чрезмерное использование ресурсов отдельными пользователями или пользователями без проверки подлинности. Дополнительные сведения см. в разделе [Ресурсы в REST API](/rest/overview/resources-in-the-rest-api#rate-limiting).

{% ifversion ghes %} Список пользователей можно исключить из ограничений скорости API с помощью служебной программы `ghe-config` в административной оболочке. Дополнительные сведения см. в статье "[Программы командной строки](/enterprise/admin/configuration/command-line-utilities#ghe-config)".
{% endif %}

{% note %}

**Примечание.** В {% data variables.enterprise.management_console %} указан период времени (в минуту или час) для каждого ограничения скорости.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. В разделе "Ограничение скорости" выберите **Включить ограничение скорости API HTTP**.
![Флажок для включения ограничения скорости API](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. Введите ограничения для запросов, прошедших и не прошедших проверку подлинности для каждого API, или примите предварительно заполненные ограничения по умолчанию.
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion enterprise-authentication-rate-limits %}
## Настройка ограничений скорости проверки подлинности в {% data variables.enterprise.management_console %}

Вы можете настроить ограничения времени блокировки и попыток входа для {% data variables.enterprise.management_console %}. Если пользователь превысит ограничение на попытки входа, {% data variables.enterprise.management_console %} будет оставаться заблокированным в течение длительности, заданной временем блокировки. {% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}


{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. В разделе "Ограничение скорости попыток входа" настройте ограничение времени блокировки и частоты попыток входа или примите предварительно заполненные параметры по умолчанию.
![Поля для настройки времени блокировки и ограничения](/assets/images/enterprise/management-console/login-attempt-rate-limiting.png) частоты попыток входа {% data reusables.enterprise_management_console.save-settings %}

{% endif %}
## Включение дополнительных ограничений скорости

Установка дополнительных ограничений скорости защищает общий уровень обслуживания на {% data variables.location.product_location %}.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% ifversion ghes %}
2. В разделе "Ограничение скорости" выберите **Включить дополнительное ограничение скорости**.
   ![Флажок для включения дополнительного ограничения скорости](/assets/images/enterprise/management-console/secondary-rate-limits-checkbox.png) {% else %}
2. В разделе "Ограничение скорости" выберите **Включить ограничение скорости нарушения**.
    ![Флажок для включения ограничения частоты нарушений](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png) {% endif %}
3. Введите ограничения для общего количества запросов, ограничения ЦП и ограничения ЦП для поиска или примите предварительно заполненные ограничения по умолчанию.
{% data reusables.enterprise_management_console.save-settings %}

## Включение ограничений скорости для Git

Если сотрудник {% data variables.product.company_short %} рекомендовал его, вы можете применить ограничения скорости Git для каждой сети репозитория или идентификатора пользователя. Ограничения скорости Git выражаются в параллельных операциях в минуту и подстраиваются под текущую загрузку ЦП.

{% warning %}

**Предупреждение:** Мы рекомендуем оставить этот параметр отключенным, если только не рекомендовано непосредственно сотрудником {% data variables.product.company_short %}. Операции Git редко являются ведущим драйвером использования ЦП и ОЗУ. Включение этой функции может повысить вероятность сбоя операций Git в условиях высокой нагрузки, но не решает основную причину этих условий.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. В разделе "Ограничение скорости" выберите **Включить ограничение скорости Git**.
![Флажок для включения ограничения скорости Git](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. Введите ограничения для каждой сети репозитория или идентификатора пользователя.
  ![Поля для сети репозитория и идентификатора пользователя ограничивают](/assets/images/enterprise/management-console/example-git-rate-limits.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes > 3.4 %}

## Настройка ограничений скорости для {% data variables.product.prodname_actions %}

Вы можете применить ограничение скорости к выполнению рабочего процесса {% data variables.product.prodname_actions %}. Дополнительные сведения о {% data variables.product.prodname_actions %} см. в разделе «[Сведения о {% data variables.product.prodname_actions %} для организаций](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)».

### Сведения об ограничениях скорости для {% data variables.product.prodname_actions %}

Экземпляр {% data variables.product.product_name %} назначает каждому заданию рабочего процесса {% data variables.product.prodname_actions %} средству выполнения тестов. Если экземпляру не удается немедленно назначить задание доступному средству выполнения тестов, задание будет ожидать в очереди, пока средство выполнения тестов не освободится. Если {% data variables.product.prodname_actions %} испытывает постоянную высокую нагрузку, очередь может выполнять резервное копирование, а производительность {% data variables.location.product_location %} может снизиться.

Чтобы избежать снижения производительности, можно настроить ограничение скорости для {% data variables.product.prodname_actions %}. Это ограничение скорости выражается в количестве запусков задания в минуту. {% data variables.product.product_name %} вычисляет и применяет ограничение скорости для суммы всех запусков заданий на экземпляре. Если запуски превышают ограничение скорости, то дополнительные запуски завершаются ошибкой вместо входа в очередь. Следующая ошибка появится в заметках запуска.

> Превышено ограничение скорости для запросов на выполнение рабочего процесса. Подождите некоторое время перед повторением запуска.

Соответствующее ограничение скорости защищает {% data variables.location.product_location %} от аномального использования {% data variables.product.prodname_actions %} без вмешательства в повседневные операции. Точное пороговое значение зависит от доступных ресурсов экземпляра и общего профиля нагрузки. Дополнительные сведения о требованиях к оборудованию {% data variables.product.prodname_actions %} см. в разделе «[Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)».

По умолчанию ограничение скорости для {% data variables.product.prodname_actions %} отключено. Поскольку {% data variables.product.product_name %} может обрабатывать временные пики использования без снижения производительности, это ограничение скорости предназначено для защиты от устойчивой высокой нагрузки. Рекомендуется оставить ограничение скорости выключенным, пока отсутствуют проблемы с производительностью. В некоторых случаях {% data variables.contact.github_support %} рекомендуется включить ограничение скорости для {% data variables.product.prodname_actions %}. 

### Включение или выключение ограничений скорости для {% data variables.product.prodname_actions %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Чтобы включить и настроить ограничение скорости, выполните следующие две команды, заменив **RUNS-PER-MINUTE** выбранным значением.

   ```shell
   ghe-config actions-rate-limiting.enabled true
   ghe-config actions-rate-limiting.queue-runs-per-minute RUNS-PER-MINUTE
   ```
1. Чтобы отключить ограничение скорости после включения, выполните следующую команду.

   ```
   ghe-config actions-rate-limiting.enabled false
   ```
1. Чтобы применить конфигурацию, выполните следующую команду.

   ```
   ghe-config-apply
   ```
1. Подождите завершения запуска конфигурации.

{% endif %}
