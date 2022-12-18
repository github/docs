---
ms.openlocfilehash: 49888e7031e048c77d405b1e65d9e06510e3c789
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063409"
---
Pour utiliser SCIM avec votre organisation, vous devez utiliser une {% data variables.product.prodname_oauth_app %} tierce. {% data variables.product.prodname_oauth_app %} doit être autorisé par et par la suite agir pour le compte d’un utilisateur {% data variables.product.prodname_dotcom %} spécifique. Si l’utilisateur qui a autorisé cette {% data variables.product.prodname_oauth_app %} quitte ou est supprimé de l’organisation, SCIM cesse de fonctionner. Pour éviter ce problème, nous vous recommandons de créer un compte d’utilisateur dédié pour configurer SCIM. Ce compte d’utilisateur doit être propriétaire de l’organisation et consommera une licence.
