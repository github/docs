---
title: Управление параметрами безопасности и анализа для репозитория
intro: 'Вы можете управлять возможностями, которые защищают и анализируют код в проекте в {% data variables.product.prodname_dotcom %}.'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Security & analysis
ms.openlocfilehash: 4373c92b6b4e12f56bb26869090955824662b841
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109656'
---
{% ifversion fpt or ghec %}
## Включение и отключение функций безопасности и анализа для общедоступных репозиториев

Вы можете управлять частью функций безопасности и анализа для общедоступных репозиториев. Остальные функции включены постоянно, включая граф зависимостей и сканирование секретов.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. В разделе "Безопасность и анализ кода" справа от функции нажмите кнопку **Отключить** или **Включить**.
  ![Кнопка "Включить" или "Отключить" для возможностей настройки безопасности и анализа в общедоступном репозитории](/assets/images/help/repository/security-and-analysis-disable-or-enable-public.png) {% endif %}

## Включение и отключение функций безопасности и анализа{% ifversion fpt or ghec %} для частных репозиториев{% endif %}

Вы можете управлять функциями безопасности и анализа для {% ifversion fpt or ghec %}частного или внутреннего {% endif %}репозитория.{% ifversion ghes or ghec %} Если ваш отдел входит в организацию с лицензией на {% data variables.product.prodname_GH_advanced_security %}, доступны дополнительные параметры. {% data reusables.advanced-security.more-info-ghas %} {% elsif fpt %} Организации, использующие {% data variables.product.prodname_ghe_cloud %} с {% data variables.product.prodname_advanced_security %}, имеют дополнительные параметры. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).
{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% ifversion fpt or ghes or ghec %}
4. В разделе "Безопасность и анализ кода" справа от функции нажмите кнопку **Отключить** или **Включить**. {% ifversion not fpt %} Элемент управления "{% data variables.product.prodname_GH_advanced_security %}" отключен, если у вашего предприятия нет доступных лицензий для {% data variables.product.prodname_advanced_security %}. {% endif %} {% ifversion fpt %} ![ Снимок экрана: кнопка "Включить" или "Отключить" для функций](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png) "Настройка безопасности и анализа"{% elsif ghec %} ![Снимок экрана: кнопка "Включить" или "Отключить" для функций](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png) "Настройка безопасности и анализа"{% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available-->
  ![Снимок экрана: кнопка "Включить" или "Отключить" для функций](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png) "Настройка безопасности и анализа"{% endif %}
  
  {% ifversion not fpt %} {% note %}

  **Примечание**. При отключении {% data variables.product.prodname_GH_advanced_security %} также отключаются {% ifversion ghec %}проверка зависимостей, {% endif %}{% data variables.product.prodname_secret_scanning %} и {% data variables.product.prodname_code_scanning %}. Все рабочие процессы, операции отправки SARIF и вызовы API для {% data variables.product.prodname_code_scanning %} будут завершаться сбоем.
  {% endnote %}{% endif %}

  {% endif %}

  {% ifversion ghae %}
4. В разделе "Безопасность и анализ кода" справа от функции нажмите кнопку **Отключить** или **Включить**. Прежде чем включать {% data variables.product.prodname_secret_scanning %} для репозитория, может потребоваться включить {% data variables.product.prodname_GH_advanced_security %}.
   ![Включение или отключение {% data variables.product.prodname_GH_advanced_security %} или {% data variables.product.prodname_secret_scanning %} для репозитория](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png) {% endif %}

## Предоставление доступа к оповещениям системы безопасности

Оповещения системы безопасности для репозитория видны пользователям с доступом к нему с правами администратора, а также, если репозиторий принадлежит организации, владельцам организации. Вы можете предоставить доступ к оповещениям дополнительным командам и пользователям.

{% note %}

Владельцы организации и администраторы репозитория могут предоставлять доступ для просмотра оповещений системы безопасности, таких как оповещения {% data variables.product.prodname_secret_scanning %}, только пользователям и командам с правами на запись в репозиторий.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. В разделе "Доступ к оповещениям" в поле поиска начните вводить имя пользователя или команды, которых нужно найти, а затем щелкните имя в списке совпадений.
   {% ifversion fpt or ghec or ghes %} ![ Поле поиска для предоставления пользователям или командам доступа к оповещениям](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png) системы безопасности {% endif %}
   
   {% ifversion ghae %} ![ Поле поиска для предоставления пользователям или командам доступа к оповещениям](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png) системы безопасности {% endif %}
   
5. Нажмите кнопку **Сохранить изменения**.
   {% ifversion fpt or ghes or ghec %} ![" Кнопка "Сохранить изменения" для изменения параметров оповещений](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png) системы безопасности {% endif %}
   
   {% ifversion ghae %} ![" Кнопка "Сохранить изменения" для изменения параметров оповещений](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png) системы безопасности {% endif %}

## Отмена доступа к оповещениям системы безопасности

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. В разделе "Доступ к оповещениям" справа от пользователя или команды, доступ которым необходимо запретить, щелкните {% octicon "x" aria-label="X symbol" %}.
   {% ifversion fpt or ghec or ghes %}  
   ![Кнопка "x", чтобы удалить доступ пользователя к оповещениям системы безопасности для репозитория](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png) {% endif %}
   
   {% ifversion ghae %} ![" Кнопка x", чтобы удалить доступ пользователя к оповещениям системы безопасности для репозитория](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png) {% endif %}
  5. Нажмите кнопку **Сохранить изменения**.

## Дополнительные материалы

- [Защита репозитория](/code-security/getting-started/securing-your-repository)
- [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)
