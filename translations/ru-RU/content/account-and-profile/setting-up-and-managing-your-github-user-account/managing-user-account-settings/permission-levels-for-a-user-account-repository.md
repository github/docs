---
title: Уровни разрешений для репозитория учетной записи пользователя
intro: 'A repository owned by a personal account has two permission levels: the repository owner and collaborators.'
redirect_from:
- /articles/permission-levels-for-a-user-account-repository
- /github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Permission user repositories
ms.openlocfilehash: 3fed88f8c31f5d3dd788f7b977c214499856f27e
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088826"
---
## <a name="about-permissions-levels-for-a-personal-account-repository"></a>Сведения об уровнях разрешений для репозитория личной учетной записи

Репозитории, принадлежащие личным учетным записям, имеют одного владельца. Разрешения на владение невозможно использовать совместно с другой личной учетной записью.

Можно также {% ifversion fpt or ghec %}приглашать{% else %}добавлять{% endif %} пользователей в {% data variables.product.product_name %} в репозиторий в качестве участников совместной работы. Дополнительные сведения см. в разделе [Приглашение участников совместной работы в личный репозиторий](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository).

{% tip %}

**Совет.** Если вам требуется более детализированный доступ к репозиторию, принадлежащему вашей личной учетной записи, рассмотрите возможность переноса репозитория в организацию. Дополнительные сведения см. в разделе [Перенос репозитория](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-personal-account).

{% endtip %}

## <a name="owner-access-for-a-repository-owned-by-a-personal-account"></a>Доступ владельца к репозиторию, принадлежащему личной учетной записи

Владелец репозитория полностью его контролирует. Помимо действий, которые может выполнять любой участник совместной работы, владелец репозитория может выполнять следующее.

| Действие | Дополнительные сведения |
| :- | :- |
| {% ifversion fpt or ghec %}Приглашение участников совместной работы{% else %}Добавление участников совместной работы{% endif %} | [Приглашение участников совместной работы в личный репозиторий](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository) |
| Изменение видимости репозитория | [Настройка видимости репозитория](/github/administering-a-repository/setting-repository-visibility) |{% ifversion fpt or ghec %}
| Ограничение взаимодействия с репозиторием | [Ограничение взаимодействий в вашем репозитории](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) |{% endif %}
| Переименование ветви, включая ветвь по умолчанию | [Переименование ветви](/github/administering-a-repository/renaming-a-branch) |
| Слияние запросов на вытягивание в защищенной ветви даже при отсутствии проверок для утверждения | [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches) |
| Удаление репозитория | [Удаление репозитория](/repositories/creating-and-managing-repositories/deleting-a-repository) |
| Управление темами репозитория | [Классификация репозитория с помощью тем](/github/administering-a-repository/classifying-your-repository-with-topics) |{% ifversion fpt or ghec %}
| Управление параметрами безопасности и анализа для репозитория | [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) |{% endif %}{% ifversion fpt or ghec %}
| Включение графа зависимостей для частного репозитория | [Изучение зависимостей репозитория](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository) |{% endif %}{% ifversion fpt or ghes > 3.1 or ghec or ghae %}
| удалять и восстанавливать пакет; | "[Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package)" |{% endif %}
| Настройка предварительной версии социальных сетей репозитория | [Настройка предварительной версии социальных сетей репозитория](/github/administering-a-repository/customizing-your-repositorys-social-media-preview) |
| Создание шаблона из репозитория | [Создание репозитория шаблонов](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository) |{% ifversion fpt or ghes or ghae or ghec %}
| Управление доступом к {% data variables.product.prodname_dependabot_alerts %} для уязвимых зависимостей | [Управление параметрами безопасности и анализа для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) |{% endif %}{% ifversion fpt or ghec %}
| Закрытие {% data variables.product.prodname_dependabot_alerts %} в репозитории | [Просмотр {% data variables.product.prodname_dependabot_alerts %} для уязвимых зависимостей](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository) |
| Управление использованием данных для частного репозитория | [Управление параметрами использования данных для частного репозитория](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)|{% endif %}
| Определение владельцев кода для репозитория | [О владельцах кода](/github/creating-cloning-and-archiving-repositories/about-code-owners) |
| Архивация репозитория | [Архивация репозиториев](/repositories/archiving-a-github-repository/archiving-repositories) |{% ifversion fpt or ghec %}
| Создание рекомендаций по безопасности | [Сведения о {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories) |
| Отображение кнопки спонсора | [Отображение кнопки спонсора в репозитории](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository) |{% endif %}
| Разрешение или запрет автоматического слияния для запросов на вытягивание | [Управление автоматическим слиянием для запросов на вытягивание в репозитории](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) | 

## <a name="collaborator-access-for-a-repository-owned-by-a-personal-account"></a>Доступ участника совместной работы к репозиторию, принадлежащему личной учетной записи

Участники совместной работы могут вытягивать (читать) содержимое из репозитория и отправлять (записывать) изменения в репозиторий.

{% note %}

**Примечание.** В частном репозитории владельцы могут предоставлять участникам совместной работы только доступ для записи. Участники совместной работы не могут иметь доступ только для чтения к репозиториям, принадлежащим личной учетной записи.

{% endnote %}

Участники совместной работы также могут выполнять следующие действия.

| Действие | Дополнительные сведения |
| :- | :- |
| Создание вилки репозитория | [Сведения о вилках](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) |{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
| Переименование ветви, отличной от ветви по умолчанию | [Переименование ветви](/github/administering-a-repository/renaming-a-branch) |{% endif %}
| Создание, изменение и удаление комментариев о фиксациях, запросах на вытягивание и проблемах репозитория | <ul><li>[Сведения о проблемах](/github/managing-your-work-on-github/about-issues)</li><li>[Комментирование запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)</li><li>[Управление комментариями, которые мешают работе](/communities/moderating-comments-and-conversations/managing-disruptive-comments)</li></ul> |
| Создание, назначение, закрытие и повторное открытие проблем в репозитории | [Управление работой с проблемами](/github/managing-your-work-on-github/managing-your-work-with-issues) |
| Управление метками для проблем и запросов на вытягивание в репозитории | [Проблемы с метками и запросы на вытягивание](/github/managing-your-work-on-github/labeling-issues-and-pull-requests) |
| Управление вехами для проблем и запросов на вытягивание в репозитории | [Создание и изменение вех для проблем и запросов на вытягивание](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests) |
| Пометка проблем или запросов на вытягивание в репозитории как повторяющихся | [Сведения о дубликатах проблем и запросов на вытягивание](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests) |
| Создание, слияние и закрытие запросов на вытягивание в репозитории | [Предложение изменений в работе с запросами на вытягивание](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests) |
| Включение и отключение автоматического слияния для запроса на вытягивание | [Автоматическое слияние для запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)
| Применение предлагаемых изменений к запросам на вытягивание в репозитории |[Внедрение отзывов в запрос на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) |
| Создание запроса на вытягивание из вилки репозитория | [Создание запроса на вытягивание из вилки](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) |
| Отправка проверки запроса на вытягивание, которая влияет на возможность слияния для запроса на вытягивание | [Просмотр предлагаемых изменений в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) |
| Создание и изменение вики-сайта для репозитория | [Сведения о вики-сайтах](/communities/documenting-your-project-with-wikis/about-wikis) |
| Создание и изменение выпусков для репозитория | [Управление выпусками в репозитории](/github/administering-a-repository/managing-releases-in-a-repository) |
| Выполнение роли владельца кода для репозитория | [О владельцах кода](/articles/about-code-owners) |{% ifversion fpt or ghae or ghec %}
| Публикация, просмотр или установка пакетов | [Публикация пакетов и управление ими](/github/managing-packages-with-github-packages/publishing-and-managing-packages) |{% endif %}
| Удаление себя в качестве участника совместной работы из репозитория | [Удаление себя из репозитория участника совместной работы](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository) |

## <a name="further-reading"></a>Дополнительные материалы

- [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
