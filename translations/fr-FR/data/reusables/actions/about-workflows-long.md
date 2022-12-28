---
ms.openlocfilehash: ba9c00a9dfa055c518eb60bca3acc59a3cc89381
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145104033"
---
Un workflow est un processus automatisé configurable qui exécutera un ou plusieurs travaux. Les workflows sont définis par un fichier YAML archivé dans votre dépôt et s’exécutent lorsqu’ils sont déclenchés par un événement dans votre dépôt, ou ils peuvent être déclenchés manuellement ou selon une planification définie.

Les workflows sont définis dans le répertoire `.github/workflows` d’un référentiel, et un référentiel peut avoir plusieurs workflows, chacun pouvant effectuer un ensemble différent de tâches. Par exemple, vous pouvez avoir un workflow pour générer et tester des demandes de tirage, un autre workflow pour déployer votre application chaque fois qu’une version est créée, et encore un autre workflow qui ajoute une étiquette chaque fois que quelqu’un ouvre un nouveau problème.
