---
title: Gestion de vos niveaux de parrainage
intro: 'Vous pouvez ajouter un nouveau niveau de parrainage, ou modifier ou mettre hors service un niveau existant.'
redirect_from:
  - /articles/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Sponsors profile
shortTitle: Manage payment tiers
ms.openlocfilehash: 4ff2d3731483075afc23da403e62f1682c6dd6c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133803'
---
## À propos des niveaux de parrainage

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## Ajout d’un niveau

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. Si vous configurez des niveaux pour la première fois, nous vous recommandons de consulter les exemples de niveaux suggérés pour voir comment d’autres contributeurs open source ont configuré {% data variables.product.prodname_sponsors %}. Déterminez si vous souhaitez commencer par certains niveaux brouillons suggérés, que vous pouvez personnaliser dans l’éditeur de niveaux.
   - Pour utiliser un niveau suggéré, sélectionnez les récompenses que vous souhaitez inclure dans votre ou vos niveaux brouillon. Ensuite, cliquez sur **Continuer vers l’éditeur de niveaux**.
   - Pour créer des niveaux sans utiliser l’une des suggestions de brouillon, cliquez sur **Ignorer cette étape**.
   ![Option « Ignorer cette étape » et bouton « Continuer vers l’éditeur de niveaux »](/assets/images/help/sponsors/tier-editor-button.png)
1. Si vous le souhaitez, pour modifier un niveau brouillon, recherchez le niveau brouillon, puis cliquez sur **Modifier**.
  ![Bouton Modifier à côté du niveau brouillon](/assets/images/help/sponsors/draft-tier-edit.png) {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %}

## Modification ou mise hors service d’un niveau

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %} {% note %}

  **Remarque :** Pour consulter des idées de descriptions de niveau, faites défiler vers le bas.

  {% endnote %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.tier-update %} {% data reusables.sponsors.retire-tier %}

## Ajout d’un référentiel à un niveau de parrainage

{% data reusables.sponsors.sponsors-only-repos %}

### À propos de l’ajout de référentiels à un niveau de parrainage

Pour ajouter un référentiel à un niveau, le référentiel doit être privé et détenu par une organisation et vous devez avoir un accès Administrateur au référentiel.

Lorsque vous ajoutez un référentiel à un niveau, {% data variables.product.company_short %} envoie automatiquement des invitations de référentiel aux nouveaux commanditaires et suppriment l’accès lorsqu’un parrainage est annulé. 

Seuls les comptes personnels, et non des organisations, peuvent être invités à des dépôts privés associés à un niveau de parrainage.

Vous pouvez également ajouter ou supprimer manuellement des collaborateurs au référentiel, et {% data variables.product.company_short %} ne les remplacera pas dans la synchronisation. 

### À propos des transferts pour les référentiels ajoutés aux niveaux de parrainage

Si vous transférez un référentiel qui a été ajouté à un niveau de parrainage, les commanditaires qui ont accès au référentiel via le niveau peuvent être affectés.

- Si le profil parrainé est destiné à une organisation et que le dépôt est transféré vers une autre organisation, les commanditaires actuels seront transférés, mais de nouveaux commanditaires ne seront pas ajoutés. Le nouveau propriétaire du référentiel peut supprimer les commanditaires existants.
- Si le profil parrainé est destiné à un compte personnel, le référentiel est transféré vers une organisation et le compte personnel dispose d’un accès Administrateur au nouveau référentiel, les commanditaires existants seront transférés et les nouveaux continueront d’être ajoutés au référentiel.
- Si le référentiel est transféré vers un compte personnel, tous les commanditaires seront supprimés et les nouveaux ne seront pas ajoutés au référentiel.

### Ajout d’un référentiel à un niveau de parrainage

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %}
1. Sélectionnez **Accorder aux commanditaires l’accès à un dépôt privé**.

   ![Capture d’écran de la case à cocher pour accorder aux commanditaires l’accès à un dépôt privé](/assets/images/help/sponsors/grant-sponsors-access-to-repo-checkbox.png)

1. Sélectionnez le menu déroulant, puis cliquez sur le référentiel que vous souhaitez ajouter.

   ![Capture d’écran du menu déroulant pour choisir le référentiel auquel les commanditaires auront accès](/assets/images/help/sponsors/grant-sponsors-access-to-repo-dropdown.png)

{% data reusables.sponsors.tier-update %}

## Activation des niveaux avec des quantités personnalisées

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.enable-custom-amounts %}

## Désactivation des niveaux avec des quantités personnalisées

Vous pouvez désactiver les niveaux avec des montants personnalisés en désélectionnant l’option **Activer les montants personnalisés** sous l’onglet **Niveaux de commanditaire**. Si vous désactivez les montants personnalisés, tous les niveaux personnalisés sont mis hors service.
