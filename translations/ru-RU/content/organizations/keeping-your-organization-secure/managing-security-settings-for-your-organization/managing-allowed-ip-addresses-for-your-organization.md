---
title: Управление разрешенными IP-адресами для организации
intro: 'Вы можете ограничить доступ к частным ресурсам организации, настроив список IP-адресов, к которым разрешено подключение.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization
versions:
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage allowed IP addresses
permissions: Organization owners can manage allowed IP addresses for an organization.
ms.openlocfilehash: f0484aae26b5acb8bac07c7b002af2d623d7dfef
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184031'
---
## Сведения о разрешенных IP-адресах

Можно ограничить доступ к частным ресурсам организации, настроив список разрешений для определенных IP-адресов. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %} {% note %}

**Примечание.** Только организации, использующие {% data variables.product.prodname_ghe_cloud %}, могут использовать списки разрешенных IP-адресов. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

После настройки списка разрешений можно также автоматически добавить в список разрешений любые IP-адреса, настроенные для {% data variables.product.prodname_github_apps %}, которые установлены в организации. Создатель {% data variables.product.prodname_github_app %} настроил список разрешений для приложения, указывающий IP-адреса, с использованием которых выполняется приложение. Наследуя их список разрешений в вашей среде, вы избегаете отправки запросов на подключение от отклоняемого приложения. Дополнительные сведения см. в разделе [Разрешение доступа с помощью {% data variables.product.prodname_github_apps %}](#allowing-access-by-github-apps).

Вы также можете настроить разрешенные IP-адреса на уровне корпоративной учетной записи, а записи в списке разрешений корпоративной учетной записи наследуются всеми организациями, принадлежащими предприятию. {% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} Дополнительные сведения см. в разделе [Применение политик для параметров безопасности на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise).

## Добавление разрешенного IP-адреса

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## Включение разрешенных IP-адресов

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. В разделе "Список разрешенных IP-адресов" выберите **Включить список разрешенных IP-адресов**.
  ![Флажок для разрешения IP-адресов](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. Выберите команду **Сохранить**.

## Разрешение доступа {% data variables.product.prodname_github_apps %}

Если вы используете список разрешений, то можете также автоматически добавить в список разрешений любые IP-адреса, настроенные для {% data variables.product.prodname_github_apps %}, которые установлены в организации. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Дополнительные сведения о создании списка разрешений для созданного {% data variables.product.prodname_github_app %} см. в разделе [Управление разрешенными IP-адресами для приложения GitHub](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. В разделе "Список разрешенных IP-адресов" выберите **Включить конфигурацию списка разрешенных IP-адресов для установленных приложений GitHub**.
  ![Установите флажок, чтобы разрешить IP-адреса приложений GitHub](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Выберите команду **Сохранить**.

## Изменение разрешенного IP-адреса

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. Нажмите кнопку **Обновить**.
{% data reusables.identity-and-permissions.check-ip-address %}

## Проверка допустимости IP-адреса

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## Удаление разрешенного IP-адреса

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Использование {% data variables.product.prodname_actions %} со списком разрешенных IP-адресов

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
