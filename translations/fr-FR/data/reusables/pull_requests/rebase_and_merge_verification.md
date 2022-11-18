---
ms.openlocfilehash: 038896fa537c7cc3ea3fa95e903900a9eb8f3db7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145917060"
---
Lorsque vous utilisez l’option **Rebaser et fusionner** sur une demande de tirage, il est important de noter que les validations de la branche principale sont ajoutées à la branche de base sans vérification de la signature de validation. Lorsque vous utilisez cette option, {% data variables.product.prodname_dotcom %} créent une validation modifiée à l’aide des données et du contenu de la validation d’origine. Cela signifie que {% data variables.product.prodname_dotcom %} n’a pas vraiment créé cette validation et ne peut donc pas la signer en tant qu’utilisateur de système générique. {% data variables.product.prodname_dotcom %} n’a pas accès aux clés de signature privées du validateur. Il ne peut donc pas signer la validation au nom de l’utilisateur.

Une solution de contournement consiste à rebaser et fusionner localement, puis à envoyer les modifications à la branche de base de la demande de tirage.
