---
title: Настройка поддержки экосистемы пакетов для предприятия
intro: 'Вы можете настроить {% data variables.product.prodname_registry %} для своего предприятия, полностью включив или отключив экосистемы отдельных пакетов на предприятии, в том числе {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker и npm. Узнайте о других требованиях к конфигурации для поддержки экосистем отдельных пакетов.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
shortTitle: Configure package ecosystems
ms.openlocfilehash: 83de80e4233f671a7a923394d2fd3f6e554bba10
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147062549'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Включение или отключение отдельных экосистем пакетов

Чтобы предотвратить передачу новых пакетов, можно настроить экосистему, которая ранее была включена, на режим **Только для чтения**, позволяя скачивание существующих пакетов.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %}
1. В разделе "Переключения экосистемы" для каждого типа пакета выберите **Включено**, **Только для чтения** или **Отключено**.
   {%- ifversion ghes > 3.4 %}{% note -%} **Примечание.** Для переключения параметров {% data variables.product.prodname_container_registry %} необходимо включить изоляцию поддомена.
   {%- endnote %}{%- endif %}{%- ifversion ghes %} ![Переключения экосистемы](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png){% else %} ![Переключения экосистемы](/assets/images/enterprise/3.1/site-admin-settings/ecosystem-toggles.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes %}
## Подключение к официальному реестру npm

Если вы включили пакеты npm на предприятии и хотите разрешить доступ к официальному реестру npm, а также к реестру npm {% data variables.product.prodname_registry %}, необходимо выполнить дополнительную настройку.

{% data variables.product.prodname_registry %} использует прозрачный прокси-сервер для сетевого трафика, который подключается к официальному реестру npm по через `registry.npmjs.com`. Прокси-сервер включен по умолчанию, и его нельзя отключить.

Чтобы разрешить сетевые подключения к реестру npm, необходимо настроить списки ACL сети, позволяющие {% data variables.product.prodname_ghe_server %} отправлять трафик HTTPS в `registry.npmjs.com` через порт 443:

| Источник | Назначение | Порт | Тип |
|---|---|---|---|
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443 | HTTPS |

Обратите внимание, что подключения к `registry.npmjs.com` проходят через сеть Cloudflare и впоследствии не подключаются к одному статическому IP-адресу; вместо этого устанавливается соединение с IP-адресом в пределах диапазонов CIDR, перечисленных здесь: https://www.cloudflare.com/ips/.

Если вы хотите включить вышестоящие источники npm, выберите `Enabled` для `npm upstreaming`.

{% endif %}

## Дальнейшие действия

В качестве следующего шага рекомендуется проверить, нужно ли обновить или передать TLS-сертификат для URL-адреса узла пакетов. Дополнительные сведения см. в разделе [Начало работы с GitHub Packages для предприятия](/admin/packages/getting-started-with-github-packages-for-your-enterprise).
