---
title: Sichtbarkeit für die Organisationsmitgliedschaft konfigurieren
intro: 'Du kannst die Sichtbarkeit für neue Organisationsmitglieder in deinem Unternehmen auf öffentlich oder privat festlegen. Darüber hinaus kannst du Mitglieder daran hindern, die für sie standardmäßig festgelegte Sichtbarkeit zu ändern.'
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/configuring-visibility-for-organization-membership
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - User account
shortTitle: Set membership visibility
ms.openlocfilehash: e628fab4f8aa77579e0ce89f18a70813274928b6
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332344'
---
{% ifversion ghes %} Mithilfe eines Befehlszeilenprogramms kannst du deine Standardeinstellung zudem für alle aktuellen Organisationsmitglieder auf deiner Instanz erzwingen. Wenn du beispielsweise möchtest, dass die Sichtbarkeit jedes Organisationsmitglieds öffentlich sein soll, kannst du in den Administratoreinstellungen die Standardeinstellung auf öffentlich festlegen, die Standardeinstellung für alle neuen Mitglieder erzwingen und anschließend das Befehlszeilenprogramm verwenden, um die Einstellung für die öffentliche Sichtbarkeit für Bestandsmitglieder zu erzwingen.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
3. Verwende unter „Standardmäßige Sichtbarkeit der Organisationsmitgliedschaft“ das Dropdownmenü, und klicke auf **Privat** oder **Öffentlich**.
  ![Dropdownmenü mit der Option, um die standardmäßige Sichtbarkeit der Organisationsmitgliedschaft als öffentlich oder privat zu konfigurieren](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. Optional kannst du **Für Organisationsmitglieder erzwingen** aktivieren, um Mitglieder daran zu hindern, die für sie standardmäßig festgelegte Sichtbarkeit zu ändern.
  ![Kontrollkästchen, um die Standardeinstellung für alle Mitglieder zu erzwingen](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png){% ifversion ghes %}
5. Wenn du deine neue Sichtbarkeitseinstellung für alle vorhandenen Mitglieder erzwingen möchtest, verwende das `ghe-org-membership-update`-Befehlszeilenprogramm. Weitere Informationen findest du unter [Befehlszeilenprogramme](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-membership-update).{% endif %}
