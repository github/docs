---
title: LDAP
intro: 'API LDAP можно использовать для обновления связей учетных записей между пользователем или командой {% data variables.product.product_name %} и связанной записью LDAP или для постановки в очередь новой синхронизации.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f8a78c4f685c516b9fe7c47b28914eedd41710f2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098967'
---
С помощью конечных точек сопоставления LDAP можно обновить различающееся имя (DN), с которыми сопоставляется пользователь или команда. Обратите внимание, что конечные точки LDAP обычно эффективны только в том случае, если на устройстве {% data variables.product.product_name %} [включена синхронизация LDAP](/enterprise/admin/authentication/using-ldap). Конечную точку [Обновление сопоставления LDAP для пользователя](#update-ldap-mapping-for-a-user) можно использовать, когда LDAP включен, даже если синхронизация LDAP отключена.

{% данных reusables.user-settings.enterprise-admin-api-classic-pat-only %}
