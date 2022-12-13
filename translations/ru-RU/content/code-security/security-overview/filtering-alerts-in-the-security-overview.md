---
title: Фильтрация оповещений в разделе «Общие сведения о безопасности»
intro: Использование фильтров для просмотра оповещений определенных категорий
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: Filtering the security overview
ms.openlocfilehash: 60ff823ab0303dfb8fce788e708cb1cd61a9f8e2
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163198'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## Сведения о фильтрации в разделе «Общие сведения о безопасности»

Фильтры можно использовать в обзоре безопасности, чтобы сузить фокус на основе ряда факторов, таких как уровень риска оповещения, тип оповещения и включение функций. Различные фильтры доступны в зависимости от конкретного представления{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} и от того, просматриваете ли вы данные на уровне предприятия или организации{% endif %}.

{% ifversion security-overview-displayed-alerts %} {% примечание %} {% data reusables.security-overview.information-varies-GHAS %} {% endnote %} {% endif %}

## Фильтрация по репозиторию

| Квалификатор | Описание |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | Отображает данные для указанного репозитория. |

## Фильтрация по факту включения функций безопасности

В приведенных ниже примерах замените на `:enabled` `:not-enabled` , чтобы увидеть репозитории, в которых функции безопасности не включены. Эти квалификаторы доступны в основных сводных представлениях.

| Квалификатор | Описание |
| -------- | -------- |
| `code-scanning:enabled` | Отображение репозиториев, настроенных {% data variables.product.prodname_code_scanning %}. | 
| `dependabot:enabled` | Отображение репозиториев, в которых включен {% data variables.product.prodname_dependabot_alerts %}. |
| `secret-scanning:enabled` | Отображение репозиториев, в которых включены оповещения {% data variables.product.prodname_secret_scanning %}. {% ifversion security-overview-org-risk-coverage %} |
| `any-feature:enabled` | Отображение репозиториев, в которых включена хотя бы одна функция безопасности. |{% else %}
| `not-enabled:any` | Отображение репозиториев по меньшей мере с одной отключенной функцией безопасности. |{% endif %}

{% ifversion security-overview-org-risk-coverage %} Представление "Покрытие безопасности" на уровне организации включает дополнительные фильтры.

{% data reusables.security-overview.beta-org-risk-coverage %}

| Квалификатор | Описание |
| -------- | -------- |
| `code-scanning-pull-request-alerts:enabled`| Отображение репозиториев, которые настроили {% data variables.product.prodname_code_scanning %} для выполнения в запросах на вытягивание. |
| `dependabot-security-updates:enabled` | Отображение репозиториев с включенными обновлениями безопасности {% data variables.product.prodname_dependabot %}.  |
| `secret-scanning-push-protection:enabled` | Отображение репозиториев, в которых настроена защита от принудительной отправки для {% data variables.product.prodname_secret_scanning %}. |
{% endif %}

## Фильтрация по типу репозитория

Эти квалификаторы доступны в основных сводных представлениях.

| Квалификатор | Описание |
| -------- | -------- |
{%- ifversion ghes or ghec %} | `is:public` | Отображение общедоступных репозиториев. | {%- endif %} | `is:internal` | Отображение внутренних репозиториев. | | `is:private` | Отображение частных репозиториев. | | `archived:true` | Отображение архивированных репозиториев. | | `archived:false` | Опустить архивные репозитории. |

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Фильтрация по уровню риска для репозиториев

Уровень риска для репозитория определяется количеством и уровнем серьезности оповещений от функций безопасности. Если для репозитория не включена одна или несколько функций безопасности, репозиторий будет иметь неизвестный уровень риска. Если репозиторий не имеет рисков, обнаруженных функциями безопасности, репозиторий будет иметь явный уровень риска. 

{% ifversion security-overview-org-risk-coverage %} Эти квалификаторы доступны в представлении корпоративного уровня.
{% endif %}

| Квалификатор | Описание |
| -------- | -------- |
| `risk:high` | Отображение репозиториев, подверженных высокому риску. |
| `risk:medium` | Отображение репозиториев, подверженных среднему риску. |
| `risk:low` | Отображение репозиториев, подверженных низкому риску. |
| `risk:unknown` | Отображение репозиториев, которые имеют неизвестный уровень риска. |
| `risk:clear` | Отображение репозиториев, для которых не выявлен уровень риска. |
{% endif %}

## Фильтрация по числу оповещений

{% ifversion security-overview-org-risk-coverage %} Эти квалификаторы доступны в обзоре корпоративного уровня и в представлении "Риски безопасности на уровне организации". {% else %} Эти квалификаторы доступны в основных сводных представлениях. {% endif %}

| Квалификатор | Описание |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | Отображение репозиториев с *n* оповещений {% data variables.product.prodname_code_scanning %}. Этот квалификатор может использовать операторы сравнения `=`, `>` и `<`. |
| <code>secret-scanning:<em>n</em></code> | Отображение репозиториев с *n* оповещений {% data variables.product.prodname_secret_scanning %}. Этот квалификатор может использовать операторы сравнения `=`, `>` и `<`. |
| <code>dependabot:<em>n</em></code> | Отображение репозиториев с *n* {% data variables.product.prodname_dependabot_alerts %}. Этот квалификатор может использовать операторы сравнения `=`, `>` и `<`. |


## Фильтрация по команде

Эти квалификаторы доступны в основных сводных представлениях.

| Квалификатор | Описание |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | Отображает репозитории, для которых у *TEAM-NAME* есть права администратора. |

## Фильтрация по теме

Эти квалификаторы доступны в основных сводных представлениях.

| Квалификатор | Описание |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | Отображает репозитории, классифицированные по *TOPIC-NAME*. |

{% ifversion security-overview-alert-views %}

## Дополнительные фильтры для представлений оповещений {% data variables.product.prodname_code_scanning %}

Все оповещения о сканировании кода имеют одну из категорий, показанных ниже. Вы можете щелкнуть любой результат, чтобы просмотреть полные сведения о соответствующем запросе и строке кода, активировав оповещение.

| Квалификатор | Описание |
| -------- | -------- |
|`severity:critical`|Отображает оповещения {% data variables.product.prodname_code_scanning %} уровня «Критический».|
|`severity:high`|Отображает оповещения {% data variables.product.prodname_code_scanning %} уровня «Высокий».|
|`severity:medium`|Отображает оповещения {% data variables.product.prodname_code_scanning %} уровня «Средний».|
|`severity:low`|Отображает оповещения {% data variables.product.prodname_code_scanning %} уровня «Низкий».|
|`severity:error`|Отображает оповещения {% data variables.product.prodname_code_scanning %} уровня «Ошибки».|
|`severity:warning`|Отображает оповещения {% data variables.product.prodname_code_scanning %} уровня «Предупреждения».|
|`severity:note`|Отображает оповещения {% data variables.product.prodname_code_scanning %} уровня «Примечания».|

{% ifversion dependabot-alerts-vulnerable-calls %}
## Дополнительные фильтры для представлений оповещений {% data variables.product.prodname_dependabot %}

Можно отфильтровать представление, чтобы показать {% data variables.product.prodname_dependabot_alerts %}, которые готовы к исправлению или в которых доступны дополнительные сведения об уязвимости. Можно щелкнуть любой результат, чтобы показать полную информацию об оповещении.

| Квалификатор | Описание |
| -------- | -------- |
|`has:patch`|Показывает оповещения {% data variables.product.prodname_dependabot %} об уязвимостях, для которых уже доступна безопасная версия.|
|`has:vulnerable-calls`|Показывает оповещения {% data variables.product.prodname_dependabot %}, где обнаружен по крайней мере один вызов из репозитория к уязвимой функции. Дополнительные сведения см. в разделе [Просмотр и обновление оповещений Dependabot](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions).|
{% endif %}

{% endif %}

## Дополнительные фильтры для представлений оповещений {% data variables.product.prodname_secret_scanning %}

| Квалификатор | Описание |
| -------- | -------- |
|`provider:PROVIDER_NAME` | Отображает оповещения обо всех проблемах с секретами для указанного поставщика.  |
| `secret-type:SERVICE_PROVIDER` | Отображает оповещения для указанного секрета и поставщика. |
| `secret-type:CUSTOM-PATTERN` | Отображает оповещения о секретах, соответствующих указанному пользовательскому шаблону.  |

Дополнительные сведения см. в разделе [{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns).

