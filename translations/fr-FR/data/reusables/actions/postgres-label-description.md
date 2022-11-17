---
ms.openlocfilehash: 67ef84929e93a9f0fa1acc99e2035b2d62cb1574
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145066549"
---
Le workflow configure un conteneur de service avec l’étiquette `postgres`. Tous les services doivent s’exécuter dans un conteneur ; ainsi, chaque service exige que vous spécifiiez le conteneur `image`. Cet exemple utilise l’image conteneur `postgres`, fournit le mot de passe PostgreSQL par défaut et inclut des options de contrôle d’intégrité pour vous assurer que le service est en cours d’exécution. Pour plus d’informations, consultez l’[image postgres](https://hub.docker.com/_/postgres) sur Docker Hub.
