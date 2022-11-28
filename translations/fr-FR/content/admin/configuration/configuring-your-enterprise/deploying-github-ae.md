---
title: Déploiement de GitHub AE
intro: 'Vous pouvez déployer {% data variables.product.product_name %} sur une région Azure disponible.'
versions:
  ghae: '*'
topics:
  - Accounts
  - Enterprise
type: how_to
shortTitle: Deploy GitHub AE
redirect_from:
  - /get-started/signing-up-for-github/setting-up-a-trial-of-github-ae
ms.openlocfilehash: af6def26a15a1ccad2625677d9db57b2a1907850
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147614366'
---
## À propos du déploiement de {% data variables.product.product_name %}

{% data reusables.github-ae.github-ae-enables-you %} Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae) ».

Après avoir acheté ou commencé un essai gratuit de {% data variables.product.product_name %}, vous pouvez déployer {% data variables.product.product_name %} dans une région Azure disponible. Ce guide fait référence à la ressource Azure qui contient le déploiement de {% data variables.product.product_name %} en tant que compte {% data variables.product.product_name %}. Vous allez utiliser le portail Azure à l’adresse [https://portal.azure.com](https://portal.azure.com) pour déployer le compte {% data variables.product.product_name %}.

## Prérequis

Vous devez disposer de l’autorisation permettant d’effectuer l’opération `/register/action` pour le fournisseur de ressources dans Azure. L’autorisation est incluse dans les rôles `Contributor` et `Owner`. Pour plus d’informations, consultez [Fournisseurs et types de ressources Azure](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types#register-resource-provider) dans la documentation Microsoft.

## Déploiement de {% data variables.product.product_name %} avec le {% data variables.actions.azure_portal %}

Le {% data variables.actions.azure_portal %} vous permettent de déployer le compte {% data variables.product.product_name %} dans votre groupe de ressources Azure.

1. Cliquez sur l’un des deux liens suivants pour commencer le déploiement de {% data variables.product.product_name %}. Le lien sur lequel vous devez cliquer dépend du cloud Azure sur lequel vous envisagez de déployer {% data variables.product.product_name %}. Pour plus d'informations sur Azure Government, consultez [Qu'est-ce qu’Azure Government ?](https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome) dans la documentation Microsoft.
   
   - [Déployer {% data variables.product.product_name %} sur Azure Commercial](https://aka.ms/create-github-ae-instance)
   - [Déployer {% data variables.product.product_name %} sur Azure Government](https://aka.ms/create-github-ae-instance-gov)
1. Pour lancer le processus d’ajout d’un nouveau compte {% data variables.product.product_name %}, cliquez sur **Créer un compte GitHub AE**.
1. Complétez les champs « Détails du projet » et « Détails de l’instance ».
    Résultats de la recherche ![{% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-form.png)
    - **Nom du compte :** Nom d’hôte de votre entreprise
    - **Nom d’utilisateur de l’administrateur :** Nom d’utilisateur du propriétaire initial de l’entreprise qui sera créé dans {% data variables.product.product_name %}
    - **Adresse e-mail de l’administrateur :** Adresse e-mail qui recevra les informations de connexion
1. Pour passer en revue un récapitulatif des modifications proposées, cliquez sur **Vérifier + créer**.
1. Une fois le processus de validation terminé, cliquez sur **Créer**.

L’adresse e-mail que vous avez entrée ci-dessus reçoit des instructions sur la façon d’accéder à votre entreprise. Une fois que vous avez l’accès, vous pouvez commencer en suivant les étapes de configuration initiales. Pour plus d’informations, consultez « [Initialisation de {% data variables.product.product_name %}](/admin/configuration/initializing-github-ae) ».

{% note %}

**Remarque :** Les mises à jour logicielles pour votre déploiement {% data variables.product.product_name %} sont effectuées par {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [À propos des mises à niveau vers de nouvelles versions](/admin/overview/about-upgrades-to-new-releases) ».

{% endnote %}

## Accès à votre entreprise

Vous pouvez utiliser le {% data variables.actions.azure_portal %} pour accéder à votre déploiement {% data variables.product.product_name %}. La liste de résultats comprend tous les déploiements {% data variables.product.product_name %} de votre région Azure.

1. Sur le {% data variables.actions.azure_portal %}, dans le volet gauche, cliquez sur **Toutes les ressources**.
1. Dans les filtres disponibles, cliquez sur **Tous les types**, puis désélectionnez **Sélectionner tout** et sélectionnez **GitHub AE** : ![Résultats de la recherche {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-type-filter.png)

## Étapes suivantes

- Une fois que votre déploiement a été provisionné, l’étape suivante consiste à initialiser {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Initialisation de {% data variables.product.product_name %}](/github-ae@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae) ».
- Si vous essayez {% data variables.product.product_name %}, vous pouvez procéder à une mise à niveau vers une licence complète à tout moment pendant la période d’essai en contactant l’{% data variables.contact.contact_enterprise_sales %}. Si vous n’avez pas effectué la mise à niveau avant le dernier jour de l’essai gratuit, le déploiement est automatiquement supprimé. Si vous avez besoin de plus de temps pour évaluer {% data variables.product.product_name %}, contactez l’{% data variables.contact.contact_enterprise_sales %} pour demander une prolongation.

## Pour aller plus loin 

- « [Activation des fonctionnalités de {% data variables.product.prodname_advanced_security %} sur {% data variables.product.product_name %}](/github/getting-started-with-github/about-github-advanced-security#enabling-advanced-security-features-on-github-ae) »
- « [Notes de publication de {% data variables.product.product_name %}](/github-ae@latest/admin/overview/github-ae-release-notes) » 
