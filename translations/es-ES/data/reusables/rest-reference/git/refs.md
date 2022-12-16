---
ms.openlocfilehash: 2a5d73e71b58e879a279c260eb136d7046dce231
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 04/07/2022
ms.locfileid: "141524248"
---
## <a name="references"></a>Referencias

Una referencia de Git (`git ref`) es simplemente un archivo que contiene un hash SHA-1 de una confirmación de Git.
Al hacer referencia a una confirmación de Git, puede usar la referencia de Git, que es un nombre fácil de recordar, en lugar del hash. La referencia de Git se puede reescribir para apuntar a una confirmación nueva. Una rama es solo una referencia de Git que almacena el hash de la nueva confirmación de Git. Estos puntos de conexión permiten leer y escribir [referencias](https://git-scm.com/book/en/v1/Git-Internals-Git-References) en la base de datos de Git en {% data variables.product.product_name %}.