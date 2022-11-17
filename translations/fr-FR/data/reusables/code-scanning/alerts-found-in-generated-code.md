---
ms.openlocfilehash: bc31880a8f42a48324c81b13db40b9b1d09b1286
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108542"
---
Pour les langages compilés tels que Java,{% ifversion codeql-go-autobuild %} Go,{% endif %} C, C++ et C#, {% data variables.product.prodname_codeql %} analyse l’ensemble du code généré au moment de l’exécution du workflow. Pour limiter la quantité de code analysée, générez uniquement le code que vous souhaitez analyser en spécifiant vos propres étapes de génération dans un bloc `run`. Vous pouvez simultanément spécifier vos propres étapes de génération et utiliser les filtres `paths` et `paths-ignore` sur les événements `pull_request` et `push` afin que votre workflow ne s’exécute que quand du code spécifique est modifié. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) ».

Pour les langages tels que {% ifversion codeql-go-autobuild %}{% else %} Go,{% endif %} JavaScript, Python et TypeScript, que {% data variables.product.prodname_codeql %} analyse sans compiler le code source, vous pouvez spécifier des options de configuration supplémentaires afin de limiter la quantité de code à analyser. Pour plus d’informations, consultez « [Spécification des répertoires à analyser](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan) ».