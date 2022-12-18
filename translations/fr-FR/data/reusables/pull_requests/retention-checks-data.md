---
ms.openlocfilehash: f95dd69778640ad4be04e0bfdab340d351845c38
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147066009"
---
Vérifie que les données datant de plus de 400 jours sont archivées. Dans le cadre du processus d’archivage {% data variables.product.prodname_dotcom %} crée un état de commit cumulatif représentant l’état de toutes les vérifications de ce commit. Par conséquent, la zone de fusion dans toute demande de tirage avec des vérifications archivées qui sont nécessaires sera dans un état bloqué, et vous devrez réexécuter les vérifications avant de pouvoir fusionner la demande de tirage.
