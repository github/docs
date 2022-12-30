---
title: Включение графа зависимостей для предприятия
intro: 'Вы можете разрешить пользователям определять зависимости проектов, включив граф зависимостей.'
shortTitle: Enable dependency graph
permissions: Site administrators can enable the dependency graph.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: 39fb5e8eb74518dc4614d5494ec04427b5e12399
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135682'
---
## Сведения о графе зависимостей

{% data reusables.dependabot.about-the-dependency-graph %} Дополнительные сведения о графе зависимостей см. в разделе [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

После включения графа зависимостей для предприятия можно включить {% data variables.product.prodname_dependabot %} для обнаружения небезопасных зависимостей в репозитории{% ifversion ghes %} и автоматического исправления уязвимостей{% endif %}. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_dependabot %} для вашего предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).

{% ifversion ghes %} Граф зависимостей можно включить с помощью {% data variables.enterprise.management_console %} или административной оболочки. Мы рекомендуем использовать {% data variables.enterprise.management_console %}, если {% data variables.location.product_location %} не использует кластеризацию.

## Включение графа зависимостей с помощью {% data variables.enterprise.management_console %}

Если {% data variables.location.product_location %} использует кластеризацию, вы не сможете включить граф зависимостей с {% data variables.enterprise.management_console %} и вместо него необходимо использовать административную оболочку. Дополнительные сведения см. в разделе [Включение графа зависимостей с помощью административной оболочки](#enabling-the-dependency-graph-via-the-administrative-shell).

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. В разделе "Безопасность" щелкните **Граф зависимостей**.
![Флажок для включения или отключения графа зависимостей](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
1. Нажмите **Перейти к экземпляру**.

## Включение графа зависимостей с помощью административной оболочки

{% endif %} {% data reusables.enterprise_site_admin_settings.sign-in %}
1. В административной оболочке включите граф зависимостей в {% data variables.location.product_location %}: {% ifversion ghes %}''shell ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. Apply the configuration.
    ```shell
    $ ghe-config-apply
    ```
3. Вернитесь на {% data variables.product.prodname_ghe_server %}.
