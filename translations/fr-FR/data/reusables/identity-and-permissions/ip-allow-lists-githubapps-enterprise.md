---
ms.openlocfilehash: dc4b17d3c5f283d72fcda54e4a95e8db2821714a
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180144"
---
Si vous utilisez une liste verte, vous pouvez également choisir d’y ajouter automatiquement toutes les adresses IP configurées pour les {% data variables.product.prodname_github_apps %} installées dans votre entreprise. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Pour plus d’informations sur la création d’une liste verte pour une {% data variables.product.prodname_github_app %} que vous avez créée, consultez « [Gestion des adresses IP autorisées pour une application GitHub](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app) ».

Pour activer l’ajout automatique d’adresses IP pour les {% data variables.product.prodname_github_apps %} :

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Sélectionnez **Activer la configuration de liste d’adresses IP autorisées pour les applications GitHub installées**. Si vous utilisez {% data variables.product.prodname_emus %} avec OIDC, sélectionnez d’abord **GitHub** comme configuration de liste d’adresses IP autorisées, puis **Activer la configuration de liste d’adresses IP autorisées pour les applications GitHub installées**.
  ![Case à cocher pour autoriser les adresses IP d’application GitHub](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Cliquez sur **Enregistrer**.
