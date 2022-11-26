---
title: Применение политик для аналитики зависимостей на предприятии
intro: Вы можете применять политики для анализа зависимостей в организациях предприятия или разрешить настройку политик в каждой организации.
permissions: Enterprise owners can enforce policies for dependency insights in an enterprise.
redirect_from:
  - /articles/enforcing-a-policy-on-dependency-insights
  - /articles/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Dependencies
  - Enterprise
  - Organizations
  - Policies
shortTitle: Policies for dependency insights
ms.openlocfilehash: 6862a5d1210eda7d9c14d77eabf21e7a9a5a25b4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112563'
---
## Сведения о применении политик для аналитики зависимостей на предприятии

Аналитика зависимостей показывает все пакеты, от которых зависят репозитории в организациях предприятия. Аналитика зависимостей включает агрегированные сведения о рекомендациях по безопасности и лицензиях. Дополнительные сведения см. в разделе [Просмотр аналитических сведений для организации](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization).

## Применение политики для видимости аналитики зависимостей

Во всех организациях, принадлежащих предприятию, можно контролировать, могут ли члены организации просматривать аналитические сведения о зависимостях. Можно также разрешить владельцам администрировать параметр на уровне организации. Дополнительные сведения см. в разделе [Изменение видимости аналитических сведений о зависимостях организации](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. На левой боковой панели щелкните **Организации**.
  ![Вкладка "Организации" на боковой панели предприятия](/assets/images/help/business-accounts/settings-policies-org-tab.png)
4. В разделе "Политики организации" проверьте сведения об изменении параметра. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. В разделе "Политики организации" выберите политику в раскрывающемся меню.
  ![Раскрывающееся меню с параметрами политик организации](/assets/images/help/business-accounts/organization-policy-drop-down.png)
