---
ms.openlocfilehash: 3492de2cd163b4bbb59b912c17d152b7d2af5c68
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103470"
---
### Recherche basée sur l’opération

Utilisez le qualificateur `operation` pour limiter les actions à des types d’opérations spécifiques. Par exemple :

  * `operation:access` recherche tous les événements au cours desquels une ressource a été utilisée.
  * `operation:authentication` recherche tous les événements au cours desquels un événement d’authentification a eu lieu.
  * `operation:create` recherche tous les événements au cours desquels une ressource a été créée.
  * `operation:modify` recherche tous les événements au cours desquels une ressource existante a été modifiée.
  * `operation:remove` recherche tous les événements au cours desquels une ressource existante a été supprimée.
  * `operation:restore` recherche tous les événements au cours desquels une ressource existante a été restaurée.
  * `operation:transfer` recherche tous les événements au cours desquels une ressource existante a été transférée.
