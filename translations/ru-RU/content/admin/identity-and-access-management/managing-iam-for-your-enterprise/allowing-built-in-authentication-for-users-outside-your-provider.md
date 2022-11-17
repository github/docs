---
title: Разрешение встроенной проверки подлинности для пользователей за пределами поставщика
intro: 'Вы можете настроить резервную проверку подлинности, чтобы разрешить встроенную проверку подлинности для пользователей, у которых нет учетной записи в вашем поставщике проверки подлинности CAS, LDAP или SAML.'
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Fallback authentication
ms.openlocfilehash: d011a710898e19dfdfa3591cbba2cbf7ae629885
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064437'
---
## Сведения о встроенной проверке подлинности для пользователей за пределами поставщика

По умолчанию при включении внешней проверки подлинности для {% data variables.product.product_name %} встроенная проверка подлинности отключена для вашего экземпляра. Дополнительные сведения см. в разделе [Сведения о проверке подлинности для организации](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication).

Если вам не удается добавить определенные учетные записи во внешнего поставщика проверки подлинности, например учетные записи подрядчиков или пользователей компьютеров, можно настроить резервную проверку подлинности. Резервная проверка подлинности позволяет использовать встроенную проверку подлинности для внешних пользователей и получать доступ к резервной учетной записи, если поставщик проверки подлинности недоступен.

Если вы настроите встроенную проверку подлинности, а пользователь успешно пройдет проверку подлинности с помощью SAML или CAS, этот пользователь больше не сможет пройти проверку подлинности с помощью имени пользователя и пароля. Если пользователь успешно проходит проверку подлинности с помощью протокола LDAP, учетные данные больше не считаются внутренними.

{% warning %}

**Внимание!** Если вы отключили встроенную проверку подлинности, необходимо отдельно приостановить доступ всех пользователей, которые больше не должны иметь доступ к экземпляру. Дополнительные сведения см. в разделе [Приостановка и возобновление работы пользователей](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users).

{% endwarning %}

## Настройка встроенной проверки подлинности для пользователей за пределами поставщика

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. Выберите своего поставщика удостоверений
  ![Параметр для выбора поставщика удостоверений](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. Выберите **Разрешить создание учетных записей со встроенной проверкой подлинности**.
  ![Выберите параметр встроенной проверки подлинности](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. Ознакомьтесь с предупреждением и нажмите кнопку **ОК**.

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## Приглашение пользователей за пределами поставщика для проверки подлинности в вашем экземпляре

Когда пользователь принимает приглашение, он может использовать свое имя пользователя и пароль для входа, а не вход с помощью поставщика удостоверений.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## Дополнительные материалы

- [Использование CAS для корпоративной системы IAM](/admin/identity-and-access-management/using-cas-for-enterprise-iam)
- [Использование LDAP для IAM организации](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)
- [Использование SAML для корпоративной системы IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam)
