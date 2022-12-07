---
title: Сведения о статистике сервера
intro: 'Вы можете использовать {% data variables.product.prodname_server_statistics %}, чтобы проанализировать собственные статистические данные из {% data variables.product.prodname_ghe_server %}, а также помочь нам улучшить продукты {% data variables.product.company_short %}.'
versions:
  feature: server-statistics
permissions: 'Enterprise owners can enable {% data variables.product.prodname_server_statistics %}.'
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics
topics:
  - Enterprise
ms.openlocfilehash: 3d17df54cd5dcf9ad102ab5079794a9bcb3e664b
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185188'
---
## Сведения о преимуществах {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} поможет вам предусмотреть потребности вашей организации, понять, как работает ваша команда, и показать значение, полученное из {% data variables.product.prodname_ghe_server %}.

После включения {% data variables.product.prodname_server_statistics %} собирает статистические данные о том, сколько конкретных функций используется в экземпляре с течением времени. В отличие от других конечных точек [API статистики для администраторов](/rest/reference/enterprise-admin#admin-stats), которые возвращают данные только за последний день, {% data variables.product.prodname_server_statistics %} предоставляет исторические данные всех метрик {% data variables.product.prodname_server_statistics %} с момента включения этой возможности. Дополнительные сведения см. в статье [Включение {% data variables.product.prodname_server_statistics %} для предприятия](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise).

При включении {% data variables.product.prodname_server_statistics %} вы помогаете выполнять сборку более качественных {% data variables.product.prodname_dotcom %}. Статистические данные, которые вы предоставляете, дают нам представление о том, как {% data variables.product.prodname_dotcom %} добавляет ценность нашим клиентам. Эти сведения позволяют {% data variables.product.company_short %} принимать более обоснованные решения о продукте, что в конечном итоге приносит вам пользу.

## Сведения о безопасности данных

Мы уважаем ваши данные. Мы никогда не будем передавать данные из {% data variables.location.product_location %}, если вы сначала не предоставили нам разрешение на это.

Мы не собираем персональные данные. Мы также не собираем содержимое {% data variables.product.company_short %}, такое как код, проблемы, комментарии или содержимое запроса на вытягивание.

Доступ к данным могут получить только владельцы подключенной корпоративной учетной записи или организации в {% data variables.product.prodname_ghe_cloud %}.

В репозиториях, проблемах, запросах на вытягивание и других возможностях собираются только определенные статистические метрики. Список собранных статистических метрик см. в статье [Собранные данные {% data variables.product.prodname_server_statistics %}](#server-statistics-data-collected). 

Любые обновления собранных метрик будут выполняться в будущих выпусках с новыми функциями {% data variables.product.prodname_ghe_server %} и будут описаны в [заметках о выпуске {% data variables.product.prodname_ghe_server %}](/admin/release-notes). Кроме того, мы добавим в эту статью все обновления метрик.

Чтобы узнать больше о хранении и защите данных {% data variables.product.prodname_server_statistics %}, см. статью [Безопасность GitHub](https://github.com/security).

### Сведения о хранении и удалении данных

{% data variables.product.company_short %} собирает данные {% data variables.product.prodname_server_statistics %} до тех пор, пока лицензия {% data variables.product.prodname_ghe_server %} активна, а возможность {% data variables.product.prodname_server_statistics %} включена.

Если необходимо удалить данные, это можно сделать, обратившись в службу поддержки GitHub, к вашему представителю учетной записи {% data variables.product.prodname_dotcom %} или вашему менеджеру по успеху клиентов.  Как правило, мы удаляем данные за временной интервал, указанный в нашем заявлении о конфиденциальности. Дополнительные сведения см. в [заявлении о конфиденциальности {% data variables.product.company_short %}](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#data-retention-and-deletion-of-data) в документации по {% data variables.product.prodname_dotcom_the_website %}.

### Сведения о переносимости данных

Как владелец организации или предприятия в {% data variables.product.prodname_ghe_cloud %} вы можете получить доступ к данным {% data variables.product.prodname_server_statistics %} путем экспорта данных в CSV-файле или JSON-файле либо через REST API {% data variables.product.prodname_server_statistics %}. Дополнительные сведения см. в статье [Отправка запроса о {% data variables.product.prodname_server_statistics %} с помощью REST API](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api) или [Экспорт {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/exporting-server-statistics).

## Сведения об отключении сбора данных

Возможность {% data variables.product.prodname_server_statistics %} можно отключить в любое время. Дополнительные сведения см. в статье [Включение {% data variables.product.prodname_server_statistics %} для предприятия](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise).

## Собранные данные {% data variables.product.prodname_server_statistics %}

После включения {% data variables.product.prodname_server_statistics %} метрики собираются с помощью ежедневного задания, которое выполняется в {% data variables.location.product_location %}. Статистические метрики хранятся в вашей организации или корпоративной учетной записи в {% data variables.product.prodname_ghe_cloud %} и не хранятся в {% data variables.location.product_location %}.

Следующие статистические метрики будут собираться и передаваться ежедневно и представлять общее количество за день.

Столбец CSV | Имя | Описание |
---------- | ---- | ----------- |
Объект   | `github_connect.features_enabled` | Массив функций {% data variables.product.prodname_github_connect %}, включенных для вашего экземпляра (см. раздел "[Сведения о {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#github-connect-features)" ) |
B   | `host_name` | Имя узла для экземпляра |
C   | `dormant_users.dormancy_threshold` | Время, в течение времени, когда пользователь должен быть неактивным, чтобы считаться неактивным |
D   | `dormant_users.total_dormant_users` | Число неактивных учетных записей пользователей |
E   | `ghes_version` | Версия {% data variables.product.product_name %}, на котором выполняется ваш экземпляр |
F   | `server_id` | UUID, созданный для вашего экземпляра
G   | `collection_date` | Дата сбора метрик |
H   | `schema_version` | Версия схемы базы данных, используемая для хранения этих данных |
I   | `ghe_stats.comments.total_commit_comments` | Количество комментариев к фиксациям |
J   | `ghe_stats.comments.total_gist_comments` | Количество комментариев в gist |
K   | `ghe_stats.comments.total_issue_comments` | Количество комментариев по проблемам | 
L   | `ghe_stats.comments.total_pull_request_comments` | Количество комментариев к запросам на вытягивание |
M   | `ghe_stats.gists.total_gists` | Число gists (как секретная, так и общедоступная) |
Нет   | `ghe_stats.gists.private_gists` | Число секретов gist |
O   | `ghe_stats.gists.public_gists` | Количество открытых объектов gist |
P   | `ghe_stats.hooks.total_hooks` | Количество перехватчиков предварительного получения (активных и неактивных) |
Q   | `ghe_stats.hooks.active_hooks` | Количество активных перехватчиков предварительного получения |
R   | `ghe_stats.hooks.inactive_hooks` | Количество неактивных перехватчиков предварительного получения |
S   | `ghe_stats.issues.total_issues` | Количество проблем (как открытых, так и закрытых) |
T   | `ghe_stats.issues.open_issues` | Число открытых проблем |
U   | `ghe_stats.issues.closed_issues` | Количество закрытых проблем |
V   | `ghe_stats.milestones.total_milestones` | Количество вех (открытых и закрытых) |
W   | `ghe_stats.milestones.open_milestones` | Количество открытых вех |
X   | `ghe_stats.milestones.closed_milestones` | Количество закрытых вех |
Да   | `ghe_stats.orgs.total_orgs` | Число организаций (включенных и отключенных) |
Z   | `ghe_stats.orgs.disabled_orgs` | Число отключенных организаций |
AA | `ghe_stats.orgs.total_teams` | Число команд |
AB | `ghe_stats.orgs.total_team_members` | Число участников команды |
AC | `ghe_stats.pages.total_pages` | Количество сайтов {% data variables.product.prodname_pages %} |
AD | `ghe_stats.pulls.total_pulls` | Количество запросов на вытягивание |
AE | `ghe_stats.pulls.merged_pulls` | Количество объединенных запросов на вытягивание |
AF | `ghe_stats.pulls.mergeable_pulls` | Количество запросов на вытягивание, которые в настоящее время можно объединить |
ГД | `ghe_stats.pulls.unmergeable_pulls` | Количество запросов на вытягивание, которые в настоящее время не могут быть объединяемыми |
AH | `ghe_stats.repos.total_repos` | Количество репозиториев (как вышестоящих, так и вилок) |
ИИ | `ghe_stats.repos.root_repos` | Число вышестоящих репозиториев |
AJ | `ghe_stats.repos.fork_repos` | Количество вилок |
AK | `ghe_stats.repos.org_repos` | Количество репозиториев, принадлежащих организациям |
AL | `ghe_stats.repos.total_pushes` | Количество отложений в репозитории |
AM | `ghe_stats.repos.total_wikis` | Количество вики-сайтов |
AN | `ghe_stats.users.total_users` | Количество учетных записей пользователей |
АО | `ghe_stats.users.admin_users` | Количество учетных записей пользователей, которые являются администраторами сайта |
Доступности и устойчивости к разделению сети | `ghe_stats.users.suspended_users` | Количество приостановленных учетных записей пользователей |

## Примеры данных {% data variables.product.prodname_server_statistics %}

Чтобы просмотреть пример заголовков, включенных в экспорт CSV для {% data variables.product.prodname_server_statistics %}, скачайте [пример CSV-файла {% data variables.product.prodname_server_statistics %}](/assets/server-statistics-csv-example.csv).

Пример полезных данных ответа для API {% data variables.product.prodname_server_statistics %} см. в статье [Отправка запроса о {% data variables.product.prodname_server_statistics %} с помощью REST API](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api).
