---
title: Ограничение сетевого трафика для предприятия
shortTitle: Restricting network traffic
intro: Вы можете использовать список разрешенных IP-адресов, чтобы ограничить доступ к вашей организации только подключениями с указанных IP-адресов.
versions:
  ghae: '*'
type: how_to
topics:
- Access management
- Enterprise
- Fundamentals
- Networking
- Security
redirect_from:
- /admin/configuration/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: 67c7067362ac94e5cbc64be4704ba0ec3f6606e0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147682855"
---
## Сведения о списках разрешенных IP-адресов

По умолчанию авторизованные пользователи могут получить доступ к предприятию с любого IP-адреса. Владельцы предприятия могут ограничивать доступ к ресурсам, принадлежащим организациям в учетной записи предприятия, путем настройки списка разрешений для определенных IP-адресов. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

Вы также можете настраивать разрешенные IP-адреса для отдельной организации. Дополнительные сведения см. в разделе [Управление разрешенными IP-адресами для организации](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization).

По умолчанию правила группы безопасности сети (NSG) Azure оставляют весь входящий трафик открытым на портах 22, 80, 443 и 25. Владельцы предприятия могут связаться с {% data variables.contact.github_support %}, чтобы настроить ограничения доступа для экземпляра.

Для ограничений на уровне экземпляра с помощью групп безопасности сети Azure обратитесь к {% data variables.contact.github_support %} с IP-адресами, которым должен быть разрешен доступ к корпоративному экземпляру. Укажите диапазоны адресов, используя стандартный формат CIDR (бесклассовая междоменная маршрутизация). {% data variables.contact.github_support %} настроит соответствующие правила брандмауэра для предприятия, чтобы ограничить сетевой доступ по протоколам HTTP, SSH, HTTPS и SMTP. Дополнительные сведения см. в разделе [Получение помощи от {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support).

## Добавление разрешенного IP-адреса

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## Разрешение доступа {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## Включение разрешенных IP-адресов

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. В разделе "Список разрешенных IP-адресов" выберите **Включить список разрешенных IP-адресов**.
  ![Флажок для разрешения IP-адресов](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Выберите команду **Сохранить**.

## Изменение разрешенного IP-адреса

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Нажмите кнопку **Обновить**.
{% data reusables.identity-and-permissions.check-ip-address %}

{% ifversion ip-allow-list-address-check %}
## Проверка допустимости IP-адреса

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %} {% endif %}

## Удаление разрешенного IP-адреса

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Использование {% data variables.product.prodname_actions %} со списком разрешенных IP-адресов

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
