---
ms.openlocfilehash: f88150299e77eff08e5db75a7ef5bf5bd460328b
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184062"
---
Lorsque vous activez la liste verte, les adresses IP que vous avez configurées sont immédiatement ajoutées aux listes vertes des organisations de votre entreprise. Si vous désactivez la liste verte, les adresses sont supprimées des listes vertes des organisations. 

{% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} Pour plus d’informations, consultez « [Gestion des adresses IP autorisées pour votre organisation](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization). »

Vous pouvez choisir d’ajouter automatiquement à votre liste verte toutes les adresses IP configurées pour {% data variables.product.prodname_github_apps %} installées dans votre entreprise. Le créateur d’une {% data variables.product.prodname_github_app %} peut configurer une liste verte pour son application, en spécifiant les adresses IP autorisées pour l’exécution de l’application. En héritant de sa liste verte dans la vôtre, vous évitez les refus de demandes de connexion de l’application. Pour plus d’informations, consultez « [Autorisation de l’accès par GitHub Apps](#allowing-access-by-github-apps) ».
