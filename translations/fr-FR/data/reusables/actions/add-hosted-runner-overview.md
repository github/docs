---
ms.openlocfilehash: 955bbcc4f03b8a3a810f282c74230f220908f6b8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108472"
---
Vous pouvez choisir un système d’exploitation et une configuration matérielle dans la liste des options disponibles. Quand de nouvelles instances de cet exécuteur sont déployées par le biais d’une mise à l’échelle automatique, elles utilisent le même système d’exploitation et la même configuration matérielle que ceux que vous avez définis ici.

Vous pouvez aussi définir les étiquettes qui identifient l’exécuteur, c’est-à-dire la façon dont vos workflows pourront envoyer des travaux aux exécuteurs à des fins de traitement (en utilisant `runs-on`). Les nouveaux exécuteurs sont automatiquement affectés au groupe par défaut. Vous pouvez aussi choisir le groupe qu’un exécuteur doit rejoindre pendant son processus de création. De plus, vous pouvez modifier l’appartenance à un groupe de l’exécuteur une fois que vous avez inscrit cet exécuteur. Pour plus d’informations, consultez « [Contrôle de l’accès aux {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/controlling-access-to-larger-runners) ».
