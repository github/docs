---
ms.openlocfilehash: 85c4e104344284797c4fc047569b99657a08d342
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147694228"
---
1. Use el comando `gpg --list-secret-keys --keyid-format=long` para enumerar el formato largo de las claves de GPG para las que tiene una clave pública y privada. Se requiere una llave privada para registrar confirmaciones o etiquetas.

   ```shell{:copy}
   $ gpg --list-secret-keys --keyid-format=long
   ```
   
   {% note %}

   **Nota:** Es posible que en algunas instalaciones de GPG en Linux sea necesario usar `gpg2 --list-keys --keyid-format LONG` para ver una lista de las claves existentes en su lugar. En este caso, también tendrá que configurar Git para que use `gpg2` mediante la ejecución de `git config --global gpg.program gpg2`.

   {% endnote %}
