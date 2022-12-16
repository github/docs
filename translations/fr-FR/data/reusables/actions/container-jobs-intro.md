---
ms.openlocfilehash: 8acbacc0b39b108fdd05473ceb85e65bfe0e92d0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145105102"
---
La configuration de travaux à exécuter dans un conteneur simplifie la mise en réseau des configurations entre le travail et les conteneurs de service. Les conteneurs Docker d’un même réseau de pont défini par l’utilisateur exposent tous les ports les uns aux autres. Vous n’avez donc pas besoin de mapper les ports des conteneurs de service à l’hôte Docker. Vous pouvez accéder au conteneur de service à partir du conteneur de travaux à l’aide de l’étiquette que vous configurez dans le workflow.
