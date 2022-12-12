---
title: Настройка сканирования кода для репозитория
shortTitle: Set up code scanning
intro: 'Вы можете настроить {% data variables.product.prodname_code_scanning %}, добавив рабочий процесс в свой репозиторий.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
ms.openlocfilehash: 8abfb992c3369242501350be20cf8e465ce090fa
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161137'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Параметры для настройки {% data variables.product.prodname_code_scanning %}

Вы сами решаете, как будут формироваться оповещения {% data variables.product.prodname_code_scanning %} и какие средства будут использоваться, на уровне репозитория. {% data variables.product.product_name %} обеспечивает полную интегрированную поддержку анализа {% data variables.product.prodname_codeql %} и поддерживает анализ с использованием сторонних средств. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning#about-tools-for-code-scanning)".

{% data reusables.code-scanning.enabling-options %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% ifversion ghes or ghae %} {% note %}

**Примечание.** Если вы хотите использовать анализ CodeQL, обратите внимание, что в этой статье описываются функции, доступные в версии действия CodeQL и в связанном пакете интерфейса командной строки CodeQL, который входит в первоначальный выпуск этой версии {% data variables.product.product_name %}. Если в вашей организации используется более поздняя версия действия CodeQL, сведения о последних функциях см. в [статье, посвященной {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository). {% ifversion not ghae %} Сведения об использовании последней версии см. в разделе [Настройка сканирования кода для устройства](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).{% endif %}

{% endnote %} {% endif %}

{% ifversion ghae %}
## Предварительные требования

Перед настройкой {% data variables.product.prodname_code_scanning %} для репозитория необходимо убедиться, что у него есть доступ хотя бы к одному локальному средству выполнения {% data variables.product.prodname_actions %}.

Владельцы предприятия, а также администраторы организации и репозитория могут добавлять локальные средства выполнения. Дополнительные сведения о локальных средствах выполнения см. в разделах [Сведения о локальных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners) и [Добавление локальных средств выполнения](/actions/hosting-your-own-runners/adding-self-hosted-runners).
{% endif %}

{% ifversion fpt or ghec %}
## Настройка {% data variables.product.prodname_code_scanning %} с помощью начальных рабочих процессов

{% data reusables.advanced-security.starter-workflows-beta %}

{% ifversion ghes or ghae %} {% note %}

**Примечание.** В этой статье описываются функции, доступные в версии действия CodeQL и в связанном пакете интерфейса командной строки CodeQL, который входит в первоначальный выпуск этой версии {% data variables.product.product_name %}. Если в вашей организации используется более поздняя версия действия CodeQL, сведения о последних функциях см. в [статье, посвященной {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository). {% ifversion not ghae %} Сведения об использовании последней версии см. в разделе [Настройка сканирования кода для устройства](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).{% endif %}

{% endnote %} {% endif %}

Начальные рабочие процессы {% data reusables.advanced-security.starter-workflow-overview %} {% data variables.product.prodname_code_scanning_capc %} доступны для репозитория, только если включена функция {% data variables.product.prodname_code_scanning %}.

{% data reusables.code-scanning.billing %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Если в репозитории уже настроен и запущен хотя бы один рабочий процесс, нажмите **Новый рабочий процесс** и перейдите к шагу 5. Если рабочие процессы для репозитория не настроены, переходите к следующему шагу.
   ![Снимок экрана: кнопка "Новый рабочий процесс"](/assets/images/help/security/actions-new-workflow-button.png)
1. Прокрутите экран вниз до категории "Безопасность" и нажмите **Настроить** под рабочим процессом, который вы хотите настроить, или **Просмотреть все**, чтобы просмотреть все доступные рабочие процессы безопасности.
   ![Снимок экрана: раздел "Безопасность рабочих процессов действий"](/assets/images/help/security/actions-workflows-security-section.png)
1. В правой части страницы рабочих процессов нажмите **Документация** и настройте рабочий процесс в соответствии со своими потребностями, следуя инструкциям на экране.
   ![Снимок экрана: вкладка "Документация" для начальных рабочих процессов](/assets/images/help/security/actions-workflows-documentation.png) Дополнительные сведения см. в разделах [Использование начальных рабочих процессов](/actions/using-workflows/using-starter-workflows#using-starter-workflows) и [Настройка {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning).

{% endif %}

## Настройка {% data variables.product.prodname_code_scanning %} вручную

{% ifversion fpt %}

Вы можете настроить {% data variables.product.prodname_code_scanning %} в любом репозитории, к которому у вас есть доступ с возможностью записи.

{% endif %}

{% data reusables.code-scanning.billing %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. Справа от пункта "Оповещения {% data variables.product.prodname_code_scanning_capc %}"щелкните **Настроить {% data variables.product.prodname_code_scanning %}** .{% ifversion ghec or ghes or ghae %} Если {% data variables.product.prodname_code_scanning %} отсутствует, попросите владельца организации или администратора репозитория включить {% data variables.product.prodname_GH_advanced_security %}.{% endif %} Дополнительные сведения см. в разделах [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) и [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).
 ![Кнопка "Настройка {% data variables.product.prodname_code_scanning %}" справа от параметра "{% data variables.product.prodname_code_scanning_capc %}" в обзоре безопасности](/assets/images/help/security/overview-set-up-code-scanning.png)
4. В разделе "Начало работы с {% data variables.product.prodname_code_scanning %}" щелкните **Настройка этого рабочего процесса** в {% data variables.code-scanning.codeql_workflow %} или стороннем рабочем процессе.
 ![Кнопка "Настроить этот рабочий процесс" в разделе "Начало работы с {% data variables.product.prodname_code_scanning %}"](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)Рабочие процессы отображается только в том случае, если они актуальны для языков программирования, обнаруженных в репозитории. {% data variables.code-scanning.codeql_workflow %} отображается всегда, но кнопка "Настроить этот рабочий процесс" включена, только если анализ {% data variables.product.prodname_codeql %} поддерживает языки, присутствующих в репозитории.
5. Чтобы настроить работу {% data variables.product.prodname_code_scanning %} по сканированию кода, измените рабочий процесс.

   Как правило, вы можете зафиксировать {% data variables.code-scanning.codeql_workflow %}, не изменяя его. Однако многие из сторонних рабочих процессов нуждаются в дополнительной настройке, поэтому перед фиксацией прочтите комментарии в рабочем процессе.

   Дополнительные сведения см. в статье [Настройка {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning).
6. Используйте раскрывающийся список **Начать фиксацию** и введите сообщение о фиксации.
 ![Начать фиксацию](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Выберите, следует ли выполнять фиксацию непосредственно в ветви по умолчанию или создайте новую ветвь и запустите запрос на вытягивание.
 ![Выбор расположения для фиксации](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Нажмите кнопку **Commit new file** (Зафиксировать новый файл) или **Propose new file** (Предложить новый файл).

В {% data variables.code-scanning.codeql_workflow %} по умолчанию {% data variables.product.prodname_code_scanning %} настроен для анализа кода каждый раз, когда вы отправляете изменения в ветвь по умолчанию или любые защищенные ветви или создаете запрос на вытягивание для ветви по умолчанию. For more information, see "<a href="/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning">Configuring {% data variables.product.prodname_code_scanning %}</a>."

Триггеры `on:pull_request` и `on:push` для проверки кода используются для разных целей. Дополнительные сведения см. в разделах [Сканирование запросов на вытягивание](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-pull-requests) и [Сканирование при отправке](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push).
## Массовая настройка {% data variables.product.prodname_code_scanning %}

С помощью скрипта {% data variables.product.prodname_code_scanning %} можно настроить сразу в нескольких репозиториях. Если вы хотите использовать сценарий для создания запросов на вытягивание, которые добавляют рабочий процесс {% data variables.product.prodname_actions %} сразу в несколько репозиториев, см. пример с использованием PowerShell в репозитории [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) или [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement), если у команды нет PowerShell, и вместо него она хочет использовать NodeJS.

## Просмотр выходных данных журнала из {% data variables.product.prodname_code_scanning %}

Настроив {% data variables.product.prodname_code_scanning %}, вы сможете просматривать результаты действий в процессе их выполнения.

{% data reusables.repositories.actions-tab %}

  Вы увидите список, содержащий запись, соответствующую рабочему процессу {% data variables.product.prodname_code_scanning %}. Текст записи — это название, которое вы присвоили своему сообщению о фиксации.

  ![Список действий с рабочим процессом {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Нажмите запись, соответствующую рабочему процессу {% data variables.product.prodname_code_scanning %}

1. Нажмите на название задания слева. Например, **Анализ (ЯЗЫК)**

  ![Выходные данные журнала из рабочего процесса {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Просматривайте журнал результатов действий в рабочем процессе по мере их выполнения.

1. После завершения всех заданий можно просмотреть сведения о всех обнаруженных оповещениях {% data variables.product.prodname_code_scanning %}. Дополнительные сведения см. в разделе [Управление оповещениями {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

{% note %}

**Примечание.** Если вы создали запрос на вытягивание, чтобы добавить рабочий процесс {% data variables.product.prodname_code_scanning %} в репозиторий, оповещения из этого запроса на вытягивание не будут отображаться непосредственно на странице {% data variables.product.prodname_code_scanning_capc %}, пока запрос не будет объединен. При появлении оповещений их можно просмотреть до объединения запроса на вытягивание, нажав на ссылку **Обнаружено оповещений: _n_** на странице {% data variables.product.prodname_code_scanning_capc %}.

![Щелкните ссылку "Найдено оповещений: n"](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

## Общие сведения о проверках запросов на вытягивание

Каждый рабочий процесс {% data variables.product.prodname_code_scanning %}, настроенный для выполнения запросов на вытягивание, всегда содержит как минимум две записи, указанные в разделе проверок запроса на вытягивание. Рабочий процесс включает по одной записи на каждую задачу анализа и одну запись для результатов анализа.

Имена проверок анализа {% data variables.product.prodname_code_scanning %} имеют вид: "ИМЯ ИНСТРУМЕНТА/ИМЯ ЗАДАНИЯ (ТРИГГЕР)." Например, для {% data variables.product.prodname_codeql %} анализ кода C++ включает запись "{% data variables.product.prodname_codeql %}/Analyze (cpp) (pull_request)". Нажмите **Сведения** в записи анализа {% data variables.product.prodname_code_scanning %}, чтобы просмотреть данные журнала. Это позволит устранить проблему, если задание анализа завершится сбоем. Например, при анализе скомпилированных языков с помощью {% data variables.product.prodname_code_scanning %} это может произойти, если действие не может компилировать код.

  ![Проверки запросов на вытягивание {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-pr-checks.png)

После завершения заданий {% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_dotcom %} определяет, добавили ли запросы на вытягивание какие-то оповещения, и добавляет в список проверок запись "Результаты {% data variables.product.prodname_code_scanning_capc %}/ИМЯ ИНСТРУМЕНТА". После того, как {% data variables.product.prodname_code_scanning %} будет выполнено хотя бы один раз, нажмите **Сведения**, чтобы просмотреть результаты анализа.

{% ifversion ghes < 3.5 or ghae %} Если вы использовали **запрос на** вытягивание для добавления {% data variables.product.prodname_code_scanning %} в репозиторий, при нажатии кнопки Сведения при проверке "{% data variables.product.prodname_code_scanning_capc %} результаты или имя средства вы увидите сообщение "Анализ не найден".

  ![Анализ сообщения о фиксации не найден](/assets/images/enterprise/3.4/repository/code-scanning-analysis-not-found.png)

В таблице отображаются одна или несколько категорий. Каждая категория относится к определенному анализу одного и того же средства и фиксации, но на разных языках или в разных частях кода. Для каждой категории в таблице показаны два анализа, которые {% data variables.product.prodname_code_scanning %} пыталось сравнить, чтобы выяснить, какие оповещения были введены или исправлены в запросе на вытягивание.

Например, на приведенном выше снимке экрана {% data variables.product.prodname_code_scanning %} обнаружило анализ фиксации объединения запроса на вытягивание, но не анализ головной фиксации главной ветви.

### Причины отображения сообщения "Анализ не найден"


После того как {% data variables.product.prodname_code_scanning %} проанализирует код в запросе на вытягивание, оно должно будет сравнить анализ тематической ветви (ветки, которую вы использовали для создания запроса на вытягивание) с анализом базовой ветви (ветви, в которую вы хотите объединить запрос на вытягивание). Это позволит {% data variables.product.prodname_code_scanning %} вычислить, какие оповещения появились с запросом на вытягивание, какие оповещения уже присутствуют в базовой ветви и помогают ли изменения в запросе на вытягивание устранить существующие оповещения. В начале, если вы используете запрос на вытягивание для добавления {% data variables.product.prodname_code_scanning %} в репозиторий, базовая ветвь еще не проанализирована, поэтому вычислить эти сведения невозможно. В этом случае при щелчке по результатам проверки в запросе на вытягивание появится сообщение "Анализ не найден".

Анализ последней фиксации в базовой ветви для запроса на вытягивание может отсутствовать и в других ситуациях. К ним относятся следующие объекты.

* Запрос на вытягивание относится к ветви, не являющейся ветвью по умолчанию, и эта ветвь не анализировалась.

  Чтобы проверить, подвергалась ли ветвь сканированию, откройте страницу {% data variables.product.prodname_code_scanning_capc %}, нажмите на раскрывающееся меню **Ветвь** и выберите соответствующую ветвь.

  ![Выбор ветви в раскрывающемся меню "Ветвь"](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  Чтобы решить проблему, добавьте имя базовой ветви в спецификацию `on:push` и `on:pull_request` в рабочий процесс {% data variables.product.prodname_code_scanning %} в этой ветви и внесите изменение, которое обновит открытый запрос на вытягивание, который вы хотите просканировать.

* Последняя фиксация в базовой ветви для запроса на вытягивание сейчас анализируется и анализ пока не доступен.

  Подождите несколько минут, а затем отправьте изменение в запрос на вытягивание, чтобы перезапустить {% data variables.product.prodname_code_scanning %}.

* При анализе последней фиксации в базовой ветви произошла ошибка и анализ для этой фиксации недоступен.

  Объедините простое изменение с базовой ветвью, чтобы запустить {% data variables.product.prodname_code_scanning %} в последней фиксации, а затем отправьте изменение в запрос на вытягивание, чтобы перезапустить {% data variables.product.prodname_code_scanning %}.

{% endif %}

## Дальнейшие действия

Настроив {% data variables.product.prodname_code_scanning %} и разрешив выполнение входящих в него операций, вы сможете:

- You can customize how {% data variables.product.prodname_code_scanning %} scans the code in your repository. Дополнительные сведения см. в разделе [Управление оповещениями {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).
- Просматривать оповещения, связанные с запросом на вытягивание, которые вы отправили после настройки {% data variables.product.prodname_code_scanning %}. Дополнительные сведения см. в разделе [Рассмотрение оповещений {% data variables.product.prodname_code_scanning %} в запросах на вытягивание](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).
- Настроить уведомления о завершении выполнений. Дополнительные сведения см. в разделе [Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options).
- Просматривать журналы, создаваемые в результате анализа {% data variables.product.prodname_code_scanning %}. Дополнительные сведения см. в статье [Просмотр журналов {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs).
- Изучать проблемы, возникающие при первоначальной настройке {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. Дополнительные сведения см. в разделе [Устранение неполадок в рабочем процессе {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow).
- Настраивать то, как {% data variables.product.prodname_code_scanning %} сканирует код в репозитории. Дополнительные сведения см. в статье [Настройка {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning).
