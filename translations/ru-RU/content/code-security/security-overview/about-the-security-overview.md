---
title: Сведения об Обзоре безопасности
intro: 'Вы можете просматривать, фильтровать и сортировать оповещения системы безопасности для репозиториев, принадлежащих вашей организации или команде, на страницах обзора безопасности.'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Dependabot
  - Dependencies
  - Organizations
  - Teams
shortTitle: About the security overview
ms.openlocfilehash: 0e634bafbb699d27588312b57084b557a3c82ca1
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163755'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## Сведения об Обзоре безопасности

{% data reusables.security-overview.about-the-security-overview %} {% ifversion fpt %} Дополнительные сведения см. [в документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview). {% endif %}

{% ifversion ghec or ghes or ghae %} В обзоре безопасности показано, какие функции безопасности включены для репозиториев, и консолидируйте оповещения для каждой функции. 

- Сведения о рисках и покрытиях функций и оповещений {% data variables.product.prodname_dependabot %} отображаются для всех репозиториев. 
- Сведения о рисках и покрытии для функций {% data variables.product.prodname_GH_advanced_security %}, таких как {% data variables.product.prodname_code_scanning %} и {% data variables.product.prodname_secret_scanning %}, отображаются только для предприятий, использующих {% data variables.product.prodname_GH_advanced_security %}.

Дополнительные сведения см. в разделах [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)и [Сведения о {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security).

## Сведения о фильтрации и сортировке оповещений

Обзор безопасности предоставляет мощный способ понять безопасность группы репозиториев. Представления являются интерактивными с фильтрами, которые позволяют детализировать агрегированные данные и определить источники высокого риска или низкого охвата функций. При применении нескольких фильтров, чтобы сосредоточиться на более узких областях, данные в представлении изменяются в соответствии с выбранным выбором. Дополнительные сведения см. в разделе "[Фильтрация оповещений в обзоре безопасности](/code-security/security-overview/filtering-alerts-in-the-security-overview)".

{% ifversion security-overview-alert-views %} Существуют также специальные представления для каждого типа оповещений системы безопасности, которые можно использовать, чтобы ограничить анализ определенным набором оповещений, а затем еще больше сузить результаты с помощью диапазона фильтров, характерных для каждого представления. Например, в представлении оповещений {% data variables.product.prodname_secret_scanning %} можно использовать `Secret type` фильтр для просмотра только оповещений {% data variables.product.prodname_secret_scanning %} для определенного секрета, например {% data variables.product.pat_generic %}.
{% endif %}

{% note %}

**Примечание:** В обзоре безопасности отображаются активные оповещения, создаваемые функциями безопасности. Если в обзоре безопасности для репозитория нет оповещений, невыявленные уязвимости безопасности или ошибки кода все равно могут существовать.

{% endnote %}

## Сведения об обзоре безопасности на уровне организации

{% data reusables.security-overview.beta-org-risk-coverage %}

Общие сведения о безопасности можно найти на вкладке **Безопасность** для любой организации, принадлежащей предприятию. В каждом представлении отображаются агрегированные данные, которые можно детализировать. При добавлении каждого фильтра данные обновляются с учетом выбранных репозиториев или оповещений.

Группа безопасности приложений в вашей компании может использовать различные представления как для широкого, так и для конкретного анализа состояния безопасности вашей организации. {% ifversion security-overview-org-risk-coverage %} Например, команда может использовать страницу "Покрытие безопасности", чтобы отслеживать внедрение функций в вашей организации или определенной командой при развертывании {% data variables.product.prodname_GH_advanced_security %}, или использовать страницу "Угрозы безопасности" для выявления репозиториев с более чем пятью открытыми оповещениями {% data variables.product.prodname_secret_scanning %}. {% else %} Например, они могут использовать страницу обзора для отслеживания внедрения функций вашей организацией или определенной командой при развертывании {% data variables.product.prodname_GH_advanced_security %} на предприятии или для просмотра всех оповещений определенного типа и уровня серьезности во всех репозиториях в организации. {% endif %}

Владельцы организации и менеджеры по безопасности для организаций имеют доступ к обзору безопасности для своих организаций. {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %} Участники организации также могут получить доступ к обзору безопасности на уровне организации, чтобы просмотреть результаты для репозиториев, у которых есть права администратора или которым предоставлен доступ к оповещениям системы безопасности. Дополнительные сведения об управлении доступом к оповещениям системы безопасности см. в разделе [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository). {% endif %}

{% ifversion security-overview-org-risk-coverage %}
### Представление рисков безопасности

В этом представлении отображаются данные о репозиториях, на которые влияют различные типы оповещений системы безопасности. 

- Используйте раскрывающийся **список Тип** и **Teams** , чтобы добавить фильтры типов репозитория и команд.
- Щелкните **Открыть оповещения** или **Затронутые репозитории** , чтобы отобразить только репозитории с определенным типом оповещений системы безопасности.

Кроме того, при щелчке в поле поиска отображается список всех доступных фильтров.

![Снимок экрана: представление "Риск безопасности" для организации](/assets/images/help/security-overview/security-risk-view.png)

### Представление "Покрытие безопасности"

В этом представлении отображаются данные о том, какие репозитории используют функции безопасности. 

- Используйте раскрывающийся **список Тип** и **Teams** , чтобы добавить фильтры типов репозитория и команд.
- Щелкните **Оповещения включены** и другие функции, перечисленные в заголовке, чтобы просмотреть только репозитории с включенными функциями.
- Измените любой `FEATURE:enabled` фильтр `FEATURE:not-enabled` на в поле поиска, чтобы увидеть репозитории, которые не включили функцию.
- Для любого репозитория щелкните многоточие (**...**), а затем **параметры безопасности** , чтобы включить дополнительные функции.

Кроме того, при щелчке в поле поиска отображается список всех доступных фильтров.

![Снимок экрана: представление "Покрытие безопасности" для организации](/assets/images/help/security-overview/security-coverage-view.png)

{% else %}

### Основные сведения о безопасности

![Снимок экрана: обзор безопасности для организации](/assets/images/help/security-overview/security-overview-org-legacy.png)

Для каждого репозитория в обзоре безопасности отображаются значки для каждого типа функций безопасности и количество оповещений по каждому типу. Если функция безопасности в репозитории не включена, значок этой функции будет неактивен. Кроме того, для каждого репозитория вычисляется оценка риска на основе проверки кода, Dependabot и оповещений о проверке секретов. Эта оценка находится в бета-версии, и ее следует использовать с осторожностью. Алгоритм ее вычисления и способ применения могут измениться.

![Значки в обзоре безопасности](/assets/images/help/security-overview/security-overview-icons.png)

| Значок | Значение |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | Оповещения {% data variables.product.prodname_code_scanning_capc %}. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)". |
| {% octicon "key" aria-label="Secret scanning alerts" %} | Оповещения {% data variables.product.prodname_secret_scanning_caps %}. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning). |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)". |
| {% octicon "check" aria-label="Check" %} | Функция безопасности включена, но не создает оповещения в этом репозитории. |
| {% octicon "x" aria-label="x" %} | Функция безопасности в этом репозитории не поддерживается. |

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Сведения об обзоре безопасности на уровне предприятия

Общие сведения о безопасности см. на вкладке **Безопасность кода** для вашего предприятия. В каждом обзоре отображаются агрегированные сведения о безопасности и сведения о безопасности для конкретного репозитория для вашего предприятия. Вы можете просматривать репозитории, принадлежащие вашей организации, где имеются оповещения безопасности, просматривать все оповещения безопасности или оповещения, относящиеся к определенным функциям безопасности, для всего предприятия.

Владельцы предприятия могут просматривать оповещения для организаций, владельцем которых они являются или менеджером по безопасности. {% ifversion ghec or ghes > 3.5 or ghae > 3.5 %} Владельцы предприятия могут присоединиться к организации в качестве владельца организации, чтобы просмотреть все ее оповещения в обзоре безопасности корпоративного уровня. Дополнительные сведения см. в разделе [Управление ролью в организации, принадлежащей вашему предприятию](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise). {% endif %}

Владельцы организации и менеджеры по безопасности для организаций на предприятии имеют доступ к обзору безопасности корпоративного уровня. Они могут просматривать репозитории и оповещения для организаций, к которым у них есть полный доступ.
{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Сведения об обзоре безопасности на уровне команды

Общие сведения о безопасности можно найти на вкладке **Безопасность** для любой команды в организации, принадлежащей предприятию.

На уровне команды в обзоре безопасности отображаются данные о безопасности для репозиториев, для которых у команды есть права администратора. Дополнительные сведения см. в статье "[Управление доступом команды к репозиторию организации](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".
{% endif %}

## Дополнительные материалы

- [Защита репозитория](/code-security/getting-started/securing-your-repository)
- "[Защита организации](/code-security/getting-started/securing-your-organization)"
- "[Введение в внедрение GitHub Advanced Security в масштабе](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)" {% endif %}
