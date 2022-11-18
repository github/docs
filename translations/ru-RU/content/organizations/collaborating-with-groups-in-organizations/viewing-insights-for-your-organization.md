---
title: Просмотр аналитических сведений для организации
intro: 'Аналитика организации предоставляет данные о действиях, вкладах и зависимостях вашей организации.'
redirect_from:
  - /articles/viewing-insights-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View organization insights
permissions: Organization members can view organization insights.
ms.openlocfilehash: 5398d60f6a937c35e188dc97e44bf25b01b6d676
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135227'
---
## Сведения об аналитике организации

Вы можете использовать аналитические сведения об активности организации, чтобы лучше понять, как участники организации используют {% data variables.product.product_name %} для совместной работы и работы с кодом. Аналитические сведения о зависимостях позволяют отслеживать, создавать отчеты и выполнять действия для использования открытого кода в вашей организации.

{% note %}

**Примечание.** Чтобы просмотреть аналитические сведения об организации, ваша организация должна использовать {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Просмотр аналитических сведений об активности организации

{% note %}

**Примечание.** Аналитические сведения о действиях организации в настоящее время доступна в общедоступной бета-версии и может быть изменена.

{% endnote %}

Используя аналитические сведения об активности организации, можно просматривать еженедельные, ежемесячные и ежегодные визуализации данных по всей организации или конкретных репозиториях, включая действия в связи с проблемой и запросом на вытягивание, используемые основные языки и накопленную информацию о том, где участники организации проводят время.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Под названием организации нажмите {% octicon "graph" aria-label="The bar graph icon" %} **Аналитические сведения**.
  ![Перейдите на вкладку «Аналитика организации»](/assets/images/help/organizations/org-nav-insights-tab.png)
4. При необходимости в правом верхнем углу страницы выберите просмотр данных за последнюю **неделю**, **месяц** или **год**.
  ![Выбор периода для просмотра аналитических сведений об организации](/assets/images/help/organizations/org-insights-time-period.png)
5. При необходимости в правом верхнем углу страницы выберите просмотр данных максимум для трех репозиториев и нажмите кнопку **Применить**.
  ![Выберите репозитории для просмотра аналитических сведений об организации](/assets/images/help/organizations/org-insights-repos.png)

## Просмотр аналитических сведений о зависимостях организации

{% note %}

**Примечание.** Убедитесь, что вы включили [граф зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph). 

{% endnote %}

С помощью аналитических сведений о зависимостях можно просматривать уязвимости, лицензии и другие важные сведения для проектов с открытым кодом в вашей организации.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Под названием организации нажмите {% octicon "graph" aria-label="The bar graph icon" %} **Аналитические сведения**.
  ![Вкладка «Аналитические сведения» на главной панели навигации организации](/assets/images/help/organizations/org-nav-insights-tab.png)
4. Чтобы просмотреть зависимости для этой организации, щелкните **Зависимости**.
  ![Вкладка «Зависимости» на главной панели навигации организации](/assets/images/help/organizations/org-insights-dependencies-tab.png)
5. Чтобы просмотреть аналитические сведения о зависимостях для всех ваших организаций {% data variables.product.prodname_ghe_cloud %}, щелкните **Мои организации**.
  ![Кнопка «Мои организации» на вкладке «Зависимости»](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
6. Можно щелкнуть результаты в диаграммах **Открытые рекомендации по безопасности** и **Лицензии**, чтобы отфильтровать их по состоянию уязвимости, лицензии или сочетанию этих двух показателей.
  ![Графы уязвимостей и лицензий в разделе «Мои организации»](/assets/images/help/organizations/org-insights-dependencies-graphs.png)
7. Можно щелкнуть **зависимые элементы** {% octicon "package" aria-label="The package icon" %} рядом с каждой уязвимостью, чтобы просмотреть зависимые элементы в организации, которые используют каждые из библиотек.
  ![Уязвимые зависимые элементы в разделе «Мои организации»](/assets/images/help/organizations/org-insights-dependencies-vulnerable-item.png)

## Дополнительные материалы
 - [Сведения об организациях](/organizations/collaborating-with-groups-in-organizations/about-organizations)
 - [Изучение зависимостей репозитория](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)
 - [Изменение видимости аналитический сведений о зависимостях организации](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights){% ifversion ghec %}
- [Применение политик для аналитических сведения о зависимостях на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise){% endif %}
