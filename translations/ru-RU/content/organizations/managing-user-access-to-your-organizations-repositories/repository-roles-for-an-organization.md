---
title: Роли репозиториев для организации
intro: 'Вы можете настроить доступ к каждому репозиторию в организации, назначив роли с детализированными разрешениями, а также предоставив пользователям доступ к необходимым возможностям и задачам.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/repository-permission-levels-for-an-organization-early-access-program
  - /articles/repository-permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization
  - /organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization
  - /organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Repository roles
ms.openlocfilehash: 474c431aa6df0a942dcf377d256a0ce76ad2a0f8
ms.sourcegitcommit: 00814c80b0f5fa76188c378a1196ef8fc5288113
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120738'
---
## Роли репозиториев для организаций

Вы можете предоставить участникам организации, помимо участников совместной работы, и группам пользователей различные уровни доступа к репозиториям, принадлежащим организации, путем назначения им ролей. Выберите роль, которая лучше подходит каждому пользователю или группе в проекте, не предоставляя пользователям больше прав, чем требуется.

Роли для репозитория организации по возрастанию:
- **Чтение** — рекомендуется для участников, которые не участвуют в написании кода, но хотят просмотреть или обсудить проект.
- **Рассмотрение** — рекомендуется для участников, которым требуется заблаговременное управление проблемами и запросами на вытягивание без доступа на запись.
- **Запись** — рекомендуется для участников, которые активно вносят свой код в проект.
- **Обслуживание** — рекомендуется для руководителей проектов, которым требуется управление репозиторием без доступа к конфиденциальным или разрушительным действиям.
- **Администратор** — рекомендуется для пользователей, которым необходим полный доступ к проекту, включая возможность конфиденциальных и разрушительных действий, таких как управление безопасностью или удаление репозитория.

{% ifversion fpt %} Если ваша организация использует {% data variables.product.prodname_ghe_cloud %}, вы можете создать пользовательские роли в репозитории. Дополнительные сведения см. в статье [Управление пользовательскими ролями в репозитории для организации](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) в документации по {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec or ghes > 3.4 or ghae > 3.4 %} Вы можете создавать пользовательские роли репозитория. Дополнительные сведения см. в разделе [Управление ролями репозитория для организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{% endif %}

Владельцы организации могут задать базовые разрешения, которые применяются ко всем участникам организации при доступе ко всем репозиториям организации. Дополнительные сведения см. в статье [Настройка базовых разрешений для организации](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions).

Владельцы организации могут дополнительно ограничить доступ к определенным параметрам и действиям в пределах своей организации. Дополнительные сведения о возможностях конкретных настроек см. в статье [Управление настройками для организации](/articles/managing-organization-settings).

Помимо управления параметрами на уровне организации, владельцы организации имеют доступ с правами администратора к каждому репозиторию, принадлежащему этой организации. Дополнительные сведения см. в статье "[Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% warning %}

**Предупреждение.** Если в репозиторий добавлен ключ развертывания, любой пользователь с правильным закрытым ключом может выполнять чтение или запись (в зависимости от параметров ключа) в этот репозиторий, даже если он будет удален из организации.

{% endwarning %}

## Разрешения для каждой роли

{% ifversion fpt %} Некоторые функции, перечисленные ниже, доступны только организациям, использующим {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghes or ghec %} {% note %}

**Примечание.** Необходимые роли для использования функций безопасности перечислены в разделе [Требования к доступу для функций безопасности](#access-requirements-for-security-features) ниже.

{% endnote %} {% endif %}

| Действие репозитория | Чтение | Рассмотрение | запись | Техническое обслуживание | Административный |
|:---|:---:|:---:|:---:|:---:|:---:|
| Управление доступом [людей](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository), [команд](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository) и [внешних участников совместной работы](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization) к репозиторию | | | | | **✔️** |
| Извлечение данных из репозиториев, назначенных пользователю или команде | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Создание вилок в репозиториях, назначенных пользователю или команде | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Изменение и удаление собственных комментариев | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Открывать проблемы | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Закрытие проблем, которые были открыты собой | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Повторное открытие проблем, которые были закрыты собой | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Назначение в качестве уполномоченного для проблемы | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Отправка запросов на вытягивание из вилок в репозиториях, назначенных команде | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Отправка запросов на включение изменений](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Утверждение или запрос изменений в запросе на вытягивание с обязательными проверками](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews) | | | **✔️** | **✔️** | **✔️** |
| [Применение предложенных изменений](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) к запросам на вытягивание | | | **✔️** | **✔️** | **✔️** |
| Просмотр опубликованных выпусков | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Просмотр [запусков рабочего процесса GitHub Actions](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| Изменение вики-сайтов в общедоступных репозиториях | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Правка вики-сайтов в частных репозиториях | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [Сообщение об оскорбительном или нежелательном содержимом](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| Применение и закрытие меток | | **✔️** | **✔️** | **✔️** | **✔️** |
| Создание, изменение и удаление меток | | | **✔️** | **✔️** | **✔️** |
| Закрытие, повторное открытие всех проблем и запросов на вытягивание, назначение уполномоченных для них | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Включение и отключение автоматического слияния для запроса на вытягивание](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) | | | **✔️** | **✔️** | **✔️** |
| Применение вех |  | **✔️** | **✔️** | **✔️** | **✔️** |
| Пометка [дубликатов проблем и запросов на вытягивание](/articles/about-duplicate-issues-and-pull-requests)| | **✔️** | **✔️** | **✔️** | **✔️** |
| Запрос [проверки запросов на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) | | **✔️** | **✔️** | **✔️** | **✔️** |
| Слияние [запросов на вытягивание](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) | | | **✔️** | **✔️** | **✔️** |
| Отправка (запись) данных в репозитории, назначенные пользователю или команде | | | **✔️** | **✔️** | **✔️** |
| Изменение и удаление комментариев к фиксациям, запросам на вытягивание и проблемам | | | **✔️** | **✔️** | **✔️** |
| [Скрытие комментариев любого пользователя](/communities/moderating-comments-and-conversations/managing-disruptive-comments) | | | **✔️** | **✔️** | **✔️** |
| [Блокировка обсуждений](/communities/moderating-comments-and-conversations/locking-conversations) | | | **✔️** | **✔️** | **✔️** |
| Передача проблем (дополнительные сведения см. в статье [Передача проблемы в другой репозиторий](/articles/transferring-an-issue-to-another-repository)) |  | | **✔️** | **✔️** | **✔️** |
| [Выполнение роли владельца кода для репозитория](/articles/about-code-owners) | | | **✔️** | **✔️** | **✔️** |
| [Пометка черновика запроса на вытягивание как готового к просмотру](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| [Преобразование запроса на вытягивание в черновик](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| Создание [проверок состояния](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Создание, изменение, запуск, повторное выполнение и отмена [рабочих процессов GitHub Actions](/actions/automating-your-workflow-with-github-actions/) | | | **✔️** | **✔️** | **✔️** |{% endif %}
| Создание и редактирование выпусков | | | **✔️** | **✔️** | **✔️** |
| Просмотр черновиков выпусков | | | **✔️** | **✔️** | **✔️** |
| Изменение описания репозитория | | | | **✔️** | **✔️** |{% ifversion fpt or ghae or ghec %}
| [Просмотр и установка пакетов](/packages/publishing-and-managing-packages) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Публикация пакетов](/packages/publishing-and-managing-packages/publishing-a-package) | | | **✔️** | **✔️** | **✔️** |
| [Удаление и восстановление пакетов](/packages/learn-github-packages/deleting-and-restoring-a-package) | | |  |  | **✔️** | {% endif %}
| Управление [разделами](/articles/classifying-your-repository-with-topics) | | | | **✔️** | **✔️** |
| Включение вики-сайтов и ограничение вики-редакторов | | | | **✔️** | **✔️** |
| Включение досок для проекта | | | | **✔️** | **✔️** |
| Настройка [слияния запросов на вытягивание](/articles/configuring-pull-request-merges) | | | | **✔️** | **✔️** |
| Настройка [источников публикации для сайтов {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-github-pages) | | | | **✔️** | **✔️** |
| [Управление правилами защиты ветвей](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) | | | | | **✔️** |
| [Отправка данных в защищенные ветви](/articles/about-protected-branches) | | | | **✔️** | **✔️** |
| Слияние запросов на вытягивание в защищенных ветвях, даже при отсутствии утверждающих отзывов | | | | | **✔️** |{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %}
| Создание тегов, которые соответствуют [правилу защиты тегов](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) | | | | **✔️** | **✔️** |
| Удаление тегов, которые соответствуют [правилу защиты тегов](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) | | | | | **✔️** |{% endif %}
| [Создание и изменение социальных карт в репозитории](/articles/customizing-your-repositorys-social-media-preview) | | | | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Ограничение [взаимодействий в репозитории](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)| | | | **✔️** | **✔️** |{% endif %}
| Удаление проблемы (см. статью [Удаление проблемы](/articles/deleting-an-issue)) | | | | | **✔️** |
| [Определение владельцев кода для репозитория](/articles/about-code-owners) | | | | | **✔️** |
| Добавление репозитория в команду (подробнее см. статью [Управление доступом команды к репозиторию организации](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#giving-a-team-access-to-a-repository)) | | | | | **✔️** |
| [Управление доступом внешних участников совместной работы к репозиторию](/articles/adding-outside-collaborators-to-repositories-in-your-organization) | | | | | **✔️** |
| [Изменение видимости репозитория](/articles/restricting-repository-visibility-changes-in-your-organization) | | | | | **✔️** |
| Преобразование репозитория в шаблон (см. статью [Создание шаблона репозитория](/articles/creating-a-template-repository)) | | | | | **✔️** |
| Изменение параметров репозитория | | | | | **✔️** |
| Управление доступом команд и участников совместной работы к репозиторию | | | | | **✔️** |
| Внесение изменений в ветвь репозитория по умолчанию | | | | | **✔️** |
| Переименование ветви репозитория по умолчанию (см. статью [Переименование ветви](/github/administering-a-repository/renaming-a-branch)) | | | | | **✔️** |
| Переименование любой ветви, кроме ветви репозитория по умолчанию (см. статью [Переименование ветви](/github/administering-a-repository/renaming-a-branch)) | | | **✔️** | **✔️** | **✔️** |
| Управление веб-перехватчиками и развертывание ключей | | | | | **✔️** |{% ifversion fpt or ghec %}
| [Управление параметрами использования данных для частного репозитория](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) | | | | | **✔️** |{% endif %}
| [Управление политикой создания вилок для репозитория](/github/administering-a-repository/managing-the-forking-policy-for-your-repository) | | | | | **✔️** |
| [Передача репозиториев в организацию](/articles/restricting-repository-creation-in-your-organization) | | | | | **✔️** |
| [Удаление репозиториев организации или передача другим владельцам](/articles/setting-permissions-for-deleting-or-transferring-repositories) | | | | | **✔️** |
| [Помещения репозиториев в архив](/articles/about-archiving-repositories) | | | | | **✔️** |{% ifversion fpt or ghec %}
| Отображение кнопки "Спонсировать" (см. статью [Отображение кнопки "Спонсировать" в репозитории](/articles/displaying-a-sponsor-button-in-your-repository)). | | | | | **✔️** |{% endif %}
| Создание автоматических ссылок на внешние ресурсы, такие как Jira или Zendesk (см. статью [Настройка автоматических ссылок на внешние ресурсы](/articles/configuring-autolinks-to-reference-external-resources)) | | | | | **✔️** |{% ifversion discussions %}
| [Включение {% data variables.product.prodname_discussions %}](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) в репозитории | | | | **✔️** | **✔️** |
| [Создание и изменение категорий](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) для {% data variables.product.prodname_discussions %} | | | | **✔️** | **✔️** |
| [Перемещение обсуждения в другую категорию](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Передача обсуждения](/discussions/managing-discussions-for-your-community/managing-discussions) в новый репозиторий| | | **✔️** | **✔️** | **✔️** |
| [Управление закрепленными обсуждениями](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Массовое преобразование проблем в обсуждения](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Блокировка и разблокировка обсуждений](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Преобразование отдельных вопросов в обсуждения](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Создание новых обсуждений и комментариев к существующим обсуждениям](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Удаление обсуждения](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion) | | **✔️** | | **✔️** | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| Создание [пространств кода](/codespaces/about-codespaces) | | | **✔️** | **✔️** | **✔️** |{% endif %}

### Требования к доступу для функций безопасности

В этом разделе описывается доступ, необходимый для использования функций безопасности, таких как {% data variables.product.prodname_advanced_security %}.

| Действие репозитория | Чтение | Рассмотрение | запись | Техническое обслуживание | Административный |
|:---|:---:|:---:|:---:|:---:|:---:| 
| Получение [{% data variables.product.prodname_dependabot_alerts %} для уязвимых зависимостей в репозитории ](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies). | | | | | **✔️** |
| [Закрытие {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository) | | | | | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [Назначение дополнительных пользователей или команд для получения оповещений системы безопасности](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| Создание [рекомендаций по безопасности](/code-security/security-advisories/about-github-security-advisories) | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %} <!--Not available for FPT-->
| Управление доступом к возможностям {% data variables.product.prodname_GH_advanced_security %} (см. статью [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)) | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}<!--Set at site-level for GHES and GHAE-->
| [Включение графа зависимостей](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository) для частного репозитория | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [Просмотр проверок зависимостей](/code-security/supply-chain-security/about-dependency-review) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| [Просмотр оповещений функции {% data variables.product.prodname_code_scanning %} в запросах на вытягивание](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Перечисление, закрытие и удаление оповещений {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository) | | | **✔️** | **✔️** | **✔️** |
| [Просмотр и закрытие оповещений {% data variables.product.prodname_secret_scanning %} в репозитории](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [Разрешение, отмена или повторное открытие оповещений функции {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [Назначение дополнительных пользователей или команд для получения оповещений функции {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) в репозиториях | | | | | **✔️** |{% endif %}

[1] Пользователи с правами на запись в репозиторий и обслуживание репозитория могут просматривать только сведения об оповещениях для собственных фиксаций.

## Дополнительные материалы

- [Управление доступом к репозиториям вашей организации](/articles/managing-access-to-your-organization-s-repositories)
- [Добавление сторонних участников совместной работы в репозитории в вашей организации](/articles/adding-outside-collaborators-to-repositories-in-your-organization)
- [Разрешения для доступа к доске проекта в организации](/articles/project-board-permissions-for-an-organization)
