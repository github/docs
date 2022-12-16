---
ms.openlocfilehash: a697342c2435c479a3309cfb4619c15d4521098e
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161226"
---
En règle générale, vous n’avez pas besoin de modifier le workflow par défaut pour {% data variables.product.prodname_code_scanning %}. Toutefois, si nécessaire, vous pouvez modifier le workflow pour personnaliser certains paramètres. Par exemple, vous pouvez modifier {% data variables.code-scanning.codeql_workflow %} de {% data variables.product.prodname_dotcom %} pour spécifier la fréquence des analyses, les langages ou les répertoires à analyser, et ce que {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} recherche dans votre code. Vous risquez aussi de devoir modifier le {% data variables.code-scanning.codeql_workflow %} si vous utilisez un ensemble spécifique de commandes pour compiler votre code.
