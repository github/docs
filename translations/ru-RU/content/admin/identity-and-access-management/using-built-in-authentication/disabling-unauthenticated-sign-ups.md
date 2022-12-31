---
title: Отключение попыток регистрации без проверки подлинности
redirect_from:
  - /enterprise/admin/articles/disabling-sign-ups
  - /enterprise/admin/user-management/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/disabling-unauthenticated-sign-ups
  - /admin/authentication/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
intro: 'Если вы используете встроенную проверку подлинности для {% данных variables.location.product_location %}, вы можете заблокировать создание новых учетных записей пользователей в экземпляре без проверки подлинности.'
permissions: 'Site administrators can disable unauthenticated sign-ups on a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Block unauthenticated sign-up
ms.openlocfilehash: 1a127b2937a00948dbeed2fecaf5ee706deb7359
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098759'
---
## Сведения о не прошедших проверку подлинности регистрациях

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %} Можно отключить не прошедшие проверку подлинности регистрации и потребовать приглашения для создания учетной записи пользователя в экземпляре.

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Отключение попыток регистрации без проверки подлинности

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. Снимите флажок **Включить регистрацию**.
![Флажок "Включить регистрацию"](/assets/images/enterprise/management-console/enable-sign-up.png) {% data reusables.enterprise_management_console.save-settings %}
