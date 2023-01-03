---
title: Configuration de la stratégie de référent pour votre entreprise
shortTitle: Configure referrer policy
intro: 'Vous pouvez augmenter la confidentialité de {% data variables.product.product_location %} en configurant la stratégie pour les requêtes cross-origin.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 4824e938e044a89e9d0e534564214c6a46ba44da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066490'
---
## À propos de la stratégie de référent pour votre entreprise

La stratégie de référent contrôle les informations que {% data variables.product.product_name %} transmet dans les en-têtes HTTP quand quelqu’un accède à un site externe en cliquant sur un lien depuis {% data variables.product.product_location %}.

Par défaut, quand un utilisateur sur {% data variables.product.product_location %} accède à un autre site en cliquant sur un lien à partir d’un fichier ou d’un commentaire sur votre instance, la requête inclut le nom d’hôte de votre instance en texte brut dans l’en-tête `Referer`. Si le lien mène à un site web externe, le propriétaire du site web peut lire le nom d’hôte de votre instance dans les requêtes ou les fichiers journaux.

Vous pouvez contrôler les informations que {% data variables.product.product_name %} envoie quand un utilisateur visite un lien à partir de votre instance.

## Activation de la stratégie de référent `same-origin`

Vous pouvez activer la stratégie de référent `same-origin` pour indiquer aux navigateurs modernes d’exclure le nom d’hôte de {% data variables.product.product_location %} des requêtes à destination des sites web externes. Le paramètre s’applique à tous les liens de l’interface web de votre instance. Par défaut, {% data variables.product.product_name %} utilise les stratégies de référent `origin-when-cross-origin` et `strict-origin-when-cross-origin`, ce qui signifie que le nom d’hôte de votre instance figureront dans les requêtes HTTP et HTTPS à destination sites web externes.

{% note %}

**Remarque** : Le fait de passer à la stratégie de référent `same-origin` peut affecter les sites externes qui s’attendent à trouver un nom d’hôte dans les en-têtes HTTP d’une requête.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Sous « Stratégie de référent de l’agent utilisateur », sélectionnez **Activer la stratégie de référent de même origine pour toutes les organisations**.
  ![Case à cocher permettant d’activer la stratégie de référent de même origine](/assets/images/enterprise/settings/referrer-policy-checkbox.png)
1. Cliquez sur **Enregistrer**.
  ![Bouton Enregistrer permettant d’activer la stratégie de référent de même origine](/assets/images/enterprise/settings/referrer-policy-save-button.png)
