---
title: Aktivieren einheitlicher Beiträge für dein Unternehmen
shortTitle: Unified contributions
intro: 'Du kannst Benutzer*innen erlauben, anonymisierte Beitragszahlen für ihre Arbeit auf {% data variables.product.product_location %} in ihre Beitragsdiagramme auf {% data variables.product.prodname_dotcom_the_website %} aufzunehmen.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-contributions-between-your-enterprise-account-and-githubcom
permissions: 'Enterprise owners can enable unified contributions between {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
ms.openlocfilehash: af07f30a8f164f6bec3d3c0f44c77181f1e8db7b
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876765'
---
{% data reusables.github-connect.beta %}

## Informationen zu einheitlichen Beiträgen

Als Unternehmensbesitzer*in du Endbenutzer*innen erlauben, anonymisierte Beitragszahlen für ihre Arbeit auf {% data variables.product.product_location %} an ihr {% data variables.product.prodname_dotcom_the_website %}-Beteiligungsdiagramm zu senden.

Nachdem du {% data variables.product.prodname_unified_contributions %} aktiviert hast und bevor einzelne Benutzer eine Anzahl Beiträge von {% data variables.product.product_location %} an {% data variables.product.prodname_dotcom_the_website %} senden können, muss jeder Benutzer auch sein Benutzerkonto mit {% data variables.product.product_name %} mit einem persönlichen Konto über {% data variables.product.prodname_dotcom_the_website %} verbinden. Weitere Informationen findest du unter [Senden von Unternehmensbeiträgen an dein {% data variables.product.prodname_dotcom_the_website %}-Profil](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile).

{% data reusables.github-connect.sync-frequency %}

Wenn der Unternehmensbesitzer die Funktion deaktiviert oder Entwickler die Verbindung abbrechen, werden die {% data variables.product.product_name %}-Anzahl an Beiträgen auf {% data variables.product.prodname_dotcom_the_website %} gelöscht. Wenn der Benutzer seine Profile nach ihrer Deaktivierung erneut verbindet, wird die Anzahl der Beiträge für die letzten 90 Tage wiederhergestellt.

{% data variables.product.product_name %} sendet **nur** die Anzahl der Beiträge und die Quelle ({% data variables.product.product_name %}) für verbundene Benutzer. Es werden weder Informationen zum Beitrag noch dazu gesendet, wie er zustande kam.

## Informationen zu einheitlichen Beiträgen

Bevor du {% data variables.product.prodname_unified_contributions %} für {% data variables.product.product_location %} aktivierst, musst du {% data variables.product.prodname_github_connect %} aktivieren. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect).

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Melde dich bei {% data variables.product.product_location %} und {% data variables.product.prodname_dotcom_the_website %} an.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Klicke unter „Benutzer können Beitragszahlen auf {% data variables.product.prodname_dotcom_the_website %} freigeben“ auf **Zugriff anfordern**.
  ![Option zum Anfordern des Zugriffs auf einheitliche Beiträge](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png){% ifversion ghes %}
2. [Melde dich](https://enterprise.github.com/login) bei der {% data variables.product.prodname_ghe_server %}-Website an, um weitere Anweisungen zu erhalten.

Wenn du einen Zugriff anforderst, wirst du zur {% data variables.product.prodname_ghe_server %}-Website weitergeleitet, um deine aktuellen Nutzungsbedingungen zu überprüfen.
{% endif %}
