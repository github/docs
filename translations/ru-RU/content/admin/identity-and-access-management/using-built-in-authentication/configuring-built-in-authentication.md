---
title: Настройка встроенной проверки подлинности
intro: 'При использовании метода проверки подлинности по умолчанию все сведения о проверке подлинности хранятся в {% данных variables.location.product_location %}.'
permissions: 'Site administrators can configure authentication for a {% data variables.product.product_name %} instance.'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
  - /admin/authentication/using-built-in-authentication
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Configure built-in authentication
ms.openlocfilehash: 740f858e0804b5648ce85c016391333acdf7bccf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098399'
---
## Сведения о встроенной проверке подлинности

По умолчанию {% data variables.product.product_name %} использует встроенную проверку подлинности. Каждый пользователь создает учетную запись пользователя на {% данных variables.location.product_location %} из приглашения или путем регистрации, а затем выполняет проверку подлинности с помощью учетных данных для учетной записи для доступа к вашему экземпляру. В экземпляре {% data variables.product.product_name %} хранятся сведения о проверке подлинности для учетной записи.

Можно запретить пользователям, не прошедшим проверку подлинности, создавать новые учетные записи пользователей в вашем экземпляре. Дополнительные сведения см. в разделе [Отключение непрошедших проверку подлинности регистраций](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups).

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Настройка встроенной проверки подлинности

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. Выберите **Встроенная проверка подлинности**.
![Выберите параметр встроенной проверки подлинности](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## Создание учетной записи

После создания экземпляра необходимо создать свою собственную учетную запись администратора.

1. На странице «Создание учетной записи администратора» в `http(s)://[hostname]/join` выберите свое имя пользователя, пароль и адрес электронной почты, а затем нажмите кнопку **Создать учетную запись**.
![Создание учетной записи администратора](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png) {% data reusables.enterprise_site_admin_settings.sign-in %}

## Дальнейшие действия

<a name="inviting-users"></a>

После настройки встроенной проверки подлинности и создания учетной записи администратора можно пригласить пользователей для создания учетных записей и использования вашего экземпляра. Дополнительные сведения см. в разделе [Приглашение пользователей к использованию вашего экземпляра](/admin/identity-and-access-management/using-built-in-authentication/inviting-people-to-use-your-instance).

## Дополнительные материалы

- [Настройка уведомлений по электронной почте](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)
