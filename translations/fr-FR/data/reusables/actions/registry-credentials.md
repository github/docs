---
ms.openlocfilehash: 35dfd476fcffeaf23740ff0513b2675390f9a76f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145066539"
---
Si le registre de conteneurs de l’image nécessite une authentification pour tirer l’image, vous pouvez utiliser `jobs.<job_id>.container.credentials` pour définir un `map` de `username` et de `password`. Les informations d’identification correspondent aux mêmes valeurs que celles que vous fournissez à la commande [`docker login`](https://docs.docker.com/engine/reference/commandline/login/).
