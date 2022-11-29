---
ms.openlocfilehash: 81bb084ee5dcb540c77b4a7b55c67890bab2d47a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182289"
---
Pour les langages compilés pris en charge, vous pouvez utiliser l’action `autobuild` dans le {% data variables.code-scanning.codeql_workflow %} pour générer votre code. Cela vous évite d’avoir à spécifier des commandes de build explicites pour C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %}{% ifversion codeql-kotlin-beta %} Kotlin {% endif %} et Java.