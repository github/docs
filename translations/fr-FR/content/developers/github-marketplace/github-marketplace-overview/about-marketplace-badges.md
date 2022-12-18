---
title: À propos des badges de la marketplace
intro: 'Découvrez les badges que vous pouvez voir pour certains référencements d’applications et d’actions dans {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /developers/github-marketplace/about-verified-creator-badges
  - /developers/github-marketplace/about-marketplace-badges
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 27f11aa4ae2693bcc336ecdf4cbfb68d8679d743
ms.sourcegitcommit: 74c60a4564bcc17e47b5a67941ac6d9fe13b6a5c
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186162'
---
## Pour les applications GitHub

Certaines applications disponible sur {% data variables.product.prodname_marketplace %} présente le badge {% octicon "verified" aria-label="The verified badge" %} et une info-bulle qui indique « Domaine de l’éditeur et e-mail vérifiés ». Ce badge signifie que l’application appartient à une organisation qui a :

- vérifié la propriété de son domaine et dispose d’un badge vérifié sur son profil ;
- confimé son adresse e-mail pour que le support {% data variables.product.prodname_dotcom %} puisse la contacter ;
- exigé une authentification à deux facteurs en son sein. Pour plus d’informations, consultez « [Exiger l’authentification à 2 facteurs dans votre organisation](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization) ».

![Badge Marketplace pour les applications GitHub](/assets/images/marketplace/apps-with-verified-publisher-badge-tooltip.png)

{% note %} {% data variables.product.prodname_dotcom %} n’analyse pas l’application. Le badge {% octicon "verified" aria-label="The verified badge" %} sur la marketplace confirme uniquement que l’éditeur satisfait aux exigences listées ci-dessus.
{% endnote %}

Pour savoir comment ajouter ce badge à votre application, consultez « [Demande de vérification de l’éditeur pour votre organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization) ».

Certaines applications disponible sur {% data variables.product.prodname_marketplace %} présente le badge {% octicon "verified" aria-label="The verified badge" %} et une info-bulle qui indique « L’application remplit les conditions nécessaires au référencement » plutôt que « Domaine de l’éditeur et e-mail vérifiés ». Cette info-bulle signifie que l’application satisfait aux exigences de référencement décrites dans « [Conditions à remplir pour référencer une application](/developers/github-marketplace/requirements-for-listing-an-app) », mais que l’éditeur n’a pas été vérifié, comme décrit dans « [Demande de vérification de l’éditeur pour votre organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization) ». Les applications qui arborent ce badge ne peuvent pas changer leur plan tarifaire tant que l’éditeur n’a pas fait sa demande de vérification en bonne et due forme.

![Badge Marketplace pour les applications GitHub](/assets/images/marketplace/apps-with-unverified-publisher-badge-tooltip.png)

Pour plus d’informations sur les conditions à remplir pour référencer une application sur {% data variables.product.prodname_marketplace %}, consultez « [Conditions à remplir pour référencer une application sur {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/) ».

Pour plus d’informations sur la recherche d’applications à utiliser, consultez « [Recherche sur {% data variables.product.prodname_marketplace %}](/search-github/searching-on-github/searching-github-marketplace) ».

## Pour les actions GitHub 

Les actions qui arborent le badge {% octicon "verified" aria-label="The verified badge" %} ou le badge de créateur vérifié indiquent que {% data variables.product.prodname_dotcom %} a vérifié que le créateur de l’action est bien une organisation partenaire. Les partenaires peuvent envoyer un e-mail à <a href="mailto:partnerships@github.com">partnerships@github.com</a> pour demander le badge de créateur vérifié.

![Badge de créateur vérifié pour GitHub Actions](/assets/images/marketplace/verified-creator-badge-for-actions.png)

Pour plus d’informations sur la manière de publier une action GitHub sur {% data variables.product.prodname_marketplace %}, consultez « [Publication d’actions sur la Place de marché GitHub](/actions/creating-actions/publishing-actions-in-github-marketplace) ».
