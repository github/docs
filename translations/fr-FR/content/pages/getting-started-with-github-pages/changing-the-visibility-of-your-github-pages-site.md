---
title: Modification de la visibilité de votre site pages GitHub
intro: Vous pouvez gérer le contrôle d’accès pour votre site de projet en publiant le site publiquement ou en privé.
versions:
  ghec: '*'
permissions: 'People with admin access to a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: Change visibility of site
ms.openlocfilehash: f80ec04f0f16413414a4334e02ee3b45f534b46c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145282856'
---
## À propos du contrôle d’accès pour les sites {% data variables.product.prodname_pages %}

Avec le contrôle d’accès pour {% data variables.product.prodname_pages %}, vous pouvez restreindre l’accès au site de votre projet en publiant le site en privé. Un site publié en privé est accessible uniquement aux utilisateurs disposant d’un accès en lecture au référentiel à partir duquel le site est publié. Vous pouvez utiliser des sites publiés en privé pour partager votre documentation interne ou base de connaissances avec les membres de votre entreprise. 

{% data reusables.pages.privately-publish-ghec-only %}

Si votre entreprise utilise {% data variables.product.prodname_emus %}, le contrôle d’accès n’est pas disponible et tous les sites {% data variables.product.prodname_pages %} sont uniquement accessibles aux autres membres de l’entreprise. Pour plus d’informations sur {% data variables.product.prodname_emus %}, consultez « [À propos de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users) ».

Si votre organisation utilise {% data variables.product.prodname_ghe_cloud %} sans {% data variables.product.prodname_emus %}, vous pouvez choisir de publier les sites de vos projets en privé ou publiquement sur Internet.

Le contrôle d’accès est disponible pour les sites de projet publiés à partir d’un référentiel privé ou interne appartenant à l’organisation. Vous ne pouvez pas gérer le contrôle d’accès pour un site d’organisation. Pour plus d’informations sur les types de {% data variables.product.prodname_pages %} sites, consultez « [À propos de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites) ».

## À propos des sous-domaines pour les sites publiés en privé

Les sites publiés en privé sont disponibles sur un sous-domaine différent de celui des sites publiés publiquement. Cela garantit que votre site {% data variables.product.prodname_pages %} est sécurisé à partir du moment où il est publié :

- Nous sécurisez automatiquement chaque sous-domaine de `*.pages.github.io` avec un certificat TLS et appliquons HSTS pour garantir que les navigateurs servent toujours la page via HTTPS.
- Nous utilisons un sous-domaine unique pour le site publié en privé afin de garantir que d’autres référentiels de votre organisation ne peuvent pas publier de contenu sur la même origine que le site. Cela protège votre site contre le « [tossing de cookies](https://github.blog/2013-04-09-yummy-cookies-across-domains/) ». C’est pourquoi nous n’hébergeons pas de sites {% data variables.product.prodname_pages %} sur le domaine `github.com`.

Vous pouvez voir le sous-domaine unique de votre site sous l’onglet « Pages » de vos paramètres de référentiel. Si vous utilisez un générateur de site statique configuré pour générer le site avec le nom du référentiel comme chemin d’accès, vous devrez peut-être mettre à jour les paramètres du générateur de site statique lors de la modification du site en privé. Pour plus d’informations, consultez « [Configuration de Jekyll dans votre site {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) » ou la documentation de votre générateur de site statique.

Pour utiliser un domaine plus court et plus mémorable pour votre site publié en privé, vous pouvez configurer un domaine personnalisé. Pour plus d’informations, consultez « [Configuration d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site). »

## Changement de la visibilité de votre site {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. Sous « {% data variables.product.prodname_pages %} », sélectionnez le menu déroulant **Visibilité de {% data variables.product.prodname_pages %}** , puis cliquez sur une visibilité.
   ![Liste déroulante pour choisir une visibilité pour votre site](/assets/images/help/pages/public-or-private-visibility.png)
4. Pour voir votre site publié, sous « {% data variables.product.prodname_pages %} », cliquez sur l’URL de votre site.
![URL de votre site publié en privé](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
