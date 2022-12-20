---
title: Aktivieren der einheitlichen Suche für dein Unternehmen
shortTitle: Unified search
intro: 'Du kannst es Benutzern ermöglichen, Repositorys auf {% data variables.product.prodname_dotcom_the_website %} in ihre Suche einzuschließen, wenn sie die Suche über {% data variables.product.product_location %} ausführen.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom
permissions: 'Enterprise owners can enable unified search between {% data variables.product.product_name %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
ms.openlocfilehash: 0270600113cb3b341b38e6f55d7108798d523ebb
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145103075'
---
## Informationen zu {% data variables.product.prodname_unified_search %}

{% data reusables.github-connect.beta %}

Wenn du die einheitliche Suche aktivierst, können Benutzer Suchergebnisse von Inhalten auf {% data variables.product.prodname_dotcom_the_website %} anzeigen, wenn sie von {% data variables.product.product_location %} aus{% ifversion ghae %} auf {% data variables.product.prodname_ghe_managed %}{% endif %} suchen. 

Du kannst Suchergebnisse für öffentliche Repositorys auf {% data variables.product.prodname_dotcom_the_website %} und separat für private Repositorys auf {% data variables.product.prodname_ghe_cloud %} zulassen. Wenn du die einheitliche Suche für private Repositorys aktivierst, können Benutzer nur private Repositorys durchsuchen, auf die sie Zugriff haben und die im Besitz des verbundenen Organisations- oder Unternehmenskontos sind. Weitere Informationen findest du unter [Informationen zur Suche auf {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously).

Benutzer können nie {% data variables.product.product_location %} von {% data variables.product.prodname_dotcom_the_website %} aus durchsuchen, selbst wenn sie auf beide Umgebungen zugreifen können.

Nachdem du die einheitliche Suche für {% data variables.product.product_location %} aktiviert hast, muss jeder Benutzer sein Benutzerkonto auf {% data variables.product.product_name %} mit einem Benutzerkonto auf {% data variables.product.prodname_dotcom_the_website %} verbinden, bevor er Suchergebnisse aus privaten Repositories auf {% data variables.product.prodname_dotcom_the_website %} in {% data variables.product.product_location %} sehen kann. Weitere Informationen findest du unter [Aktivieren der {% data variables.product.prodname_dotcom_the_website %}-Repositorysuche in deiner privaten Unternehmensumgebung](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment).

Bei der Suche über die REST und GraphQL-APIs sind die {% data variables.product.prodname_dotcom_the_website %}-Suchergebnisse nicht enthalten. Die erweiterte Suche und die Suche nach Wikis in {% data variables.product.prodname_dotcom_the_website %} werden nicht unterstützt.

## Aktivieren von {% data variables.product.prodname_unified_search %}

Bevor du {% data variables.product.prodname_unified_search %} aktivieren kannst, musst du {% data variables.product.prodname_github_connect %} aktivieren. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect).

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Melde dich bei {% data variables.product.product_location %} und {% data variables.product.prodname_dotcom_the_website %} an.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Klicke im Dropdownmenü unter „Benutzer können {% data variables.product.prodname_dotcom_the_website %} durchsuchen“ auf **Aktiviert**.
  ![Aktivieren der Suchoption im Dropdownmenü zum Durchsuchen von GitHub.com](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. Klicke im Dropdownmenü unter „Benutzer können private Repositorys auf {% data variables.product.prodname_dotcom_the_website %} durchsuchen“ auf **Aktiviert**.
    ![Aktivieren der Option zum Durchsuchen privater Repositorys im Dropdownmenü zum Durchsuchen von GitHub.com](/assets/images/enterprise/site-admin-settings/enable-private-search.png)
