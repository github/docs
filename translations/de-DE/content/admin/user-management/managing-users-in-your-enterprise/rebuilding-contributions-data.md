---
title: Beitragsdaten erneut erstellen
intro: 'Es ist ggf. erforderlich, Beitragsdaten neu zu erstellen, um vorhandene Commits mit einem Benutzerkonto zu verknüpfen.'
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data
  - /enterprise/admin/user-management/rebuilding-contributions-data
  - /admin/user-management/rebuilding-contributions-data
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Repositories
  - User account
shortTitle: Rebuild contributions
ms.openlocfilehash: 66a4aff597be725eb06dd4c8743ee2ad8691c7e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104704'
---
Wenn ein Commit per Push-Vorgang an {% data variables.product.prodname_enterprise %} übertragen wird, wird er mit einem Benutzerkonto verknüpft, sofern sie beide derselben E-Mail-Adresse zugeordnet sind. Vorhandene Commits werden jedoch *nicht* retroaktiv verknüpft, wenn ein Benutzer eine neue E-Mail-Adresse registriert oder ein neues Konto erstellt.

1. Besuche die Profilseite des Benutzers.
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Klicke links auf der Seite auf **Administrator**. ![Registerkarte „Administrator“](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. Klicke unter **Beitragsdaten** auf **Neu erstellen**.
![Schaltfläche „Neu erstellen“](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} startet nun Hintergrundaufträge, um Commits mit dem Konto dieses Benutzers neu zu verknüpfen.
  ![In die Warteschlange eingereihte Neuerstellungsaufträge](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
