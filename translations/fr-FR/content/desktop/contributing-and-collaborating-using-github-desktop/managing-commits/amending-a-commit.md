---
title: Correction d’un commit
intro: 'Vous pouvez utiliser {% data variables.product.prodname_desktop %} pour corriger votre dernier commit.'
versions:
  fpt: '*'
ms.openlocfilehash: 8d92d5f755df662c4948196cf9f84b3227ec0067
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105346'
---
## À propos de la correction d’un commit

La correction d’un commit permet de modifier le commit le plus récent que vous avez effectué dans votre branche actuelle. Cela peut être utile si vous devez modifier le message de commit, ou si vous avez oublié d’inclure des changements dans le commit.

Vous pouvez continuer à corriger un commit jusqu’à ce que vous le poussiez vers le dépôt distant. Une fois que vous avez poussé un commit, l’option permettant de le corriger est désactivée dans {% data variables.product.prodname_desktop %}. Quand vous corrigez un commit, vous remplacez le commit précédent par un nouveau commit dans votre branche actuelle. La correction d’un commit ayant été poussé vers le dépôt distant peut être source de confusion pour les autres collaborateurs qui utilisent le dépôt.

## Correction d’un commit

{% data reusables.desktop.history-tab %}
2. Cliquez avec le bouton droit sur le commit le plus récent, puis sélectionnez **Corriger le commit**.
  ![Option Corriger le commit dans le menu contextuel](/assets/images/help/desktop/amend-commit-context-menu.png)
3. Cliquez sur le champ **Récapitulatif** pour modifier le message de commit. Vous pouvez éventuellement modifier ou ajouter des informations dans le commit via le champ **Description**.
4. Sélectionnez les changements non commités à ajouter au commit. Pour plus d’informations sur la sélection des changements, consultez « [Commit et revue des changements apportés à votre projet](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit) ».
5. Une fois que vous avez finalisé vos changements, cliquez sur **Corriger le dernier commit**.
  ![Vue d’ensemble de la correction du dernier commit](/assets/images/help/desktop/amend-last-commit-overview.png)
