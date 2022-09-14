---
ms.openlocfilehash: 85c4e104344284797c4fc047569b99657a08d342
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147694221"
---
1. Use o comando `gpg --list-secret-keys --keyid-format=long` para listar a forma longa das chaves GPG para as quais você tem uma chave pública e privada. Uma chave privada é necessária para assinar commits ou tags.

   ```shell{:copy}
   $ gpg --list-secret-keys --keyid-format=long
   ```
   
   {% note %}

   **Observação:** algumas instalações de GPG no Linux podem exigir o uso de `gpg2 --list-keys --keyid-format LONG` para ver uma lista das chaves existentes. Nesse caso, você também precisará configurar o Git para usar `gpg2` executando `git config --global gpg.program gpg2`.

   {% endnote %}
