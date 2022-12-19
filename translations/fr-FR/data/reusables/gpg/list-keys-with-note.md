---
ms.openlocfilehash: 85c4e104344284797c4fc047569b99657a08d342
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147694223"
---
1. Utilisez la commande `gpg --list-secret-keys --keyid-format=long` pour répertorier la forme longue des clés GPG pour lesquelles vous disposez à la fois d’une clé publique et d’une clé privée. Une clé privée est requise pour la signature des validations ou des étiquettes.

   ```shell{:copy}
   $ gpg --list-secret-keys --keyid-format=long
   ```
   
   {% note %}

   **Remarque :** pour afficher la liste des clés existantes sur certaines installations GPG exécutées sous Linux, il peut être nécessaire d’utiliser `gpg2 --list-keys --keyid-format LONG`. Dans ce cas, vous devez également configurer Git pour qu’il utilise `gpg2` en exécutant `git config --global gpg.program gpg2`.

   {% endnote %}
