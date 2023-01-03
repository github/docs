---
title: Приглашение пользователей к использованию вашего экземпляра
intro: 'При применении встроенной проверки подлинности для {% data variables.product.product_name %} можно пригласить пользователей по адресу электронной почты для создания учетной записи пользователя в экземпляре.'
versions:
  ghes: '*'
permissions: 'Enterprise owners can invite people to create a user account on a {% data variables.product.product_name %} instance.'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Invite people
ms.openlocfilehash: e78d75a1836b323d24f04bc6f252be512e9605e9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098299'
---
## Сведения о приглашении новых пользователей

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %}

Вы можете отключить непрошедшие проверку подлинности регистрации и требовать приглашения для создание учетной записи пользователя в экземпляре. Дополнительные сведения см. в разделе [Отключение непрошедших проверку подлинности регистраций](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups).

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %} 

## Приглашение пользователей на создание учетной записи пользователя

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

Если вы настроили сообщение электронной почты для уведомлений о {% данных variables.location.product_location %}, ваш экземпляр отправит приглашение на указанный адрес электронной почты. Дополнительные сведения см. в разделе [Настройка электронной почты для уведомлений](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications).
