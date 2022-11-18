---
ms.openlocfilehash: 982b04961e4f780a5f1e284dad5620157f68569b
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161061"
---
Pour les langages compilés pris en charge, vous pouvez utiliser l’action `autobuild` dans le {% data variables.code-scanning.codeql_workflow %} pour générer votre code. Cela vous évite d’avoir à spécifier des commandes de build explicites pour C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} et Java.