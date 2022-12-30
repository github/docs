---
title: Inaktive Benutzer verwalten
redirect_from:
  - /enterprise/admin/articles/dormant-users
  - /enterprise/admin/articles/viewing-dormant-users
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant
  - /enterprise/admin/user-management/managing-dormant-users
  - /admin/user-management/managing-dormant-users
intro: '{% data reusables.enterprise-accounts.dormant-user-activity-threshold %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Licensing
ms.openlocfilehash: 7594a0fc22bef10e84334727ad9e79aa02cd1da6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146680925'
---
{% ifversion ghec %} {% data reusables.enterprise-accounts.dormant-user-release-phase %} {% endif %}

## Informationen zu inaktiven Benutzer*innen

{% data reusables.enterprise-accounts.dormant-user-activity %}

{% ifversion ghes or ghae%}
## Inaktive Benutzer anzeigen

{% data reusables.enterprise-accounts.viewing-dormant-users %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Klicke in der linken Seitenleiste auf **Inaktive Benutzer**.
![Registerkarte „Dormant users“ (Inaktive Benutzer)](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% ifversion ghes %}
4. Zum Sperren aller inaktiven Benutzer in dieser Liste klicke im oberen Bereich der Seite auf **Suspend all** (Alle sperren).
![Schaltfläche „Suspend all“ (Alle sperren)](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

## Bestimmen, ob ein Benutzerkonto inaktiv ist

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
5. Im Abschnitt **User info** (Benutzerinformationen) gibt ein roter Punkt mit dem Wort „Dormant“ (Inaktiv) an, dass das Benutzerkonto inaktiv ist, und ein grüner Punkt mit dem Wort „Active“ (Aktiv) gibt an, dass es aktiv ist.
![Inaktives Benutzerkonto](/assets/images/enterprise/stafftools/dormant-user.png)
![Aktives Benutzerkonto](/assets/images/enterprise/stafftools/active-user.png)

## Inaktivitätsschwelle konfigurieren

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Verwende unter „Dormancy threshold“ (Inaktivitätsschwelle) das Dropdownmenü, und klicke auf die gewünschte Inaktivitätsschwelle.
![Das Dropdownmenü „Dormancy threshold“ (Inaktivitätsschwelle)](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)

{% endif %}

{% ifversion ghec %}
## Herunterladen des Berichts zu inaktiven Benutzer*innen aus deinem Unternehmenskonto

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. Wenn du deinen (Beta)-Bericht „Dormant Users“ (Inaktive Benutzer) als CSV-Datei herunterladen möchtest, klicke unter „Other“ (Sonstiges) auf {% octicon "download" aria-label="The Download icon" %} **Download** (Herunterladen).
  ![Schaltfläche „Download“ (Herunterladen ) unter „Other“ (Sonstiges) auf der Seite „Compliance“](/assets/images/help/business-accounts/dormant-users-download-button.png)

{% tip %}

**Tipp:** Bei der Bewertung der Benutzerinaktivität wird die Benutzeraktivität auf nur solche Aktivitäten beschränkt, die im Zusammenhang mit Organisationen, Repositorys oder Anmeldeereignissen stehen, die dem Unternehmen zugeordnet sind. Wenn ein*e Benutzer*in beispielsweise kürzlich ein Issue in einem öffentlichen Repository kommentiert hat, das nicht dem Unternehmen zugeordnet ist, kann der oder die Benutzer*in als ruhend angesehen werden. Wenn der oder die Benutzer*in jedoch kürzlich ein Issue in einem öffentlichen Repository kommentiert hat, das einer Organisation in deinem Unternehmen zugeordnet ist, wird er oder sie nicht als inaktiv betrachtet und nicht im Bericht „Inaktive Benutzer“ aufgeführt.

Bei Webanmeldungsereignissen gelten nur Anmeldeereignisse über eine SSO-Domäne, die deinem Unternehmen zugeordnet ist, als Benutzeraktivität im Zusammenhang mit dem Unternehmen.

{% endtip %}

{% endif %}
