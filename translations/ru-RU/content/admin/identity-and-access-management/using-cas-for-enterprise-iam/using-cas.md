---
title: Использование центра администрирования
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication
  - /enterprise/admin/articles/about-cas-authentication
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
  - /admin/authentication/using-cas
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-cas
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-cas
intro: 'Если вы используете центральную службу проверки подлинности (CAS) для централизованного доступа к нескольким веб-приложениям, можно интегрировать {% data variables.product.product_name %}, настроив проверку подлинности CAS для вашего экземпляра.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 6064d3cc063068ee5be602d70c1c0031270539d2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099175'
---
## Сведения о проверке подлинности CAS для {% data variables.product.product_name %}

CAS — это протокол единого входа (SSO), который обеспечивает централизированную проверку подлинности для нескольких веб-приложений. Дополнительные сведения см. в разделе [Служба централизированной проверки подлинности](https://en.wikipedia.org/wiki/Central_Authentication_Service) в Википедии.

После настройки cas пользователи, использующие {% данных variables.location.product_location %}, должны использовать {% данных variables.product.pat_generic %} для проверки подлинности запросов API или Git по протоколу HTTP(S). Учетные данные CAS нельзя использовать для проверки подлинности этих запросов. Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

Если настроить cas, пользователи с учетными записями поставщика удостоверений (IdP) не используют лицензию пользователя, пока пользователь не войдет в {% данных variables.location.product_location %}.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Рекомендации по использованию имени пользователя в центре администрирования

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Дополнительные сведения см. в разделе [Рекомендации по использованию имени пользователя для внешней проверки подлинности](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

## Атрибуты центра администрирования

Доступны следующие атрибуты.

| Имя атрибута           | Тип     | Описание |
|--------------------------|----------|-------------|
| `username`               | Обязательно | {% data variables.product.prodname_ghe_server %} username. |

## Настройка центра администрирования

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. Выберите **Центр администрирования**.

   ![Снимок экрана: выбор CAS для проверки подлинности](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Снимок экрана: вариант резервной встроенной проверки подлинности для CAS](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. В поле **URL-адрес сервера** введите полный URL-адрес сервера центра администрирования. Если сервер центра администрирования использует сертификат, который нельзя проверить {% data variables.product.prodname_ghe_server %}, можно использовать команду `ghe-ssl-ca-certificate-install` для установки в качестве доверенного сертификата. Дополнительные сведения см. в статье "[Программы командной строки](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-install)".
