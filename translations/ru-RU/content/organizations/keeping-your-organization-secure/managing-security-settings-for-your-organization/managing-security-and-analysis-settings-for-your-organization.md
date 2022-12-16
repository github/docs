---
title: Управление параметрами безопасности и анализа для организации
intro: 'Вы можете управлять возможностями, которые защищают и анализируют код в проекте вашей организации в {% data variables.product.prodname_dotcom %}.'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage security & analysis
ms.openlocfilehash: 35e34f15b46987eea7bc732313b69ecd4e6396fa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107704'
---
## Сведения об управлении параметрами безопасности и анализа

{% data variables.product.prodname_dotcom %} может помочь защитить репозитории в вашей организации. Вы можете контролировать функции безопасности и анализа для всех уже существующих и новых репозиториев, создаваемых членами вашей организации. {% ifversion ghec %}Вы также можете управлять доступом к этим функциям, если у вас есть лицензия на {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% ifversion fpt %}Организации также могут управлять доступом к этим функциям, если они используют {% data variables.product.prodname_ghe_cloud %} с лицензией на {% data variables.product.prodname_GH_advanced_security %}. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %} {% data reusables.security.security-and-analysis-features-enable-read-only %}

## Отображение параметров безопасности и анализа

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}

Отображаемая страница позволяет включать или отключать все функции безопасности и анализа для репозиториев в вашей организации.

{% ifversion ghec %}Если ваша организация относится к предприятию с лицензией на {% data variables.product.prodname_GH_advanced_security %}, страница также будет содержать параметры для включения и отключения функций {% data variables.product.prodname_advanced_security %}. Все репозитории, использующие {% data variables.product.prodname_GH_advanced_security %}, перечислены в нижней части страницы.{% endif %}

{% ifversion ghes %}Если у вас есть лицензия на {% data variables.product.prodname_GH_advanced_security %}, страница также будет содержать параметры для включения и отключения функций {% data variables.product.prodname_advanced_security %}. Все репозитории, использующие {% data variables.product.prodname_GH_advanced_security %}, перечислены в нижней части страницы.{% endif %}

{% ifversion ghae %}Страница также будет содержать параметры для включения и отключения функций {% data variables.product.prodname_advanced_security %}. Все репозитории, использующие {% data variables.product.prodname_GH_advanced_security %}, перечислены в нижней части страницы.{% endif %}

## Включение или отключение функции для всех существующих репозиториев

Вы можете включать и отключать функции для всех репозиториев. {% ifversion fpt or ghec %}Влияние ваших изменений на репозитории организации определяется областью видимости:

- **Граф зависимостей** — изменения коснутся только частных репозиториев, так как функция всегда включена для общедоступных.
- **{% data variables.product.prodname_dependabot_alerts %}**  — изменения затронут все репозитории.
- **{% data variables.product.prodname_dependabot_security_updates %}**  — изменения затронут все репозитории.
{%- ifversion ghec %}
- **{% data variables.product.prodname_GH_advanced_security %}**  — изменения коснутся только частных репозиториев, так как {% data variables.product.prodname_GH_advanced_security %} и связанные функции всегда включены для общедоступных.
- **{% data variables.product.prodname_secret_scanning_caps %}**  — изменения отразятся на репозиториях, где также включено решение {% data variables.product.prodname_GH_advanced_security %}. Этот параметр определяет включение или отключение функции {% data variables.product.prodname_secret_scanning_GHAS %}. {% data variables.product.prodname_secret_scanning_partner_caps %} всегда используется для всех частных репозиториев.
{% endif %}

{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% ifversion ghes or ghec or ghae %} {% примечание %}

**Примечание:** Если вы столкнулись с ошибкой "GitHub Advanced Security не удается включить из-за параметра политики для организации", обратитесь к администратору предприятия и попросите его изменить политику GitHub Advanced Security для вашего предприятия. Дополнительные сведения см. в разделе [Применение политик для расширенной безопасности на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).
{% endnote %} {% endif %}

1. Перейдите к параметрам безопасности и анализа для вашей организации. Дополнительные сведения см. в разделе [Отображение параметров безопасности и анализа](#displaying-the-security-and-analysis-settings).
2. В разделе "Безопасность и анализ кода" справа от нужной функции нажмите **Включить все** или **Отключить все**. {% ifversion ghes or ghec %} Элемент управления "{% data variables.product.prodname_GH_advanced_security %}" отключен, если у вас нет доступных рабочих мест в лицензии {% data variables.product.prodname_GH_advanced_security %}. {% endif %} {% ifversion fpt %} ![" Включить все или кнопку "Отключить все" для функций](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-fpt.png) "Настройка безопасности и анализа" {% endif %} {% ifversion ghec %} !["Включить все" или "Отключить все" для функций](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-ghec.png) "Настройка безопасности и анализа" {% endif %} {% ifversion ghes %} !["Включить все" или "Отключить все" для функций](/assets/images/enterprise/3.3/organizations/security-and-analysis-disable-or-enable-all-ghas.png) "Настройка безопасности и анализа" {% endif %}
   
   
   {% ifversion ghae %} ![Кнопка "Включить все" или "Отключить все" для функций в "Настройке безопасности и анализа"](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. При необходимости включите функцию по умолчанию для новых репозиториев в вашей организации.
   {% ifversion fpt or ghec %} ![Параметр "Включить по умолчанию" для новых репозиториев](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. Щелкните **Включить [функцию]** или **Отключить [функцию]** , чтобы включить или отключить ее для всех репозиториев в вашей организации.
   {% ifversion fpt or ghec %} ![Кнопка включения или отключения функции](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png) {% endif %}
   
   {% endif %} {% ifversion ghae or ghes %}
5. Щелкните **Включить/Отключить все** или **Включить/Отключить для применимых репозиториев**, чтобы подтвердить изменение.
   ![Кнопка включения функции для всех применимых репозиториев организации](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png) {% endif %}

   {% data reusables.security.displayed-information %}

## Включение или отключение функции автоматически при добавлении новых репозиториев

1. Перейдите к параметрам безопасности и анализа для вашей организации. Дополнительные сведения см. в разделе [Отображение параметров безопасности и анализа](#displaying-the-security-and-analysis-settings).
2. В разделе "Безопасность и анализ кода" справа от функции можно включить или отключить ее по умолчанию для новых репозиториев{% ifversion fpt or ghec %} или всех новых частных репозиториев{% endif %} в организации.
   {% ifversion fpt or ghec %} ![ Снимок экрана: флажок для включения функции для новых репозиториев](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) {% endif %} {% ifversion ghes %} ![Снимок экрана: флажок для включения функции для новых репозиториев](/assets/images/enterprise/3.3/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) {% endif %}
   
   {% ifversion ghae %} ![ Снимок экрана: флажок для включения функции для новых репозиториев](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png) {% endif %}

{% ifversion fpt or ghec or ghes %}

## Разрешение доступа к частным зависимостям для {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} может проверять наличие устаревших ссылок-зависимостей в проекте и автоматически создавать запрос на вытягивание для их обновления. Для этого {% data variables.product.prodname_dependabot %} требует наличия доступа ко всем целевым файлам зависимостей. Как правило, если какие-то из зависимостей недоступны, обновление версий не сработает. Подробнее см. [Сведения об обновлении версий {% data variables.product.prodname_dependabot %}](/github/administering-a-repository/about-dependabot-version-updates).

По умолчанию {% data variables.product.prodname_dependabot %} не может обновлять зависимости, расположенные в частных репозиториях или частных реестрах пакетов. Однако если зависимость находится в частном репозитории {% data variables.product.prodname_dotcom %} той же организации, которой принадлежит использующий зависимость проект, вы можете предоставить {% data variables.product.prodname_dependabot %} доступ к основному репозиторию и тогда обновление пройдет успешно.

Если ваш код использует пакеты из частного реестра, то {% data variables.product.prodname_dependabot %} сможет обновить версии этих зависимостей, если вы настроите обновление на уровне репозитория. Для этого добавьте сведения о проверке подлинности в файл _dependabot.yml_ для репозитория. Дополнительные сведения см. в разделе [Параметры конфигурации для файла dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries).

Чтобы предоставить {% data variables.product.prodname_dependabot %} доступ к частному репозиторию {% data variables.product.prodname_dotcom %}, сделайте следующее:

1. Перейдите к параметрам безопасности и анализа для вашей организации. Дополнительные сведения см. в разделе [Отображение параметров безопасности и анализа](#displaying-the-security-and-analysis-settings).
1. В разделе "Доступ к частному репозиторию для {% data variables.product.prodname_dependabot %}" щелкните **Добавить частные репозитории** или **Добавить внутренние и частные репозитории**.
   ![Кнопка добавления репозиториев](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. Начните вводить имя репозитория, доступ к которому нужно предоставить.
   ![Поле поиска репозитория с отфильтрованным раскрывающимся списком](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. Щелкните репозиторий.

1. Если нужно удалить репозиторий из списка, справа от репозитория щелкните {% octicon "x" aria-label="The X icon" %}.
   ![Кнопка X для удаления репозитория](/assets/images/help/organizations/dependabot-private-repository-list.png) {% endif %}

{% ifversion ghes or ghec %}

## Удаление доступа к {% data variables.product.prodname_GH_advanced_security %} для отдельных репозиториев в организации

Вы можете управлять доступом к функциям {% data variables.product.prodname_GH_advanced_security %} для репозитория на его вкладке "Параметры". Дополнительные сведения: [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository). Однако вы также можете отключить функции {% data variables.product.prodname_GH_advanced_security %} для репозитория на вкладке "Параметры" для организации.

1. Перейдите к параметрам безопасности и анализа для вашей организации. Дополнительные сведения см. в разделе [Отображение параметров безопасности и анализа](#displaying-the-security-and-analysis-settings).
1. Чтобы просмотреть список всех репозиториев в организации, для которых включено решение {% data variables.product.prodname_GH_advanced_security %}, прокрутите экран к разделу "Репозитории {% data variables.product.prodname_GH_advanced_security %}".
  ![Раздел репозиториев {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png) В таблице указано число уникальных пользователей с фиксациями в каждом репозитории. Оно показывает, сколько рабочих мест вы можете освободить в своей лицензии, отключив доступ к {% data variables.product.prodname_GH_advanced_security %}. Дополнительные сведения см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).
1. Чтобы отключить для репозитория доступ к {% data variables.product.prodname_GH_advanced_security %} и освободить рабочие места, занимаемые уникальными пользователями, имеющими в нем фиксации, щелкните находящийся рядом значок {% octicon "x" aria-label="X symbol" %}.
1. В диалоговом окне подтверждения щелкните **Удалить репозиторий**, чтобы отключить доступ к функциям {% data variables.product.prodname_GH_advanced_security %}.

{% note %}

**Примечание.** Если вы отключите для репозитория доступ к {% data variables.product.prodname_GH_advanced_security %}, обязательно сообщите использующей его команде разработчиков о том, что это не ошибочное изменение, чтобы они не тратили время на отладку из-за неудачных запусков сканирования кода.

{% endnote %}

{% endif %}

## Дополнительные материалы

- [Защита репозитория](/code-security/getting-started/securing-your-repository){% ifversion not fpt %}
- [Сведения о сканировании секретов](/github/administering-a-repository/about-secret-scanning){% endif %}{% ifversion not ghae %}
- [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph){% endif %}
- [Сведения о безопасности цепочки поставок](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)
