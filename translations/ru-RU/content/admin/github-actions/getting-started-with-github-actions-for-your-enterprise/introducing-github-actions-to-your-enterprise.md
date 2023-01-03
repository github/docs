---
title: Внедрение GitHub Actions на предприятии
shortTitle: Introduce Actions
intro: 'Вы можете спланировать развертывание {% data variables.product.prodname_actions %} в предприятии.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: ddd394e589b3866e80ba024f99bd2394d1743299
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191865'
---
## Сведения о {% data variables.product.prodname_actions %} для предприятий

{% data reusables.actions.about-actions %} С помощью {% data variables.product.prodname_actions %} ваша компания может автоматизировать, персонализировать и выполнять рабочие процессы разработки программного обеспечения, такие как тестирование и развертывание. Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).

![Схема заданий, выполняемых в локальных средствах выполнения тестов](/assets/images/help/images/actions-enterprise-overview.png)

Перед внедрением {% data variables.product.prodname_actions %} в крупной компании необходимо сначала спланировать внедрение и принять решение относительно того, как предприятие будет использовать {% data variables.product.prodname_actions %}, чтобы обеспечить оптимальную поддержку ваших уникальных потребностей.

## Система управления и соответствие требованиям

Необходимо разработать план по контролю за использованием {% data variables.product.prodname_actions %} на предприятии и соответствия нормативным требованиям.

Определите действия {% ifversion actions-workflow-policy %}и повторно используемые рабочие процессы{% endif %}, которые будет разрешено использовать разработчикам. {% ifversion ghes %}Во-первых, решите, будет ли разрешен доступ к действиям {% ifversion actions-workflow-policy %}и повторно используемым рабочим процессам{% endif %} извне вашего экземпляра. {% data reusables.actions.access-actions-on-dotcom %} Дополнительные сведения см. в разделе [Сведения об использовании действий в организации](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise).

Затем{% else %}Во-первых,{% endif %} решите, будут ли разрешены сторонние действия {% ifversion actions-workflow-policy %}и повторно используемые рабочие процессы{% endif %}, которые не были созданы {% data variables.product.company_short %}. Можно настроить действия {% ifversion actions-workflow-policy %}и повторно используемые рабочие процессы{% endif %}, которые разрешено запускать на уровне репозитория, организации и предприятия, а также разрешать только действия, созданные {% data variables.product.company_short %}. Если вы разрешите сторонние действия{% ifversion actions-workflow-policy %} и повторно используемые рабочие процессы{% endif %}, можно ограничить разрешенные действия до тех, которые создали проверенные авторы, или до списка конкретных действий{% ifversion actions-workflow-policy %} и повторно используемых рабочих процессов{% endif %}. Дополнительные сведения см. в разделе [Управление параметрами {% data variables.product.prodname_actions %} для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository), [Отключение или ограничение {% data variables.product.prodname_actions %} для организации](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization) и [Применение политик для {% data variables.product.prodname_actions %} в организации](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-to-restrict-the-use-of-github-actions-in-your-enterprise).

{% ifversion actions-workflow-policy %} ![Снимок экрана: политики {% data variables.product.prodname_actions %}](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![Снимок экрана: политики {% data variables.product.prodname_actions %}](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}

{% ifversion ghec or ghes > 3.4 %} Рассмотрите возможность объединения OpenID Connect (OIDC) с повторно используемыми рабочими процессами для обеспечения согласованного развертывания в репозитории, организации или на предприятии. Это можно сделать, определив условия доверия для облачных ролей на основе повторно используемых рабочих процессов. Дополнительные сведения см. в разделе [Использование OpenID Connect с повторно используемыми рабочими процессами](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows).
{% endif %}

Вы можете получить доступ к сведениям о действиях, связанных с {% data variables.product.prodname_actions %} в журналах аудита для вашего предприятия. Если компании требуется хранить эту информацию дольше, чем хранятся данные журнала аудита, спланируйте экспорт и хранение этих данных за пределами {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе {% ifversion ghec %}"[Экспорт действий журнала аудита для вашего предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)" и "[Потоковая передача журнала аудита для вашего предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)."{% else %}{% ifversion audit-log-streaming %}"[Потоковая передача журнала аудита для вашего предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)" и {% endif %}"[Переадресация журнала](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)."{% endif %}

![Записи в журнале аудита](/assets/images/help/repository/audit-log-entries.png)

## Безопасность

Необходимо спланировать методики усиления защиты для {% data variables.product.prodname_actions %}.

### Усиление защиты отдельных рабочих процессов и репозиториев

Создайте план обеспечения безопасности для пользователей, использующих функции {% data variables.product.prodname_actions %} в вашей организации. Дополнительные сведения об этих методиках см. в разделе [Защита безопасности для {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions).

Вы также можете поощрять повторное использование рабочих процессов, которые уже оценивались с точки зрения безопасности. Дополнительные сведения см. в разделе [Выбор внутреннего источника](#innersourcing).

### Защита доступа к секретам и ресурсам развертывания

Необходимо спланировать место хранения секретов. Рекомендуется хранить секреты в {% data variables.product.prodname_dotcom %}, однако можно также хранить секреты в поставщике облачных служб.

В {% data variables.product.prodname_dotcom %}можно хранить секреты на уровне репозитория или организации. Секреты на уровне репозитория могут быть ограничены рабочими процессами в определенных средах, например в рабочей или тестовой среде. Дополнительные сведения см. в статье [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).

![Снимок экрана: список секретов](/assets/images/help/settings/actions-org-secrets-list.png) Попробуйте добавить защиту с утверждением вручную для конфиденциальных сред, чтобы запрашивать утверждение рабочих процессов перед получением доступа к секретам в средах. Дополнительные сведения см. в разделе [Использование сред для развертываний](/actions/deployment/targeting-different-environments/using-environments-for-deployment).

### Соображения безопасности для действий сторонних разработчиков

С использованием действий из сторонних репозиториев в {% data variables.product.prodname_dotcom %} связаны существенные риски. Если вы разрешаете действия сторонних разработчиков, необходимо разработать внутренние инструкции, которые помогут вашей команде следовать рекомендациям, таким как закрепление действий при полной фиксации SHA. Дополнительные сведения см. в разделе [Использование действий сторонних разработчиков](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions).

## Выбор внутреннего источника

Подумайте о том, как ваше предприятие может использовать функции {% data variables.product.prodname_actions %} для выбора внутреннего источника автоматизации. Выбор внутреннего источника — это способ реализации преимуществ методологий с открытым исходным кодов во внутреннем цикле разработки программного обеспечения. Дополнительные сведения см. в разделе [Общие сведения о выборе внутреннего источника](https://resources.github.com/whitepapers/introduction-to-innersource/) в разделе «Ресурсы {% data variables.product.company_short %}».

{% data reusables.actions.internal-actions-summary %}

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.reusable-workflows-enterprise-beta %} С помощью повторно используемых рабочих процессов ваша команда может вызывать один рабочий процесс из другого рабочего процесса, избегая точного дублирования. Повторно используемые рабочие процессы способствуют соблюдению рекомендаций, помогая команде использовать рабочие процессы, которые грамотно разработаны и уже успешно протестированы. Дополнительные сведения см. в статье [Многократное использование рабочих процессов](/actions/learn-github-actions/reusing-workflows).
{% endif %}

Чтобы предоставить начальную точку разработчикам, создающим новые рабочие процессы, можно использовать рабочие процессы начального уровня. Это не только экономит время разработчиков, но и обеспечивает согласованность и внедрение рекомендованных практических методик в вашей организации. Дополнительные сведения см. в разделе [Создание рабочих процессов начального уровня для вашей организации](/actions/learn-github-actions/creating-starter-workflows-for-your-organization).

{% ifversion not internal-actions %} Всякий раз, когда разработчики рабочих процессов хотят использовать действие, хранящееся в частном репозитории, им необходимо сначала настроить рабочий процесс для клонирования репозитория. Чтобы уменьшить количество репозиториев, которые необходимо клонировать, попробуйте сгруппировать часто используемые действия в одном репозитории. Дополнительные сведения см. в разделе [Сведения о настраиваемых сертификатах](/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action).
{% endif %}

## Управление ресурсами

Вы должны спланировать управление ресурсами, необходимыми для использования {% data variables.product.prodname_actions %}.

{% ifversion ghes %}
### Требования к оборудованию

Возможно, потребуется обновить ресурсы ЦП и памяти для {% data variables.location.product_location %} для обработки нагрузки от {% data variables.product.prodname_actions %} без потери производительности. Дополнительные сведения см. в разделе [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements).
{% endif %}

### Средства выполнения

Для рабочих процессов {% data variables.product.prodname_actions %} требуются средства выполнения ntcnjd. {% ifversion ghec %} Вы можете использовать средства выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %} или средства выполнения тестов локального размещения. Средства выполнения тестов, размещенные в {% data variables.product.prodname_dotcom %}, удобны, так как они управляются {% data variables.product.company_short %}, которые обрабатывают инструменты обслуживания и обновления. Однако, возможно, потребуется использовать средств выполнения тестов локального размещения, если нужно запустить рабочий процесс, который будет обращаться к ресурсам за брандмауэром, или если вам нужен более полный контроль над ресурсами, конфигурацией или географическим расположением компьютеров, где размещены средства выполнения тестов. Дополнительные сведения см. в разделе [Сведения о средствах выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners) и [Сведения о средствах выполнения локального размещения](/actions/hosting-your-own-runners/about-self-hosted-runners). {% else %} Вам потребуется разместить собственные средства выполнения тестов, установив локальное приложение средства выполнения тестов локального размещения {% data variables.product.prodname_actions %} на своих компьютерах. Дополнительные сведения см. в разделе «[Локальные средства выполнения тестов](/actions/hosting-your-own-runners/about-self-hosted-runners)». {% endif %}

{% ifversion ghec %}Если вы используете средства выполнения тестов локального размещения, необходимо решить, следует ли использовать физические машины, виртуальные машины или контейнеры. {% else %}Решите, следует ли использовать физические машины, виртуальные машины или контейнеры для средств выполнения локального размещения. {% endif %} Физические компьютеры будут хранить остатки предыдущих заданий, как и виртуальные машины, если вы не будете использовать новый образ для каждого задания или очищать компьютеры после выполнения каждого задания. При выборе контейнеров следует знать, что автоматическое обновление средства выполнения завершает работу контейнера, что может привести к сбою рабочих процессов. Эту проблему нужно решить, запретив автоматическое обновление или пропуская команду, чтобы удалить контейнер.

Также необходимо решить, куда будет добавлено каждое из средств выполнения тестов. Можно добавить средство выполнения тестов локального размещения в отдельный репозиторий или сделать средство доступным для всей организации или всего предприятия. Добавление средств выполнения тестов на уровне организации или предприятия позволяет совместно использовать такие средства. Из-за этого может уменьшиться размер инфраструктуры средства выполнения тестов. Политики можно использовать для ограничения доступа к средствам выполнения тестов локального размещения на уровнях организации и предприятия, назначив группы средств выполнения тестов определенным репозиториям или организациям. Дополнительные сведения см. в разделе [Добавление средств выполнения тестов локального размещения](/actions/hosting-your-own-runners/adding-self-hosted-runners) и [Управление доступом к средствам выполнения тестов локального размещения с помощью групп](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).

{% ifversion ghec or ghes %} Рекомендуется использовать автомасштабирование для автоматического увеличения или уменьшения числа доступных локальных средств выполнения тестов. Дополнительные сведения см. в разделе [Автомасштабирование с использованием локальных средств выполнения тестов](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners).
{% endif %}

Наконец, можно попробовать усилить безопасность для средств выполнения тестов локального размещения. Дополнительные сведения см. в разделе [Защита безопасности для {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners).

### Память

{% data reusables.actions.about-artifacts %} Дополнительные сведения см. в разделе [Хранение данных рабочего процесса как артефактов](/actions/advanced-guides/storing-workflow-data-as-artifacts). 

{% ifversion actions-caching %}{% data variables.product.prodname_actions %} также имеет систему кэширования, которую можно использовать для кэширования зависимостей, чтобы ускорить выполнение рабочего процесса. Дополнительные сведения см. в разделе [Кэширование зависимостей для ускорения рабочих процессов](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).{% endif %}

{% ifversion ghes %} Необходимо настроить внешнее хранилище больших двоичных объектов для артефактов рабочих процессов{% ifversion actions-caching %}, кэшей{% endif %} и других журналов рабочих процессов. Определите, какой поддерживаемый поставщик хранилища будет использовать ваше предприятие. Дополнительные сведения см. в разделе [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements).
{% endif %}

{% ifversion ghec or ghes %}

Параметры политики для {% data variables.product.prodname_actions %} можно использовать для настройки хранилища артефактов рабочих процессов{% ifversion actions-caching %}, кэшей{% endif %} и хранения журналов. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.prodname_actions %} на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)».

{% endif %}

{% ifversion ghec %} Некоторые хранилища включены в вашу подписку, однако дополнительное хранилище повлияет на затраты. Необходимо учитывать эти затраты при планировании. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions).
{% endif %}

## Отслеживание использования

Можно запланировать отслеживание использования {% data variables.product.prodname_actions %} вашим предприятием, например, регулярность запуска рабочих процессов, количество успешных запусков и сбоев, а также использованием тех или иных рабочих процессов конкретными репозиториями.

{% ifversion ghec %} Вы можете просмотреть основные сведения об использовании хранилища и передачи данных в {% data variables.product.prodname_actions %} для каждой организации на предприятии, используя для этого настройки выставления счетов. Дополнительные сведения см. в разделе [Просмотр данных об использовании {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-enterprise-account).

Для получения более подробных данных об использовании можно{% else %}использовать{% endif %} веб-перехватчики для оформления подписки на информацию о заданиях рабочих процессов и запусках рабочих процессов. Дополнительные сведения см. в статье [Сведения о веб-перехватчиках](/developers/webhooks-and-events/webhooks/about-webhooks).

Спланируйте, как предприятие будет передавать данные из этих веб-перехватчиков в систему архивации данных. Можно использовать CEDAR.GitHub.Collector — средство с открытым исходным кодом, которое собирает и обрабатывает данные веб-перехватчика из {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в статье «[`Microsoft/CEDAR.GitHub.Collector`Репозиторий](https://github.com/microsoft/CEDAR.GitHub.Collector/)».

Кроме того, следует спланировать, как ваши команды будут получать необходимые данные из системы архивации.
