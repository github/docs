---
title: Activation de la recherche de dépôts GitHub.com à partir de votre environnement d’entreprise privé
shortTitle: Search GitHub.com from enterprise
intro: 'Vous pouvez connecter vos comptes personnels sur {% data variables.product.prodname_dotcom_the_website %} et votre environnement privé {% data variables.product.prodname_enterprise %} pour rechercher du contenu dans certains référentiels {% data variables.product.prodname_dotcom_the_website %} {% ifversion fpt or ghec %} de votre environnement privé{% else %} de {% data variables.product.product_name %}{% endif %}.'
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
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147062457'
---
## À propos de la recherche de dépôts {% data variables.product.prodname_dotcom_the_website %} à partir de {% data variables.product.product_name %}

Vous pouvez rechercher des dépôts privés désignés sur {% data variables.product.prodname_ghe_cloud %} à partir de {% data variables.product.product_location %}{% ifversion ghae %} sur {% data variables.product.prodname_ghe_managed %}{% endif %}. Pour plus d’informations sur la recherche entre les environnements, consultez « [À propos de la recherche sur GitHub](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) ».

## Prérequis

Un propriétaire d’entreprise pour {% data variables.product.product_name %} doit activer {% data variables.product.prodname_github_connect %} et {% data variables.product.prodname_unified_search %} pour les dépôts privés. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_unified_search %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise) ».

## Activation de la recherche de dépôts {% data variables.product.prodname_dotcom_the_website %} à partir de {% data variables.product.product_name %}

1. Connectez-vous à {% data variables.product.product_name %} et {% data variables.product.prodname_dotcom_the_website %}.
1. Sur {% data variables.product.product_name %}, dans l’angle supérieur droit d’une page, cliquez sur la photo de votre profil, puis sur **Paramètres**.
![Icône de paramètres dans la barre d’utilisateurs](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
