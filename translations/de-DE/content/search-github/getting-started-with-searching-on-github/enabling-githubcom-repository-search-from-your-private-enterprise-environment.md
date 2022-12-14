---
title: Aktivieren der Repositorysuche auf GitHub.com über deine private Unternehmensumgebung
shortTitle: Search GitHub.com from enterprise
intro: 'Du kannst deine persönlichen Konten auf {% data variables.product.prodname_dotcom_the_website %} und deine private {% data variables.product.prodname_enterprise %}-Umgebung verbinden, um in bestimmten Repositorys auf {% data variables.product.prodname_dotcom_the_website %} nach Inhalten {% ifversion fpt or ghec %} aus deiner privaten Umgebung{% else %} aus {% data variables.product.product_name %}zu suchen{% endif %}.'
redirect_from:
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-account
  - /articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
versions:
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
ms.openlocfilehash: 2c4ee57036ca2d0114e75a1acaeecec05be5ba3a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062458'
---
## Informationen zur Suche nach {% data variables.product.prodname_dotcom_the_website %}-Repositorys in {% data variables.product.product_name %}

Du kannst nach bestimmten privaten Repositorys auf {% data variables.product.prodname_ghe_cloud %} auf {% data variables.product.product_location %}{% ifversion ghae %} für {% data variables.product.prodname_ghe_managed %}{% endif %} suchen. Weitere Informationen zum Suchen in allen Umgebungen findest du unter [Informationen zur Suche auf GitHub](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

## Voraussetzungen

Ein Unternehmensbesitzer für {% data variables.product.product_name %} muss {% data variables.product.prodname_github_connect %} und {% data variables.product.prodname_unified_search %} für private Repositorys aktivieren. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_unified_search %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise).

## Aktivieren der Suche in {% data variables.product.prodname_dotcom_the_website %}-Repositorys in {% data variables.product.product_name %}

1. Melde dich bei {% data variables.product.product_name %} und {% data variables.product.prodname_dotcom_the_website %} an.
1. Klicke oben rechts auf einer {% data variables.product.product_name %}-Seite auf dein Profilfoto und dann auf **Einstellungen**.
![Das Symbol „Einstellung“ auf der Benutzerleiste](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
