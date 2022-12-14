---
title: Включение GitHub Advanced Security для предприятия
shortTitle: Enabling GitHub Advanced Security
intro: 'Вы можете настроить {% data variables.product.product_name %}, чтобы включить {% data variables.product.prodname_GH_advanced_security %}. В результате вы получите дополнительные возможности, которые помогают пользователям находить и устранять проблемы безопасности в коде.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/enabling-github-advanced-security-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: b57e8a5e348226e9d68fb5835c80b5ce8a2d6bc6
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098086'
---
## Сведения о включении {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes %} При включении {% data variables.product.prodname_GH_advanced_security %} для предприятия администраторы репозитория во всех организациях могут включить эти функции, если только не настроена политика для ограничения доступа. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.prodname_advanced_security %} на предприятии](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise).
{% else %} При включении {% data variables.product.prodname_GH_advanced_security %} для предприятия администраторы репозитория во всех организациях могут включить эти функции. {% endif %}

{% ifversion ghes %} Руководство по поэтапному развертыванию GitHub Advanced Security см. в статье "[Введение во внедрение GitHub Advanced Security в большом масштабе](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)".
{% endif %}

## Проверка того, включает ли ваша лицензия {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Если ваша лицензия включает в себя {% data variables.product.prodname_GH_advanced_security %}, на странице лицензии есть раздел, показывающий сведения о текущем использовании.
![Раздел {% data variables.product.prodname_GH_advanced_security %} лицензии Enterprise](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png) {% endif %}

## Предварительные требования для включения {% data variables.product.prodname_GH_advanced_security %}

1. Обновите лицензию для {% data variables.product.product_name %}, чтобы включить {% data variables.product.prodname_GH_advanced_security %}.{% ifversion ghes %} Информацию о лицензировании см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).{% endif %}
2. Скачайте новый файл лицензии. Дополнительные сведения см. в разделе [Скачивание лицензии для {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise).
3. Отправьте новый файл лицензии в {% данных variables.location.product_location %}. Дополнительные сведения см. в разделе [Передача новой лицензии в {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server).{% ifversion ghes %}
4. Ознакомьтесь с предварительными требованиями для функций, которые планируете включить.

    - {% data variables.product.prodname_code_scanning_capc %}, см. [Настройка {% data variables.product.prodname_code_scanning %} для устройства](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning).
    - {% data variables.product.prodname_secret_scanning_caps %}, см. [Настройка {% data variables.product.prodname_secret_scanning %} для устройства](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning).{% endif %}
    - {% data variables.product.prodname_dependabot %}, см. [Включение {% data variables.product.prodname_dependabot %} для предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise). 

## Включение и отключение функций {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes %}
1. В разделе "Безопасность" выберите возможности, которые вы хотите включить, и отмените выбор любых возможностей, которые вы хотите отключить.
{% ifversion ghes %}![Флажок для включения или отключения возможностей {% data variables.product.prodname_advanced_security %}](/assets/images/enterprise/3.2/management-console/enable-security-checkboxes.png){% else %}![Флажок для включения или отключения возможностей {% data variables.product.prodname_advanced_security %}](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% endif %}{% else %}
1. В разделе {% data variables.product.prodname_advanced_security %} щелкните **{% data variables.product.prodname_code_scanning_capc %}** .
![Флажок, позволяющий включить или отключить {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

После завершения перезапуска {% data variables.product.product_name %} можно настраивать любые дополнительные ресурсы, необходимые для новых включенных функций. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_code_scanning %} для устройства](/admin/advanced-security/configuring-code-scanning-for-your-appliance).

## Включение или отключение функций {% data variables.product.prodname_GH_advanced_security %} через административную оболочку (SSH)

Вы можете включить или отключить функции программным способом для {% данных variables.location.product_location %}. Дополнительные сведения об административной оболочке и утилитах командной строки для {% data variables.product.prodname_ghe_server %} см. в разделе [Доступ к административной оболочке (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh) и [Утилиты командной строки](/admin/configuration/command-line-utilities#ghe-config).

Например, можно включить любую функцию {% data variables.product.prodname_GH_advanced_security %} с помощью инструментов инфраструктуры как кода при развертывании экземпляра для подготовки или аварийного восстановления.

1. SSH в {% данных variables.location.product_location %}.
1. Включите функции для {% data variables.product.prodname_GH_advanced_security %}.

    - Чтобы включить {% data variables.product.prodname_code_scanning_capc %}, введите следующие команды.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
    - Чтобы включить {% data variables.product.prodname_secret_scanning_caps %}, введите следующую команду.
    ```shell
    ghe-config app.secret-scanning.enabled true
    ```
    - Чтобы включить граф зависимостей, введите следующую {% ifversion ghes %}команду{% else %}команды{% endif %}.
    {% ifversion ghes %}```shell ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
    ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
2. Optionally, disable features for {% data variables.product.prodname_GH_advanced_security %}.

    - To disable {% data variables.product.prodname_code_scanning %}, enter the following commands.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
    - Чтобы отключить {% data variables.product.prodname_secret_scanning %}, введите следующую команду.
    ```shell
    ghe-config app.secret-scanning.enabled false
    ```
    - Чтобы отключить граф зависимостей, введите следующую {% ifversion ghes %}команду{% else %}команды{% endif %}.
    {% ifversion ghes %}```shell ghe-config app.dependency-graph.enabled false
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled false
    ghe-config app.github.vulnerability-alerting-and-settings-enabled false
    ```{% endif %}
3. Apply the configuration.
    ```shell
    ghe-config-apply
    ```
