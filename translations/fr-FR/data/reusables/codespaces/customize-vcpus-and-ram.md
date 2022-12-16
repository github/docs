---
ms.openlocfilehash: 5f6285fe19915c3962b43cb45a26e65144607788
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062401"
---
Vous pouvez personnaliser votre codespace en ajustant le nombre de processeurs virtuels et la RAM, [en ajoutant des dotfiles pour personnaliser votre environnement](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account), ou en modifiant les outils et les scripts installés.

{% data variables.product.prodname_codespaces %} utilise un fichier appelé `devcontainer.json` pour configurer le conteneur de développement que vous utilisez lorsque vous travaillez dans un codespace. Chaque référentiel peut contenir un ou plusieurs fichiers `devcontainer.json` pour vous fournir l’environnement de développement dont vous avez précisément besoin pour travailler sur votre code dans un codespace. 

Lors du lancement, {% data variables.product.prodname_codespaces %} utilise un fichier `devcontainer.json`, ainsi que tous les fichiers dépendants qui composent la configuration du conteneur de développement, pour installer des outils et des runtimes, et effectuer d’autres tâches de configuration nécessaires au projet. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project) ».
