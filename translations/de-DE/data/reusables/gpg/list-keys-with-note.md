---
ms.openlocfilehash: 85c4e104344284797c4fc047569b99657a08d342
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147694224"
---
1. Verwende den Befehl `gpg --list-secret-keys --keyid-format=long`, um die Langform der GPG-Schlüssel aufzulisten, für die du sowohl über einen öffentlichen als auch einen privaten Schlüssel verfügst. Zum Signieren von Commits oder Tags ist ein privater Schlüssel erforderlich.

   ```shell{:copy}
   $ gpg --list-secret-keys --keyid-format=long
   ```
   
   {% note %}

   **Hinweis**: Bei einigen GPG-Installationen unter Linux musst du möglicherweise stattdessen `gpg2 --list-keys --keyid-format LONG` verwenden, um eine Liste einer vorhandenen Schlüssel anzuzeigen. In diesem Fall musst du auch Git für die Verwendung von `gpg2` konfigurieren, indem du `git config --global gpg.program gpg2` ausführst.

   {% endnote %}
