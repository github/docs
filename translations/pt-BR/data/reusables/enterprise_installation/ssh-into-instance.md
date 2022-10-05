---
ms.openlocfilehash: 56d00170560f72e7e4fad39972422cf301b377be
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147875661"
---
1. Entre com o SSH no {% data variables.product.product_location %}. Se sua instância for composta por vários nós, por exemplo, se a alta disponibilidade ou a replicação geográfica estiver configurada, efetue SSH no nó primário. Se você usar um cluster, poderá efetuar SSH em qualquer nó. Para obter mais informações sobre o acesso SSH, confira "[Como acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".

   ```shell
   $ ssh -p 122 admin@<em>HOSTNAME</em>
   ```
