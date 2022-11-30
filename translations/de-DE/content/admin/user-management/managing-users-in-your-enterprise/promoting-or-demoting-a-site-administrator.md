---
title: Websiteadministrator hoch- oder zurückstufen
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator
  - /enterprise/admin/articles/demoting-a-site-administrator
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
  - /admin/user-management/promoting-or-demoting-a-site-administrator
intro: Websiteadministrator*innen können normale Benutzerkonten auf einen Websiteadministrator hochstufen und andere Websiteadministrator*innen auf normale Benutzer*innen zurückstufen.
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - User account
  - Enterprise
shortTitle: Manage administrators
ms.openlocfilehash: 19daa56cf7d750d69495a6ff52655784411f56ff
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '146331696'
---
{% tip %}

**Hinweis:** Wenn die [LDAP-Synchronisierung aktiviert ist](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) und das `Administrators group`-Attribut beim [Konfigurieren des LDAP-Zugriffs für Benutzer](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance) festgelegt wird, verfügen diese Benutzer automatisch über Websiteadministratorzugriff auf deine Instanz. In diesem Fall ist es nicht möglich, Benutzer*innen mit den folgenden Schritten manuell hochzustufen. Du musst sie zur Gruppe mit den LDAP-Administrator*innen hinzufügen.

{% endtip %}

Informationen zum Hochstufen eines Benutzers zum Organisationsbesitzer findest du im `ghe-org-admin-promote`-Abschnitt von [Befehlszeilenprogramme](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-admin-promote).

## Benutzer über die Enterprise-Einstellungen hochstufen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
5. Klicke in der oberen rechte Ecke der Seite auf **Besitzer hinzufügen**.
  ![Schaltfläche zum Hinzufügen eines Administrators](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. Gib im Suchfeld den Namen des Benutzers ein, und klicke auf **Hinzufügen**.
  ![Suchfeld zum Hinzufügen eines Administrators](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

## Websiteadministrator über die Enterprise-Einstellungen zurückstufen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. Gib in der oberen linken Ecke der Seite im Suchfeld „Find an administrator“ (Administrator suchen) den Benutzernamen der Person ein, die du zurückstufen möchtest.
  ![Suchfeld zum Suchen eines Administrators](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. Suche in den Suchergebnissen nach dem Benutzernamen der Person, die herabgestuft werden soll. Wähle anschließend im {% octicon "gear" %}-Dropdownmenü **Besitzer entfernen** aus.
  ![Option „Aus Unternehmen entfernen“](/assets/images/help/business-accounts/demote-admin-button.png)

## Benutzer an der Befehlszeile hochstufen

1. Stelle eine [SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)-Verbindung mit deiner Appliance her.
2. Führe zum Hochstufen [ghe-user-promote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-promote) mit dem Benutzernamen aus.
  ```shell
  $ ghe-user-promote <em>username</em>
  ```

## Websiteadministrator an der Befehlszeile zurückstufen

1. Stelle eine [SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)-Verbindung mit deiner Appliance her.
2. Führe zum Herabstufen [ghe-user-demote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-demote) mit dem Benutzernamen aus.
  ```shell
  $ ghe-user-demote <em>username</em>
  ```
