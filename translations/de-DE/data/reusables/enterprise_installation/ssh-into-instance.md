---
ms.openlocfilehash: 56d00170560f72e7e4fad39972422cf301b377be
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879020"
---
1. Stelle eine SSH-Verbindung mit {% data variables.product.product_location %} her. Wenn deine Instanz mehrere Knoten umfasst, wenn z. B. Hochverfügbarkeit oder Georeplikation konfiguriert ist, wird SSH im primären Knoten konfiguriert. Wenn du einen Cluster verwendest, kannst du SSH in einen beliebigen Knoten einfügen. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).

   ```shell
   $ ssh -p 122 admin@<em>HOSTNAME</em>
   ```
