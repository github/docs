---
title: Exigences pour le référencement d’une application
intro: 'Les applications dans {% data variables.product.prodname_marketplace %} doivent répondre aux critères décrits dans cette page avant que le référencement puisse être publié.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /developers/github-marketplace/requirements-for-listing-an-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Listing requirements
ms.openlocfilehash: 58112d935a77119325dab4ad72c87561d0c00e47
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086387'
---
<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

Les exigences pour le référencement d’une application sur {% data variables.product.prodname_marketplace %} varient selon que vous souhaitez proposer une application gratuite ou payante.

## Exigences pour toutes les référencements {% data variables.product.prodname_marketplace %}

Tous les référencements sur {% data variables.product.prodname_marketplace %} devraient avoir trait à des outils qui apportent de la valeur à la communauté {% data variables.product.product_name %}. Lorsque vous soumettez votre référencement pour publication, vous devez lire et accepter les termes du « [Contrat du développeur {% data variables.product.prodname_marketplace %}](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement) ».

### Exigences relatives à l’expérience utilisateur pour toutes les applications

Tous les référencements doivent répondre aux exigences suivantes, qu’ils aient trait à une application gratuite ou payante.

- Les référencements ne doivent pas détourner activement les utilisateurs de {% data variables.product.product_name %}.
- Les référencements doivent inclure des informations de contact valides pour l’éditeur.
- Les référencements doivent présenter une description pertinente de l’application.
- Les référencements doivent spécifier un plan tarifaire.
- Les applications doivent apporter de la valeur aux clients, et s’intégrer avec la plateforme d’une manière ou d’une autre au-delà de l’authentification.
- Les applications doivent être publiquement disponibles dans {% data variables.product.prodname_marketplace %} et ne peuvent pas être en version bêta ou disponibles uniquement par invitation.
- Les applications doivent avoir des événements webhook configurés pour informer l’éditeur de tout changement ou annulation de plan à l’aide de l’API {% data variables.product.prodname_marketplace %}. Pour plus d’informations, consultez « [Utilisation de l’API {% data variables.product.prodname_marketplace %} dans votre application](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app) ».

Pour plus d’informations sur la fourniture d’une bonne expérience client, consultez « [Meilleures pratiques en matière d’expérience client pour les applications](/developers/github-marketplace/customer-experience-best-practices-for-apps) ».

### Exigences relatives à la marque et au référencement pour toutes les applications

- Les applications qui utilisent des logos GitHub doivent suivre les directives {% data variables.product.company_short %} . Pour plus d’informations, consultez « [Logos {% data variables.product.company_short %} et utilisation](https://github.com/logos) ».
- Les applications doivent avoir un logo, une carte de fonctionnalité et des captures d’écran répondant aux recommandations énoncées dans « [Écriture de descriptions de référencement {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/) ».
- Les référencements doivent inclure des descriptions rédigées correctement et exemptes d’erreurs grammaticales. Pour obtenir de l’aide en lien avec l’écriture de votre référencement, consultez « [Écriture de descriptions de référencement {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/) ».

Pour protéger vos clients, nous vous recommandons également de suivre les meilleures pratiques en matière de sécurité. Pour plus d’informations, consultez « [Meilleures pratiques en matière de sécurité pour les applications](/developers/github-marketplace/security-best-practices-for-apps) ».

## Considérations relatives aux applications gratuites

{% data reusables.marketplace.free-apps-encouraged %} 

## Exigences pour les applications payantes

Pour publier un plan payant pour votre application sur {% data variables.product.prodname_marketplace %}, votre application doit appartenir à une organisation qui est un éditeur vérifié. Pour plus d’informations sur le processus de vérification ou le transfert de la propriété de votre application, consultez « [Demande de vérification d’éditeur pour votre organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization) ».

Si votre application est déjà publiée et que vous êtes un éditeur vérifié, vous pouvez publier un nouveau plan payant à partir de l’éditeur de plan tarifaire. Pour plus d’informations, consultez « [Définition des plans tarifaires pour votre référencement](/developers/github-marketplace/setting-pricing-plans-for-your-listing) ».

Pour publier une application payante (ou une application qui offre un plan payant), vous devez également répondre aux exigences suivantes :

- Les {% data variables.product.prodname_github_apps %} devraient avoir au moins 100 installations.
- Les {% data variables.product.prodname_oauth_apps %} devraient avoir au moins 200 utilisateurs.
- Toutes les applications payantes doivent gérer les événements d’achat {% data variables.product.prodname_marketplace %} pour les nouveaux achats, les mises à niveau, les retours à une version antérieure, les annulations et les essais gratuits. Pour plus d’informations, consultez « [Exigences de facturation pour les applications payantes](#billing-requirements-for-paid-apps) ».

Lorsque vous êtes prêt à publier l’application sur {% data variables.product.prodname_marketplace %}, vous devez demander la vérification du référencement de l’application.

{% note %}

**Remarque :** {% data reusables.marketplace.app-transfer-to-org-for-verification %} pour des informations sur le transfert d’une application à une organisation, consultez : « [Soumission de votre référencement pour publication](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit) ».

{% endnote %}

## Exigences pour les applications payantes

Votre application n’a pas besoin de gérer les paiements, mais elle doit utiliser des événements d’achat {% data variables.product.prodname_marketplace %} pour gérer les nouveaux achats, les mises à niveau, les retours à une version antérieure, les annulations et les essais gratuits. Pour plus d’informations sur l’intégration de ces événements dans votre application, consultez « [Utilisation de l’API {% data variables.product.prodname_marketplace %} dans votre application](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app) ».

L’utilisation de l’API de facturation de GitHub permet aux clients d’acheter une application sans quitter GitHub, et de payer le service avec le mode de paiement déjà associé à son compte sur {% data variables.product.product_location %}.

- Les applications doivent prendre en charge la facturation mensuelle et annuelle pour les achats d’abonnements payants.
- Les référencements peuvent offrir n’importe quelle combinaison de plans gratuits et payants. Les plans gratuits sont facultatifs mais encouragés. Pour plus d’informations, consultez « [Définition d’un plan tarifaire de référencement sur la {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/) ».
