---
title: Benutzer sperren und entsperren
redirect_from:
  - /enterprise/admin/articles/suspending-a-user
  - /enterprise/admin/articles/unsuspending-a-user
  - /enterprise/admin/articles/viewing-suspended-users
  - /enterprise/admin/articles/suspended-users
  - /enterprise/admin/articles/suspending-and-unsuspending-users
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
  - /admin/user-management/suspending-and-unsuspending-users
intro: 'Wenn Benutzer*innen das Unternehmen verlassen oder in eine andere Abteilung wechseln, solltest du die entsprechenden Zugriffsberechtigungen für {% data variables.product.product_location %} entfernen oder ändern.'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Security
  - User account
shortTitle: Manage user suspension
ms.openlocfilehash: d888678438f62fb585dac1cab4905ff02d8eb824
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331904'
---
Wenn Mitarbeiter das Unternehmen verlassen, kannst du ihre {% data variables.product.prodname_ghe_server %}-Konten sperren, um Benutzerlizenzen in deiner {% data variables.product.prodname_enterprise %}-Lizenz freizugeben und gleichzeitig die von ihnen erstellten Problemtickets, Kommentare, Repositorys, „Gists“ (Ideen) und anderen Daten beizubehalten. Gesperrte Benutzer*innen können sich weder bei deiner Instanz anmelden noch Code pushen oder pullen.

Wenn du einen Benutzer sperrst, wird die Änderung sofort wirksam, ohne dass der Benutzer benachrichtigt wird. Wenn der Benutzer versucht, Inhalte aus einem Repository abzurufen oder dorthin per Push-Vorgang zu übertragen, wird der folgende Fehler angezeigt:

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with your installation administrator.
fatal: The remote end hung up unexpectedly
```

Vor dem Sperren von Websiteadministratoren musst du diese auf gewöhnliche Benutzer zurückstufen. Weitere Informationen findest du unter [Hochstufen oder Zurückstufen eines Websiteadministrators](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator).

{% tip %}

**Hinweis**: Wenn für {% data variables.product.product_location %} die [LDAP-Synchronisierung aktiviert ist](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync), werden Benutzer automatisch gesperrt, sobald sie aus dem LDAP-Verzeichnisserver entfernt werden. Wenn die LDAP-Synchronisierung für deine Instanz aktiviert ist, werden die normalen Methoden zur Benutzersperrung deaktiviert.

{% endtip %}

## Benutzer im Benutzeradministrator-Dashboard sperren

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Klicke unter „Kontosperre“ im rot markierten Gefahrenzonenfeld auf **Sperren**.
![Schaltfläche „Sperren“](/assets/images/enterprise/site-admin-settings/suspend.png)
6. Gib an, weshalb der Benutzer gesperrt wird.
![Grund für die Sperre](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

## Benutzer im Benutzeradministrator-Dashboard entsperren

Wie beim Sperren eines Benutzers wird das Entsperren eines Benutzers sofort wirksam. Der Benutzer wird nicht benachrichtigt.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Klicke in der linken Seitenleiste auf **Gesperrte Benutzer**.
![Registerkarte „Gesperrte Benutzer“](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. Klicke auf den Namen des Benutzerkontos, das entsperrt werden soll.
![Gesperrter Benutzer](/assets/images/enterprise/site-admin-settings/user/suspended-user.png) {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Klicke unter „Kontosperre“ im rot markierten Gefahrenzonenfeld auf **Entsperren**.
![Schaltfläche „Entsperren“](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. Gib an, weshalb der Benutzer entsperrt wird.
![Grund für Aufhebung der Sperre](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

## Benutzer an der Befehlszeile sperren

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Führe [ghe-user-suspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-suspend) mit dem Benutzernamen aus, der gesperrt werden soll.
  ```shell
  $ ghe-user-suspend <em>username</em>
  ```

## Benutzerdefinierte Meldung für gesperrte Benutzer erstellen

Du kannst eine benutzerdefinierte Meldung erstellen, die gesperrten Benutzern angezeigt wird, wenn sie versuchen, sich anzumelden.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. Klicke auf **Meldung hinzufügen**.
![Meldung hinzufügen](/assets/images/enterprise/site-admin-settings/add-message.png)
6. Gib deine Meldung in das Feld **Meldung für gesperrten Benutzer** ein. Du kannst Markdown eingeben oder die Markdown-Symbolleiste zum Formatieren deiner Meldung verwenden.
![Meldung für gesperrten Benutzer](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. Klicke unterhalb des Felds **Meldung für gesperrten Benutzer** auf die Schaltfläche **Vorschau**, um die dargestellte Meldung zu überprüfen.
![Vorschauschaltfläche](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. Überprüfe die dargestellte Meldung.
![Dargestellte Meldung für gesperrten Benutzer](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}

## Benutzer an der Befehlszeile entsperren

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Führe [ghe-user-unsuspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-unsuspend) mit dem Benutzernamen aus, der entsperrt werden soll.
  ```shell
  $ ghe-user-unsuspend <em>username</em>
  ```

## Weiterführende Themen
- [Sperren von Benutzern](/rest/reference/enterprise-admin#suspend-a-user)
