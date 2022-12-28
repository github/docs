---
ms.openlocfilehash: 662ae539ae3cfdb6446d31664da325a9a67e9a26
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145066542"
---
Le workflow configure un conteneur de service avec l’étiquette `redis`. Tous les services devant s’exécuter dans un conteneur, chaque service exige que vous spécifiiez le conteneur `image`. Cet exemple utilise l’image conteneur `redis` et inclut des options de vérification de l’intégrité pour s’assurer que le service est en cours d’exécution. Pour plus d’informations, consultez [image redis](https://hub.docker.com/_/redis) sur Docker Hub.
