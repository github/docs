---
ms.openlocfilehash: 56d00170560f72e7e4fad39972422cf301b377be
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877127"
---
1. SSH dans {% data variables.product.product_location %}. Si votre instance comprend plusieurs nœuds, par exemple si la haute disponibilité ou la géoréplication sont configurées, connectez-vous via SSH au nœud principal. Si vous utilisez un cluster, vous pouvez vous connecter via SSH à n’importe quel nœud. Pour plus d’informations sur l’accès via SSH, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh) ».

   ```shell
   $ ssh -p 122 admin@<em>HOSTNAME</em>
   ```
