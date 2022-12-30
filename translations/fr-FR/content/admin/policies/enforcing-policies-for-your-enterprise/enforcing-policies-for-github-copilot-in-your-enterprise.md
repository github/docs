---
title: Application de stratégies pour GitHub Copilot dans votre entreprise
intro: 'Vous pouvez appliquer des stratégies pour {% data variables.product.prodname_copilot_for_business %} au sein des organisations de votre entreprise ou autoriser la définition de stratégies dans chaque organisation.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_copilot_for_business %} in an enterprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
  - Enterprise
  - Organizations
  - Policies
shortTitle: GitHub Copilot policies
ms.openlocfilehash: f87fa318a6390c9e254c3c115638325b8bfc474a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193297'
---
## À propos des stratégies pour {% data variables.product.prodname_copilot %} dans votre entreprise

{% data reusables.copilot.about-copilot %}

Vous pouvez appliquer des stratégies pour {% data variables.product.prodname_copilot_for_business %} au sein des organisations de votre entreprise ou autoriser la définition de stratégies dans chaque organisation. 

Si vous configurez un abonnement pour {% data variables.product.prodname_copilot_for_business %}, vous pouvez accorder et révoquer l’accès à {% data variables.product.prodname_copilot %} pour les organisations de votre entreprise. Une fois que vous accordez à une organisation l’accès à {% data variables.product.prodname_copilot %}, les administrateurs de cette organisation peuvent accorder l’accès à des personnes et à des équipes. Pour plus d’informations, consultez « [Configuration des paramètres {% data variables.product.prodname_copilot %} dans votre organisation](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization) ».

Les abonnements {% data variables.product.prodname_copilot_for_business %} sont facturés tous les mois, sur la base du nombre de sièges {% data variables.product.prodname_copilot %} attribués aux utilisateurs de votre entreprise. Pour plus d’informations, consultez « [Tarifs de {% data variables.product.prodname_copilot %} pour {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#github-copilot-pricing-for-github-enterprise-cloud) ».

{% data variables.product.prodname_copilot %} inclut un filtre qui détecte les suggestions de code correspondant au code public sur {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_copilot_for_business %} vous permet d’activer ou de désactiver le filtre au niveau de l’entreprise, ou d’autoriser les administrateurs de l’organisation à décider au niveau de l’organisation. Lorsque le filtre est activé, {% data variables.product.prodname_copilot %} vérifie les suggestions de code avec son code environnant d’environ 150 caractères par rapport au code public sur {% data variables.product.prodname_dotcom %}. S’il existe une correspondance exacte ou quasi exacte, la suggestion n’est pas montrée.

## Application d’une stratégie pour gérer l’utilisation de {% data variables.product.prodname_copilot_for_business %} dans votre entreprise 

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. Sous « Gérer l’accès des organisations à {% data variables.product.prodname_copilot %} », configurez l’accès pour votre abonnement {% data variables.product.prodname_copilot %}. 
    - Pour désactiver {% data variables.product.prodname_copilot %} pour toutes les organisations de votre entreprise, sélectionnez **Désactivé**.
    - Pour activer {% data variables.product.prodname_copilot %} pour toutes les organisations de votre entreprise, actuelles et futures, sélectionnez **Autoriser pour toutes les organisations**.
    - Pour activer {% data variables.product.prodname_copilot %} pour des organisations spécifiques, sélectionnez **Autoriser pour des organisations spécifiques**.
    
    ![Capture d’écran des paramètres d’accès des organisations {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/manage-org-access-enterprise.png)
    
1. Si vous avez sélectionné **Autoriser pour des organisations spécifiques**, sélectionnez les organisations pour lesquelles vous souhaitez activer {% data variables.product.prodname_copilot %}. Vous pouvez également sélectionner les organisations pour lesquelles vous souhaitez désactiver l’accès à {% data variables.product.prodname_copilot %}.
    - Cliquez sur **Définir les autorisations des organisations** et sélectionnez **Activer** ou **Désactiver** afin d’accorder ou de refuser l’accès à {% data variables.product.prodname_copilot %} pour les organisations spécifiées.

    ![Capture d’écran des paramètres activés ou désactivés des autorisations d’organisation {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/set-org-permissions-enterprise.png)
   
1. Cliquez sur **Save changes**.
  
   ![Capture d’écran de l’enregistrement des autorisations d’organisation {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/save-org-settings-enterprise.png)

## Application d’une stratégie pour gérer l’utilisation des suggestions {% data variables.product.prodname_copilot %} qui correspondent au code public de votre entreprise

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. Sous « Suggestions correspondant au code public », cliquez sur le menu déroulant et sélectionnez la stratégie que vous souhaitez appliquer.
    - Pour autoriser les suggestions {% data variables.product.prodname_copilot %} correspondant au code public, sélectionnez **Autorisé**.
    - Pour bloquer les suggestions {% data variables.product.prodname_copilot %} correspondant au code public, sélectionnez **Bloqué**.
    - Pour permettre à chacune de vos organisations de définir sa propre stratégie sur l’utilisation des suggestions {% data variables.product.prodname_copilot %} correspondant au code public, sélectionnez **Aucune stratégie (laisser chaque organisation décider)** .
    
    ![Capture d’écran des paramètres des suggestions {% data variables.product.prodname_copilot %} correspondant au code public](/assets/images/help/copilot/duplication-detection-enterprise-dropdown.png)

## Pour aller plus loin

- « [Déclaration de confidentialité de {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement) »
