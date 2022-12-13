---
title: Начало работы со средствами выполнения тестов локального размещения для вашего предприятия
shortTitle: Self-hosted runners
intro: 'Вы можете настроить компьютер средства выполнения тестов для предприятия, чтобы разработчики могли начать автоматизацию рабочих процессов с помощью {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
permissions: 'Enterprise owners can configure policies for {% data variables.product.prodname_actions %} and add self-hosted runners to the enterprise.'
type: quick_start
topics:
  - Actions
  - Enterprise
  - Fundamentals
ms.openlocfilehash: e369c7bf3a9da15cd4e0ee43f54815e89ab4b45a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106624'
---
## Сведения о средствах выполнения тестов локального размещения для {% data variables.product.prodname_actions %}

{% data reusables.actions.about-actions-for-enterprises %} Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_actions %} для предприятий](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).

С помощью {% data variables.product.prodname_actions %}разработчики могут создавать и объединять отдельные задачи, которые называются действиями для создания пользовательских рабочих процессов. {% ifversion ghes или ghae %} Чтобы включить {% данных variables.product.prodname_actions %} для {% ifversion ghae %}ваш корпоративный{% elsif ghes %} {% данных variables.location.product_location %}{% endif %}, необходимо разместить по крайней мере один компьютер для выполнения заданий. {% endif %} {% ifversion ghec %} Вы можете разместить собственный компьютер средства выполнения для выполнения заданий, и этот {% elsif ghes или ghae %}Этот компьютер{% endif %} называется локальным средством выполнения. {% data reusables.actions.self-hosted-runner-locations %} {% data reusables.actions.self-hosted-runner-architecture %} {% ifversion ghec %}All{% elsif ghes or ghae %}Средства выполнения тестов{% endif %} могут выполнять Linux, Windows или macOS. Дополнительные сведения см. в разделе «[Локальные средства выполнения тестов](/actions/hosting-your-own-runners/about-self-hosted-runners)».

{% ifversion ghec %}

Кроме того, можно использовать компьютеры для установки средства выполнения тестов, на которых размещаются {% data variables.product.company_short %}. Средства размещения тестов, размещенные в {% data variables.product.company_short %}, не рассматриваются в этом руководстве. Дополнительные сведения см. в разделе [Сведения о средствах выполнения тестов, размещенных в {% data variables.product.company_short %}](/actions/using-github-hosted-runners/about-github-hosted-runners).

{% endif %}

В этом руководстве показано, как применить централизованный подход к управлению средствами выполнения тестов локального размещения для {% data variables.product.prodname_actions %} в организации. В этом руководстве вы выполните следующие задачи:

1. Настройте ограниченную политику, чтобы ограничить действия{% ifversion actions-workflow-policy %} и повторно используемые рабочие процессы{% endif %}, которые могут выполняться на предприятии
1. Развертывание средства выполнения тестов локального размещения для вашего предприятия
1. Создание группы для управления доступом к средствам выполнения тестов, доступным для вашего предприятия
1. При необходимости ограничьте репозитории, которые могут использовать средство выполнения.
1. При необходимости создайте пользовательские средства для автоматического масштабирования локальных средств выполнения.

Кроме того, вы сможете просмотреть дополнительные сведения о мониторинге и защите локальных средств выполнения тестов локального размещения, {% ifversion ghes or ghae %} о том, как получить доступ к действиям из {% data variables.product.prodname_dotcom_the_website %},{% endif %} и как настроить программное обеспечение на компьютерах для установки средства выполнения тестов.

После завершения руководства {% ifversion ghec или ghae %}участники предприятия{% elsif ghes %}пользователи {% данных variables.location.product_location %}{% endif %} смогут выполнять задания рабочего процесса из {% данных variables.product.prodname_actions %} на локальном компьютере средства выполнения.

## Предварительные требования

{% data reusables.actions.self-hosted-runners-prerequisites %}

- Ваше предприятие должно быть членом по крайней мере одной организации. Дополнительные сведения см. в разделе [Об организациях](/organizations/collaborating-with-groups-in-organizations/about-organizations) и [Создание новой организации с нуля](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

## 1. Настройка политик для {% data variables.product.prodname_actions %}

Во-первых, включите {% данных variables.product.prodname_actions %} для всех организаций и настройте политику для ограничения действий{% ifversion actions-workflow-policy %} и повторно используемых рабочих процессов{% endif %}, которые могут запускать {% ifversion ghec или ghae%}в организации на {% данных variables.product.product_name %}{% elsif ghes %}на {% данных variables.location.product_location %}{%endif %}. При необходимости владельцы организации могут дополнительно ограничивать эти политики для каждой организации.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. В разделе «Политики» выберите **Включить для всех организаций**.
   
   ![Снимок экрана: политика «Включить для всех организаций» для {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-enable-for-all-organizations.png)
1. Выберите {% data reusables.actions.policy-label-for-select-actions-workflows %} и **Разрешить действия, созданные GitHub**, чтобы разрешить локальные действия{% ifversion actions-workflow-policy %} и повторно используемые рабочие процессы{% endif %}, а также действия, созданные {% data variables.product.company_short %}.

   {% ifversion actions-workflow-policy %} ![Снимок экрана: "Разрешить действия выбора" и "Разрешить действия, созданные {% data variables.product.company_short %}" для {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github-with-workflows.png) {%- else %} ![Снимок экрана: "Разрешить действия выбора" и "Разрешить действия, созданные {% data variables.product.company_short %}" для {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github.png) {%- endif %}
1. Нажмите **Сохранить**.

Вы можете настроить дополнительные политики, чтобы ограничить действия, доступные для {% ifversion ghec или ghae %}корпоративные члены{% elsif ghes %}пользователи {% данных variables.location.product_location %}{% endif %}. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.prodname_actions %} на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run)».

## 2. Развертывание средства выполнения тестов локального размещения для вашего предприятия

Затем добавьте локальное средство выполнения тестов в свое предприятие. {% data variables.product.product_name %} поможет вам установить необходимое программное обеспечение на компьютере для установки средства выполнения тестов. После развертывания средства выполнения можно проверить подключение между компьютером средства выполнения и {%ifversion ghec или ghae %}вашей организации{% elsif ghes %}{% данных variables.location.product_location %}{% endif %}.

### Добавление средства выполнения тестов локального размещения

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

## 3. Управление доступом к средству выполнения тестов локального размещения с помощью группы

Можно создать группу средств выполнения тестов для управления доступом к средству выполнения тестов, добавленному для вашей организации. Вы будете использовать группу, чтобы выбрать организации, которые смогут выполнять задания из {% data variables.product.prodname_actions %} в средстве выполнения тестов.

{% data variables.product.product_name %} добавляет все новые средства выполнения тестов в группу. Средства выполнения тестов не могут находиться одновременно в нескольких группах. По умолчанию {% data variables.product.product_name %} добавляет новые средства выполнения тестов в группу «По умолчанию».

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. Чтобы выбрать политику для доступа организации, в разделе «Доступ к организации» щелкните раскрывающийся список **Доступ к организации** и выберите **Выбранные организации**.
1. Справа от раскрывающегося списка, где приведена политика доступа организации, щелкните {% octicon "gear" aria-label="The Gear icon" %}.
1. Выберите организации, которым требуется предоставить доступ к группе средств выполнения.
{%- ifversion ghec or ghes %}
1. При необходимости, чтобы разрешить общедоступным репозиториям в выбранных организациях использовать средства выполнения тестов в группе, выберите **Разрешить общедоступные репозитории**.

   {% warning %}

   **Предупреждение**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Дополнительные сведения см. в разделе «[Локальные средства выполнения тестов](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)».

   {% endwarning %} {%- endif %} {% данных reusables.actions.create-runner-group %} {%- ifversion ghec или ghes > 3.3 или ghae > 3,3 %}
1. Перейдите на вкладку «Средства выполнения тестов».
1. В списке средств выполнения тестов щелкните средство выполнения тестов, развернутое в предыдущем разделе.
1. Нажмите кнопку **Изменить**.
1. Щелкните **Группы средств выполнения тестов {% octicon "gear" aria-label="The Gear icon" %}**.
1. В списке групп средств выполнения тестов щелкните имя ранее созданной группы.
1. Нажмите кнопку **Сохранить**, чтобы переместить средство выполнения тестов в группу.
{%- elsif ghes < 3.4 or ghae %}
1. Справа от параметра «По умолчанию» щелкните число средств выполнения тестов в группе, чтобы отобразить средства выполнения тестов.
1. Выберите развернутое средство выполнения тестов.
1. Справа от пункта «Группы средств выполнения тестов» выберите раскрывающийся список **Переместить в группу** и щелкните созданную ранее группу.
{%- endif %}

Итак, вы развернули локальное средство выполнения тестов, которое может выполнять задания из {% data variables.product.prodname_actions %} в указанных организациях.

## 4. Дополнительное ограничение доступа к средству выполнения тестов локального размещения

Владельцы организаций могут дополнительно ограничить политику доступа для группы созданных средств выполнения тестов. Например, владелец организации может разрешить использовать группу средств выполнения тестов только определенным репозиториям в организации.

Дополнительные сведения см. в разделе [Управление доступом к средствам выполнения тестов локального размещения с помощью групп](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).

## 5. Автоматическое масштабирование средств выполнения тестов локального размещения

При необходимости можно создать пользовательские средства для автоматического масштабирования локальных средств выполнения для {% ifversion ghec или ghae %}вашей организации{% elsif ghes %}{% данных variables.location.product_location %}{% endif %}. Например, средства могут реагировать на события веб-перехватчика из {% данных variables.location.product_location %} для автоматического масштабирования кластера компьютеров средства выполнения. Дополнительные сведения см. в разделе [Автомасштабирование с использованием локальных средств выполнения тестов](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners).

## Дальнейшие действия

- Вы можете отслеживать локальные средства выполнения тестов и устранять распространенные проблемы. Дополнительные сведения см. в разделе [Мониторинг и устранение неполадок в работе средств выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners).

- {% data variables.product.company_short %} рекомендует ознакомиться с рекомендациями по обеспечению безопасности компьютеров для установки средств выполнения тестов локального размещения. Дополнительные сведения см. в разделе [Защита безопасности для {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners).

- {% ifversion ghec %}Если вы используете {% data variables.product.prodname_ghe_server %} или {% data variables.product.prodname_ghe_managed %}, вы{% elsif ghes or ghae %}Вы{% endif %} можете вручную синхронизировать репозитории в {% data variables.product.prodname_dotcom_the_website %}, где содержатся действия для вашего предприятия в {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}{% endif %}. Кроме того, вы можете разрешить участникам предприятия автоматически получать доступ к действиям из {% data variables.product.prodname_dotcom_the_website %} с помощью {% data variables.product.prodname_github_connect %}. Дополнительные сведения см. в следующих разделах.

   {%- ifversion ghes or ghae %}
   - [Синхронизация действий из {% data variables.product.prodname_dotcom_the_website %} вручную](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)
   - [Включение автоматического доступа к действиям {% data variables.product.prodname_dotcom_the_website %} с помощью {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) {%- elsif ghec %}
   - Синхронизация действий из {% data variables.product.prodname_dotcom_the_website %} вручную в документации [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) или [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)
   - Включение автоматического доступа к действиям {% data variables.product.prodname_dotcom_the_website %} с помощью {% data variables.product.prodname_github_connect %}" в документации [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) или [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) {%- endif %}

- Вы можете настроить программное обеспечение, доступное на компьютерах для установки средство выполнения тестов локального размещения, или настроить средства выполнения тестов для запуска программного обеспечения, аналогичных средствам для выполнения тестов, размещенным в {% data variables.product.company_short %},{% ifversion ghes or ghae %} для клиентов, использующих {% data variables.product.prodname_dotcom_the_website %}{% endif %}. Программное обеспечение, которое поддерживает компьютеры для установки средства выполнения тестов для {% data variables.product.prodname_actions %}, имеет открытый исходный код. Дополнительные сведения см. в репозиториях [`actions/runner`](https://github.com/actions/runner) и [`actions/runner-images`](https://github.com/actions/runner-images).

## Дополнительные материалы

- [Настройка приложения средства выполнения тестов локального размещения как службы](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)
- [Использование самостоятельно размещенных средств выполнения в рабочем процессе](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)
