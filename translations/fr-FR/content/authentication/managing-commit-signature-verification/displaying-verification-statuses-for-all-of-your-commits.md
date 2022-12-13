---
title: Affichage des états de vérification pour tous vos commits
shortTitle: Displaying verification for all commits
intro: Vous pouvez activer le mode vigilant pour que la vérification des signatures de commit marque tous vos commits et toutes vos balises avec un état de vérification de signature.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits
ms.openlocfilehash: ce306b1275b2da8d7ad985ed0c696659798723c0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147653345'
---
{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

## À propos du mode vigilant

Quand vous travaillez localement sur votre ordinateur, Git vous permet de définir l’auteur de vos modifications et l’identité du commiteur. Aussi, pour les autres utilisateurs, il peut être plus difficile de s’assurer que c’est bien vous qui avez créé les commits et les étiquettes. Pour résoudre ce problème, vous pouvez signer vos commits et étiquettes. Pour plus d’informations, consultez « [Signature de commits](/github/authenticating-to-github/signing-commits) » et « [Signature d’étiquettes](/github/authenticating-to-github/signing-tags) ». {% data variables.product.prodname_dotcom %} marque les commits et étiquettes signés avec un état de vérification. 

Par défaut, les commits et étiquettes sont marqués comme « Vérifiés » s’ils sont signés avec une clé GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} ou S/MIME qui a bien été vérifiée. Si un commit ou une étiquette a une signature qui ne peut pas être vérifiée par {% data variables.product.prodname_dotcom %}, le commit ou l’étiquette est marqué comme « Non vérifié ». Dans tous les autres cas, aucun état de vérification n’est affiché.

Toutefois, vous pouvez renforcer la confiance des autres utilisateurs à l’égard de l’identité attribuée à vos commits et étiquettes en activant le mode vigilant dans vos paramètres {% data variables.product.prodname_dotcom %}. Quand le mode vigilant est activé, tous vos commits et étiquettes sont marqués avec l’un des trois états de vérification.

![États de vérification des signatures](/assets/images/help/commits/signature-verification-statuses.png)

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

Vous devez activer le mode vigilant uniquement si vous signez tous vos commits et étiquettes et utilisez une adresse e-mail vérifiée pour votre compte sur {% data variables.product.product_name %} comme adresse e-mail de commiteur. Quand ce mode est activé, les commits ou étiquettes non signés que vous générez localement et poussez (push) sur {% data variables.product.prodname_dotcom %} sont marqués comme « Non vérifiés ».

{% data reusables.identity-and-permissions.verification-status-check %}

## Activation du mode vigilant

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Dans la page Paramètres SSH, sous « Mode Vigilant », sélectionnez **Marquer les commits non signés comme non vérifiés**.

   ![Case à cocher Marquer les commits non signés comme non vérifiés](/assets/images/help/commits/vigilant-mode-checkbox.png)
