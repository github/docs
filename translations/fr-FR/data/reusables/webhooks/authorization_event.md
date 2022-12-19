---
ms.openlocfilehash: 5466f29d4bb496b6451846f80a90f7b0471f8cda
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145066212"
---
N’importe quel utilisateur peut révoquer l’autorisation dont il dispose pour une application GitHub à partir de la [page des paramètres de son compte GitHub](https://github.com/settings/apps/authorizations). La révocation de l’autorisation relative à une application GitHub ne désinstalle pas l’application. Vous devez programmer votre application GitHub afin que lorsqu’elle reçoit ce webhook, elle cesse d’appeler l’API pour le compte de la personne qui a révoqué le jeton. Si votre application GitHub continue d’utiliser un jeton d’accès révoqué, elle reçoit l’erreur `401 Bad Credentials`.
