---
title: Настройка сервера веб-прокси исходящего трафика
intro: 'Прокси-сервер обеспечивает дополнительный уровень безопасности для {% данных variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
  - /admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure an outbound proxy
ms.openlocfilehash: 6b40ceaefa91210000122ede73263e93df481631
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098329'
---
## Сведения о прокси-серверах с {% data variables.product.product_name %}

Если прокси-сервер включен для {% данных variables.location.product_location %}, исходящие сообщения, отправленные {% данных variables.product.prodname_ghe_server %}, сначала отправляются через прокси-сервер, если конечный узел не добавляется в качестве исключения прокси-сервера HTTP. Типы исходящих сообщений включают исходящие веб-перехватчики, отправку пакетов и получение устаревших аватаров. URL-адрес прокси-сервера — это протокол, домен или IP-адрес, а также номер порта, например `http://127.0.0.1:8123`.

{% note %}

**Примечание:**  Чтобы подключить {% данных variables.location.product_location %} к {% данных variables.product.prodname_dotcom_the_website %}, конфигурация прокси-сервера должна разрешить подключение и `github.com` `api.github.com`. Дополнительные сведения см. в разделе «[Подключение корпоративной учетной записи к {% data variables.product.prodname_dotcom_the_website %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)».

{% endnote %}

{% data reusables.actions.proxy-considerations %} Дополнительные сведения об использовании {% data variables.product.prodname_actions %} с {% data variables.product.prodname_ghe_server %} см. в разделе "[Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)».

## Настройка сервера веб-прокси исходящего трафика

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
1. В поле **Прокси-сервер HTTP** введите URL-адрес прокси-сервера.
  ![Поле для ввода URL-адреса прокси-сервера HTTP](/assets/images/enterprise/management-console/http-proxy-field.png)
  
5. При необходимости в разделе **Исключения прокси-сервера HTTP** перечислите через запятую все узлы, которым не требуется доступ к прокси-серверу. Чтобы запретить всем узлам в домене доступ к прокси-серверу, можно использовать `.` в качестве префикса с подстановочными знаками.  Например. `.octo-org.tentacle`
  ![Поле для ввода любых исключений прокси-сервера HTTP](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
