---
ms.openlocfilehash: d7d401ed18395e4dd30f45df07e850338fa43da9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145108189"
---
- Les clients qui annulent un plan payant acheté à partir de {% data variables.product.prodname_marketplace %} devraient être automatiquement renvoyés au plan gratuit de l’application s’il existe. {% data reusables.marketplace.cancellation-clarification %} Il est vivement recommandé de permettre aux clients de réactiver leur plan précédent.
- Les clients doivent pouvoir effectuer une mise à niveau de l’interface utilisateur de votre application si vous fournissez une [URL de mise à niveau](/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/#about-upgrade-urls) au format suivant : `https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>`
- Les clients devraient pouvoir modifier les utilisateurs qui ont accès à votre application à partir du site web de votre application s’ils ont acheté des postes (plan tarifaire par unité) ou si le plan offre des collaborateurs illimités.
- Les clients devraient pouvoir voir les modifications suivantes apportées à leur compte immédiatement dans la section des paramètres de facturation, de profil ou de compte du site web de l’application :
  - Plan et prix actuels.
  - Nouveaux plans achetés.
  - Mises à niveau, retours à une version antérieure, annulations et nombre de jours restants dans un essai gratuit.
  - Modifications apportées aux cycles de facturation (mensuels ou annuels).
  - Utilisation et ressources restantes pour les plans à taux fixe et par unité. Par exemple, si le plan de tarification est par unité, le site de votre application doit afficher les unités utilisées et les unités disponibles.
