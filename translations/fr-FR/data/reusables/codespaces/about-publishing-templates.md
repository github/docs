---
ms.openlocfilehash: 88adaa8f671dd9eb805301c3e659bcdba76f24cc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159748"
---
Lorsque vous travaillez dans un codespace créé à partir d’un modèle, votre travail est enregistré sur une machine virtuelle dans le cloud, mais il n’est pas stocké dans un dépôt sur {% data variables.product.prodname_dotcom %}.

Vous pouvez enregistrer vos fichiers, fermer et arrêter votre codespace, puis revenir à votre travail plus tard. En règle générale, Git est préinstallé et le répertoire de travail est automatiquement initialisé en tant que dépôt Git, sauf si vous avez démarré à partir du modèle vide de {% data variables.product.company_short %}. Cela signifie que vous pouvez utiliser Git tout de suite pour le contrôle de code source local, comme l’ajout et le commit de fichiers.

Toutefois, si vous supprimez un codespace non publié, ou s’il est automatiquement supprimé parce qu’il est resté inutilisé pendant la durée de la période de conservation, votre travail est également supprimé. Pour conserver votre travail et permettre à d’autres personnes de travailler sur votre projet, vous devez publier votre codespace dans un dépôt sur {% data variables.product.prodname_dotcom %}.