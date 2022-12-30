---
ms.openlocfilehash: d9874c3884e3191a0296272fbead8f30b7630e5a
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163812"
---
- **Exécuter des workflows à partir de demandes de tirage de duplication** : permet aux utilisateurs d’exécuter des workflows à partir de demandes de tirage de duplication, avec une autorisation `GITHUB_TOKEN` en lecture seule et sans accès aux secrets.
- **Envoyer des jetons d’écriture aux workflows à partir de demandes de tirage** : permet aux demandes de tirage provenant de duplications d’utiliser un `GITHUB_TOKEN` avec autorisation d’accès en écriture.
- **Envoyer des secrets aux workflows à partir de demandes de tirage** : rend tous les secrets disponibles pour la demande de tirage.{% ifversion actions-private-fork-workflow-approvals %}
- **Exiger l’approbation des workflows de demande de tirage (pull request)** - Les exécutions de workflow sur des demandes de tirage provenant de collaborateurs sans autorisation d'écriture devront être approuvées par une personne disposant d'une autorisation d'écriture avant d'être exécutées.{% endif %}
