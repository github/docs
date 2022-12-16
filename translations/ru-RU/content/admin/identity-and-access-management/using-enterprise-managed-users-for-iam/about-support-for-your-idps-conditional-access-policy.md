---
title: Сведения о поддержке политики условного доступа поставщика удостоверений
shortTitle: Conditional access policy
intro: 'Если ваше предприятие использует единый вход OIDC, {% data variables.product.prodname_dotcom %} может проверить доступ к вашему предприятию и его ресурсам с помощью политики условного доступа поставщика удостоверений (CAP).'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: aed7008bd008ccfd6303ccbb36f4d6f3bd7002ca
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180000'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## О поддержке политик условного доступа

{% data reusables.enterprise-accounts.emu-cap-validates %}

{% data variables.product.product_name %} поддерживает CAP для любого {% data variables.enterprise.prodname_emu_enterprise %}, где включен единый вход OIDC. {% data variables.product.product_name %} применяет условия IP-адреса поставщика удостоверений, но не может обеспечить соответствие требованиям вашего устройства. Владельцы предприятия могут использовать эту конфигурацию списка разрешенных IP-адресов вместо списка разрешенных IP-адресов {% data variables.product.product_name %}. Это можно сделать после настройки единого входа OIDC. Дополнительные сведения о списках разрешенных IP-адресов см. в разделах [Ограничение сетевого трафика с помощью списка разрешенных IP-адресов](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list) и [Управление разрешенными IP-адресами для вашей организации](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization).


Дополнительные сведения об использовании OIDC с {% data variables.product.prodname_emus %} см. в разделах [Настройка OIDC для пользователей, управляемых предприятием](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users) и [Миграция с SAML на OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc).

## Рекомендации по интеграции и автоматизации

{% data variables.product.prodname_dotcom %} отправляет исходный IP-адрес вашему поставщику удостоверений для проверки с вашей CAP. Чтобы убедиться, что действия и приложения не блокируются CAP вашего поставщика удостоверений, вам необходимо внести изменения в конфигурацию.

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

Действия, использующие {% data variables.product.pat_generic %}, скорее всего, будут заблокированы capp вашего поставщика удостоверений. Рекомендуется, чтобы {% data variables.product.pat_generic %}s создавались учетной записью службы, которая затем исключается из элементов управления IP-адресами в CAP поставщика удостоверений. 

Если вы не можете использовать учетную запись службы, еще одним вариантом разблокировки действий, использующих {% data variables.product.pat_generic %}s, является разрешение диапазонов IP-адресов, используемых {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Сведения об IP-адресах GitHub](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).

### {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %} 

Когда {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %} делают запросы от имени участника, {% data variables.product.prodname_dotcom %} отправит IP-адрес сервера приложения вашему поставщику удостоверений для проверки. Если IP-адрес сервера приложения не проверен CAP вашего поставщика удостоверений, запрос не будет выполнен.

Вы можете связаться с владельцами приложений, которые необходимо использовать, запросить их диапазоны IP-адресов и настроить CAP вашего поставщика удостоверений, чтобы разрешить доступ из этих диапазонов IP-адресов. Если не удается связаться с владельцами, можно просмотреть журналы входа в IdP, чтобы проверить IP-адреса, указанные в запросах, а затем внести эти адреса в список разрешенных. 

Если вы не хотите разрешать все диапазоны IP-адресов для всех корпоративных приложений, вы также можете исключить установленные {% data variables.product.prodname_github_apps %} и авторизованные {% data variables.product.prodname_oauth_apps %} из списка разрешений поставщика удостоверений. В этом случае эти приложения будут продолжать работать независимо от исходного IP-адреса. Дополнительные сведения см. в разделе [Применение политик для параметров безопасности на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps).
