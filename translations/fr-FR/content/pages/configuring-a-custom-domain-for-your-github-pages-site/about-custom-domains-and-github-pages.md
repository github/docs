---
title: À propos des domaines personnalisés et des pages GitHub
intro: '{% data variables.product.prodname_pages %} prend en charge l’utilisation de domaines personnalisés ou la modification de la racine de l’URL de votre site par défaut, par exemple `octocat.github.io`, en n’importe quel domaine que vous possédez.'
redirect_from:
  - /articles/about-custom-domains-for-github-pages-sites
  - /articles/about-supported-custom-domains
  - /articles/custom-domain-redirects-for-your-github-pages-site
  - /articles/about-custom-domains-and-github-pages
  - /github/working-with-github-pages/about-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Custom domains in GitHub Pages
ms.openlocfilehash: a2c5ae3df0e2dd6248db6e03fd7c64e973b14f3d
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '145134292'
---
## Domaines personnalisés pris en charge

{% data variables.product.prodname_pages %} fonctionne avec deux types de domaines : les sous-domaines et les domaines apex. Pour obtenir la liste des domaines personnalisés pris en charge, consultez « [Résolution des problèmes liés aux domaines personnalisés et {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages/#custom-domain-names-that-are-unsupported) ».

| Type de domaines personnalisés pris en charge | Exemple |
|---|---|
| Sous-domaine `www` | `www.example.com` |
| Sous-domaine personnalisé | `blog.example.com` |
| Domaine apex        | `example.com` |

Vous pouvez configurer l’une ou l’autre des configurations apex et du sous-domaine `www` pour votre site. Pour plus d’informations sur les domaines apex, consultez « [Utilisation d’un domaine apex pour votre site{% data variables.product.prodname_pages %}](#using-an-apex-domain-for-your-github-pages-site) ».

Nous vous recommandons toujours d’utiliser un sous-domaine `www`, même si vous utilisez également un domaine apex. Lorsque vous créez un nouveau site avec un domaine apex, nous tentons automatiquement de sécuriser le sous-domaine `www` à utiliser lors du service du contenu de votre site, mais vous devez apporter des modifications DNS pour utiliser le sous-domaine `www`. Si vous configurez un sous-domaine `www`, nous essayons automatiquement de sécuriser le domaine apex associé. Pour plus d’informations, consultez « [Gestion d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site) ».

Une fois que vous avez configuré un domaine personnalisé pour un utilisateur ou un site d’organisation, le domaine personnalisé remplace la partie `<user>.github.io` ou`<organization>.github.io` de l’URL pour tous les sites de projet appartenant au compte et qui n’ont pas de domaine personnalisé configuré. Par exemple, si le domaine personnalisé de votre site utilisateur est `www.octocat.com` et que vous disposez d’un site de projet sans domaine personnalisé configuré à partir d’un référentiel appelé `octo-project`, le site {% data variables.product.prodname_pages %} pour ce référentiel sera disponible à l’adresse `www.octocat.com/octo-project`.

## Utilisation d’un sous-domaine pour votre site {% data variables.product.prodname_pages %}

Un sous-domaine fait partie d’une URL avant le domaine racine. Vous pouvez configurer votre sous-domaine en tant que `www` ou en tant que section distincte de votre site, comme `blog.example.com`.

Les sous-domaines sont configurés avec un enregistrement `CNAME` via votre fournisseur DNS. Pour plus d’informations, consultez « [Gestion d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) ».

### Sous-domaines `www`

Un sous-domaine `www` est le type de sous-domaine le plus couramment utilisé. Par exemple, `www.example.com` inclut un sous-domaine `www`.

Les sous-domaines `www` sont le type de domaine personnalisé le plus stable, car les sous-domaines `www` ne sont pas affectés par les modifications apportées aux adresses IP des serveurs de {% data variables.product.product_name %}.

### Créer des sous-domaines

Un sous-domaine personnalisé est un type de sous-domaine qui n’utilise pas la variante standard `www` . Les sous-domaines personnalisés sont principalement utilisés lorsque vous souhaitez avoir deux sections distinctes de votre site. Par exemple, vous pouvez créer un site appelé `blog.example.com` et personnaliser cette section indépendamment de `www.example.com`.

## Utilisation d’un domaine apex pour votre site {% data variables.product.prodname_pages %}

Un domaine apex est un domaine personnalisé qui ne contient pas de sous-domaine, tel que `example.com`. Les domaines Apex sont également appelés domaines de base, nus, apex racine ou apex de zone.

Un domaine apex est configuré avec un enregistrement `A`, `ALIAS` ou `ANAME` via votre fournisseur DNS. Pour plus d’informations, consultez « [Gestion d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) ».

{% data reusables.pages.www-and-apex-domain-recommendation %} Pour plus d’informations, consultez « [Gestion d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %}](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site/#configuring-a-subdomain)."

## Sécurisation d’un domaine apex pour votre site {% data variables.product.prodname_pages %}

{% data reusables.pages.secure-your-domain %} Pour plus d’informations, consultez « [Vérification de votre domaine personnalisé pour {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) » et « [Gestion d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site). »

Il existe quelques raisons pour lesquelles votre site peut être automatiquement désactivé.

- Si vous passez de la version {% data variables.product.prodname_pro %} à la version {% data variables.product.prodname_free_user %}, tous les sites {% data variables.product.prodname_pages %} qui sont actuellement publiés à partir de dépôts privés dans votre compte ne seront pas publiés. Pour plus d’informations, consultez « [Rétrograder votre plan de facturation {% data variables.product.prodname_dotcom %}](/articles/downgrading-your-github-billing-plan) ».
- Si vous transférez un dépôt privé vers un compte personnel qui utilise {% data variables.product.prodname_free_user %}, le référentiel perd l’accès à la fonctionnalité {% data variables.product.prodname_pages %} et le site actuellement publié {% data variables.product.prodname_pages %} ne sera pas publié. Pour plus d’informations, consultez « [Transfert d’un dépôt](/articles/transferring-a-repository) ».

## Pour aller plus loin

- « [Résolution des problèmes liés aux domaines personnalisés et à {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages) »
