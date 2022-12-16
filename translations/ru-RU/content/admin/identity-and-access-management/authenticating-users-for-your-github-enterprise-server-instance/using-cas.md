---
title: Использование центра администрирования
redirect_from:
- /enterprise/admin/articles/configuring-cas-authentication
- /enterprise/admin/articles/about-cas-authentication
- /enterprise/admin/user-management/using-cas
- /enterprise/admin/authentication/using-cas
- /admin/authentication/using-cas
- /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-cas
intro: CAS is a single sign-on (SSO) protocol for multiple web applications. A CAS user account does not take up a {% ifversion ghes %}user license{% else %}seat{% endif %} until the user signs in.
versions:
  ghes: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- Identity
- SSO
ms.openlocfilehash: 3b1f25bfcd014142ff4eaf9f3ef3b1be468ba8c6
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 04/07/2022
ms.locfileid: "141532473"
---
{% data reusables.enterprise_user_management.built-in-authentication %}

## <a name="username-considerations-with-cas"></a>Рекомендации по использованию имени пользователя в центре администрирования

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

## <a name="cas-attributes"></a>Атрибуты центра администрирования

Доступны следующие атрибуты.

| Имя атрибута           | Тип     | Описание |
|--------------------------|----------|-------------|
| `username`               | Обязательно | {% data variables.product.prodname_ghe_server %} username. |

## <a name="configuring-cas"></a>Настройка центра администрирования
{% warning %}

**Предупреждение.** Перед настройкой центра администрирования на {% data variables.product.product_location %} обратите внимание, что пользователи не смогут использовать свои имена пользователей и пароли центра администрирования для проверки подлинности запросов API или операций Git по протоколу HTTP/HTTPS. Вместо этого им потребуется [создать маркер доступа](/enterprise/{{ currentVersion }}/user/articles/creating-an-access-token-for-command-line-use).

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. Выберите **Центр администрирования**.
![Выбор центра администрирования](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Установите флажок встроенной проверки подлинности для центра администрирования](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. В поле **URL-адрес сервера** введите полный URL-адрес сервера центра администрирования. Если сервер центра администрирования использует сертификат, который нельзя проверить {% data variables.product.prodname_ghe_server %}, можно использовать команду `ghe-ssl-ca-certificate-install` для установки в качестве доверенного сертификата.
