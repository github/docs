---
title: Privaten Modus aktivieren
intro: 'Im privaten Modus erfordert {% data variables.product.prodname_ghe_server %}, dass sich jeder Benutzer anmeldet, um auf die Installation zuzugreifen.'
redirect_from:
  - /enterprise/admin/articles/private-mode
  - /enterprise/admin/guides/installation/security
  - /enterprise/admin/guides/installation/securing-your-instance
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
  - /admin/configuration/enabling-private-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Authentication
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 99488886b1da5b07c2ddb5d7054c10957f6c573b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332784'
---
Du musst den privaten Modus aktivieren, wenn {% data variables.product.product_location %} über das Internet öffentlich zugänglich ist. Im privaten Modus ist es Benutzern nicht möglich, Repositorys anonym über `git://` zu klonen. Wenn die integrierte Authentifizierung aktiviert ist, muss ein Administrator neue Benutzer einladen, um ein Konto auf der Instanz zu erstellen. Weitere Informationen findest du unter [Konfigurieren der integrierten Authentifizierung](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication).

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

Wenn der private Modus aktiviert ist, kannst du festlegen, dass nicht authentifizierte Git-Vorgänge (und alle Personen mit Netzwerkzugriff auf {% data variables.product.product_location %}) den Code eines öffentlichen Repositorys in deiner Instanz mit aktiviertem anonymem Git-Lesezugriff lesen können. Weitere Informationen findest du unter [Zulassen der Aktivierung des anonymen Git-Lesezugriffs auf öffentliche Repositorys durch Administratoren](/enterprise/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories).

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
4. Wähle **Privater Modus** aus.
  ![Kontrollkästchen zum Aktivieren des privaten Modus](/assets/images/enterprise/management-console/private-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
