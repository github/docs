---
title: Включение ограничений доступа приложений OAuth для организации
intro: Владельцы организации могут разрешить ограничения доступа {% data variables.product.prodname_oauth_app %}, чтобы предотвратить доступ к ресурсам организации для ненадежных приложений, позволяя членам организации использовать {% data variables.product.prodname_oauth_apps %} для своих личных учетных записей.
redirect_from:
- /articles/enabling-third-party-application-restrictions-for-your-organization
- /articles/enabling-oauth-app-access-restrictions-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/enabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Enable OAuth App
ms.openlocfilehash: 7ae5885530f449c8ce9981067b0d0fe8b23af0d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145140590"
---
{% data reusables.organizations.oauth_app_restrictions_default %}

{% warning %}

**Предупреждения**
- Включение ограничений доступа {% data variables.product.prodname_oauth_app %} приведет к отмене доступа организации для всех ранее авторизованных {% data variables.product.prodname_oauth_apps %} и ключей SSH. Дополнительные сведения см. в разделе [Сведения об ограничениях доступа {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions).
- После настройки ограничений доступа {% data variables.product.prodname_oauth_app %} необходимо повторно авторизовать все {% data variables.product.prodname_oauth_app %}, которым требуется доступ к частным данным организации на постоянной основе. Всем членам организации потребуется создать новые ключи SSH, и организация должна будет создавать новые ключи развертывания по мере необходимости.
- Если включены ограничения доступа {% data variables.product.prodname_oauth_app %}, приложения могут использовать маркер OAuth для доступа к сведениям о транзакциях {% data variables.product.prodname_marketplace %}.

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. В разделе "Политика доступа сторонних приложений" щелкните **Настроить ограничения доступа приложений**.
  ![Кнопка настройки ограничений](/assets/images/help/settings/settings-third-party-set-up-restrictions.png)
6. После просмотра сведений об ограничениях доступа сторонних приложений нажмите кнопку **Ограничить доступ сторонних приложений**.
  ![Кнопка подтверждения ограничения](/assets/images/help/settings/settings-third-party-restrict-confirm.png)
