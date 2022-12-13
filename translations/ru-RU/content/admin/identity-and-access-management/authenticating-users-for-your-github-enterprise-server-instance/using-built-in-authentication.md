---
title: Использование встроенной проверки подлинности
intro: When you use the default authentication method, all authentication details are stored within {% data variables.product.product_location %}. Built-in authentication is the default method if you don’t already have an established authentication provider, such as LDAP, SAML, or CAS.
redirect_from:
- /enterprise/admin/user-management/using-built-in-authentication
- /enterprise/admin/authentication/using-built-in-authentication
- /admin/authentication/using-built-in-authentication
- /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
versions:
  ghes: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- Identity
shortTitle: Use built-in authentication
ms.openlocfilehash: 01ba651506aa70498b1d100bfc90f11ae47f6924
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 04/07/2022
ms.locfileid: "141532481"
---
Вы можете создавать пользовательские сообщения, которые пользователи будут видеть на страницах входа и выхода. Дополнительные сведения см. в разделе [Настройка сообщений для пользователей в вашем экземпляре](/enterprise/admin/user-management/customizing-user-messages-on-your-instance).

## <a name="configuring-built-in-authentication"></a>Настройка встроенной проверки подлинности

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. Выберите **Встроенная проверка подлинности**.
![Выберите параметр встроенной проверки подлинности](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## <a name="creating-your-account"></a>Создание учетной записи

После создания экземпляра необходимо создать свою собственную учетную запись администратора.

1. На странице «Создание учетной записи администратора» в `http(s)://[hostname]/join` выберите свое имя пользователя, пароль и адрес электронной почты, а затем нажмите кнопку **Создать учетную запись**.
![Создание учетной записи администратора](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png) {% data reusables.enterprise_site_admin_settings.sign-in %}

## <a name="inviting-users"></a>Приглашение пользователей

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

{% tip %}

**Совет.** Если на устройстве настроено сообщение электронной почты для уведомлений, приглашение также будет отправлено на указанный адрес электронной почты.

{% endtip %}

## <a name="further-reading"></a>Дополнительные материалы

- [Настройка уведомлений по электронной почте](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)
