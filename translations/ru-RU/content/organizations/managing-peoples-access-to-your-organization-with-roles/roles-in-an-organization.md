---
title: Роли в организации
intro: 'Владельцы организации могут назначать роли отдельным пользователям и командам, предоставляя им различные наборы разрешений в организации.'
redirect_from:
  - /articles/permission-levels-for-an-organization-early-access-program
  - /articles/permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization
  - /organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Roles in an organization
ms.openlocfilehash: f9e5d411c7a7a16e22abcc660f2761f1bfd6cf7d
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180080'
---
## Роли
{% data reusables.organizations.about-roles %}

Роли на уровне репозитория предоставляют участникам организации, сторонним участникам совместной работы и командам пользователей различные уровни доступа к репозиториям. Дополнительные сведения см. в разделе [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

Роли уровня команды — это роли, предоставляющие разрешения на управление командой. Вы можете назначить для любого отдельного участника команды роль координатора команды, которая предоставляет ряд административных разрешений для команды. Дополнительные сведения см. в разделе [Назначение роли координатора команды участнику команды](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member).

Роли уровня организации — это наборы разрешений, которые можно назначить отдельным лицам или командам для управления как организацией, так и ее репозиториями, командами и параметрами. Дополнительные сведения обо всех ролях, доступных на уровне организации, см. в разделе [Роли организации](#about-organization-roles).

## Роли организации

Вы можете назначать для отдельных лиц или команд различные роли уровня организации, чтобы управлять доступом участников к своей организации и ее ресурсам. Дополнительные сведения об отдельных разрешениях, включенных в каждую роль, см. в разделе [Разрешения для ролей организации](#permissions-for-organization-roles).

{% ifversion enterprise-owner-join-org %} Если ваша организация относится к корпоративной учетной записи, владельцы этого предприятия могут присоединиться к вашей организации с любой ролью. Дополнительные сведения см. в статье [Управление ролью в организации, принадлежащей предприятию](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).
{% endif %}

### Владельцы организации
Владельцы организации имеют полный административный доступ к вашей организации. Предоставление этой роли должно быть ограничено, но как минимум у двух человек в вашей организации она должна быть. Дополнительные сведения см. в статье [Поддержание непрерывности владения для организации](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization).

### Участники организации
По умолчанию для участника организации предоставляется неадминистративная роль для пользователей в организации. По умолчанию участники организации имеют ряд разрешений, включая возможность создавать репозитории и доски проектов.

{% ifversion fpt or ghec %}
### Модераторы организации
Модераторы — это участники организации, которые в дополнение к своим разрешениям для участников могут блокировать и разблокировать авторов, не являющихся участниками, устанавливать ограничения для взаимодействия и скрывать комментарии в общедоступных репозиториях, принадлежащих организации. Дополнительные сведения см. в разделе "[Управление модераторами в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)".

### Менеджеры по выставлению счетов
Менеджеры по выставлению счетов — это пользователи, которые могут управлять параметрами выставления счетов для вашей организации, такими как платежная информация. Это удобно, так как у членов вашей организации обычно нет доступа к ресурсам выставления счетов. Дополнительные сведения см. в статье [Добавление менеджера по выставлению счетов в организацию](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).

{% endif %}

{% ifversion security-managers %}
### Менеджеры по безопасности

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

Если в вашей организации есть команда по обеспечению безопасности, вы можете использовать роль менеджера по безопасности, чтобы предоставить участникам команды минимально необходимый доступ к организации. Дополнительные сведения см. в статье [Управление менеджерами по безопасности в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
{% endif %}
### Менеджеры {% data variables.product.prodname_github_app %}
По умолчанию только владельцы организации могут управлять параметрами {% data variables.product.prodname_github_apps %}, принадлежащих организации. Чтобы разрешить дополнительным пользователям управлять {% data variables.product.prodname_github_apps %}, принадлежащими организации, владелец может предоставить им разрешения менеджера {% data variables.product.prodname_github_app %}.

При назначении пользователя менеджером {% data variables.product.prodname_github_app %} в организации вы можете предоставить ему разрешение для доступа, чтобы управлять параметрами некоторых или всех {% data variables.product.prodname_github_apps %}, принадлежащих организации. Дополнительные сведения см. в разделе:

- [Добавление менеджеров приложений GitHub в организации](/articles/adding-github-app-managers-in-your-organization)
- [Удаление менеджеров приложений GitHub в организации](/articles/removing-github-app-managers-from-your-organization)

### Сторонние участники совместной работы
Чтобы обеспечить безопасность данных организации при предоставлении доступа к репозиториям, можно добавить *внешних участников совместной работы*. {% data reusables.organizations.outside_collaborators_description %}

## Разрешения для ролей организации

{% ifversion fpt %} Некоторые функции, перечисленные ниже, доступны только организациям, использующим {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghec %}
<!-- Free/Pro/Team and GHEC versions have extra columns for Moderators and Billing managers-->

| Разрешение организации | Владельцы | Элементы | Модераторы | Менеджеры по выставлению счетов | Менеджеры по безопасности |
|:------------------------|:------:|:-------:|:----------:|:----------------:|:-----------------:|
| Создание репозиториев (см. статью [Ограничение создания репозиториев в организации](/articles/restricting-repository-creation-in-your-organization)) | **X** | **X** | **X** |  | **X**  |
| Просмотр и изменение данных для выставления счетов | **X** |  |  | **X** |  |
| Приглашение пользователей для присоединения к организации | **X** |  |  |  |  |
| Изменение и отмена приглашений для присоединения к организации | **X** |  |  |  |  |
| Удаление участников из организации | **X** |  |  |  |  |
| Восстановление бывших участников организации | **X** |  |  |  |  |
| Добавление и удаление пользователей изо **всех команд** | **X** |  |  |  |  |
| Продвижение участников организации до *координатора команды* | **X** |  |  |  |  |
| Настройка назначений проверки кода (см. статью [Управление назначением проверки кода для команды](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)) | **X** |  |  |  |  |
| Установка запланированных напоминаний (см. статью [Управление запланированными напоминаниями для запросов на вытягивание](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)) | **X** |  |  |  |  |
| Добавление участников совместной работы во **все репозитории** | **X** |  |  |  |  |
| Доступ к журналу аудита организации | **X** |  |  |  |  |
| Изменение страницы профиля организации (см. статью [Сведения о профиле организации](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)) | **X** |  |  |  |  |{% ifversion ghec %}
| Проверка доменов организации (см. статью [Проверка домена организации](/articles/verifying-your-organization-s-domain)) | **X** |  |  |  |  |
| Ограничение уведомлений по электронной почте для проверенных или утвержденных доменов (см. статью [Ограничение уведомлений по электронной почте для организации](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)) | **X** |  |  |  |  |{% endif %}
| Удаление **всех команд** | **X** |  |  |  |  |
| Удаление учетной записи организации, включая все репозитории | **X** |  |  |  |  |
| Создание команд (см. статью [Настройка разрешений на создание команды в организации](/articles/setting-team-creation-permissions-in-your-organization)) | **X** | **X** | **X** |  | **X**  |
| [Перемещение команд в иерархии организации](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** |  |  |  |  |
| Создание досок проекта (см. статью [Разрешения для доступа к доске проекта в организации](/articles/project-board-permissions-for-an-organization)) | **X** | **X** | **X** |  | **X**  |
| Просмотр всех участников и команд организации | **X** | **X** | **X** |  | **X**  |
| @mention любой видимой команды | **X** | **X** | **X** |  | **X**  |
| Возможность создания *координатора команды* | **X** | **X** | **X** |  | **X** |{% ifversion ghec %}
| Просмотр аналитических сведений организации (см. статью [Просмотр аналитических сведений для организации](/articles/viewing-insights-for-your-organization)) | **X** | **X** | **X** |  | **X**  |{% endif %}
| Просмотр и публикация общедоступных командных обсуждений для **всех команд** (см. статью [Сведения об обсуждениях в команде](/organizations/collaborating-with-your-team/about-team-discussions)) | **X** | **X** | **X** |  | **X**  |
| Просмотр и публикация частных командных обсуждений для **всех команд** (см. статью [Сведения об обсуждениях в команде](/organizations/collaborating-with-your-team/about-team-discussions)) | **X** |  |  |  |  |
| Изменение и удаление командных обсуждений во **всех командах** (см. статью [Управление отвлекающими комментариями](/communities/moderating-comments-and-conversations/managing-disruptive-comments)) | **X** |  |  |  |  |
| Отключение обсуждений в команде для организации (см. статью [Отключение обсуждений в команде для организации](/articles/disabling-team-discussions-for-your-organization)) | **X** |  |  |  |  |
| Скрытие комментариев о записываемых фиксациях, запросах на вытягивание и проблемах (см. статью [Управление отвлекающими комментариями](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)) | **X** | **X** | **X** |  | **X** |
| Скрытие комментариев обо _всех_ фиксациях, запросах на вытягивание и проблемах (см. статью [Управление отвлекающими комментариями](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)) | **X** |  | **X** |  | **X** |
| Блокировка и разблокировка авторов, не являющихся участниками (см. статью [Блокировка пользователя из организации](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)) | **X** |  | **X** |  |  |
| Ограничение взаимодействий для определенных пользователей в общедоступных репозиториях (см. статью [Ограничение взаимодействий в организации](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)) | **X** |  | **X** |  |  |{% ifversion ghec %}
| Управление просмотром аналитических сведений о зависимостях организации (см. статью [Изменение видимости аналитических сведений о зависимостях организации](/articles/changing-the-visibility-of-your-organizations-dependency-insights)) | **X** |  |  |  |  |{% endif %}
| Настройка изображения профиля команды во **всех командах** (см. статью [Настройка изображения профиля команды](/articles/setting-your-team-s-profile-picture)) | **X** |  |  |  |  |
| Учетные записи спонсоров и управление спонсорством организации (см. статью [Спонсорская поддержка участников разработки с открытым кодом](/sponsors/sponsoring-open-source-contributors)) | **X** |  |  | **X** | **X**  |
| Управление обновлениями по электронной почте из спонсируемых учетных записей (см. статью [Управление обновлениями из учетных записей спонсоров организации](/organizations/managing-organization-settings/managing-updates-from-accounts-your-organization-sponsors)) | **X** |  |  |  |  |
| Применение атрибута спонсорской поддержки для другой организации (дополнительные сведения см. в статье [Применение атрибута спонсорской поддержки для организации](/sponsors/sponsoring-open-source-contributors/attributing-sponsorships-to-your-organization)) | **X** |  |  |  |  |
| Управление публикацией сайтов {% data variables.product.prodname_pages %} из репозиториев в организации (см. статью [Управление публикацией сайтов {% data variables.product.prodname_pages %} для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)) | **X** |  |  |  |  |
| Управление параметрами безопасности и анализа (см. статью [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)) | **X** |  |  |  | **X** |
| Просмотр общих сведений о безопасности для организации (см. статью [Общие сведения о безопасности](/code-security/security-overview/about-the-security-overview)) | **X** |  |  |  | **X** |{% ifversion ghec %}
| Включение и принудительное применение [единого входа SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on) | **X** |  |  |  |  |
| [Управление SAML-доступом пользователей к организации](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) | **X** |  |  |  |  |
| Управление центрами сертификации SSH в организации (см. статью [Управление центрами сертификации SSH в организации](/articles/managing-your-organizations-ssh-certificate-authorities)) | **X** |  |  |  |  |{% endif %}
| Перенос репозиториев | **X** |  |  |   |  |
| Приобретение, установка, управление выставлением счетов и отмена приложений {% data variables.product.prodname_marketplace %} | **X** |  |  |  |  |
| Вывод списка приложений в {% data variables.product.prodname_marketplace %} | **X** |  |  |  |  |
| Получение [{% data variables.product.prodname_dependabot_alerts %} о небезопасных зависимостях](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) для всех репозиториев организации | **X** |  |  |  | **X** |
| Управление {% data variables.product.prodname_dependabot_security_updates %} (см. статью [Сведения о {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)) | **X** |  |  |  | **X** |
| [Управление политикой создания вилок](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) | **X** |  |  |  |  |
| [Ограничение действия в общедоступных репозиториях в организации](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) | **X** |  |  |  |  |
| Вытягивание (чтение) *всех репозиториев* в организации | **X** |  |  |  | **X** |
| Отправка (запись) и клонирование (копирование) *всех репозиториев* в организации | **X** |  |  |  |  |
| Преобразование участников организации во [внешних участников совместной работы](#outside-collaborators) | **X** |  |  |  |  |
| [Просмотр пользователей с доступом к репозиторию организации](/articles/viewing-people-with-access-to-your-repository) | **X** |  |  |  |  |{% ifversion ghec %}
| [Экспорт списка пользователей с доступом к репозиторию организации](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** |  |  |  |  |{% endif %}
| Управление именем ветви по умолчанию (см. статью [Управление именем ветви по умолчанию для репозиториев в организации](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)) | **X** |  |  |  |  |
| Управление метками по умолчанию (см. статью [Управление метками по умолчанию для репозиториев в организации](/articles/managing-default-labels-for-repositories-in-your-organization)) | **X** |  |  |  |  |{% ifversion ghec %}
| Включение синхронизации команд (см. статью [Управление синхронизацией команд для организации](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)) | **X** |  |  |  |  |{% endif %}
| Управление проверками запросов на вытягивание в организации (см. статью [Управление проверками запросов на вытягивание в организации](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)) | **X** |  |  |  |  |

{% elsif ghes or ghae %}
<!-- GHES 3.3+ and eventual GHAE release don't have the extra columns for Moderators and Billing managers. -->

| Действие организации | Владельцы | Элементы | Менеджеры по безопасности |
|:--------------------|:------:|:-------:|:-------:|
| Приглашение пользователей для присоединения к организации | **X** |  |  |
| Изменение и отмена приглашений для присоединения к организации | **X** |  |  |
| Удаление участников из организации | **X** | | |  |
| Восстановление бывших участников организации | **X** | | |  |
| Добавление и удаление пользователей изо **всех команд** | **X** |  |  |
| Продвижение участников организации до *координатора команды* | **X** |  |  |
| Настройка назначений проверки кода (см. статью [Управление назначением проверки кода для команды](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)) | **X** |  |  |
| Добавление участников совместной работы во **все репозитории** | **X** |  |  |
| Доступ к журналу аудита организации | **X** |  |  |
| Изменение страницы профиля организации (см. статью [Сведения о профиле организации](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)) | **X** |  |  |{% ifversion ghes %}
| Проверка доменов организации (см. статью [Проверка домена организации](/articles/verifying-your-organization-s-domain)) | **X** |  |  |
| Ограничение уведомлений по электронной почте для проверенных или утвержденных доменов (см. статью [Ограничение уведомлений по электронной почте для организации](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)) | **X** |  |  |{% endif %}
| Удаление **всех команд** | **X** |  |  |
| Удаление учетной записи организации, включая все репозитории | **X** |  |  |
| Создание команд (см. статью [Настройка разрешений на создание команды в организации](/articles/setting-team-creation-permissions-in-your-organization)) | **X** | **X** | **X**  |
| Просмотр всех участников и команд организации | **X** | **X** | **X**  |
| @mention любой видимой команды | **X** | **X** | **X**  |
| Возможность создания *координатора команды* | **X** | **X** | **X**  |
| Перенос репозиториев | **X** | |  |
| Управление параметрами безопасности и анализа (см. статью [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)) | **X** | | **X** |{% ifversion ghes %}
| Просмотр общих сведений о безопасности для организации (см. статью [Общие сведения о безопасности](/code-security/security-overview/about-the-security-overview)) | **X** | | **X** |{% endif %}{% ifversion ghes %}
| Управление {% data variables.product.prodname_dependabot_security_updates %} (см. статью [Сведения о {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)) | **X** | | **X** |{% endif %}
| Управление центрами сертификации SSH в организации (см. статью [Управление центрами сертификации SSH в организации](/articles/managing-your-organizations-ssh-certificate-authorities)) | **X** |  |  |
| Создание досок проекта (см. статью [Разрешения для доступа к доске проекта в организации](/articles/project-board-permissions-for-an-organization)) | **X** | **X** | **X** |
| Просмотр и публикация общедоступных командных обсуждений для **всех команд** (см. статью [Сведения об обсуждениях в команде](/organizations/collaborating-with-your-team/about-team-discussions)) | **X** | **X** | **X**  |
| Просмотр и публикация частных командных обсуждений для **всех команд** (см. статью [Сведения об обсуждениях в команде](/organizations/collaborating-with-your-team/about-team-discussions)) | **X** |  |  |
| Изменение и удаление командных обсуждений во **всех командах** (дополнительные сведения см. в статье [Управление отвлекающими комментариями](/communities/moderating-comments-and-conversations/managing-disruptive-comments)) | **X** |  |  |  |
| Скрытие комментариев о фиксациях, запросах на вытягивание и проблемах (см. статью [Управление отвлекающими комментариями](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)) | **X** | **X** | **X**  |
| Отключение обсуждений в команде для организации (см. статью [Отключение обсуждений в команде для организации](/articles/disabling-team-discussions-for-your-organization)) | **X** |  |  |
| Настройка изображения профиля команды во **всех командах** (см. статью [Настройка изображения профиля команды](/articles/setting-your-team-s-profile-picture)) | **X** |  |  |{% ifversion ghes %}
| Управление публикацией сайтов {% data variables.product.prodname_pages %} из репозиториев в организации (см. статью [Управление публикацией сайтов {% data variables.product.prodname_pages %} для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)) | **X** | |  |{% endif %}
| [Перемещение команд в иерархии организации](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Вытягивание (чтение) *всех репозиториев* в организации | **X** | | **X** |
| Отправка (запись) и клонирование (копирование) *всех репозиториев* в организации | **X** | |  |
| Преобразование участников организации во [внешних участников совместной работы](#outside-collaborators) | **X** | |  |
| [Просмотр пользователей с доступом к репозиторию организации](/articles/viewing-people-with-access-to-your-repository) | **X** | |  |
| [Экспорт списка пользователей с доступом к репозиторию организации](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |  |
| Управление метками по умолчанию (см. статью [Управление метками по умолчанию для репозиториев в организации](/articles/managing-default-labels-for-repositories-in-your-organization)) | **X** | |  |{% ifversion pull-request-approval-limit %}
| Управление проверками запросов на вытягивание в организации (см. статью [Управление проверками запросов на вытягивание в организации](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)) | **X** |  | |  |{% endif %}
{% ifversion ghae %}| Управление списками разрешенных IP-адресов (см. [раздел Ограничение сетевого трафика для предприятия с помощью списка разрешенных IP-адресов](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)) | **X** | |  |{% endif %}

{% else %}
<!-- GHES and GHAE older versions don't have columns for Moderators, Billing managers or Security managers. -->

| Действие организации | Владельцы | Элементы |
|:--------------------|:------:|:-------:|
| Приглашение пользователей для присоединения к организации | **X** |  |
| Изменение и отмена приглашений для присоединения к организации | **X** |  |
| Удаление участников из организации | **X** | | |
| Восстановление бывших участников организации | **X** | | |
| Добавление и удаление пользователей изо **всех команд** | **X** |  |  
| Продвижение участников организации до *координатора команды* | **X** |  |
| Настройка назначений проверки кода (см. статью [Управление настройкой проверки кода для команды](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)) | **X** |  |
| Добавление участников совместной работы во **все репозитории** | **X** |  |
| Доступ к журналу аудита организации | **X** |  |
| Изменение страницы профиля организации (см. статью [Сведения о профиле организации](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)) | **X** |  |  |{% ifversion ghes %}
| Проверка доменов организации (см. статью [Проверка домена организации](/articles/verifying-your-organization-s-domain)) | **X** |  |
| Ограничение уведомлений по электронной почте для проверенных или утвержденных доменов (см. статью [Ограничение уведомлений по электронной почте для организации](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)) | **X** |  |{% endif %}
| Удаление **всех команд** | **X** |  |
| Удаление учетной записи организации, включая все репозитории | **X** |  |
| Создание команд (см. статью [Настройка разрешений на создание команды в организации](/articles/setting-team-creation-permissions-in-your-organization)) | **X** | **X** |
| Просмотр всех участников и команд организации | **X** | **X** |
| @mention любой видимой команды | **X** | **X** |
| Возможность создания *координатора команды* | **X** | **X** |
| Перенос репозиториев | **X** | |
| Управление центрами сертификации SSH в организации (см. статью [Управление центрами сертификации SSH в организации](/articles/managing-your-organizations-ssh-certificate-authorities)) | **X** |  |
| Создание досок проекта (см. статью [Разрешения для доступа к доске проекта в организации](/articles/project-board-permissions-for-an-organization)) | **X** | **X** | |
| Просмотр и публикация общедоступных командных обсуждений для **всех команд** (см. статью [Сведения об обсуждениях в команде](/organizations/collaborating-with-your-team/about-team-discussions)) | **X** | **X** |  |
| Просмотр и публикация частных командных обсуждений для **всех команд** (см. статью [Сведения об обсуждениях в команде](/organizations/collaborating-with-your-team/about-team-discussions)) | **X** |  |  |
| Изменение и удаление командных обсуждений во **всех командах** (дополнительные сведения см. в статье [Управление отвлекающими комментариями](/communities/moderating-comments-and-conversations/managing-disruptive-comments)) | **X** |  |  |
| Скрытие комментариев о фиксациях, запросах на вытягивание и проблемах (см. статью [Управление отвлекающими комментариями](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)) | **X** | **X** | **X** |
| Отключение обсуждений в команде для организации (см. статью [Отключение обсуждений в команде для организации](/articles/disabling-team-discussions-for-your-organization)) | **X** |  |  |
| Настройка изображения профиля команды во **всех командах** (см. статью [Настройка изображения профиля команды](/articles/setting-your-team-s-profile-picture)) | **X** |  |  |{% ifversion ghes %}
| Управление публикацией сайтов {% data variables.product.prodname_pages %} из репозиториев в организации (см. статью [Управление публикацией сайтов {% data variables.product.prodname_pages %} для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)) | **X** | |{% endif %}
| [Перемещение команд в иерархии организации](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Вытягивание (чтение), отправка (запись) и клонирование (копирование) *всех репозиториев* в организации | **X** | |
| Преобразование участников организации во [внешних участников совместной работы](#outside-collaborators) | **X** | |
| [Просмотр пользователей с доступом к репозиторию организации](/articles/viewing-people-with-access-to-your-repository) | **X** | |
| [Экспорт списка пользователей с доступом к репозиторию организации](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |
| Управление метками по умолчанию (см. статью [Управление метками по умолчанию для репозиториев в организации](/articles/managing-default-labels-for-repositories-in-your-organization)) | **X** | |
{% ifversion ghae %}| Управление списками разрешенных IP-адресов (см. [раздел Ограничение сетевого трафика для предприятия с помощью списка разрешенных IP-адресов](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)) | **X** | |{% endif %}

{% endif %}

## Дополнительные материалы

- [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [Разрешения для доступа к доске проекта в организации](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)
