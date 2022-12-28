---
title: Exportation de modifications vers une branche
intro: Cet article explique comment exporter les modifications de votre codespace vers une branche.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
ms.openlocfilehash: 2a7dee4725af31f3983e753b4202f94be1742556
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159595'
---
## Exportation de modifications vers une branche

Lors de l’utilisation de {% data variables.product.prodname_github_codespaces %}, vous pouvez exporter vos modifications vers une branche sans lancer votre codespace. Cela peut être utile lorsque vous avez atteint une [limite de dépense](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) ou que vous rencontrez un problème général d’accès à votre codespace.

Si votre codespace n’est pas publié (créé à partir d’un modèle et non associé à un dépôt sur {% data variables.product.product_name %}), vous ne pouvez pas exporter les modifications vers une branche, mais vous pouvez publier le codespace dans un nouveau dépôt sans lancer le codespace. Pour plus d’informations, consultez « [Création d’un codespace à partir d’un modèle](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-githubcom) ».

Pour exporter vos modifications vers une branche :

{% data reusables.codespaces.your-codespaces-procedure-step %} Ou, pour un dépôt individuel, cliquez sur le menu **{% octicon "code" aria-label="The code icon" %} Code**.
1. Cliquez sur les points de suspension ( **...** ) à droite du codespace à partir duquel vous souhaitez exporter.
2. Sélectionnez **{% octicon "git-branch" aria-label="The git branch icon" %} Exporter les modifications vers une branche**.

  ![Exporter les modifications vers une branche](/assets/images/help/codespaces/export-changes-to-a-branch.png)

1. Dans la fenêtre contextuelle, sélectionnez **Créer une branche**.
