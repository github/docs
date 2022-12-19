---
title: Просмотр и обновление оповещений Dependabot
intro: 'Если {% data variables.product.product_name %} обнаружит небезопасные зависимости в вашем проекте, вы сможете просмотреть сведения на вкладке оповещений Dependabot для своего репозитория. Затем вы можете обновить проект, чтобы устранить уязвимости, или закрыть оповещение.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 8bf53452bd6518f5525d67994f3e6711ef33de0d
ms.sourcegitcommit: 7e2b5213fd15d91222725ecab5ee28cef378d3ad
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185554'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

На вкладке {% data variables.product.prodname_dependabot_alerts %} репозитория перечислены все открытые и закрытые {% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes %} и соответствующие {% data variables.product.prodname_dependabot_security_updates %}{% endif %}. Вы можете{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} фильтровать оповещения по пакету, экосистеме или манифесту. Вы можете отсортировать список оповещений{% endif %} и посмотреть дополнительные сведения, нажав на конкретное оповещение. {% ifversion dependabot-bulk-alerts %} Вы также можете закрыть или повторно открыть оповещения (по одному или сразу выбрав несколько оповещений). {% else %}Вы также можете закрыть или повторно открыть оповещения. {% endif %} Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies). 

{% ifversion fpt or ghec or ghes %} Вы можете включить автоматическое обновление системы безопасности для любого репозитория, использующего {% data variables.product.prodname_dependabot_alerts %} и граф зависимостей. Дополнительные сведения см. в разделе [Сведения об {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates).
{% endif %}

{% ifversion fpt or ghec or ghes %}
## Сведения об обновлениях для уязвимых зависимостей в репозитории

{% data variables.product.product_name %} создает {% data variables.product.prodname_dependabot_alerts %} когда обнаруживает, что ваша база кода использует зависимости с известными рисками безопасности. Если в репозитории включены {% data variables.product.prodname_dependabot_security_updates %}, то в случае, если {% data variables.product.product_name %} обнаружит уязвимую зависимость в ветви по умолчанию, {% data variables.product.prodname_dependabot %} создаст запрос на вытягивание, что исправить такую зависимость. Запрос на вытягивание обновит зависимость до минимальной возможной безопасной версии, позволяющей избежать уязвимости.

Каждое оповещение {% data variables.product.prodname_dependabot %} имеет уникальный цифровой идентификатор, а на вкладке {% data variables.product.prodname_dependabot_alerts %} отображается оповещение о каждой обнаруженной уязвимости. Раньше {% data variables.product.prodname_dependabot_alerts %} группировали уязвимости по зависимостям и создавали одно оповещение для каждой зависимости. При переходе к устаревшему оповещению {% data variables.product.prodname_dependabot %} вы будете перенаправлены на вкладку {% data variables.product.prodname_dependabot_alerts %}, отфильтрованную по соответствующему пакету. {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} Вы можете фильтровать и сортировать {% data variables.product.prodname_dependabot_alerts %} с помощью различных фильтров и параметров сортировки, доступных в пользовательском интерфейсе. Дополнительные сведения см. в разделе [Назначение приоритета {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-) ниже.

## Назначение приоритета {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.company_short %} помогает назначить приоритет исправления {% data variables.product.prodname_dependabot_alerts %}. {% ifversion dependabot-most-important-sort-option %} По умолчанию {% data variables.product.prodname_dependabot_alerts %} сортируются по важности. Порядок сортировки "Наиболее важно" помогает назначить приоритеты, на которых {% data variables.product.prodname_dependabot_alerts %} следует сосредоточиться в первую очередь. Оповещения ранжируются на основе их потенциального влияния, возможности выполнить с ними определенные действия и релевантности. Наше вычисление приоритетов постоянно улучшается и включает такие факторы, как оценка CVSS, область зависимостей и наличие уязвимых вызовов функций для оповещения.

![Снимок экрана: раскрывающийся список сортировки с сортировкой "Наиболее важно"](/assets/images/help/dependabot/dependabot-alerts-sort-dropdown.png) {% endif %}

{% data reusables.dependabot.dependabot-alerts-filters %}

Помимо фильтров, доступных на панели поиска, можно сортировать и фильтровать данные {% data variables.product.prodname_dependabot_alerts %} с помощью раскрывающихся меню в верхней части списка оповещений. Панель поиска также позволяет выполнять полнотекстовый поиск оповещений и связанных с ними рекомендаций по безопасности. Вы можете выполнить поиск по части имени или описания рекомендации по безопасности, чтобы вернуть оповещения в репозитории, которые имеют отношение к этой рекомендации по безопасности. Например, поиск `yaml.load() API could execute arbitrary code` вернет {% data variables.product.prodname_dependabot_alerts %}, связанное с "[PyYAML небезопасно десериализирует строки YAML, что приводит к произвольному выполнению кода](https://github.com/advisories/GHSA-rprw-h62v-c2w7)", так как строка поиска отображается в описании предупреждения.

{% endif %}

{% ifversion dependabot-bulk-alerts %} ![ Снимок экрана: меню фильтра и сортировки на вкладке {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% elsif ghes = 3.5 %} Можно выбрать фильтр в раскрывающемся меню в верхней части списка, а затем выбрать фильтр, который вы хотите применить.
   ![Снимок экрана: фильтр и меню сортировки на вкладке {% data variables.product.prodname_dependabot_alerts %} ](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}

{% ifversion dependabot-alerts-development-label %}
## Поддерживаемые экосистемы и манифесты для области зависимостей

{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

Оповещения для пакетов, указанных как зависимости разработки, имеют метку `Development` на странице {% data variables.product.prodname_dependabot_alerts %}, а также доступны для фильтрации с помощью фильтра `scope`.

![Снимок экрана: метка "Development" в списке оповещений](/assets/images/help/repository/dependabot-alerts-development-label.png)

На странице сведений об оповещении для пакетов с областью разработки отображается раздел "Теги", содержащий метку `Development`.

![Снимок экрана: раздел "Теги" на странице сведений об оповещениях](/assets/images/help/repository/dependabot-alerts-tags-section.png)

{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}
## Сведения об обнаружении вызовов уязвимых функций

{% data reusables.dependabot.vulnerable-calls-beta %}

Если {% data variables.product.prodname_dependabot %} сообщает, что в вашем репозитории используется уязвимая зависимость, вам нужно определить, какие функции являются уязвимыми, и проверить, используете ли вы эти функции. Получив эту информацию, вы сможете определить, насколько срочно необходимо выполнить обновление до безопасной версии зависимости. 

Для поддерживаемых языков {% data variables.product.prodname_dependabot %} автоматически определяет, используется ли уязвимая функция, и добавляет к соответствующим оповещениям метку "Уязвимый вызов". Эти сведения можно использовать в представлении {% data variables.product.prodname_dependabot_alerts %} для более эффективного рассмотрения необходимых исправлений и определения их приоритетности.

{% note %}

**Примечание.** В бета-версии эта функция доступна только для новых рекомендаций Python, созданных *после* 14 апреля 2022 г., и для подмножества исторических рекомендаций Python. {% data variables.product.prodname_dotcom %} работает над заполнением данных в других исторических рекомендациях Python, добавляемых на регулярной основе. Уязвимые вызовы выделяются только на страницах {% data variables.product.prodname_dependabot_alerts %}.

{% endnote %}

![Снимок экрана: оповещение с меткой "Уязвимый вызов"](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

Представление можно отфильтровать так, чтобы оповещения отображались, только если {% data variables.product.prodname_dependabot %} обнаружит хотя бы один вызов уязвимой функции, используя фильтр `has:vulnerable-calls` в поле поиска.

Для оповещений об обнаружении уязвимых вызовов на странице сведений об оповещении отображается дополнительная информация:

- один или несколько блоков кода, показывающих, где используется функция;
- заметка с описанием самой функции и ссылкой на строку, в которой вызывается функция.

![Снимок экрана: страница сведений об оповещении с меткой "Уязвимый вызов"](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

Дополнительные сведения см. в разделе [Просмотр и исправление оповещений](#reviewing-and-fixing-alerts) ниже.

{% endif %}

## Просмотр {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Оповещения можно также отфильтровать, выбрав раскрывающееся меню, а затем фильтр, который вы хотите применить. Фильтры также можно вводить в строке поиска. Дополнительные сведения о фильтрации и сортировке оповещений см. в разделе [Назначение приоритетов {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-).
{%- ifversion dependabot-bulk-alerts %} ![Снимок экрана: меню фильтрации и сортировки на вкладке {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %} ![Снимок экрана: меню фильтрации и сортировки на вкладке {% data variables.product.prodname_dependabot_alerts %}](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
1. Щелкните оповещение, которое хотите просмотреть.{% ifversion dependabot-bulk-alerts %} ![Выбранное оповещение в списке оповещений](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %} ![Выбранное оповещение в списке оповещений](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Щелкните оповещение, которое вы хотите просмотреть.
  ![Оповещение, выбранное в списке оповещений](/assets/images/help/graphs/click-alert-in-alerts-list.png) {% endif %}

## Просмотр и исправление оповещений

Важно, что ни в одной из ваших зависимостей не было брешей в безопасности. Если {% data variables.product.prodname_dependabot %} обнаружит уязвимости {% ifversion GH-advisory-db-supports-malware %}или вредоносные программы{% endif %} в ваших зависимостях, оцените уровень угрозы для своего проекта и определите, какие действия по исправлению необходимо предпринять для защиты приложения.

Если доступна исправленная версия зависимости, можно создать запрос на вытягивание {% data variables.product.prodname_dependabot %} для обновления этой зависимости непосредственно из оповещения {% data variables.product.prodname_dependabot %}. Если включены {% data variables.product.prodname_dependabot_security_updates %}, запрос на вытягивание может быть связан с оповещением Dependabot. 

Если исправленная версия недоступна или вы не можете обновить ее до безопасной версии, {% data variables.product.prodname_dependabot %} предоставляет дополнительные сведения, которые помогут вам определить дальнейшие действия. Открыв оповещение {% data variables.product.prodname_dependabot %}, вы увидите полные сведения о рекомендациях по безопасности для соответствующей зависимости, включая затронутые функции. После этого проверьте, вызывает ли ваш код затронутые функции. Эти сведения помогут вам дополнительно оценить уровень риска и определить обходные пути или понять, можете ли вы принять риск с учетом рекомендаций по безопасности.

{% ifversion dependabot-alerts-vulnerable-calls %}

{% data variables.product.prodname_dependabot %} обнаруживает вызовы уязвимых функций на поддерживаемых языках. Сведения об оповещении с меткой "Уязвимый вызов" содержат имя функции и ссылку на код, который ее вызывает. Часто этого достаточно, чтобы принять решение, и другие изыскания не требуются.

{% endif %}

### Исправление уязвимых зависимостей

1. Посмотрите сведения об оповещении. Дополнительные сведения см. в разделе "[Просмотр {% data variables.product.prodname_dependabot_alerts %}](#viewing-dependabot-alerts) выше.
{% ifversion fpt or ghec or ghes %}
1. Если включены {% data variables.product.prodname_dependabot_security_updates %}, там может быть ссылка на запрос на вытягивание, который исправит зависимость. Если нет, нажмите кнопку **Создать обновление системы безопасности {% data variables.product.prodname_dependabot %}** в верхней части страницы сведений об оповещении, чтобы создать запрос на вытягивание.
  ![Кнопка "Создать обновление системы безопасности {% data variables.product.prodname_dependabot %}"](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. Если вы не используете {% data variables.product.prodname_dependabot_security_updates %}, информация на этой странице может помочь вам решить, какая версия зависимости требует обновления, и создать запрос на вытягивание для обновления этой зависимости до безопасной версии.
{% elsif ghae %}
1. Информация на этой странице может помочь вам решить, какая версия зависимости требует обновления, и создать запрос на вытягивание к манифесту либо ограничить файл безопасной версией.
{% endif %}
1. Когда вы будете готовы обновить зависимость и устранить уязвимость, объедините запрос на вытягивание. 

{% ifversion fpt or ghec or ghes %} Каждый запрос на вытягивание, создаваемый {% data variables.product.prodname_dependabot %}, содержит сведения о командах, которые можно использовать для управления {% data variables.product.prodname_dependabot %}. Дополнительные сведения см. в разделе [Управление запросами на вытягивание для обновлений зависимостей](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands).
{% endif %}

## Отклонение {% data variables.product.prodname_dependabot_alerts %}

{% tip %}

**Совет.** Закрыть можно только открытые оповещения.
{% endtip %}

Если вы планируете обширную работу по обновлению зависимости или решите, что оповещение не требует исправления, можно закрыть оповещение. Отклонение оповещений, которые вы уже проанализировали, упрощает рассмотрение новых оповещений по мере их появления.

1. Посмотрите сведения об оповещении. Дополнительные сведения см. в разделе [Просмотр уязвимых зависимостей](#viewing-dependabot-alerts) (выше).
1. Откройте раскрывающийся список "Закрыть" и выберите причину закрытия оповещения.{% ifversion reopen-dependabot-alerts %} Закрытые оповещения без исправления можно позже открыть повторно.{% endif %} {% ifversion dependabot-alerts-dismissal-comment %}1. При необходимости добавьте комментарий о закрытии. Комментарий о закрытии будет добавлен на временную шкалу оповещений, и он может использоваться в качестве обоснования для аудита или отчетов. Вы можете получить или задать комментарий с помощью API GraphQL. Комментарий содержится в поле `dismissComment`. Дополнительные сведения см. в разделе [{% data variables.product.prodname_dependabot_alerts %}](/graphql/reference/objects#repositoryvulnerabilityalert) в документации по API GraphQL.
![Снимок экрана, показывающий, как закрыть оповещение с помощью раскрывающегося списка "Закрыть" с параметром "Добавить комментарий о закрытии"](/assets/images/help/repository/dependabot-alerts-dismissal-comment.png)
1. Щелкните **Закрыть оповещение**.
{% else %} ![ Выбор причины закрытия оповещения в раскрывающемся списке "Закрыть"](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png){% endif %} {% ifversion dependabot-bulk-alerts %}

### Отклонение нескольких оповещений одновременно

1. Просмотрите открытые {% data variables.product.prodname_dependabot_alerts %}. Дополнительные сведения см. в разделе [Просмотр {% data variables.product.prodname_dependabot_alerts %}](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts).
2. При необходимости отфильтруйте список оповещений, выбрав раскрывающееся меню, а затем выберите фильтр, который нужно применить. Фильтры также можно вводить в строке поиска.
3. Слева от каждого заголовка оповещения выберите оповещения, которые требуется закрыть.
   ![Снимок экрана: открытые оповещения с выделенными флажками](/assets/images/help/graphs/select-multiple-alerts.png)
4. При необходимости в верхней части списка оповещений выберите все оповещения на странице.
   ![Снимок экрана: выбраны все открытые оповещения](/assets/images/help/graphs/select-all-alerts.png)
5. Выберите раскрывающийся список "Закрыть оповещения" и щелкните причину закрытия оповещений.
   ![Снимок экрана: страница открытых оповещений с выделенным раскрывающимся списком "Закрыть оповещения"](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## Просмотр и обновление закрытых оповещений

Вы можете просматривать все открытые оповещения, а также повторно открывать оповещения, которые ранее были отклонены. Закрытые оповещения, которые уже были исправлены, невозможно открыть повторно.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Чтобы просто просмотреть закрытые оповещения, нажмите кнопку **Закрыты**.

   {%- ifversion dependabot-bulk-alerts %} ![Снимок экрана: вариант "Закрыто"](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png) {%- else %} ![Снимок экрана: вариант "Закрыто"](/assets/images/help/repository/dependabot-alerts-closed.png) {%- endif %}
1. Щелкните оповещение, которое вы хотите просмотреть или обновить.

   {%- ifversion dependabot-bulk-alerts %} ![Снимок экрана: выделенное оповещение Dependabot](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png) {%- else %} ![Снимок экрана: выделенное оповещение Dependabot](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)   {%- endif %}
2. Если оповещение было отклонено и вы хотите открыть его снова, нажмите кнопку **Открыть повторно**. Оповещения, которые уже были исправлены, невозможно открыть повторно.

   {% indented_data_reference reusables.enterprise.3-5-missing-feature spaces=3 %} ![Снимок экрана: кнопка "Повторно открыть"](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### Одновременное повторное открытие нескольких оповещений

1. Просмотр закрытого {% data variables.product.prodname_dependabot_alerts %}. Дополнительные сведения см. в разделе [Просмотр и обновление закрытых оповещений](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts) выше.
2. Слева от каждого заголовка оповещения выберите оповещения, которые требуется открыть повторно.
   ![Снимок экрана: закрытые оповещения с выделенными флажками](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. При необходимости в верхней части списка оповещений выберите все закрытые оповещения на странице.
   ![Снимок экрана: закрытые оповещения со всеми выбранными оповещениями](/assets/images/help/graphs/select-all-closed-alerts.png)
4. Щелкните **Открыть повторно**, чтобы повторно открыть оповещения. Оповещения, которые уже были исправлены, невозможно открыть повторно.
   ![Снимок экрана: закрытые оповещения с выделенной кнопкой "Открыть повторно"](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}

 
## Просмотр журналов аудита для {% data variables.product.prodname_dependabot_alerts %}

Когда участник вашей организации {% ifversion not fpt %} или корпоративный {% endif %}выполняет действие, связанное с {% data variables.product.prodname_dependabot_alerts %}, вы можете просмотреть действия в журнале аудита. Дополнительные сведения о доступе к журналу см. в разделах [Просмотр журнала аудита для вашей организации](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log){% ifversion not fpt %}и [Доступ к журналу аудита для вашего предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise). {% else %}". {% endif %} {% ifversion dependabot-alerts-audit-log %}

![Снимок экрана: журнал аудита с оповещениями Dependabot](/assets/images/help/dependabot/audit-log-UI-dependabot-alert.png){% endif %}

События в журнале аудита для {% data variables.product.prodname_dependabot_alerts %} включают такие сведения, как кто выполнил действие, какое действие было и когда было выполнено действие. {% ifversion dependabot-alerts-audit-log %} Событие также содержит ссылку на само оповещение. Когда участник вашей организации отклоняет оповещение, событие отображает причину и комментарий. {% endif %} Сведения о действиях {% data variables.product.prodname_dependabot_alerts %} см `repository_vulnerability_alert` . в категориях "[Просмотр журнала аудита для вашей организации](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert-category-actions){% ifversion not fpt %}" и "[События журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#repository_vulnerability_alert-category-actions)". {% else %}". {% endif %}
