---
title: Gesetzliche Aufbewahrungspflicht für einen Benutzer oder für eine Organisation festlegen
intro: 'Du kannst eine gesetzliche Aufbewahrungspflicht für einen Benutzer oder für eine Organisation festlegen, um sicherzustellen, dass die ihm oder ihr gehörenden Repositorys nicht dauerhaft aus Ihrem Unternehmen gelöscht werden können.'
redirect_from:
  - /enterprise/admin/user-management/placing-a-legal-hold-on-a-user-or-organization
  - /admin/user-management/placing-a-legal-hold-on-a-user-or-organization
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Auditing
  - Enterprise
  - Organizations
  - User account
shortTitle: Place a legal hold
ms.openlocfilehash: 5837bfcd05867ed5be7e298996bb0de2680b4921
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199945'
---
Wenn ein Repository gelöscht wird, bleibt es in der Regel 90 Tage lang weiterhin auf der Disk und kann über das Websiteadministrator-Dashboard wiederhergestellt werden. Nach 90 Tagen wird das Repository bereinigt und dauerhaft gelöscht. Wenn du eine gesetzliche Aufbewahrungspflicht für einen Benutzer oder für eine Organisation festlegst, können die ihm oder ihr gehörenden Repositorys auf unbestimmte Zeit wiederhergestellt werden.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Klicke auf **Gesetzliche Aufbewahrungspflicht festlegen**.
![Schaltfläche „Gesetzliche Aufbewahrungspflicht festlegen“](/assets/images/enterprise/site-admin-settings/place-legal-hold-button.png)
