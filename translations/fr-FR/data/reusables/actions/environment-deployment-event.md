---
ms.openlocfilehash: 5a6618e9b13483c7d3c647a8cb5d635225e59280
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103805"
---
Quand un travail de workflow qui référence un environnement s’exécute, il crée un objet de déploiement avec la propriété `environment` définie sur le nom de votre environnement. Au fur et à mesure que le workflow progresse, il crée aussi des objets d’état de déploiement avec la propriété `environment` définie sur le nom de votre environnement, la propriété `environment_url` définie sur l’URL de l’environnement (si elle est spécifiée dans le workflow) et la propriété `state` définie sur l’état du travail.
