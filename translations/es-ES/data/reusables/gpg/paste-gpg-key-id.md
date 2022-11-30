---
ms.openlocfilehash: 36346b397ec99040cea0b0ebd45a65d22352c865
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147614203"
---
1. Para configurar tu llave de firma GPG principal en Git, pega el siguiente texto en sustitución de la ID de la llave GPG principal que quieras utilizar. En este ejemplo, el id. de clave de GPG es `3AA5C34371567BD2`:
   ```shell
   $ git config --global user.signingkey <em>3AA5C34371567BD2</em>
   ```
   
   Como alternativa, al establecer una subclave, incluye el sufijo `!`. En este ejemplo, el id. de subclave de GPG es `4BB6D45482678BE3`:
   ```shell
   $ git config --global user.signingkey <em>4BB6D45482678BE3</em>!
   ```
