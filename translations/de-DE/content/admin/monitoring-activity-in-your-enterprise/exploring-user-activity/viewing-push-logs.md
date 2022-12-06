---
title: Push-Protokolle anzeigen
intro: Websiteadministratoren können eine Liste der Git-Pushvorgänge für jedes Repository im Unternehmen einsehen.
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
  - /admin/user-management/viewing-push-logs
  - /admin/user-management/monitoring-activity-in-your-enterprise/viewing-push-logs
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Git
  - Logging
ms.openlocfilehash: c759d380b7cbc54918e87ed354c8264bc533c31b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104831'
---
Push-Protokolleinträge zeigen:

- Wer den Push-Vorgang initiiert hat
- Ob es ein erzwungener Push-Vorgang war
- Den Branch, an den Elemente per Push-Vorgang übertragen wurden
- Das für den Push-Vorgang verwendete Protokoll
- Die IP-Quelladresse
- Der für den Push-Vorgang verwendete Git-Client
- Die SHA-Hashes vor und nach dem Vorgang

## Push-Protokolle eines Repositorys anzeigen

1. Melde dich bei {% data variables.product.prodname_ghe_server %} als Websiteadministrator*in an.
1. Navigiere zu einem Repository.
1. Klicke in der rechten oberen Ecke auf der Repositoryseite auf {% octicon "rocket" aria-label="The rocket ship" %}.
    ![Raketensymbol für den Zugriff auf Websiteadministratoreinstellungen](/assets/images/enterprise/site-admin-settings/access-new-settings.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
4. Klicke auf der linken Randleiste auf **Pushprotokoll**.
![Registerkarte „Pushprotokoll“](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

{% ifversion ghes %}
## Push-Protokolle eines Repositorys an der Befehlszeile anzeigen

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Öffne im entsprechenden Git-Repository die Auditprotokolldatei:
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "cat audit_log"
  ```
{% endif %}
