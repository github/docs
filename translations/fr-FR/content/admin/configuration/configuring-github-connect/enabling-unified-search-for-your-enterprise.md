---
title: Activation de la recherche unifiée pour votre entreprise
shortTitle: Unified search
intro: 'Vous pouvez autoriser les utilisateurs à inclure des dépôts sur {% data variables.product.prodname_dotcom_the_website %} dans les résultats de la recherche quand ils effectuent des recherches à partir de {% data variables.product.product_location %}.'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145103074'
---
## À propos de la {% data variables.product.prodname_unified_search %}

{% data reusables.github-connect.beta %}

Quand vous activez la recherche unifiée, les utilisateurs peuvent afficher les résultats de recherche dans le contenu sur {% data variables.product.prodname_dotcom_the_website %} lorsque la recherche s’effectue depuis {% data variables.product.product_location %}{% ifversion ghae %} sur {% data variables.product.prodname_ghe_managed %}{% endif %}. 

Vous pouvez choisir d’autoriser les résultats de recherche pour les dépôts publics sur {% data variables.product.prodname_dotcom_the_website %}, et vous pouvez choisir séparément d’autoriser les résultats de recherche pour les dépôts privés sur {% data variables.product.prodname_ghe_cloud %}. Si vous activez la recherche unifiée pour les dépôts privés, les utilisateurs peuvent uniquement rechercher dans les dépôts privés auxquels ils ont accès et qui sont la propriété de l’organisation connectée ou du compte d’entreprise. Pour plus d’informations, consultez « [À propos de la recherche sur {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously) ».

Les utilisateurs ne pourront jamais effectuer de recherches dans {% data variables.product.product_location %} à partir de {% data variables.product.prodname_dotcom_the_website %}, même s’ils ont accès aux deux environnements.

Après avoir activé la recherche unifiée pour {% data variables.product.product_location %}, pour permettre aux utilisateurs individuels de voir les résultats de recherche de dépôts privés sur {% data variables.product.prodname_dotcom_the_website %} dans {% data variables.product.product_location %}, chaque utilisateur doit également connecter son compte d’utilisateur sur {% data variables.product.product_name %} avec un compte d’utilisateur sur {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Activation de la recherche dans des dépôts {% data variables.product.prodname_dotcom_the_website %} dans votre compte d’entreprise privé](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment) ».

La recherche via les API REST et GraphQL n’inclut pas les résultats de recherche sur {% data variables.product.prodname_dotcom_the_website %}. La recherche avancée et la recherche de wikis dans {% data variables.product.prodname_dotcom_the_website %} ne sont pas prises en charge.

## Activation de la {% data variables.product.prodname_unified_search %}

Avant de pouvoir activer {% data variables.product.prodname_unified_search %}, vous devez activer {% data variables.product.prodname_github_connect %}. Pour plus d’informations, consultez « [Gestion de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect) ».

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Connectez-vous à {% data variables.product.product_location %} et à {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Sous « Les utilisateurs peuvent effectuer des recherches sur {% data variables.product.prodname_dotcom_the_website %} », utilisez le menu déroulant, puis cliquez sur **Activé**.
  ![Option d’activation de la recherche dans le menu déroulant de recherche sur GitHub.com](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. Sous « Les utilisateurs peuvent effectuer des recherches dans les dépôts privés sur {% data variables.product.prodname_dotcom_the_website %} », utilisez le menu déroulant, puis cliquez sur **Activé**.
    ![Option d’activation de la recherche dans les dépôts privés dans le menu déroulant de recherche sur GitHub.com](/assets/images/enterprise/site-admin-settings/enable-private-search.png)
