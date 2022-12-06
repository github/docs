---
title: Publication d’actions dans GitHub Marketplace
intro: 'Vous pouvez publier des actions dans {% data variables.product.prodname_marketplace %}, et partager les actions que vous avez créées avec la communauté {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
shortTitle: Publish in GitHub Marketplace
ms.openlocfilehash: e16f65116d7aa7c327e937dc2eba8964195e547d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884300'
---
Vous devez accepter les conditions d’utilisation du service pour publier des actions dans {% data variables.product.prodname_marketplace %}.

## À propos de la publication d’actions

Avant de pouvoir publier une action, vous devez la créer dans votre dépôt. Pour plus d’informations, consultez « [Création d’actions](/actions/creating-actions) ».

Lorsque vous prévoyez de publier votre action dans {% data variables.product.prodname_marketplace %}, vous devez vérifier que le dépôt contient uniquement le fichier de métadonnées, le code et les fichiers nécessaires à l’action. La création d’un dépôt unique pour l’action vous permet d’étiqueter, publier et empaqueter le code dans une même unité. {% data variables.product.prodname_dotcom %} utilise également les métadonnées de l’action qui se trouvent dans votre page {% data variables.product.prodname_marketplace %}.

Les actions sont immédiatement publiées dans {% data variables.product.prodname_marketplace %} et ne sont pas examinées par {% data variables.product.prodname_dotcom %} tant qu’elles répondent aux exigences suivantes :

- L’action doit être dans un dépôt public.
- Chaque dépôt doit contenir une seule action.
- Le fichier de métadonnées de l’action (`action.yml` ou `action.yaml`) doit se trouver dans le répertoire racine du dépôt.
- Le `name` dans le fichier de métadonnées de l’action doit être unique.
  - Le `name` ne peut pas être identique au nom d’une action déjà publiée dans {% data variables.product.prodname_marketplace %}.
  - Le `name` ne peut pas correspondre à un utilisateur ou à une organisation dans {% data variables.product.prodname_dotcom %}, sauf si l’utilisateur ou le propriétaire de l’organisation publie l’action. Par exemple, seule l’organisation {% data variables.product.prodname_dotcom %} peut publier une action nommée `github`.
  - Le `name` ne peut pas correspondre à une catégorie {% data variables.product.prodname_marketplace %} existante.
  - {% data variables.product.prodname_dotcom %} réserve les noms des fonctionnalités {% data variables.product.prodname_dotcom %}.

## Publishing an action

Vous pouvez ajouter l’action que vous avez créée à {% data variables.product.prodname_marketplace %} en l’étiquetant comme une nouvelle version, puis en la publiant.

Pour créer le brouillon d’une nouvelle version et publier l’action dans {% data variables.product.prodname_marketplace %}, suivez ces instructions :

{% data reusables.repositories.navigate-to-repo %}
1. Accédez au fichier de métadonnées d’action de votre dépôt (`action.yml` ou `action.yaml`). Vous verrez une bannière permettant de publier l’action dans {% data variables.product.prodname_marketplace %}. Cliquez sur **Ébaucher une version**.

   ![Bouton permettant de publier cette action dans Marketplace](/assets/images/help/repository/publish-github-action-to-marketplace-button.png)
1. Sous « Action de mise en production », cochez la case pour publier l’action sur {% data variables.product.prodname_marketplace %}. Si vous ne pouvez pas cocher la case, vous devez d’abord cliquer sur le lien pour lire et accepter le Contrat développeur {% data variables.product.prodname_marketplace %}.
![Sélectionner l’option permettant de publier sur Marketplace](/assets/images/help/repository/marketplace_actions_publish.png)
1. Si les étiquettes de votre fichier de métadonnées contiennent des erreurs, un message d’erreur s’affichera.
![Voir la notification](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. Si des suggestions s’affichent, modifiez votre fichier de métadonnées en conséquence. Une fois terminé, vous verrez un message du type « Tout semble parfait ! ». « Hello World ! ».
![Corriger les erreurs](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. Choisissez une « Catégorie principale » et, éventuellement une « Autre catégorie » pour aider les utilisateurs à trouver votre action dans les données {% data variables.product.prodname_marketplace %}.
![Choisir une catégorie](/assets/images/help/repository/marketplace_actions_categories.png)
1. Étiquetez votre action avec une version et ajoutez un titre à la version. Cela permettra aux utilisateurs de savoir quelles modifications ou fonctionnalités ont été ajoutées à la version. Les utilisateurs verront la version dans la page {% data variables.product.prodname_marketplace %} qui est dédiée à l’action.
![Étiqueter une version](/assets/images/help/repository/marketplace_actions_version.png)
1. Renseignez tous les autres champs, puis cliquez sur **Publier la version**. La publication vous oblige à utiliser l’authentification à 2 facteurs. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication/) ».
![Publier la version](/assets/images/help/repository/marketplace_actions_publishrelease.png)

## Supprimer une action de {% data variables.product.prodname_marketplace %}

Pour supprimer une action publiée de {% data variables.product.prodname_marketplace %}, vous devez mettre à jour chaque version publiée. Effectuez les étapes suivantes pour chaque version de l’action que vous avez publiée dans {% data variables.product.prodname_marketplace %}.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Dans la page Versions, à droite de la version que vous souhaitez modifier, cliquez sur **Modifier**.
![Bouton permettant de modifier la version](/assets/images/help/releases/release-edit-btn.png)
4. Sélectionnez à nouveau **Publier cette action dans {% data variables.product.prodname_marketplace %}** pour décocher l’option.
![Bouton permettant de publier l’action](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. Au bas de la page, cliquez sur **Mettre à jour la version**.
![Bouton permettant de mettre à jour la version](/assets/images/help/repository/actions-marketplace-update-release.png)
