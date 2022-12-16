---
title: Aktivieren der automatischen Benutzerlizenzsynchronisierung für dein Unternehmen
intro: 'Du kannst die Lizenznutzung in deinen {% data variables.product.prodname_enterprise %}-Umgebungen verwalten, indem du Benutzerlizenzen von {% data variables.product.product_location %} mit der {% data variables.product.prodname_ghe_cloud %} synchronisierst.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: Enterprise owners can enable automatic user license synchronization.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Automatic user license sync
ms.openlocfilehash: eb0216dcdb629e96ef83de2eea8a7d7b6660a171
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145910559'
---
## Informationen zur automatischen Lizenzsynchronisierung

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#data-transmission-for-github-connect).

Wenn du die automatische Benutzerlizenzsynchronisierung für dein Unternehmen aktivierst, synchronisiert {% data variables.product.prodname_github_connect %} die Lizenznutzung zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %} automatisch wöchentlich.{% ifversion ghes > 3.4 %} Du kannst deine Lizenzdaten jederzeit außerhalb der automatischen wöchentlichen Synchronisierung synchronisieren, indem du manuell einen Lizenzsynchronisierungsauftrag auslöst. Weitere Informationen findest du unter [Auslösen eines Lizenzsynchronisierungsauftrags](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud#triggering-a-license-sync-job).{% endif %}

Wenn du mehrere {% data variables.product.prodname_ghe_server %}-Instanzen verwendest, kannst du die automatische Lizenzsynchronisierung zwischen allen Instanzen und ein und demselben Organisations- oder Unternehmenskonto in {% data variables.product.prodname_ghe_cloud %} aktivieren.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

Darüber hinaus kannst du Informationen zu {% data variables.product.prodname_ghe_server %}-Benutzerlizenzen manuell auf {% data variables.product.prodname_ghe_cloud %} hochladen. Weitere Informationen findest du unter [Synchronisieren der Lizenznutzung zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Lizenzsynchronisierung aktivieren

Bevor du die Lizenzsynchronisierung in {% data variables.product.product_location %} aktivierst, musst du {% data variables.product.prodname_github_connect %} aktivieren. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. Verwende das Dropdownmenü unter „Server kann Benutzerlizenzanzahl und -nutzung synchronisieren“ und wähle **Aktiviert** aus.
  ![Dropdownmenü zum Aktivieren der automatischen Synchronisierung von Benutzerlizenzen](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
