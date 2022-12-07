---
ms.openlocfilehash: e264eacc4226a90eb80980c2b19f48dc7c1889c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879552"
---
Si vous souhaitez spécifier un exécuteur autohébergé pour votre travail, configurez `runs-on` dans votre fichier de workflow avec des étiquettes d’exécuteur autohébergé.

Tous les exécuteurs autohébergés ont l’étiquette `self-hosted`. L’utilisation de cette seule étiquette permet de sélectionner n’importe quel exécuteur autohébergé. Pour sélectionner des exécuteurs qui répondent à certains critères, par exemple le système d’exploitation ou l’architecture, nous vous recommandons de fournir un tableau d’étiquettes qui commence par `self-hosted` (doit être listé en premier), et qui comprend des étiquettes supplémentaires selon les besoins. Quand vous spécifiez un tableau d’étiquettes, les travaux sont mis en file d’attente sur des exécuteurs qui comportent toutes les étiquettes que vous indiquez.

Bien que l’étiquette `self-hosted` ne soit pas obligatoire, nous vous recommandons vivement de la spécifier quand vous utilisez des exécuteurs autohébergés pour avoir la certitude que votre travail ne spécifie pas par inadvertance des exécuteurs, actuels ou futurs, hébergés sur {% data variables.product.prodname_dotcom %}.
