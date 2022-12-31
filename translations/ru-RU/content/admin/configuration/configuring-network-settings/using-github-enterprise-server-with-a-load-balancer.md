---
title: Использование сервера GitHub Enterprise с подсистемой балансировки нагрузки
intro: 'Используйте подсистему балансировки нагрузки перед одним экземпляром {% data variables.product.prodname_ghe_server %} или парой экземпляров в конфигурации с высоким уровнем доступности.'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
  - /enterprise/admin/configuration/using-github-enterprise-server-with-a-load-balancer
  - /admin/configuration/using-github-enterprise-server-with-a-load-balancer
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
  - Networking
shortTitle: Use a load balancer
ms.openlocfilehash: d703b7c0161a4b53fd2870aa5beafe930f56ee41
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098065'
---
## Сведения о подсистеме балансировки нагрузки

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

## Обработка сведений о подключениях клиентов

Так как клиентские подключения к {% data variables.product.prodname_ghe_server %} поступают из подсистемы балансировки нагрузки, IP-адрес клиента может быть утерян.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

{% data reusables.enterprise_installation.terminating-tls %}

### Включение поддержки протокола PROXY для {% данных variables.location.product_location %}

Настоятельно рекомендуется включить поддержку протокола PROXY как для экземпляр, так и для подсистемы балансировки нагрузки. Используйте инструкции, предоставленные поставщиком, чтобы включить протокол PROXY в подсистеме балансировки нагрузки. Дополнительные сведения см. в [документации протокола PROXY](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt).

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. В разделе **Внешние балансировщики нагрузки** выберите **Включить поддержку протокола PROXY**.
![Флажок для включения поддержки протокола PROXY](/assets/images/enterprise/management-console/enable-proxy.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### Включение поддержки X-Forwarded-For для {% данных variables.location.product_location %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% warning %}

**Предупреждение.** Если вы настроите `X-Forwarded-For` поддержку {% данных variables.location.product_location %} и подсистеме балансировки нагрузки, возможно, вы не сможете подключиться к {% данных variables.enterprise.management_console %}. Дополнительные сведения см. в разделе [Ошибка: "Срок действия сеанса истек" для подключений к {% data variables.enterprise.management_console %}](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console).

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. В разделе **Внешние балансировщики нагрузки** выберите **Разрешить заголовок HTTP X-Forwarded-For**.
![Флажок для разрешения заголовка HTTP X-Forwarded-For](/assets/images/enterprise/management-console/allow-xff.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## Настройка проверок работоспособности

Проверки работоспособности позволяют подсистеме балансировки нагрузки прекратить направлять трафик узлу, который не отвечает, в случае неудачной попытки выполнения предварительно настроенной проверки этого узла. Если экземпляр находится в автономном режиме из-за обслуживания или непредвиденного сбоя, подсистема балансировки нагрузки может отобразить страницу состояния. В конфигурации высокого уровня доступности подсистема балансировки нагрузки может использоваться как элемент стратегии отработки отказа. Однако автоматический переход на другой ресурс пар высокого уровня доступности не поддерживается. Необходимо вручную повысить уровень экземпляра-реплики, прежде чем он начнет обслуживание запросов. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_ghe_server %} для обеспечения высокого уровня доступности](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/).

{% data reusables.enterprise_clustering.health_checks %} {% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## Устранение неполадок с подключением через подсистему балансировки нагрузки

Если вы не можете подключиться к службам на {% данных variables.location.product_location %} с помощью подсистемы балансировки нагрузки, ознакомьтесь со следующими сведениями, чтобы устранить проблему.

{% note %}

**Примечание.** Всегда тестируйте изменения в сетевой инфраструктуре и конфигурации экземпляров в промежуточной среде. Дополнительные сведения см. в разделе [Настройка экземпляра промежуточного процесса](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

{% endnote %}

### Ошибка: "Срок действия сеанса истек" для подключений к {% data variables.enterprise.management_console %}.

Если включить поддержку заголовка `X-Forwarded-For` в экземпляре и подсистемы балансировки нагрузки, возможно, вы не сможете получить доступ к {% data variables.enterprise.management_console %} экземпляра. Дополнительные сведения о {% data variables.enterprise.management_console %} и портах, необходимых для подключений, см. в разделе [Доступ к консоли управления](/admin/configuration/configuring-your-enterprise/accessing-the-management-console) и [Сетевые порты](/admin/configuration/configuring-network-settings/network-ports).

Если {% данных variables.location.product_location %} указывает, что срок действия сеанса истек при подключении к {% данных variables.enterprise.management_console %} через подсистему балансировки нагрузки, попробуйте одну из следующих конфигураций в подсистеме балансировки нагрузки.

- Отключите заголовки `X-Forwarded-For` для подключений к экземпляру через порты 8080 и 8443.
- Настройте подсистему балансировки нагрузки для работы на уровне 4 и используйте протокол PROXY вместо `X-Forwarded-For` для прохода по IP-адресам клиента. Дополнительные сведения см. в разделе "[Включение поддержки протокола PROXY для {% данных variables.location.product_location %}](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance)".

Дополнительные сведения см. в документации по подсистеме балансировки нагрузки.

### Динамические обновления для проблем и проверка запусков не работают

Когда доступ к данным {% variables.location.product_location %} осуществляется через подсистему балансировки нагрузки или обратный прокси-сервер, ожидаемые динамические обновления, такие как новые комментарии по проблемам и изменениям индикаторов уведомлений или проверка выходных данных выполнения, могут не отображаться до обновления страницы. Это особенно верно, если обратный прокси-сервер или подсистема балансировки нагрузки работают в режиме уровня 7 или не поддерживают требуемый протокол [веб-сокета](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API). 

Чтобы включить динамические обновления, может потребоваться перенастроить подсистему балансировки нагрузки или прокси-сервер. Дополнительные сведения см. в документации по подсистеме балансировки нагрузки.
